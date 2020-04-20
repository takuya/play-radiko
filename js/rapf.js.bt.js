"use strict";
$(function() {
    var RAPFBannerModel = Backbone.Model.extend({
        defaults: {
            url: undefined,
            link: undefined,
            beacon: undefined,
            duration: undefined,
            show: false
        }
    });
    $.Radiko.RAPF = {
        currentTime: 0,
        BannerModel: new RAPFBannerModel(),
        CMDurationList: {},
        Tracking: {
            TYPE: {
                IMPRESSION: 'Impression',
                CREATIVE_VIEW: 'creativeView',
                CLICK: 'click',
                START: 'start',
                FIRST_QUARTILE: 'firstQuartile',
                MIDPOINT: 'midpoint',
                THIRD_QUARTILE: 'thirdQuartile',
                COMPLETE: 'complete'
            },
            STREAM_TYPE: {
                LIVE: 0,
                VOD: 1
            },
            HOST: 'http://log2.radiko.jp',
            BEACON_PATH: '/cm.gif'
        },
        Beacon: (function() {
            var Beacon = function(adId) {
                this._adId = adId;
            };
            Beacon.prototype.setUserKey = function(value) {
                this._userKey = value;
            };
            Beacon.prototype.setConnectionType = function(value) {
                this.connectionType = value;
            };
            Beacon.prototype.setStreamType = function(value) {
                this.streamType = value;
            };
            Beacon.prototype.sendTracking = function(url) {
                $.get(url);
            };
            Beacon.prototype.addLogImg = function(url) {
                var $log = $('#log');
                if ($log.find('img').length > 10) {
                    $log.html("");
                }
                $log.html('<img src="' + url + '"/>');
            };
            Beacon.prototype.buildBeaconUrl = function(playlistBeaconParam, areaId, stationId, trackingType) {
                var query = this.buildParams(areaId, stationId, trackingType);
                var param;
                if (playlistBeaconParam) {
                    param = playlistBeaconParam + '&' + query;
                } else {
                    param = '?' + query;
                }
                return $.Radiko.RAPF.Tracking.HOST + $.Radiko.RAPF.Tracking.BEACON_PATH + param;
            };
            Beacon.prototype.buildQuery = function(queries) {
                return Object.keys(queries).map(function(key) {
                    return key + '=' + queries[key];
                }).join('&');
            };
            Beacon.prototype.buildParams = function(areaId, stationId, trackingType) {
                var params = {};
                params = this.addTetParam(params, areaId, stationId);
                params = this.addTrackingParam(params, trackingType);
                params['_'] = Math.floor(Math.random() * 10000000);
                return this.buildQuery(params);
            };
            Beacon.prototype.addTetParam = function(params, areaId, stationId) {
                params.uid = uid3();
                if (stationId) {
                    params.station_id = encodeURIComponent(stationId);
                }
                params.area_id = encodeURIComponent(areaId);
                params.device = encodeURIComponent('pc');
                params.delay = 0;
                if (this._userKey !== undefined) {
                    params.user_key = encodeURIComponent(this._userKey);
                }
                params.bg = 0;
                if (player && (!player.isLive() || player.chasing())) {
                    params.ts = player.playing_date().toString("yyyyMMddHHmmss");
                    if ($.Radiko.logger.fromShare) {
                        params.share = 1;
                    }
                }
                return params;
            };
            Beacon.prototype.addTrackingParam = function(params, trackingType) {
                params.adid = this._adId;
                params.lsid = uid3();
                params.tracking_type = encodeURIComponent(trackingType);
                if (this.connectionType) {
                    params.type = this.connectionType;
                }
                if (typeof this.streamType !== 'undefined') {
                    params.stream_type = this.streamType;
                }
                return params;
            };
            Beacon.prototype.pickBeaconParam = function(trackingUrl) {
                var matched = /\?(.*)$/.exec(trackingUrl);
                if (!matched) {
                    return null;
                }
                return matched[0];
            };
            return Beacon;
        })()
    };
});