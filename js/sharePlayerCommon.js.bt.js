"use strict";
$(function() {
    $.Radiko.Share = {
        isBeforePlaying: false,
        isCurrentPlayProgram: function() {
            var $tmpUrl = $('#tmpUrl'),
                url = create_ts_url({
                    ft: player.fttm(),
                    to: player.totm()
                }),
                regex = new RegExp(url.replace(/\?/, '\\?'));
            return !($tmpUrl.length === 0 || $tmpUrl.val().match(regex) === null);
        },
        setSharePlayUrl: function(url) {
            $('#share-url').val(url);
        },
        setSeekPlayTime: function(startSec, endSec) {
            $('.colorbox__seek .start').text(sec_to_disptime(startSec));
            var endDispSec = sec_to_disptime(endSec);
            if (endSec !== 0) {
                endDispSec = '-' + endDispSec;
            }
            $('.colorbox__seek .end').text(endDispSec);
        },
        setSeekTime: function(seekTime) {
            $('.colorbox__seek .seek-bar').attr('data-ts', seekTime);
        },
        setSnsUrl: function() {
            var shareFB = $('.btn__facebook');
            var shareTW = $('.btn__twitter');
            var clipBoard = $('#clipboard');
            var fShareUrl = shareFB.data('url');
            var tShareUrl = shareTW.data('urlbase');
            var cShareUrl = clipBoard.data('urlbase');
            var seekBar = $('.colorbox__seek .seek-bar');
            shareFB.attr('href', fShareUrl + seekBar.attr('data-ts'));
            shareTW.attr('href', tShareUrl + seekBar.attr('data-ts'));
            clipBoard.attr('data-clipboard-text', cShareUrl + seekBar.attr('data-ts'));
        },
        updateTime: function(startSec, endSec, rate) {
            if (!$.Radiko.Player.isShareOpen && $.Radiko.Share.isCurrentPlayProgram()) {
                var $shareSeekBar = $('.colorbox__seek .seek-bar');
                var seekPosi = $shareSeekBar.width() * rate;
                var knobPos, activeWidth;
                knobPos = activeWidth = seekPosi - 3;
                $.Radiko.Share.updateSeekBar(knobPos, activeWidth);
                $.Radiko.Share.setSharePlayUrl(create_ts_url({
                    ft: player.fttm(),
                    to: player.totm(),
                    seek: new XDate(player.fttm().getTime() + (startSec * 1000), false)
                }));
                $.Radiko.Share.setSeekPlayTime(startSec, endSec);
                $.Radiko.Share.setSeekTime(getDateTime(new XDate(player.fttm().getTime() + (startSec * 1000), false).getTime()));
                $.Radiko.Share.setSnsUrl();
            }
        },
        updateSeekBar: function(knobPos, activeWidth) {
            var seekBar = $('.colorbox__seek .seek-bar');
            seekBar.find('.knob').css('left', knobPos);
            seekBar.find('.active').css('width', activeWidth);
        },
        parseTSUrl: function(url) {
            var config = {};
            if (url.match(/station_id=([^&]+)/)) {
                config.station_id = RegExp.$1;
            }
            var ft = url.match(/ft=(\d+)/);
            if (ft) {
                config.fttm = new XDate(moment(ft[1], 'YYYYMMDDHHmmss').format('YYYY/MM/DD HH:mm:ss'), false);
            }
            var to = url.match(/to=(\d+)/);
            if (to) {
                config.totm = new XDate(moment(to[1], 'YYYYMMDDHHmmss').format('YYYY/MM/DD HH:mm:ss'), false);
            }
            var seek = url.match(/seek=(\d+)/);
            if (seek) {
                config.seektm = new XDate(moment(seek[1], 'YYYYMMDDHHmmss').format('YYYY/MM/DD HH:mm:ss'), false);
            }
            return config;
        },
        getActiveSeekWidth: function(rate) {
            var seekBar = $('.colorbox__seek .seek-bar');
            var seekPosi = seekBar.width() * rate;
            return (seekBar.width() - seekPosi) - 3;
        },
        bindSkipEvent: function() {
            var $buttonList = $('.btn-list');
            $buttonList.off('click', '.skip-btn');
            $buttonList.on('click', '.skip-btn', function(e) {
                var url = $('#share-url').val(),
                    skipValue = $(e.currentTarget).attr('data-skip-value'),
                    config = $.Radiko.Share.parseTSUrl(url);
                if (config.seektm) {
                    config.seektm.addSeconds(skipValue);
                } else {
                    config.seektm = config.fttm.clone().addSeconds(skipValue);
                }
                var nowTime = new XDate().getTime();
                if (nowTime <= (config.fttm.getTime() + 60 * 1000)) {
                    config.seektm = config.fttm.clone();
                } else if ((nowTime - 60 * 1000) <= config.seektm.getTime()) {
                    config.seektm = new XDate(false).addSeconds(-75);
                } else if (config.seektm.getTime() > config.totm.getTime()) {
                    config.seektm = config.totm.clone();
                } else if (config.seektm.getTime() < config.fttm.getTime()) {
                    config.seektm = config.fttm.clone();
                } else {}
                var playTime = config.totm.getTime() - config.fttm.getTime();
                var knobPos, activeWidth;
                if (nowTime <= (config.fttm.getTime() + 60 * 1000)) {
                    knobPos = activeWidth = 0;
                } else {
                    knobPos = activeWidth = $.Radiko.Share.getActiveSeekWidth((config.totm.getTime() - config.seektm.getTime()) / playTime);
                }
                $.Radiko.Share.updateSeekBar(knobPos, activeWidth);
                url = create_ts_url({
                    station_id: config.station_id,
                    ft: config.fttm,
                    to: config.totm,
                    seek: config.seektm
                });
                $.Radiko.Share.setSharePlayUrl(url);
                var timelest = config.totm.getTime() - config.seektm.getTime();
                var time = config.seektm.getTime() - config.fttm.getTime();
                $.Radiko.Share.setSeekPlayTime(time / 1000, timelest / 1000);
                $.Radiko.Share.setSeekTime(getDateTime(config.seektm.getTime()));
                $.Radiko.Share.setSnsUrl();
                if (timelest === 0) {
                    if (isSharePlay && player.isPlaying()) {
                        player.stop();
                    }
                    changePlayButton();
                    isSharePlay = false;
                } else {
                    if (isSharePlay && player.isPlaying()) {
                        sharePlay(url);
                    }
                }
            });
        }
    };
});
var isSharePlay = false;
var getDateTime = function(timestamp) {
    return moment(timestamp).format('YYYYMMDDHHmmss');
};
var changePlayButton = function() {
    var $sharePlayBtn = $('#share-play');
    $sharePlayBtn.html('<i class="icon icon--arrow-r-05"></i>');
};
var changeStopButton = function() {
    var $sharePlayBtn = $('#share-play');
    $sharePlayBtn.html('<i class="icon icon--stop-03"></i>');
};
var sharePlayerEvent = function() {
    var $sharePlayButton = $('#share-play');
    $sharePlayButton.on('click', function() {
        if ($.Radiko.Player.Model.get('isStartStreaming')) {
            return;
        }
        if (!isSharePlay) {
            if (player.isPlaying()) {
                $.Radiko.Share.isBeforePlaying = true;
                player.stop();
            }
        }
        RadikoADK.setClickingPlayButtonTimeTime(+moment());
        isSharePlay = true;
        var url = $('#share-url').val();
        if (player.isPlaying()) {
            player.stop();
            changePlayButton();
        } else {
            $.Radiko.Player.Model.set('isStartStreaming', true);
            $.Radiko.Player.Model.set('isPlaying', false);
            changeStopButton();
            sharePlay(url);
            var shareFB = $('.btn__facebook');
            var shareTW = $('.btn__twitter');
            var clipBoard = $('#clipboard');
            var fShareUrl = shareFB.data('url');
            var tShareUrl = shareTW.data('urlbase');
            var cShareUrl = clipBoard.data('urlbase');
            var seekBar = $('.colorbox__seek .seek-bar');
            shareFB.attr('href', fShareUrl + seekBar.attr('data-ts'));
            shareTW.attr('href', tShareUrl + seekBar.attr('data-ts'));
            clipBoard.attr('data-clipboard-text', cShareUrl + seekBar.attr('data-ts'));
        }
    });
    var onDragSeekKnob = function() {
        var url = $('#share-url').val(),
            config = $.Radiko.Share.parseTSUrl(url);
        var playTime = config.totm.getTime() - config.fttm.getTime();
        var nowTime = new XDate().getTime();
        var knobPos, activeWidth;
        if (nowTime <= (config.fttm.getTime() + 60 * 1000)) {
            config.seektm = config.fttm.clone();
            knobPos = activeWidth = 0;
        } else if ((nowTime - 60 * 1000) <= config.seektm.getTime()) {
            config.seektm = new XDate(false).addSeconds(-75);
            knobPos = activeWidth = $.Radiko.Share.getActiveSeekWidth((config.totm.getTime() - config.seektm.getTime()) / playTime);
        } else {
            knobPos = activeWidth = $.Radiko.Share.getActiveSeekWidth((config.totm.getTime() - config.seektm.getTime()) / playTime);
        }
        $.Radiko.Share.updateSeekBar(knobPos, activeWidth);
        url = create_ts_url({
            station_id: config.station_id,
            ft: config.fttm,
            to: config.totm,
            seek: config.seektm
        });
        $.Radiko.Share.setSharePlayUrl(url);
        var timelest = config.totm.getTime() - config.seektm.getTime();
        var time = config.seektm.getTime() - config.fttm.getTime();
        $.Radiko.Share.setSeekPlayTime(time / 1000, timelest / 1000);
        $.Radiko.Share.setSeekTime(getDateTime(config.seektm.getTime()));
        $.Radiko.Share.setSnsUrl();
        if (timelest === 0) {
            if (isSharePlay && player.isPlaying()) {
                player.stop();
            }
            changePlayButton();
            isSharePlay = false;
        } else {
            if (isSharePlay && player.isPlaying()) {
                sharePlay(url);
            }
        }
    };
    var onDragSeekPrev = function() {
        var url = $('#share-url').val(),
            config = $.Radiko.Share.parseTSUrl(url),
            seekBar = $('.colorbox__seek .seek-bar'),
            x = seekBar.find('.knob').position().left,
            rate = x / seekBar.width(),
            playTime = config.totm.getTime() - config.fttm.getTime(),
            time = playTime * rate;
        if (time > playTime) {
            time = playTime;
        } else if (time <= 0) {
            time = 0;
        }
        var now = moment();
        seekBar.find('.active').css('width', x);
        var timelest = playTime - time;
        var seekTime = new XDate(config.fttm.getTime() + time, false);
        url = create_ts_url({
            station_id: config.station_id,
            ft: config.fttm,
            to: config.totm,
            seek: seekTime
        });
        $.Radiko.Share.setSharePlayUrl(url);
        $.Radiko.Share.setSeekPlayTime(time / 1000, timelest / 1000);
        if (moment(config.fttm.getTime() + time).isAfter(now)) {
            var moveTime = now.subtract(1, 'minutes').format('x') - config.fttm.getTime();
            var timeRate = moveTime / playTime;
            var movablePos = seekBar.width() * timeRate;
            seekBar.find('.active').css('width', movablePos);
            seekBar.find('.knob').css('left', movablePos + seekBar.find('.knob').width() / 2);
            return false;
        }
    };
    var shareSeekBar = $('.colorbox__seek .seek-bar');
    shareSeekBar.find('.knob').draggable({
        axis: 'x',
        containment: 'parent',
        stop: onDragSeekKnob,
        drag: onDragSeekPrev
    });
    $.Radiko.Share.bindSkipEvent();
};