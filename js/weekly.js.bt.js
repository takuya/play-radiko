'use strict';
var radikoTw = function(_stationId) {

    (function(window, $, Backbone, _, moment, undefined) {
        // DOM Ready
        loadTemplate({
            '#contents': '/apps/templates/timetable/weekly.html',
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
                Radiko.Weekly = (function() {
                    // コンストラクター
                    var Weekly = function() {
                        // プロパティ
                        this.currentDate = null;

                        // コレクション
                        this.stationCollection = null;
                        this.otherProgramsCollection = null;
                    };

                    // Backbone.Events をマージ
                    _.extend(Weekly.prototype, Backbone.Events);

                    // 初期化メソッド
                    Weekly.prototype.initialize = function() {
                        // コレクション・モデルインスタンスを生成する
                        this.createModels();
                        // ビューインスタンスを生成する
                        this.createViews();
                        // 情報を取得する
                        this.fetchAll({
                            model: this.stationCollection
                        }, {
                            model: this.otherProgramsCollection
                        });
                        // イベントを購読する
                        this.subscribeAll();
                    };

                    // コレクション・モデルインスタンス生成メソッド
                    Weekly.prototype.createModels = function() {
                        this.stationCollection = new StationCollection();
                        this.otherProgramsCollection = new OtherProgramsCollection();
                    };

                    // ビューインスタンス生成メソッド
                    Weekly.prototype.createViews = function() {
                        $.Radiko.views.push(
                            new NowOnAirView({
                                el: document.getElementById('nowonair-table'),
                                collection: this.stationCollection
                            })
                        );
                        $.Radiko.views.push(
                            new WeeklyListView({
                                el: document.getElementById('program-table'),
                                collection: this.stationCollection
                            })
                        );
                        $.Radiko.views.push(
                            new OtherProgramsView({
                                el: document.getElementById('radioweb-table'),
                                collection: this.otherProgramsCollection
                            })
                        );
                    };

                    // フェッチメソッド
                    Weekly.prototype.fetchAll = function() {
                        return $.when.apply($, _.map(_.toArray(arguments), function(queue) {
                            return queue.model.fetch(queue.options || {});
                        }));
                    };

                    // イベントの購読を設定するメソッド
                    Weekly.prototype.subscribeAll = function() {
                        // キャッシュ
                        var _this = this;

                        $.Radiko.EventEmitter.on('change:currentDate', function(date) {
                            _this.stationCollection.setCurrentDate(moment(date, 'YYYYMMDD'));
                            _this.stationCollection.fetch();
                        });
                    };

                    return Weekly;
                })();


                // 放送局モデル
                var StationModel = Backbone.Model.extend({
                    // 初期属性値
                    defaults: {}
                });

                // 放送局コレクション
                var StationCollection = Backbone.Collection.extend({
                    // モデルコンストラクター
                    model: StationModel,

                    // 初期化メソッド
                    initialize: function() {
                        // プロパティ
                        this.stationId = _stationId;
                        this.areaId = $.Radiko.area.id;
                        this.currentDate = moment();

                        if (this.currentDate.format('HHmmdd') <= '050000') {

                            this.currentDate.subtract(1, 'day');
                        }
                    },

                    // 日付を設定するメソッド
                    setCurrentDate: function(moment) {

                        this.currentDate = moment;
                    },

                    // APIのURLを返すメソッド
                    url: function() {
                        return '/v3/program/station/weekly/' + this.stationId + '.xml';
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
                        return _.map($('progs', resp), function(progs) {
                            // キャッシュ
                            var _this = this;
                            var $progs = $(progs);
                            var now = getDate();
                            var stationId = $progs.parent('station').attr('id');

                            return {
                                date: $progs.find('date').text(),
                                progs: _.map($progs.find('prog'), function(prog) {
                                    // キャッシュ
                                    var $prog = $(prog);
                                    var ftl = $prog.attr('ftl');
                                    var tol = $prog.attr('tol');
                                    var ft = $prog.attr('ft');
                                    var to = $prog.attr('to');

                                    now = moment();

                                    var addClass = '';
                                    var programUrl = '/#!/ts/' + stationId + '/' + ft;
                                    var listenType = 0;
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
                                        to: to,
                                        tol: tol,
                                        dur: parseInt($prog.attr('dur'), 10),
                                        title: $prog.find('title').first().text(),
                                        pfm: $prog.find('pfm').first().text(),
                                        img: $prog.find('img').text(),
                                        desc: $prog.find('desc').text().replace(/(<([^>]+)>)/ig, ""),
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

                var NowOnAirView = Backbone.View.extend({
                    initialize: function() {
                        this.listenTo(this.collection, 'sync', this.onSync);
                    },

                    onSync: function(models) {
                        this.render(models);
                    },

                    render: function(models) {
                        var nowProgram = this.getViewModel(models);
                        $('.heading-area__title img')
                            .attr('src', '/station/logo/' + nowProgram.id + '/logo_medium.png');
                        $('#nowonair-table')
                            .html(JST['weekly/nowonair-table'](nowProgram));
                    },
                    getViewModel: function(models) {
                        var nowMoment = getDate();
                        var nowRadikoFormat = nowMoment.format('YYYYMMDDHHmmss');

                        var toDayPrograms = models.findWhere({
                            date: nowMoment.format('YYYYMMDD')
                        });
                        var filteringPrograms = _.filter(toDayPrograms.get('progs'), function(program) {
                            return program.to >= nowRadikoFormat;
                        });

                        if (filteringPrograms[0]['img'] == '') {
                            filteringPrograms[0]['img'] = '/images/radio-api-noimage_live.png';
                        }

                        return filteringPrograms[0];
                    }
                });

                // タイムテーブルビュー
                var WeeklyListView = Backbone.View.extend({
                    // 初期化メソッド
                    initialize: function() {
                        // プロパティ
                        this.currentDate = null;

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
                        var modelsJson = models.toJSON();
                        this.renderProgramDate();
                        this.renderProgramItems(modelsJson);

                        this.defineUi();

                        $(".img-list__text").each(function() {
                            var size = 35;
                            var txt = $(this).text();
                            var suffix = '…';
                            var b = 0;
                            for (var i = 0; i < txt.length; i++) {
                                b += txt.charCodeAt(i) <= 255 ? 0.5 : 1;
                                if (b > size) {
                                    txt = txt.substr(0, i) + suffix;
                                    break;
                                }
                            }
                            $(this).text(txt);
                        });

                        setScrollInit();
                        return this;
                    },

                    renderProgramDate: function() {
                        var _this = this;

                        var beforeDate = _.map(Array.apply(null, new Array(7)), function(d, i) {
                            var date = getDate().subtract(i + 1, 'days');
                            return {
                                dateFullString: date.format('YYYYMMDD'),
                                dateString: date.format('M/D'),
                                dayString: date.format('(ddd)'),
                                isCurrent: _this.currentDate.isSame(date, 'day'),
                                isSat: date.day() === 6,
                                isSun: date.day() === 0
                            }
                        });

                        beforeDate.reverse();

                        var afterDate = _.map(Array.apply(null, new Array(7)), function(d, i) {
                            var date = getDate().add(i, 'days');
                            return {
                                dateFullString: date.format('YYYYMMDD'),
                                dateString: date.format('M/D'),
                                dayString: date.format('(ddd)'),
                                isCurrent: _this.currentDate.isSame(date, 'day'),
                                isSat: date.day() === 6,
                                isSun: date.day() === 0
                            }
                        });

                        $('.program-table__date-outer').html(JST['live-detail/program-table-date']({
                            dateList: beforeDate.concat(afterDate)
                        }));
                    },

                    renderProgramItems: function(data) {

                        var beforeProgs = data.splice(0, 7);

                        $('.program-table__items').html(JST['common/program-table-items']({
                            models: beforeProgs.concat(data),
                            tableWidth: (data.length * 159 - 1) + 'px'
                        }));
                    },

                    // UIを引き当てるメソッド
                    defineUi: function() {
                        $('.js-scroll').css('left', '-945px');
                        $('.js-next').hide();
                    },

                    // DOM イベントマッピング
                    events: {
                        'click .js-select-date': 'selectDateClickHandler',
                        'click .js-prev': 'prevClickHandler',
                        'click .js-next': 'nextClickHandler'
                    },

                    // 日付選択クリックイベントハンドラー
                    selectDateClickHandler: function(ev) {
                        ev.preventDefault();

                        $.Radiko.EventEmitter.trigger('change:currentDate', ev.target.hash.substring(1));
                    },

                    prevClickHandler: function(ev) {
                        ev.preventDefault();

                        if ($('.js-prev').hasClass('btn-disable')) {
                            return;
                        }

                        // キャッシュ
                        var $scrolls = $('.js-scroll');
                        var left = parseInt($scrolls.css('left').replace('px', ''));

                        $scrolls.stop(true, true);
                        $('.js-prev').addClass('btn-disable');
                        $scrolls.animate({
                            'left': left + 135 // -120 * 2
                        }).promise().done(function() {

                            $scrolls.each(function(index, elScroll) {
                                $scrolls.css('left', left + 135);
                            });
                            $('.js-prev').removeClass('btn-disable');
                            var left = parseInt($scrolls.css('left').replace('px', ''));
                            if (left >= 0) {
                                $scrolls.css('left', 0);
                                $('.js-next').show();
                                $('.js-prev').hide();
                            } else {
                                $('.js-next').show();
                            }
                        });
                    },

                    // ページ送り（次へ）クリックハンドラー
                    nextClickHandler: function(ev) {
                        ev.preventDefault();

                        if ($('.js-next').hasClass('btn-disable')) {
                            return;
                        }

                        var $scrolls = $('.js-scroll');
                        var left = parseInt($scrolls.css('left').replace('px', ''));
                        $('.js-next').addClass('btn-disable');

                        $scrolls.stop(true, true);
                        $scrolls.each(function(index, elScroll) {
                            $scrolls.css('left', left);
                        }).animate({
                            'left': left - 135
                        }, function() {

                            $('.js-next').removeClass('btn-disable');
                            var left = parseInt($scrolls.css('left').replace('px', ''));
                            if (left <= -945) {
                                $scrolls.css('left', -945);
                                $('.js-prev').show();
                                $('.js-next').hide();
                            } else {
                                $('.js-prev').show();
                            }
                        });
                    }
                });

                // 現在放送中の番組のModelクラス
                var OtherProgramModel = Backbone.Model.extend({
                    defaults: {
                        models: []
                    }
                });

                // 他の番組情報、イベント情報のCollectionクラス
                var OtherProgramsCollection = Backbone.Collection.extend({
                    model: OtherProgramModel,

                    // APIからデータを取得する

                    url: function() {
                        return "/v3/radioweb/bansen/station/" + _stationId + ".xml";
                        // return "/v3/radioweb/bansen/station/" + this.getStationId() + ".xml";
                    },

                    // XMLからそれぞれのデータを取得する
                    parse: function(resp) {
                        return _.map($('item', resp), function(item) {
                            var $item = $(item);

                            // 属性値を詰め込んで返す
                            return {
                                image_url: $item.find('image_url').text(),
                                program_name: $item.find('program_name').text(),
                                description: $item.find('description').text().replace(/(<([^>]+)>)/ig, ""),
                                onair: $item.find('onair').text(),
                                type: $item.find('type').text(),
                                url: $item.find('radioweb_detail_url').text()
                            };
                        }, this);
                    },

                    fetch: function(options) {
                        options = options || {};
                        options.dataType = "xml";
                        return Backbone.Collection.prototype.fetch.call(this, options);
                    }
                });

                _.extend(OtherProgramsCollection.prototype, $.Radiko.Mixins.Utility);

                var OtherProgramsView = Backbone.View.extend({

                    initialize: function() {
                        // 正常なHTTPステータスが返ってきたらonSyncを実行
                        this.listenTo(this.collection, "sync", this.onSync);
                    },
                    onSync: function(models) {
                        // コレクションをレンダリングする
                        this.render(models);
                    },
                    render: function(models) {
                        // 再生プレーヤーを表示
                        var data = models.toJSON();
                        $('#radioweb-table').html(JST['common/others-program']({
                            models: data
                        }));

                        $(".img-list__text").each(function() {
                            var size = 35;
                            var txt = $(this).text();
                            var suffix = '…';
                            var b = 0;
                            for (var i = 0; i < txt.length; i++) {
                                b += txt.charCodeAt(i) <= 255 ? 0.5 : 1;
                                if (b > size) {
                                    txt = txt.substr(0, i) + suffix;
                                    break;
                                }
                            }
                            $(this).text(txt);
                        });

                        $(".img-list__item").heightLine();

                        return this;
                    }
                });

            })($.Radiko || ($.Radiko = {}));

            $('#header').html(JST['common/header']({
                logo: '/apps/images/img_logo_blue_01.png'
            }));
            var weekly = new $.Radiko.Weekly();

            $.Radiko.EventEmitter.once('radikoweekly', function() {
                weekly.initialize();
                makeHeader();
                $('input[type="text"]').placeholder();
            });

            if (_.isString($.Radiko.area.id)) {
                $.Radiko.EventEmitter.trigger('radikoweekly');
            }

            if (window.area != undefined) {
                $('span.area').text(window.area);
            }

        });
    })(window, jQuery, Backbone, _, moment);
};