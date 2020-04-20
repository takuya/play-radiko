"use strict";
$(function() {
    var first_call = function() {
        if ($.Radiko.area.id == 'OUT') {
            window.location.href = '/out/';
        } else {
            $.Radiko.Display.common();
        }
    };
    first_call();
    var StationModel = Backbone.Model.extend({
        defaults: {}
    });
    var StationsCollection = Backbone.Collection.extend({
        model: StationModel,
        url: "/v3/station/list/" + $.cookie('default_area_id') + ".xml",
        parse: function(data) {
            $.Radiko.user_station_list = _.map($(data).find('station'), function(station) {
                var $station = $(station);
                return $station.find('id').text();
            });
        },
        fetch: function(options) {
            options = options || {};
            options.dataType = "xml";
            return Backbone.Collection.prototype.fetch.call(this, options);
        }
    });
    var stations = new StationsCollection;
    stations.fetch();
    $(document).on('click', 'a[href^=\\/#\\!]', function() {
        $.Radiko.isPageTransition = true;
    });
});