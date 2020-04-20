"use strict";
$(function() {
    var seekBarView = Backbone.View.extend({
        initialize: function(model) {
            this.listenTo(model, 'change:currentTime', this.onChangeCurrentTime);
            this.on('show:seek-area', this.onShow);
            this.on('hide:seek-area', this.onHide);
            this.on('end', this.onEnd);
            this.render();
        },
        render: function() {
            var $playerAreaSeek = $('.player-area__seek');
            $playerAreaSeek.html(JST['ts-detail/seek-bar']());
            $('.seek-bar .knob').css('left', 0);
            $('.seek-bar .active').css('width', 0);
            $('.seek-bar .start').text(sec_to_disptime(0));
            var seekBar = $('#seekbar');
            seekBar.find('.knob').draggable({
                axis: 'x',
                containment: 'parent',
                start: this.onDragStart,
                drag: this.onDragSeek.bind(this),
                stop: this.onDragSeekKnob
            });
        },
        updateBalloon: function(ftTime, addTime) {
            var seekmt = moment(ftTime + addTime);
            var hour = seekmt.hour();
            if (hour < 5) {
                hour += 24;
            }
            $('.balloon span').text(sprintf('%02d:%02d:%02d', hour, seekmt.minute(), seekmt.second()));
        },
        onShow: function() {
            $('.player-area__seek').show();
        },
        onHide: function() {
            $('.player-area__seek').hide();
        },
        onEnd: function() {
            setSeekbarLength(1);
            var sec = (player.totm() - player.fttm()) / 1000;
            $.Radiko.Player.setSeekPlayTime(sec, 0);
            setSeekTime(1);
            $.Radiko.Share.updateTime(sec, 0, 1);
        },
        onChangeCurrentTime: function(model, currentTime) {
            var rate, position, length, duration;
            if (player.chasing()) {
                duration = Math.floor((player.totm() - player.fttm()) / 1000);
                position = currentTime;
                length = duration - position;
                rate = position / duration;
                if (rate > 1) {
                    rate = 1;
                }
            } else {
                duration = player.duration();
                rate = currentTime / duration;
                position = currentTime;
                length = duration - currentTime;
            }
            setSeekbarLength(rate);
            $.Radiko.Player.setSeekPlayTime(position, length);
            setSeekTime(rate);
            $.Radiko.Share.updateTime(position, length, rate);
        },
        onDragStart: function() {
            var isCMDuration = typeof _.find($.Radiko.RAPF.CMDurationList, function(cm) {
                return cm.start <= $.Radiko.RAPF.currentTime && $.Radiko.RAPF.currentTime < cm.end;
            }) !== 'undefined';
            if (isCMDuration) {
                return false;
            }
            $('.balloon').show();
        },
        onDragSeek: function() {
            moveSeek = true;
            var seekBar = $('#seekbar');
            var x = seekBar.find('.knob').position().left;
            var rate = x / seekBar.width();
            var playTime = player.totm() - player.fttm();
            var time = playTime * rate;
            time = time > playTime ? playTime : time;
            var seekTime = new XDate(player.fttm() + time, false);
            var now = moment();
            if (moment(player.fttm() + time).isAfter(now)) {
                seekTime = new XDate(parseInt(now.clone().subtract('minutes', 1).format('x')), false);
            }
            var url = create_ts_url({
                ft: player.fttm(),
                to: player.totm(),
                seek: seekTime
            });
            $('#url').val(url);
            seekBar.find('.active').css('width', x);
            this.updateBalloon(player.fttm(), time);
            var timelest = playTime - time;
            $.Radiko.Player.setSeekPlayTime(time / 1000, timelest / 1000);
            if (moment(player.fttm() + time).isAfter(now)) {
                var moveTime = now.subtract('minutes', 1).format('x') - player.fttm().getTime();
                var timeRate = moveTime / playTime;
                var movablePos = seekBar.width() * timeRate;
                seekBar.find('.active').css('width', movablePos);
                seekBar.find('.knob').css('left', movablePos);
                return false;
            }
        },
        onDragSeekKnob: function() {
            $('.balloon').hide();
            var seekBar = $('#seekbar');
            var x = seekBar.find('.knob').position().left;
            var rate = x / seekBar.width();
            if (rate > 1) {
                rate = 1;
            }
            var playTime = player.totm() - player.fttm();
            var time = playTime * rate;
            time = time > playTime ? playTime : time;
            var cm = _.find($.Radiko.RAPF.CMDurationList, function(cm) {
                return cm.start <= time / 1000 && time / 1000 < cm.end;
            });
            if (cm) {
                time = cm.end * 1000;
            }
            var movablePos = seekBar.width() * rate;
            seekBar.find('.active').css('width', movablePos);
            seekBar.find('.knob').css('left', movablePos);
            var $shareSeekBar = $('.colorbox__seek .seek-bar');
            var seekPosi = $shareSeekBar.width() * rate;
            var knobPos, activeWidth;
            knobPos = activeWidth = seekPosi - 3;
            var url = create_ts_url({
                ft: player.fttm(),
                to: player.totm(),
                seek: new XDate(player.fttm() + time, false)
            });
            if (playTime <= time) {
                player.stop();
                $.Radiko.Player.Model.set('isPlaying', false);
                url = create_ts_url({
                    ft: player.fttm(),
                    to: player.totm()
                });
                moveSeek = false;
            }
            $('#url').val(url);
            if (player.isPlaying()) {
                player.stop();
                play(url);
            }
            var timelest = playTime - time;
            $.Radiko.Player.setSeekPlayTime(time / 1000, timelest / 1000);
            if ($.Radiko.Share.isCurrentPlayProgram()) {
                $.Radiko.Share.updateSeekBar(knobPos, activeWidth);
                $.Radiko.Share.setSharePlayUrl(url);
                $.Radiko.Share.setSeekPlayTime(time / 1000, timelest / 1000);
                $.Radiko.Share.setSeekTime(getDateTime(new XDate(player.fttm() + time, false).getTime()));
                $.Radiko.Share.setSnsUrl();
            }
            moveSeek = false;
        }
    });
    var tickerModel = Backbone.Model.extend({
        defaults: {
            areaId: 'JP13',
            stationId: 'TBS',
            stationName: undefined,
            programs: []
        },
        parse: function(response) {
            var $station = $('#' + this.get('stationId'), response);
            return {
                stationId: $station.attr('id'),
                stationName: $station.find('name').first().text(),
                programs: $station.find('prog')
                    .filter(function(index, program) {
                        return moment($(program).attr('to'), 'YYYYMMDDHmmss').isAfter();
                    })
                    .map(function(index, program) {
                        var $program = $(program);
                        var size = 8;
                        var txt = $program.find('pfm').first().text();
                        var suffix = '…';
                        var b = 0;
                        for (var i = 0; i < txt.length; i++) {
                            b += txt.charCodeAt(i) <= 255 ? 0.5 : 1;
                            if (b > size) {
                                txt = txt.substr(0, i) + suffix;
                                break;
                            }
                        }
                        var img = $program.find('img').text();
                        if (img === '') {
                            img = '/images/radio-api-noimage_live.png';
                        }
                        return {
                            progTitle: $program.find('title').first().text(),
                            progPfm: txt,
                            progImage: img,
                            ft: $program.attr('ft'),
                            to: $program.attr('to')
                        };
                    })
            };
        },
        fetch: function(options, date) {
            options = options || {};
            options.dataType = 'xml';
            options.cache = false;
            if (date) {
                this.url = '/v3/program/station/date/' + date + '/' + this.get('stationId') + '.xml';
            } else {
                this.url = '/v3/program/station/date/' + this.getRadioToday() + '/' + this.get('stationId') + '.xml';
            }
            return Backbone.Model.prototype.fetch.call(this, options);
        },
        getRadioToday: function() {
            var now = moment();
            if (now.isBefore(now.clone().set({
                    hours: 5,
                    minutes: 0,
                    seconds: 0
                }))) {
                now.subtract(1, 'days');
            }
            return now.format('YYYYMMDD');
        }
    });
    var tickerView = Backbone.View.extend({
        render: function(isLive, model) {
            if (!_.isUndefined(this.programTickerTimer)) {
                clearInterval(this.programTickerTimer);
            }
            if (isLive) {
                this.listenToOnce(model, 'sync', this.renderLiveTicker);
                model.fetch();
            } else {
                this.renderTSTicker(model);
            }
        },
        renderLiveTicker: function(model) {
            var playerDetail = $('#player-detail');
            playerDetail.html(JST['live-detail/player-detail']());
            var template = JST['live-detail/ticker'];
            var $programTicker = $('.program-ticker');
            $programTicker.html(template({
                stationId: model.get('stationId'),
                progs: model.get('programs')
            }));
            playerDetail.find('.marquee').marquee();
            $('.player-area__detail .tooltip').show();
            this.programTicker = $programTicker.slick({
                arrows: false,
                accessibility: false,
                draggable: false,
                infinite: false,
                autoplay: false
            });
            this.programTickerTimer = setInterval(function() {
                var slick = this.programTicker.slick('getSlick');
                if (slick.currentSlide === (slick.slideCount - 1)) {
                    this.listenToOnce(model, 'sync', this.appendTicker);
                    model.fetch(undefined, moment().format('YYYYMMDD'));
                }
                if (moment($('.slick-current').attr('data-to'), 'YYYYMMDDHHmmss').isSameOrBefore()) {
                    this.programTicker.slick('slickNext');
                }
            }.bind(this), 5 * 1000);
            this.programTicker.on('afterChange', function() {
                var $slickCurrent = $('.slick-current'),
                    stationId = model.get('stationId'),
                    stationName = model.get('stationName'),
                    ft = $slickCurrent.attr('data-ft'),
                    to = $slickCurrent.attr('data-to'),
                    programTitle = $slickCurrent.attr('data-title');
                updatePlayingProgramInfo({
                    ft: ft,
                    to: to,
                    title: programTitle,
                    pfm: $slickCurrent.attr('data-pfm'),
                    stationId: stationId,
                    stationName: stationName
                });
            });
        },
        renderTSTicker: function(model) {
            var playerDetail = $('#player-detail');
            playerDetail.html(JST['ts-detail/player-detail']());
            var template = JST['ts-detail/ticker'];
            var $programTicker = $('.program-ticker');
            $programTicker.html(template({
                stationId: model.get('stationId'),
                progs: model.get('programs')
            }));
            playerDetail.find('.marquee').marquee();
            $('.player-area__detail .tooltip').show();
            $programTicker.off('click', 'a');
            $programTicker.on('click', 'a', function() {
                var currentProgram = model.get('programs')[0];
                if (location.hash === '#!/ts/' + currentProgram.stationId + '/' + currentProgram.ft) {
                    $.Radiko.EventEmitter.trigger('removeview');
                    $('body').attr('class', 'page-timeshift');
                    tsDetail(currentProgram.stationId, currentProgram.ft);
                    return false;
                }
                return true;
            });
        },
        appendTicker: function(model) {
            var template = JST['live-detail/ticker']({
                stationId: model.get('stationId'),
                progs: model.get('programs')
            });
            this.programTicker.slick('slickAdd', template);
        }
    });
    var PlayerModel = Backbone.Model.extend({
        defaults: {
            isLoaded: false,
            isPlaying: false,
            ticker: {
                stationId: '',
                programs: []
            },
            currentTime: 0,
            isStartStreaming: false
        }
    });
    var PlayerView = Backbone.View.extend({
        initialize: function(model) {
            this.listenTo(model, 'change:isPlaying', this.onChangeIsPlaying);
            this.$playerArea = $('.player-area');
            this.seekBarView = new seekBarView(model);
            this.tickerView = new tickerView();
            $('#play').on('click', this.onPlay);
            $('#pause').on('click', this.onPause);
            $('#stop').on('click', this.onStop);
            this.on('complete', this.onComplete);
        },
        render: function() {
            this.renderTicker();
            if (!player.isLive() || player.chasing()) {
                this.seekBarView.trigger('show:seek-area');
            } else {
                this.seekBarView.trigger('hide:seek-area');
            }
        },
        renderTicker: function() {
            this.tickerView.render(player.isLive() && !player.chasing(), $.Radiko.Ticker.Model);
        },
        onChangeIsPlaying: function(model, isPlaying) {
            var $playIcon = $('#play').find('i');
            if (isPlaying) {
                if (this.$playerArea.is(':hidden')) {
                    this.$playerArea.slideDown(500);
                }
                if (!$playIcon.hasClass('on')) {
                    $playIcon.addClass('on');
                }
                clearInterval(window.changeStopInterval);
                window.changeStopInterval = setInterval(function() {
                    if ($('.player-area__detail .tooltip').is(':hidden') && player.isPlaying()) {
                        $('.play-radio').css('opacity', '1.0');
                        clearInterval(window.changeStopInterval);
                    }
                }, 100);
                this.render();
            } else {
                if ($playIcon.hasClass('on')) {
                    $playIcon.removeClass('on');
                }
                $('.player-area__detail .tooltip').hide();
            }
        },
        onPlay: function() {
            if (typeof player === 'undefined' || player.isPlaying()) {
                return;
            }
            if ($.Radiko.Player.Model.get('isStartStreaming')) {
                return;
            }
            $.Radiko.Player.Model.set('isStartStreaming', true);
            if (!$.Radiko.login_status.areafree && !isDefaultArea) {
                $.colorbox({
                    width: '60%',
                    inline: true,
                    href: '#colorbox--premium',
                    speed: 0,
                    open: true,
                    opacity: 0.5
                });
                return;
            }
            var url = $('#url').val();
            if (url === '') {
                alert('放送局名、もしくは番組表から選局してください');
                return;
            }
            play(url);
        },
        onPause: function() {
            if (!player.isPlaying()) {
                return;
            }
            $.Radiko.Player.Model.set('isPlaying', false);
            if (player.isPlaying()) {
                if (player.isLive()) {
                    player.stop();
                } else {
                    player.pause(true);
                }
            } else {
                if (player.isLive()) {
                    var url = create_ts_url({
                        ft: player.fttm(),
                        to: player.totm(),
                        seek: player.playing_date()
                    });
                    $('#url').val(url);
                    play(url);
                } else {
                    player.pause(false);
                }
            }
        },
        onStop: function() {
            $.Radiko.Player.Model.set('isPlaying', false);
            if (!_.isUndefined(window.jumpAnimation)) {
                clearInterval(window.jumpAnimation);
            }
            player.stop();
        },
        onComplete: function() {
            this.seekBarView.trigger('end');
        }
    });
    $.Radiko.Player = {
        isShareOpen: false,
        beforeCurrentPosition: 0,
        currentJobId: undefined,
        setSeekPlayTime: function(startSec, endSec) {
            $('#seek_val').text(sec_to_disptime(startSec));
            var endDispSec = sec_to_disptime(endSec);
            if (endSec !== 0) {
                endDispSec = '-' + endDispSec;
            }
            $('#all_val').text(endDispSec);
        },
        setVolume: function() {
            var $volume = $('#volume');
            var x = $volume.find('.knob').position().left;
            var w = $volume.width();
            x = x == 0 ? 0 : x;
            if (w < x) {
                x = w;
            }
            changeVolume({
                width: x
            });
        },
        tetInit: function() {
            tetTimer2 = setInterval(tetTimerCallback2, 2000);
            tetDate = new Date();
            tetDate = tetDate.getTime();
            tetDate2 = tetDate;
            tetDate += Math.floor(Math.random() * 60) * 1000;
        },
        updateLimitation: function(storeKey, sec) {
            var limitData = store.get(storeKey);
            if (limitData) {
                limitData.listened_time += sec;
                store.set(storeKey, limitData);
            }
        }
    };
    $.Radiko.Ticker = {
        Model: new tickerModel()
    };
    $.Radiko.Player.Model = new PlayerModel();
    $.Radiko.Player.View = new PlayerView($.Radiko.Player.Model);
});
var player;
var jobs = {};
var moveSeek = false;
var tetFirstAfterPlay = true;
var getStationId = function() {
    return $.cookie('station_id');
};
var getTsStatus = function() {
    return window.ts_status;
};
var rect = function() {
    $('.player-area__detail .tooltip').animate({
        top: '-84px'
    }, 200).animate({
        top: '-64px'
    }, 200).animate({
        top: '-84px'
    }, 200).animate({
        top: '-64px'
    }, 200);
};
var swf = function() {
    return $('#flash')[0];
};
var play = function(url) {
    if (player.isPlaying()) {
        player.stop();
    }
    var query = /^http/.test(url) ? $.Radiko.parseQueryString(url) : {};
    if (query.station_id) {
        player.station_id(query.station_id);
    } else if (url.match(/^#(.+)/)) {
        player.station_id(RegExp.$1);
    }
    if (query.ft) {
        var ft = tm_to_xdate(query.ft);
        player.fttm(ft);
    }
    if (query.to) {
        var to = tm_to_xdate(query.to);
        player.totm(to);
    }
    if (query.seek) {
        var seek = tm_to_xdate(query.seek);
        player.seektm(seek);
    } else {
        player.seektm(player.fttm());
    }
    player.program_date(0);
    if (getTsStatus() == 2) {
        return;
    }
    if (!_.isUndefined(window.jumpAnimation)) {
        clearInterval(window.jumpAnimation);
    }
    window.jumpAnimation = setInterval('rect()', 5000);
    changeVolume({
        rate: player.volume()
    });
    player.chasing(false);
    $.Radiko.Player.beforeCurrentPosition = 0;
    $.Radiko.Player.Model.set('isPlaying', false);
    $.Radiko.RAPF.CMDurationList = {};
    var computeCurrentTime = function() {
        var duration;
        if (!player.isLive() && query.seek) {
            duration = player.fttm().diffSeconds(player.seektm());
        } else if (player.isLive() && player.chasing() && query.seek) {
            duration = player.fttm().diffSeconds(player.seektm());
            duration -= (duration % 5);
        } else {
            duration = 0;
        }
        return duration;
    };
    if (player.lsId && player.lsId() === '') {
        player.lsId(uid3());
    }
    if (typeof RadikoJSPlayer !== 'undefined' && RadikoJSPlayer.isSupported()) {
        jobs = {};
        player
            .load(url)
            .then(function() {
                var result = player.play();
                if (typeof result === 'object' && typeof result.then === 'function') {
                    result
                        .then(function() {
                            tetFirstAfterPlay = true;
                            $.Radiko.Player.Model.set('isPlaying', true);
                            $.Radiko.Player.Model.set('isStartStreaming', false);
                            if (!player.isLive() || player.chasing()) {
                                $.Radiko.bookmark = new Bookmark.bookmark(player.station_id(), player.fttm().toString('yyyyMMddHHmmss'), player.totm().toString('yyyyMMddHHmmss'));
                            }
                        })["catch"](function() {});
                } else {
                    tetFirstAfterPlay = true;
                    $.Radiko.Player.Model.set('isPlaying', true);
                    $.Radiko.Player.Model.set('isStartStreaming', false);
                    if (!player.isLive() || player.chasing()) {
                        $.Radiko.bookmark = new Bookmark.bookmark(player.station_id(), player.fttm().toString('yyyyMMddHHmmss'), player.totm().toString('yyyyMMddHHmmss'));
                    }
                }
            });
    } else {
        player.play(url);
        var watchPlayingStatus_1 = setInterval(function() {
            if (player.isPlaying()) {
                clearInterval(watchPlayingStatus_1);
                tetFirstAfterPlay = true;
                $.Radiko.Player.Model.set('isPlaying', true);
                $.Radiko.Player.Model.set('isStartStreaming', false);
                if (!player.isLive() || player.chasing()) {
                    $.Radiko.bookmark = new Bookmark.bookmark(player.station_id(), player.fttm().toString('yyyyMMddHHmmss'), player.totm().toString('yyyyMMddHHmmss'));
                }
            }
        }, 50);
    }
};
var sharePlay = function(url) {
    if (player.isPlaying()) {
        player.stop();
    }
    var query = /^http/.test(url) ? $.Radiko.parseQueryString(url) : {};
    if (query.station_id) {
        player.station_id(query.station_id);
    } else if (url.match(/^#(.+)/)) {
        player.station_id(RegExp.$1);
    }
    if (query.ft) {
        var ft = tm_to_xdate(query.ft);
        player.fttm(ft);
    }
    if (query.to) {
        var to = tm_to_xdate(query.to);
        player.totm(to);
    }
    if (query.seek) {
        var seek = tm_to_xdate(query.seek);
        player.seektm(seek);
    } else {
        player.seektm(player.fttm());
    }
    player.program_date(0);
    if (getTsStatus() == 2) {
        return;
    }
    if (!_.isUndefined(window.jumpAnimation)) {
        clearInterval(window.jumpAnimation);
    }
    window.jumpAnimation = setInterval('rect()', 5000);
    changeVolume({
        rate: player.volume()
    });
    player.chasing(false);
    $.Radiko.Player.beforeCurrentPosition = 0;
    $.Radiko.RAPF.CMDurationList = {};
    var computeCurrentTime = function() {
        var duration;
        if (!player.isLive() && query.seek) {
            duration = player.fttm().diffSeconds(player.seektm());
        } else if (player.isLive() && player.chasing() && query.seek) {
            duration = player.fttm().diffSeconds(player.seektm());
            duration -= (duration % 5);
        } else {
            duration = 0;
        }
        return duration;
    };
    if (player.lsId && player.lsId() === '') {
        player.lsId(uid3());
    }
    if (typeof RadikoJSPlayer !== 'undefined' && RadikoJSPlayer.isSupported()) {
        jobs = {};
        var result = player.play(url);
        if (typeof result === 'object' && typeof result.then === 'function') {
            result
                .then(function() {
                    tetFirstAfterPlay = true;
                    $.Radiko.Player.Model.set('isStartStreaming', false);
                })["catch"](function() {});
        } else {
            tetFirstAfterPlay = true;
            $.Radiko.Player.Model.set('isStartStreaming', false);
        }
    } else {
        player.play(url);
        var watchPlayingStatus_2 = setInterval(function() {
            if (player.isPlaying()) {
                clearInterval(watchPlayingStatus_2);
                tetFirstAfterPlay = true;
                $.Radiko.Player.Model.set('isStartStreaming', false);
            }
        }, 50);
    }
};
var create_ts_url = function(d) {
    var url = 'https://' + location.host + '/v2/api/ts/playlist.m3u8' +
        '?station_id=' + (d.station_id || player.station_id()) +
        '&l=15' +
        '&ft=' + xdate_to_tm(d.ft) +
        '&to=' + xdate_to_tm(d.to);
    if (d.seek) {
        url += '&seek=' + xdate_to_tm(d.seek);
    }
    return url;
};
var setSeekbarLength = function(rate) {
    var seekBar = $('#seekbar');
    var length = seekBar.width() * rate;
    if (moveSeek) {
        return;
    }
    seekBar.find('.knob').css('left', length);
    seekBar.find('.active').width(length);
};
var setVolumebarLength = function(rate) {
    var volume = $('#volume');
    var maxWidth = volume.width() - volume.find('.knob').width();
    var length = maxWidth * rate;
    volume.find('.knob').css('left', length);
    volume.find('.active').width(length);
};
var changeVolume = function(d) {
    var volume = $('#volume');
    var maxWidth = volume.width();
    var rate;
    if (d.rate >= 0) {
        rate = d.rate;
    } else {
        rate = d.width / maxWidth;
    }
    var width = maxWidth * rate;
    volume.find('.active').width(width);
    volume.find('.knob').css('left', width);
    store.set('player-volume', rate);
    player.volume(rate);
};
var tetGatheringInterval = 60000;
var currentStationId;
var areaId = 'OUT';
var tetTimer;
var tetTimer2;
var tetDate;
var tetDate2;
var isPlaying = false;
$(document).ready(function() {
    currentStationId = getStationId();
});
var uid = function() {
    return $.Radiko.Mixins.Utility.generateUid();
};
var uid3 = function() {
    return $.Radiko.Mixins.Utility.uid3();
};
var tetTimerCallback2 = function() {
    var now = new Date().getTime();
    if (tetFirstAfterPlay) {
        tetDate2 = now + tetGatheringInterval;
    } else if (now < tetDate2) {
        return;
    } else if (now - tetDate2 > tetGatheringInterval) {
        tetDate2 = now + tetGatheringInterval;
    } else {
        tetDate2 += tetGatheringInterval;
    }
    if (tetFirstAfterPlay) {
        tetFirstAfterPlay = false;
    } else {
        if (!player) {
            return;
        }
        if (!player.isPlaying()) {
            return;
        }
    }
    var tet_info = {};
    if ((!player.isLive()) || player.chasing()) {
        try {
            tet_info.ts = player.playing_date().toString('yyyyMMddHHmmss');
        } catch (e) {
            tetDate2 = now;
            return;
        }
        if ($.Radiko.logger.fromShare) {
            tet_info.share = 1;
        }
    }
    $.Radiko.logger.tet_log(tet_info);
    $.Radiko.logger.tet_log($.extend({}, tet_info, {
        is_v2: true
    }));
};
var onPlayStateChange = function(mes) {
    switch (mes) {
        case 'playing':
            isPlaying = true;
            onPlaying();
            break;
        case 'stopped':
            isPlaying = false;
            onStopped();
            break;
    }
};
var onHLSPlaybackComplete = function() {
    $.Radiko.Player.View.trigger('complete');
    if (isSharePlay) {
        changePlayButton();
    } else {
        $.Radiko.Player.Model.set('isPlaying', false);
        $('#url').val(create_ts_url({
            ft: player.fttm(),
            to: player.totm()
        }));
        $.Radiko.bookmark["delete"]();
    }
};
var onPlaying = function() {
    RadikoADK.watcher.start();
};
var onStopped = function() {
    RadikoADK.watcher.stop();
};
var setSeekTime = function(rate) {
    var playTime = player.totm().getTime() - player.fttm().getTime();
    var time = playTime * rate;
    var url = create_ts_url({
        ft: player.fttm(),
        to: player.totm(),
        seek: new XDate(player.fttm().getTime() + time, false)
    });
    $('#url').val(url);
};
var onCurrentTimeChange = function(t) {
    var url = $('#url').val();
    $.Radiko.RAPF.currentTime = t.position;
    Object.keys(jobs).forEach(function(value) {
        var executeNum = 0;
        jobs[value].forEach(function(job) {
            if (job.start <= t.position && job.executed === false) {
                job.task();
                job.executed = true;
                executeNum++;
            }
        });
        if (jobs[value].filter(function(job) {
                return !job.executed;
            }).length === 0) {
            delete jobs[value];
        }
    });
    if (/^#/.test(url) && !isSharePlay) {
        return;
    }
    if (!player.isPlaying() || (player.chasing() && (player.program_date() == null || player.program_date() == 0))) {
        return;
    }
    var sec, storeKey, now;
    if (player.chasing()) {
        now = new XDate(player.program_date());
    } else {
        now = player.fttm().clone();
    }
    now.addSeconds(t.position + t.live_sliding_main);
    player.playing_date(now);
    var currentTime;
    if (player.chasing()) {
        currentTime = Math.floor(player.fttm().diffSeconds(now));
    } else {
        currentTime = t.position + t.live_sliding_main;
    }
    if (isSharePlay && /^#/.test(url)) {
        return;
    }
    if (player.chasing()) {
        sec = typeof $.Radiko.Player.beforeCurrentPosition !== 'number' ? (now - $.Radiko.Player.beforeCurrentPosition) / 1000 : 0;
        $.Radiko.Player.beforeCurrentPosition = now.clone();
    } else {
        sec = $.Radiko.Player.beforeCurrentPosition ? (t.position - $.Radiko.Player.beforeCurrentPosition) : 0;
        $.Radiko.Player.beforeCurrentPosition = t.position;
    }
    if ((!isSharePlay && /^https/.test(url)) || (isSharePlay && /#\!\/ts/.test(location.hash))) {
        storeKey = player.station_id() + player.fttm().toString('yyyyMMddHHmmss');
        $.Radiko.Player.updateLimitation(storeKey, sec);
    }
    if (isSharePlay || moveSeek) {
        return;
    }
    if (!player.isLive() || player.chasing()) {
        $.Radiko.bookmark.save(currentTime);
    }
    $.Radiko.Player.Model.set('currentTime', currentTime);
};
var onFragmentPlaying = function(m) {
    var now = new XDate(m.program_date);
    if (!player.program_date() || player.program_date() === 0) {
        player.program_date(now);
    }
};
var onLoadStateReady = function() {
    if (!isSharePlay && /^#/.test($('#url').val())) {
        return;
    }
    if (typeof player.fttm() !== 'undefined') {
        var playTime = 0;
        if (player.seektm()) {
            playTime = player.totm().getTime() - player.seektm().getTime();
        } else {
            playTime = player.totm().getTime() - player.fttm().getTime();
        }
        var endDispSec = sec_to_disptime(playTime / 1000);
        if (playTime !== 0) {
            endDispSec = '-' + endDispSec;
        }
        if (!isSharePlay) {
            $('#all_val').text(endDispSec);
        }
    }
    if (player.seektm()) {
        if ((player.totm() - player.seektm()) <= 0) {
            player.stop();
            $.Radiko.Player.Model.set('isPlaying', false);
            changePlayButton();
        }
        if (typeof RadikoJSPlayer === 'undefined' || !RadikoJSPlayer.isSupported()) {
            player.seek((player.seektm() - player.fttm()) / 1000);
        }
    }
    player.chasing(false);
    if (player.isLive()) {
        player.chasing(true);
    }
};
var onLoadStateError = function(e) {
    $.Radiko.Player.Model.set('isStartStreaming', false);
    alert('再生に失敗しました。画面をリロードして下さい');
};
var onAuthFailure = function() {
    alert('認証に失敗しました。回線状態を確認して下さい');
};
window.isRadikoAreafree = function() {
    return $.Radiko.login_status.areafree;
};
var _playerStations;
window.isStationInArea = function(areaId, stationId) {
    var xml = _playerStations;
    if (!_playerStations) {
        $.ajax({
            async: false,
            url: '/v3/station/list/' + areaId + '.xml',
            dataType: 'xml',
            success: function(data) {
                xml = $(data);
            }
        });
        _playerStations = xml;
    }
    var isInArea = false;
    if (xml) {
        xml.find('stations > station > id').each(function() {
            var self = $(this);
            if (self.text() == stationId) {
                isInArea = true;
                return false;
            }
        });
    }
    return isInArea;
};
var afterSWFLoaded = function() {
    player = new RadikoPlayer({
        swf: swf(),
        onPlayStateChange: 'onPlayStateChange',
        onCurrentTimeChange: 'onCurrentTimeChange',
        onFragmentPlaying: 'onFragmentPlaying',
        onLoadStateReady: 'onLoadStateReady',
        onLoadStateError: 'onLoadStateError',
        onAuthFailure: 'onAuthFailure',
        isRadikoAreafree: 'isRadikoAreafree',
        isStationInArea: 'isStationInArea',
        onHLSPlaybackComplete: 'onHLSPlaybackComplete'
    });
    player.init();
    changeVolume({
        rate: player.volume()
    });
    $.Radiko.Player.tetInit();
};
var tm_to_xdate = function(tm) {
    return new XDate(tm.substr(0, 4), tm.substr(4, 2) - 1, tm.substr(6, 2), tm.substr(8, 2), tm.substr(10, 2), tm.substr(12, 2), 0, false);
};
var xdate_to_tm = function(dt) {
    return dt.toString('yyyyMMddHHmmss');
};
var sec_to_disptime = function(sec) {
    sec = Math.round(sec);
    var h = Math.floor(sec / (60 * 60));
    h = h > 0 ? h : 0;
    sec = sec % (60 * 60);
    var m = Math.floor(sec / 60);
    sec = sec % 60;
    return sprintf('%02d', h) + ':' + sprintf('%02d', m) + ':' + sprintf('%02d', sec);
};
var playerEvent = function() {
    if ($.Radiko.Player.Model.get('isLoaded') === false) {
        if (typeof RadikoJSPlayer !== 'undefined' && RadikoJSPlayer.isSupported()) {
            var $audio = $('<audio></audio>');
            $('body').append($audio);
            player = new RadikoJSPlayer($audio[0], 'pc_html5', 'bcd151073c03b352e1ef2fd66c32209da9ca0afa', {
                onPlayStateChange: onPlayStateChange,
                onCurrentTimeChange: onCurrentTimeChange,
                onFragmentPlaying: onFragmentPlaying,
                onLoadStateReady: onLoadStateReady,
                onLoadStateError: onLoadStateError,
                onAuthFailure: onAuthFailure,
                isRadikoAreafree: isRadikoAreafree,
                isStationInArea: isStationInArea,
                onHLSPlaybackComplete: onHLSPlaybackComplete,
                onChunkListLoaded: function(detail) {
                    var fragments = detail.fragments;
                    var adid;
                    var sn;
                    var cmStart;
                    var cmDurarion;
                    var AD_TAGS = /AD-ID|IMPRESSION|COMPANION-IMG-PATH|COMPANION-IMG-TRACKING|COMPANION-LINK|TRACKING-EVENT-START|TRACKING-EVENT-FQ|TRACKING-EVENT-MP|TRACKING-EVENT-TQ|TRACKING-EVENT-END/;
                    var TRACKING_TAGS = /IMPRESSION|COMPANION-IMG-PATH|COMPANION-IMG-TRACKING|COMPANION-LINK|TRACKING-EVENT-START|TRACKING-EVENT-FQ|TRACKING-EVENT-MP|TRACKING-EVENT-TQ|TRACKING-EVENT-END/;
                    var findAdTags = function(tag) {
                        return AD_TAGS.test(tag[0]);
                    };
                    var findTrackingTags = function(tag) {
                        return TRACKING_TAGS.test(tag[0]);
                    };
                    var findAdIdTag = function(tag) {
                        return /AD-ID/.test(tag[0]);
                    };
                    var findDurationTag = function(tag) {
                        return /EXT-X-DURATION/.test(tag[0]);
                    };
                    var filterFragments = fragments
                        .filter(function(fragment) {
                            return fragment.tagList.find(findAdTags);
                        });
                    if (filterFragments.length === 0) {
                        return;
                    }
                    filterFragments.forEach(function(fragment) {
                        var adIdTag = fragment.tagList.find(findAdIdTag);
                        if (adIdTag) {
                            adid = adIdTag[1];
                            sn = fragment.sn;
                            cmStart = fragment.start;
                        }
                        var durationTag = fragment.tagList.find(findDurationTag);
                        if (durationTag) {
                            cmDurarion = durationTag[1];
                        }
                        if (adid && cmDurarion) {
                            var beacon_1 = new $.Radiko.RAPF.Beacon(adid);
                            if ($.Radiko.login_status && $.Radiko.login_status.user_key) {
                                beacon_1.setUserKey($.Radiko.login_status.user_key);
                            }
                            if (!jobs.hasOwnProperty(sn)) {
                                jobs[sn] = [];
                                var addedTrackingTag_1 = [];
                                var addJob_1 = function(name, start, cmDuration, task) {
                                    var job = {
                                        tag: name,
                                        start: start,
                                        duration: cmDurarion,
                                        task: task,
                                        executed: false
                                    };
                                    jobs[sn].push(job);
                                };
                                fragment.tagList
                                    .filter(findTrackingTags)
                                    .forEach(function(tag, index, tagList) {
                                        var name = tag[0],
                                            value = tag[1];
                                        var start;
                                        switch (name) {
                                            case 'IMPRESSION':
                                                addJob_1(name, cmStart, cmDurarion, function() {
                                                    beacon_1.sendTracking(value);
                                                });
                                                if (addedTrackingTag_1.indexOf(name) === -1) {
                                                    addedTrackingTag_1.push(name);
                                                    var playlistBeaconParam_1 = beacon_1.pickBeaconParam(value);
                                                    addJob_1(name, cmStart, cmDurarion, function() {
                                                        beacon_1.setConnectionType(player.connectionType());
                                                        beacon_1.setStreamType((player.chasing() ? 1 : 0));
                                                        var beaconUrl = beacon_1.buildBeaconUrl(playlistBeaconParam_1, player.area_id(), player.station_id(), $.Radiko.RAPF.Tracking.TYPE.IMPRESSION);
                                                        beacon_1.addLogImg(beaconUrl);
                                                    });
                                                }
                                                break;
                                            case 'TRACKING-EVENT-START':
                                                addJob_1(name, cmStart, cmDurarion, function() {
                                                    beacon_1.sendTracking(value);
                                                });
                                                if (addedTrackingTag_1.indexOf(name) === -1) {
                                                    addedTrackingTag_1.push(name);
                                                    var playlistBeaconParam_2 = beacon_1.pickBeaconParam(value);
                                                    addJob_1(name, cmStart, cmDurarion, function() {
                                                        beacon_1.setConnectionType(player.connectionType());
                                                        beacon_1.setStreamType((player.chasing() ? 1 : 0));
                                                        var beaconUrl = beacon_1.buildBeaconUrl(playlistBeaconParam_2, player.area_id(), player.station_id(), $.Radiko.RAPF.Tracking.TYPE.START);
                                                        beacon_1.addLogImg(beaconUrl);
                                                    });
                                                }
                                                break;
                                            case 'COMPANION-IMG-PATH':
                                                if (!$.Radiko.showCompanionBanner) {
                                                    break;
                                                }
                                                var bannerImg_1 = value;
                                                var bannerLinkTag = tagList.find(function(tag) {
                                                    return /COMPANION-LINK/.test(tag[0]);
                                                });
                                                var bannerLink_1;
                                                if (bannerLinkTag) {
                                                    bannerLink_1 = bannerLinkTag[1];
                                                }
                                                var bannerTrackingTag = tagList.find(function(tag) {
                                                    return /COMPANION-IMG-TRACKING/.test(tag[0]);
                                                });
                                                var bannerTrackingLink_1;
                                                if (bannerTrackingTag) {
                                                    bannerTrackingLink_1 = bannerTrackingTag[1];
                                                }
                                                addJob_1(name, cmStart, cmDurarion, function() {
                                                    $.Radiko.RAPF.BannerModel.set({
                                                        url: bannerImg_1,
                                                        link: bannerLink_1,
                                                        tracking_link: bannerTrackingLink_1,
                                                        duration: +cmDurarion,
                                                        beacon: beacon_1,
                                                        show: true
                                                    });
                                                });
                                                addJob_1(name, (cmStart + +cmDurarion), cmDurarion, function() {
                                                    $.Radiko.RAPF.BannerModel.set({
                                                        show: false
                                                    });
                                                });
                                                break;
                                            case 'TRACKING-EVENT-FQ':
                                                start = cmStart + (+cmDurarion * 0.25);
                                                addJob_1(name, start, cmDurarion, function() {
                                                    beacon_1.sendTracking(value);
                                                });
                                                if (addedTrackingTag_1.indexOf(name) === -1) {
                                                    addedTrackingTag_1.push(name);
                                                    var playlistBeaconParam_3 = beacon_1.pickBeaconParam(value);
                                                    addJob_1(name, start, cmDurarion, function() {
                                                        beacon_1.setConnectionType(player.connectionType());
                                                        beacon_1.setStreamType((player.chasing() ? 1 : 0));
                                                        var beaconUrl = beacon_1.buildBeaconUrl(playlistBeaconParam_3, player.area_id(), player.station_id(), $.Radiko.RAPF.Tracking.TYPE.FIRST_QUARTILE);
                                                        beacon_1.addLogImg(beaconUrl);
                                                    });
                                                }
                                                break;
                                            case 'TRACKING-EVENT-MP':
                                                start = cmStart + (+cmDurarion * 0.5);
                                                addJob_1(name, start, cmDurarion, function() {
                                                    beacon_1.sendTracking(value);
                                                });
                                                if (addedTrackingTag_1.indexOf(name) === -1) {
                                                    addedTrackingTag_1.push(name);
                                                    var playlistBeaconParam_4 = beacon_1.pickBeaconParam(value);
                                                    addJob_1(name, start, cmDurarion, function() {
                                                        beacon_1.setConnectionType(player.connectionType());
                                                        beacon_1.setStreamType((player.chasing() ? 1 : 0));
                                                        var beaconUrl = beacon_1.buildBeaconUrl(playlistBeaconParam_4, player.area_id(), player.station_id(), $.Radiko.RAPF.Tracking.TYPE.MIDPOINT);
                                                        beacon_1.addLogImg(beaconUrl);
                                                    });
                                                }
                                                break;
                                            case 'TRACKING-EVENT-TQ':
                                                start = cmStart + (+cmDurarion * 0.75);
                                                addJob_1(name, start, cmDurarion, function() {
                                                    beacon_1.sendTracking(value);
                                                });
                                                if (addedTrackingTag_1.indexOf(name) === -1) {
                                                    addedTrackingTag_1.push(name);
                                                    var playlistBeaconParam_5 = beacon_1.pickBeaconParam(value);
                                                    addJob_1(name, start, cmDurarion, function() {
                                                        beacon_1.setConnectionType(player.connectionType());
                                                        beacon_1.setStreamType((player.chasing() ? 1 : 0));
                                                        var beaconUrl = beacon_1.buildBeaconUrl(playlistBeaconParam_5, player.area_id(), player.station_id(), $.Radiko.RAPF.Tracking.TYPE.THIRD_QUARTILE);
                                                        beacon_1.addLogImg(beaconUrl);
                                                    });
                                                }
                                                break;
                                            case 'TRACKING-EVENT-END':
                                                start = cmStart + +cmDurarion;
                                                addJob_1(name, start, cmDurarion, function() {
                                                    beacon_1.sendTracking(value);
                                                });
                                                if (addedTrackingTag_1.indexOf(name) === -1) {
                                                    addedTrackingTag_1.push(name);
                                                    var playlistBeaconParam_6 = beacon_1.pickBeaconParam(value);
                                                    addJob_1(name, start, cmDurarion, function() {
                                                        beacon_1.setConnectionType(player.connectionType());
                                                        beacon_1.setStreamType((player.chasing() ? 1 : 0));
                                                        var beaconUrl = beacon_1.buildBeaconUrl(playlistBeaconParam_6, player.area_id(), player.station_id(), $.Radiko.RAPF.Tracking.TYPE.COMPLETE);
                                                        beacon_1.addLogImg(beaconUrl);
                                                    });
                                                }
                                                break;
                                        }
                                    });
                            }
                            if (!$.Radiko.RAPF.CMDurationList.hasOwnProperty(sn)) {
                                $.Radiko.RAPF.CMDurationList[sn] = {
                                    start: cmStart,
                                    end: cmStart + +cmDurarion
                                };
                            }
                        }
                    });
                }
            });
            player.length(15);
            player.on('authorized', function() {
                var volume = typeof store.get('player-volume') === 'undefined' ? 1 : store.get('player-volume');
                changeVolume({
                    rate: volume
                });
                $.Radiko.Player.tetInit();
                $.Radiko.Player.Model.set('isLoaded', true);
                $('.play-radio').css('opacity', '1.0');
            });
            player.auth();
        } else {
            var timer_1 = setInterval(function() {
                if (swf().setOnCurrentTimeChangeHandler) {
                    afterSWFLoaded();
                    $.Radiko.Player.Model.set('isLoaded', true);
                    clearInterval(timer_1);
                    $('.live-detail__play').removeClass('disabled');
                    $('.play-radio').css('opacity', '1.0');
                }
            }, 200);
        }
    }
    $(window).focus(function() {
        if (!_.isUndefined(window.jumpAnimation)) {
            clearInterval(window.jumpAnimation);
        }
        window.jumpAnimation = setInterval('rect()', 5000);
    }).blur(function() {
        if (!_.isUndefined(window.jumpAnimation)) {
            clearInterval(window.jumpAnimation);
        }
    });
    var shareSeekBar = $('.seek-bar');
    shareSeekBar.find('.knob').draggable({
        axis: 'x',
        containment: 'parent'
    });
    var onDragVolumeKnob = function() {
        $.Radiko.Player.setVolume();
    };
    var volume = $('#volume');
    volume.find('.knob').draggable({
        axis: 'x',
        containment: 'parent',
        start: onDragVolumeKnob,
        drag: onDragVolumeKnob,
        stop: onDragVolumeKnob
    });
};