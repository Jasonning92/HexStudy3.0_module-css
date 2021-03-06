/**
 * Created by Jason on 15/6/1.
 */
'use strict';
window.onresize = function () {
    get_width();
};

$(function (){
    get_width();

    $(".hex-title-line:not(.hex-shrink-button) a").each(function () {
        if($(this).attr("class")=="jiahao"){
            hide_div(this);
        }
    });

    $(document.body).on("click", ".hex-title-line:not(.hex-shrink-button) a", function () {
        hide_div(this);
    });

    function hide_div(thisObj) {
        $(document.body).scroll();
        var div = $(thisObj).parent().next("div");
        if (div.css("display") == "none") {
            div.slideDown(500);
            $(thisObj).removeClass("jiahao");
        }
        else {
            div.slideUp(500);
            $(thisObj).addClass("jiahao");
        }
    }
});
function titleline() {
}

function get_width() {
    $(" .hex-title-line:not(.hex-shrink-button)").each(function () {
        if ($(this).attr("hex-islong") == 1) {
        }
        else {
            var width = $(this).parent().width();
            width = width - parseInt($(this).parent().css("padding-left")) - parseInt($(this).parent().css("padding-right"));
            var num = $(this).children().size();
            var span = $(this).children().first();

            width = width + span.nextAll("hr").width();

            var btn_num = $(this).children("button").size();

            width = width - btn_num * 20;

            for (var i = 0; i < num; i++) {
                width = width - span.width();
                span = span.next();
            }

            width = width - (num - 1) * 10;

            $(this).children("hr").css("width", width - 5 + 'px');
        }
    });
}