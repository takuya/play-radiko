"use strict";
var RadikoADK;
(function(RadikoADK) {
    var StreamType;
    (function(StreamType) {
        StreamType["LV"] = "LV";
        StreamType["TF"] = "TF";
    })(StreamType = RadikoADK.StreamType || (RadikoADK.StreamType = {}));
    var AreaFreeStatus;
    (function(AreaFreeStatus) {
        AreaFreeStatus[AreaFreeStatus["YES"] = 1] = "YES";
        AreaFreeStatus[AreaFreeStatus["NO"] = 0] = "NO";
    })(AreaFreeStatus = RadikoADK.AreaFreeStatus || (RadikoADK.AreaFreeStatus = {}));
    var INTERVAL = 60 * 1000;

    function getInterval() {
        return INTERVAL;
    }
    RadikoADK.getInterval = getInterval;
    var SCRIPT_URL = '//a.o2u.jp';

    function getScriptURL() {
        return SCRIPT_URL;
    }
    RadikoADK.getScriptURL = getScriptURL;
    var CLIENT_ID = '5IcgIMWa2HODGnm+eZ+2Uw==';

    function getClientId() {
        return CLIENT_ID;
    }
    RadikoADK.getClientId = getClientId;
    var clickingPlayButtonTime;

    function setClickingPlayButtonTimeTime(timestamp) {
        clickingPlayButtonTime = timestamp;
    }
    RadikoADK.setClickingPlayButtonTimeTime = setClickingPlayButtonTimeTime;

    function pickClickingPlayButtonTimeTime() {
        var tmp = clickingPlayButtonTime;
        clickingPlayButtonTime = undefined;
        return tmp;
    }
    var SharedRepository = (function() {
        function SharedRepository() {
            this.info = [];
        }
        SharedRepository.prototype.add = function(obj) {
            var exists = _.find(this.info, function(value) {
                return value.station_id === obj.station_id && value.share_type === obj.share_type;
            });
            if (typeof exists === 'undefined') {
                this.info.push(obj);
            }
        };
        SharedRepository.prototype.pickAll = function() {
            var tmpSharedInfo = this.info;
            this.info = [];
            return tmpSharedInfo;
        };
        SharedRepository.prototype.clear = function() {
            this.info = [];
        };
        return SharedRepository;
    }());
    RadikoADK.sharedRepository = new SharedRepository();
    var RadikoADKParamCreator = (function() {
        function RadikoADKParamCreator() {}
        RadikoADKParamCreator.createDefaultParams = function() {
            var _a = window.programInfo,
                stationId = _a.stationId,
                stationName = _a.stationName,
                title = _a.title,
                ft = _a.ft,
                to = _a.to;
            return {
                id: encodeURIComponent(getClientId()),
                __p1: '',
                __p3: 'PC',
                __p4: stationId,
                __p5: encodeURIComponent(stationName),
                __p6: window.areaId || '',
                __p7: encodeURIComponent(title),
                __p8: ft,
                __p9: to,
                __p11: moment.unix(RadikoDMP.getCurrentListeningDatetime()).format('YYYYMMDDHHmmss'),
                __p12: RadikoADKParamCreator.getStreamType(),
                __p13: RadikoDMP.isAreafree() ? AreaFreeStatus.YES : AreaFreeStatus.NO
            };
        };
        RadikoADKParamCreator.combineUserKey = function(params, userKey) {
            if (userKey) {
                params.__p2 = userKey;
            }
            return params;
        };
        RadikoADKParamCreator.combineClickPlayButtonTime = function(params, timestamp) {
            params.__p10 = moment(timestamp).format('YYYYMMDDHHmmss');
            return params;
        };
        RadikoADKParamCreator.combineSharedInfo = function(params, sharedInfo) {
            _.forEach(sharedInfo, function(info) {
                switch (info.share_type) {
                    case RadikoDMP.ShareType.TWITTER:
                        params.__p14 = params.__p7 + "," + info.shared_program_datetime;
                        break;
                    case RadikoDMP.ShareType.FACEBOOK:
                        params.__p15 = params.__p7 + "," + info.shared_program_datetime;
                        break;
                    case RadikoDMP.ShareType.COPY:
                        params.__p16 = params.__p7 + "," + info.shared_program_datetime;
                        break;
                }
            });
            return params;
        };
        RadikoADKParamCreator.getStreamType = function() {
            return RadikoDMP.isLive() ? StreamType.LV : StreamType.TF;
        };
        return RadikoADKParamCreator;
    }());
    RadikoADK.RadikoADKParamCreator = RadikoADKParamCreator;
    var RadikoADKWatcher = (function() {
        function RadikoADKWatcher() {}
        RadikoADKWatcher.buildSendQuery = function(params) {
            return _.map(params, function(value, key) {
                return key + "=" + value;
            }).join('&');
        };
        RadikoADKWatcher.send = function(queries) {
            $('body').append("<script type=\"text/javascript\" src=\"" + getScriptURL() + "?" + queries + "\" async></script>");
        };
        RadikoADKWatcher.prototype.start = function() {
            RadikoADK.sharedRepository.clear();
            if (this.timer) {
                return;
            }
            this.timer = setTimeout(this.handler.bind(this), getInterval());
        };
        RadikoADKWatcher.prototype.stop = function() {
            console.log(getInterval());
            clearTimeout(this.timer);
            this.timer = undefined;
        };
        RadikoADKWatcher.prototype.handler = function() {
            if (!RadikoDMP.isPlaying()) {
                return;
            }
            var params = RadikoADKParamCreator.createDefaultParams();
            if ($.Radiko.login_status.hasLogin) {
                params = RadikoADKParamCreator.combineUserKey(params, $.Radiko.login_status.user_key);
            }
            var clickingPlayButtonTime = pickClickingPlayButtonTimeTime();
            if (clickingPlayButtonTime) {
                params = RadikoADKParamCreator.combineClickPlayButtonTime(params, clickingPlayButtonTime);
            }
            var sharedInfo = RadikoADK.sharedRepository.pickAll();
            if (sharedInfo.length) {
                params = RadikoADKParamCreator.combineSharedInfo(params, sharedInfo);
            }
            RadikoADKWatcher.send(RadikoADKWatcher.buildSendQuery(params));
            this.timer = setTimeout(this.handler.bind(this), getInterval());
        };
        return RadikoADKWatcher;
    }());
    RadikoADK.RadikoADKWatcher = RadikoADKWatcher;
    RadikoADK.watcher = new RadikoADKWatcher();
})(RadikoADK || (RadikoADK = {}));