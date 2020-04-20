'use strict';
var showLive = function(_stationId) {
    (function(window, $, Backbone, _, moment, undefined) {
        loadTemplate({
            '#contents': '/apps/templates/prg/index.html',
            '#footer': '/apps/templates/common/footer.html'
        }, function() {
            var intervals = [];
            (function(Radiko) {
                var getDate = function() {
                    var m = moment();
                    if (m.format('YYYYMMDDHHmmss') >= m.format('YYYYMMDD050000')) {
                        return m;
                    } else {
                        return moment(m.subtract('day', 1).format('YYYY-MM-DD'));
                    }
                };
                var isAdClose = false;
                Radiko.Live = (function() {
                    var Live = function() {
                        this.areaFreeCollection = null;
                        this.stationCollection = null;
                        this.nowProgramsCollection = null;
                        this.musicsCollection = null;
                        this.ticketCollection = null;
                        this.twitterTimelinesCollection = null;
                        this.StationWeeklyCollection = null;
                        this.othersCollection = null;
                        this.syncAdCollection = null;
                        this.adHistoryCollection = null;
                        this.stationTimelinesCollection = null;
                    };
                    _.extend(Live.prototype, Backbone.Events);
                    Live.prototype.initialize = function() {
                        this.createModels();
                        this.createViews();
                        this.fetchAll({
                            model: this.areafreeCollection
                        }, {
                            model: this.twitterTimelinesCollection
                        }, {
                            model: this.StationWeeklyCollection
                        }, {
                            model: this.othersCollection
                        }, {
                            model: this.syncAdCollection
                        }, {
                            model: this.adHistoryCollection
                        });
                        this.subscribeAll();
                    };
                    Live.prototype.createModels = function() {
                        this.areafreeCollection = new AreaFreeCollection();
                        this.stationCollection = new StationsCollection(this.areafreeCollection);
                        this.nowProgramsCollection = new NowProgramsCollection({
                            areafree: this.areafreeCollection,
                            station: this.stationCollection
                        });
                        this.musicsCollection = new radikoNOA.Collection(this.nowProgramsCollection, {
                            station_id: _stationId
                        });
                        this.ticketCollection = new RadikoTicket.Collection(this.musicsCollection, {
                            station_id: _stationId,
                            is_live: true,
                            programCollection: this.nowProgramsCollection
                        });
                        this.twitterTimelinesCollection = new TwitterTimelinesCollection();
                        this.stationTimelinesCollection = new StationTimelinesCollection(this.nowProgramsCollection);
                        this.StationWeeklyCollection = new StationWeeklyCollection();
                        this.othersCollection = new OthersCollection();
                        this.syncAdCollection = new SyncAdCollection();
                        this.adHistoryCollection = new AdHistoryCollection();
                    };
                    Live.prototype.createViews = function() {
                        $.Radiko.views.push(new StationsView({
                            collection: this.stationCollection
                        }));
                        $.Radiko.views.push(new NowProgramsListView({
                            el: document.getElementById('now-programs-list'),
                            collection: {
                                stations: this.stationCollection,
                                program: this.nowProgramsCollection,
                                areafree: this.areafreeCollection
                            }
                        }));
                        $.Radiko.views.push(new MusicsView({
                            el: document.getElementById('play-musics'),
                            collection: this.ticketCollection
                        }));
                        $.Radiko.views.push(new TwitterTimelinesView({
                            el: document.getElementById('timeline-twitter'),
                            collection: this.twitterTimelinesCollection
                        }));
                        $.Radiko.views.push(new StationTimelinesView({
                            el: document.getElementById('timeline-station'),
                            collection: this.stationTimelinesCollection
                        }));
                        $.Radiko.views.push(new WeeklyListView({
                            el: document.getElementById('program-table'),
                            collection: this.StationWeeklyCollection
                        }));
                        $.Radiko.views.push(new OthersView({
                            el: document.getElementById('others-program'),
                            collection: this.othersCollection
                        }));
                        $.Radiko.views.push(new AdHistoryView({
                            el: document.getElementById('ad-history'),
                            collection: this.adHistoryCollection
                        }));
                        $.Radiko.views.push(new CompanionBannerView({
                            model: Radiko.RAPF.BannerModel
                        }));
                    };
                    Live.prototype.fetchAll = function() {
                        return $.when.apply($, _.map(_.toArray(arguments), function(queue) {
                            return queue.model.fetch(queue.options || {});
                        }));
                    };
                    Live.prototype.subscribeAll = function() {
                        var _this = this;
                        var nowOnAir = setInterval(function() {
                            _this.musicsCollection.fetch();
                        }, 17 * 1000);
                        intervals.push(nowOnAir);
                        var timer = setInterval(function() {
                            var to = $('.live-detail__body').attr('to');
                            if (to < moment().format('YYYYMMDDHHmmss')) {
                                _this.nowProgramsCollection.fetch();
                            }
                        }, 5 * 1000);
                        intervals.push(timer);
                    };
                    return Live;
                })();
                var AreaFreeModel = Backbone.Model.extend({
                    "default": {}
                });
                var AreaFreeCollection = Backbone.Collection.extend({
                    model: AreaFreeModel,
                    url: '/v3/station/region/full.xml',
                    parse: function(data) {
                        return _.map($('station', data), function(station) {
                            var $station = $(station);
                            return {
                                id: $station.find('id').text(),
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
                var NowProgramModel = Backbone.Model.extend({
                    defaults: {
                        stationId: 'RGK',
                        stationName: 'RAGIKO',
                        progs: []
                    }
                });
                var NowProgramsCollection = Backbone.Collection.extend({
                    model: NowProgramModel,
                    host: 'http://' + location.host,
                    initialize: function(models) {
                        this.areafree = models.areafree;
                        this.listenTo(models.station, 'sync', this.onSync);
                    },
                    onSync: function(models) {
                        var data = this.areafree.where({
                            id: _stationId
                        })[0].toJSON();
                        var areaId = data.areaId;
                        this.logo = '';
                        this.url = '/v3/program/now/' + areaId + '.xml';
                        this.fetch();
                    },
                    parse: function(resp) {
                        var self = this;
                        var $station = $(resp).find('#' + _stationId);
                        return _.map($station, function(station) {
                            var $station = $(station);
                            var $prog = $station.find('prog');
                            $prog = $prog.filter(function(index, element) {
                                return $(element).attr('to') > moment().format('YYYYMMDDHHmmss');
                            });
                            $prog = $prog.length === 0 ? $station.find('prog').last() : $prog.first();
                            var $stationId = $station.attr('id');
                            var iCalURL = this.getIcalUrl($stationId, $prog);
                            var googleCalUrl = this.getGoogleCalUrl($stationId, $prog);
                            var shareText = this.getShareText($station.find('name'), $prog);
                            var shareUrl = this.host + '/share/?sid=' + $stationId + '&t=';
                            var twitterUrl = 'http://twitter.com/share?text=' +
                                encodeURIComponent(shareText) + '&hashtags=radiko&url=' + encodeURIComponent(shareUrl);
                            var facebookUrl = 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(shareUrl);
                            var clipUrl = shareText + ' ' + shareUrl;
                            var txt = this.omitString($prog.find('pfm').first().text(), 11);
                            window.stationTimelineKey = 'from:radiko_jp';
                            var twitter = null;
                            var metas = $prog.find('metas').first().find('meta');
                            for (var i = 0; i < metas.length; i++) {
                                var value = metas[i].getAttribute('value');
                                if (value.match(/^from:/)) {
                                    twitter = value;
                                    window.stationTimelineKey = twitter;
                                }
                            }
                            var img = $prog.find('img').text();
                            if (img === '') {
                                img = '/images/radio-api-noimage_live.png';
                            }
                            var ftmt = moment($prog.attr('ft'), 'YYYYMMDDHHmmss');
                            var tomt = moment($prog.attr('to'), 'YYYYMMDDHHmmss');
                            return {
                                stationId: $stationId,
                                stationName: $station.find('name').first().text(),
                                progTitle: $prog.find('title').first().text(),
                                progPfm: txt,
                                progPfm2: $prog.find('pfm').first().text(),
                                ft: $prog.attr('ft'),
                                to: $prog.attr('to'),
                                progFt: $prog.attr('ft'),
                                progTo: $prog.attr('to'),
                                progSchedule: self.progScheduleString(ftmt, tomt),
                                progImage: img,
                                progUrl: $prog.find('url').first().text(),
                                progDesc: $prog.find('desc').first().text(),
                                progInfo: $prog.find('info').first().text(),
                                date: $prog.find('date').text(),
                                iCalUrl: iCalURL,
                                googleCalUrl: googleCalUrl,
                                twitterUrl: twitterUrl,
                                clipUrl: clipUrl,
                                facebookUrl: facebookUrl,
                                twitter: twitter,
                                metaTitle: this.getMetaTitle($station.find('name'), $prog),
                                shareUrl: shareUrl + $prog.attr('ft'),
                                nowPlaying: this.getPlayingStatus($stationId, $prog.attr('ft')),
                                progs: _.map($station.find('prog'), function(prog) {
                                    var $prog = $(prog);
                                    var size = 8;
                                    var txt = $prog.find('pfm').first().text();
                                    var suffix = '…';
                                    var b = 0;
                                    for (var i = 0; i < txt.length; i++) {
                                        b += txt.charCodeAt(i) <= 255 ? 0.5 : 1;
                                        if (b > size) {
                                            txt = txt.substr(0, i) + suffix;
                                            break;
                                        }
                                    }
                                    var img = $prog.find('img').text();
                                    if (img == '') {
                                        img = '/images/radio-api-noimage_live.png';
                                    }
                                    var ftmt = moment($prog.attr('ft'), 'YYYYMMDDHHmmss');
                                    var tomt = moment($prog.attr('to'), 'YYYYMMDDHHmmss');
                                    return {
                                        progTitle: $prog.find('title').first().text(),
                                        progPfm: txt,
                                        progSchedule: self.progScheduleString(ftmt, tomt),
                                        progImage: img,
                                        progUrl: $prog.find('url').first().text(),
                                        progDesc: $prog.find('desc').first().text(),
                                        ft: $prog.attr('ft'),
                                        to: $prog.attr('to'),
                                        date: $prog.find('date').text()
                                    };
                                })
                            };
                        }, this);
                    },
                    fetch: function(options) {
                        options = options || {};
                        options.dataType = 'xml';
                        options.cache = false;
                        this.listenTo(this.area, 'sync', Backbone.Collection.prototype.fetch.call(this, options));
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
                    getIcalUrl: function(_stationId, program) {
                        return '/v2/api/ical' +
                            '?station_id=' + _stationId +
                            '&ft=' + program.attr('ft') +
                            '&to=' + program.attr('to') +
                            '&title=' + encodeURIComponent(program.find('title').first().text()) +
                            '&url=' + encodeURIComponent(this.host + '/#!/ts/' + _stationId + '/' + program.attr('ft'));
                    },
                    getGoogleCalUrl: function(_stationId, program) {
                        return 'http://www.google.com/calendar/event' +
                            '?action=TEMPLATE' +
                            '&text=' + encodeURIComponent(program.find('title').first().text()) +
                            '&dates=' + program.attr('ft').substring(0, 8) + 'T' + program.attr('ft').substring(8, 14) +
                            '/' + program.attr('to').substring(0, 8) + 'T' + program.attr('to').substring(8, 14) +
                            '&details=' + encodeURIComponent(this.host + '/#!/ts/' + _stationId + '/' + program.attr('ft')) +
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
                            ' | ' + stationName.first().text() +
                            sprintf(' | %04d/%02d/%02d/%s ', ftmt.year(), ftmt.month() + 1, ftmt.date(), ftmt.format('ddd')) +
                            sprintf(' %02d:%02d-%02d:%02d', radioHours.ft_hour, ftmt.minute(), radioHours.to_hour, tomt.minute());
                    },
                    getMetaTitle: function(_stationName, program) {
                        var m = moment(program.attr('ft'), 'YYYYMMDDHHmmss');
                        return program.attr('ft').substring(0, 4) +
                            '/' + program.attr('ft').substring(4, 6) +
                            '/' + program.attr('ft').substring(6, 8) +
                            '/' + m.format('ddd') +
                            ' ' + program.attr('ft').substring(8, 10) +
                            ':' + program.attr('ft').substring(10, 12) +
                            '-' + program.attr('to').substring(8, 10) +
                            ':' + program.attr('to').substring(10, 12) +
                            ' | ' + program.find('title').first().text() +
                            ' | ' + _stationName.first().text() +
                            ' | radiko';
                    },
                    omitString: function(string, size) {
                        var txt = string;
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
                    getPlayingStatus: function(stationId, ft) {
                        if (_.isUndefined(player) || !player.isPlaying() || !player.isLive()) {
                            return false;
                        }
                        return player.station_id() === stationId && !player.chasing();
                    }
                });
                var NowProgramsListView = Backbone.View.extend({
                    initialize: function() {
                        this.listenTo(this.collection.program, 'sync', this.onSync);
                        this.listenTo($.Radiko.Player.Model, 'change:isPlaying', this.onChangeIsPlaying);
                        this.listenTo($.Radiko.Player.Model, 'change:isLoaded', this.onChangeIsLoaded);
                        this.stationTimelinesView = null;
                    },
                    onSync: function(models) {
                        this.render(models);
                    },
                    onChangeIsPlaying: function(model, isPlaying) {
                        var url = $('#url').val(),
                            $tmpUrl = $('#tmpUrl');
                        if ($tmpUrl.length > 0 && url.indexOf($tmpUrl.val()) === -1) {
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
                    onChangeIsLoaded: function(model, isLoaded) {
                        $('.live-detail__play').find('.play-radio').css('opacity', '1.0');
                    },
                    render: function(programs) {
                        var data = programs.findWhere({
                            stationId: _stationId
                        });
                        var programList = data.toJSON();
                        this.renderNowPrgram(programList);
                        if (!_.isUndefined(this.programTicker)) {
                            clearInterval(this.programTicker);
                        }
                        this.setColorBox(programList, this.collection.areafree);
                        $('.btn--tooltip').on('click', function(e) {
                            e.preventDefault();
                            $(this).toggleClass('btn--disabled').next().toggleClass('tooltip--open');
                        });
                        var $playRadio = $('.live-detail__play');
                        if ($.Radiko.Player.Model.get('isLoaded')) {
                            $playRadio.find('.play-radio').css('opacity', '1.0');
                        }
                        $playRadio.on('click', '.btn--play', function() {
                            if (typeof player === 'undefined') {
                                return;
                            }
                            if ($.Radiko.Player.Model.get('isStartStreaming')) {
                                return;
                            }
                            if (!$.Radiko.login_status.areafree && !isDefaultArea) {
                                $.colorbox({
                                    width: '60%',
                                    inline: true,
                                    speed: 0,
                                    href: '#colorbox--premium',
                                    open: true,
                                    opacity: 0.5
                                });
                                return;
                            }
                            $.Radiko.Player.Model.set('isStartStreaming', true);
                            $.Radiko.Ticker.Model.set('stationId', data.get('stationId'));
                            RadikoADK.setClickingPlayButtonTimeTime(+moment());
                            var playerArea = $('#player-area');
                            playerArea.addClass('player-default');
                            playerArea.removeClass('player-timeshift');
                            var $url = $('#url');
                            var url = $url.val();
                            var tmpUrl = $('#tmpUrl').val();
                            if (url === '' || tmpUrl.match(/^#/) !== null) {
                                url = tmpUrl;
                                $url.val(url);
                            }
                            play(url);
                            $.Radiko.logger.fromShare = false;
                            updatePlayingProgramInfo({
                                ft: data.get('progFt'),
                                to: data.get('progTo'),
                                title: data.get('progTitle'),
                                pfm: data.get('progPfm'),
                                stationId: data.get('stationId'),
                                stationName: data.get('stationName')
                            });
                        });
                        $playRadio.on('click', '.btn--stop', function() {
                            if (!player.isPlaying()) {
                                return;
                            }
                            $.Radiko.Player.Model.set('isPlaying', false);
                            player.stop();
                        });
                        this.setMetaContent(programList);
                        this.renderTopic();
                    },
                    renderNowPrgram: function(programList) {
                        var $btnList = $('.btn-list');
                        $('#now-programs-list').html(JST['live-detail/now-programs-list'](programList));
                        if (programList.progPfm2.length > 10) {
                            $('.live-detail__cast-name').marquee().css('font-size', '15px');
                        }
                        $('.live-detail__description a').attr('target', '_blank');
                        if (!$.Radiko.login_status.areafree && !isDefaultArea) {
                            $('.live-detail__play').replaceWith(JST['live-detail/area-out']);
                            $btnList.remove();
                        }
                    },
                    setColorBox: function(programs, stations) {
                        var result = JST['live-detail/colorbox-share'](programs);
                        $('#share-box').html(result);
                        if (typeof Clipboard !== 'undefined' && Clipboard.isSupported()) {
                            if (window.clipboardObject) {
                                window.clipboardObject.destroy();
                            }
                            window.clipboardObject = new Clipboard('#clipboard', {
                                container: $('#clipboard')[0]
                            });
                            window.clipboardObject.on('success', function(e) {
                                var ts = $('.colorbox__seek .seek-bar').attr('data-ts');
                                var shareObject = {
                                    station_id: programs.stationId,
                                    program_start_time: programs.progFt,
                                    program_end_time: programs.progTo,
                                    shared_program_datetime: ts,
                                    share_type: RadikoPeopleDriven.ShareType.COPY
                                };
                                RadikoPeopleDriven.addSharedInfo(shareObject);
                                RadikoADK.sharedRepository.add(shareObject);
                                alert('コピーしました。');
                                $.Radiko.logger.share_log({
                                    type: 'do_share',
                                    sns: 'copy',
                                    t: ts,
                                    stationId: programs.stationId,
                                    timeType: 'live'
                                });
                            });
                        } else {
                            var client_1 = new ZeroClipboard($('#clipboard'));
                            client_1.on('ready', function() {
                                client_1.on('aftercopy', function() {
                                    alert('コピーしました。');
                                    var ts = $('.colorbox__seek .seek-bar').attr('data-ts');
                                    var shareObject = {
                                        station_id: programs.stationId,
                                        program_start_time: programs.progFt,
                                        program_end_time: programs.progTo,
                                        shared_program_datetime: ts,
                                        share_type: RadikoPeopleDriven.ShareType.COPY
                                    };
                                    RadikoPeopleDriven.addSharedInfo(shareObject);
                                    RadikoADK.sharedRepository.add(shareObject);
                                    $.Radiko.logger.share_log({
                                        type: 'do_share',
                                        sns: 'copy',
                                        t: ts,
                                        stationId: programs.stationId,
                                        timeType: 'live'
                                    });
                                });
                            });
                        }
                        var covertMoment = function(datetime) {
                            return moment(datetime, 'YYYYMMDDHHmmss');
                        };
                        var ftMoment = covertMoment(programs.progFt);
                        var toMoment = covertMoment(programs.progTo);
                        var playtime = toMoment.diff(ftMoment, 'seconds');
                        $('.end').text('-' + sec_to_disptime(playtime / 1000));
                        $('.btn--share').colorbox({
                            width: '640px',
                            inline: true,
                            speed: 0,
                            opacity: 0.5,
                            onOpen: function() {
                                var delay = stations.findWhere({
                                    id: _stationId
                                }).get('tf_max_delay');
                                var playableMoment = ftMoment.clone().add(delay, 'seconds').add($.Radiko.playingBuffer, 'seconds');
                                if (playableMoment.isSameOrAfter() && ftMoment.isSameOrBefore()) {
                                    $('.cnt-text').show();
                                    $('.btn-list').hide();
                                    setInterval(function() {
                                        var time = playableMoment.diff(moment(), 'seconds');
                                        if (time <= 0) {
                                            $('.cnt-text').hide();
                                            $('.btn-list').show();
                                            return;
                                        }
                                        $('#colorbox--share').find('.colorbox__text .sec').text(time);
                                    }, 1000);
                                } else {
                                    $('.btn-list').show();
                                    $('.cnt-text').hide();
                                    var totalPlayTime = playtime;
                                    var nowPlayTime = moment().diff(ftMoment, 'seconds') - 60;
                                    var rate = nowPlayTime / totalPlayTime;
                                    if (rate >= 1) {
                                        rate = 1;
                                        nowPlayTime = totalPlayTime;
                                    } else if (rate <= 0) {
                                        rate = 0;
                                        nowPlayTime = 0;
                                    }
                                    var seekBar = $('.colorbox__seek .seek-bar');
                                    var seekBarWidth = seekBar.width();
                                    var nowPointerPos = seekBarWidth * rate;
                                    if (nowPointerPos >= seekBarWidth) {
                                        nowPointerPos = seekBarWidth;
                                    } else if (nowPointerPos <= 0) {
                                        nowPointerPos = 0;
                                    } else {}
                                    seekBar.find('.knob').css('left', nowPointerPos - 3);
                                    seekBar.find('.active').css('width', nowPointerPos - 3);
                                    var remainingPlayTime = totalPlayTime - nowPlayTime;
                                    $.Radiko.Share.setSeekPlayTime(nowPlayTime, remainingPlayTime);
                                    var tsUrlParam = {
                                        station_id: programs.stationId,
                                        ft: new XDate(ftMoment.valueOf(), false),
                                        to: new XDate(toMoment.valueOf(), false),
                                        seek: new XDate(ftMoment.clone().add(nowPlayTime, 'seconds').valueOf(), false)
                                    };
                                    var tsUrl = create_ts_url(tsUrlParam);
                                    var shareFB = $('.btn__facebook');
                                    var shareTW = $('.btn__twitter');
                                    var clipBoard = $('#clipboard');
                                    var fShareUrl = shareFB.data('url');
                                    var tShareUrl = shareTW.data('urlbase');
                                    var cShareUrl = clipBoard.data('urlbase');
                                    var now = xdate_to_tm(tsUrlParam.seek);
                                    shareFB.attr('href', fShareUrl + now);
                                    shareTW.attr('href', tShareUrl + now);
                                    clipBoard.attr('data-clipboard-text', cShareUrl + now);
                                    seekBar.attr('data-ts', now);
                                    $('#share-url').val(tsUrl);
                                }
                            },
                            onClosed: function() {
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
                                program_start_time: programs.progFt,
                                program_end_time: programs.progTo,
                                shared_program_datetime: ts,
                                share_type: RadikoPeopleDriven.ShareType.FACEBOOK
                            };
                            RadikoPeopleDriven.addSharedInfo(shareObject);
                            RadikoADK.sharedRepository.add(shareObject);
                            $.Radiko.logger.share_log({
                                type: 'do_share',
                                sns: 'facebook',
                                t: ts,
                                stationId: programs.stationId,
                                timeType: 'live'
                            });
                            return false;
                        });
                        $('.btn__twitter').on('click', function() {
                            window.open(this.href, 'FBwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
                            var ts = $('.colorbox__seek .seek-bar').attr('data-ts');
                            var shareObject = {
                                station_id: programs.stationId,
                                program_start_time: programs.progFt,
                                program_end_time: programs.progTo,
                                shared_program_datetime: ts,
                                share_type: RadikoPeopleDriven.ShareType.TWITTER
                            };
                            RadikoPeopleDriven.addSharedInfo(shareObject);
                            RadikoADK.sharedRepository.add(shareObject);
                            RadikoADK.sharedRepository.add(shareObject);
                            $.Radiko.logger.share_log({
                                type: 'do_share',
                                sns: 'twitter',
                                t: ts,
                                stationId: programs.stationId,
                                timeType: 'live'
                            });
                            return false;
                        });
                    },
                    onClose: function() {
                        clearInterval(this.programTicker);
                        _.each(intervals, function(timer) {
                            clearInterval(timer);
                        });
                        if (this.stationTimelinesView) {
                            this.stationTimelinesView.onClose();
                            this.stationTimelinesView.remove();
                        }
                    },
                    setMetaContent: function(data) {
                        var setting = {};
                        var desc = '';
                        desc += data.progDesc == '' ? '' : data.progDesc.replace(/(<([^>]+)>)/ig, '');
                        desc += data.progInfo == '' ? '' : data.progInfo.replace(/(<([^>]+)>)/ig, '');
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
                    renderTopic: function() {
                        var topicCollection = new TopicCollection();
                        $.Radiko.views.push(new TopicView({
                            el: document.getElementById('topic-list'),
                            collection: topicCollection
                        }));
                        topicCollection.fetch();
                    }
                });
                var MusicsView = Backbone.View.extend({
                    prevMusicItemId: null,
                    initialize: function() {
                        this.listenTo(this.collection, 'sync', this.onSync);
                        this.listenTo(this.collection, 'error', this.onError);
                    },
                    onSync: function(ticketCollection) {
                        this.render(ticketCollection);
                    },
                    onError: function(ticketCollection) {
                        var collection = ticketCollection.collection;
                        this.render(collection);
                    },
                    remove: function() {},
                    render: function(ticketCollection) {
                        var newItemId = ticketCollection.at(0).get('itemId');
                        if (this.prevMusicItemId === newItemId) {
                            return false;
                        }
                        this.prevMusicItemId = newItemId;
                        var data = ticketCollection.toJSON();
                        var first = data[0],
                            other = data.slice(1);
                        $('#play-musics').html(JST['detail-common/play-musics']({
                            models: other,
                            stream_type: 'LV'
                        }));
                        $('#noa').html(JST['detail-common/noa-item']({
                            model: first,
                            stream_type: 'LV'
                        }));
                        $('.ticket-list__link a').on('click', function() {
                            var $ticketColorBox = $('#colorbox--ticket');
                            $ticketColorBox.html(new RadikoTicket.DialogView({
                                noa_item: data[0],
                                stream_type: 'LV'
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
                        $('.tune-list__ticket button').on('click', function(e) {
                            var id = $(e.target).data('id');
                            var $ticketColorBox = $('#colorbox--ticket');
                            $ticketColorBox.html(new RadikoTicket.DialogView({
                                noa_item: other[id],
                                stream_type: 'LV'
                            }).el);
                            $.colorbox({
                                scrolling: false,
                                inline: true,
                                href: $ticketColorBox,
                                speed: 0,
                                opacity: 0.5
                            });
                        });
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
                var TwitterTimelineModel = Backbone.Model.extend({
                    defaults: {}
                });
                var TwitterTimelinesCollection = Backbone.Collection.extend({
                    model: TwitterTimelineModel,
                    url: '/v3/feed/pc/sns/' + _stationId + '.xml',
                    parse: function(resp) {
                        return _.map($('item', resp), function(item) {
                            var $item = $(item);
                            return {
                                id: $item.find('extra').attr('twitter_tweet_id'),
                                img: $item.attr('img'),
                                text: $item.attr('text'),
                                name: $item.attr('name'),
                                stamp: (this.dateToFormatedString($item.attr('stamp'), 'YYYY年M月D日 HH:mm')),
                                screen_name: $item.attr('screen_name'),
                                tweets: $item.find('extra').attr('twitter_text_formatted')
                            };
                        }, this);
                    },
                    fetch: function(options) {
                        options = options || {};
                        options.dataType = 'xml';
                        options.cache = false;
                        return Backbone.Collection.prototype.fetch.call(this, options);
                    },
                    dateToFormatedString: function(dateString, outputFormat) {
                        return moment(dateString, ['YYYY-MM-DD HH:mm:ss', 'YYYYMMDDHHmmss']).format(outputFormat);
                    }
                });
                var TwitterTimelinesView = Backbone.View.extend({
                    initialize: function() {
                        this.listenTo(this.collection, 'sync', this.onSync);
                        var self = this;
                        this.timer = setInterval(function() {
                            self.collection.fetch();
                        }, 60000);
                    },
                    onSync: function(models) {
                        this.render(models);
                    },
                    render: function(models) {
                        var data = models.toJSON();
                        $('.stream-item-text a').attr('target', '_blank');
                        $('#timeline-twitter').html(JST['live-detail/timeline-twitter']({
                            models: data
                        }));
                        return this;
                    },
                    onClose: function() {
                        clearInterval(this.timer);
                    }
                });
                var StationTimelineModel = Backbone.Model.extend({
                    defaults: {}
                });
                var StationTimelinesCollection = Backbone.Collection.extend({
                    model: StationTimelineModel,
                    initialize: function(models) {
                        this.listenTo(models, 'sync', this.onSync);
                    },
                    onSync: function() {
                        this.url = '/v2/twitter/search/' + window.stationTimelineKey + '.json';
                        this.fetch();
                    },
                    parse: function(resp) {
                        return _.map(resp.statuses, function(status) {
                            status.created_at = moment(status.created_at, 'ddd MMM DD HH:mm:ss ZZ YYYY').format('YYYY年M月D日 HH:mm');
                            var urlEntities = status.entities.urls;
                            if (status.entities.media) {
                                urlEntities = _.flatten([urlEntities, status.entities.media]);
                            }
                            status.text = twttr.txt.autoLink(status.text, {
                                urlEntities: urlEntities
                            });
                            return status;
                        });
                    },
                    fetch: function(options) {
                        options = options || {};
                        options.dataType = 'json';
                        return Backbone.Collection.prototype.fetch.call(this, options);
                    }
                });
                var StationTimelinesView = Backbone.View.extend({
                    initialize: function() {
                        this.listenTo(this.collection, 'sync', this.onSync);
                        var self = this;
                        this.timer = setInterval(function() {
                            self.collection.fetch();
                        }, 60000);
                    },
                    onSync: function(models) {
                        this.render(models);
                    },
                    render: function(models) {
                        var data = models.toJSON();
                        $('#timeline-station').html(JST['live-detail/timeline-station']({
                            models: data
                        }));
                        $('.stream-item-text a').attr('target', '_blank');
                        return this;
                    },
                    onClose: function() {
                        clearInterval(this.timer);
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
                                    var programUrl = '/#!/ts/' + stationId + '/' + ft;
                                    var listenType = 0;
                                    if (to <= now.format('YYYYMMDDHHmmss')) {
                                        addClass += 'item--past ';
                                        listenType = _this.getListenType(stationId, ft, to);
                                    } else if (ft >= now.format('YYYYMMDDHHmmss')) {
                                        addClass += 'item--future ';
                                    } else {
                                        programUrl = '/#!/live/' + stationId;
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
                            var date = getDate().subtract(i + 1, 'days');
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
                            var date = getDate().add(i, 'days');
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
                        if ($('.js-prev').hasClass('btn-disable')) {
                            return;
                        }
                        var $scrolls = $('.js-scroll');
                        var left = parseInt($scrolls.css('left').replace('px', ''));
                        $scrolls.stop(true, true);
                        $('.js-prev').addClass('btn-disable');
                        $scrolls.animate({
                            left: left + 135
                        }).promise().done(function() {
                            $scrolls.each(function(index, elScroll) {
                                $scrolls.css('left', left + 135);
                            });
                            $('.js-prev').removeClass('btn-disable');
                            var left = parseInt($scrolls.css('left').replace('px', ''));
                            if (left >= 0) {
                                $scrolls.css('left', 0);
                                $('.js-next').show();
                                $('.js-prev').hide();
                            } else {
                                $('.js-next').show();
                            }
                        });
                    },
                    nextClickHandler: function(ev) {
                        ev.preventDefault();
                        if ($('.js-next').hasClass('btn-disable')) {
                            return;
                        }
                        var $scrolls = $('.js-scroll');
                        var left = parseInt($scrolls.css('left').replace('px', ''));
                        $('.js-next').addClass('btn-disable');
                        $scrolls.stop(true, true);
                        $scrolls.each(function(index, elScroll) {
                            $scrolls.css('left', left);
                        }).animate({
                            left: left - 135
                        }, function() {
                            $('.js-next').removeClass('btn-disable');
                            var left = parseInt($scrolls.css('left').replace('px', ''));
                            if (left <= -945) {
                                $scrolls.css('left', -945);
                                $('.js-prev').show();
                                $('.js-next').hide();
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
                        var result = JST['common/others-program']({
                            models: data
                        });
                        $('#others-program').html(result);
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
                var SyncAdModel = Backbone.Model.extend({
                    defaults: {
                        models: []
                    }
                });
                var SyncAdCollection = Backbone.Collection.extend({
                    model: SyncAdModel,
                    url: '/v3/feed/pc/extra/' + _stationId + '.xml',
                    parse: function(resp) {
                        return _.map($('item', resp), function(item) {
                            var $item = $(item);
                            return {
                                content_url: $item.attr('content_url'),
                                event: $item.attr('event'),
                                evid: $item.attr('evid'),
                                href: $item.attr('href'),
                                img: $item.attr('img'),
                                itemid: $item.attr('itemid'),
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
                var CompanionBannerView = Backbone.View.extend({
                    initialize: function() {
                        this.listenTo(this.model, 'change:show', this.onShow);
                        this.timeoutId = undefined;
                    },
                    onShow: function(model) {
                        this.render(model);
                    },
                    render: function(model) {
                        if (!player.isLive() || player.chasing() || player.station_id() !== _stationId) {
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
                var AdHistoryModel = Backbone.Model.extend({
                    defaults: {
                        models: []
                    }
                });
                var AdHistoryCollection = Backbone.Collection.extend({
                    model: AdHistoryModel,
                    url: '/v3/feed/pc/cm/' + _stationId + '.xml',
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
                var AdHistoryView = Backbone.View.extend({
                    events: {
                        'click a': 'onClick'
                    },
                    initialize: function() {
                        this.listenTo(this.collection, 'sync', this.onSync);
                        var self = this;
                        this.timer = setInterval(function() {
                            self.collection.fetch();
                        }, 11000);
                    },
                    onClose: function() {
                        clearInterval(this.timer);
                    },
                    preCmList: null,
                    onSync: function(models) {
                        var cmList = models.toJSON();
                        if (!this.preCmList || this.isSame(cmList)) {
                            this.render(models);
                            this.sendViewBeacon(cmList);
                        }
                        this.preCmList = cmList;
                    },
                    onClick: function(e) {
                        $.Radiko.logger.ad_log('click.gif?ad_id=' + $(e.currentTarget).data('evid') + '&station_id=' + _stationId);
                    },
                    isSame: function(cmList) {
                        if (!this.preCmList) {
                            return false;
                        }
                        return -1 == _.findIndex(this.preCmList, {
                            stamp: cmList[0].stamp
                        });
                    },
                    render: function(models) {
                        $('#ad-history').html(JST['live-detail/ad-history']({
                            models: models.toJSON()
                        }));
                        if (!_.contains($.Radiko.user_station_list, _stationId)) {
                            $('.live-detail__attention').show();
                        } else {}
                        return this;
                    },
                    sendViewBeacon: function(cmList) {
                        var preList = this.preCmList;
                        _.each(_.filter(cmList, function(item) {
                            return undefined === _.find(preList, function(preItem) {
                                return item.stamp === preItem.stamp;
                            });
                        }), function(item) {
                            $.Radiko.logger.ad_log('view.gif?ad_id=' + item.evid + '&station_id=' + _stationId);
                        });
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
                        $('#topic-list').html(JST['live-detail/topic-list']({
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
            })($.Radiko || ($.Radiko = {}));
            $('#header').html(JST['common/header']({
                logo: '/apps/images/img_logo_blue_01.png'
            }));
            var live = new $.Radiko.Live();
            $.Radiko.EventEmitter.once('radikoshowlive', function() {
                makeHeader();
                live.initialize();
                playerEvent();
                sharePlayerEvent();
                $('input[type="text"]').placeholder();
                $('#tmpUrl').val('#' + _stationId);
                $('#heading-area-link').find('a').on('click', function() {
                    $('html, body').animate({
                        scrollTop: $('#program-table').offset().top - $('#header-nav').height() * 2
                    }, 500);
                    return false;
                });
            });
            if (_.isString($.Radiko.area.id)) {
                $.Radiko.EventEmitter.trigger('radikoshowlive');
            }
            if (window.area != undefined) {
                $('span.area').text(window.area);
            }
        });
    })(window, jQuery, Backbone, _, moment);
};