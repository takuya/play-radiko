"use strict";
var Bookmark;
(function(Bookmark) {
    var PREFIX = 'bookmark';

    function initialize() {
        store.each(function(value, key) {
            var regex = new RegExp("^" + PREFIX);
            if (regex.test(key) === false) {
                return;
            }
            var now = new Date().getTime();
            if (+value.limit < now) {
                store.remove(key);
            }
        });
    }
    Bookmark.initialize = initialize;
    var bookmark = (function() {
        function bookmark(_stationId, _ft, _to) {
            this._stationId = _stationId;
            this._ft = _ft;
            this._to = _to;
            this._thresholdTime = 60 * 60 * 24 * 1000;
            this._thresholdSaveTime = 5;
            this._previousSaveTime = 0;
        }
        bookmark.prototype.save = function(position) {
            if (this._previousSaveTime === 0 ||
                position - this._previousSaveTime > this._thresholdSaveTime) {
                this._previousSaveTime = position;
                var key = PREFIX + this._stationId + this._ft;
                var data = {
                    position: position,
                    to: this._to,
                    limit: new Date().getTime() + this._thresholdTime
                };
                store.set(key, data);
            }
        };
        bookmark.prototype.forceSave = function(position) {
            var key = PREFIX + this._stationId + this._ft;
            var data = {
                position: position,
                to: this._to,
                limit: new Date().getTime() + this._thresholdTime
            };
            store.set(key, data);
        };
        bookmark.find = function(keyObject) {
            var stationId = keyObject.stationId,
                ft = keyObject.ft;
            var key = PREFIX + stationId + ft;
            var value = store.get(key);
            if (value === undefined || value.to !== keyObject.to) {
                return null;
            }
            return value;
        };
        bookmark.prototype["delete"] = function() {
            var key = PREFIX + this._stationId + this._ft;
            store.remove(key);
        };
        bookmark.prototype.buildKey = function() {
            return PREFIX + this._stationId + this._ft;
        };
        return bookmark;
    }());
    Bookmark.bookmark = bookmark;
})(Bookmark || (Bookmark = {}));