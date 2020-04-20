"use strict";
var __pParams = [];
var RadikoPeopleDriven;
(function(RadikoPeopleDriven) {
    var CLIENT_ID = 5;
    RadikoPeopleDriven.INTERVAL = 60 * 1000;
    var DEVICE_TYPE = 'pc';
    var SCRIPT_URL = 'https://cdn.d2-apps.net/js/tr.js';
    var ShareType;
    (function(ShareType) {
        ShareType["TWITTER"] = "twitter";
        ShareType["FACEBOOK"] = "facebook";
        ShareType["COPY"] = "copy";
    })(ShareType = RadikoPeopleDriven.ShareType || (RadikoPeopleDriven.ShareType = {}));
    var SharedInfo = [];
    var isLive = function() {
        return (player.isLive() && !player.chasing());
    };
    var listeningDatetime = function() {
        return isLive() ? moment().subtract(15, 'seconds').unix() : Math.floor(+player.playing_date() / 1000);
    };
    var isAreafree = function() {
        return (!_.includes($.Radiko.user_station_list, player.station_id()));
    };
    var isPlaying = function() {
        return typeof player !== 'undefined' && player.isPlaying() === true;
    };
    RadikoPeopleDriven.addSharedInfo = function(obj) {
        var exists = _.find(SharedInfo, function(value) {
            return value.station_id === obj.station_id && value.share_type === obj.share_type;
        });
        if (typeof exists === 'undefined') {
            SharedInfo.push(obj);
        }
    };
    RadikoPeopleDriven.compareProgram = function(a, b) {
        return a.stationId === b.station_id &&
            a.ft === b.program_start_time &&
            a.to === b.program_end_time;
    };
    RadikoPeopleDriven.buildSendObject = function(obj) {
        var sendObject = {
            client_id: CLIENT_ID,
            c_1: obj.listening_datetime,
            c_2: obj.station_name,
            c_3: obj.station_id,
            c_4: obj.program_title,
            c_5: obj.program_start_time,
            c_6: obj.program_end_time,
            c_7: obj.area_id,
            c_8: DEVICE_TYPE,
            c_9: obj.is_timefree.toString(),
            c_10: obj.is_areafree.toString(),
            c_11: uid3(),
            c_13: 1,
            c_16: ''
        };
        if ($.Radiko.login_status.hasLogin) {
            sendObject.c_12 = $.Radiko.login_status.user_key;
        }
        if (obj.shared_program_datetime) {
            sendObject.c_14 = obj.shared_program_datetime;
        }
        if (obj.share_type) {
            sendObject.c_15 = obj.share_type;
        }
        return sendObject;
    };
    RadikoPeopleDriven.buildSharedParameter = function() {
        var tmpSharedInfo = SharedInfo;
        var sharedProgramDatetime, shareType;
        if (tmpSharedInfo.length > 0) {
            var tmpSharedTypes = [];
            var tmpSharedProgramDatetime = [];
            for (var i = 0; i < tmpSharedInfo.length; i++) {
                var sharedInfo = tmpSharedInfo[i];
                if (RadikoPeopleDriven.compareProgram(window.programInfo, sharedInfo)) {
                    tmpSharedProgramDatetime.push(sharedInfo.shared_program_datetime);
                    tmpSharedTypes.push(sharedInfo.share_type);
                }
            }
            shareType = tmpSharedTypes.join(',');
            sharedProgramDatetime = tmpSharedProgramDatetime.join(',');
        }
        SharedInfo = [];
        return {
            shared_program_datetime: sharedProgramDatetime,
            share_type: shareType
        };
    };
    RadikoPeopleDriven.sendPeopleDrivenDmp = function() {
        if (!isPlaying()) {
            SharedInfo = [];
            setTimeout(RadikoPeopleDriven.sendPeopleDrivenDmp, RadikoPeopleDriven.INTERVAL);
            return;
        }
        var title, ft, to, stationId, stationName;
        if (typeof window.programInfo !== 'undefined') {
            title = window.programInfo.title;
            ft = window.programInfo.ft;
            to = window.programInfo.to;
            stationId = window.programInfo.stationId;
            stationName = window.programInfo.stationName;
        }
        var _a = RadikoPeopleDriven.buildSharedParameter(),
            sharedProgramDatetime = _a.shared_program_datetime,
            shareType = _a.share_type;
        var sendObject = RadikoPeopleDriven.buildSendObject({
            listening_datetime: listeningDatetime(),
            station_name: stationName,
            station_id: stationId,
            program_title: title,
            program_start_time: ft,
            program_end_time: to,
            area_id: window.areaId || '',
            is_timefree: !isLive(),
            is_areafree: isAreafree(),
            share_type: shareType,
            shared_program_datetime: sharedProgramDatetime
        });
        __pParams.push(sendObject);
        $('body').append("<script type=\"text/javascript\" src=\"" + SCRIPT_URL + "\" async></script>");
        setTimeout(RadikoPeopleDriven.sendPeopleDrivenDmp, RadikoPeopleDriven.INTERVAL);
    };
})(RadikoPeopleDriven || (RadikoPeopleDriven = {}));
(function() {
    setTimeout(RadikoPeopleDriven.sendPeopleDrivenDmp, RadikoPeopleDriven.INTERVAL);
})();