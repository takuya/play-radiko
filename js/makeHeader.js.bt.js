$(function() {
    $.Radiko.header = {
        create_header: function(areaId, status) {
            // Viewのクラス
            var StationList = Backbone.View.extend({
                el: '.container',
                render: function(data) {
                    var source = $('#' + status).html();
                    if (_.isUndefined(source)) {
                        return;
                    }
                    var template = Handlebars.compile(source);
                    var html = template(data.toJSON());
                    this.$el.html(html);
                }
            });
            // Viewのinstance
            var stationList = new StationList();
            $.Radiko.ajax('/v3/station/list/' + areaId + '.xml', function(data, status, xhr) {
                    // 成功時
                    // BackboneModelのStationを生成
                    var Station = Backbone.Model.extend();

                    // BackboneCollectionのStationsを生成
                    var Stations = Backbone.Collection.extend({
                        model: Station
                    });
                    var xml = $(data);

                    // Stationsのインスタンスを生成
                    var stations = new Stations;

                    xml.find('station').each(function() {
                        // Modelを生成
                        var station = new Station({
                            id: $(this).children('id').text(),
                            name: $(this).children('name').text()
                        });
                        stations.push(station);
                    });
                    stationList.render(stations);
                },
                function(xhr, status, e) {
                    //失敗時
                }, "xml", true);

            // 検索フォームビュー
            var GlobalSearchFormView = Backbone.View.extend({
                // 初期化メソッド
                initialize: function() {
                    // 初期レンダー
                    this.render();
                },

                // レンダラー
                render: function() {
                    this.$('[name="area_id"]').val(areaId);
                    this.$('[name="cul_area_id"]').val(areaId);

                    return this;
                }
            });

            // 検索フォームビューのインスタンスを生成する
            $.Radiko.globalSearchFormView = new GlobalSearchFormView({
                el: document.getElementById('global-search-form')
            });


            setTimeout(function() {
                check_header_information();
            }, 5000);
        }
    };


    // --------------------------------------------------------------------------------
    //  ヘッダーのお知らせバッジ表示・非表示
    // --------------------------------------------------------------------------------
    function check_header_information() {

        $.ajax({
            cache: false,
            url: "/v2/information2/" + getAreaId() + ".xml",
            type: "GET",
            dataType: "xml",
            success: function(xml, status) {

                if (status != 'success') {
                    return false;
                }

                var cookieName = 'last_check_info_date' + '=';
                var allCookies = document.cookie;
                var position = allCookies.indexOf(cookieName);

                var now = null;

                if (position != -1) {

                    var startIndex = position + cookieName.length;
                    var endIndex = allCookies.indexOf(';', startIndex);

                    if (endIndex == -1) {

                        endIndex = allCookies.length;
                    }

                    now = moment(allCookies.substring(startIndex, endIndex), 'YYYY-MM-DD');

                } else {

                    // 30日前の日付の計算
                    now = moment().subtract(30, 'days');
                }


                // フラグの初期化(倒しておく)
                var information_exists = false;

                // XMLのinfoの日付を見て、30日以内のものがあればフラグを立てる
                $(xml).find('info').each(function() {

                    var date = moment($(this).find('date').text(), 'YYYY.MM.DD');

                    if (date.isAfter(now)) {

                        information_exists = true;
                    }
                });


                // 結果でバッジの表示・非表示
                $('.icon--header-badge').hide();

                if (information_exists == true) {
                    $('.icon--header-badge').fadeIn(500);
                } else {
                    $('.icon--header-badge').hide();
                }
            }
        });
    }

    // お知らせをクリックした日付をCookieに記憶する
    $('body').on('click', '.item--info', function() {

        var expire = new Date();
        expire.setTime(expire.getTime() + 60 * 24 * 60 * 60 * 1000);

        document.cookie = 'last_check_info_date=' + moment().format('YYYY-MM-DD') + ';expires=' + expire.toUTCString() + ';path=/';
    });
});