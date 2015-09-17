/**
 * Created by Jason on 15/6/17.
 */

/**
 * 做题页面样式js
 */
$(function () {

    /**
     * 注册答题卡展开折叠事件
     */
    $(document.body).on("click", ".hex-exe-sheet .title a", function () {
        show_body(this);
    });

    var windows_width = document.documentElement.clientWidth;

    /**
     * 页面定位
     */
    (function () {
        $(".hex-exe-sheet").css("left", windows_width / 2 + 335);
        $(".hex-page-button").css("left", (windows_width - 1180) / 2);
        $(".hex-exe-answer").css("left", (windows_width - 1180) / 2);

        if ($(".hex-exe-body").height() < document.documentElement.clientHeight - 65) {
            $(".hex-exe-body").css("padding-bottom", document.documentElement.clientHeight - 65-84);
        }



        $(".hex-page-button").css("top", document.documentElement.clientHeight / 2);
    })();

    /**
     * 答题解析卡的展开收缩事件
     */
    $(document.body).on("click", ".hex-exe-answer .hex-tab-head .unfold", function () {
        var div_tab_content = $(this).parent().parent().next(".tab-content");

        var exe_body = $(".hex-exe-body");

        if (div_tab_content.height() == 0) {
            div_tab_content.animate({
                "height": 160
            }, 500);
            exe_body.css("padding-bottom", 240);
            $(this).removeClass("hex-img-up_l").addClass("hex-img-down_l");
        }
        else {
            div_tab_content.animate({
                "height": 0
            }, 500);
            exe_body.css("padding-bottom", 111);
            $(this).removeClass("hex-img-down_l").addClass("hex-img-up_l");
        }
    });

    /**
     * 答题卡折叠展开
     * @param thisObj
     */
    function show_body(thisObj) {
        var div = $(thisObj).parent().next("div");

        if (div.css("display") == "none") {
            div.slideDown(500);
            $(thisObj).removeClass("open");
        }
        else {
            div.slideUp(500);
            $(thisObj).addClass("open");
        }
    }
});

/**
 * 取出答题区域高度铺满的样式，王怀林使用
 */
function make_height_100() {
    /*var height = parseInt($(".hex-exe-body").css("height")) + parseInt($(".hex-exe-body").css("padding-top")) + parseInt($(".hex-exe-body").css("padding-bottom"));
     if (height > document.documentElement.clientHeight - 65) {
     $(".hex-exe-body").css("position", "static");
     }*/
}