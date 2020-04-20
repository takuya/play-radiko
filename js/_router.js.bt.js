"use strict";
$(function() {
    $.Radiko.EventEmitter.on('removeview', function() {
        if (!_.isEmpty($.Radiko.views)) {
            _.each($.Radiko.views, function(view) {
                if (view.onClose) {
                    view.onClose();
                }
                view.remove();
            });
        }
        if (document.getElementById('facebook-jssdk')) {
            if (window.FB !== undefined) {
                window.FB = undefined;
            }
            $('#facebook-jssdk').remove();
        }
        if (document.getElementById('twitter-wjs')) {
            $('#twitter-wjs').remove();
        }
        if (!_.isUndefined($.Radiko.scrollPosition[location.href]) && !$.Radiko.isPageTransition) {
            var scrollPosi_1 = $.Radiko.scrollPosition[location.href];
            clearInterval(window.doScroll);
            window.doScroll = setInterval(function() {
                var documentHeight = $(document).height();
                if ((scrollPosi_1 + $(window).height()) <= documentHeight) {
                    $(window).scrollTop(scrollPosi_1);
                    $.Radiko.scrollPosition[location.href] = undefined;
                    clearInterval(window.doScroll);
                }
            }, 500);
        }
        if ($.Radiko.isPageTransition) {
            $.Radiko.isPageTransition = false;
        }
        $.Radiko.views = [];
    });
    Path.map('#!/top').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        radikoTop(true);
        $('body').attr('class', 'page-default');
    });
    Path.map('#!/out').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        radikoTop();
        $('body').attr('class', 'page-default');
        $.colorbox({
            width: '640px',
            inline: true,
            href: '#colorbox--oversea',
            speed: 0,
            open: true,
            opacity: 0.5
        });
    });
    Path.map('#!/live/:id').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        if (!_.isUndefined(window.jumpAnimation)) {
            clearInterval(window.jumpAnimation);
        }
        showLive(this.params.id);
        $('body').attr('class', 'page-default');
    });
    Path.map('#!/info/').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-default');
        radikoInfo(this.params.month, this.params.pageNumber);
    });
    Path.map('#!/info/:id').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-default');
        radikoInfoDetail(this.params.id);
    });
    Path.map('#!/info/archive/:month/:page').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-default');
        radikoInfo(this.params.month, this.params.page);
    });
    Path.map('#!/timeshift').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-timeshift');
        radikoTs();
    });
    Path.map('#!/timeshift/s').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-timeshift');
        radikoTss();
    });
    Path.map('#!/timetable').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-default');
        radikoTt();
    });
    Path.map('#!/timetable/:id/live').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $.cookie('station_id', this.params.id, {
            path: '/'
        });
        $('body').attr('class', 'page-default');
        $('html, body').animate({
            scrollTop: 0
        }, 10, 'linear');
        radikoTw(this.params.id);
    });
    Path.map('#!/search/live?:req').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-default');
        radikoSl('live');
    });
    Path.map('#!/search/timeshift?:req').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-timeshift');
        radikoSl('timeshift');
    });
    Path.map('#!/areafree').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-default');
        areaFree();
    });
    Path.map('#!/ts/:id/:datetime').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-timeshift');
        tsDetail(this.params.id, this.params.datetime);
    });
    Path.map('#!/fun').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-default');
        radikoStatic('/fun/index.html', true);
        $('html, body').animate({
            scrollTop: 0
        }, 10, 'linear');
    });
    Path.map('#!/fun/areafree').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/fun/areafree.html');
    });
    Path.map('#!/fun/timeshift').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/fun/timeshift.html');
    });
    Path.map('#!/fun/tools/pc').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/fun/tools/pc.html');
    });
    Path.map('#!/fun/tools/app').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/fun/tools/app.html');
    });
    Path.map('#!/fun/tools/gadget').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/fun/tools/gadget.html');
    });
    Path.map('#!/fun/guide/pc').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/fun/guide/pc.html');
    });
    Path.map('#!/fun/guide/app').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/fun/guide/app.html');
    });
    Path.map('#!/distribution_area').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/area/index.html');
    });
    Path.map('#!/transactions').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/transactions/index.html');
    });
    Path.map('#!/linkfree').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/linkfree/index.html');
    });
    Path.map('#!/privacypolicy').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/privacypolicy/index.html');
    });
    Path.map('#!/informative_data').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/informative_data/index.html');
    });
    Path.map('#!/guidelines').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/guidelines/index.html');
    });
    Path.map('#!/about').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/about/index.html');
    });
    Path.map('#!/news_release').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/news_release/index.html');
    });
    Path.map('#!/howto').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        $('body').attr('class', 'page-static');
        radikoStatic('/howto/index.html');
    });
    Path.map('').to(function() {
        $.Radiko.EventEmitter.trigger('removeview');
        radikoTop();
        $('body').attr('class', 'page-default');
    });
    Path.root('');
    Path.rescue(function() {
        if (location.hash && location.hash.match(/^#([-\w]+)$/)) {
            var station_id = RegExp.$1;
            location.hash = '#!/live/' + station_id;
        }
    });
    Path.listen();
    if ('onhashchange' in window && (!document.documentMode || document.documentMode >= 8)) {
        if (location.hash === '') {
            radikoTop();
            $('body').attr('class', 'page-default');
        }
    } else {
        if (location.hash === '') {
            radikoTop();
            $('body').attr('class', 'page-default');
        }
    }
    $(window).on('statechange', function(ev) {
        $.Radiko.Suggest.action_id = 0;
    });
});