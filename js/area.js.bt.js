$(function() {
    $.Radiko.area = {
        check_area: function(loginStatus) {
            $.Radiko.ajax('/area', function(data, status, xhr) {

                // 成功時
                var match = data.match(/class="(JP[0-9]{1,2})"/);
                var defaultAreaId = match.length ? match[1] : 'OUT';
                $.cookie('default_area_id', defaultAreaId, {
                    path: '/'
                });
                // for log
                window.areaId = defaultAreaId;

                var area;
                if (area = data.match(/>(.*)</)) {
                    window.area = area[1].split(' ')[0];
                }

                var areaFreeId = $.cookie('areafree_id');
                if (typeof areaFreeId !== 'undefined') {
                    $.Radiko.area.id = areaFreeId;
                } else {
                    $.Radiko.area.id = defaultAreaId;
                }

                $.Radiko.header.create_header(getAreaId(), loginStatus);
            }, function() {
                // エラー時
                $.Radiko.area.id = 'OUT';
            }, 'text', true).always(function() {
                // イベントを発火する
                $.Radiko.EventEmitter.trigger('radikoready');
            });
        }
    };
});