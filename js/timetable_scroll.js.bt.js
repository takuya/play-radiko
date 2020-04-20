var timeShiftScroll = {
    outerHeight: 0,
    outerWidth: 0,
    durationScale: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    durationHour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    itemHourHeight: 3000,
    // itemHourHeight: 450,
    scrollTimer: -1
};

function setScrollInit() {
    var outer = $("div.program-table__outer");

    $(outer).off("scroll", setScrollContentsTop);
    $(outer).on("scroll", setScrollContentsTop);

    timeShiftScroll.outerHeight = $(outer).height();
    timeShiftScroll.outerWidth = $(outer).width();

    $(outer).find("div.item").each(function() {
        var d = $(this).height() / $(this).attr("data-duration");
        var h = getStartHour(this);
        if (d > timeShiftScroll.durationScale[h]) {
            timeShiftScroll.durationScale[h] = d;
        }
        if (timeShiftScroll.durationHour[h] == 0) {
            timeShiftScroll.durationHour[h] = $(this).attr("data-duration") / getSubMin(this) * 60;
        }
    });

    //wrapper
    $(outer).find('.program-table__items').height(timeShiftScroll.itemHourHeight * 24);

    //contents
    $(outer).find("div.item").each(function() {
        //modifyScrollViewHeight(this);
        $(this).css('min-height', $(this).height());
        $(this).height(timeShiftScroll.itemHourHeight * $(this).attr("data-duration") / 3600);
    });

    //hour
    for (var i = 5; i < 29; i++) {
        var cn = "div.item--hour" + ("0" + i).slice(-2);
        //$(cn).height(timeShiftScroll.durationHour[i]*timeShiftScroll.durationScale[i])
        $(cn).height(timeShiftScroll.itemHourHeight);
    }

    // first scroll
    if ($(outer).find('.item--onair').length) {
        var hour = new Date().getHours() > 4 ? new Date().getHours() : 24 + new Date().getHours();
        var scroll_px = $("div.item--hour" + ("0" + hour).slice(-2)).position().top;
        setTimeout(function() {
            $(outer).animate({
                scrollTop: scroll_px
            }, 1000);
        }, 1000)
    }

    // IE7だとタイミングの問題か番組表がイベント情報と被ってしまうので、
    // styleを当てて無理やり引き落とす
    $('#program-table .program-table').css('display', 'block');
}

function modifyScrollViewHeight(obj) {
    var sh = getStartHour(obj);
    var eh = getEndHour(obj);
    var height = 0;
    if (sh == eh) {
        height = $(obj).attr("data-duration") * timeShiftScroll.durationScale[sh];
    } else {
        var m = $(obj).attr("data-duration") / getSubMin(obj);
        for (var i = sh; i <= eh; i++) {
            if (i < 29) {
                if (i == sh) {
                    height += (60 - getStartMin(obj)) * m * timeShiftScroll.durationScale[i];
                } else if (i == eh) {
                    height += getEndMin(obj) * m * timeShiftScroll.durationScale[i];
                } else {
                    height += 60 * m * timeShiftScroll.durationScale[i];
                }
            }
        }
    }
    $(obj).height(height);
}

function setScrollContentsTop() {
    var top_y = $(this).scrollTop(); // スクロール後のdiv上部位置
    var bottom_y = top_y + $(this).height(); // 下部

    var top_hour = 5;
    var bottom_hour = 29;

    //hour
    for (var i = 5; i < 29; i++) {
        var cn = "div.item--hour" + ("0" + i).slice(-2);
        var cn2 = $(cn).find(".item__num");
        controllScrollText(cn, cn2, top_y);

        var hour_top_y = $(cn).position().top;
        var hour_bottom_y = hour_top_y + $(cn).height();

        // 見えている開始時間
        if (hour_top_y <= top_y && top_y <= hour_bottom_y) {
            top_hour = i;
        }
        // 見えている終了時間
        if (hour_top_y <= bottom_y && bottom_y <= hour_bottom_y) {
            bottom_hour = i;
        }
    }

    // 要素が多すぎるので、必要な物だけ動かす
    $(this).find("div.item").each(function() {
        var cn = this;
        var cn2 = $(this).find(".scrollContents");

        var start = "" + $(this).data("start");
        var end = "" + $(this).data("end");
        if ((!start) || (!end)) {
            controllScrollText(cn, cn2, top_y);
            return;
        }
        var start_hour = start.substr(0, 2);
        var end_hour = end.substr(0, 2);
        if (top_hour <= end_hour && start_hour <= bottom_hour) {
            // 見えている部分
            controllScrollText(cn, cn2, top_y);
        } else {
            // 見えていない部分なので動かさない。
        }
    });
}

function getStartHour(obj) {
    return Math.floor(Number($(obj).attr("data-start")) / 100);
}

function getStartMin(obj) {
    return Number($(obj).attr("data-start")) % 100;
}

function getEndHour(obj) {
    return Math.floor(Number($(obj).attr("data-end")) / 100);
}

function getEndMin(obj) {
    return Number($(obj).attr("data-end")) % 100;
}

function getSubMin(obj) {
    var sh = getStartHour(obj);
    var eh = getEndHour(obj);
    var m = 0;
    if (sh == eh) {
        m = getEndMin(obj) - getStartMin(obj);
    } else {
        m = getEndMin(obj) + 60 - getStartMin(obj);
        if (sh + 1 < eh) {
            m += 60 * (eh - sh - 1);
        }
    }
    return m;
}

function controllScrollText(parent, child, y) {
    var parent_pos = $(parent).position();

    if (parent_pos.top < y) {
        var cy = y - parent_pos.top;
        var parent_height = $(parent).height();
        var child_height = $(child).height();
        if (parent_height < child_height + cy) {
            cy = parent_height - child_height;
        }
        $(child).css("top", cy);
    } else {
        $(child).css("top", 0);
    }
}