"use strict";
$(function() {
    $.Radiko.logger = {
        device: "pc",
        appID: "pc_1",
        logsrv: "http://log.radiko.jp",
        logsrv2: "http://log2.radiko.jp",
        sharelogsrv: "http://beacon.radiko.jp",
        fromShare: false,
        sharedStationId: undefined,
        sharedProgramFt: undefined,
        sharedPlayBeaconSended: false,
        ad_log: function(message) {
            if (window.areaId == 'OUT') {
                try {
                    window.areaId = $.cookie("default_area_id");
                } catch (e) {}
            }
            if (message.match(/\?/))
                message += '&app_id=' + encodeURIComponent(this.appID);
            else
                message += '?app_id=' + encodeURIComponent(this.appID);
            message += '&uid=' + this.generateUid();
            message += '&device=' + encodeURIComponent(this.device);
            message += '&device_name=' + encodeURIComponent(navigator.userAgent);
            message += '&area_id=' + encodeURIComponent(window.areaId);
            if ($.Radiko.login_status && $.Radiko.login_status.user_key) {
                message += '&user_key=' + encodeURIComponent($.Radiko.login_status.user_key);
            }
            message += '&_=' + Math.floor(Math.random() * 100000000);
            var $log = $("#log");
            if ($log.size() == 0) {
                $("<div/>").attr("id", "log").appendTo("body");
            }
            $log.append("<img src=\"" + this.logsrv + "/" + message + "\" alt=\"\">");
        },
        tet_log: function(info) {
            if (window.areaId == 'OUT') {
                window.areaId = swf().area_id();
            }
            var mes;
            if (info.ts) {
                mes = "tstet.gif";
                if (info.is_v2) {
                    mes = "tstet2.gif";
                } else if (info.is_v3) {
                    mes = "tstet3.gif";
                }
                mes += "?ts=" + info.ts + "&";
                if (info.share) {
                    mes += "share=" + info.share + "&";
                }
            } else {
                mes = "tet.gif";
                if (info.is_v2) {
                    mes = "tet2.gif";
                } else if (info.is_v3) {
                    mes = "tet3.gif";
                }
                mes += "?";
            }
            var uid = (info.is_v2) ? this.uid3() : this.generateUid();
            mes += "uid=" + uid;
            if (player.station_id()) {
                mes += '&station_id=' + encodeURIComponent(player.station_id());
            } else {
                return;
            }
            mes += '&area_id=' + encodeURIComponent(window.areaId);
            mes += '&device=' + encodeURIComponent(this.device);
            var delay = 0;
            mes += '&delay=' + encodeURIComponent(delay.toString());
            if ($.Radiko.login_status && $.Radiko.login_status.user_key) {
                mes += '&user_key=' + encodeURIComponent($.Radiko.login_status.user_key);
            }
            mes += '&bg=0';
            mes += '&_=' + Math.floor(Math.random() * 10000000);
            var $log = $("#log");
            if ($("#log img").length > 10) {
                $log.html("");
            }
            var host = this.logsrv2;
            $log.html("<img src=\"" + host + "/" + mes + "\" alt=\"\">");
        },
        share_log: function(info) {
            if (window.areaId == 'OUT') {
                window.areaId = swf().area_id();
            }
            var param = 'share.gif?type=' + info.type;
            param += '&station_id=' + info.stationId;
            param += '&area_id=' + encodeURIComponent(window.areaId);
            param += '&device=' + encodeURIComponent(this.device);
            param += '&uid=' + uid();
            param += '&t=' + info.t;
            if ($.Radiko.login_status && $.Radiko.login_status.user_key) {
                param += '&user_key=' + encodeURIComponent($.Radiko.login_status.user_key);
            }
            if (info.type == "do_share") {
                param += "&sns=" + info.sns;
                param += "&time_type=" + info.timeType;
            }
            param += '&_=' + Math.floor(Math.random() * 1000000);
            var $log = $("#log");
            if ($("#log img").length > 10) {
                $log.html("");
            }
            var host = this.sharelogsrv;
            $log.html("<img src=\"" + host + "/" + param + "\" alt=\"\">");
        }
    };
    _.extend($.Radiko.logger, $.Radiko.Mixins.Utility);
});