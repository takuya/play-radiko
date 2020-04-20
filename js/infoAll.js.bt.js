'use strict';
var radikoInfo = function(month, pageNumber) {

    (function(window, $, Backbone, _, moment, undefined) {
        // DOM Ready
        loadTemplate({
            '#contents': '/apps/templates/info/archives.html',
            '#footer': '/apps/templates/common/footer.html'
        }, function() {
            (function(Radiko) {

                // インフォリストページコントローラー
                Radiko.Info = (function() {
                    // コンストラクター
                    var Info = function(month, pageNumber) {
                        // プロパティ
                        this.currentMonth = month;
                        this.currentPage = parseInt(pageNumber, 10) || 1;

                        // TODO
                        this.isArchive = true; //  !! options.isCurrent;

                        // コレクション
                        this.infoCollection = null;
                    };

                    // Backbone.Events をマージ
                    _.extend(Info.prototype, Backbone.Events);

                    // 初期化メソッド
                    Info.prototype.initialize = function() {
                        // コレクション・モデルインスタンスを生成する
                        this.createModels();
                        // ビューインスタンスを生成する
                        this.createViews();
                        // 情報を取得する
                        this.fetchAll({
                            model: this.infoCollection
                        });
                    };

                    // コレクション・モデルインスタンス生成メソッド
                    Info.prototype.createModels = function() {
                        this.infoCollection = new InfoCollection();
                    };

                    // ビューインスタンス生成メソッド
                    Info.prototype.createViews = function() {
                        new PagedInfoListView({
                            el: document.getElementById('info-list'),
                            collection: this.infoCollection,
                            currentMonth: this.currentMonth,
                            currentPage: this.currentPage,
                            isArchive: this.isArchive
                        });
                    };

                    // フェッチメソッド
                    Info.prototype.fetchAll = function() {
                        return $.when.apply($, _.map(_.toArray(arguments), function(queue) {
                            return queue.model.fetch(queue.options || {});
                        }));
                    };

                    return Info;
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
                        // レスポンスを走査する
                        return _.map($('info', resp), function(info) {
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

                // お知らせリストビュー
                var InfoListView = Backbone.View.extend({
                    // ビューテンプレート
                    template: _.template($('#tmpl-top-info').text()),

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
                            .html(this.template(this.getViewModel(models)));

                        return this;
                    },

                    // ビューモデルを返すメソッド
                    getViewModel: function(models) {
                        // キャッシュ
                        var informationList = [];
                        var maintenanceList = [];

                        // モデルを振り分ける
                        models.each(function(model) {
                            var targetList = model.get('categoryId') === 'maitenance' ? maintenanceList : informationList;
                            targetList.push(model.toJSON());
                        });

                        return {
                            informationList: informationList.slice(0, 3),
                            maintenanceList: maintenanceList.slice(0, 3)
                        }
                    }
                });

                // お知らせリストビュー
                var PagedInfoListView = InfoListView.extend({
                    // 初期化メソッド
                    initialize: function(options) {
                        // プロパティ
                        this.currentMonth = options.currentMonth;
                        this.currentPage = options.currentPage || 1;
                        this.isArchive = !!options.isArchive;

                        // 継承元の初期化処理を呼び出す
                        InfoListView.prototype.initialize.call(this);
                    },

                    // ビューモデルを返すメソッド
                    getViewModel: function(models) {
                        // キャッシュ
                        var _this = this;
                        var list = models.toJSON();

                        if (_this.currentMonth == null) {
                            _this.currentMonth = moment(list[0].date, 'YYYY.MM.DD').format('YYYYMM');
                        }

                        var filteredList = this.isArchive ? _.filter(list, function(item) {
                            return moment(item.date, 'YYYY.MM.DD').isSame(moment(_this.currentMonth, 'YYYYMM'), 'month');
                        }) : list;
                        var start = 5 * (this.currentPage - 1);

                        return {
                            currentMonth: this.isArchive ? this.currentMonth : 'all',
                            currentPage: this.currentPage,
                            list: _.map(filteredList.slice(start, start + 5), function(item) {
                                return _.extend(item, {
                                    localeDateString: moment(item.date, 'YYYY.MM.DD').format('YYYY年M月D日 (ddd)')
                                });
                            }),
                            pager: _.map(Array.apply(null, new Array(Math.ceil(filteredList.length / 5))), function(page, i) {
                                var number = i + 1;

                                return {
                                    number: number,
                                    isCurrent: number === _this.currentPage
                                };
                            }),
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
                        }

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
                    },

                    render: function(models) {
                        this.$el
                            .empty()
                            .html(JST['info/info-list'](this.getViewModel(models)));

                        $(".news-list__text").each(function() {
                            var size = 120;
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
                        return this;
                    }
                });
            })($.Radiko || ($.Radiko = {}));

            $('#header').html(JST['common/header']({
                logo: '/apps/images/img_logo_blue_01.png'
            }));
            var archive = new $.Radiko.Info(month, pageNumber);
            $.Radiko.EventEmitter.once('radikoready', function() {
                archive.initialize();
                makeHeader();
                $('input[type="text"]').placeholder();
            });

            if (_.isString($.Radiko.area.id)) {
                $.Radiko.EventEmitter.trigger('radikoready');
            }

            if (window.area != undefined) {
                $('span.area').text(window.area);
            }

        });
    })(window, $, Backbone, _, moment);
};