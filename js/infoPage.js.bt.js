'use strict';
var radikoInfoDetail = function(id) {

    (function(window, $, Backbone, _, moment, undefined) {
        // DOM Ready
        loadTemplate({
            '#contents': '/apps/templates/info/index.html',
            '#footer': '/apps/templates/common/footer.html'
        }, function() {
            (function(Radiko) {

                // インフォ詳細ページコントローラー
                Radiko.InfoDetail = (function() {
                    // コンストラクター
                    var InfoDetail = function(id) {
                        // プロパティ
                        this.id = id;
                        // コレクション
                        this.infoCollection = null;
                    };

                    // Backbone.Events をマージ
                    _.extend(InfoDetail.prototype, Backbone.Events);

                    // 初期化メソッド
                    InfoDetail.prototype.initialize = function() {
                        // IDが設定されていなければ処理を中断する
                        if (_.isUndefined(this.id)) {
                            return;
                        }
                        // コレクション・モデルインスタンスを生成する
                        this.createModels();
                        // ビューインスタンスを生成する
                        this.createViews();
                        // イベントを購読する
                        this.subscribeAll();
                        // 情報を取得する
                        this.fetchAll({
                            model: this.infoCollection
                        });
                    };

                    // コレクション・モデルインスタンス生成メソッド
                    InfoDetail.prototype.createModels = function() {
                        this.infoCollection = new InfoCollection();
                    };

                    // ビューインスタンス生成メソッド
                    InfoDetail.prototype.createViews = function() {
                        new InfoItemView({
                            el: document.getElementById('info-detail'),
                            collection: this.infoCollection
                        });
                        new InfoRecentListView({
                            el: document.getElementById('info-recent-list'),
                            collection: this.infoCollection
                        });
                        new InfoArchiveListView({
                            el: document.getElementById('info-archive-list'),
                            collection: this.infoCollection
                        });
                    };

                    // イベントの購読を設定するメソッド
                    InfoDetail.prototype.subscribeAll = function() {
                        //this.listenTo(this.infoCollection, 'sync', function () {
                        //    this.infoItemView.model.set(this.infoCollection.findWhere({
                        //        id: this.id
                        //    }).toJSON());
                        //});
                    };

                    // フェッチメソッド
                    InfoDetail.prototype.fetchAll = function(id) {
                        return $.when.apply($, _.map(_.toArray(arguments), function(queue) {
                            return queue.model.fetch(queue.options || {});
                        }));
                    };

                    return InfoDetail;
                })();

                // お知らせモデル
                var InfoModel = Backbone.Model.extend({
                    // 初期属性値
                    defaults: {}
                });

                // お知らせコレクション
                var InfoCollection = Backbone.Collection.extend({
                    // モデルコンストラクター
                    model: InfoModel,

                    // 初期化メソッド
                    initialize: function() {
                        // プロパティ
                        this.areaId = getAreaId();
                    },

                    // APIのURLを返すメソッド
                    url: function() {
                        return '/v2/information2/' + this.areaId + '.xml';
                    },

                    // フェッチメソッド
                    fetch: function(options) {
                        options.cache = false;
                        return Backbone.Collection.prototype.fetch.call(this, _.extend({
                            dataType: 'xml'
                        }, options));
                    },

                    // APIレスポンスをパースするメソッド
                    parse: function(resp) {
                        var infos = $('info', resp);

                        // レスポンスを走査する
                        return _.map(infos, function(info) {
                            // キャッシュ
                            var $info = $(info);

                            // 属性値を詰め込んで返す
                            return {
                                id: $info.attr('id'),
                                categoryId: $info.attr('category_id'),
                                categoryName: $info.attr('category_name'),
                                stationId: $info.attr('station_id'),
                                stationName: $info.attr('station_name'),
                                date: $info.find('date').first().text(),
                                title: $info.find('title').first().text(),
                                body: $info.find('body').first().text()
                            };
                        }, this);
                    }
                });

                // お知らせ詳細ビュー
                var InfoItemView = Backbone.View.extend({
                    // 初期化メソッド
                    initialize: function() {
                        // イベントを購読する
                        this.listenTo(this.collection, 'sync', this.onSync);
                    },

                    // 同期ハンドラー
                    onSync: function(models) {
                        this.render(models);
                    },

                    // レンダラー
                    render: function(models) {
                        this.$el
                            .empty()
                            .html(JST['info/info-detail'](this.getViewModel(models)));

                        $('.pager__index').on('click', function() {
                            location.href = '/#!/info/';
                        });

                        return this;
                    },

                    // ビューモデルを返すメソッド
                    getViewModel: function(models) {
                        var currentInfo = models.findWhere({
                            id: id
                        });
                        var currentIndex = models.indexOf(currentInfo);

                        var modelJson = models.toJSON();
                        var beforeInfoUrl = '';
                        var afterInfoUrl = '';

                        // 取得するお知らせが最新でなければ、次へを表示
                        if (currentIndex != 0) {
                            var nextIndex = currentIndex - 1;
                            var afterInfo = models.at(nextIndex);
                            afterInfoUrl = '/#!/info/' + afterInfo['id'];
                        }

                        // 取得するお知らせが最古で なければ、前へを表示
                        if (currentIndex != modelJson.length) {
                            var prevIndex = currentIndex + 1;
                            var beforeInfo = models.at(prevIndex);
                            beforeInfoUrl = '/#!/info/' + beforeInfo['id'];
                        }

                        return _.extend(currentInfo.toJSON(), {
                            nextInfo: afterInfoUrl,
                            prevInfo: beforeInfoUrl,
                            localeDateString: moment(currentInfo.get('date'), 'YYYY.MM.DD').format('YYYY年M月D日 (ddd)')
                        });
                    }
                });

                // お知らせ直近リストビュー
                var InfoRecentListView = Backbone.View.extend({

                    // 初期化メソッド
                    initialize: function() {
                        // イベントを購読する
                        this.listenTo(this.collection, 'sync', this.onSync);
                    },

                    // 同期ハンドラー
                    onSync: function(models) {
                        this.render(models);
                    },

                    // レンダラー
                    render: function(models) {
                        this.$el
                            .empty()
                            .html(JST['info/info-recent-list'](this.getViewModel(models)));
                    },

                    // ビューモデルを返すメソッド
                    getViewModel: function(models) {
                        return {
                            list: _.map(models.toJSON().slice(0, 5), function(model) {
                                return _.extend(model, {
                                    localeDateString: moment(model.date, 'YYYY.MM.DD').format('YYYY年M月D日 (ddd)')
                                });
                            })
                        };
                    }
                });

                // お知らせアーカイブリストビュー
                var InfoArchiveListView = Backbone.View.extend({
                    // 初期化メソッド
                    initialize: function() {
                        // イベントを購読する
                        this.listenTo(this.collection, 'sync', this.onSync);
                    },

                    // 同期ハンドラー
                    onSync: function(models) {
                        this.render(models);
                    },

                    // レンダラー
                    render: function(models) {
                        this.$el
                            .empty()
                            .html(JST['info/info-archive-list'](this.getViewModel(models)));

                        if ($('.easy-select-box').length == 0) {
                            $('.news-archive').find("select").easySelectBox({
                                onClick: function(data) {
                                    $('.news-archive').find(".esb-displayer").append('<i class="icon icon--arrow-d"></i>');
                                    var val = data.value;
                                    if (/^\d{6}\/\d$/.test(val)) {
                                        location.href = '/#!/info/archive/' + val;
                                    }
                                }
                            });
                            $('.news-archive').find(".esb-displayer").append('<i class="icon icon--arrow-d"></i>');
                        }
                    },

                    // ビューモデルを返すメソッド
                    getViewModel: function(models) {
                        var list = models.toJSON();

                        return {
                            archive: _.reduce(list, function(memo, item) {
                                var date = moment(item.date, 'YYYY.MM.DD');
                                var year = date.year();
                                var month = date.month();

                                var y = _.findWhere(memo, {
                                    year: year
                                });
                                if (_.isUndefined(y)) {
                                    y = {
                                        year: year,
                                        months: []
                                    };
                                    y.months[month] = {
                                        month: date.format('M月'),
                                        link: date.format('YYYYMM') + '/1'
                                    };
                                    memo.push(y);
                                } else {
                                    y.months[month] = {
                                        month: date.format('M月'),
                                        link: date.format('YYYYMM') + '/1'
                                    };
                                }

                                return memo;
                            }, [])
                        };
                    },

                    // DOMイベントマッピング
                    events: {
                        'change .js-archive': 'archiveChangeHandler'
                    },

                    // アーカイブチェンジハンドラー
                    archiveChangeHandler: function(ev) {
                        var val = ev.target.value;

                        if (/^\d{6}\/\d$/.test(val)) {
                            location.href = '/#!/info/archive/' + val;
                        }
                    }
                });
            })($.Radiko || ($.Radiko = {}));

            $('#header').html(JST['common/header']({
                logo: '/apps/images/img_logo_blue_01.png'
            }));
            var detail = new $.Radiko.InfoDetail(id);
            $.Radiko.EventEmitter.once('radikoreadyinfo', function() {
                detail.initialize();
                makeHeader();
                $('input[type="text"]').placeholder();
            });

            if (_.isString($.Radiko.area.id)) {
                $.Radiko.EventEmitter.trigger('radikoreadyinfo');
            }

            if (window.area != undefined) {
                $('span.area').text(window.area);
            }

        });
    })(window, $, Backbone, _, moment);
};