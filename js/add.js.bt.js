var timeShiftScroll = {
    outerHeight: 0,
    outerWidth: 0,
    durationScale: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    durationHour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    //  durationScale:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // durationHour:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
};

function setScrollInit() {
    // var outer=$("div.isToday");
    var outer = $("div.program-table__items-outer");
    $(outer).scroll(setScrollContentsTop);
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

    //contents
    $(outer).find("div.item").each(function() {
        modifyScrollViewHeight(this);
    });

    //hour
    for (var i = 5; i < 29; i++) {
        var cn = "div.item--hour" + ("0" + i).slice(-2);
        $(cn).height(timeShiftScroll.durationHour[i] * timeShiftScroll.durationScale[i])
    }
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
    var obj = this;
    var y = $(obj).scrollTop();
    $("div.program-table__hour-scroll").css("top", -y);

    //hour
    for (var i = 5; i < 29; i++) {
        var cn = "div.item--hour" + ("0" + i).slice(-2);
        var cn2 = $(cn).find(".item__num");
        controllScrollText(cn, cn2, y);
    }
    $(this).find("div.item").each(function() {
        var cn = this;
        var cn2 = $(this).find(".scrollContents");
        controllScrollText(this, cn2, y);
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
    if ($(parent).position().top < y) {
        var cy = y - $(parent).position().top;
        if ($(parent).height() < $(child).height() + cy) {
            cy = $(parent).height() - $(child).height();
        }
        $(child).css("top", cy);
    } else {
        $(child).css("top", 0);
    }
}