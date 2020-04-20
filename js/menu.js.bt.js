"use strict";
$(function() {
    $.Radiko.menu = {
        is_login_check: false,
        check_login: function() {
            $.Radiko.login_status.areafree = false;
            $.Radiko.login_status.premium = false;
            var alerts = [];
            if ((typeof RadikoJSPlayer === 'undefined' || !RadikoJSPlayer.isSupported()) &&
                store.get('pc-not-show-flash-alert') !== 1) {
                alerts.push([
                    _.template('<p class="inline">お客様がお使いのブラウザでは、2020年12月1日より再生ができなくなります。詳しくは<a href="/#!/info/2426" class="default">お知らせ</a>をご確認ください。</p>')(),
                    $('<label></label>', {
                        text: '再度表示しない',
                        "for": 'check-not-show-flash-alert'
                    }).prepend($('<input/>', {
                        type: 'checkbox',
                        id: 'check-not-show-flash-alert'
                    })),
                    $('<button></button>', {
                        type: 'button',
                        text: '閉じる',
                        on: {
                            click: function() {
                                if ($('#check-not-show-flash-alert').is(':checked')) {
                                    store.set('pc-not-show-flash-alert', 1);
                                }
                                var $parent = alerts.length === 1 ? $(this).parent().parent() : $(this).parent();
                                $parent.remove();
                            }
                        }
                    }),
                ]);
            }
            $.ajax({
                    url: '/ap/member/webapi/member/login/check',
                    async: false,
                    dataType: 'json'
                })
                .done(function(data) {
                    if (data.status && data.status == "200") {
                        if (data.areafree) {
                            $.Radiko.login_status.areafree = true;
                        }
                        if (data.paid_member) {
                            $.Radiko.login_status.premium = true;
                        }
                        if (data.user_key) {
                            $.Radiko.login_status.user_key = data.user_key;
                        }
                        if (data.unpaid) {
                            $.Radiko.login_status.unpaid = data.unpaid;
                        }
                        $.Radiko.menu.render_menu_logged_in();
                    } else {
                        $.Radiko.menu.render_menu_logged_out();
                    }
                    $.Radiko.menu.is_login_check = true;
                    if ($.Radiko.login_status.premium && $.Radiko.login_status.unpaid == "1") {
                        var href = "https://" + location.host + "/ap/member/payment/select_plan_page";
                        var text = 'お支払いが確認できませんでした。引き続きプレミアム会員サービス（有料）を利用する場合は、こちらからお支払い方法の変更/登録を行って下さい。';
                        alerts.push("<p><a href=\"" + href + "\" target=\"_blank\" style=\"color:#fff;\">" + text + "</a></p>");
                    }
                })
                .fail(function(e) {
                    console.error(e);
                    $.Radiko.menu.render_menu_logged_out();
                })
                .always(function() {
                    if (alerts.length === 0) {
                        return;
                    }
                    var blocks = _.map(alerts, function(alert, index, array) {
                        var inner = $('<div></div>', {
                            "class": 'alert__inner',
                            append: alert
                        });
                        if (index === 0 && array.length > 1) {
                            inner.attr('first', '');
                        }
                        return inner;
                    });
                    var $alert = $('.alert');
                    $alert.append(blocks);
                    $alert.removeAttr('hidden');
                });
        },
        render_menu_logged_in: function() {
            $.Radiko.area.check_area('login');
            $.Radiko.login_status.hasLogin = true;
        },
        render_menu_logged_out: function() {
            $.Radiko.area.check_area('logout');
        }
    };
});