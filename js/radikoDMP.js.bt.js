"use strict";
var RadikoDMP;
(function(RadikoDMP) {
    var ShareType;
    (function(ShareType) {
        ShareType["TWITTER"] = "twitter";
        ShareType["FACEBOOK"] = "facebook";
        ShareType["COPY"] = "copy";
    })(ShareType = RadikoDMP.ShareType || (RadikoDMP.ShareType = {}));

    function compareProgram(a, b) {
        return a.stationId === b.station_id &&
            a.ft === b.program_start_time &&
            a.to === b.program_end_time;
    }
    RadikoDMP.compareProgram = compareProgram;

    function isLive() {
        return player.isLive() && !player.chasing();
    }
    RadikoDMP.isLive = isLive;

    function isPlaying() {
        return typeof player !== 'undefined' && player.isPlaying();
    }
    RadikoDMP.isPlaying = isPlaying;

    function isAreafree() {
        return (!_.includes($.Radiko.user_station_list, player.station_id()));
    }
    RadikoDMP.isAreafree = isAreafree;

    function getCurrentListeningDatetime() {
        return isLive() ? moment().subtract(15, 'seconds').unix() : Math.floor(+player.playing_date() / 1000);
    }
    RadikoDMP.getCurrentListeningDatetime = getCurrentListeningDatetime;
})(RadikoDMP || (RadikoDMP = {}));