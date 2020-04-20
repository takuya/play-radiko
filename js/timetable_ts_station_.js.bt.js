'use strict';
var radikoTss = function() {

    (function(window, $, Backbone, _, moment, undefined) {
        // DOM Ready
        loadTemplate({
            '#contents': '/apps/templates/timeshift/station.html',
            '#footer': '/apps/templates/common/footer.html'
        }, function() {
            var getDate = function() {
                var m = moment();

                // 選択した番組はその日の5時以降？
                if (m.format('YYYYMMDDHHmmss') >= m.format('YYYYMMDD050000')) {
                    return m;
                    // 選択した番組はその日の0時より後？
                } else {
                    return moment(m.subtract('day', 1).format('YYYY-MM-DD'));
                }
            };

            (function(Radiko) {
                // トップページコントローラー
                Radiko.TimetableSt = (function() {
                    // コンストラクター
                    var TimetableSt = function() {
                        // プロパティ
                        this.currentDate = null;
                        // コレクション
                        this.stationCollection = null;
                        this.weeklyProgramCollection = null;
                    };

                    // Backbone.Events をマージ
                    _.extend(TimetableSt.prototype, Backbone.Events);

                    // 初期化メソッド
                    TimetableSt.prototype.initialize = function() {
                        // コレクション・モデルインスタンスを生成する
                        this.createModels();
                        // ビューインスタンスを生成する
                        this.createViews();
                        // 情報を取得する
                        this.fetchAll({
                            model: this.stationsCollection
                        });
                        // イベントを購読する
                        this.subscribeAll();
                    };

                    // コレクション・モデルインスタンス生成メソッド
                    TimetableSt.prototype.createModels = function() {
                        this.stationsCollection = new StationsCollection();
                        this.stationCollection = new StationCollection(this.stationsCollection);
                        this.weeklyProgramCollection = new WeeklyProgramCollection(this.stationCollection);
                    };

                    // ビューインスタンス生成メソッド
                    TimetableSt.prototype.createViews = function() {
                        $.Radiko.views.push(
                            new TimetableListView({
                                el: document.getElementById('program-table'),
                                collection: {
                                    stations: this.stationCollection,
                                    weekly: this.weeklyProgramCollection
                                }
                            })
                        );
                        $.Radiko.views.push(
                            new SearchFormView({
                                el: document.getElementById('to-search')
                            })
                        );
                    };

                    // フェッチメソッド
                    TimetableSt.prototype.fetchAll = function() {
                        return $.when.apply($, _.map(_.toArray(arguments), function(queue) {
                            return queue.model.fetch(queue.options || {});
                        }));
                    };

                    // イベントの購読を設定するメソッド
                    TimetableSt.prototype.subscribeAll = function() {
                        // キャッシュ
                        var _this = this;

                        $.Radiko.EventEmitter.on('change:currentStation', function(st) {
                            _this.weeklyProgramCollection.setCurrentStation(st);
                            _this.weeklyProgramCollection.fetch();
                        });
                    };

                    return TimetableSt;
                })();

                // 放送局のModelクラス
                var StationsModel = Backbone.Model.extend({
                    defaults: {
                        id: "RGK", // 放送局のID
                        name: "RAGIKO" // 放送局の名前
                    }
                });

                // 放送局のCollectionクラス
                var StationsCollection = Backbone.Collection.extend({
                    model: StationsModel,

                    // APIからデータを取得する
                    initialize: function() {
                        this.areaId = getAreaId();
                    },

                    url: function() {
                        return "/v3/station/list/" + this.areaId + ".xml";
                    },

                    // XMLからそれぞれのデータを取得する
                    parse: function(data) {
                        var parsed = [];

                        $.Radiko.exclude_station_list = [];
                        $(data).find('station').each(function() {
                            var stationId = $(this).find('id').text();
                            var stationName = $(this).find('name').text();

                            // エリアフリーユーザの時、エリア外のエリアフリー非参加局は非表示
                            if (!_.contains($.Radiko.user_station_list, stationId) && $(this).find('areafree').text() == 0) {
                                $.Radiko.exclude_station_list.push(stationId);
                            }

                            parsed.push({
                                id: stationId,
                                name: stationName
                            })
                        });


                        return parsed;
                    },

                    fetch: function(options) {
                        options = options || {};
                        options.dataType = "xml";
                        return Backbone.Collection.prototype.fetch.call(this, options);
                    }

                });

                // 検索フォームビュー
                var SearchFormView = Backbone.View.extend({
                    initialize: function() {
                        // プロパティ
                        this.currentDate = moment();
                        this.minDate = moment().add(-7, 'd');
                        this.maxDate = moment().add(6, 'd');
                        this.areaId = $.Radiko.area.id;

                        // 初期レンダー
                        this.render();

                    },

                    // レンダラー
                    render: function() {
                        this.setDateOption();

                        var all = $('<option></option>', {
                            value: 'all',
                            text: '全国'
                        });
                        var area = $('<option></option>', {
                            value: '',
                            text: $.Radiko.areaList[parseInt(($.cookie('default_area_id').replace('JP', '')), 10) - 1]
                        });
                        if ($.Radiko.login_status.premium) {
                            this.$('[name="region_id"]').html(all[0].outerHTML + area[0].outerHTML);
                        } else {
                            this.$('[name="region_id"]').html(area[0].outerHTML + all[0].outerHTML);
                        }

                        var searchText = $('.search-area__form .form__text');
                        searchText.focus(function() {
                            $(this).animate({
                                backgroundColor: "#fff"
                            }, 500);
                        });
                        searchText.blur(function() {
                            $(this).animate({
                                backgroundColor: "#f2f2f2"
                            }, 500);
                        });

                        if ($('.easy-select-box').length == 0) {
                            $('.search-area__form select').easySelectBox({
                                onClick: function(data) {
                                    $('.search-area__form').find(".esb-displayer").append('<i class="icon icon--arrow-d"></i>');
                                }
                            });
                            $('.search-area__form').find(".esb-displayer").append('<i class="icon icon--arrow-d"></i>');
                        }

                        $.Radiko.Suggest.currentKeyWord = $('#search-form').find('input[name=key]').val();
                        $.Radiko.Suggest.bindHide();
                    },

                    setDateOption: function() {
                        var counter;
                        var select = this.$('select[name=date]');

                        var all = $('<option></option>', {
                            value: '',
                            text: 'すべて'
                        });

                        select.append(all[0].outerHTML);

                        var minDate = $('<option></option>', {
                            value: this.minDate.format('YYYY-MM-DD'),
                            text: this.minDate.format('YYYY年MM月DD日')
                        });

                        select.append(minDate[0].outerHTML);

                        for (counter = -6; counter <= -1; counter++) {
                            var bd = moment();
                            bd.add(counter, 'days');
                            var beforeDate = $('<option></option>', {
                                value: bd.format('YYYY-MM-DD'),
                                text: bd.format('YYYY年MM月DD日')
                            });
                            select.append(beforeDate[0].outerHTML);
                        }

                        var today = $('<option></option>', {
                            value: moment().format('YYYY-MM-DD'),
                            text: '本日'
                        });

                        select.append(today[0].outerHTML);

                        for (counter = 1; counter <= 5; counter++) {
                            var ad = moment();
                            ad.add(counter, 'days');
                            var afterDate = $('<option></option>', {
                                value: ad.format('YYYY-MM-DD'),
                                text: ad.format('YYYY年MM月DD日')
                            });
                            select.append(afterDate[0].outerHTML);
                        }

                        var maxDate = $('<option></option>', {
                            value: this.maxDate.format('YYYY-MM-DD'),
                            text: this.maxDate.format('YYYY年MM月DD日')
                        });

                        select.append(maxDate[0].outerHTML);
                    },
                    // DOMイベントマッピング
                    events: {
                        'keyup input[name=key]': $.Radiko.Suggest.keyUpHandler,
                        'change': 'changeHandler'
                    },

                    // チェンジイベントハンドラー
                    changeHandler: function(ev) {
                        var target = ev.target;
                        var name = target.name;
                        var val = target.value;

                        if (name === 'date') {
                            var startDay = '';
                            var endDay = '';

                            switch (val) {
                                case 'all':
                                    break;
                                case 'last':
                                    startDay = this.minDate.format('YYYY-MM-DD');
                                    endDay = this.minDate.format('YYYY-MM-DD');
                                    break;
                                case 'today':
                                    startDay = this.currentDate.format('YYYY-MM-DD');
                                    endDay = this.currentDate.format('YYYY-MM-DD');
                                    break;
                                case 'next':
                                    startDay = this.maxDate.format('YYYY-MM-DD');
                                    endDay = this.maxDate.format('YYYY-MM-DD');
                                    break;
                                default:
                                    startDay = val;
                                    endDay = val;
                                    break;
                            }
                            this.$('[name="start_day"]').val(startDay);
                            this.$('[name="end_day"]').val(endDay);
                        }
                    }
                });

                // 放送局モデル
                var StationModel = Backbone.Model.extend({
                    // 初期属性値
                    defaults: {
                        id: '',
                        name: ''
                    }
                });

                // 放送局コレクション
                var StationCollection = Backbone.Collection.extend({
                    // モデルコンストラクター
                    model: StationModel,

                    // 初期化メソッド
                    initialize: function(models) {
                        // プロパティ
                        this.areaId = getAreaId();
                        this.listenTo(models, 'sync', this.onSync);
                    },

                    onSync: function(models) {
                        this.fetch();
                    },

                    // APIのURLを返すメソッド
                    url: function() {
                        return '/v3/program/date/' + moment().format('YYYYMMDD') + '/' + this.areaId + '.xml';
                    },

                    // フェッチメソッド
                    fetch: function(options) {
                        return Backbone.Collection.prototype.fetch.call(this, _.extend({
                            dataType: 'xml'
                        }, options));
                    },

                    // APIレスポンスをパースするメソッド
                    parse: function(resp) {
                        // レスポンスを走査する
                        return _.map($('station', resp), function(station) {
                            // 属性値を詰め込んで返す
                            return {
                                id: $(station).attr('id'),
                                name: $(station).find('name').first().text()
                            };
                        }, this);
                    }
                });

                // 放送局モデル
                var WeeklyProgramModel = Backbone.Model.extend({
                    // 初期属性値
                    defaults: {
                        station_id: '',
                        name: '',
                        progs: []
                    }
                });

                // 放送局コレクション
                var WeeklyProgramCollection = Backbone.Collection.extend({
                    // モデルコンストラクター
                    model: WeeklyProgramModel,

                    // 初期化メソッド
                    initialize: function(collection) {
                        this.clickable = true;

                        this.listenTo(collection, 'sync', this.onSync);
                    },

                    onSync: function(models) {
                        _.map($.Radiko.exclude_station_list, function(stationId) {
                            models.remove(models.where({
                                id: stationId
                            }));
                        });
                        this.currentDate = moment();
                        this.currentStation = models.toJSON()[0].id;
                        this.fetch();
                    },

                    setCurrentStation: function(stationId) {
                        this.currentStation = stationId;
                    },

                    // APIのURLを返すメソッド
                    url: function() {
                        return '/v3/program/station/weekly/' + this.currentStation + '.xml';
                    },

                    // フェッチメソッド
                    fetch: function(options) {
                        return Backbone.Collection.prototype.fetch.call(this, _.extend({
                            dataType: 'xml'
                        }, options));
                    },

                    // APIレスポンスをパースするメソッド
                    parse: function(resp) {
                        var $station = $(resp).find('station');
                        var $progs = $(resp).find('progs');
                        $progs = $progs.filter(function(index, element) {
                            var m = moment();
                            if (m.format('YYYYMMDDHHmmss') < m.format('YYYYMMDD050000')) {
                                m.subtract(1, 'day');
                            }

                            return $(element).find('date').text() <= m.format('YYYYMMDD');
                        });

                        // レスポンスを走査する
                        return _.map($progs, function(progs) {
                            // キャッシュ
                            var _this = this;
                            var $progs = $(progs);
                            var now = moment();
                            var stationId = $station.attr('id');

                            // 属性値を詰め込んで返す
                            return {
                                station_id: stationId,
                                name: $station.find('name').first().text(),
                                progs: _.map($progs.find('prog'), function(prog) {
                                    // キャッシュ
                                    var $prog = $(prog);
                                    var ftl = $prog.attr('ftl');
                                    var tol = $prog.attr('tol');
                                    var ft = $prog.attr('ft');
                                    var to = $prog.attr('to');

                                    var addClass = '';
                                    var listenType = _this.getListenType(stationId, ft, to);
                                    if (to <= now.format('YYYYMMDDHHmmss')) {
                                        addClass += 'item--past ';
                                    } else if (ft >= now.format('YYYYMMDDHHmmss')) {
                                        addClass += 'item--future ';
                                    } else {
                                        addClass += 'item--onair ';
                                    }
                                    return {
                                        id: stationId,
                                        ftl: ftl,
                                        ft: ft,
                                        tol: tol,
                                        dur: parseInt($prog.attr('dur'), 10),
                                        title: $prog.find('title').first().text(),
                                        pfm: $prog.find('pfm').first().text(),
                                        addClass: addClass,
                                        program_url: '/#!/ts/' + stationId + '/' + ft,
                                        scheduleString: _this.getScheduleString(ft, to),
                                        listenType: listenType
                                    }
                                })
                            };
                        }, this);
                    },
                    getScheduleString: function(ft, to) {
                        var ftmt = moment(ft, 'YYYYMMDDHHmmss');
                        var tomt = moment(to, 'YYYYMMDDHHmmss');
                        var radioHours = translateRadikoTimeHours(ftmt, tomt);

                        var ftTime = sprintf("%02d:%02d", radioHours.ft_hour, ftmt.minute());
                        var toTime = sprintf("%02d:%02d", radioHours.to_hour, tomt.minute());

                        return ftTime + '〜' + toTime;
                    }

                });
                _.extend(WeeklyProgramCollection.prototype, $.Radiko.Mixins.Utility);

                // タイムテーブルビュー
                var TimetableListView = Backbone.View.extend({
                    // 初期化メソッド
                    initialize: function() {
                        // プロパティ
                        this.currentDate = null;
                        this.currentStation = null;

                        this.startPosition = 0;

                        // イベントを購読する
                        this.listenTo(this.collection.weekly, 'sync', this.onSync);
                    },

                    // 同期ハンドラー
                    onSync: function(models) {
                        var station = this.collection.stations;
                        _.map($.Radiko.exclude_station_list, function(stationId) {
                            station.remove(station.where({
                                id: stationId
                            }));
                        });

                        this.stations = station.toJSON();
                        this.currentDate = models.currentDate;
                        this.currentStation = models.currentStation;
                        this.render(models);
                    },

                    // レンダラー
                    render: function(models) {
                        _.map($.Radiko.exclude_station_list, function(stationId) {
                            models.remove(models.where({
                                id: stationId
                            }));
                        });

                        this.renderProgramsStation();
                        this.renderProgramDate();
                        this.renderProgramItems(models.toJSON());
                        setScrollInit();

                        $('.js-select-date').off('click', 'a');
                        $('.js-select-date').on('click', 'a', this.selectDateClickHandler);
                        return this;
                    },

                    renderProgramsStation: function() {
                        this.stations = this.swapItems(this.startPosition, this.stations);

                        $('.program-table-header__list').html(JST['ts-station/program-table-station']({
                            stations: this.stations,
                            current: this.currentStation
                        }));
                    },

                    renderProgramDate: function() {
                        var _this = this;

                        $('.program-table__date-outer').html(JST['ts-station/program-table-date']({
                            dateList: _.map(Array.apply(null, new Array(8)), function(d, i) {
                                var date = getDate().add(i - 7, 'days');
                                return {
                                    dateFullString: date.format('YYYYMMDD'),
                                    dateString: date.format('M/D'),
                                    dayString: date.format('(ddd)'),
                                    isCurrent: _this.currentDate.isSame(date, 'day'),
                                    isSat: date.day() === 6,
                                    isSun: date.day() === 0
                                }
                            })
                        }));
                    },

                    renderProgramItems: function(data) {

                        $('.program-table__items').html(JST['common/program-table-items']({
                            models: data,
                            tableWidth: (data.length * 159 - 1) + 'px'
                        }));
                    },

                    getViewModel: function(models) {
                        // キャッシュ
                        var _this = this;
                        var _models = models.toJSON();

                        var currentPos;
                        for (var i = 0; i < this.stations.length; i++) {
                            if (this.currentStation == this.stations[i].id) {
                                currentPos = i;
                                break;
                            }
                        }

                        var startArr = this.stations.slice(currentPos);
                        var endArr = this.stations.slice(0, currentPos);
                        this.stations = startArr.concat(endArr);

                        return {
                            dateList: _.map(Array.apply(null, new Array(8)), function(d, i) {

                                var sub = 7;

                                if (moment().format('HHmmdd') <= '050000') {

                                    sub = 8;
                                }

                                var date = moment().add(i - sub, 'days');
                                return {
                                    dateFullString: date.format('YYYYMMDD'),
                                    dateString: date.format('M/D'),
                                    dayString: date.format('(ddd)'),
                                    isCurrent: _this.currentDate.isSame(date, 'day'),
                                    isSat: date.day() === 6,
                                    isSun: date.day() === 0
                                }
                            }),
                            stations: this.stations,
                            models: _models,
                            current: this.currentStation,
                            tableWidth: (119 * 8 - 1) + 'px'
                        };
                    },

                    // UIを引き当てるメソッド
                    defineUi: function() {

                    },

                    // DOM イベントマッピング
                    events: {
                        //'click .js-select-date': 'selectDateClickHandler',
                        'click .js-prev': 'prevClickHandler',
                        'click .js-next': 'nextClickHandler',
                        'click .js-prev2': 'prevClickHandler2',
                        'click .js-next2': 'nextClickHandler2'
                    },

                    // 日付選択クリックイベントハンドラー
                    selectDateClickHandler: function(ev) {
                        ev.preventDefault();
                        var programTableItems = $('.program-table__items');
                        programTableItems.fadeOut(500);
                        programTableItems.fadeIn(500);

                        $.Radiko.EventEmitter.trigger('change:currentStation', ev.currentTarget.hash.substring(1));
                    },

                    prevClickHandler2: function(ev) {
                        ev.preventDefault();

                        // キャッシュ
                        var $scrolls = $('.js-scroll2');
                        $scrolls.stop(true, true);
                        $scrolls.each(function(index, elScroll) {
                            var $items = $('.js-scroll-item2', elScroll);
                            $items.last().insertBefore($items.first());
                            $scrolls.css('left', -159);
                        }).animate({
                            'left': 0
                        });
                        var nextPosition = this.startPosition - 1;
                        this.startPosition = nextPosition < 0 ? this.stations.length - 1 : nextPosition;
                    },

                    // ページ送り（次へ）クリックハンドラー
                    nextClickHandler2: function(ev) {
                        ev.preventDefault();

                        var $scrolls = $('.js-scroll2');
                        $scrolls.stop(true, true);
                        $scrolls.animate({
                            'left': -159
                        }).promise().done(function() {
                            $scrolls.each(function(index, elScroll) {
                                var $items = $('.js-scroll-item2', elScroll);
                                $items.first().insertAfter($items.last());
                                $scrolls.css('left', 0);
                            });
                        });
                        var nextPosition = this.startPosition + 1;
                        this.startPosition = nextPosition >= this.stations.length ? 0 : nextPosition;
                    },

                    prevClickHandler: function(ev) {
                        ev.preventDefault();

                        // キャッシュ
                        var $scrolls = $('.js-scroll');
                        $scrolls.stop(true, true);
                        $scrolls.animate({
                            'left': 0
                        }).promise().done(function() {

                            $scrolls.each(function(index, elScroll) {
                                var $items = $('.js-scroll-item', elScroll);
                                $items.last().insertBefore($items.first());
                                $scrolls.css('left', -159);
                            });
                        });
                    },

                    // ページ送り（次へ）クリックハンドラー
                    nextClickHandler: function(ev) {
                        ev.preventDefault();

                        var $scrolls = $('.js-scroll');
                        $scrolls.stop(true, true);
                        $scrolls.animate({
                            'left': -159 * 2
                        }).promise().done(function() {
                            $scrolls.each(function(index, elScroll) {
                                var $items = $('.js-scroll-item', elScroll);
                                $items.first().insertAfter($items.last());
                                $scrolls.css('left', -159);
                            });
                        });
                    },

                    swapItems: function(startPosition, items) {
                        var tmp1 = items.slice(0, startPosition);
                        var tmp2 = items.slice(startPosition);

                        return tmp2.concat(tmp1);
                    }
                });
            })($.Radiko || ($.Radiko = {}));

            $('#header').html(JST['common/header']({
                logo: '/apps/images/img_logo_red_01.png'
            }));
            $('#colorbox--area-list').html(JST['timeshift/colorbox-area-list']());
            $('.colorbox-area-list__list span[data-id=' + getAreaId() + ']').replaceWith(function() {
                return '<a href="/#!/timeshift/s">' + $(this).html() + '</a>'
            });
            var timetable = new $.Radiko.TimetableSt();

            $.Radiko.EventEmitter.once('radikotsstation', function() {
                timetable.initialize();
                makeHeader();
                $('input[type="text"]').placeholder();
            });

            if (_.isString($.Radiko.area.id)) {
                $.Radiko.EventEmitter.trigger('radikotsstation');
            }

            if (window.area != undefined) {
                $('span.area').text(window.area);
            }


        });
    })(window, jQuery, Backbone, _, moment);
};