/**
 * Created by Jason on 15/6/24.
 */
$(function(){
    var width;

    $("body").css("overflow-x", "hidden");

    get_schedule_width();

    $(document.body).on("click", ".hex-schedule .list .left", function () {
        right_div(this);
    });

    $(document.body).on("click", ".hex-schedule .list .right", function () {
        left_div(this);
    });

    /**
     * 将高统一
     */
    function get_schedule_width() {
        var width_main = $("#main_div").children().first().width();
        var count = 0;
        var all = $("div[class='hex-schedule']").children().children("div").size();
        var first = $("div[class='hex-schedule']").children().children("div").first();
        var height = 0;

        if (width_main == 1180) {
            count = 5;
            width = 224;
            $(".hex-schedule .list .right").css("left", 1185);
        }
        else {
            count = 4;
            width = 219;
            $(".hex-schedule .list .right").css("left", 923);
        }
        var i = 0;
        if (all > count) {
            while (i < all) {
                if (height < first.height()) {
                    height = first.height();
                }
                if (i < count) {
                    first.addClass("active");
                    first.css("width", width);
                }
                else {
                    first.addClass("actived");
                }
                i++;
                first = first.next();
            }
        }
        else{
            $(".hex-schedule .list .left").css("display", "none");
            $(".hex-schedule .list .right").css("display", "none");
            while (i < all) {
                if (height < first.height()) {
                    height = first.height();
                }
                i++;
                first = first.next();
            }
        }
        i = 0;
        first = $("div[class='hex-schedule']").children().children("div").first();
        while (i < all) {
            first.children(".caption").css("height", height - 50);
            i++;
            first = first.next();
        }
    }

    function left_div(thisObj) {
        var first_week = $(thisObj).nextAll(".active").first();
        var first_ed_week = $(thisObj).nextAll(".active").last().next();

        if ($(thisObj).nextAll(".actived").last().next().attr("class") != "week active") {
            $("a[class='left']").css("display", "");
            /*first_week.animate({
             "width": 0,
             "margin-right": "-5px"
             }, 500);*/
            first_week.css("display","none");
            first_week.removeClass("active");
            first_week.addClass("actived");
            /*first_ed_week.animate({
             "width": width,
             "margin-right": "10px"
             }, 500);*/
            first_ed_week.fadeIn(500);
            first_ed_week.addClass("active");
            first_ed_week.removeClass("actived");
        }
        else {
            $(thisObj).css("display", "none");
        }
    }

    function right_div(thisObj) {
        var first_week = $(thisObj).nextAll(".active").last();
        var first_ed_week = $(thisObj).nextAll(".active").first().prev();

        if ($(thisObj).nextAll(".active").first().prev().attr("class") != "right") {
            $("a[class='right']").css("display", "");
            /*first_ed_week.animate({
             "width": width,
             "margin-right": "10px"
             }, 500);*/
            first_ed_week.fadeIn(500);
            first_ed_week.addClass("active");
            first_ed_week.removeClass("actived");
            /*first_week.animate({
             "width": 0,
             "margin-right": "-5px"
             }, 500);*/
            first_week.css("display","none");
            first_week.removeClass("active");
            first_week.addClass("actived");
        }
        else {
            $(thisObj).css("display", "none");
        }
    }
})
function schedule() {
}



