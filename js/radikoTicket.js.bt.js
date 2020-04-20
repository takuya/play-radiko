"use strict";
var RadikoTicket;
(function(RadikoTicket) {
    var vendorMap = {
        show_eplus: 'イープラス',
        show_pia: 'チケットぴあ',
        show_lawson: 'ローチケ',
        show_cnplayguide: 'CNプレイガイド'
    };
    RadikoTicket.Model = Backbone.Model.extend({
        defaults: []
    });
    var excludeVendor = [];
    RadikoTicket.Collection = Backbone.Collection.extend({
        etag: {},
        model: RadikoTicket.Model,
        initialize: function(noaCollection, options) {
            this.stationId = options.station_id;
            this.isLive = options.is_live;
            this.listenTo(noaCollection, 'sync', this.onSync);
        },
        onSync: function(models) {
            var s = models.at(0).get('stamp_original');
            var e = models.at(models.length - 1).get('stamp_original');
            var _a = this.normalizeStartEnd(s, e),
                ft = _a[0],
                to = _a[1];
            this.url = "/v4/api/noa/ticket?station_id=" + this.stationId + "&ft=" + ft + "&to=" + to;
            this.collection = models;
            this.fetch();
        },
        beforeSend: function(jqXHR) {
            if (this.etag.hasOwnProperty(this.url)) {
                jqXHR.setRequestHeader('If-None-Match', this.etag[this.url]);
            }
        },
        complete: function(jqXHR) {
            if (jqXHR.status == 200 || jqXHR.status == 304) {
                this.etag[this.url] = jqXHR.getResponseHeader('ETag');
            }
        },
        parse: function(resp) {
            return this.collection.map(this.addEventsData(resp));
        },
        pickSameTicket: function(model) {
            return function(item) {
                return moment(model.get('stamp_original')).isSame(item.start_time);
            };
        },
        addEventsData: function(resp) {
            var _this = this;
            return function(model) {
                var ticketInfo = _.find(resp, _this.pickSameTicket(model));
                if (typeof ticketInfo === 'undefined') {
                    return _.extend(model.toJSON(), {
                        events: []
                    });
                }
                var events = _.chain(ticketInfo.events)
                    .filter(function(event) {
                        var vendor = event.vendor;
                        return !_.contains(excludeVendor, vendor);
                    })
                    .map(_this.createEvents.bind(_this))
                    .value();
                return _.extend(model.toJSON(), {
                    events: events
                });
            };
        },
        createEvents: function(event) {
            var vendor = event.vendor;
            var _a = this.convertDate(event.start_date, event.end_date),
                startDate = _a[0],
                endDate = _a[1];
            var url = event.url;
            if (url.length > 0) {
                if (!url[0].match(/\?(.*)/)) {
                    url += '?';
                } else {
                    url += '&';
                }
                url += 'utm_source=radiko.jp&utm_medium=referral&utm_campaign=';
                if (this.isLive) {
                    url += 'link_LV';
                } else {
                    url += 'link_TF';
                }
            } else {
                url = '';
            }
            var eventName = event.name ? event.name : '-';
            var vendorName = vendorMap[vendor];
            var label = startDate + "_" + endDate + "_" + vendorName;
            return {
                name: eventName,
                start_date: startDate,
                end_date: endDate,
                vendor: vendor,
                vendor_name: vendorName,
                location: event.location.name,
                url: url,
                label: label
            };
        },
        convertDate: function(s, e) {
            var startDate = s ? moment(s).format('YYYY年MM月DD日') : '-';
            var endDate = e ? moment(e).format('YYYY年MM月DD日') : '';
            return [
                startDate,
                startDate === endDate ? '' : endDate,
            ];
        },
        fetch: function(options) {
            options = options || {};
            options.dataType = 'json';
            return Backbone.Collection.prototype.fetch.call(this, options);
        },
        normalizeStartEnd: function(start, end) {
            var sm = moment(start);
            var em = moment(end);
            if (sm.isAfter(em)) {
                return [em.format('YYYYMMDDHHmmss'), sm.format('YYYYMMDDHHmmss')];
            }
            return [sm.format('YYYYMMDDHHmmss'), em.format('YYYYMMDDHHmmss')];
        }
    });
    RadikoTicket.DialogView = Backbone.View.extend({
        className: 'ticket-dialog',
        template: JST['detail-common/ticket-dialog'],
        initialize: function(option) {
            this.render(option.noa_item, option.stream_type);
            return this;
        },
        render: function(noaItem, streamType) {
            var vendorListHtml = JST['detail-common/ticket-dialog-list']({
                item: noaItem,
                stream_type: streamType
            });
            this.$el.html(this.template({
                contents: vendorListHtml
            }));
            return this;
        }
    });
})(RadikoTicket || (RadikoTicket = {}));