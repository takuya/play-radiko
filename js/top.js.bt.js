'use strict';
var radikoTop = function(isScroll) {

    (function(window, $, Backbone, _, moment, undefined) {
        // DOM Ready
        loadTemplate({
            '#contents': '/apps/templates/top/index.html',
            '#footer': '/apps/templates/common/footer.html'
        }, function() {
            (function(Radiko) {

                // トップページコントローラー
                Radiko.Top = (function() {

                    // コンストラクター
                    var Top = function() {
                        // コレクション
                        this.nowOnAirCollection = null;
                        this.prImageCollection = null;
                        this.infoCollection = null;
                    };

                    // Backbone.Events をマージ
                    _.extend(Top.prototype, Backbone.Events);


                    // 初期化メソッド
                    Top.prototype.initialize = function() {
                        // コレクション・モデルインスタンスを生成する
                        this.createModels();

                        // ビューインスタンスを生成する
                        this.createViews();
                        // 情報を取得する
                        this.fetchAll({
                            model: this.nowOnAirCollection
                        }, {
                            model: this.prImageCollection
                        }, {
                            model: this.infoCollection
                        });
                    };

                    // コレクション・モデルインスタンス生成メソッド
                    Top.prototype.createModels = function() {
                        this.nowOnAirCollection = new NowOnAirCollection();
                        this.prImageCollection = new PrImageCollection();
                        this.infoCollection = new InfoCollection();
                    };

                    // ビューインスタンス生成メソッド
                    Top.prototype.createViews = function() {
                        $.Radiko.views.push(
                            new PrImageListView({
                                el: document.getElementById('pr-image-slider'),
                                collection: this.prImageCollection
                            })
                        );
                        $.Radiko.views.push(
                            new SearchFormView({
                                el: document.getElementById('to-search')
                            })
                        );
                        $.Radiko.views.push(
                            new NowOnAirListView({
                                el: document.getElementById('now_on_air'),
                                collection: this.nowOnAirCollection
                            })
                        );
                        $.Radiko.views.push(
                            new InfoListView({
                                el: document.getElementById('top-info'),
                                collection: this.infoCollection
                            })
                        );

                    };

                    // フェッチメソッド
                    Top.prototype.fetchAll = function() {
                        return $.when.apply($, _.map(_.toArray(arguments), function(queue) {
                            return queue.model.fetch(queue.options || {});
                        }));
                    };

                    return Top;
                })();

                // PR画像モデル
                var PrImageModel = Backbone.Model.extend({
                    // 初期属性値
                    defaults: {
                        id: '',
                        name: '',
                        banner: ''
                    }
                });

                // PR画像コレクション
                var PrImageCollection = Backbone.Collection.extend({
                    // モデルコンストラクター
                    model: PrImageModel,

                    // 初期化メソッド
                    initialize: function() {
                        // プロパティ
                        this.areaId = $.cookie('default_area_id');
                    },

                    // APIのURLを返すメソッド
                    url: function() {
                        return '/v3/station/list/' + this.areaId + '.xml';
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
                            var $station = $(station);

                            // 属性値を詰め込んで返す
                            return {
                                id: $station.find('id').first().text(),
                                name: $station.find('name').first().text(),
                                banner: $station.find('banner').first().text()
                            };
                        }, this);
                    }
                });

                // PR画像リストビュー
                var PrImageListView = Backbone.View.extend({

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
                            .html(JST['top/pr-image-slider']({
                                'list': models.toJSON()
                            }));
                        this.defineUi();

                        return this;
                    },

                    // UIを引き当てるメソッド
                    defineUi: function() {
                        this.$('.js-slider').slick({
                            infinite: true,
                            slidesToShow: 4,
                            autoplay: true,
                            autoplaySpeed: 5000,
                            prevArrow: '<ul class="top-slider__nav"><li class="item item--prev"><i class="icon icon--prev-02"></i><span>前へ</span></li></ul>',
                            nextArrow: '<ul class="top-slider__nav"><li class="item item--next"><i class="icon icon--next-02"></i><span>次へ</span></li></ul>'
                        });
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

                        var searchForm = $('#search-form');
                        var searchText = searchForm.find('.form__text');
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
                            searchForm.find("select").easySelectBox({
                                onClick: function(data) {
                                    searchForm.find(".esb-displayer").append('<i class="icon icon--arrow-d"></i>');
                                }
                            });
                        }
                        searchForm.find(".esb-displayer").append('<i class="icon icon--arrow-d"></i>');
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
                    },
                    onClose: function() {
                        if (this.collection != undefined) {
                            this.collection.remove();
                        }
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
                        this.areaId = $.cookie('default_area_id');
                    },

                    // APIのURLを返すメソッド
                    url: function() {
                        return '/v3/program/now/' + this.areaId + '.xml';
                    },

                    // フェッチメソッド
                    fetch: function(options) {
                        return Backbone.Collection.prototype.fetch.call(this, _.extend({
                            dataType: 'xml',
                            cache: false
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

                            // エリアフリーユーザの時、エリア外のエリアフリー非参加局は非表示
                            var isShow = true;
                            if (!_.contains($.Radiko.user_station_list, $station.attr('id')) && $(this).find('areafree').text() == 0) {
                                isShow = false;
                            }

                            // 属性値を詰め込んで返す
                            return {
                                id: $station.attr('id'),
                                name: $station.find('name').first().text(),
                                progTitle: $prog.find('title').first().text(),
                                progPfm: $prog.find('pfm').first().text(),
                                progSchedule: (this.dateToFormatedString($prog.attr('ft'), 'M月D日（ddd） HH:mm')) + '-' + (this.dateToFormatedString($prog.attr('to'), 'HH:mm')),
                                progImage: img,
                                isShow: isShow
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
                        // イベントを購読する
                        this.listenTo(this.collection, 'sync', this.onSync);
                    },

                    // 同期ハンドラー
                    onSync: function(models) {
                        this.render(models);
                    },

                    // レンダラー
                    render: function(models) {
                        // ランダム化
                        var data = models.toJSON();
                        data = _.shuffle(data);

                        this.$el.empty().html(JST['common/onair-program']({
                            'models': data
                        }));
                        $(".img-list>.img-list__item").heightLine();

                        if (window.isScroll) {
                            window.isScroll = false;
                            var scrollTop = $('.content__top-onair').offset().top - $('#header-nav').height();
                            window.scrollTo(0, scrollTop);
                        }

                        return this;
                    },
                    onClose: function() {
                        if (this.collection != undefined) {
                            this.collection.remove();
                        }
                    }
                });

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
                        this.areaId = $.cookie('default_area_id');
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
                        var informationList = [];
                        var maintenanceList = [];
                        _.map($('info', resp), function(info) {
                            // キャッシュ
                            var $info = $(info);

                            var infoData = {
                                id: $info.attr('id'),
                                categoryId: $info.attr('category_id'),
                                categoryName: $info.attr('category_name'),
                                stationId: $info.attr('station_id'),
                                stationName: $info.attr('station_name'),
                                date: $info.find('date').first().text(),
                                title: $info.find('title').first().text(),
                                body: $info.find('body').first().text()
                            };

                            if ($info.attr('category_id') === 'maitenance') {
                                maintenanceList.push(infoData);
                            } else {
                                informationList.push(infoData);
                            }
                        }, this);
                        // レスポンスを走査する
                        return {
                            informationList: informationList.slice(0, 3),
                            maintenanceList: maintenanceList.slice(0, 3)
                        };
                    }
                });

                // お知らせリストビュー
                var InfoListView = Backbone.View.extend({
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
                        var data = models.toJSON();
                        $('#info').html(JST['top/top-info']({
                            informationList: data[0].informationList
                        }));
                        $('#maintenance').html(JST['top/top-maintenance']({
                            maintenanceList: data[0].maintenanceList
                        }));
                        $('.top-info__list').height(Math.max($('#info').height(), $('#maintenance').height()));

                        return this;
                    },

                    onClose: function() {
                        if (this.collection != undefined) {
                            this.collection.remove();
                        }
                    }
                });

                // お知らせリストビュー
                InfoListView.extend({
                    // ビューテンプレート
                    template: _.template($('#tmpl-info-list').text()),

                    // 初期化メソッド
                    initialize: function(options) {
                        // プロパティ
                        this.currentMonth = options.currentMonth || moment().format('YYYYMM');
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
                    }
                });
            })($.Radiko || ($.Radiko = {}));

            $('#header').html(JST['common/header']({
                logo: '/apps/images/img_logo_blue_01.png',
                top: true
            }));
            var top = new $.Radiko.Top();
            $.Radiko.EventEmitter.once('radikoready', function() {
                top.initialize();
                makeHeader($.cookie('default_area_id'));
                setMetaText();
                $('input[type="text"]').placeholder();

                $('.top-info__list').off('click', 'a:not([href^=http])');
                $('.top-info__list').on('click', 'a:not([href^=http])', function() {
                    var href = $(this).attr("href");
                    $("html, body").animate({
                        scrollTop: 0
                    }, 10, "linear");
                    return true;
                });
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