"use strict";
var tsDetail = function(_stationId, _datetime) {
    (function(window, $, Backbone, _, moment, undefined) {
        var templates = {
            '#contents': '/apps/templates/ts_detail/index.html',
            '#footer': '/apps/templates/common/footer.html'
        };
        var templateHeader = JST['common/header'];
        var headerData = {
            logo: '/apps/images/img_logo_red_01.png'
        };
        if (_datetime > moment().format('YYYYMMDDHHmmss')) {
            templateHeader = JST['common/header'];
            headerData = {
                logo: '/apps/images/img_logo_blue_01.png'
            };
        }
        loadTemplate(templates, function() {
            (function(Radiko) {
                var $url = $('#url');
                if ($url.val() === '') {
                    $('#stream-player').hide();
                }
                var getDate = function() {
                    var tsStartTime = _datetime;
                    if (typeof tsStartTime !== 'undefined') {
                        var date = tsStartTime.substr(0, 8);
                        if (tsStartTime >= date + '050000') {
                            return date;
                        } else if (tsStartTime >= date + '000000') {
                            return moment(tsStartTime.substr(0, 4) + '/' +
                                tsStartTime.substr(4, 2) + '/' +
                                tsStartTime.substr(6, 2)).subtract('days', 1).format('YYYYMMDD');
                        }
                    } else {
                        return moment().format('YYYYMMDD');
                    }
                };
                var getDateMoment = function() {
                    var m = moment();
                    if (m.format('YYYYMMDDHHmmss') >= m.format('YYYYMMDD050000')) {
                        return m;
                    } else {
                        return moment(m.subtract('day', 1).format('YYYY-MM-DD'));
                    }
                };
                var getTsStatus = function(startTime) {
                    var now = moment().format('YYYYMMDDHHmmss');
                    var mStartTime = moment(startTime, 'YYYYMMDDHHmmss');
                    var endDataTime = mStartTime.add(8, 'day');
                    if (now < startTime) {
                        return 0;
                    } else if (now >= startTime && now <= endDataTime.format('YYYYMMDD050000')) {
                        return 1;
                    } else if (now >= endDataTime.format('YYYYMMDD050000')) {
                        return 2;
                    } else {
                        return undefined;
                    }
                };
                Radiko.tsDetail = (function() {
                    var tsDetail = function() {
                        this.areaFreeCollection = null;
                        this.stationCollection = null;
                        this.streamsCollection = null;
                        this.nowProgramsCollection = null;
                        this.StationWeeklyCollection = null;
                        this.othersCollection = null;
                    };
                    _.extend(tsDetail.prototype, Backbone.Events);
                    tsDetail.prototype.initialize = function() {
                        this.createModels();
                        this.createViews();
                        this.fetchAll({
                            model: this.areaFreeCollection
                        }, {
                            model: this.streamsCollection
                        }, {
                            model: this.StationWeeklyCollection
                        }, {
                            model: this.othersCollection
                        });
                        this.subscribeAll();
                    };
                    tsDetail.prototype.createModels = function() {
                        this.areaFreeCollection = new AreaFreeCollection();
                        this.stationCollection = new StationsCollection(this.areaFreeCollection);
                        this.streamsCollection = new StreamsCollection();
                        this.StationWeeklyCollection = new StationWeeklyCollection();
                        this.nowProgramsCollection = new NowProgramsCollection(this.stationCollection);
                        this.musicsCollection = new radikoNOA.Collection(this.nowProgramsCollection, {
                            station_id: _stationId
                        });
                        this.ticketCollection = new RadikoTicket.Collection(this.musicsCollection, {
                            station_id: _stationId,
                            is_live: false
                        });
                        this.othersCollection = new OthersCollection();
                    };
                    tsDetail.prototype.createViews = function() {
                        $.Radiko.views.push(new StationsView({
                            collection: this.stationCollection
                        }));
                        $.Radiko.views.push(new NowProgramsListView({
                            el: document.getElementById('now-programs-list'),
                            collection: {
                                stations: this.stationCollection,
                                program: this.nowProgramsCollection,
                                areafree: this.areaFreeCollection
                            }
                        }));
                        $.Radiko.views.push(new WeeklyListView({
                            el: document.getElementById('program-table'),
                            collection: this.StationWeeklyCollection
                        }));
                        $.Radiko.views.push(new OthersView({
                            el: document.getElementById('others-program'),
                            collection: this.othersCollection
                        }));
                        $.Radiko.views.push(new MusicsView({
                            el: document.getElementById('play-musics'),
                            collection: {
                                noa_collection: this.ticketCollection,
                                program_collection: this.nowProgramsCollection
                            }
                        }));
                        $.Radiko.views.push(new CompanionBannerView({
                            model: Radiko.RAPF.BannerModel,
                            collection: this.nowProgramsCollection
                        }));
                    };
                    tsDetail.prototype.fetchAll = function() {
                        return $.when.apply($, _.map(_.toArray(arguments), function(queue) {
                            return queue.model.fetch(queue.options || {});
                        }));
                    };
                    tsDetail.prototype.subscribeAll = function() {};
                    return tsDetail;
                })();
                var AreaFreeModel = Backbone.Model.extend({
                    "default": {}
                });
                var AreaFreeCollection = Backbone.Collection.extend({
                    model: AreaFreeModel,
                    url: '/v3/station/region/full.xml',
                    parse: function(data) {
                        $.Radiko.exclude_station_list = [];
                        return _.map($('station', data), function(station) {
                            var $station = $(station),
                                stationId = $station.find('id').text();
                            if (!_.contains($.Radiko.user_station_list, stationId) && +$(station).find('areafree').text() === 0) {
                                $.Radiko.exclude_station_list.push(stationId);
                            }
                            return {
                                id: stationId,
                                areaId: $station.find('area_id').text(),
                                logo: $station.find('logo').first().text(),
                                tf_max_delay: $station.find('tf_max_delay').text()
                            };
                        }, this);
                    },
                    fetch: function(options) {
                        options = options || {};
                        options.dataType = 'xml';
                        return Backbone.Collection.prototype.fetch.call(this, options);
                    },
                    initialize: function() {
                        this.listenTo(this.collection, 'sync', this.onSync);
                    },
                    onSync: function(models) {
                        this.render(models);
                    }
                });
                var StationModel = Backbone.Model.extend({
                    defaults: {
                        id: 'RGK',
                        name: 'RAGIKO',
                        tf_max_delay: 60
                    }
                });
                var StationsCollection = Backbone.Collection.extend({
                    model: StationModel,
                    initialize: function(models) {
                        this.isStationList = _.contains($.Radiko.before_station_list, _stationId);
                        this.listenTo(models, 'sync', this.onSync);
                    },
                    onSync: function(models) {
                        var data = models.where({
                            id: _stationId
                        })[0].toJSON();
                        this.areaId = data.areaId;
                        $('.heading-area__title img').attr('src', data.logo);
                        $('.heading-area__title a').attr('href', '/#!/timetable/' + data.id + '/live');
                        if ($.Radiko.login_status.areafree && !this.isStationList) {
                            $.cookie('areafree_id', this.areaId, {
                                path: '/'
                            });
                        } else if (this.isStationList) {
                            this.areaId = getAreaId();
                        } else {
                            this.areaId = $.cookie('default_area_id');
                        }
                        this.url = '/v3/station/list/' + this.areaId + '.xml';
                        this.fetch();
                    },
                    parse: function(data) {
                        var areaId = this.areaId;
                        var $stations = $(data).find('station');
                        var stations = _.map($stations, function(station) {
                            var obj = {
                                id: $(station).find('id').text(),
                                name: $(station).find('name').text(),
                                areafree: +$(station).find('areafree').text()
                            };
                            var $delay = $(station).find('tf_max_delay');
                            if ($delay.length) {
                                $.extend(obj, {
                                    tf_max_delay: +$delay.text()
                                });
                            }
                            return obj;
                        });
                        isDefaultArea = !!_.find(stations, function(station) {
                            return station.id === _stationId;
                        });
                        return _.filter(stations, function(station) {
                            return $.cookie('default_area_id') === areaId ||
                                station.areafree !== 0;
                        });
                    },
                    fetch: function(options) {
                        options = options || {};
                        options.dataType = 'xml';
                        return Backbone.Collection.prototype.fetch.call(this, options);
                    }
                });
                var StationsView = Backbone.View.extend({
                    initialize: function() {
                        this.listenTo(this.collection, 'sync', this.onSync);
                    },
                    onSync: function(models) {
                        this.render(models);
                    },
                    render: function(models) {
                        _.map($.Radiko.exclude_station_list, function(stationId) {
                            models.remove(models.where({
                                id: stationId
                            }));
                        });
                        $('#station-list').html(JST['common/station-list']({
                            models: models.toJSON()
                        }));
                        return this;
                    }
                });
                var StreamModel = Backbone.Model.extend({
                    defaults: {
                        streamUrl: 'rtmpe'
                    }
                });
                var StreamsCollection = Backbone.Collection.extend({
                    model: StreamModel,
                    url: '/v3/program/station/date/' + getDate() + '/' + _stationId + '.xml',
                    parse: function(resp) {
                        var $station = $('station', resp);
                        var $progs = $station.find('prog');
                        $progs = $progs.filter(function(index, element) {
                            var to = $(element).attr('to');
                            return _datetime < to;
                        });
                        var firstProgram = $progs.first();
                        var stationId = $station.attr('id'),
                            ft = firstProgram.attr('ft'),
                            to = firstProgram.attr('to');
                        var url = 'https://' + location.host + '/v2/api/ts/playlist.m3u8?station_id=' +
                            stationId + '&l=15&ft=' +
                            ft + '&to=' +
                            to;
                        if (+ft !== +_datetime) {
                            url += '&seek=' + _datetime;
                        } else {
                            var bookmark = Bookmark.bookmark.find({
                                stationId: stationId,
                                ft: ft,
                                to: to
                            });
                            if (bookmark) {
                                url += '&seek=' + moment(ft, 'YYYYMMDDHHmmss').add(bookmark.position, 'seconds').format('YYYYMMDDHHmmss');
                            }
                        }
                        return {
                            url: url
                        };
                    },
                    fetch: function(options) {
                        options = options || {};
                        options.dataType = 'xml';
                        options.cache = true;
                        return Backbone.Collection.prototype.fetch.call(this, options);
                    }
                });
                var StreamsView = Backbone.View.extend({
                    el: $url,
                    template: _.template($('#tmpl-ts-stream-player').text()),
                    initialize: function() {
                        this.listenTo(this.collection, 'sync', this.onSync);
                    },
                    onSync: function(models) {
                        this.render(models);
                    },
                    render: function(models) {
                        var data = models.toJSON();
                        $('#tmpUrl').val(data[0].url);
                        $('#ts-stream-player').html(this.template(data[0]));
                        return this;
                    }
                });
                var NowProgramModel = Backbone.Model.extend({
                    defaults: {}
                });
                var NowProgramsCollection = Backbone.Collection.extend({
                    model: NowProgramModel,
                    host: 'http://' + location.host,
                    initialize: function(models) {
                        this.listenTo(models, 'sync', this.onSync);
                    },
                    onSync: function() {
                        this.fetch();
                    },
                    url: '/v3/program/station/date/' + getDate() + '/' + _stationId + '.xml',
                    parse: function(resp) {
                        var $station = $('station', resp);
                        var $progs = $station.find('prog');
                        var stationId = $station.attr('id');
                        var stationName = $station.find('name').text();
                        $progs = $progs.filter(function(index, element) {
                            var to = $(element).attr('to');
                            return _datetime < to;
                        });
                        var firstProgram = $progs.first();
                        var tsStatus = getTsStatus(firstProgram.attr('ft'));
                        var tsClass = tsStatus === 0 ? 'page-default' : 'page-timeshift';
                        window.ts_status = tsStatus;
                        $('body').attr('class', tsClass);
                        var img = firstProgram.find('img').text();
                        if (img === '' && +tsStatus === 0) {
                            img = '/images/radio-api-noimage_live.png';
                        } else if (img === '') {
                            img = '/images/radio-api-noimage_ts.png';
                        } else {}
                        var shareUrl = this.host + '/share/?sid=' + stationId + '&t=';
                        var shareText = this.getShareText(stationName, firstProgram);
                        var ftmt = moment(firstProgram.attr('ft'), 'YYYYMMDDHHmmss');
                        var tomt = moment(firstProgram.attr('to'), 'YYYYMMDDHHmmss');
                        return {
                            tsStatus: tsStatus,
                            programId: firstProgram.attr('id'),
                            stationId: $station.attr('id'),
                            stationName: $station.find('name').text(),
                            progTitle: firstProgram.find('title').text(),
                            progPfm: this.getOmitText(firstProgram.find('pfm').text(), 11),
                            progPfm2: firstProgram.find('pfm').text(),
                            progSchedule: this.progScheduleString(ftmt, tomt),
                            progImage: img,
                            progUrl: firstProgram.find('url').text(),
                            progDesc: firstProgram.find('desc').text(),
                            progInfo: firstProgram.find('info').text(),
                            ft: firstProgram.attr('ft'),
                            to: firstProgram.attr('to'),
                            date: firstProgram.find('date').text(),
                            iCalUrl: this.getIcalUrl(stationId, firstProgram),
                            googleCalUrl: this.getGoogleCalUrl(stationId, firstProgram),
                            twitterUrl: this.getTwitterUrl(shareText, shareUrl),
                            facebookUrl: this.getFaceBookUrl(shareUrl),
                            clipUrl: shareText + ' ' + shareUrl,
                            progStartTime: this.getProgStartTime(firstProgram.attr('ft')),
                            isFuture: tsStatus,
                            metaTitle: this.getMetaTitle($station.find('name'), firstProgram),
                            shareUrl: shareUrl + firstProgram.attr('ft'),
                            failedRecord: _.isUndefined(firstProgram.find('failed_record')) ?
                                0 : parseInt(firstProgram.find('failed_record').first().text()),
                            nowPlaying: this.getPlayingStatus(stationId, firstProgram.attr('ft')),
                            progs: this.getProgramList($progs, tsStatus),
                            isAreaFree: !_.contains($.Radiko.exclude_station_list, _stationId),
                            tsInNg: firstProgram.find('ts_in_ng').text(),
                            tsOutNg: firstProgram.find('ts_out_ng').text()
                        };
                    },
                    fetch: function(options) {
                        options = options || {};
                        options.dataType = 'xml';
                        options.cache = false;
                        options.expires = 5;
                        return Backbone.Collection.prototype.fetch.call(this, options);
                    },
                    dateToFormatedString: function(dateString, outputFormat) {
                        return moment(dateString, ['YYYY-MM-DD HH:mm:ss', 'YYYYMMDDHHmmss']).format(outputFormat);
                    },
                    progScheduleString: function(ftmt, tomt) {
                        var radioHours = translateRadikoTimeHours(ftmt, tomt);
                        if (radioHours.ft_hour >= 24) {
                            ftmt.subtract(1, 'days');
                        }
                        var ret = ftmt.format('M月D日（ddd） ');
                        ret += sprintf('%02d:%02d-%02d:%02d', radioHours.ft_hour, ftmt.minute(), radioHours.to_hour, tomt.minute());
                        return ret;
                    },
                    getIcalUrl: function(stationId, program) {
                        return '/v2/api/ical' +
                            '?station_id=' + stationId +
                            '&ft=' + program.attr('ft') +
                            '&to=' + program.attr('to') +
                            '&title=' + encodeURIComponent(program.find('title').first().text()) +
                            '&url=' + encodeURIComponent(this.host + '/#!/ts/' + stationId + '/' + program.attr('ft'));
                    },
                    getGoogleCalUrl: function(stationId, program) {
                        return 'http://www.google.com/calendar/event' +
                            '?action=TEMPLATE' +
                            '&text=' + encodeURIComponent(program.find('title').first().text()) +
                            '&dates=' + program.attr('ft').substring(0, 8) + 'T' + program.attr('ft').substring(8, 14) +
                            '/' + program.attr('to').substring(0, 8) + 'T' + program.attr('to').substring(8, 14) +
                            '&details=' + encodeURIComponent(this.host + '/#!/ts/' + stationId + '/' + program.attr('ft')) +
                            '&location=' +
                            '&trp=false' +
                            '&sprop=' +
                            '&sprop=name:';
                    },
                    getShareText: function(stationName, program) {
                        var ftmt = moment(program.attr('ft'), 'YYYYMMDDHHmmss');
                        var tomt = moment(program.attr('to'), 'YYYYMMDDHHmmss');
                        var radioHours = translateRadikoTimeHours(ftmt, tomt);
                        if (radioHours.ft_hour >= 24) {
                            ftmt.subtract(1, 'days');
                        }
                        return program.find('title').first().text() +
                            ' | ' + stationName +
                            sprintf(' | %04d/%02d/%02d/%s ', ftmt.year(), ftmt.month() + 1, ftmt.date(), ftmt.format('ddd')) +
                            sprintf(' %02d:%02d-%02d:%02d', radioHours.ft_hour, ftmt.minute(), radioHours.to_hour, tomt.minute());
                    },
                    getMetaTitle: function(_stationName, program) {
                        var ftmt = moment(program.attr('ft'), 'YYYYMMDDHHmmss');
                        var y = program.attr('ft').substring(0, 4),
                            m = program.attr('ft').substring(4, 6),
                            d = program.attr('ft').substring(6, 8),
                            ft_m = program.attr('ft').substring(10, 12),
                            to_m = program.attr('to').substring(10, 12);
                        var ft_h = program.attr('ft').substring(8, 10),
                            to_h = program.attr('to').substring(8, 10);
                        if (ft_h < 5) {
                            ftmt.subtract(1, 'days');
                            ft_h = parseInt(ft_h) + 24;
                            to_h = parseInt(to_h) + 24;
                        }
                        return y +
                            '/' + m +
                            '/' + d +
                            '/' + ftmt.format('ddd') +
                            ' ' + ft_h +
                            ':' + ft_m +
                            '-' + to_h +
                            ':' + to_m +
                            ' | ' + program.find('title').first().text() +
                            ' | ' + _stationName.first().text() +
                            ' | radiko';
                    },
                    getTwitterUrl: function(shareText, shareUrl) {
                        return 'http://twitter.com/share?text=' +
                            encodeURIComponent(shareText) + '&hashtags=radiko&url=' + encodeURIComponent(shareUrl);
                    },
                    getFaceBookUrl: function(shareUrl) {
                        return 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(shareUrl);
                    },
                    getProgStartTime: function(ft) {
                        var ftmt = moment(ft, 'YYYYMMDDHHmmss');
                        var hour = ftmt.hour();
                        if (ftmt.hour() < 5) {
                            ftmt.subtract(1, 'days');
                            hour += 24;
                        }
                        return ftmt.format('MM') + '月' +
                            ftmt.format('DD') + '日(' +
                            ftmt.format('ddd') + ')' +
                            sprintf('%02d', hour) + ':' +
                            ftmt.format('mm');
                    },
                    getOmitText: function(text, size) {
                        var txt = text;
                        var suffix = '…';
                        var b = 0;
                        for (var i = 0; i < txt.length; i++) {
                            b += txt.charCodeAt(i) <= 255 ? 0.5 : 1;
                            if (b > size) {
                                txt = txt.substr(0, i) + suffix;
                                break;
                            }
                        }
                        return txt;
                    },
                    getProgramList: function($progs, tsStatus) {
                        var self = this;
                        return _.map($progs, function(prog) {
                            var $prog = $(prog);
                            var img = $prog.find('img').text();
                            if (img === '' && +tsStatus === 0) {
                                img = '/images/radio-api-noimage_live.png';
                            } else if (img === '') {
                                img = '/images/radio-api-noimage_ts.png';
                            } else {}
                            return {
                                programId: $prog.attr('id'),
                                progTitle: $prog.find('title').first().text(),
                                progPfm: self.getOmitText($prog.find('pfm').first().text(), 8),
                                progSchedule: (self.dateToFormatedString($prog.attr('ft'), 'M月D日（ddd） HH:mm')) +
                                    '-' + (self.dateToFormatedString($prog.attr('to'), 'HH:mm')),
                                progImage: img,
                                progUrl: $prog.find('url').first().text(),
                                progDesc: $prog.find('desc').first().text(),
                                ft: $prog.attr('ft'),
                                to: $prog.attr('to'),
                                date: $prog.find('date').text()
                            };
                        }, this);
                    },
                    getPlayingStatus: function(stationId, ft) {
                        if (_.isUndefined(player) || !player.isPlaying()) {
                            return false;
                        }
                        if ($('#url').val().match(/^#/) !== null) {
                            return false;
                        }
                        return player.station_id().indexOf(stationId) !== -1 &&
                            moment(player.fttm()[0]).format('YYYYMMDDHHmmss').indexOf(ft) !== -1;
                    }
                });
                _.extend(NowProgramsCollection.prototype, $.Radiko.Mixins.Utility);
                var NowProgramsListView = Backbone.View.extend({
                    initialize: function() {
                        this.listenTo(this.collection.program, 'sync', this.onSync);
                        this.listenTo($.Radiko.Player.Model, 'change:isPlaying', this.onChangeIsPlaying);
                        this.listenTo($.Radiko.Player.Model, 'change:isLoaded', this.onChangeIsLoaded);
                    },
                    onClose: function() {
                        if ($.Radiko.Player.currentJobId !== this.scheduleId) {
                            $.Radiko.jobScheduler.remove(this.scheduleId);
                        }
                        clearInterval(this.tsAvailableWatch);
                        $(window).off('close-program');
                    },
                    onSync: function(models) {
                        this.render(models, this.collection.stations);
                    },
                    onChangeIsPlaying: function(model, isPlaying) {
                        var url = $('#url').val(),
                            $tmpUrl = $('#tmpUrl');
                        var urlParseObject = $.Radiko.parseQueryString(url);
                        var tmpUrlParseObject = $.Radiko.parseQueryString($tmpUrl.val());
                        if (urlParseObject.station_id !== tmpUrlParseObject.station_id ||
                            urlParseObject.ft !== tmpUrlParseObject.ft ||
                            urlParseObject.to !== tmpUrlParseObject.to) {
                            return;
                        }
                        var $detailButton = $('.live-detail__play'),
                            $buttonIcon = $detailButton.find('.play-radio');
                        if (isPlaying === false) {
                            $buttonIcon.html('<i class="icon icon--play icon--left"></i>再生する');
                            if ($buttonIcon.hasClass('btn--stop')) {
                                $buttonIcon.removeClass('btn--stop');
                                $buttonIcon.addClass('btn--play');
                            }
                        } else {
                            $buttonIcon.html('<i class="icon icon--stop-02 icon--left"></i>停止する');
                            if ($buttonIcon.hasClass('btn--play')) {
                                $buttonIcon.removeClass('btn--play');
                                $buttonIcon.addClass('btn--stop');
                            }
                        }
                    },
                    onChangeIsLoaded: function() {
                        $('.live-detail__play').find('.play-radio').css('opacity', '1.0');
                    },
                    render: function(programs, stations) {
                        var data = programs.findWhere({
                            stationId: _stationId
                        });
                        var programsList = data.toJSON();
                        this.renderDetail(programsList, this.collection.areafree);
                        this.renderAttention(programsList.ft);
                        this.renderColorBox(programsList, this.collection.areafree);
                        this.renderPlayer(data);
                        $('.btn--tooltip').on('click', function(e) {
                            e.preventDefault();
                            $(this).toggleClass('btn--disabled').next().toggleClass('tooltip--open');
                        });
                        this.setMetaContent(programsList);
                        $('.live-detail__attention-old .date').text(parseInt(programsList.ft.substring(4, 6)) +
                            '/' + parseInt(programsList.ft.substring(6, 8)));
                        if (+$.cookie('share') === 1) {
                            $.removeCookie('share');
                            $.Radiko.logger.share_log({
                                stationId: _stationId,
                                type: 'trans_app',
                                t: _datetime
                            });
                            $.Radiko.logger.fromShare = true;
                            $.Radiko.logger.sharedStationId = _stationId;
                            $.Radiko.logger.sharedProgramFt = programsList.ft;
                            $.Radiko.logger.sharedProgramSeek = _datetime;
                        }
                        this.renderTopic();
                    },
                    insertPlayer: function() {
                        var streamsCollection = new StreamsCollection();
                        new StreamsView({
                            collection: streamsCollection
                        });
                        streamsCollection.fetch();
                    },
                    setMetaContent: function(data) {
                        var setting = {};
                        var desc = '';
                        desc += data.progDesc === '' ? '' : data.progDesc.replace(/(<([^>]+)>)/ig, '');
                        desc += data.progInfo === '' ? '' : data.progInfo.replace(/(<([^>]+)>)/ig, '');
                        setting.title = data.metaTitle;
                        setting['og:title'] = data.metaTitle;
                        setting['og:type'] = 'article';
                        setting['og:description'] = desc.substr(0, 93);
                        setting['og:url'] = data.shareUrl;
                        setting['og:image'] = data.progImage;
                        setting['twitter:title'] = data.metaTitle;
                        setting['twitter:description'] = desc.substr(0, 93);
                        setMetaText(setting);
                    },
                    renderDetail: function(data, stations) {
                        if (+window.ts_status === 2) {
                            $('#timeshift-content').html(JST['ts-detail/timeshift-close']());
                            return;
                        }
                        var $btnList = $('.btn-list');
                        var delay = stations.findWhere({
                            id: _stationId
                        }).get('tf_max_delay');
                        var tsAvailableTime = moment(data.ft, 'YYYYMMDDHHmmss').add(delay, 'seconds').add($.Radiko.playingBuffer, 'seconds');
                        if (!data.isAreaFree) {
                            data.nowPlayArea = '<p class="live-detail__plan invalid-station">この放送局の番組は、<br />放送エリア外からは聴取することができません。</p>';
                            $btnList.remove();
                        } else if (+data.isFuture === 0) {
                            data.nowPlayArea = '<p class="live-detail__plan">この番組は' + data.progStartTime + '〜配信予定です</p>';
                        } else if (!_.contains($.Radiko.user_station_list, _stationId) && +data.tsInNg !== 2 && +data.tsOutNg === 2) {
                            data.nowPlayArea = '<p class="live-detail__plan">この番組は、放送エリア外からは聴取することができません。 </p>';
                            $btnList.remove();
                        } else if (!_.contains($.Radiko.user_station_list, _stationId) && +data.tsInNg === 2 && data.tsOutNg === 2) {
                            data.nowPlayArea = '<p class="live-detail__plan">この番組は、タイムフリー聴取機能では聴取することができません。</p>';
                            $btnList.remove();
                        } else if (_.contains($.Radiko.user_station_list, _stationId) && +data.tsInNg === 2) {
                            data.nowPlayArea = '<p class="live-detail__plan">この番組は、タイムフリー聴取機能では聴取することができません。</p>';
                            $btnList.remove();
                        } else if (tsAvailableTime.isAfter()) {
                            data.nowPlayArea = '再生可能まで残り' + tsAvailableTime.diff(moment(), 'seconds') + '秒';
                            this.tsAvailableWatch = setInterval(function() {
                                var $timerText = $('.live-detail__play');
                                if ($timerText.length === 0) {
                                    return;
                                }
                                if (!tsAvailableTime.isAfter()) {
                                    $timerText.html(JST['ts-detail/now-play-area'](data));
                                    if ($.Radiko.Player.Model.get('isLoaded')) {
                                        $timerText.find('.play-radio').css('opacity', '1.0');
                                    } else {
                                        $timerText.addClass('disabled');
                                    }
                                    clearInterval(this.tsAvailableWatch);
                                    return;
                                }
                                $timerText.text('再生可能まで残り' + tsAvailableTime.diff(moment(), 'seconds') + '秒');
                            }.bind(this), 1000);
                        } else {
                            data.nowPlayArea = JST['ts-detail/now-play-area'](data);
                        }
                        $('#now-programs-list').html(JST['ts-detail/now-programs-list'](data));
                        if (!tsAvailableTime.isAfter()) {
                            $('.live-detail__play').addClass('disabled');
                        }
                        if (data.progPfm2.length > 10) {
                            $('.live-detail__cast-name').marquee().css('font-size', '15px');
                        }
                        $('.live-detail__description a').attr('target', '_blank');
                        if (!$.Radiko.login_status.areafree && !isDefaultArea && !_.contains($.Radiko.exclude_station_list, _stationId)) {
                            $('.live-detail__play').replaceWith(JST['live-detail/area-out']);
                            $btnList.remove();
                        }
                        this.insertListenLimit(data.stationId, data.ft, data.to);
                    },
                    renderColorBox: function(programs, stations) {
                        var result = JST['ts-detail/colorbox-share'](programs);
                        $('#share-box').html(result);
                        var clipboardCallback = function() {
                            alert('コピーしました。');
                            var ts = $('.colorbox__seek .seek-bar').attr('data-ts');
                            var shareObject = {
                                station_id: programs.stationId,
                                program_start_time: programs.ft,
                                program_end_time: programs.to,
                                shared_program_datetime: ts,
                                share_type: RadikoPeopleDriven.ShareType.COPY
                            };
                            RadikoPeopleDriven.addSharedInfo(shareObject);
                            RadikoADK.sharedRepository.add(shareObject);
                            $.Radiko.logger.share_log({
                                type: 'do_share',
                                stationId: programs.stationId,
                                sns: 'copy',
                                t: ts,
                                timeType: 'timefree'
                            });
                        };
                        if (typeof Clipboard !== 'undefined' && Clipboard.isSupported()) {
                            if (window.clipboardObject) {
                                window.clipboardObject.destroy();
                            }
                            window.clipboardObject = new Clipboard('#clipboard', {
                                container: $('#clipboard')[0]
                            });
                            window.clipboardObject.on('success', clipboardCallback);
                        } else {
                            var client_1 = new ZeroClipboard($('#clipboard'));
                            client_1.on('ready', function() {
                                client_1.on('aftercopy', clipboardCallback);
                            });
                        }
                        var covertMoment = function(datetime) {
                            return moment(datetime, 'YYYYMMDDHHmmss');
                        };
                        var ftMoment = covertMoment(programs.ft);
                        var toMoment = covertMoment(programs.to);
                        if (ftMoment.isSameOrAfter()) {
                            $('.colorbox__play').html('');
                        }
                        this.insertPlayer();
                        var playtime = toMoment.diff(ftMoment, 'seconds');
                        $('.end').text('-' + sec_to_disptime(playtime));
                        var self = this;
                        $('.btn--share').colorbox({
                            width: '640px',
                            inline: true,
                            speed: 0,
                            opacity: 0.5,
                            onOpen: function() {
                                $.Radiko.Player.isShareOpen = true;
                                if ($('#colorbox--share').find('.timelimit span').length === 0) {
                                    self.insertListenLimit(programs.stationId, programs.ft, programs.to);
                                }
                                var delay = stations.findWhere({
                                    id: _stationId
                                }).get('tf_max_delay');
                                var playableMoment = ftMoment.clone().add(delay, 'seconds').add($.Radiko.playingBuffer, 'seconds');
                                if (playableMoment.isSameOrAfter() && ftMoment.isSameOrBefore()) {
                                    $('.btn-list').hide();
                                    $('.cnt-text').show();
                                    var interval_1 = setInterval(function() {
                                        var time = playableMoment.diff(moment(), 'seconds');
                                        if (time <= 0) {
                                            $('.btn-list').show();
                                            $('.cnt-text').hide('');
                                            clearInterval(interval_1);
                                            return;
                                        }
                                        $('#colorbox--share').find('.colorbox__text .sec').text(time);
                                    }, 1000);
                                } else {
                                    $('.btn-list').show();
                                    $('.cnt-text').hide();
                                }
                                if (ftMoment.isSameOrAfter()) {
                                    $('.share-txt').text('');
                                }
                                var $colorBoxSeekbar = $('.colorbox__seek .seek-bar');
                                if (!$colorBoxSeekbar.attr('data-ts')) {
                                    $colorBoxSeekbar.attr('data-ts', programs.ft);
                                }
                            },
                            onClosed: function() {
                                $.Radiko.Player.isShareOpen = false;
                                changePlayButton();
                                if (isSharePlay && player.isPlaying()) {
                                    player.stop();
                                }
                                isSharePlay = false;
                                if ($.Radiko.Share.isBeforePlaying) {
                                    $.Radiko.Share.isBeforePlaying = false;
                                    play($('#url').val());
                                }
                            }
                        });
                        $('.btn__facebook').on('click', function() {
                            window.open(this.href, 'TWwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
                            var ts = $('.colorbox__seek .seek-bar').attr('data-ts');
                            var shareObject = {
                                station_id: programs.stationId,
                                program_start_time: programs.ft,
                                program_end_time: programs.to,
                                shared_program_datetime: ts,
                                share_type: RadikoPeopleDriven.ShareType.FACEBOOK
                            };
                            RadikoPeopleDriven.addSharedInfo(shareObject);
                            RadikoADK.sharedRepository.add(shareObject);
                            $.Radiko.logger.share_log({
                                type: 'do_share',
                                stationId: programs.stationId,
                                sns: 'facebook',
                                t: ts,
                                timeType: 'timefree'
                            });
                            return false;
                        });
                        $('.btn__twitter').on('click', function() {
                            window.open(this.href, 'FBwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
                            var ts = $('.colorbox__seek .seek-bar').attr('data-ts');
                            var shareObject = {
                                station_id: programs.stationId,
                                program_start_time: programs.ft,
                                program_end_time: programs.to,
                                shared_program_datetime: ts,
                                share_type: RadikoPeopleDriven.ShareType.TWITTER
                            };
                            RadikoPeopleDriven.addSharedInfo(shareObject);
                            RadikoADK.sharedRepository.add(shareObject);
                            $.Radiko.logger.share_log({
                                type: 'do_share',
                                stationId: programs.stationId,
                                sns: 'twitter',
                                t: ts,
                                timeType: 'timefree'
                            });
                            return false;
                        });
                        var _self = this;
                        $('#share-play').on('click', function() {
                            var storeKey = programs.stationId + programs.ft;
                            var storeFt = store.get(storeKey);
                            if (_.isUndefined(storeFt) || +storeFt.to !== +programs.to) {
                                var listenedLimit = moment().add(24, 'hour');
                                var momentFt = moment(programs.ft, 'YYYYMMDDHHmmss');
                                if (momentFt.isBefore(momentFt.clone().set({
                                        hour: 5,
                                        minutes: 0,
                                        seconds: 0
                                    }))) {
                                    momentFt.subtract(1, 'days');
                                }
                                momentFt.add(8, 'days').set({
                                    hour: 5,
                                    minutes: 0,
                                    seconds: 0
                                });
                                if (listenedLimit.isAfter(momentFt)) {
                                    listenedLimit = momentFt.clone().subtract(1, 'seconds');
                                }
                                store.unWatch(window.storeWatchId);
                                store.create(storeKey, {
                                    title: programs.progTitle,
                                    to: programs.to,
                                    limit: listenedLimit.unix(),
                                    listened_time: 0,
                                    status: 0
                                });
                                window.storeWatchId = store.watch('update', function(key, newVal) {
                                    if (key !== storeKey) {
                                        return;
                                    }
                                    var delta = (60 * 60 * 3) - newVal.listened_time;
                                    if (delta <= 0) {
                                        if (+($('.program-ticker a').data('ft')) === +programs.ft) {
                                            player.stop();
                                            $('#stream-player').hide();
                                            $('#player-area').empty();
                                        }
                                        _self.closeProgram();
                                        $.Radiko.jobScheduler.remove(window.scheduleId);
                                        store.unWatch(window.storeWatchId);
                                    } else {
                                        $('.listen-limit .count-timer').text(_self.sec2displayLimit(delta));
                                    }
                                });
                                _self.insertListenLimit(programs.stationId, programs.ft, programs.to);
                            }
                        });
                    },
                    renderPlayer: function(data) {
                        var $playButtonArea = $('.live-detail__play'),
                            _self = this;
                        if ($.Radiko.Player.Model.get('isLoaded')) {
                            $playButtonArea.find('.play-radio').css('opacity', '1.0');
                        }
                        $playButtonArea.off('click', '.btn--stop');
                        $playButtonArea.on('click', '.btn--stop', function() {
                            $.Radiko.Player.Model.set('isPlaying', false);
                            $.Radiko.jobScheduler.remove(window.updateListenTime);
                            $.Radiko.bookmark.forceSave(player.fttm().diffSeconds(player.playing_date()));
                            if (typeof RadikoJSPlayer !== 'undefined' && RadikoJSPlayer.isSupported()) {
                                player.pause();
                            } else {
                                player.stop();
                            }
                        });
                        $playButtonArea.off('click', '.btn--play');
                        $playButtonArea.on('click', '.btn--play', function(ev) {
                            ev.preventDefault();
                            RadikoADK.setClickingPlayButtonTimeTime(+moment());
                            if ($.Radiko.Player.Model.get('isStartStreaming')) {
                                return;
                            }
                            $.Radiko.Player.Model.set('isStartStreaming', true);
                            var term = store.get('accept-term');
                            if (!term) {
                                _self.colorboxTerm(_self, data);
                            } else {
                                _self.playRadio(data);
                            }
                        });
                    },
                    colorboxTerm: function(_self, data) {
                        var viewTimeshiftTop = false;
                        $.colorbox({
                            width: '640px',
                            inline: true,
                            href: '#colorbox--term',
                            open: true,
                            speed: 0,
                            opacity: 0.5,
                            overlayClose: false,
                            onOpen: function() {
                                var $colorBoxTerm = $('#colorbox--term');
                                $colorBoxTerm.off('click', '.colorbox__link');
                                $colorBoxTerm.on('click', '.colorbox__link', function(e) {
                                    var $icon = $(e.currentTarget).find('i');
                                    viewTimeshiftTop = $icon.hasClass('icon--agree-03');
                                    $icon.toggleClass('icon--agree-04');
                                    $icon.toggleClass('icon--agree-03');
                                });
                                $colorBoxTerm.off('click', '.colorbox__btn');
                                $colorBoxTerm.on('click', '.colorbox__btn', function() {
                                    store.set('accept-term', viewTimeshiftTop);
                                    $.colorbox.close();
                                    _self.playRadio(data);
                                });
                            }
                        });
                    },
                    renderAttention: function(ft) {
                        if (+window.ts_status !== 0) {
                            $('.timeshift-detail__sub').html(JST['ts-detail/detail-attention']({
                                ftDate: moment(ft, 'YYYYMMDDHHmmss').format('M/D'),
                                isUserArea: _.contains($.Radiko.user_station_list, _stationId)
                            }));
                        }
                    },
                    playRadio: function(data) {
                        if (!$.Radiko.login_status.areafree && !isDefaultArea) {
                            $.colorbox({
                                width: '60%',
                                inline: true,
                                href: '#colorbox--premium',
                                open: true,
                                speed: 0,
                                opacity: 0.5
                            });
                            return;
                        }
                        if (!$.Radiko.Player.Model.get('isLoaded')) {
                            return;
                        }
                        var dataStationId = data.get('stationId');
                        $.Radiko.Ticker.Model.set({
                            stationId: dataStationId,
                            stationName: data.get('stationName'),
                            programs: [data.toJSON()]
                        });
                        var url = $url.val();
                        var tmpUrl = $('#tmpUrl').val();
                        var ft = data.get('ft');
                        if (url === '' || url.match(/^#/) !== null) {
                            url = tmpUrl;
                            $('#url').val(url);
                        } else {
                            var query = Radiko.parseQueryString(url);
                            var isSameProgram = (query.station_id.indexOf(dataStationId) === -1 || query.ft.indexOf(ft) === -1);
                            if (isSameProgram) {
                                url = tmpUrl;
                                $('#url').val(url);
                            }
                        }
                        var to = data.get('to');
                        var storeKey = dataStationId + ft;
                        store.unWatch(window.storeWatchId);
                        var listenedLimit = moment().add(24, 'hour');
                        var momentFt = moment(ft, 'YYYYMMDDHHmmss');
                        if (momentFt.isBefore(momentFt.clone().set({
                                hour: 5,
                                minutes: 0,
                                seconds: 0
                            }))) {
                            momentFt.subtract(1, 'days');
                        }
                        momentFt.add(8, 'days').set({
                            hour: 5,
                            minutes: 0,
                            seconds: 0
                        });
                        if (listenedLimit.isAfter(momentFt)) {
                            listenedLimit = momentFt.clone().subtract(1, 'seconds');
                        }
                        store.create(storeKey, {
                            title: data.get('progTitle'),
                            to: to,
                            limit: listenedLimit.unix(),
                            listened_time: 0,
                            status: 0
                        });
                        $.Radiko.jobScheduler.remove($.Radiko.Player.currentJobId);
                        this.insertListenLimit(dataStationId, ft, to, $('.live-detail__play'));
                        $.Radiko.Player.currentJobId = this.scheduleId;
                        window.storeWatchId = store.watch('update', function(key, newVal) {
                            if (key !== storeKey) {
                                return;
                            }
                            var delta = (60 * 60 * 3) - newVal.listened_time;
                            if (delta <= 0) {
                                if (+($('.program-ticker a').data('ft')) === +ft) {
                                    player.stop();
                                    $('#stream-player').hide();
                                    $('#player-area').empty();
                                }
                                this.closeProgram();
                                $.Radiko.jobScheduler.remove(window.scheduleId);
                                store.unWatch(window.storeWatchId);
                            } else {
                                $('.listen-limit .count-timer').text(this.sec2displayLimit(delta));
                            }
                        }.bind(this));
                        var playerArea = $('#player-area');
                        playerArea.removeClass('player-default');
                        playerArea.addClass('player-timeshift');
                        updatePlayingProgramInfo({
                            ft: data.get('ft'),
                            to: data.get('to'),
                            title: data.get('progTitle'),
                            pfm: data.get('progPfm'),
                            stationId: data.get('stationId'),
                            stationName: data.get('stationName')
                        });
                        play(url);
                        if ($.Radiko.logger.fromShare &&
                            $.Radiko.logger.sharedStationId === dataStationId &&
                            +$.Radiko.logger.sharedProgramFt === +ft) {
                            if ($.Radiko.logger.sharedPlayBeaconSended === false) {
                                $.Radiko.logger.share_log({
                                    stationId: dataStationId,
                                    type: 'play',
                                    t: $.Radiko.logger.sharedProgramSeek
                                });
                                $.Radiko.logger.sharedPlayBeaconSended = true;
                            }
                        } else {
                            $.Radiko.logger.fromShare = false;
                        }
                    },
                    insertListenLimit: function(stationId, ft, to) {
                        var storeFt = store.get(stationId + ft);
                        if (_.isUndefined(storeFt) || +storeFt.to !== +to || typeof storeFt.listened_time === 'undefined') {
                            return 0;
                        }
                        var replaceLimitOver = this.closeProgram;
                        var limit = storeFt.limit,
                            listenedTime = storeFt.listened_time;
                        var $p = $('.listen-limit.timelimit');
                        if ($p.find('span').length === 0 && typeof storeFt.listened_time !== 'undefined') {
                            var $liveDetailLimit = $('.live-detail__limit');
                            var listenedLimitMoment = moment(storeFt.limit * 1000);
                            var hour = listenedLimitMoment.format('HH');
                            if (listenedLimitMoment.isBefore(listenedLimitMoment.clone().set({
                                    hours: 5,
                                    minutes: 0,
                                    seconds: 0
                                }))) {
                                hour = +hour + 24;
                                listenedLimitMoment.subtract(1, 'days');
                            }
                            var listenedLimitText = listenedLimitMoment.format('聴取可能期限：YYYY年MM月DD日 ' + hour + ':mmまで');
                            $liveDetailLimit.text(listenedLimitText);
                            $liveDetailLimit.show();
                            $p.append($('<i></i>', {
                                "class": 'icon'
                            }));
                            $p.append($('<span></span>', {
                                "class": 'count-timer',
                                text: this.sec2displayLimit((60 * 60 * 3) - storeFt.listened_time)
                            }));
                        }
                        if ((limit <= moment().unix() || listenedTime >= (60 * 60 * 3))) {
                            replaceLimitOver();
                            return;
                        }
                        $(window).off('close-program');
                        $(window).on('close-program', replaceLimitOver);
                        this.scheduleId = $.Radiko.jobScheduler.add(function() {
                            var delta = store.get(stationId + ft).limit - moment().unix();
                            if (delta > 0) {
                                return;
                            }
                            if (+($('.program-ticker a').data('ft')) === +ft) {
                                player.stop();
                                $('#stream-player').hide();
                                $('#player-area').empty();
                            }
                            $(window).trigger('close-program');
                            $.Radiko.jobScheduler.remove(window.scheduleId);
                            store.unWatch(window.storeWatchId);
                        }, 1000);
                    },
                    renderTopic: function() {
                        var topicCollection = new TopicCollection();
                        $.Radiko.views.push(new TopicView({
                            el: document.getElementById('topic-list'),
                            collection: topicCollection
                        }));
                        topicCollection.fetch();
                    },
                    sec2displayLimit: function(sec) {
                        sec = Math.round(sec);
                        var minSec = sec % (60 * 60);
                        var m = Math.ceil(minSec / 60) === 60 ? 0 : Math.ceil(minSec / 60);
                        var h = m === 0 ? Math.ceil(sec / (60 * 60)) : Math.floor(sec / (60 * 60));
                        return sprintf('%02d', h) + ':' + sprintf('%02d', m);
                    },
                    closeProgram: function() {
                        var $timelimit = $('.timelimit');
                        $timelimit.find('.icon').addClass('over');
                        $timelimit.find('.count-timer').text('ご利用時間終了');
                        var $detailPlayArea = $('.live-detail__play');
                        $detailPlayArea.empty().addClass('timeout');
                        $detailPlayArea.css('background-color', 'transparent');
                        $('#share-play').hide();
                    }
                });
                var MusicsView = Backbone.View.extend({
                    initialize: function() {
                        this.listenTo(this.collection.noa_collection, 'sync', this.onSync);
                        this.listenTo(this.collection.noa_collection, 'error', this.onError);
                    },
                    onSync: function(models) {
                        this.render(models);
                    },
                    onError: function(ticketCollection) {
                        this.render(ticketCollection.collection);
                    },
                    render: function(models) {
                        if (+window.ts_status === 0 || models.length === 0) {
                            return false;
                        }
                        var data = models.toJSON();
                        $('#play-musics').html(JST['detail-common/play-musics']({
                            models: data,
                            stream_type: 'TF'
                        }));
                        $('.tune-list__ticket button').on('click', function(e) {
                            var id = $(e.target).data('id');
                            var $ticketColorBox = $('#colorbox--ticket');
                            $ticketColorBox.html(new RadikoTicket.DialogView({
                                noa_item: data[id],
                                stream_type: 'TF'
                            }).el);
                            $.colorbox({
                                scrolling: false,
                                inline: true,
                                href: $ticketColorBox,
                                speed: 0,
                                opacity: 0.5
                            });
                        });
                        $('.tune-list__item').heightLine();
                        this.listMore();
                        return this;
                    },
                    listMore: function() {
                        var showNum = 3;
                        var showItems = $('.tune-list__item');
                        showItems.addClass('hide-tune-item');
                        var listNum = showItems.length;
                        showItems.hide();
                        var moreBtn = $('.tune-list__more');
                        if (showNum > listNum) {
                            showNum = listNum;
                            moreBtn.remove();
                        }
                        var hideItems = $('.hide-tune-item');
                        for (var i = 0; i < showNum; i++) {
                            hideItems.eq(i).show();
                            hideItems.eq(i).removeClass('hide-tune-item');
                            hideItems.eq(i).addClass('show-tune-item');
                        }
                        moreBtn.on('click', function() {
                            var showItems = $('.hide-tune-item');
                            hideItems.show();
                            showItems.removeClass('hide-tune-item');
                            showItems.addClass('show-tune-item');
                            $(this).remove();
                            $(this).off('click');
                        });
                    }
                });
                var StationWeeklyModel = Backbone.Model.extend({
                    defaults: {}
                });
                var StationWeeklyCollection = Backbone.Collection.extend({
                    model: StationWeeklyModel,
                    initialize: function() {
                        this.stationId = _stationId;
                        this.areaId = $.Radiko.area.id;
                        this.currentDate = moment();
                        if (this.currentDate.format('HHmmdd') <= '050000') {
                            this.currentDate.subtract(1, 'day');
                        }
                    },
                    setCurrentDate: function(moment) {
                        this.currentDate = moment;
                    },
                    url: function() {
                        return '/v3/program/station/weekly/' + this.stationId + '.xml';
                    },
                    fetch: function(options) {
                        return Backbone.Collection.prototype.fetch.call(this, _.extend({
                            dataType: 'xml'
                        }, options));
                    },
                    parse: function(resp) {
                        return _.map($('progs', resp), function(progs) {
                            var _this = this;
                            var $progs = $(progs);
                            var now = getDate();
                            var stationId = $progs.parent('station').attr('id');
                            return {
                                date: $progs.find('date').text(),
                                progs: _.map($progs.find('prog'), function(prog) {
                                    var $prog = $(prog);
                                    var ftl = $prog.attr('ftl');
                                    var tol = $prog.attr('tol');
                                    var ft = $prog.attr('ft');
                                    var to = $prog.attr('to');
                                    now = moment();
                                    var addClass = '';
                                    var listenType = _this.getListenType(stationId, ft, to);
                                    var programUrl = '/#!/ts/' + stationId + '/' + ft;
                                    if (to <= now.format('YYYYMMDDHHmmss')) {
                                        addClass += 'item--past ';
                                    } else if (ft >= now.format('YYYYMMDDHHmmss')) {
                                        addClass += 'item--future ';
                                    } else {
                                        addClass += 'item--onair ';
                                    }
                                    return {
                                        id: stationId,
                                        ftl: ftl,
                                        ft: ft,
                                        to: to,
                                        tol: tol,
                                        dur: parseInt($prog.attr('dur'), 10),
                                        title: $prog.find('title').first().text(),
                                        pfm: $prog.find('pfm').first().text(),
                                        img: $prog.find('img').text(),
                                        addClass: addClass,
                                        program_url: programUrl,
                                        scheduleString: _this.getScheduleString(ft, to),
                                        listenType: listenType
                                    };
                                })
                            };
                        }, this);
                    },
                    getScheduleString: function(ft, to) {
                        var ftmt = moment(ft, 'YYYYMMDDHHmmss');
                        var tomt = moment(to, 'YYYYMMDDHHmmss');
                        var radioHours = translateRadikoTimeHours(ftmt, tomt);
                        if (radioHours.ft_hour >= 24) {
                            ftmt.subtract(1, 'days');
                        }
                        var ftTime = sprintf('%02d:%02d', radioHours.ft_hour, ftmt.minute());
                        var toTime = sprintf('%02d:%02d', radioHours.to_hour, tomt.minute());
                        return ftTime + '〜' + toTime;
                    }
                });
                _.extend(StationWeeklyCollection.prototype, $.Radiko.Mixins.Utility);
                var WeeklyListView = Backbone.View.extend({
                    initialize: function() {
                        this.currentDate = null;
                        this.listenTo(this.collection, 'sync', this.onSync);
                    },
                    onSync: function(models) {
                        this.currentDate = this.collection.currentDate;
                        this.render(models);
                    },
                    render: function(models) {
                        var modelsJson = models.toJSON();
                        this.renderProgramDate();
                        this.renderProgramItems(modelsJson);
                        this.defineUi();
                        setScrollInit();
                        return this;
                    },
                    renderProgramDate: function() {
                        var _this = this;
                        var beforeDate = _.map(Array.apply(null, new Array(7)), function(d, i) {
                            var date = getDateMoment().subtract(i + 1, 'days');
                            return {
                                dateFullString: date.format('YYYYMMDD'),
                                dateString: date.format('M/D'),
                                dayString: date.format('(ddd)'),
                                isCurrent: _this.currentDate.isSame(date, 'day'),
                                isSat: date.day() === 6,
                                isSun: date.day() === 0
                            };
                        });
                        beforeDate.reverse();
                        var afterDate = _.map(Array.apply(null, new Array(7)), function(d, i) {
                            var date = getDateMoment().add(i, 'days');
                            return {
                                dateFullString: date.format('YYYYMMDD'),
                                dateString: date.format('M/D'),
                                dayString: date.format('(ddd)'),
                                isCurrent: _this.currentDate.isSame(date, 'day'),
                                isSat: date.day() === 6,
                                isSun: date.day() === 0
                            };
                        });
                        $('.program-table__date-outer').html(JST['live-detail/program-table-date']({
                            dateList: beforeDate.concat(afterDate)
                        }));
                    },
                    renderProgramItems: function(data) {
                        var beforeProgs = data.splice(0, 7);
                        $('.program-table__items').html(JST['common/program-table-items']({
                            models: beforeProgs.concat(data),
                            tableWidth: (data.length * 159 - 1) + 'px'
                        }));
                    },
                    defineUi: function() {
                        $('.js-scroll').css('left', '-945px');
                        $('.js-next').hide();
                    },
                    events: {
                        'click .js-select-date': 'selectDateClickHandler',
                        'click .js-prev': 'prevClickHandler',
                        'click .js-next': 'nextClickHandler'
                    },
                    selectDateClickHandler: function(ev) {
                        ev.preventDefault();
                        $.Radiko.EventEmitter.trigger('change:currentDate', ev.target.hash.substring(1));
                    },
                    prevClickHandler: function(ev) {
                        ev.preventDefault();
                        var $prev = $('.js-prev');
                        if ($prev.hasClass('btn-disable')) {
                            return;
                        }
                        var $scrolls = $('.js-scroll');
                        var left = parseInt($scrolls.css('left').replace('px', ''));
                        $scrolls.stop(true, true);
                        $prev.addClass('btn-disable');
                        $scrolls.animate({
                            left: left + 135
                        }).promise().done(function() {
                            $scrolls.each(function() {
                                $scrolls.css('left', left + 135);
                            });
                            $prev.removeClass('btn-disable');
                            var left = parseInt($scrolls.css('left').replace('px', ''));
                            if (left >= 0) {
                                $scrolls.css('left', 0);
                                $('.js-next').show();
                                $prev.hide();
                            } else {
                                $('.js-next').show();
                            }
                        });
                    },
                    nextClickHandler: function(ev) {
                        ev.preventDefault();
                        var $next = $('.js-next');
                        if ($next.hasClass('btn-disable')) {
                            return;
                        }
                        var $scrolls = $('.js-scroll');
                        var left = parseInt($scrolls.css('left').replace('px', ''));
                        $next.addClass('btn-disable');
                        $scrolls.stop(true, true);
                        $scrolls.each(function() {
                            $scrolls.css('left', left);
                        }).animate({
                            left: left - 135
                        }, function() {
                            $next.removeClass('btn-disable');
                            var left = parseInt($scrolls.css('left').replace('px', ''));
                            if (left <= -945) {
                                $scrolls.css('left', -945);
                                $('.js-prev').show();
                                $next.hide();
                            } else {
                                $('.js-prev').show();
                            }
                        });
                    }
                });
                var OtherModel = Backbone.Model.extend({
                    defaults: {
                        models: []
                    }
                });
                var OthersCollection = Backbone.Collection.extend({
                    model: OtherModel,
                    url: '/v3/radioweb/bansen/station/' + _stationId + '.xml',
                    parse: function(resp) {
                        return _.map($('item', resp), function(item) {
                            var $item = $(item);
                            return {
                                image_url: $item.find('image_url').text(),
                                program_name: $item.find('program_name').text(),
                                description: $item.find('description').text().replace(/(<([^>]+)>)/ig, ''),
                                onair: $item.find('onair').text(),
                                type: $item.find('type').text(),
                                url: $item.find('radioweb_detail_url').text()
                            };
                        }, this);
                    },
                    fetch: function(options) {
                        options = options || {};
                        options.dataType = 'xml';
                        return Backbone.Collection.prototype.fetch.call(this, options);
                    }
                });
                var OthersView = Backbone.View.extend({
                    initialize: function() {
                        this.listenTo(this.collection, 'sync', this.onSync);
                    },
                    onSync: function(models) {
                        this.render(models);
                    },
                    render: function(models) {
                        var data = models.toJSON();
                        $('#others-program').html(JST['common/others-program']({
                            models: data
                        }));
                        $('.img-list__text').each(function() {
                            var size = 35;
                            var txt = $(this).text();
                            var suffix = '…';
                            var b = 0;
                            for (var i = 0; i < txt.length; i++) {
                                b += txt.charCodeAt(i) <= 255 ? 0.5 : 1;
                                if (b > size) {
                                    txt = txt.substr(0, i) + suffix;
                                    break;
                                }
                            }
                            $(this).text(txt);
                        });
                        $('.img-list__item').heightLine();
                        return this;
                    }
                });
                var TopicModel = Backbone.Model.extend({
                    defaults: {
                        models: []
                    }
                });
                var TopicCollection = Backbone.Collection.extend({
                    model: TopicModel,
                    url: '/v3/feed/pc/topic/' + _stationId + '.xml',
                    parse: function(resp) {
                        return _.map($('item', resp), function(item) {
                            var $item = $(item);
                            return {
                                desc: $item.attr('desc'),
                                href: $item.attr('href'),
                                img: $item.attr('img'),
                                evid: $item.attr('evid'),
                                stamp: $item.attr('stamp')
                            };
                        }, this);
                    },
                    fetch: function(options) {
                        options = options || {};
                        options.dataType = 'xml';
                        options.cache = false;
                        return Backbone.Collection.prototype.fetch.call(this, options);
                    }
                });
                var TopicView = Backbone.View.extend({
                    events: {
                        'click a': 'onClick'
                    },
                    initialize: function() {
                        this.exclude_topic_id = [];
                        this.listenTo(this.collection, 'sync', this.onSync);
                        var self = this;
                        this.timer = setInterval(function() {
                            self.collection.fetch();
                        }, 60 * 1000);
                    },
                    onClose: function() {
                        clearInterval(this.timer);
                    },
                    preCmList: null,
                    onSync: function(models) {
                        var topicList = models.toJSON();
                        this.render(models);
                        this.sendViewBeacon(topicList);
                    },
                    onClick: function(e) {
                        $.Radiko.logger.ad_log('click.gif?ad_id=' + $(e.currentTarget).data('evid') + '&station_id=' + _stationId);
                    },
                    render: function(models) {
                        $('#topic-list').html(JST['ts-detail/topic-list']({
                            topics: models.toJSON()
                        }));
                        return this;
                    },
                    sendViewBeacon: function(topicList) {
                        var preList = this.preCmList,
                            _self = this;
                        _.each(_.filter(topicList, function(item) {
                            return undefined === _.find(preList, function(preItem) {
                                return item.stamp === preItem.stamp;
                            });
                        }), function(item) {
                            if (_.contains(_self.exclude_topic_id, item.evid)) {
                                return;
                            }
                            _self.exclude_topic_id.push(item.evid);
                            $.Radiko.logger.ad_log('view.gif?ad_id=' + item.evid + '&station_id=' + _stationId);
                        });
                    }
                });
                var CompanionBannerView = Backbone.View.extend({
                    initialize: function() {
                        this.listenTo(this.model, 'change:show', this.onShow);
                        this.timeoutId = undefined;
                    },
                    onShow: function(model) {
                        this.render(model);
                    },
                    render: function(model) {
                        var ft = this.collection.at(0).get('ft');
                        if ((player.isLive() && !player.chasing()) ||
                            (player.station_id() !== _stationId || !moment(player.fttm()[0]).isSame(moment(ft, 'YYYYMMDDHHmmss')))) {
                            return;
                        }
                        if (model.get('show')) {
                            $('#sync-ad').html(JST['common/companion-banner']({
                                item: model.toJSON()
                            }));
                            var beacon_1 = model.get('beacon');
                            var bannerTrackingLink = model.get('tracking_link');
                            beacon_1.sendTracking(bannerTrackingLink);
                            var playlistBeaconParam = beacon_1.pickBeaconParam(bannerTrackingLink);
                            var beaconUrl = beacon_1.buildBeaconUrl(playlistBeaconParam, player.area_id(), player.station_id(), $.Radiko.RAPF.Tracking.TYPE.CREATIVE_VIEW);
                            beacon_1.addLogImg(beaconUrl);
                            this.timeoutId = setTimeout(function() {
                                $('#sync-ad').html('');
                            }, model.get('duration') * 1000);
                            $('.js-click-banner').on('click', function(e) {
                                var $this = $(this);
                                var href = $this.attr('href');
                                var playlistBeaconParam = beacon_1.pickBeaconParam(href);
                                var beaconUrl = beacon_1.buildBeaconUrl(playlistBeaconParam, player.area_id(), player.station_id(), $.Radiko.RAPF.Tracking.TYPE.CLICK);
                                beacon_1.sendTracking(beaconUrl);
                            });
                            $('#sync-ad .close').on('click', this.onClose);
                        } else {
                            this.onClose();
                        }
                        return this;
                    },
                    onClose: function() {
                        $('#sync-ad').html('');
                        clearTimeout(this.timeoutId);
                    }
                });
            })($.Radiko || ($.Radiko = {}));
            $('#header').html(templateHeader(headerData));
            var detail = new $.Radiko.tsDetail();
            $.Radiko.EventEmitter.once('radikotsdetail', function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 10, 'linear');
                makeHeader();
                detail.initialize();
                playerEvent();
                sharePlayerEvent();
                $('input[type="text"]').placeholder();
                $('#heading-area-link').find('a').on('click', function() {
                    $('html, body').animate({
                        scrollTop: $('#program-table').offset().top - $('#header-nav').height() * 2
                    }, 500);
                    return false;
                });
                if (!_.isUndefined(player)) {
                    setVolumebarLength(player.volume());
                }
            });
            if (_.isString($.Radiko.area.id)) {
                $.Radiko.EventEmitter.trigger('radikotsdetail');
            }
            if (typeof window.area !== 'undefined') {
                $('span.area').text(window.area);
            }
        });
    })(window, jQuery, Backbone, _, moment);
};