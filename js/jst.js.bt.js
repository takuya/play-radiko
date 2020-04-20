this.JST = {
    "areafree/area-list": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(stations, function(station) {
                ;
                __p += '\n<li class="item"><a class="item__link ';
                if (station.id == user_area) {
                    ;
                    __p += 'item__selected';
                };
                __p += '" href="' +
                    __e(station.id) +
                    '">';
                if (station.id != user_area) {
                    ;
                    __p += '<i class="icon icon--arrow-r-02 icon--left"></i>';
                };
                __p += '\n    ' +
                    __e(station.name) +
                    '</a></li>';
            });;


        }
        return __p
    },
    "areafree/region-list": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(regions, function(region) {
                ;
                __p += '\n<li class="item"><a class="item__link ';
                if (region.id == user_region) {
                    ;
                    __p += 'item__selected';
                };
                __p += '" href="' +
                    __e(region.id) +
                    '">' +
                    __e(region.name) +
                    '</a></li>';
            });;


        }
        return __p
    },
    "common/companion-banner": function(obj) {
        obj || (obj = {});
        var __t, __p = '';
        with(obj) {
            __p += '\n<div class="live-detail__ad"><a class="js-click-banner" href="' +
                ((__t = (item.link)) == null ? '' : __t) +
                '" target="_blank"><img src="' +
                ((__t = (item.url)) == null ? '' : __t) +
                '"/></a><a class="close" href="javascript:void(0)"><i class="icon icon--close"></i><span>閉じる</span></a></div>';

        }
        return __p
    },
    "common/header": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<header>\n  <div class="header__utility">\n    <div class="header__inner">\n      <div class="header__logo"><a href="/#!/top" tabindex="1"><img src="' +
                __e(logo) +
                '?20190403" alt="radiko.jp"/></a><span class="area"></span>';
            if (top == true) {
                ;
                __p += '<a class="item__live" href="/#!/top"><img class="live" src="/apps/images/top-live-balloon.png"/></a>';
            };
            __p += '</div>\n      <div class="header__menu">\n        <ul class="group">\n          <li class="item item--search">\n            <form id="global-header-search-form" action="/#!/search/live" method="get">\n              <input class="item__text" id="search_text" type="text" name="key" placeholder="検索" autocomplete="off"/>\n              <div class="suggest-dropdown" id="suggest-dropdown"></div>\n            </form>\n          </li>\n        </ul>\n        <ul class="group">';
            if (!$.Radiko.login_status.hasLogin) {
                ;
                __p += '\n          <li class="item item--login"><a class="btn btn--login" href="' +
                    ((__t = ('https://' + location.host)) == null ? '' : __t) +
                    '/ap/member/login/login_page"><i class="icon icon--login"></i>ログイン</a></li>\n          <li class="item item--premium"><a class="btn btn--premium" href="/ap/member/regist/regist_mail_page?premium=1" target="_blank"><i class="icon icon--premium"></i>プレミアム会員登録</a></li>';
            } else {
                ;
                __p += '\n          <li class="item item--setting"><a class="btn btn--setting" href="' +
                    ((__t = ('https://' + location.host)) == null ? '' : __t) +
                    '/ap/member/attribute/mypage" target="_blank"><i class="icon icon--setting"></i>設定</a></li>\n          <li class="item item--logout"><a class="btn btn--logout" href="javascript:void(0)"><i class="icon icon--login"></i>ログアウト</a></li>';
            };
            __p += '\n        </ul>\n      </div>\n      <div class="header__banner"></div>\n    </div>\n  </div>\n  <div class="header__nav-container">\n    <div class="header__nav-outer" id="header-nav">\n      <div class="header__nav">\n        <div class="header__inner">\n          <ul class="item__outer group">\n            <li class="item"><a class="item__live item__link" href="/#!/top"><span>ライブ</span></a></li>\n            <li class="item"><a class="item__timeshift item__link" href="/#!/timeshift"><span>タイムシフト</span></a></li>\n            <li class="item"><a class="item__areafree item__link" href="/#!/areafree"><span>エリアフリー</span></a></li>\n            <li class="item"><a class="item__radiko item__link" href="/#!/fun"><span>ラジコの楽しみ方</span></a></li>\n            <li class="item"><a class="item__help item__link" href="http://faq.radiko.jp/" target="_blank"><span>ヘルプ</span></a></li>\n          </ul>\n        </div>\n      </div>\n      <div class="header__station-list">\n        <div class="header__inner group">\n          <p class="btn"><a href="/#!/timetable">番組表</a></p>\n          <ul id="station-list"></ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>';

        }
        return __p
    },
    "common/onair-program": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n';
            _.map(models, function(model) {
                ;
                __p += '\n';
                if (model.isShow) {
                    ;
                    __p += '\n<li class="img-list__item"><a class="img-list__link" href="/#!/live/' +
                        __e(model.id) +
                        '" data-station_id="' +
                        __e(model.id) +
                        '">\n    <p class="img-list__channel"><img src="/station/logo/' +
                        __e(model.id) +
                        '/logo_medium.png" alt="' +
                        __e(model.name) +
                        '"/></p>\n    <div class="img-list__img"><img src="' +
                        __e(model.progImage) +
                        '" alt="" width="235" height="127"/><img class="play" src="/apps/images/play_blue_gauss1.png" alt=""/></div>\n    <p class="img-list__title ellipsis">' +
                        __e(model.progTitle) +
                        '</p>\n    <p class="img-list__cast ellipsis" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis">出演者 : ' +
                        __e(model.progPfm) +
                        '</p>\n    <p class="img-list__time">' +
                        __e(model.progSchedule) +
                        '</p></a></li>';
                };
                __p += '\n';
            });;


        }
        return __p
    },
    "common/others-program": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<ul class="img-list group">';
            _.each(models, function(model) {
                ;
                __p += '\n  <li class="img-list__item"><a class="img-list__link" href="' +
                    __e(model.url) +
                    '" target="_blank">\n      <div class="img-list__img"><img src="' +
                    __e(model.image_url) +
                    '" alt="" width="235" height="127"/></div>';
                if (model.type == 'advertise') {
                    ;
                    __p += '\n      <p class="img-list__genre genre--info">INFO</p>';
                } else {
                    ;
                    __p += '\n      <p class="img-list__genre">EVENT</p>';
                };
                __p += '\n      <p class="img-list__title">' +
                    __e(model.program_name) +
                    '</p>\n      <p class="img-list__time">' +
                    __e(model.onair) +
                    '</p>\n      <p class="img-list__text">' +
                    __e(model.description) +
                    '</p></a></li>';
            });;
            __p += '\n</ul>';

        }
        return __p
    },
    "common/policy": function(obj) {
        obj || (obj = {});
        var __t, __p = '';
        with(obj) {
            __p += '\n<div class="colorbox__title">\n  <h1>radikoに関する利用規約等</h1>\n</div>\n<iframe src="/rg/policy/"></iframe>\n<div class="text-center btn__area">\n  <button class="btn btn--primary btn--medium js-policy-accept">承諾してradikoを利用する</button>\n</div>';

        }
        return __p
    },
    "common/program-table-items": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(models, function(model) {
                ;
                __p += '\n<div class="item-outer js-scroll-item">';
                _.each(model.progs, function(prog) {
                    ;
                    __p += '\n  <div class="item item ' +
                        __e(prog.addClass) +
                        '" data-start="' +
                        __e(prog.ftl) +
                        '" data-end="' +
                        __e(prog.tol) +
                        '" data-duration="' +
                        __e(prog.dur) +
                        '">\n    <div class="contents">\n      <div class="back">\n        <div class="scrollContents"><a href="' +
                        __e(prog.program_url) +
                        '">\n            <p class="title">' +
                        __e(prog.title) +
                        '</p>\n            <p class="cast">' +
                        __e(prog.pfm) +
                        '</p>\n            <p class="time">' +
                        __e(prog.scheduleString) +
                        '</p>';
                    if (prog.listenType != 0) {
                        ;
                        __p += '\n            <p class="timelimit">';
                        if (prog.listenType == 1) {
                            ;
                            __p += '<i class="icon"></i>';
                        } else {
                            ;
                            __p += '<i class="icon over"></i>';
                        };
                        __p += '</p>';
                    };
                    __p += '</a></div>\n      </div>\n    </div>\n  </div>';
                });;
                __p += '\n</div>';
            });;


        }
        return __p
    },
    "common/station-list": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(models, function(model) {
                ;
                __p += '\n<li><a href="/#!/live/' +
                    __e(model.id) +
                    '"><i class="icon icon--arrow-r-06"></i>' +
                    __e(model.name) +
                    '</a></li>';
            });


        }
        return __p
    },
    "common/web-top": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(items, function(item) {
                ;
                __p += '<a href="' +
                    __e(item.href) +
                    '" data-evid="' +
                    __e(item.evid) +
                    '" target="_blank"><img src="' +
                    __e(item.src) +
                    '" alt="' +
                    __e(item.desc) +
                    '"/></a>';
            });;


        }
        return __p
    },
    "detail-common/noa-item": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<h2 class="noa-title">オンエア曲</h2>\n<div class="noa-item">\n  <div class="noa-item__img"><img src="' +
                __e(model.image == '' ? '/apps/images/no_image_noa.png' : model.image) +
                '" alt=""/></div>\n  <div class="noa-item__text">\n    <p class="noa-item__name">' +
                __e(model.artist) +
                '</p>\n    <p class="noa-item__title">' +
                __e(model.title) +
                '</p>\n    <p class="noa-item__time">' +
                __e(model.stamp) +
                '</p>\n  </div>\n  <ul class="noa-item__link group">';
            if (!_.isUndefined(model.recochoku_url) && model.recochoku_url != '') {
                ;
                __p += '\n    <li class="item"><a class="btn btn--recochoku" target="_blank" href="' +
                    __e(model.recochoku_url) +
                    '">レコチョク</a></li>';
            };
            __p += '\n    ';
            if (!_.isUndefined(model.itunes_url) && model.itunes_url != '') {
                ;
                __p += '\n    <li class="item"><a class="btn btn--itunes" target="_blank" href="' +
                    __e(model.itunes_url) +
                    '">itunes</a></li>';
            };
            __p += '\n    ';
            if (!_.isUndefined(model.amazon_url) && model.amazon_url != '') {
                ;
                __p += '\n    <li class="item"><a class="btn btn--amazon" target="_blank" href="' +
                    __e(model.amazon_url) +
                    '">amazon</a></li>';
            };
            __p += '\n  </ul>';
            if (model.events && model.events.length) {
                ;
                __p += '\n  <div class="noa-item__ticket">\n    <h3>公演情報</h3>\n    <div class="ticket-content">\n      <div class="ticket-thumbnail" style="display: ' +
                    __e(model.events[0].thumbnail ? "block" : "none") +
                    ';"><img src="' +
                    __e(model.events[0].thumbnail) +
                    '"/></div>\n      <div class="ticket-detail">\n        <div class="ticket-detail__running" style="display: ' +
                    __e(model.events[0].start_date !== "-" ? "block" : "none") +
                    ';">' +
                    __e(model.events[0].start_date) +
                    '' +
                    ((__t = (model.events[0].end_date ? '〜<br />' + model.events[0].end_date : '')) == null ? '' : __t) +
                    '</div>\n        <div class="ticket-detail__location">' +
                    __e(model.events[0].location) +
                    '</div>\n      </div>\n    </div>\n    <div class="ticket-list__link"><a class="btn btn--default btn--block btn--ticket-dialog" type="button" data-gahittype="event" data-eaction="url" data-ecategory="公演チケットの一覧を見る" data-elabel="' +
                    __e(stream_type + '_' + model.label_value) +
                    '">公演チケットの一覧を見る</a></div>\n  </div>';
            };
            __p += '\n</div>';

        }
        return __p
    },
    "detail-common/play-musics": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<div class="content__section section">\n  <h2 class="heading heading-lv02"><i class="icon icon--onair icon--left"></i>オンエア曲<span class="heading-lv02__supplement">番組内で放送した楽曲</span></h2>\n  <div class="tune-list">\n    <ul class="tune-list__inner group">';
            _.each(models, function(model, index) {
                ;
                __p += '\n      <li class="tune-list__item">\n        <div class="tune-list__img"><img src="' +
                    __e(model.image == '' ? '/apps/images/no_image_noa.png' : model.image) +
                    '" alt="" width="100" height="100"/></div>\n        <div class="tune-list__text">\n          <p class="tune-list__name">' +
                    __e(model.artist) +
                    '</p>\n          <p class="tune-list__title">' +
                    __e(model.title) +
                    '</p>\n          <p class="tune-list__time">' +
                    __e(model.stamp) +
                    '</p>\n        </div>\n        <ul class="tune-list__link group">';
                if (!_.isUndefined(model.recochoku_url) && model.recochoku_url != '') {
                    ;
                    __p += '\n          <li class="item"><a class="btn btn--recochoku" target="_blank" href="' +
                        __e(model.recochoku_url) +
                        '">レコチョク</a></li>';
                };
                __p += '\n          ';
                if (!_.isUndefined(model.itunes_url) && model.itunes_url != '') {
                    ;
                    __p += '\n          <li class="item"><a class="btn btn--itunes" target="_blank" href="' +
                        __e(model.itunes_url) +
                        '">itunes</a></li>';
                };
                __p += '\n          ';
                if (!_.isUndefined(model.amazon_url) && model.amazon_url != '') {
                    ;
                    __p += '\n          <li class="item"><a class="btn btn--amazon" target="_blank" href="' +
                        __e(model.amazon_url) +
                        '">amazon</a></li>';
                };
                __p += '\n        </ul>';
                if (model.events && model.events.length) {
                    ;
                    __p += '\n        <div class="tune-list__ticket">\n          <button class="btn btn--primary btn--ticket" data-id="' +
                        __e(index) +
                        '" data-gahittype="event" data-eaction="url" data-ecategory="公演チケット情報" data-elabel="' +
                        __e(stream_type + '_' + model.label_value) +
                        '">公演チケット情報</button>\n        </div>';
                };
                __p += '\n      </li>';
            });;
            __p += '\n    </ul>\n    <div class="tune-list__more">\n      <p><a href="javascript:void(0)"><i class="icon icon--plus icon--left"></i>もっと見る</a></p>\n    </div>\n  </div>\n</div>';

        }
        return __p
    },
    "detail-common/ticket-dialog-list": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<div class="ticket-dialog__contents__header">\n  <p class="title"><span class="bold">' +
                __e(item.artist) +
                '</span>の公演・チケット情報</p>\n</div>\n<div class="ticket-dialog__contents__list ticket-detail">\n  <div class="list-main">\n    <div class="list-header">\n      <div class="row">\n        <div>公演期間</div>\n        <div>会場</div>\n        <div>購入先</div>\n      </div>\n    </div>\n    <div class="list-contents ticket-dialog__ticket-list">';
            _.each(item.events, function(event) {
                ;
                __p += '\n      <div class="row">\n        <div>' +
                    __e(event.start_date) +
                    '' +
                    ((__t = (event.end_date ? '〜<br />' + event.end_date : '')) == null ? '' : __t) +
                    '</div>\n        <div>' +
                    __e(event.location) +
                    '</div>\n        <div class="ticket-dialog__contents__list__link"><a href="' +
                    __e(event.url) +
                    '" target="_blank" data-gahittype="event" data-eaction="url" data-ecategory="詳細はこちら" data-elabel="' +
                    __e(stream_type + '_' + item.label_value + '_' + event.name + '_' + item.artist + '_' + event.label) +
                    '"><img src="/apps/images/ticket/vendor/' +
                    __e(event.vendor) +
                    '.png"/></a></div>\n      </div>';
            });
            __p += '\n    </div>\n  </div>\n</div>';

        }
        return __p
    },
    "detail-common/ticket-dialog": function(obj) {
        obj || (obj = {});
        var __t, __p = '';
        with(obj) {
            __p += '\n<div class="ticket-dialog__contents">' +
                ((__t = (contents)) == null ? '' : __t) +
                '</div>\n<div class="ticket-dialog__attention">※ 公演開始が早い順に表示しています。<br/>※ 販売終了となっているチケット情報も表示されます。<br/>チケット情報の詳細や最新情報はチケットプレイガイド各社サイトにてご確認ください。</div>';

        }
        return __p
    },
    "info/info-archive-list": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(archive.slice(0, 1), function(year) {
                ;
                __p += '\n<div class="news__archive news-archive news-archive--latest" style="border-top: 1px solid #ddd; margin-top: 20px; padding-top: 20px;">\n  <p class="news-archive__title">' +
                    __e(year.year) +
                    '年</p>\n  <ul class="news-archive__list year-list">\n    ';
                _.each(year.months.reverse(), function(month) {
                    ;
                    __p += '\n    ';
                    if (!_.isUndefined(month)) {
                        ;
                        __p += '\n    <li><a href="/#!/info/archive/' +
                            __e(month.link) +
                            '"><i class="icon icon--arrow-r-02 icon--left"></i><span>' +
                            __e(month.month) +
                            '</span></a></li>';
                    };
                    __p += '\n    ';
                });;
                __p += '\n  </ul>\n</div>';
            });;
            __p += '\n';
            _.each(archive.slice(1), function(year) {
                ;
                __p += '\n<div class="news__archive news-archive">\n  <p class="news-archive__title">' +
                    __e(year.year) +
                    '年</p>\n  <div class="news-archive__select ui-form-select">\n    <select class="js-archive">\n      <option>-</option>';
                _.each(year.months.reverse(), function(month) {
                    ;
                    __p += '\n      ';
                    if (!_.isUndefined(month)) {
                        ;
                        __p += '\n      <option value="' +
                            __e(month.link) +
                            '">' +
                            __e(month.month) +
                            '</option>';
                    };
                    __p += '\n      ';
                });;
                __p += '\n    </select>\n  </div>\n</div>';
            });;


        }
        return __p
    },
    "info/info-detail": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<p class="news-detail__date">' +
                __e(localeDateString) +
                '</p>\n<h1 class="news-detail__title">' +
                __e(title) +
                '</h1>\n<div class="news-detail__content">' +
                ((__t = (body)) == null ? '' : __t) +
                '</div>\n<div class="pager">\n  <ul class="pager__list group">\n    <li class="item item--prev">';
            if (prevInfo != '') {
                ;
                __p += '<a href="' +
                    __e(prevInfo) +
                    '"><i class="icon icon--prev icon--left"></i><span>前へ</span></a>';
            };
            __p += '</li>\n    <li class="item item--next">';
            if (nextInfo != '') {
                ;
                __p += '<a href="' +
                    __e(nextInfo) +
                    '"><span>次へ</span><i class="icon icon--next icon--right"></i></a>';
            };
            __p += '</li>\n  </ul>\n  <p class="pager__index"><a href="javascript:void(0)"><i class="icon icon--arrow-t-02 icon--left"></i>お知らせ一覧に戻る</a></p>\n</div>';

        }
        return __p
    },
    "info/info-list": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<div class="news__main">\n  <ul class="news__list news-list">';
            _.each(list, function(item) {
                ;
                __p += '\n    <li class="news-list__item">\n      <p class="news-list__date">' +
                    __e(item.localeDateString) +
                    '</p>\n      <p class="news-list__title"><a href="/#!/info/' +
                    __e(item.id) +
                    '"><i class="icon icon--arrow-r-02 icon--left"></i>' +
                    __e(item.title) +
                    '</a></p>\n      <p class="news-list__text">' +
                    ((__t = (item.body)) == null ? '' : __t) +
                    '</p>\n    </li>';
            });;
            __p += '\n  </ul>\n  <div class="pagination">\n    <ul class="pagination__list">';
            if (currentPage > 1) {
                ;
                __p += '\n      <li class="item item--prev"><a href="/#!/info/archive/' +
                    __e(currentMonth) +
                    '/' +
                    __e(currentPage - 1) +
                    '"><i class="icon icon--prev"></i><span>前へ</span></a></li>';
            };
            __p += '\n      ';
            _.each(pager, function(page) {
                ;
                __p += '\n      <li class="item item--num ';
                if (page.isCurrent) {
                    ;
                    __p += 'item--current';
                };
                __p += '"><a href="/#!/info/archive/' +
                    __e(currentMonth) +
                    '/' +
                    __e(page.number) +
                    '">' +
                    __e(page.number) +
                    '</a></li>';
            });;
            __p += '\n      ';
            if (currentPage < pager.length) {
                ;
                __p += '\n      <li class="item item--next"><a href="/#!/info/archive/' +
                    __e(currentMonth) +
                    '/' +
                    __e(currentPage + 1) +
                    '"><i class="icon icon--next"></i><span>次へ</span></a></li>';
            };
            __p += '\n    </ul>\n  </div>\n</div>\n<div class="news__sub">';
            _.each(archive.slice(0, 1), function(year) {
                ;
                __p += '\n  <div class="news__archive news-archive news-archive--latest">\n    <p class="news-archive__title">' +
                    __e(year.year) +
                    '年</p>\n    <ul class="news-archive__list year-list">\n      ';
                _.each(year.months.reverse(), function(month) {
                    ;
                    __p += '\n      ';
                    if (!_.isUndefined(month)) {
                        ;
                        __p += '\n      <li><a href="/#!/info/archive/' +
                            __e(month.link) +
                            '"><i class="icon icon--arrow-r-02 icon--left"></i><span>' +
                            __e(month.month) +
                            '</span></a></li>';
                    };
                    __p += '\n      ';
                });;
                __p += '\n    </ul>\n  </div>';
            });;
            __p += '\n  ';
            _.each(archive.slice(1), function(year) {
                ;
                __p += '\n  <div class="news__archive news-archive">\n    <p class="news-archive__title">' +
                    __e(year.year) +
                    '年</p>\n    <div class="news-archive__select ui-form-select">\n      <select class="js-archive">\n        <option value="">-</option>';
                _.each(year.months.reverse(), function(month) {
                    ;
                    __p += '\n        ';
                    if (!_.isUndefined(month)) {
                        ;
                        __p += '\n        <option value="' +
                            __e(month.link) +
                            '" selected="' +
                            __e(month.link.indexOf(currentMonth) != -1 ? 'selected' : 'false') +
                            '">' +
                            __e(month.month) +
                            '</option>';
                    };
                    __p += '\n        ';
                });;
                __p += '\n      </select>\n    </div>\n  </div>';
            });;
            __p += '\n</div>';

        }
        return __p
    },
    "info/info-recent-list": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<ul class="news-archive__list">';
            _.each(list, function(item) {
                ;
                __p += '\n  <li>\n    <p class="news-archive__date">' +
                    __e(item.localeDateString) +
                    '</p><a href="/#!/info/' +
                    __e(item.id) +
                    '"><i class="icon icon--arrow-r-02 icon--left"></i><span class="title">' +
                    __e(item.title) +
                    '</span></a>\n  </li>';
            });;
            __p += '\n</ul>';

        }
        return __p
    },
    "live-detail/ad-history": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<ul class="live-detail__banner">';
            _.each(models, function(model) {
                ;
                __p += '\n  <li class="item"><a href="' +
                    __e(model.href) +
                    '" target="_blank" data-evid="' +
                    __e(model.evid) +
                    '"><img src="' +
                    __e(model.img) +
                    '" alt="' +
                    __e(model.desc) +
                    '" width="202" height="38"/></a></li>';
            });;
            __p += '\n</ul>\n<p class="live-detail__attention" style="display: none;"><i class="icon icon--attention"></i>エリアフリー聴取では、聴取しているエリアに該当しない広告が配信される場合がありますのでご注意ください。</p>';

        }
        return __p
    },
    "live-detail/area-out": function(obj) {
        obj || (obj = {});
        var __t, __p = '';
        with(obj) {
            __p += '\n<p class="live-detail__well">この番組は配信エリア外のため、聴くことができません。プレミアム会員に登録すると聴くことができます。</p>\n<p class="live-detail__premium"><a class="btn btn--primary btn--large" href="/ap/member/regist/regist_mail_page?premium=1" target="_blank"><i class="icon icon--arrow-r-03 icon--left"></i>プレミアム会員登録はこちら</a></p>\n<p class="live-detail__login"><span>プレミアム会員の方はこちら</span><a class="btn btn--primary btn--large" href="' +
                ((__t = ('https://' + location.host)) == null ? '' : __t) +
                '/ap/member/login/login_page" target="_blank"><i class="icon icon--arrow-r-03 icon--left"></i>ログインする</a></p>';

        }
        return __p
    },
    "live-detail/colorbox-share": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape;
        with(obj) {
            __p += '\n<ul class="colorbox__share">\n  <li><a class="btn__facebook" data-url="' +
                ((__t = (facebookUrl)) == null ? '' : __t) +
                '" href="' +
                ((__t = (facebookUrl + progFt)) == null ? '' : __t) +
                '"><i class="icon icon--facebook-02 icon--left"></i>Facebook</a></li>\n  <li><a class="btn__twitter" data-urlbase="' +
                ((__t = (twitterUrl)) == null ? '' : __t) +
                '" href="' +
                ((__t = (twitterUrl + progFt)) == null ? '' : __t) +
                '"><i class="icon icon--twitter-02 icon--left"></i>Twitter</a></li>\n  <li><a id="clipboard" href="javascript:void(0)" data-urlbase="' +
                ((__t = (clipUrl)) == null ? '' : __t) +
                '" data-clipboard-text="' +
                ((__t = (clipUrl + progFt)) == null ? '' : __t) +
                '"><i class="icon icon--url icon--left"></i>URLをコピー</a></li>\n  <input id="share-url" type="hidden" value="https://' +
                __e(location.host) +
                '/v2/api/ts/playlist.m3u8?l=15&station_id=' +
                __e(stationId) +
                '&ft=' +
                __e(progFt) +
                '&to=' +
                __e(progTo) +
                '"/>\n</ul>';

        }
        return __p
    },
    "live-detail/now-programs-list": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<h1 class="live-detail__title">' +
                ((__t = (progTitle)) == null ? '' : __t) +
                '</h1>\n<div class="live-detail__body group" to="' +
                __e(progTo) +
                '">\n  <div class="live-detail__img"><img src="' +
                __e(progImage) +
                '" alt="" width="356"/></div>\n  <div class="live-detail__text">\n    <div class="live-detail__cast" style="height:1.3em;margin-bottom:0.5em;overflow:hidden;">\n      <div class="live-detail__cast-title" style="height:1.3em;display:block;float:left;width:65px;">出演者 :</div>\n      <div class="live-detail__cast-name" style="width:290px;float:right !important;height:20px;overflow:hidden;">' +
                ((__t = (progPfm2)) == null ? '' : __t) +
                '</div>\n    </div>\n    <p class="live-detail__time" style="clear:both;">' +
                ((__t = (progSchedule)) == null ? '' : __t) +
                '</p>\n    <p class="listen-limit timelimit"></p>\n    <p class="live-detail__play">';
            if (!nowPlaying) {
                ;
                __p += '<a class="play-radio item btn btn--primary btn--x-large btn--play" href="javascript:void(0);" tabindex="2"><i class="icon icon--play icon--left"></i>再生する</a>';
            } else {
                ;
                __p += '<a class="play-radio item btn btn--primary btn--x-large btn--stop" href="javascript:void(0);"><i class="icon icon--stop-02 icon--left"></i>停止する</a>';
            };
            __p += '</p>\n    <p class="live-detail__share">\n      <button class="btn btn--default btn--block btn--share" href="#colorbox--share"><i class="icon icon--share icon--left"></i>友達に教える</button>\n    </p>\n    <div class="live-detail__noti"><a class="btn btn--default btn--block btn--tooltip" href=""><i class="icon icon--noti icon--left"></i>通知を予約</a>\n      <div class="tooltip">\n        <div class="bg"></div>\n        <ul>\n          <li><a href="' +
                ((__t = (googleCalUrl)) == null ? '' : __t) +
                '" target="_blank"><i class="icon icon--arrow-r-02 icon--left"></i>Googleカレンダーに追加</a></li>\n          <li><a href="' +
                ((__t = (iCalUrl)) == null ? '' : __t) +
                '"><i class="icon icon--arrow-r-02 icon--left"></i>iCalに追加</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="live-detail__failed group"></div>\n<div class="live-detail__description">' +
                ((__t = (progDesc)) == null ? '' : __t) +
                '<br/>' +
                ((__t = (progInfo)) == null ? '' : __t) +
                '</div>';
            if (progUrl) {
                ;
                __p += '\n<div class="live-detail__sites">\n  <div class="title">番組サイト</div>\n  <ul class="list">\n    <li class="item"><a href="' +
                    ((__t = (progUrl)) == null ? '' : __t) +
                    '" target="_blank"><i class="icon icon--arrow-r-02 icon--left"></i>' +
                    ((__t = (progUrl)) == null ? '' : __t) +
                    '</a></li>\n  </ul>\n</div>';
            };
            __p += '\n<div id="topic-list"></div>';

        }
        return __p
    },
    "live-detail/player-detail": function(obj) {
        obj || (obj = {});
        var __t, __p = '';
        with(obj) {
            __p += '\n<p class="tooltip" style="display: none;"><img src="/apps/images/img_playerarea_blue_01.png" alt=""/></p>\n<div class="program-ticker"></div>';

        }
        return __p
    },
    "live-detail/program-table-date": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(dateList, function(date) {
                ;
                __p += '\n<div class="program-table__date js-scroll-item">\n  <p class="item item--weekday ';
                if (date.isCurrent) {
                    ;
                    __p += 'item--today';
                };
                __p += ' ';
                if (date.isSat) {
                    ;

                    if (date.isCurrent) {
                        ;
                        __p += 'item--today';
                    };
                    __p += ' ';
                    if (date.isSat) {
                        ;
                        __p += 'item--saturday';
                    };
                    __p += ' ';
                    if (date.isSun) {
                        ;
                        __p += 'item--sunday';
                    };

                };
                __p += ' ';
                if (date.isSun) {
                    ;
                    __p += 'item--sunday';
                };
                __p += '">' +
                    __e(date.dateString) +
                    '<span class="week">' +
                    __e(date.dayString) +
                    '</span></p>\n</div>';
            });;


        }
        return __p
    },
    "live-detail/sync-ad": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            if (item) {
                ;
                __p += '\n<div class="live-detail__ad">\n  <iframe src="' +
                    ((__t = (item.content_url)) == null ? '' : __t) +
                    '" frameborder="0" width="630" height="340"></iframe><a class="close" href="javascript:void(0)"><i class="icon icon--close"></i><span>閉じる</span></a>\n</div>';
            };


        }
        return __p
    },
    "live-detail/ticker": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(progs, function(prog) {
                ;
                __p += '<a href="/#!/live/' +
                    __e(stationId) +
                    '" data-ft="' +
                    __e(prog.ft) +
                    '" data-to="' +
                    __e(prog.to) +
                    '" data-title="' +
                    __e(prog.progTitle) +
                    '" data-pfm="' +
                    __e(prog.progPfm) +
                    '" data-stationId="' +
                    __e(prog.stationId) +
                    '" data-stationName="' +
                    __e(prog.stationName) +
                    '" style="position: relative">\n  <div style="position: relative">\n    <p class="img"><img src="' +
                    __e(prog.progImage) +
                    '" alt="" width="68"/></p>\n    <div class="title">\n      <p class="marquee">' +
                    ((__t = (prog.progTitle)) == null ? '' : __t) +
                    '</p>\n    </div>\n    <p class="name">出演者 : ' +
                    ((__t = (prog.progPfm)) == null ? '' : __t) +
                    '</p>\n  </div></a>';
            });;


        }
        return __p
    },
    "live-detail/timeline-station": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<div class="timeline-col">\n  <div class="timeline-header">\n    <div class="timeline-title">放送局からのツイート</div>\n  </div>\n  <div class="timeline-body">';
            _.each(models, function(model) {
                ;
                __p += '\n    <div class="stream-item-wrapper">\n      <div class="stream-item">\n        <div class="stream-item-header"><small class="time"><a href="https://twitter.com/' +
                    __e(model.user.screen_name) +
                    '/status/' +
                    __e(model.id_str) +
                    '" target="_blank"><span class="time_display" id="' +
                    __e(model.id_str) +
                    '">' +
                    __e(model.created_at) +
                    '</span></a></small><a href="https://twitter.com/' +
                    __e(model.user.screen_name) +
                    '" target="_blank"><img src="' +
                    __e(model.user.profile_image_url) +
                    '"/><span class="profile-name">' +
                    __e(model.user.name) +
                    '</span><span class="profile-id">@' +
                    __e(model.user.screen_name) +
                    '</span></a></div>\n        <div class="stream-item-text">' +
                    ((__t = (model.text)) == null ? '' : __t) +
                    '</div>\n        <div class="stream-item-footer">\n          <ul>\n            <li class="stream-action-reply"><a href="https://twitter.com/intent/tweet?in_reply_to=' +
                    __e(model.id_str) +
                    '" target="_blank"><i class="icon icon--action-reply icon--left"></i>返信</a></li>\n            <li class="stream-action-retweet"><a href="https://twitter.com/intent/retweet?tweet_id=' +
                    __e(model.id_str) +
                    '" target="_blank"><i class="icon icon--action-retweet icon--left"></i>リツイート</a></li>\n            <li class="stream-action-favorite"><a href="https://twitter.com/intent/favorite?tweet_id=' +
                    __e(model.id_str) +
                    '" target="_blank"><i class="icon icon--action-favorite icon--left"></i>お気に入り登録</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>';
            });;
            __p += '\n  </div>\n</div>';

        }
        return __p
    },
    "live-detail/timeline-twitter": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<div class="timeline-col">\n  <div class="timeline-header">\n    <div class="timeline-title">番組に関するみんなのツイート</div>\n  </div>\n  <div class="timeline-body">';
            _.each(models, function(model) {
                ;
                __p += '\n    <div class="stream-item-wrapper">\n      <div class="stream-item">\n        <div class="stream-item-header"><small class="time"><a href="https://twitter.com/' +
                    __e(model.screen_name) +
                    '/status/' +
                    __e(model.id) +
                    '" target="_blank"><span class="time_display" id="model.id">' +
                    __e(model.stamp) +
                    '</span></a></small><a href="https://twitter.com/' +
                    __e(model.screen_name) +
                    '" target="_blank" style="display: block; word-break: break-word; max-width: 250px;"><img src="' +
                    __e(model.img) +
                    '"/><span class="profile-name">' +
                    __e(model.name) +
                    '</span>@' +
                    __e(model.screen_name) +
                    '</a></div>\n        <div class="stream-item-text">' +
                    ((__t = (model.tweets)) == null ? '' : __t) +
                    '</div>\n        <div class="stream-item-footer">\n          <ul>\n            <li class="stream-action-reply"><a href="https://twitter.com/intent/tweet?in_reply_to=' +
                    __e(model.id) +
                    '" target="_blank"><i class="icon icon--action-reply icon--left"></i>返信</a></li>\n            <li class="stream-action-retweet"><a href="https://twitter.com/intent/retweet?tweet_id=' +
                    __e(model.id) +
                    '" target="_blank"><i class="icon icon--action-retweet icon--left"></i>リツイート</a></li>\n            <li class="stream-action-favorite"><a href="https://twitter.com/intent/favorite?tweet_id=' +
                    __e(model.id) +
                    '" target="_blank"><i class="icon icon--action-favorite icon--left"></i>お気に入り登録</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>';
            });;
            __p += '\n  </div>\n</div>';

        }
        return __p
    },
    "live-detail/topic-list": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<div class="live-detail__sites">\n  <div class="title">トピックス</div>\n  <ul class="list">';
            _.map(topics, function(topic) {
                ;
                __p += '\n    <li class="item"><a href="' +
                    ((__t = (topic.href)) == null ? '' : __t) +
                    '" target="_blank"><img class="icon--left icon" src="' +
                    ((__t = (topic.img)) == null ? '' : __t) +
                    '"/>' +
                    ((__t = (topic.desc)) == null ? '' : __t) +
                    '</a></li>';
            });;
            __p += '\n  </ul>\n</div>';

        }
        return __p
    },
    "search/page-nation": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<div class="pagination">\n  <ul class="pagination__list">';
            if (page_nation_num[0] != 1) {
                ;
                __p += '\n    <li class="item item--prev"><a href="/#!/search/' +
                    __e(search_page) +
                    '?' +
                    __e(query) +
                    '&page_idx=' +
                    __e(page_idx - 1) +
                    '"><i class="icon icon--prev"></i><span>前へ</span></a></li>';
            };
            __p += '\n    ';
            _.each(page_nation_num, function(page) {
                ;
                __p += '\n    <li class="item item--num ' +
                    __e(page_idx == page - 1 ? 'item--current' : '') +
                    '"><a href="/#!/search/' +
                    __e(search_page) +
                    '?' +
                    __e(query) +
                    '&page_idx=' +
                    __e(page - 1) +
                    '">' +
                    __e(page) +
                    '</a></li>';
            });;
            __p += '\n    ';
            if (page_nation_num[page_nation_num.length - 1] != page_num) {
                ;
                __p += '\n    <li class="item item--next"><a href="/#!/search/' +
                    __e(search_page) +
                    '?' +
                    __e(query) +
                    '&page_idx=' +
                    __e(parseInt(page_idx) + 1) +
                    '"><i class="icon icon--next"></i><span>次へ</span></a></li>';
            };
            __p += '\n  </ul>\n</div>';

        }
        return __p
    },
    "search/program-item": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<li class="img-list__item"><a class="img-list__link" href="' +
                __e(prog_url) +
                '">\n    <p class="img-list__channel"><img src="/station/logo/' +
                __e(station_id) +
                '/logo_medium.png"/></p>\n    <div class="img-list__img"><img src="' +
                __e(img) +
                '" alt="" width="235" height="127"/></div>';
            if (status === 'now') {
                ;
                __p += '\n    <p class="img-list__genre genre--live">ライブ</p>';
            } else if (status === 'future') {
                ;
                __p += '\n    <p class="img-list__genre">' +
                    __e(progScheduleShort) +
                    '配信予定</p>';
            } else if (status === 'past') {
                ;
                __p += '\n    <p class="img-list__genre genre--timeshift">タイムフリー</p>';
            };
            __p += '\n    <p class="img-list__title ellipsis">' +
                __e(title) +
                '</p>\n    <p class="img-list__cast ellipsis" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis">出演者 : ' +
                __e(performer) +
                '</p>\n    <p class="img-list__title ellipsis"></p>\n    <p class="img-list__time">' +
                __e(progSchedule) +
                '</p>\n    <p class="img-list__text separate" style="height: 10.2em">' +
                ((__t = (formatedDescription)) == null ? '' : __t) +
                '</p></a></li>';

        }
        return __p
    },
    "timeshift/colorbox-area-list": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            if (!$.Radiko.login_status.premium) {
                ;
                __p += '\n<div class="colorbox__area-list group colorbox-area-list">\n  <div class="colorbox-area-list__item">\n    <p class="colorbox-area-list__title">北海道・東北</p>\n    <ul class="colorbox-area-list__list">\n      <li><span class="disabled" data-id="JP1"><i class="icon icon--arrow-r-02 icon--left"></i>北海道</span></li>\n      <li><span class="disabled" data-id="JP2"><i class="icon icon--arrow-r-02 icon--left"></i>青森</span></li>\n      <li><span class="disabled" data-id="JP3"><i class="icon icon--arrow-r-02 icon--left"></i>岩手</span></li>\n      <li><span class="disabled" data-id="JP4"><i class="icon icon--arrow-r-02 icon--left"></i>宮城</span></li>\n      <li><span class="disabled" data-id="JP5"><i class="icon icon--arrow-r-02 icon--left"></i>秋田</span></li>\n      <li><span class="disabled" data-id="JP6"><i class="icon icon--arrow-r-02 icon--left"></i>山形</span></li>\n      <li><span class="disabled" data-id="JP7"><i class="icon icon--arrow-r-02 icon--left"></i>福島</span></li>\n    </ul>\n  </div>\n  <div class="colorbox-area-list__item">\n    <p class="colorbox-area-list__title">関東</p>\n    <ul class="colorbox-area-list__list">\n      <li><span class="disabled" data-id="JP8"><i class="icon icon--arrow-r-02 icon--left"></i>茨城</span></li>\n      <li><span class="disabled" data-id="JP9"><i class="icon icon--arrow-r-02 icon--left"></i>栃木</span></li>\n      <li><span class="disabled" data-id="JP10"><i class="icon icon--arrow-r-02 icon--left"></i>群馬</span></li>\n      <li><span class="disabled" data-id="JP11"><i class="icon icon--arrow-r-02 icon--left"></i>埼玉</span></li>\n      <li><span class="disabled" data-id="JP12"><i class="icon icon--arrow-r-02 icon--left"></i>千葉</span></li>\n      <li><span class="disabled" data-id="JP13"><i class="icon icon--arrow-r-02 icon--left"></i>東京</span></li>\n      <li><span class="disabled" data-id="JP14"><i class="icon icon--arrow-r-02 icon--left"></i>神奈川</span></li>\n    </ul>\n  </div>\n  <div class="colorbox-area-list__item">\n    <p class="colorbox-area-list__title">北陸</p>\n    <ul class="colorbox-area-list__list">\n      <li><span class="disabled" data-id="JP15"><i class="icon icon--arrow-r-02 icon--left"></i>新潟</span></li>\n      <li><span class="disabled" data-id="JP19"><i class="icon icon--arrow-r-02 icon--left"></i>山梨</span></li>\n      <li><span class="disabled" data-id="JP20"><i class="icon icon--arrow-r-02 icon--left"></i>長野</span></li>\n      <li><span class="disabled" data-id="JP17"><i class="icon icon--arrow-r-02 icon--left"></i>石川</span></li>\n      <li><span class="disabled" data-id="JP16"><i class="icon icon--arrow-r-02 icon--left"></i>富山</span></li>\n      <li><span class="disabled" data-id="JP18"><i class="icon icon--arrow-r-02 icon--left"></i>福井</span></li>\n    </ul>\n  </div>\n  <div class="colorbox-area-list__item">\n    <p class="colorbox-area-list__title">中部</p>\n    <ul class="colorbox-area-list__list">\n      <li><span class="disabled" data-id="JP23"><i class="icon icon--arrow-r-02 icon--left"></i>愛知</span></li>\n      <li><span class="disabled" data-id="JP21"><i class="icon icon--arrow-r-02 icon--left"></i>岐阜</span></li>\n      <li><span class="disabled" data-id="JP22"><i class="icon icon--arrow-r-02 icon--left"></i>静岡</span></li>\n      <li><span class="disabled" data-id="JP24"><i class="icon icon--arrow-r-02 icon--left"></i>三重</span></li>\n    </ul>\n  </div>\n  <div class="colorbox-area-list__item">\n    <p class="colorbox-area-list__title">近畿</p>\n    <ul class="colorbox-area-list__list">\n      <li><span class="disabled" data-id="JP27"><i class="icon icon--arrow-r-02 icon--left"></i>大阪</span></li>\n      <li><span class="disabled" data-id="JP28"><i class="icon icon--arrow-r-02 icon--left"></i>兵庫</span></li>\n      <li><span class="disabled" data-id="JP26"><i class="icon icon--arrow-r-02 icon--left"></i>京都</span></li>\n      <li><span class="disabled" data-id="JP25"><i class="icon icon--arrow-r-02 icon--left"></i>滋賀</span></li>\n      <li><span class="disabled" data-id="JP29"><i class="icon icon--arrow-r-02 icon--left"></i>奈良</span></li>\n      <li><span class="disabled" data-id="JP30"><i class="icon icon--arrow-r-02 icon--left"></i>和歌山</span></li>\n    </ul>\n  </div>\n  <div class="colorbox-area-list__item">\n    <p class="colorbox-area-list__title">中国・四国</p>\n    <ul class="colorbox-area-list__list">\n      <li><span class="disabled" data-id="JP33"><i class="icon icon--arrow-r-02 icon--left"></i>岡山</span></li>\n      <li><span class="disabled" data-id="JP34"><i class="icon icon--arrow-r-02 icon--left"></i>広島</span></li>\n      <li><span class="disabled" data-id="JP31"><i class="icon icon--arrow-r-02 icon--left"></i>鳥取</span></li>\n      <li><span class="disabled" data-id="JP32"><i class="icon icon--arrow-r-02 icon--left"></i>島根</span></li>\n      <li><span class="disabled" data-id="JP35"><i class="icon icon--arrow-r-02 icon--left"></i>山口</span></li>\n      <li><span class="disabled" data-id="JP37"><i class="icon icon--arrow-r-02 icon--left"></i>香川</span></li>\n      <li><span class="disabled" data-id="JP36"><i class="icon icon--arrow-r-02 icon--left"></i>徳島</span></li>\n      <li><span class="disabled" data-id="JP38"><i class="icon icon--arrow-r-02 icon--left"></i>愛媛</span></li>\n      <li><span class="disabled" data-id="JP39"><i class="icon icon--arrow-r-02 icon--left"></i>高知</span></li>\n    </ul>\n  </div>\n  <div class="colorbox-area-list__item">\n    <p class="colorbox-area-list__title">九州・沖縄</p>\n    <ul class="colorbox-area-list__list">\n      <li><span class="disabled" data-id="JP40"><i class="icon icon--arrow-r-02 icon--left"></i>福岡</span></li>\n      <li><span class="disabled" data-id="JP41"><i class="icon icon--arrow-r-02 icon--left"></i>佐賀</span></li>\n      <li><span class="disabled" data-id="JP42"><i class="icon icon--arrow-r-02 icon--left"></i>長崎</span></li>\n      <li><span class="disabled" data-id="JP43"><i class="icon icon--arrow-r-02 icon--left"></i>熊本</span></li>\n      <li><span class="disabled" data-id="JP44"><i class="icon icon--arrow-r-02 icon--left"></i>大分</span></li>\n      <li><span class="disabled" data-id="JP45"><i class="icon icon--arrow-r-02 icon--left"></i>宮崎</span></li>\n      <li><span class="disabled" data-id="JP46"><i class="icon icon--arrow-r-02 icon--left"></i>鹿児島</span></li>\n      <li><span class="disabled" data-id="JP47"><i class="icon icon--arrow-r-02 icon--left"></i>沖縄</span></li>\n    </ul>\n  </div>\n</div>';
            } else {
                ;
                __p += '\n<div class="colorbox__area-list group colorbox-area-list">\n  <div class="colorbox-area-list__item">\n    <p class="colorbox-area-list__title">北海道・東北</p>\n    <ul class="colorbox-area-list__list">\n      <li><a href="/#!/timeshift" data-id="JP1"><i class="icon icon--arrow-r-02 icon--left"></i>北海道</a></li>\n      <li><a href="/#!/timeshift" data-id="JP2"><i class="icon icon--arrow-r-02 icon--left"></i>青森</a></li>\n      <li><a href="/#!/timeshift" data-id="JP3"><i class="icon icon--arrow-r-02 icon--left"></i>岩手</a></li>\n      <li><a href="/#!/timeshift" data-id="JP4"><i class="icon icon--arrow-r-02 icon--left"></i>宮城</a></li>\n      <li><a href="/#!/timeshift" data-id="JP5"><i class="icon icon--arrow-r-02 icon--left"></i>秋田</a></li>\n      <li><a href="/#!/timeshift" data-id="JP6"><i class="icon icon--arrow-r-02 icon--left"></i>山形</a></li>\n      <li><a href="/#!/timeshift" data-id="JP7"><i class="icon icon--arrow-r-02 icon--left"></i>福島</a></li>\n    </ul>\n  </div>\n  <div class="colorbox-area-list__item">\n    <p class="colorbox-area-list__title">関東</p>\n    <ul class="colorbox-area-list__list">\n      <li><a href="/#!/timeshift" data-id="JP8"><i class="icon icon--arrow-r-02 icon--left"></i>茨城</a></li>\n      <li><a href="/#!/timeshift" data-id="JP9"><i class="icon icon--arrow-r-02 icon--left"></i>栃木</a></li>\n      <li><a href="/#!/timeshift" data-id="JP10"><i class="icon icon--arrow-r-02 icon--left"></i>群馬</a></li>\n      <li><a href="/#!/timeshift" data-id="JP11"><i class="icon icon--arrow-r-02 icon--left"></i>埼玉</a></li>\n      <li><a href="/#!/timeshift" data-id="JP12"><i class="icon icon--arrow-r-02 icon--left"></i>千葉</a></li>\n      <li><a href="/#!/timeshift" data-id="JP13"><i class="icon icon--arrow-r-02 icon--left"></i>東京</a></li>\n      <li><a href="/#!/timeshift" data-id="JP14"><i class="icon icon--arrow-r-02 icon--left"></i>神奈川</a></li>\n    </ul>\n  </div>\n  <div class="colorbox-area-list__item">\n    <p class="colorbox-area-list__title">北陸</p>\n    <ul class="colorbox-area-list__list">\n      <li><a href="/#!/timeshift" data-id="JP15"><i class="icon icon--arrow-r-02 icon--left"></i>新潟</a></li>\n      <li><a href="/#!/timeshift" data-id="JP19"><i class="icon icon--arrow-r-02 icon--left"></i>山梨</a></li>\n      <li><a href="/#!/timeshift" data-id="JP20"><i class="icon icon--arrow-r-02 icon--left"></i>長野</a></li>\n      <li><a href="/#!/timeshift" data-id="JP17"><i class="icon icon--arrow-r-02 icon--left"></i>石川</a></li>\n      <li><a href="/#!/timeshift" data-id="JP16"><i class="icon icon--arrow-r-02 icon--left"></i>富山</a></li>\n      <li><a href="/#!/timeshift" data-id="JP18"><i class="icon icon--arrow-r-02 icon--left"></i>福井</a></li>\n    </ul>\n  </div>\n  <div class="colorbox-area-list__item">\n    <p class="colorbox-area-list__title">中部</p>\n    <ul class="colorbox-area-list__list">\n      <li><a href="/#!/timeshift" data-id="JP23"><i class="icon icon--arrow-r-02 icon--left"></i>愛知</a></li>\n      <li><a href="/#!/timeshift" data-id="JP21"><i class="icon icon--arrow-r-02 icon--left"></i>岐阜</a></li>\n      <li><a href="/#!/timeshift" data-id="JP22"><i class="icon icon--arrow-r-02 icon--left"></i>静岡</a></li>\n      <li><a href="/#!/timeshift" data-id="JP24"><i class="icon icon--arrow-r-02 icon--left"></i>三重</a></li>\n    </ul>\n  </div>\n  <div class="colorbox-area-list__item">\n    <p class="colorbox-area-list__title">近畿</p>\n    <ul class="colorbox-area-list__list">\n      <li><a href="/#!/timeshift" data-id="JP27"><i class="icon icon--arrow-r-02 icon--left"></i>大阪</a></li>\n      <li><a href="/#!/timeshift" data-id="JP28"><i class="icon icon--arrow-r-02 icon--left"></i>兵庫</a></li>\n      <li><a href="/#!/timeshift" data-id="JP26"><i class="icon icon--arrow-r-02 icon--left"></i>京都</a></li>\n      <li><a href="/#!/timeshift" data-id="JP25"><i class="icon icon--arrow-r-02 icon--left"></i>滋賀</a></li>\n      <li><a href="/#!/timeshift" data-id="JP29"><i class="icon icon--arrow-r-02 icon--left"></i>奈良</a></li>\n      <li><a href="/#!/timeshift" data-id="JP30"><i class="icon icon--arrow-r-02 icon--left"></i>和歌山</a></li>\n    </ul>\n  </div>\n  <div class="colorbox-area-list__item">\n    <p class="colorbox-area-list__title">中国・四国</p>\n    <ul class="colorbox-area-list__list">\n      <li><a href="/#!/timeshift" data-id="JP33"><i class="icon icon--arrow-r-02 icon--left"></i>岡山</a></li>\n      <li><a href="/#!/timeshift" data-id="JP34"><i class="icon icon--arrow-r-02 icon--left"></i>広島</a></li>\n      <li><a href="/#!/timeshift" data-id="JP31"><i class="icon icon--arrow-r-02 icon--left"></i>鳥取</a></li>\n      <li><a href="/#!/timeshift" data-id="JP32"><i class="icon icon--arrow-r-02 icon--left"></i>島根</a></li>\n      <li><a href="/#!/timeshift" data-id="JP35"><i class="icon icon--arrow-r-02 icon--left"></i>山口</a></li>\n      <li><a href="/#!/timeshift" data-id="JP37"><i class="icon icon--arrow-r-02 icon--left"></i>香川</a></li>\n      <li><a href="/#!/timeshift" data-id="JP36"><i class="icon icon--arrow-r-02 icon--left"></i>徳島</a></li>\n      <li><a href="/#!/timeshift" data-id="JP38"><i class="icon icon--arrow-r-02 icon--left"></i>愛媛</a></li>\n      <li><a href="/#!/timeshift" data-id="JP39"><i class="icon icon--arrow-r-02 icon--left"></i>高知</a></li>\n    </ul>\n  </div>\n  <div class="colorbox-area-list__item">\n    <p class="colorbox-area-list__title">九州・沖縄</p>\n    <ul class="colorbox-area-list__list">\n      <li><a href="/#!/timeshift" data-id="JP40"><i class="icon icon--arrow-r-02 icon--left"></i>福岡</a></li>\n      <li><a href="/#!/timeshift" data-id="JP41"><i class="icon icon--arrow-r-02 icon--left"></i>佐賀</a></li>\n      <li><a href="/#!/timeshift" data-id="JP42"><i class="icon icon--arrow-r-02 icon--left"></i>長崎</a></li>\n      <li><a href="/#!/timeshift" data-id="JP43"><i class="icon icon--arrow-r-02 icon--left"></i>熊本</a></li>\n      <li><a href="/#!/timeshift" data-id="JP44"><i class="icon icon--arrow-r-02 icon--left"></i>大分</a></li>\n      <li><a href="/#!/timeshift" data-id="JP45"><i class="icon icon--arrow-r-02 icon--left"></i>宮崎</a></li>\n      <li><a href="/#!/timeshift" data-id="JP46"><i class="icon icon--arrow-r-02 icon--left"></i>鹿児島</a></li>\n      <li><a href="/#!/timeshift" data-id="JP47"><i class="icon icon--arrow-r-02 icon--left"></i>沖縄</a></li>\n    </ul>\n  </div>\n</div>';
            };


        }
        return __p
    },
    "timeshift/program-table-channel": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(models, function(model) {
                ;
                __p += '\n<div class="program-table__channel js-scroll-item">\n  <p class="name"><img src="/station/logo/' +
                    __e(model.id) +
                    '/logo_medium.png" alt="' +
                    __e(model.name) +
                    '"/></p>\n  <p class="link"><a href="/#!/timetable/' +
                    __e(model.id) +
                    '/live"><i class="icon icon--arrow-r-04 icon--left"></i>週間番組表</a></p>\n</div>';
            });;


        }
        return __p
    },
    "timeshift/program-table-date": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(dateList, function(date) {
                ;
                __p += '\n<div class="item"><a class="item__link ';
                if (date.isCurrent) {
                    ;
                    __p += 'item__selected';
                };
                __p += ' ';
                if (date.isSat) {
                    ;
                    __p += 'saturday';
                };
                __p += ' ';
                if (date.isSun) {
                    ;
                    __p += 'sunday';
                };
                __p += '" href="#' +
                    __e(date.dateFullString) +
                    '">' +
                    __e(date.dateString) +
                    '<span class="week">' +
                    __e(date.dayString) +
                    '</span></a></div>';
            });;


        }
        return __p
    },
    "timetable/program-table-channel": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(models, function(model) {
                ;
                __p += '\n<div class="program-table__channel js-scroll-item">\n  <p class="name"><img src="/station/logo/' +
                    __e(model.station_id) +
                    '/logo_medium.png" alt="' +
                    __e(model.name) +
                    '"/></p>\n  <p class="link"><a href="/#!/timetable/' +
                    __e(model.station_id) +
                    '/live"><i class="icon icon--arrow-r-04 icon--left"></i>週間番組表</a></p>\n</div>';
            });;


        }
        return __p
    },
    "timetable/program-table-date": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(dateList, function(date) {
                ;
                __p += '\n<div class="item" style="width: 127px;"><a class="item item--weekday item__link ';
                if (date.isCurrent) {
                    ;
                    __p += 'item__selected';
                };
                __p += ' ';
                if (date.isSat) {
                    ;
                    __p += 'saturday';
                };
                __p += ' ';
                if (date.isSun) {
                    ;
                    __p += 'sunday';
                };
                __p += '" href="#' +
                    __e(date.dateFullString) +
                    '">' +
                    __e(date.dateString) +
                    '<span class="week">' +
                    __e(date.dayString) +
                    '</span></a></div>';
            });;


        }
        return __p
    },
    "timetable/regiter-premium": function(obj) {
        obj || (obj = {});
        var __t, __p = '';
        with(obj) {
            __p += '\n<div class="premium-area group"><i class="icon icon--attention-02"></i>\n  <div class="premium-area__text">\n    <p>あなたが今いる地域以外のラジオ局をお聴きいただくことはできません。プレミアム会員に登録すると、日本全国のラジオ局がお聴きいただけるようになります。</p>\n  </div>\n  <div class="premium-area__btn"><a class="btn btn--primary btn--large" href="/ap/member/regist/regist_mail_page?premium=1" target="_blank"><i class="icon icon--arrow-r-03 icon--left"></i>プレミアム会員登録はこちら</a></div>\n</div>';

        }
        return __p
    },
    "top/pr-image-slider": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<div class="top-slider__inner">\n  <div class="top-slider__list group js-slider" style="margin-bottom: 0;">';
            _.each(list, function(item) {
                ;
                __p += '\n    <div class="item"><a href="/#!/timetable/' +
                    __e(item.id) +
                    '/live"><img src="' +
                    __e(item.banner) +
                    '" alt="' +
                    __e(item.name) +
                    '" width="235"/></a></div>';
            });;
            __p += '\n  </div>\n</div>';

        }
        return __p
    },
    "top/top-info": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(informationList, function(item) {
                ;
                __p += '\n<li class="item"><span class="date">' +
                    __e(item.date) +
                    '</span><span class="cat">' +
                    __e(item.categoryName) +
                    '</span><a class="link" href="/#!/info/' +
                    __e(item.id) +
                    '">' +
                    __e(item.title) +
                    '<i class="icon icon--arrow-r-02 icon--left"></i></a></li>';
            });;


        }
        return __p
    },
    "top/top-maintenance": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(maintenanceList, function(item) {
                ;
                __p += '\n<li class="item"><span class="date">' +
                    __e(item.date) +
                    '</span><span class="cat">' +
                    __e(item.categoryName) +
                    ' ' +
                    __e(item.stationName) +
                    '</span><a class="link" href="/#!/info/' +
                    __e(item.id) +
                    '">' +
                    __e(item.title) +
                    '<i class="icon icon--arrow-r-02 icon--left"></i></a></li>';
            });;


        }
        return __p
    },
    "ts-detail/colorbox-share": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape;
        with(obj) {
            __p += '\n<ul class="colorbox__share">\n  <li><a class="btn__facebook" data-url="' +
                ((__t = (facebookUrl)) == null ? '' : __t) +
                '" href="' +
                ((__t = (facebookUrl + ft)) == null ? '' : __t) +
                '"><i class="icon icon--facebook-02 icon--left"></i>Facebook</a></li>\n  <li><a class="btn__twitter" data-urlbase="' +
                ((__t = (twitterUrl)) == null ? '' : __t) +
                '" href="' +
                ((__t = (twitterUrl + ft)) == null ? '' : __t) +
                '"><i class="icon icon--twitter-02 icon--left"></i>Twitter</a></li>\n  <li><a id="clipboard" href="javascript:void(0)" data-urlbase="' +
                ((__t = (clipUrl)) == null ? '' : __t) +
                '" data-clipboard-text="' +
                ((__t = (clipUrl + ft)) == null ? '' : __t) +
                '"><i class="icon icon--url icon--left"></i>URLをコピー</a></li>\n  <input id="share-url" type="hidden" value="https://' +
                __e(location.host) +
                '/v2/api/ts/playlist.m3u8?l=15&station_id=' +
                __e(stationId) +
                '&ft=' +
                __e(ft) +
                '&to=' +
                __e(to) +
                '"/>\n</ul>';

        }
        return __p
    },
    "ts-detail/detail-attention": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<div class="timeshift-detail__attention"><i class="icon icon--attention"></i>\n  <div class="text-outer">\n    <p class="text">ラジコのタイムフリー聴取機能は、過去１週間以内に放送された番組を聴くことができます。<br/>番組内容やCMは、過去のものになりますので、ご注意ください。<br/><br/>※特定のタレント出演番組やスポーツ中継など一部聴取できない番組があります。<br/>※聴取を開始してから24時間以内であれば、合計3時間まで、いつでも聴取することができます。</p>';
            if (!isUserArea) {
                ;
                __p += '\n    <p class="text">エリアフリー聴取では、聴取しているエリアに該当しない広告が配信される場合がありますのでご注意ください。</p>';
            };
            __p += '\n  </div>\n</div>';

        }
        return __p
    },
    "ts-detail/now-play-area": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            if (!nowPlaying) {
                ;
                __p += '<a class="play-radio item btn btn--primary btn--x-large btn--play" href="javascript:void(0);" tabindex="2"><i class="icon icon--play icon--left"></i>再生する</a>';
            } else {
                ;
                __p += '<a class="play-radio item btn btn--primary btn--x-large btn--stop" href="javascript:void(0);" tabindex="2"><i class="icon icon--stop-02 icon--left"></i>停止する</a>';
            };


        }
        return __p
    },
    "ts-detail/now-programs-list": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<h1 class="live-detail__title">' +
                ((__t = (progTitle)) == null ? '' : __t) +
                '</h1>\n<div class="live-detail__body group">\n  <div class="live-detail__img"><img src="' +
                __e(progImage) +
                '" alt="" width="356"/></div>\n  <div class="live-detail__text">\n    <div class="live-detail__cast" style="height:1.3em;margin-bottom:0.5em;overflow:hidden;">\n      <div class="live-detail__cast-title" style="height:1.3em;display:block;float:left;width:65px;">出演者 :</div>\n      <div class="live-detail__cast-name" style="width:290px;float:right !important;height:20px;overflow:hidden;">' +
                ((__t = (progPfm2)) == null ? '' : __t) +
                '</div>\n    </div>\n    <p class="live-detail__time" style="clear:both;">' +
                ((__t = (progSchedule)) == null ? '' : __t) +
                '</p>\n    <p class="live-detail__limit"></p>\n    <p class="listen-limit timelimit"></p>\n    <p class="live-detail__play">' +
                ((__t = (nowPlayArea)) == null ? '' : __t) +
                '</p>\n    <p class="live-detail__share">\n      <button class="btn btn--default btn--block btn--share" href="#colorbox--share"><i class="icon icon--share icon--left"></i>友達に教える</button>\n    </p>\n    <div class="live-detail__noti"><a class="btn btn--default btn--block btn--tooltip" href=""><i class="icon icon--noti icon--left"></i>通知を予約</a>\n      <div class="tooltip">\n        <div class="bg"></div>\n        <ul>\n          <li><a href="' +
                ((__t = (googleCalUrl)) == null ? '' : __t) +
                '" target="_blank"><i class="icon icon--arrow-r-02 icon--left"></i>Googleカレンダーに追加</a></li>\n          <li><a href="' +
                ((__t = (iCalUrl)) == null ? '' : __t) +
                '"><i class="icon icon--arrow-r-02 icon--left"></i>iCalに追加</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="live-detail__failed group">';
            if (failedRecord) {
                ;
                __p += '<span>大変申し訳ありませんが、この番組はメンテナンス等の都合で配信を停止している部分がございます。ご了承ください。</span>';
            };
            __p += '</div>\n<div class="live-detail__description">' +
                ((__t = (progDesc)) == null ? '' : __t) +
                '<br/>' +
                ((__t = (progInfo)) == null ? '' : __t) +
                '</div>';
            if (progUrl) {
                ;
                __p += '\n<div class="live-detail__sites">\n  <div class="title">番組サイト</div>\n  <ul class="list">\n    <li class="item"><a href="' +
                    ((__t = (progUrl)) == null ? '' : __t) +
                    '" target="_blank"><i class="icon icon--arrow-r-02 icon--left"></i>' +
                    ((__t = (progUrl)) == null ? '' : __t) +
                    '</a></li>\n  </ul>\n</div>';
            };
            __p += '\n<div id="topic-list"></div>';

        }
        return __p
    },
    "ts-detail/player-detail": function(obj) {
        obj || (obj = {});
        var __t, __p = '';
        with(obj) {
            __p += '\n<p class="tooltip" style="display: none;"><img src="/apps/images/img_playerarea_red_01.png" alt=""/></p>\n<div class="program-ticker"></div>';

        }
        return __p
    },
    "ts-detail/program-table": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<table data-sid="' +
                __e(stationId) +
                '">';
            _.each(progs, function(prog) {
                ;
                __p += '\n  <tr data-ft="' +
                    __e(prog.ft) +
                    '" data-to="' +
                    __e(prog.to) +
                    '" data-img="' +
                    __e(prog.progImage) +
                    '" data-ctitle="' +
                    ((__t = (prog.progTitle)) == null ? '' : __t) +
                    '" data-cast="' +
                    ((__t = (prog.progPfm)) == null ? '' : __t) +
                    '"></tr>';
            });
            __p += '\n</table>';

        }
        return __p
    },
    "ts-detail/seek-bar": function(obj) {
        obj || (obj = {});
        var __t, __p = '';
        with(obj) {
            __p += '<span class="start" id="seek_val"></span>\n<div class="seek-bar" id="seekbar">\n  <div class="bar active"></div>\n  <div class="balloon"><span>20:00:00</span>\n    <div class="arrow"></div>\n  </div>\n  <div class="seek-slider">\n    <div class="btn knob ui-draggable ui-draggable-handle"><i class="icon icon--seek-btn"></i></div>\n  </div>\n</div><span class="end" id="all_val"></span>';

        }
        return __p
    },
    "ts-detail/ticker": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(progs, function(prog) {
                ;
                __p += '<a href="/#!/ts/' +
                    __e(stationId) +
                    '/' +
                    __e(prog.ft) +
                    '" data-ft="' +
                    __e(prog.ft) +
                    '" data-to="' +
                    __e(prog.to) +
                    '" data-progTitle="' +
                    __e(prog.progTitle) +
                    '" data-pfm="' +
                    __e(prog.progPfm) +
                    '" data-stationId="' +
                    __e(prog.stationId) +
                    '" data-stationName="' +
                    __e(prog.stationName) +
                    '" style="position: relative">\n  <div style="position: relative">\n    <p class="img"><img src="' +
                    __e(prog.progImage) +
                    '" alt="" width="68"/></p>\n    <div class="title">\n      <p class="marquee">' +
                    ((__t = (prog.progTitle)) == null ? '' : __t) +
                    '</p>\n    </div>\n    <p class="name">出演者 : ' +
                    ((__t = (prog.progPfm)) == null ? '' : __t) +
                    '</p>\n  </div></a>';
            });;


        }
        return __p
    },
    "ts-detail/timeshift-close": function(obj) {
        obj || (obj = {});
        var __t, __p = '';
        with(obj) {
            __p += '\n<div class="timeshift-detail__content group">\n  <div class="timefree-close">\n    <p class="timefree-close__header">この番組の配信期間は終了しました。</p>\n    <div class="timefree-close__body">\n      <h2 class="title"><span>タイムフリー</span></h2>\n      <p class="text">radikoでは、1週間前の番組まで聴くことができます。</p><a class="btn btn--primary btn--medium" href="/#!/fun/timeshift"><i class="icon icon--arrow-r-03 icon--left"></i>詳しくはこちら</a>\n    </div>\n  </div>\n  <div class="share__download share__download--no-bdr">\n    <p>あなたのスマホがラジオになる！<br class="sp-block"/>radiko アプリをダウンロード</p>\n    <ul>\n      <li><a class="itunes" href="https://itunes.apple.com/jp/app/radiko.jp/id370515585" target="_blank"><img src="/apps/images/btn_itunes_01.png" alt="itunes"/></a></li>\n      <li><a class="googleplay" href="https://play.google.com/store/apps/details?id=jp.radiko.Player" target="_blank"><img src="/apps/images/btn_googleplay_01.png" alt="Google Play"/></a></li>\n    </ul>\n  </div>\n</div>';

        }
        return __p
    },
    "ts-detail/topic-list": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {
            __p += '\n<div class="live-detail__sites">\n  <div class="title">トピックス</div>\n  <ul class="list">';
            _.map(topics, function(topic) {
                ;
                __p += '\n    <li class="item"><a href="' +
                    ((__t = (topic.href)) == null ? '' : __t) +
                    '" target="_blank"><img class="icon--left icon" src="' +
                    ((__t = (topic.img)) == null ? '' : __t) +
                    '"/>' +
                    ((__t = (topic.desc)) == null ? '' : __t) +
                    '</a></li>';
            });;
            __p += '\n  </ul>\n</div>';

        }
        return __p
    },
    "ts-station/program-table-date": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(dateList, function(date) {
                ;
                __p += '\n<div class="program-table__date js-scroll-item">\n  <p class="item item--weekday ';
                if (date.isCurrent) {
                    ;
                    __p += 'item--weekday';
                };
                __p += ' ';
                if (date.isSat) {
                    ;
                    __p += 'item--saturday';
                };
                __p += ' ';
                if (date.isSun) {
                    ;
                    __p += 'item--sunday';
                };
                __p += '">' +
                    __e(date.dateString) +
                    '<span class="week">' +
                    __e(date.dayString) +
                    '</span></p>\n</div>';
            });;


        }
        return __p
    },
    "ts-station/program-table-station": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(stations, function(station) {
                ;
                __p += '\n<li class="item js-scroll-item2"><a class="item__link ';
                if (station.id == current) {
                    ;
                    __p += 'item__selected';
                };
                __p += '" href="#' +
                    __e(station.id) +
                    '">\n    <p class="name"><img src="/station/logo/' +
                    __e(station.id) +
                    '/logo_medium.png" alt="' +
                    __e(station.name) +
                    '" name="#' +
                    __e(station.id) +
                    '"/></p></a></li>';
            });;


        }
        return __p
    },
    "weekly/nowonair-table": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape;
        with(obj) {
            __p += '\n<div class="content__section section">\n  <h2 class="heading heading-lv02"><i class="icon icon--onair icon--left"></i>今、配信中の番組</h2><a href="/#!/live/' +
                ((__t = (id)) == null ? '' : __t) +
                '">\n    <div class="timetable-weekly__onair group">\n      <div class="img"><img src="' +
                ((__t = (img)) == null ? '' : __t) +
                '" width="236" alt="' +
                __e(title) +
                '"/></div>\n      <div class="text">\n        <div class="title">' +
                __e(title) +
                '</div>\n        <div class="cast">出演者: ' +
                __e(pfm) +
                '</div>\n        <div class="time">' +
                __e(scheduleString) +
                '</div>\n        <div class="description">' +
                __e(desc) +
                '</div>\n      </div>\n    </div></a>\n</div>';

        }
        return __p
    },
    "weekly/program-table-date": function(obj) {
        obj || (obj = {});
        var __t, __p = '',
            __e = _.escape,
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, '')
        }
        with(obj) {

            _.each(dateList, function(date) {
                ;
                __p += '\n<div class="program-table__date js-scroll-item">\n  <p class="item item--weekday ';
                if (date.isCurrent) {
                    ;
                    __p += 'item--today';
                };
                __p += ' ';
                if (date.isSat) {
                    ;

                    if (date.isCurrent) {
                        ;
                        __p += 'item--today';
                    };
                    __p += ' ';
                    if (date.isSat) {
                        ;
                        __p += 'item--saturday';
                    };
                    __p += ' ';
                    if (date.isSun) {
                        ;
                        __p += 'item--sunday';
                    };

                };
                __p += ' ';
                if (date.isSun) {
                    ;
                    __p += 'item--sunday';
                };
                __p += '">' +
                    __e(date.dateString) +
                    '<span class="week">' +
                    __e(date.dayString) +
                    '</span></p>\n</div>';
            });;


        }
        return __p
    }
};