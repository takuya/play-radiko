'use strict';
var areaFree = function() {

    (function(window, $, Backbone, _, moment, undefined) {
        // DOM Ready
        loadTemplate({
            '#contents': '/apps/templates/areafree/index.html',
            '#footer': '/apps/templates/common/footer.html'
        }, function() {
            (function(Radiko) {

                // トップページコントローラー
                Radiko.areaFree = (function() {

                    // コンストラクター
                    var areaFree = function() {
                        // コレクション
                        this.areaFreeCollection = null;
                        this.nowOnAirCollection = null;
                        this.stationListCollection = null;
                    };

                    // Backbone.Events をマージ
                    _.extend(areaFree.prototype, Backbone.Events);


                    // 初期化メソッド
                    areaFree.prototype.initialize = function() {
                        // コレクション・モデルインスタンスを生成する
                        this.createModels();

                        // ビューインスタンスを生成する
                        this.createViews();
                        // 情報を取得する
                        this.fetchAll({
                            model: this.areaFreeCollection
                        }, {
                            model: this.nowOnAirCollection
                        });
                        // イベントを購読する
                        this.subscribeAll();
                    };

                    // コレクション・モデルインスタンス生成メソッド
                    areaFree.prototype.createModels = function() {
                        this.areaFreeCollection = new AreaFreeCollection();
                        this.nowOnAirCollection = new NowOnAirCollection();
                        // これは遅延してロードする
                        this.stationListCollection = new StationListCollection(this.areaFreeCollection);
                    };

                    // ビューインスタンス生成メソッド
                    areaFree.prototype.createViews = function() {
                        $.Radiko.views.push(
                            new AreaFreeView({
                                el: document.getElementById('now_on_air'),
                                collection: this.areaFreeCollection
                            })
                        );
                        $.Radiko.views.push(
                            new NowOnAirListView({
                                el: document.getElementById('now_on_air'),
                                collection: {
                                    noa: this.nowOnAirCollection,
                                    stations: this.areaFreeCollection
                                }
                            })
                        );
                        $.Radiko.views.push(
                            new StationsView({
                                collection: this.stationListCollection
                            })
                        );
                    };

                    // フェッチメソッド
                    areaFree.prototype.fetchAll = function() {
                        return $.when.apply($, _.map(_.toArray(arguments), function(queue) {
                            return queue.model.fetch(queue.options || {});
                        }));
                    };

                    areaFree.prototype.subscribeAll = function() {
                        var self = this;
                        $.Radiko.EventEmitter.off('change:area');
                        $.Radiko.EventEmitter.on('change:area', function(area_id) {
                            self.nowOnAirCollection.fetch({
                                area_id: area_id
                            });
                            self.stationListCollection.fetch({
                                area_id: area_id
                            });
                        });
                    };

                    return areaFree;
                })();

                var AreaFreeModel = Backbone.Model.extend({
                    'default': {
                        region_name: '',
                        station: []
                    }

                });

                var AreaFreeCollection = Backbone.Collection.extend({
                    model: AreaFreeModel,
                    url: '/v3/station/region/full.xml',

                    parse: function(data) {

                        $.each($.Radiko.areaListParRegion, function(regionName, areas) {
                            $.each(areas, function(index, area) {
                                if (area.id === getAreaId()) {
                                    $.cookie('user_region', regionName);
                                }
                            });
                        });

                        return _.map($('stations', data), function(stations) {
                            // キャッシュ
                            var $stations = $(stations);

                            // 属性値を詰め込んで返す
                            return {
                                id: $stations.attr('region_id'),
                                name: $stations.attr('region_name'),
                                stations: _.map($stations.find('station'), function(station) {

                                    var $station = $(station);

                                    return {
                                        stationId: $station.find('id').text(),
                                        name: $station.find('name').text(),
                                        areafree: $station.find('areafree').text(),
                                        timefree: $station.find('timefree').text(),
                                        logo: $station.find('logo').first().text(),
                                        areaId: $station.find('area_id').text()
                                    };
                                })
                            };
                        }, this);
                    },
                    fetch: function(options) {
                        options = options || {};
                        options.dataType = "xml";
                        return Backbone.Collection.prototype.fetch.call(this, options);
                    },
                    initialize: function() {
                        this.areaId = getAreaId() || $.cookie('default_area_id');
                        this.listenTo(this.collection, 'sync', this.onSync);
                    },
                    onSync: function(models) {
                        this.render(models);
                    }

                });

                var AreaFreeView = Backbone.View.extend({
                    // 初期化メソッド
                    initialize: function() {
                        // イベントを購読する
                        this.listenTo(this.collection, "sync", this.onSync);
                    },
                    // 同期ハンドラー
                    onSync: function(models) {
                        this.render(models);
                    },
                    // レンダラー
                    render: function(models) {
                        this.renderRegionTab(models.toJSON());
                        this.renderAreaList();
                        return this;
                    },
                    tabClickHandler: function(e) {
                        e.preventDefault();

                        $('.tab-list .item__selected').removeClass('item__selected');
                        $(e.currentTarget).addClass('item__selected');

                        $('.link-list').html(JST['areafree/area-list']({
                            stations: $.Radiko.areaListParRegion[$(e.currentTarget).attr('href')],
                            user_area: $.cookie('default_area_id')
                        }));
                    },
                    listClickHandler: function(e) {
                        e.preventDefault();

                        $('.link-list .item__selected').removeClass('item__selected');
                        $(e.currentTarget).addClass('item__selected');

                        var target_area_id = $(e.currentTarget).attr('href');
                        if (!$.Radiko.login_status.areafree) {
                            $.cookie('areafree_id', target_area_id);
                        }
                        $.Radiko.EventEmitter.trigger('change:area', target_area_id);
                    },
                    renderRegionTab: function(data) {
                        var zenkokuIndex = _.findIndex(data, function(region) {
                            return region["id"] === "zenkoku";
                        });
                        if (zenkokuIndex !== -1) {
                            data.splice(zenkokuIndex, 1);
                        }
                        $('.tab-list').html(JST['areafree/region-list']({
                            regions: data,
                            user_region: $.cookie('user_region')
                        }));

                        $('.tab-list a').on('click', this.tabClickHandler);
                    },
                    renderAreaList: function() {
                        $('.link-list').html(JST['areafree/area-list']({
                            stations: $.Radiko.areaListParRegion[$.cookie('user_region')],
                            user_area: getAreaId()
                        }));

                        $('.link-list').on('click', 'a', this.listClickHandler);
                    }
                });
                // 番組モデル
                var ProgramModel = Backbone.Model.extend({
                    defaults: {
                        id: '',
                        name: '',
                        progTitle: '',
                        progPfm: '',
                        progSchedule: '',
                        progImage: ''
                    }
                });

                // 現在配信中番組コレクション
                var NowOnAirCollection = Backbone.Collection.extend({
                    // モデルコンストラクター
                    model: ProgramModel,

                    // 初期化メソッド
                    initialize: function() {
                        // プロパティ
                        // 選択エリア
                        this.area_id = getAreaId();
                    },

                    // APIのURLを返すメソッド
                    url: function() {
                        return '/v3/program/now/' + this.area_id + '.xml';
                    },

                    // フェッチメソッド
                    fetch: function(options) {
                        if (options && options.area_id) {
                            this.area_id = options.area_id;
                        }
                        return Backbone.Collection.prototype.fetch.call(this, _.extend({
                            dataType: 'xml',
                            cache: true,
                            expires: 60 * 3
                        }, options));
                    },

                    // APIレスポンスをパースするメソッド
                    parse: function(resp) {
                        // レスポンスを走査する
                        return _.map($('station', resp), function(station) {
                            // キャッシュ
                            var $station = $(station);
                            var $prog = $station.find('prog').first();

                            var img = $prog.find('img').text();
                            if (img == '') {
                                img = '/images/radio-api-noimage_live.png';
                            }
                            // 属性値を詰め込んで返す
                            return {
                                id: $station.attr('id'),
                                areaId: this.area_id,
                                name: $station.find('name').first().text(),
                                progTitle: $prog.find('title').first().text(),
                                progPfm: $prog.find('pfm').first().text(),
                                progSchedule: (this.dateToFormatedString($prog.attr('ft'), 'M月D日（ddd） HH:mm')) + '-' + (this.dateToFormatedString($prog.attr('to'), 'HH:mm')),
                                progImage: img,
                                isShow: true
                            };
                        }, this);
                    }
                });
                // mixin をマージ
                _.extend(NowOnAirCollection.prototype, $.Radiko.Mixins.Utility);

                // 現在配信中番組リストビュー
                var NowOnAirListView = Backbone.View.extend({
                    // 初期化メソッド
                    initialize: function() {
                        this.stations = null;
                        this.noa = null;
                        // イベントを購読する
                        this.listenTo(this.collection.noa, 'sync', this.onSyncNoa);
                        this.listenTo(this.collection.stations, 'sync', this.onSyncStations);
                    },
                    // 同期ハンドラー
                    onSyncNoa: function(models) {
                        this.noa = models;
                        this.onSync();
                    },
                    onSyncStations: function(models) {
                        var self = this;
                        this.stations = {};
                        _.each(models.toJSON(), function(r) {
                            _.each(r.stations, function(s) {
                                self.stations[s.stationId] = s;
                            });
                        });
                        this.onSync();
                    },
                    onSync: function() {
                        if (this.noa && this.stations) {
                            this.render(this.noa);
                        }
                    },

                    // レンダラー
                    render: function(models) {
                        this.$el.empty().html(JST['common/onair-program']({
                            'models': this.getViewModel(models)
                        }));
                        $(".img-list>.img-list__item").heightLine();

                        // 非エリアフリーの場合のみ設定
                        if (!$.Radiko.login_status.areafree) {
                            $("li[class='img-list__item'] a").on("click", this.noaClickHandler);
                        }

                        return this;
                    },
                    getViewModel: function(models) {
                        var self = this;
                        var noa = models.toJSON();
                        var ret = [];
                        _.each(noa, function(p) {
                            var stationInfo = self.stations[p.id];
                            // areafree非参加局を外す
                            if (stationInfo && +stationInfo.areafree === 0) {
                                return;
                            }
                            ret.push(p);
                        });
                        return ret;
                    },
                    noaClickHandler: function(e) {
                        // 自分のエリア内の局？
                        var station_id = $(e.currentTarget).data("station_id");
                        if ($.Radiko.isUserAreaStation(station_id)) {
                            return true;
                        }
                        // そうでないならNG
                        $.colorbox({
                            width: "60%",
                            inline: true,
                            href: "#colorbox--premium",
                            speed: 0,
                            open: true,
                            opacity: 0.5
                        });
                        return false;
                    },
                    onClose: function() {
                        if (this.collection != undefined) {
                            this.collection.noa.remove();
                            this.collection.stations.remove();
                        }
                    }
                });

                // 放送局リストのModelクラス
                var StationListModel = Backbone.Model.extend({
                    defaults: {}
                });

                // 放送局のCollectionクラス
                var StationListCollection = Backbone.Collection.extend({
                    model: StationListModel,

                    initialize: function(models) {
                        // 描画のタイミングを遅らせるために別のAPIのリクエストが終わってから行うようにする
                        this.listenTo(models, 'sync', this.onSync);
                    },

                    onSync: function() {
                        this.fetch({
                            area_id: getAreaId()
                        });
                    },

                    // XMLからそれぞれのデータを取得する
                    parse: function(data) {

                        var parsed = [];
                        var self = this;
                        $(data).find('station').each(function() {
                            var stationId = $(this).find('id').text();
                            var stationName = $(this).find('name').text();

                            // エリア外のエリアフリー非参加局は非表示
                            if (+$(this).find('areafree').text() === 0) {
                                return;
                            }

                            parsed.push({
                                id: stationId,
                                areaId: self.area_id,
                                name: stationName
                            });
                        });

                        return parsed;
                    },

                    // APIのURLを返すメソッド
                    url: function() {
                        return '/v3/station/list/' + this.area_id + '.xml';
                    },

                    fetch: function(options) {
                        options = options || {};
                        options.dataType = "xml";
                        this.area_id = options.area_id;
                        return Backbone.Collection.prototype.fetch.call(this, options);
                    }
                });

                var StationsView = Backbone.View.extend({
                    initialize: function() {
                        // 正常なHTTPステータスが返ってきたらonSyncを実行
                        this.listenTo(this.collection, "sync", this.onSync);
                    },
                    onSync: function(models) {
                        // コレクションをレンダリングする
                        if ($.Radiko.login_status.areafree) {
                            $.cookie('areafree_id', models.area_id, {
                                path: '/'
                            });
                        }
                        this.render(models);
                    },
                    render: function(models) {
                        $('#station-list').html(JST['common/station-list']({
                            models: models.toJSON()
                        }));
                        return this;
                    }
                });


            })($.Radiko || ($.Radiko = {}));

            if ($.Radiko.login_status.premium) {
                $('.premium-area').hide();
            }
            $('#header').html(JST['common/header']({
                logo: '/apps/images/img_logo_blue_01.png'
            }));
            var areaFree = new $.Radiko.areaFree();
            $.Radiko.EventEmitter.once('radikoareafree', function() {
                makeHeader();
                // ヘッダーの中身を書き換えるのでヘッダーの描画が終わってから実行する
                areaFree.initialize();
                setMetaText();
                $('input[type="text"]').placeholder();
            });

            if (_.isString($.Radiko.area.id)) {
                $.Radiko.EventEmitter.trigger('radikoareafree');
            }

            if (window.area != undefined) {
                $('span.area').text(window.area);
            }

        });
    })(window, $, Backbone, _, moment);
};