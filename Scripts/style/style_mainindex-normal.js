/**
 * Created by Jason on 15/6/30.
 */
$(function(){
    var margin_left = (document.documentElement.clientWidth - 1180) / 2;

    /**
     * 锚点滚动动画
     */
    $(".hex-index-nav a").click(function (event) {
        var index = $(this).attr('data-goto');
        var id = '#' + index;
        $("html,body").animate({scrollTop: $(id).offset().top - 100}, 800);
    });


    var width = document.documentElement.clientWidth;
    var num = $(".hex-select div").children("div").size();

    /**
     * 轮播图样式
     */
    (function (){
        $("div[class='operation']").css("width", width).css("margin-left", -(width - 1180) / 2);

        $(".hex-body .one").css("margin-left", 0);
        $("#1").css("margin-left", (width - 1180) / 2);
        $("div[class='hex-select']").css("left", (width - 1180) / 2);
        $("div[class='hex-search']").css("left", (width - 1180) / 2 + 335);
        $("div[class='hex-button']").css("left", (width - 1180) / 2);

        $("div[class='hex-body']").css("width", 1220 * num + width - 1180);
    })();

    $(document.body).on("click", ".hex-select a", function () {
        get_div(this);
    });

    /**
     * 轮播图
     * @param thisObj
     */
    function get_div(thisObj) {
        var num = $(thisObj).attr("hex-target");
        var body = $("div[class='hex-body']");
        var all = $(".hex-select div").children("div").size();

        $(".hex-select>div>div").each(function () {
            $(this).removeClass("active");
        });
        $(thisObj).parent().addClass("active");

        var i = 0;
        if (num == 1) {
            $("#1").animate({
                "margin-left": (width - 1180) / 2
            }, 500);
            $("#1").addClass("active");
            i = 2;
            while (i <= all) {
                id = "#" + i;
                $(id).animate({
                    "margin-left": 0
                }, 500);
                $(id).removeClass("active");
                i++;
            }
        }
        else {
            i = 1;
            var now = num;
            while (i < num) {
                var id = "#" + i;
                $(id).animate({
                    "margin-left": -(now - 1) * 1170 + margin_left - 50
                }, 500);
                $(id).removeClass("active");
                i++;
                now--;
            }
            id = "#" + num;
            $(id).addClass("active");
            while (num <= all) {
                id = "#" + num;
                $(id).animate({
                    "margin-left": 0
                }, 500);
                num++;
            }
        }
    }
});
function mainindex() {
    /*var margin_left = (document.documentElement.clientWidth - 1180) / 2;

     /!**
     * 锚点滚动动画
     *!/
     $(".hex-index-nav a").click(function (event) {
     var index = $(this).attr('data-goto');
     var id = '#' + index;
     $("html,body").animate({scrollTop: $(id).offset().top - 100}, 800);
     });


     var width = document.documentElement.clientWidth;
     var num = $(".hex-select div").children("div").size();

     /!**
     * 轮播图样式
     *!/
     (function (){
     $("div[class='operation']").css("width", width).css("margin-left", -(width - 1180) / 2);

     $(".hex-body .one").css("margin-left", 0);
     $("#1").css("margin-left", (width - 1180) / 2);
     $("div[class='hex-select']").css("left", (width - 1180) / 2);
     $("div[class='hex-search']").css("left", (width - 1180) / 2 + 335);
     $("div[class='hex-button']").css("left", (width - 1180) / 2);

     $("div[class='hex-body']").css("width", 1220 * num + width - 1180);
     })();

     $(document.body).on("click", ".hex-select a", function () {
     get_div(this);
     });

     /!**
     * 轮播图
     * @param thisObj
     *!/
     function get_div(thisObj) {
     var num = $(thisObj).attr("hex-target");
     var body = $("div[class='hex-body']");
     var all = $(".hex-select div").children("div").size();

     $(".hex-select>div>div").each(function () {
     $(this).removeClass("active");
     });
     $(thisObj).parent().addClass("active");

     var i = 0;
     if (num == 1) {
     $("#1").animate({
     "margin-left": (width - 1180) / 2
     }, 500);
     $("#1").addClass("active");
     i = 2;
     while (i <= all) {
     id = "#" + i;
     $(id).animate({
     "margin-left": 0
     }, 500);
     $(id).removeClass("active");
     i++;
     }
     }
     else {
     i = 1;
     var now = num;
     while (i < num) {
     var id = "#" + i;
     $(id).animate({
     "margin-left": -(now - 1) * 1170 + margin_left - 50
     }, 500);
     $(id).removeClass("active");
     i++;
     now--;
     }
     id = "#" + num;
     $(id).addClass("active");
     while (num <= all) {
     id = "#" + num;
     $(id).animate({
     "margin-left": 0
     }, 500);
     num++;
     }
     }
     }*/
}