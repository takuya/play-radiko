'use strict';
var radikoTt = function() {

    (function(window, $, Backbone, _, moment, undefined) {
        // DOM Ready
        loadTemplate({
            '#contents': '/apps/templates/timetable/index.html',
            '#footer': '/apps/templates/common/footer.html'
        }, function() {
            (function(Radiko) {

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

                // トップページコントローラー
                Radiko.Timetable = (function() {
                    // コンストラクター
                    var Timetable = function() {
                        // プロパティ
                        this.currentDate = null;
                        // コレクション
                        this.stationCollection = null;
                    };

                    // Backbone.Events をマージ
                    _.extend(Timetable.prototype, Backbone.Events);

                    // 初期化メソッド
                    Timetable.prototype.initialize = function() {
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
                    Timetable.prototype.createModels = function() {
                        this.stationsCollection = new StationsCollection();
                        this.stationCollection = new StationCollection(this.stationsCollection);
                    };

                    // ビューインスタンス生成メソッド
                    Timetable.prototype.createViews = function() {
                        $.Radiko.views.push(
                            new TimetableListView({
                                el: document.getElementById('program-table'),
                                collection: this.stationCollection
                            })
                        );
                    };

                    // フェッチメソッド
                    Timetable.prototype.fetchAll = function() {
                        return $.when.apply($, _.map(_.toArray(arguments), function(queue) {
                            return queue.model.fetch(queue.options || {});
                        }));
                    };

                    // イベントの購読を設定するメソッド
                    Timetable.prototype.subscribeAll = function() {
                        // キャッシュ
                        var _this = this;

                        $.Radiko.EventEmitter.on('change:currentDate', function(date) {
                            _this.stationCollection.setCurrentDate(moment(date, 'YYYYMMDD'));
                            _this.stationsCollection.fetch();
                        });
                    };

                    return Timetable;
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

                // 放送局モデル
                var StationModel = Backbone.Model.extend({
                    // 初期属性値
                    defaults: {
                        station_id: '',
                        name: '',
                        progs: []
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
                        this.currentDate = getDate();
                        this.listenTo(models, 'sync', this.onSync);
                    },

                    onSync: function(models) {
                        this.fetch();
                    },

                    // 日付を設定するメソッド
                    setCurrentDate: function(moment) {
                        this.currentDate = moment;
                    },

                    // APIのURLを返すメソッド
                    url: function() {
                        return '/v3/program/date/' + this.currentDate.format('YYYYMMDD') + '/' + this.areaId + '.xml';
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
                            // キャッシュ
                            var _this = this;
                            var $station = $(station);
                            var now = moment();
                            var stationId = $station.attr('id');

                            // 属性値を詰め込んで返す
                            return {
                                station_id: stationId,
                                name: $station.find('name').first().text(),
                                progs: _.map($station.find('prog'), function(prog) {
                                    // キャッシュ
                                    var $prog = $(prog);
                                    var ftl = $prog.attr('ftl');
                                    var tol = $prog.attr('tol');
                                    var ft = $prog.attr('ft');
                                    var to = $prog.attr('to');

                                    var addClass = '';
                                    var listenType = 0;
                                    var programUrl = '/#!/ts/' + stationId + '/' + ft;
                                    if (to <= now.format('YYYYMMDDHHmmss')) {
                                        addClass += 'item--past ';
                                        listenType = _this.getListenType(stationId, ft, to);
                                    } else if (ft >= now.format('YYYYMMDDHHmmss')) {
                                        addClass += 'item--future ';
                                    } else {
                                        programUrl = '/#!/live/' + stationId;
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
                                        program_url: programUrl,
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
                _.extend(StationCollection.prototype, $.Radiko.Mixins.Utility);

                // タイムテーブルビュー
                var TimetableListView = Backbone.View.extend({
                    // 初期化メソッド
                    initialize: function() {
                        // プロパティ
                        this.currentDate = null;

                        this.startPosition = null;

                        // イベントを購読する
                        this.listenTo(this.collection, 'sync', this.onSync);
                    },

                    // 同期ハンドラー
                    onSync: function(models) {
                        this.currentDate = this.collection.currentDate;
                        this.render(models);
                    },

                    // レンダラー
                    render: function(models) {
                        _.map($.Radiko.exclude_station_list, function(stationId) {
                            models.remove(models.where({
                                station_id: stationId
                            }));
                        });

                        var programs = models.toJSON();
                        var modelsJson = models.toJSON();
                        // 放送局が多い場合は、表示順をランダム化する
                        if (programs.length >= 7) {
                            if (this.startPosition === null) {
                                this.startPosition = this.getStartPosition(programs.length);
                            }
                            modelsJson = this.swapProgram(this.startPosition, programs);
                        }
                        this.renderProgramDate();
                        this.renderProgramChannel(modelsJson);
                        this.renderProgramItems(modelsJson);
                        // 放送局が少ない場合の処理
                        if (models.length < 7) {
                            var areaWidth = this.$el.find('.program-table__outer').width() - this.$el.find('.program-table__hour').width();
                            var singleWidth = ~~(areaWidth / models.length);
                            this.$el.find('.program-table__items .item-outer').width(singleWidth - 1);
                            this.$el.find('.program-table__channel').width(singleWidth - 9);
                            this.$el.find('.program-table__pager').hide();
                        }

                        setScrollInit();

                        $('.js-select-date').off('click', 'a');
                        $('.js-select-date').on('click', 'a', this.selectDateClickHandler);
                        return this;
                    },
                    renderProgramDate: function() {
                        var _this = this;

                        $('.program-table-header__list').html(JST['timetable/program-table-date']({
                            dateList: _.map(Array.apply(null, new Array(7)), function(d, i) {
                                var date = getDate().add(i, 'days');
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

                    renderProgramChannel: function(data) {

                        $('.program-table__channel-outer').html(JST['timetable/program-table-channel']({
                            models: data,
                            tableWidth: (data.length * 159 - 1) + 'px'
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

                        // 順番入れ替え
                        _models.unshift(_models.pop());

                        return {
                            dateList: _.map(Array.apply(null, new Array(7)), function(d, i) {
                                var date = getDate().add(i, 'days');
                                return {
                                    dateFullString: date.format('YYYYMMDD'),
                                    dateString: date.format('M/D'),
                                    dayString: date.format('(ddd)'),
                                    isCurrent: _this.currentDate.isSame(date, 'day'),
                                    isSat: date.day() === 6,
                                    isSun: date.day() === 0
                                }
                            }),
                            models: _models,
                            tableWidth: (_models.length * 159 - 1) + 'px'
                        };
                    },

                    // UIを引き当てるメソッド
                    defineUi: function() {

                    },

                    // DOM イベントマッピング
                    events: {
                        //'click .js-select-date': 'selectDateClickHandler',
                        'click .js-prev': 'prevClickHandler',
                        'click .js-next': 'nextClickHandler'
                    },

                    // 日付選択クリックイベントハンドラー
                    selectDateClickHandler: function(ev) {
                        ev.preventDefault();
                        $.Radiko.EventEmitter.trigger('change:currentDate', ev.currentTarget.hash.substring(1));
                        $('.program-table__items').fadeOut(500);
                        $('.program-table__items').fadeIn(500);
                    },

                    prevClickHandler: function(ev) {
                        ev.preventDefault();

                        // キャッシュ
                        var $scrolls = $('.js-scroll');
                        $scrolls.stop(true, true);
                        $scrolls.each(function(index, elScroll) {
                            var $items = $('.js-scroll-item', elScroll);
                            $items.last().insertBefore($items.first());
                            $scrolls.css('left', -159);
                        }).animate({
                            'left': 0
                        });
                        var nextPosition = this.startPosition - 1;
                        this.startPosition = nextPosition < 0 ? this.collection.length - 1 : nextPosition;
                    },

                    // ページ送り（次へ）クリックハンドラー
                    nextClickHandler: function(ev) {
                        ev.preventDefault();

                        // キャッシュ
                        var $scrolls = $('.js-scroll');
                        $scrolls.stop(true, true);
                        $scrolls.animate({
                            'left': -159
                        }).promise().done(function() {
                            $scrolls.each(function(index, elScroll) {
                                var $items = $('.js-scroll-item', elScroll);
                                $items.first().insertAfter($items.last());
                                $scrolls.css('left', 0);
                            });
                        });
                        var nextPosition = this.startPosition + 1;
                        this.startPosition = nextPosition >= this.collection.length ? 0 : nextPosition;
                    },

                    getStartPosition: function(programLength) {
                        return Math.floor(Math.random() * programLength);
                    },

                    swapProgram: function(startPosition, programs) {
                        var tmp1 = programs.slice(0, startPosition);
                        var tmp2 = programs.slice(startPosition);

                        return tmp2.concat(tmp1);
                    }
                });
            })($.Radiko || ($.Radiko = {}));

            $('#header').html(JST['common/header']({
                logo: '/apps/images/img_logo_blue_01.png'
            }));
            var areabox = _.template($('#tmpl-colorbox-area-list').html());
            $('#colorbox--area-list').html(areabox());
            $('.colorbox-area-list__list span[data-id=' + getAreaId() + ']').replaceWith(function() {
                return '<a href="/#!/timetable">' + $(this).html() + '</a>'
            });
            var timetable = new $.Radiko.Timetable();

            $.Radiko.EventEmitter.once('radikotimetable', function() {
                timetable.initialize();
                makeHeader();
                $('input[type="text"]').placeholder();
            });

            if (_.isString($.Radiko.area.id)) {
                $.Radiko.EventEmitter.trigger('radikotimetable');
            }

            if (window.area != undefined) {
                $('span.area').text(window.area);
            }

        });
    })(window, $, Backbone, _, moment);
};