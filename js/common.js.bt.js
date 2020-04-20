"use strict";
$(function() {
    if (window.programInfo === undefined) {
        window.programInfo = {};
    }
    Backbone.fetchCache.localStorage = false;
    moment.updateLocale('ja', {
        weekdays: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
        weekdaysShort: ['日', '月', '火', '水', '木', '金', '土']
    });
    $.Radiko = {
        login_status: {
            hasLogin: false
        },
        menu: {},
        defaultStationList: {},
        user_station_list: {},
        before_station_list: {},
        exclude_station_list: [],
        isPageTransition: false,
        isUserAreaStation: function(station_id) {
            return _.contains(this.user_station_list, station_id);
        },
        views: [],
        scrollPosition: [],
        showCompanionBanner: true,
        playingBuffer: 15,
        areaList: ['北海道', '青森', '岩手', '宮城', '秋田', '山形', '福島', '茨城', '栃木', '群馬', '埼玉', '千葉', '東京', '神奈川', '新潟', '富山', '石川', '福井', '山梨', '長野', '岐阜', '静岡', '愛知', '三重', '滋賀', '京都', '大阪', '兵庫', '奈良', '和歌山', '鳥取', '島根', '岡山', '広島', '山口', '徳島', '香川', '愛媛', '高知', '福岡', '佐賀', '長崎', '熊本', '大分', '宮崎', '鹿児島', '沖縄'],
        areaListParRegion: {
            'hokkaido-tohoku': [{
                    id: 'JP1',
                    name: '北海道'
                },
                {
                    id: 'JP2',
                    name: '青森'
                },
                {
                    id: 'JP3',
                    name: '岩手'
                },
                {
                    id: 'JP4',
                    name: '宮城'
                },
                {
                    id: 'JP5',
                    name: '秋田'
                },
                {
                    id: 'JP6',
                    name: '山形'
                },
                {
                    id: 'JP7',
                    name: '福島​'
                },
            ],
            'kanto': [{
                    id: 'JP8',
                    name: '茨城'
                },
                {
                    id: 'JP9',
                    name: '栃木'
                },
                {
                    id: 'JP10',
                    name: '群馬'
                },
                {
                    id: 'JP11',
                    name: '埼玉'
                },
                {
                    id: 'JP12',
                    name: '千葉'
                },
                {
                    id: 'JP13',
                    name: '東京'
                },
                {
                    id: 'JP14',
                    name: '神奈川'
                },
            ],
            'hokuriku-koushinetsu': [{
                    id: 'JP15',
                    name: '新潟'
                },
                {
                    id: 'JP19',
                    name: '山梨'
                },
                {
                    id: 'JP20',
                    name: '長野'
                },
                {
                    id: 'JP17',
                    name: '石川'
                },
                {
                    id: 'JP16',
                    name: '富山'
                },
                {
                    id: 'JP18',
                    name: '福井'
                },
            ],
            'chubu': [{
                    id: 'JP23',
                    name: '愛知'
                },
                {
                    id: 'JP21',
                    name: '岐阜'
                },
                {
                    id: 'JP22',
                    name: '静岡'
                },
                {
                    id: 'JP24',
                    name: '三重'
                },
            ],
            'kinki': [{
                    id: 'JP27',
                    name: '大阪'
                },
                {
                    id: 'JP28',
                    name: '兵庫'
                },
                {
                    id: 'JP26',
                    name: '京都'
                },
                {
                    id: 'JP25',
                    name: '滋賀'
                },
                {
                    id: 'JP29',
                    name: '奈良'
                },
                {
                    id: 'JP30',
                    name: '和歌山'
                },
            ],
            'chugoku-shikoku': [{
                    id: 'JP33',
                    name: '岡山'
                },
                {
                    id: 'JP34',
                    name: '広島'
                },
                {
                    id: 'JP31',
                    name: '鳥取'
                },
                {
                    id: 'JP32',
                    name: '島根'
                },
                {
                    id: 'JP35',
                    name: '山口'
                },
                {
                    id: 'JP37',
                    name: '香川'
                },
                {
                    id: 'JP36',
                    name: '徳島'
                },
                {
                    id: 'JP38',
                    name: '愛媛'
                },
                {
                    id: 'JP39',
                    name: '高知'
                },
            ],
            'kyushu': [{
                    id: 'JP40',
                    name: '福岡'
                },
                {
                    id: 'JP41',
                    name: '佐賀'
                },
                {
                    id: 'JP42',
                    name: '長崎'
                },
                {
                    id: 'JP43',
                    name: '熊本'
                },
                {
                    id: 'JP44',
                    name: '大分'
                },
                {
                    id: 'JP45',
                    name: '宮崎'
                },
                {
                    id: 'JP46',
                    name: '鹿児島'
                },
                {
                    id: 'JP47',
                    name: '沖縄'
                },
            ]
        },
        storeVersion: 3,
        ajax: function(url, success, error, dataType, nosync) {
            if (dataType == undefined) {
                dataType = 'xml';
            }
            return $.ajax({
                dataType: dataType,
                cache: false,
                error: error,
                success: success,
                timeout: 10000,
                type: 'get',
                async: !nosync ? true : false,
                url: url
            });
        },
        ajaxCached: (function() {
            var cache = {};
            return function(opts) {
                if (cache[opts.url] && opts.cache != false) {
                    var data = cache[opts.url];
                    var now = new Date();
                    if (now < data.expire_time) {
                        var def = $.Deferred();
                        def.resolve(cache[opts.url]);
                        return def.promise();
                    }
                }
                var jqXHR = $.ajax($.extend({
                    dataType: 'xml',
                    timeout: 10000,
                    type: 'GET'
                }, opts));
                jqXHR.done(function(data) {
                    cache[opts.url] = {
                        data: data,
                        retrieved_time: new XDate(),
                        expire_time: (new XDate()).addSeconds(opts.expire || 60 * 5)
                    };
                });
                return jqXHR;
            };
        })(),
        Display: {
            common: function(tpl) {
                if (navigator.cookieEnabled == true) {
                    $.Radiko.menu.check_login();
                } else {
                    alert(' お客様がご利用のブラウザでは、Cookieが無効になっています。 \n 『radikoプレミアム（エリアフリー聴取）』をご利用頂くには、 \n Cookieを有効にして頂きますようお願いいたします。 ');
                }
            }
        },
        EventEmitter: _.extend({}, Backbone.Events),
        Mixins: {
            Utility: {
                dateToFormatedString: function(dateString, outputFormat) {
                    return moment(dateString, ['YYYY-MM-DD HH:mm:ss', 'YYYYMMDDHHmmss']).format(outputFormat);
                },
                uid3: function() {
                    var key = 'a_exp';
                    var _exp = store.get(key) || $.cookie(key);
                    if (!_exp || _exp === "") {
                        _exp = MD5_hexhash("" + Math.floor(Math.random() * 1000000000) + (new Date()).getTime());
                    }
                    $.cookie(key, _exp, {
                        path: '/',
                        expires: 365 * 10
                    });
                    store.set(key, _exp);
                    return _exp;
                },
                generateUid: function() {
                    var _exp = $.cookie('rdk_uid');
                    if (_exp == null || _exp == '') {
                        var rnd = Math.floor(Math.random() * 1000000000) + '' + (new Date()).getTime();
                        _exp = MD5_hexhash(rnd);
                        $.cookie('rdk_uid', _exp, {
                            path: '/'
                        });
                    }
                    return _exp;
                },
                getListenType: function(stationId, ft, to) {
                    var storeFt = store.get(stationId + ft);
                    if (_.isUndefined(storeFt) || +storeFt.to !== +to) {
                        return 0;
                    }
                    var limit = storeFt.limit,
                        listenedTime = storeFt.listened_time;
                    if (limit <= moment().unix() || listenedTime >= (60 * 60 * 3)) {
                        return 2;
                    }
                    return 1;
                }
            }
        },
        HeaderBanner: function(stationId) {
            $.Radiko.ajax('/v2/webtop/' + getAreaId() + '.xml', function(data, status, xhr) {
                var $items = $('item', data);
                var items = _.map($items, function(item) {
                    var $item = $(item);
                    return {
                        station_id: $item.attr('station_id'),
                        href: $item.attr('href'),
                        src: $item.attr('img_468x60'),
                        evid: $item.attr('evid'),
                        alt: $item.attr('desc')
                    };
                });
                if (!_.isUndefined(stationId)) {
                    var filterResult = items.filter(function(element, index) {
                        return element.station_id == stationId;
                    });
                    if (filterResult.length >= 1) {
                        items = filterResult;
                    }
                }
                $('.header__banner').html(JST['common/web-top']({
                    items: items
                }));
                $('.header__banner a').first().addClass('current-banner');
                $.Radiko.logger.ad_log('view.gif?ad_id=' + $('.current-banner').data('evid'));
                $('.header__banner a').on('click', function(e) {
                    var target = e.currentTarget;
                    if (!target) {
                        return;
                    }
                    $.Radiko.logger.ad_log('click.gif?ad_id=' + $(target).data('evid'));
                    return true;
                });
                if (items.length > 1 && _.isUndefined(window.webTopBanner)) {
                    window.webTopBanner = setInterval(function() {
                        var currentBanner = $('.header__banner .current-banner');
                        var currentIndex = currentBanner.prevAll().length;
                        var banners = $('.header__banner a');
                        var nextIndex = currentIndex + 1 >= banners.length ? 0 : currentIndex + 1;
                        currentBanner.removeClass('current-banner');
                        banners.eq(nextIndex).addClass('current-banner');
                    }, 60 * 1000);
                }
            }, function(xhr, status, e) {}, 'xml', false);
        },
        parseQueryString: function(url) {
            var query = {};
            var parseUrl = url || location.hash;
            var _queryString = parseUrl.match(/\?(.*)/)[1] || parseUrl.match(/\?(.*)/)[1];
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
        Suggest: {
            execTime: 0,
            currentKeyWord: '',
            suggestKeyWord: '',
            action_id: 0,
            action_rank: undefined,
            lastRequest: {},
            Model: Backbone.Model.extend({
                defaults: {}
            }),
            ConfigModel: Backbone.Model.extend({
                defaults: {
                    key: '',
                    filter: '',
                    start_day: '',
                    end_day: '',
                    area_id: '',
                    cul_area_id: '',
                    page_idx: ''
                }
            }),
            ListView: (function() {
                var ListView = {
                    initialize: function(opt) {
                        this.render(opt);
                    },
                    render: function(opt) {
                        this.el = opt.el;
                        var json = opt.data;
                        if (json.data.length == 0 || _.isUndefined(window.suggest)) {
                            $('.suggest-dropdown').hide();
                            return false;
                        }
                        this.append(json);
                        return this;
                    },
                    append: function(models) {
                        var template = _.template('<% _.each(models, function(model) { %><div data-rank="<%= model.action_rank %>"><%= model.key %></div><% }); %>');
                        var suggestDropdown = $(this.el.form).find('.suggest-dropdown');
                        suggestDropdown.html(template({
                            models: models.data
                        }));
                        suggestDropdown.show();
                        suggestDropdown.off('click', 'div');
                        suggestDropdown.on('click', 'div', this.clickHandler);
                    },
                    clickHandler: function(e) {
                        var text = $(this).text();
                        $.Radiko.Suggest.action_id = 1;
                        $.Radiko.Suggest.action_rank = $(this).data('rank');
                        $.Radiko.Suggest.suggestKeyWord = $(this).text();
                        $(e.currentTarget).parents('form').find('input[name=key]').val(text);
                        clearTimeout(window.suggest);
                        $('.suggest-dropdown').hide();
                    }
                };
                return ListView;
            }),
            getSuggestQuery: function(target) {
                if (location.hash.replace('#!', '').match(/\/search/) != null) {
                    return $.Radiko.parseQueryString();
                } else {
                    var query = {};
                    var inputs = target.parents('form').find('[name]');
                    _.extend(query, _.chain(inputs).map(function(el) {
                            if (el.tagName == 'SELECT') {
                                return [$(el).attr('name'), $(el).val()];
                            } else {
                                return [$(el).attr('name'), $(el).val()];
                            }
                        })
                        .object()
                        .value());
                    _.extend(query, {
                        start_day: query.day,
                        end_day: query.day,
                        page_idx: 0
                    });
                    return query;
                }
            },
            exec: function(currentObject, targetId) {
                return function() {
                    clearTimeout(window.suggest);
                    $.Radiko.Suggest.execTime = 0;
                    var current = currentObject.val();
                    var query = $.Radiko.Suggest.getSuggestQuery(currentObject);
                    _.extend(query, {
                        key: current
                    });
                    var suggestConfigModel = new $.Radiko.Suggest.ConfigModel(query);
                    var ajaxOption = {
                        dataType: 'json',
                        data: $.extend(suggestConfigModel.pick('key', 'filter', 'start_day', 'end_day', 'area_id', 'region_id', 'cul_area_id'), {
                            uid: $.Radiko.Mixins.Utility.generateUid(),
                            row_limit: '8',
                            page_idx: '0',
                            app_id: 'pc'
                        }),
                        url: '/v3/api/program/search/suggest'
                    };
                    $.Radiko.Suggest.lastRequest = $.ajax(ajaxOption).done(function(data) {
                        var listView = new $.Radiko.Suggest.ListView();
                        listView.render({
                            el: {
                                dropdown: document.getElementsByClassName('suggest-dropdown'),
                                form: document.getElementById(targetId)
                            },
                            data: data
                        });
                    });
                };
            },
            upKeyEvent: function($input, $suggestBox) {
                var suggestLists = $suggestBox.find('div');
                var current = suggestLists.filter('.focus');
                var nextIndex;
                if (current.length == 0 || current.index() == 0) {
                    nextIndex = suggestLists.length;
                } else {
                    nextIndex = current.index();
                }
                nextIndex -= 1;
                if (nextIndex < 0) {
                    return 0;
                }
                current.removeClass('focus');
                var next = suggestLists.eq(nextIndex);
                next.addClass('focus');
                $input.val(next.text());
                $.Radiko.Suggest.suggestKeyWord = next.text();
                $.Radiko.Suggest.action_id = 1;
                $.Radiko.Suggest.action_rank = next.data('rank');
            },
            downKeyEvent: function($input, $suggestBox) {
                var suggestLists = $suggestBox.find('div');
                var current = suggestLists.filter('.focus');
                var nextIndex;
                if (current.length == 0 || current.index() >= (suggestLists.length - 1)) {
                    nextIndex = 0;
                } else {
                    nextIndex = current.index();
                    nextIndex += 1;
                }
                current.removeClass('focus');
                var next = suggestLists.eq(nextIndex);
                next.addClass('focus');
                $input.val(next.text());
                $.Radiko.Suggest.suggestKeyWord = next.text();
                $.Radiko.Suggest.action_id = 1;
                $.Radiko.Suggest.action_rank = next.data('rank');
            },
            keyUpHandler: function(e) {
                var current = $(e.currentTarget).val();
                if ($.Radiko.Suggest.suggestKeyWord != current) {
                    $.Radiko.Suggest.action_id = 0;
                }
                var keyCode = e.keyCode;
                if (keyCode == 13) {
                    clearTimeout(window.suggest);
                    window.suggest = undefined;
                    $.Radiko.Suggest.lastRequest.abort();
                    var $suggestBox = $('.suggest-dropdown');
                    if ($suggestBox.is(':visible') && $suggestBox.filter(':visible').find('div').length > 0) {
                        $suggestBox.hide();
                    }
                    return;
                } else if (keyCode == 38) {
                    $.Radiko.Suggest.upKeyEvent($(e.currentTarget), $('.suggest-dropdown').filter(':visible'));
                    return;
                } else if (keyCode == 40) {
                    $.Radiko.Suggest.downKeyEvent($(e.currentTarget), $('.suggest-dropdown').filter(':visible'));
                    return;
                } else if ($.inArray(keyCode, [37, 39]) != -1) {
                    return;
                }
                if (current.length == 0) {
                    $.Radiko.Suggest.lastRequest.abort();
                    return;
                }
                if (current.length < $.Radiko.Suggest.currentKeyWord.length) {
                    if (_.isUndefined(window.suggest) || (moment().valueOf() - $.Radiko.Suggest.execTime) >= 250) {
                        if (!_.isUndefined(window.suggest)) {
                            clearTimeout(window.suggest);
                        }
                        $.Radiko.Suggest.execTime = moment().valueOf();
                        window.suggest = setTimeout($.Radiko.Suggest.exec($(e.currentTarget), $(e.currentTarget).parents('form').attr('id')), 500);
                    }
                } else {
                    if (_.isUndefined(this.execTime) || (moment().valueOf() - $.Radiko.Suggest.execTime) >= 250) {
                        if (!_.isUndefined(window.suggest)) {
                            clearTimeout(window.suggest);
                        }
                        window.suggest = setTimeout($.Radiko.Suggest.exec($(e.currentTarget), $(e.currentTarget).parents('form').attr('id')), 50);
                    }
                }
                $.Radiko.Suggest.action_id = 0;
                $.Radiko.Suggest.currentKeyWord = current;
            },
            bindHide: function() {
                $('input[name=key]').blur(function() {
                    if ($('.suggest-dropdown:hover').length > 0) {
                        return false;
                    }
                    $.Radiko.Suggest.lastRequest.abort();
                    clearTimeout(window.suggest);
                    $('.suggest-dropdown').css('display', 'none');
                });
            }
        },
        jobScheduler: {
            id: 0,
            jobs: {},
            add: function(job, time, once) {
                if (time && once) {
                    this.id++;
                    this.jobs[this.id] = this.once(job, time);
                    return this.id;
                } else if (time && !once) {
                    this.id++;
                    this.jobs[this.id] = this.repeat(job, time);
                    return this.id;
                } else {
                    job();
                }
            },
            repeat: function(job, time) {
                return {
                    id: setInterval(job, time),
                    type: 'repeat'
                };
            },
            once: function(job, time) {
                return {
                    id: setTimeout(job, time),
                    type: 'once'
                };
            },
            remove: function(id) {
                var job = this.jobs[id];
                if (typeof job === 'undefined') {
                    return;
                }
                switch (job.type) {
                    case 'once':
                        clearTimeout(job.id);
                        break;
                    case 'repeat':
                        clearInterval(job.id);
                        break;
                }
                delete this.jobs[id];
            },
            clearAll: function() {
                for (var id in this.jobs) {
                    if (this.jobs.hasOwnProperty(id)) {
                        var job = this.jobs[id];
                        switch (job.type) {
                            case 'once':
                                clearTimeout(job.id);
                                break;
                            case 'repeat':
                                clearInterval(job.id);
                                break;
                        }
                        delete this.jobs[id];
                    }
                }
            },
            length: function() {
                return Object.keys(this.jobs).length;
            }
        },
        limitationObserver: function() {
            var self = this;
            var pubSub = {
                id: 0,
                callbacks: {
                    update: {},
                    "delete": {}
                },
                events: {},
                on: function(event, fn) {
                    if (!this.callbacks[event]) {
                        this.callbacks[event] = {};
                    }
                    this.id++;
                    this.callbacks[event][this.id] = fn;
                    this.events[this.id] = event;
                    return this.id;
                },
                off: function(id) {
                    var event = this.events[id];
                    if (typeof event === 'undefined') {
                        return;
                    }
                    delete this.callbacks[event][this.id];
                    delete this.events[this.id];
                },
                fire: function(event, key, newVal, oldVal) {
                    var callbacks = this.callbacks[event];
                    for (var id in callbacks) {
                        if (callbacks.hasOwnProperty(id)) {
                            callbacks[id](key, newVal, oldVal);
                        }
                    }
                }
            };
            return {
                create: create,
                set: set,
                remove: remove,
                clearAll: clearAll,
                watch: watch,
                unWatch: unWatch
            };

            function create(_, key, value) {
                var data = this.get(key);
                if (typeof data === 'undefined' || typeof data.listened_time === 'undefined' || +data.to !== +value.to) {
                    this.set(key, value);
                }
                return data || value;
            }

            function set(super_fn, key, val) {
                var oldVal = this.get(key);
                super_fn();
                pubSub.fire('update', key, val, oldVal);
            }

            function remove(super_fn, key) {
                var oldVal = this.get(key);
                super_fn();
                pubSub.fire('delete', key, undefined, oldVal);
            }

            function clearAll(super_fn, key) {
                var oldVals = {};
                this.each(function(val, key) {
                    oldVals[key] = val;
                });
                super_fn();
                for (var id in oldVals) {
                    if (oldVals.hasOwnProperty(id)) {
                        pubSub.fire('delete', key, undefined, oldVals[id]);
                    }
                }
            }

            function watch(_, event, fn) {
                return pubSub.on(event, fn);
            }

            function unWatch(_, id) {
                return pubSub.off(id);
            }
        }
    };
    if (location.search !== '') {
        var queries = $.Radiko.parseQueryString(location.search);
        for (var key in queries) {
            if (queries.hasOwnProperty('page') && key.indexOf('page') === 0 && queries[key].indexOf('timetable') === 0) {
                location.href = '/#!/timetable';
            }
        }
    }
    store.addPlugin($.Radiko.limitationObserver);
    var storeVersion = store.get('store_version');
    if (typeof storeVersion === 'undefined' || +storeVersion < $.Radiko.storeVersion) {
        store.each(function(value, key) {
            if (!value || !value.limit || !/[0-9]{14}$/.test(key)) {
                return;
            }
            store.remove(key);
        });
        store.set('store_version', $.Radiko.storeVersion);
    }
    store.each(function(value, key) {
        if (!value || !value.limit) {
            return;
        }
        var ft = /[0-9]{14}$/.exec(key);
        if (ft === null) {
            return;
        }
        var now = moment().format('YYYYMMDDHHmmss');
        var endDataTime = moment(ft[0], 'YYYYMMDDHHmmss').add(8, 'day');
        if (now >= endDataTime.format('YYYYMMDD050000')) {
            store.remove(key);
        }
    });
    Bookmark.initialize();
    $('body').on('submit', '#global-header-search-form', function() {
        var key = $('#global-header-search-form').find('[name="key"]').val();
        if (key == '') {
            alert('検索機能の利用には、検索キーワードの入力が必要です');
            return false;
        }
        var query = '';
        var regionId = $.Radiko.login_status.areafree ? encodeURIComponent('all') : '';
        query += 'key=' + encodeURIComponent($('#global-header-search-form').find('[name="key"]').val());
        query += '&filter=';
        query += '&start_day=';
        query += '&end_day=';
        query += '&area_id=' + encodeURIComponent($.cookie('default_area_id'));
        query += '&region_id=' + regionId;
        query += '&cul_area_id=' + encodeURIComponent($.cookie('default_area_id'));
        var pageUrl = $('body').attr('class').indexOf('page-default') == -1 ? '/#!/search/timeshift?' : '/#!/search/live?';
        location.href = pageUrl + query;
        return false;
    });
    $('body').on('keyup', '#global-header-search-form input[name=key]', $.Radiko.Suggest.keyUpHandler);
    $(document).on('click', '.item__live', function() {
        if (location.hash.match(/#\!\/top/)) {
            var scrollTop = $('.content__top-onair').offset().top - $('#header-nav').height();
            window.scrollTo(0, scrollTop);
        } else {
            window.isScroll = true;
        }
    });
    $.get('/rg/policy/?_=' + +moment())
        .done(function(e) {
            var el = $.grep($(e), function(el) {
                return $(el).attr('name') === 'date';
            });
            var date = undefined;
            if (el.length) {
                date = $(el).attr('content');
            }
            var key = 'radiko-policy-accept';
            var lastAcceptVersion = $.cookie(key) || store.get(key);
            if (!lastAcceptVersion || lastAcceptVersion !== date) {
                var defaultParams = {
                    html: '<div class="colorbox__title"><h1>radikoに関する利用規約等</h1></div><iframe src="/rg/policy/"' + +moment() + '></iframe><div class="text-center btn__area"><button class="btn btn--primary btn--medium js-policy-accept">承諾してradikoを利用する</button></div>',
                    className: 'colorbox policy',
                    closeButton: false,
                    overlayClose: false,
                    opacity: 0.3,
                    onOpen: function(e) {
                        $('.policy').on('click', '.js-policy-accept', function() {
                            if (date) {
                                $.cookie(key, date, {
                                    path: '/',
                                    expires: 365 * 10
                                });
                                store.set(key, date);
                            }
                            td.trackEvent('events_radiko', {
                                action: 'click',
                                category: '規約ダイアログ',
                                label: '承諾してradikoを利用する',
                                a_exp: $.Radiko.Mixins.Utility.uid3()
                            });
                            $.colorbox.close();
                        });
                    }
                };
                var params = $.extend(defaultParams, {});
                if (window.screen.width > 768) {
                    params = $.extend(defaultParams, {
                        width: '840px'
                    });
                }
                $.colorbox(params);
            } else {
                $.cookie(key, lastAcceptVersion, {
                    path: '/',
                    expires: 365 * 10
                });
                store.set(key, lastAcceptVersion);
            }
        })
        .fail(function(e) {
            console.log(e);
        });
});
var isUndefined = function(value) {
    return value == 'undefined' || value == undefined;
};
var getAreaId = function() {
    var result = $.cookie('areafree_id');
    if (isUndefined(result) || !$.Radiko.login_status.areafree) {
        return $.cookie('default_area_id');
    } else {
        return result;
    }
};
var isDefaultArea = false;
var makeHeader = function(_areaId) {
    var areaId = _areaId || getAreaId();
    $.Radiko.ajax('/v3/station/list/' + areaId + '.xml', function(data, status, xhr) {
        var Station = Backbone.Model.extend({});
        var Stations = Backbone.Collection.extend({
            model: Station
        });
        var xml = $(data);
        var stations = new Stations();
        xml.find('station').each(function() {
            var station = new Station({
                id: $(this).children('id').text(),
                name: $(this).children('name').text()
            });
            if ($.cookie('default_area_id') !== areaId && +$(this).find('areafree').text() === 0) {
                $.Radiko.exclude_station_list.push(station.id);
                return;
            }
            stations.push(station);
        });
        if (_.isUndefined(_areaId)) {
            $.Radiko.before_station_list = stations.pluck('id');
        }
        $('#station-list').html(JST['common/station-list']({
            models: stations.toJSON()
        }));
        $('.colorbox-area-list__list li a').click(function(e) {
            e.preventDefault();
            $.cookie('areafree_id', $(this).data('id'), {
                path: '/'
            });
            $.colorbox.close();
            location.href = $(this).attr('href');
            if ($(this).attr('href') == '/#!/timeshift') {
                $.Radiko.EventEmitter.trigger('removeview');
                $('body').attr('class', 'page-timeshift');
                radikoTs();
            } else if ($(this).attr('href') == '/#!/timeshift/s') {
                $.Radiko.EventEmitter.trigger('removeview');
                $('body').attr('class', 'page-timeshift');
                radikoTss();
            } else {
                $.Radiko.EventEmitter.trigger('removeview');
                $('body').attr('class', 'page-default');
                radikoTt();
            }
        });
        $('.btn--logout').on('click', function() {
            $.ajax({
                type: 'POST',
                url: '/ap/member/webapi/member/logout',
                dataType: 'json',
                success: function(data, status, xhr) {
                    if (data.status && data.status == '200') {
                        $.removeCookie('areafree_id');
                        location.href = '/';
                    }
                },
                error: function(xhr, status, e) {
                    $.Radiko.menu.render_menu_logged_out();
                }
            });
        });
        var searchText = $('.item__text');
        searchText.focus(function() {
            $(this).animate({
                backgroundColor: '#fff'
            }, 500);
        });
        searchText.blur(function() {
            $(this).animate({
                backgroundColor: '#f2f2f2'
            }, 500);
        });
        $('.footer__pagetop a').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
        if ($('#header-nav').length) {
            var headerNavPosition = $('#header-nav').offset().top;
            $(window).off('scroll');
            $(window).on('scroll', function() {
                var scrollTop = $(window).scrollTop();
                $.Radiko.scrollPosition[location.href] = scrollTop;
                if (scrollTop > headerNavPosition) {
                    $('#header-nav').addClass('fixed');
                } else {
                    $('#header-nav').removeClass('fixed');
                }
            });
            $('.page-static .navigation a[href^=#]:not([href^=#colorbox])').click(function() {
                var href = $(this).attr('href');
                var target = $(href == '#' || href == '' ? 'html' : href);
                var position = target.offset().top - $('#header-nav').height() * 2;
                $('html, body').animate({
                    scrollTop: position
                }, 10, 'linear');
                return false;
            });
        }
        $('#header-nav').find('a:not([href^=http])').click(function() {
            if ($(this).attr('href').match(/\/#\!\/top/)) {
                return true;
            }
            var href = $(this).attr('href');
            $('html, body').animate({
                scrollTop: 0
            }, 10, 'linear');
            return true;
        });
        $('.about').find('a:not([href^=http])').click(function() {
            var href = $(this).attr('href');
            $('html, body').animate({
                scrollTop: 0
            }, 10, 'linear');
            return true;
        });
        $('#now_on_air').on('click', 'a:not([href^=http])', function() {
            var href = $(this).attr('href');
            $('html, body').animate({
                scrollTop: 0
            }, 10, 'linear');
            return true;
        });
        $('.ui-tab').on('click', '.ui-tab-nav', function() {
            var target = $(this).attr('href');
            $('.ui-tab-nav,.ui-tab-body').removeClass('active');
            $(this).addClass('active');
            $(target).addClass('active');
            return false;
        });
    }, function(xhr, status, e) {}, 'xml', false);
    $.Radiko.HeaderBanner();
};
var setMetaText = function(options) {
    var defaults = {
        'title': 'radiko',
        'og:title': 'radiko',
        'og:type': 'website',
        'og:description': 'PC・スマートフォンでラジオが聴けるradiko　一人の時間をもっと快適に楽しく！今日からあなたもradikoで音のある生活、はじめよう！',
        'og:url': 'http://radiko.jp/',
        'og:site_name': 'radiko',
        'og:image': 'http://radiko.jp/images/radiko-icon-circle.png?_=1',
        'twitter:card': 'summary_large_image',
        'twitter:site': '@radiko_jp',
        'twitter:title': 'radiko',
        'twitter:description': 'radikoは、パソコンがそのままラジオ受信機となる「IP(Internet Protocol)サイマルラジオ」の配信サービスです'
    };
    var setting = $.extend(defaults, options);
    for (var key in setting) {
        if (setting.hasOwnProperty(key)) {
            if (key.indexOf('title') == 0) {
                document.title = setting[key];
            } else {
                if (key.indexOf('og') == 0) {
                    $('meta[property="' + key + '"]').attr('content', setting[key]);
                } else if (key.indexOf('twitter') == 0) {
                    $('meta[name="' + key + '"]').attr('content', setting[key]);
                }
            }
        }
    }
};
var updatePlayingProgramInfo = function(info) {
    if (window.programInfo === undefined) {
        window.programInfo = {};
    }
    _.each(['ft', 'to', 'title', 'pfm', 'stationId', 'stationName'], function(key) {
        if (info[key] !== undefined) {
            window.programInfo[key] = info[key];
        }
    });
};
var translateRadikoTimeHours = function(ftmt, tomt) {
    var ft_h = ftmt.hour();
    var ft_m = ftmt.minute();
    var to_h = tomt.hour();
    var to_m = tomt.minute();
    if (ft_h < 5) {
        ft_h += 24;
        to_h += 24;
    }
    if (ft_h < 24 && to_h < 5) {
        to_h += 24;
    }
    return {
        ft_hour: ft_h,
        to_hour: to_h
    };
};
$(function() {
    $('.img-list__text').each(function() {
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
});
$(function() {
    var hasFlash = false;
    try {
        var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (fo) {
            hasFlash = true;
        }
    } catch (e) {
        if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
            var cutSt = navigator.userAgent.indexOf('Version');
            var cutEd = navigator.userAgent.indexOf(' ', cutSt);
            var version = navigator.userAgent.substring(cutSt + 8, cutEd);
            if (+version >= 10) {
                var $closeBtn = $('.alert-flash .btn');
                $closeBtn.show();
                $closeBtn.colorbox({
                    width: '640px',
                    inline: true,
                    speed: 0,
                    opacity: 0.5,
                    onOpen: function(e) {
                        window.viewTimeshiftTop = false;
                        var hide = false;
                        var $colorBoxAlert = $('#colorbox--alert-flash');
                        $colorBoxAlert.off('click', '.colorbox__link');
                        $colorBoxAlert.on('click', '.colorbox__link', function(e) {
                            var target = e.currentTarget;
                            if (!target) {
                                return;
                            }
                            var $icon = $(target).find('i');
                            if ($icon.hasClass('icon--agree-off')) {
                                $icon.removeClass('icon--agree-off');
                                $icon.addClass('icon--agree-on');
                                hide = true;
                            } else {
                                $icon.removeClass('icon--agree-on');
                                $icon.addClass('icon--agree-off');
                                hide = false;
                            }
                        });
                        $colorBoxAlert.off('click', '.colorbox__btn');
                        $colorBoxAlert.on('click', '.colorbox__btn', function(e) {
                            window.viewTimeshiftTop = hide;
                            $.colorbox.close();
                        });
                    },
                    onClosed: function(e) {
                        $.cookie('hide-alert-flash', window.viewTimeshiftTop, {
                            path: '/',
                            expires: 365
                        });
                        $('.alert-flash').slideUp(250);
                    }
                });
                hasFlash = $.cookie('hide-alert-flash') === 'true';
            } else {
                if (navigator.mimeTypes &&
                    navigator.mimeTypes['application/x-shockwave-flash'] != undefined &&
                    navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
                    hasFlash = true;
                }
            }
        } else {
            if (navigator.mimeTypes &&
                navigator.mimeTypes['application/x-shockwave-flash'] != undefined &&
                navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
                hasFlash = true;
            }
        }
    }
    if (hasFlash === false && (typeof RadikoJSPlayer === 'undefined' || !RadikoJSPlayer.isSupported())) {
        $('.alert-flash').show();
    }
});