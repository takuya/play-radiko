"use strict";
var radikoNOA;
(function(radikoNOA) {
    var MusicModel = Backbone.Model.extend({
        defaults: {
            title: 'title',
            artist: 'artist'
        }
    });
    radikoNOA.Collection = Backbone.Collection.extend({
        model: MusicModel,
        initialize: function(nowProgramCollection, options) {
            this.stationId = options.station_id;
            this.listenTo(nowProgramCollection, 'sync', this.onSync);
        },
        onSync: function(nowProgramCollection) {
            var program = nowProgramCollection.at(0);
            var ft = program.get('ft');
            var to = program.get('to');
            var ftMoment = moment(ft, 'YYYYMMDDHHmmss');
            var toMoment = moment(to, 'YYYYMMDDHHmmss');
            if (ftMoment.isSameOrBefore() && toMoment.isAfter()) {
                this.url = "/v3/feed/pc/noa/" + this.stationId + ".xml";
            } else {
                this.url = "/v2/api/noa?station_id=" + this.stationId + "&ft=" + ft + "&to=" + to;
            }
            this.program = program;
            this.fetch();
        },
        parse: function(resp) {
            var stationName = this.program.get('stationName');
            var programTitle = this.program.get('progTitle');
            return _.map($('item', resp), function(item) {
                var $item = $(item);
                var artist = $item.attr('artist');
                return {
                    itemId: $item.attr('itemid'),
                    artist: artist,
                    title: $item.attr('title'),
                    image: $item.attr('img'),
                    stamp: this.noaTimeString($item.attr('stamp')),
                    stamp_original: $item.attr('stamp'),
                    amazon_url: $item.attr('amazon'),
                    recochoku_url: $item.attr('recochoku'),
                    itunes_url: $item.attr('itunes'),
                    label_value: stationName + "_" + programTitle + "_" + artist
                };
            }, this);
        },
        fetch: function(options) {
            options = options || {};
            options.dataType = 'xml';
            return Backbone.Collection.prototype.fetch.call(this, options);
        },
        noaTimeString: function(dateString) {
            var mom = moment(dateString, 'YYYY-MM-DD HH:mm:ss');
            var hour = mom.hour();
            if (hour < 5) {
                hour += 24;
                mom.subtract(1, 'days');
            }
            return mom.format('YYYY年M月D日（ddd） ') + sprintf('%02d:%02d', hour, mom.minute());
        }
    });
})(radikoNOA || (radikoNOA = {}));