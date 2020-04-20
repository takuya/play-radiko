'use strict';
var radikoStatic = function(pagePath, isNotStatic) {
    loadTemplate({
        '#header': '/apps/templates/common/header-static.html',
        '#contents': '/apps/templates' + pagePath,
        '#footer': '/apps/templates/common/footer.html'
    }, function() {
        if (isNotStatic) {
            $('#header').html(JST['common/header']({
                logo: '/apps/images/img_logo_blue_01.png'
            }));
        } else {
            if (!_.isUndefined(player) && player.isPlaying()) {
                player.stop();
                $('#player-area').html('');
            }
        }
        makeHeader();
        setMetaText();
        if (typeof window.area != 'undefined') {
            $('span.area').text(window.area);
        }
        $('.js-page-transition').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 10, 'linear');
        });
        $('.local-nav a:not([href^=http]), .js-page-transition').click(function() {
            if (!$(this).attr('href').match(/^#/)) {
                return true;
            }
            var href = $(this).attr('href');
            var target = $(href);
            var position = target.offset().top;
            $('html, body').animate({
                scrollTop: position
            }, 10, 'linear');
            return false;
        });
    });
};