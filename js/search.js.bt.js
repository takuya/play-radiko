'use strict';
var radikoSl = function(_searchPage) {
    (function(window, $, Backbone, _, moment, undefined) {
        var contentsTemplate;
        if ($('body').hasClass('page-timeshift')) {
            contentsTemplate = '/apps/templates/search_timeshift/index.html';
        } else {
            contentsTemplate = '/apps/templates/search_live/index.html';
        }
        loadTemplate({
            '#contents': contentsTemplate,
            '#footer': '/apps/templates/common/footer.html'
        }, function() {
            (function(Radiko) {
                Radiko.Search = (function() {
                    var Search = function() {
                        this.searchConfigModel = null;
                        this.searchedCollection = null;
                    };
                    _.extend(Search.prototype, Backbone.Events);
                    Search.prototype.initialize = function() {
                        this.createModels();
                        this.createViews();
                        this.fetchAll({
                            model: this.searchedCollection,
                            options: {
                                data: this.searchConfigModel.pick('key', 'filter', 'start_day', 'end_day', 'area_id', 'region_id', 'cul_area_id', 'page_idx', 'action_id')
                            }
                        });
                        this.subscribeAll();
                    };
                    Search.prototype.createModels = function() {
                        this.searchConfigModel = new SearcheConfigModel(Radiko.parseQueryString(location.search));
                        this.searchedCollection = new SearchedCollection();
                    };
                    Search.prototype.createViews = function() {
                        $.Radiko.views.push(new SearchFormView({
                            el: document.getElementById('search-form'),
                            model: this.searchConfigModel
                        }));
                        $.Radiko.views.push(new SearchedListView({
                            el: document.getElementById('search-result'),
                            collection: this.searchedCollection
                        }));
                    };
                    Search.prototype.fetchAll = function() {
                        return $.when.apply($, _.map(_.toArray(arguments), function(queue) {
                            return queue.model.fetch(queue.options || {});
                        }));
                    };
                    Search.prototype.subscribeAll = function() {
                        var _this = this;
                        $.Radiko.EventEmitter.off('request:search');
                        $.Radiko.EventEmitter.on('request:search', function() {
                            Path.routes.current = location.hash;
                            _this.searchConfigModel.set(Radiko.parseQueryString(location.search));
                            return _this.searchedCollection.fetch({
                                data: _this.searchConfigModel.pick('key', 'filter', 'start_day', 'end_day', 'area_id', 'region_id', 'cul_area_id', 'page_idx', 'action_id')
                            });
                        });
                    };
                    return Search;
                })();
                var SearcheConfigModel = Backbone.Model.extend({
                    defaults: {
                        key: '',
                        filter: '',
                        start_day: '',
                        end_day: '',
                        area_id: '',
                        cul_area_id: '',
                        page_idx: ''
                    }
                });
                var ProgramModel = Backbone.Model.extend({
                    defaults: {}
                });
                var SearchedCollection = Backbone.Collection.extend({
                    model: ProgramModel,
                    url: '/v3/api/program/search',
                    fetch: function(options) {
                        var _options = options;
                        if ($.Radiko.Suggest.action_id == 1 && $.Radiko.Suggest.suggestKeyWord != options.data.key) {
                            $.Radiko.Suggest.action_id = 0;
                        }
                        _.extend((_options.data || {}), {
                            uid: this.generateUid(),
                            row_limit: '12',
                            app_id: 'pc',
                            action_id: [0, 1, 2].indexOf($.Radiko.Suggest.action_id) == -1 ? 0 : $.Radiko.Suggest.action_id
                        });
                        if (!_.isUndefined($.Radiko.Suggest.action_rank) && $.Radiko.Suggest.action_id == 1) {
                            _.extend((_options.data || {}), {
                                action_rank: $.Radiko.Suggest.action_rank
                            });
                        }
                        $.Radiko.Suggest.action_id = 0;
                        return Backbone.Collection.prototype.fetch.call(this, _options);
                    },
                    parse: function(resp) {
                        return resp;
                    }
                });
                _.extend(SearchedCollection.prototype, $.Radiko.Mixins.Utility);
                var SearchFormView = Backbone.View.extend({
                    initialize: function() {
                        this.currentDate = moment();
                        this.minDate = moment().add(-7, 'd');
                        this.maxDate = moment().add(6, 'd');
                        this.render();
                    },
                    render: function() {
                        this.$('[name="key"]').val(decodeURIComponent(this.model.get('key')));
                        this.setDateOption();
                        var regionId = this.model.get('region_id');
                        var all = $('<option></option>', {
                            value: 'all',
                            text: '全国',
                            selected: (regionId.indexOf('all') != -1)
                        });
                        var area = $('<option></option>', {
                            value: '',
                            text: $.Radiko.areaList[parseInt(($.cookie('default_area_id').replace('JP', '')), 10) - 1],
                            selected: regionId.indexOf('all') == -1
                        });
                        if ($.Radiko.login_status.premium) {
                            this.$('[name="region_id"]').html(all[0].outerHTML + area[0].outerHTML);
                        } else {
                            this.$('[name="region_id"]').html(area[0].outerHTML + all[0].outerHTML);
                        }
                        var filter = this.model.get('filter');
                        if (filter.indexOf('past') != -1 || filter.indexOf('future') != -1)
                            this.$('option[value=' + filter + ']').attr('selected', true);
                        var searchText = $('#search-form').find('.form__text');
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
                            $('#search-form').find("select").easySelectBox({
                                onClick: function(data) {
                                    $('#search-form').find(".esb-displayer").append('<i class="icon icon--arrow-d"></i>');
                                }
                            });
                            $('#search-form').find(".esb-displayer").append('<i class="icon icon--arrow-d"></i>');
                        }
                        $.Radiko.Suggest.currentKeyWord = $('#search-form').find('input[name=key]').val();
                        $.Radiko.Suggest.bindHide();
                    },
                    setDateOption: function() {
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
                        var counter;
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
                        if (this.model.get('start_day') != '')
                            this.$('option[value=' + this.model.get('start_day') + ']').attr('selected', 'true');
                    },
                    events: {
                        'keyup input[name=key]': $.Radiko.Suggest.keyUpHandler,
                        'submit #search-form': 'submitHandler'
                    },
                    submitHandler: function(ev) {
                        ev.preventDefault();
                        var query = $('body').attr('class').indexOf('page-default') == -1 ? '/#!/search/timeshift?' : '/#!/search/live?';
                        var searchForm = $('#search-form');
                        var key = searchForm.find('[name="key"]').val();
                        if (key == '') {
                            alert('検索機能の利用には、検索キーワードの入力が必要です');
                            return false;
                        }
                        query += 'key=' + encodeURIComponent(key);
                        query += '&filter=' + encodeURIComponent(searchForm.find('[name="filter"]').val());
                        var date = searchForm.find('[name="date"]');
                        query += '&start_day=' + encodeURIComponent(date.val());
                        query += '&end_day=' + encodeURIComponent(date.val());
                        query += '&region_id=' + encodeURIComponent(searchForm.find('[name="region_id"]').val());
                        query += '&area_id=' + $.cookie('default_area_id');
                        query += '&cul_area_id=' + $.cookie('default_area_id');
                        query += '&page_idx=0';
                        var searchResultBody = $('.search-result__body');
                        searchResultBody.html('<p class="search-result__count">検索結果<span class="num">-</span>件</p>' +
                            '<ul class="search-result__list img-list group"></ul>');
                        searchResultBody.removeClass('search-result__body--zero');
                        if (window.navigator.userAgent.toLowerCase().indexOf("msie") !== -1) {
                            var now = new Date();
                            query += '&t=' + now.getTime();
                            location.href = query;
                        } else {
                            history.pushState('', '', query);
                            $.Radiko.EventEmitter.trigger('request:search');
                        }
                    }
                });
                var SearchedListView = Backbone.View.extend({
                    initialize: function() {
                        this.listenTo(this.collection, 'sync', this.onSync);
                        this.pageNationLimit = 5;
                    },
                    onSync: function(models) {
                        this.render(models);
                    },
                    render: function(models) {
                        var json = models.toJSON();
                        var data = json[0]['data'];
                        var meta = json[0]['meta'];
                        this.$('ul').empty();
                        this.append(data);
                        if ($('.search-result__list li').length == 0) {
                            var searchResultBody = $('.search-result__body');
                            searchResultBody.append('<p>検索条件に合う番組はありませんでした。<br>別の条件で再検索してください。</p>');
                            searchResultBody.find('.search-result__count').remove();
                            searchResultBody.find('.search-result__list').remove();
                            searchResultBody.addClass('search-result__body--zero');
                        } else {
                            var keywords, length, i;
                            if (!_.isUndefined(meta['kakuchou']) && !_.isEmpty(meta['kakuchou'])) {
                                length = meta['kakuchou'].length;
                                keywords = '「' + meta['kakuchou'][0] + '」';
                                for (i = 1; i < length; i++) {
                                    keywords += '「' + meta['kakuchou'][i] + '」';
                                }
                            } else {
                                length = meta['key'].length;
                                keywords = '「' + meta['key'][0] + '」';
                                for (i = 1; i < length; i++) {
                                    keywords += '「' + meta['key'][i] + '」';
                                }
                            }
                            $('.img-list__item').heightLine();
                            $('.search-result__count').text(keywords + 'の検索結果').append('<span class="num">' + meta['result_count'] + '</span>件');
                            this.setPageNation(meta, data);
                            this.divLazyLoad();
                        }
                        if (!_.isUndefined(meta['suisengo']) && meta['suisengo'] != '') {
                            this.setDidYouMean(meta);
                        } else {
                            $('.search-did-you-mean').html('');
                        }
                        return this;
                    },
                    append: function(models) {
                        var $ul = this.$('ul');
                        var _this = this;
                        var template = JST['search/program-item'];
                        models.map(function(model) {
                            $ul.append(template(_this.getViewModel(model)));
                        });
                    },
                    divLazyLoad: function() {
                        var programs = $('.img-list__item');
                        programs.hide();
                        programs.addClass('hide-list__item');
                        var lazyLoad = setInterval(function() {
                            var hideItems = $('.hide-list__item');
                            var hideItemNum = hideItems.length;
                            if (hideItemNum == 0) {
                                clearInterval(lazyLoad);
                            } else {
                                hideItems.first().fadeIn(500);
                                hideItems.first().removeClass('hide-list__item');
                            }
                        }, 100);
                    },
                    getViewModel: function(model) {
                        var description = model['description'] || '';
                        if (description)
                            description = description.replace(/(<([^>]+)>)/ig, "");
                        if (model['info'] != '')
                            model['info'] = model['info'].replace(/(<([^>]+)>)/ig, "");
                        description += model['info'];
                        if (model['img'] == null) {
                            model['img'] = model['status'] == 'past' ? '/images/radio-api-noimage_ts.png' : '/images/radio-api-noimage_live.png';
                        }
                        return _.extend(model, {
                            prog_url: '/#!/ts/' + model['station_id'] + '/' + moment(model['start_time']).format('YYYYMMDDHHmmss'),
                            progScheduleShort: this.getShortScheduleString(model['start_time'], model['end_time']),
                            progSchedule: this.getScheduleString(model['start_time'], model['end_time']),
                            formatedDescription: description.length > 100 ? description.slice(0, 100) + '…' : description
                        });
                    },
                    getScheduleString: function(ft, to) {
                        var ftMoment = moment(ft, 'YYYYMMDDHHmmss');
                        var toMoment = moment(to, 'YYYYMMDDHHmmss');
                        var ftStr = ftMoment.format('M月D日（ddd） HH:mm');
                        var toStr = toMoment.format('HH:mm');
                        var ftHour = ftMoment.format('H');
                        var toHour = toMoment.format('H');
                        if (ftHour >= 0 && ftHour < 5) {
                            ftMoment.subtract(1, 'days');
                            ftStr = ftMoment.format('M月D日（ddd） ') + (24 + parseInt(ftMoment.format('HH'))) + ':' + ftMoment.format('mm');
                        }
                        if (toHour >= 0 && toHour <= 5 && (ftHour != 5)) {
                            toStr = (24 + parseInt(toMoment.format('HH'))) + ':' + toMoment.format('mm');
                        }
                        return ftStr + '-' + toStr;
                    },
                    getShortScheduleString: function(ft, to) {
                        var ftMoment = moment(ft, 'YYYYMMDDHHmmss');
                        var toMoment = moment(to, 'YYYYMMDDHHmmss');
                        if (ftMoment.format('H') <= 5) {
                            ftMoment.subtract(1, 'days');
                        }
                        return ftMoment.format('M月D日');
                    },
                    setPageNation: function(meta, data) {
                        var query = this.parseQueryString(meta['searched_url']);
                        meta['page_num'] = Math.ceil(meta['result_count'] / meta['row_limit']);
                        if (meta['page_num'] <= 1) {
                            $('#page-nation').html('');
                            return;
                        }
                        meta['page_nation_num'] = [];
                        meta['search_result'] = data.length;
                        var queryPageIdx = query.page_idx;
                        meta['page_idx'] = !queryPageIdx && +meta['page_idx'] === 1 ? 0 : +meta['page_idx'];
                        var pageNationLimit = meta['page_num'] <= this.pageNationLimit ? meta['page_num'] : this.pageNationLimit;
                        var startPosition = this.getStartPosition(meta['page_idx'], meta['page_num'], pageNationLimit);
                        for (var i = 0; i < pageNationLimit; i++) {
                            meta['page_nation_num'][i] = ++startPosition;
                        }
                        meta['search_page'] = _searchPage;
                        var nextQuery = 'key=' + encodeURIComponent(query['key']).replace(/%2B/g, '%20');
                        nextQuery += '&filter=' + encodeURIComponent(query['filter']);
                        nextQuery += '&start_day=' + encodeURIComponent(query['start_day']);
                        nextQuery += '&end_day=' + encodeURIComponent(query['end_day']);
                        nextQuery += '&area_id=' + encodeURIComponent($.cookie('default_area_id'));
                        nextQuery += '&region_id=' + encodeURIComponent(query['region_id']);
                        nextQuery += '&cul_area_id=' + encodeURIComponent($.cookie('default_area_id'));
                        meta['query'] = nextQuery;
                        $('#page-nation').html(JST['search/page-nation'](meta));
                    },
                    parseQueryString: function(referrerQuery) {
                        var query = {};
                        var _queryString = referrerQuery.match(/\?(.*)/)[1];
                        if (_queryString.length > 0) {
                            _.extend(query, _.chain(_queryString.split('&'))
                                .map(function(prop) {
                                    var keyVal = prop.split('=');
                                    return [keyVal[0], decodeURIComponent(keyVal[1])];
                                })
                                .object()
                                .value());
                        }
                        return query;
                    },
                    setDidYouMean: function(meta) {
                        var query = this.parseQueryString(meta['searched_url']);
                        var nextQuery = 'key=' + encodeURIComponent(meta['suisengo']);
                        nextQuery += '&filter=' + encodeURIComponent(query['filter']);
                        nextQuery += '&start_day=' + encodeURIComponent(query['start_day']);
                        nextQuery += '&end_day=' + encodeURIComponent(query['end_day']);
                        nextQuery += '&area_id=' + encodeURIComponent($.cookie('default_area_id'));
                        nextQuery += '&region_id=' + encodeURIComponent(query['region_id']);
                        nextQuery += '&cul_area_id=' + encodeURIComponent($.cookie('default_area_id'));
                        meta['query'] = nextQuery;
                        $('.search-did-you-mean').html('<div class="did-you-mean">もしかして: <a class="result" href="' + '/#!/search/' + _searchPage + '?' + nextQuery + '">' + meta['suisengo'] + '</a></div>');
                        $('.did-you-mean .result').on('click', function(e) {
                            e.preventDefault();
                            $.Radiko.Suggest.action_id = 2;
                            location.href = $(this).attr('href');
                        });
                    },
                    getStartPosition: function(currentPage, totalPageNum, pageNationLimit) {
                        if (totalPageNum <= pageNationLimit) {
                            return 0;
                        }
                        var startPosition = currentPage - Math.floor(pageNationLimit / 2);
                        if (startPosition <= 0) {
                            return 0;
                        }
                        if ((startPosition + pageNationLimit) <= totalPageNum) {
                            return startPosition;
                        }
                        var delta = (totalPageNum - currentPage);
                        return currentPage - (pageNationLimit - delta);
                    }
                });
                _.extend(SearchedListView.prototype, $.Radiko.Mixins.Utility);
            })($.Radiko || ($.Radiko = {}));
            if ($('body').hasClass('page-timeshift')) {
                $('#header').html(JST['common/header']({
                    logo: '/apps/images/img_logo_red_01.png'
                }));
            } else {
                $('#header').html(JST['common/header']({
                    logo: '/apps/images/img_logo_blue_01.png'
                }));
            }
            var search = new $.Radiko.Search();
            $.Radiko.EventEmitter.once('radikoSearchLive', function() {
                search.initialize();
                makeHeader();
                $('input[type="text"]').placeholder();
            });
            if (_.isString($.Radiko.area.id)) {
                $.Radiko.EventEmitter.trigger('radikoSearchLive');
            }
            if (window.area != undefined) {
                $('span.area').text(window.area);
            }
        });
    })(window, jQuery, Backbone, _, moment, undefined);
};