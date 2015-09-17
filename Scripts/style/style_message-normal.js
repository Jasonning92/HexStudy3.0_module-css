/**
 * Created by Jason on 15/8/12.
 */
$(function () {
    getheight();

    $(document.body).on("click", ".hex-message-index-body .body .one .title .hex-little-btn", function () {
        var info_div = $(this).parent("div").parent("div").next("div");

        var height = info_div.attr("data-height");

        if (info_div.height() == 0) {
            info_div.animate({
                "height": height
            });
            $(this).removeClass("hex-img-plus").addClass("hex-img-minus");
        }
        else {
            info_div.animate({
                "height": 0
            });
            $(this).removeClass("hex-img-minus").addClass("hex-img-plus");
        }
    });

    $(document.body).on("click", ".hex-message-index-body .body .one", function () {
        var info_div = $(this).children(".info");

        var height = info_div.attr("data-height");

        if (info_div.height() == 0) {
            info_div.animate({
                "height": height
            });
            $(this).find("a.hex-little-btn-20").removeClass("hex-img-plus").addClass("hex-img-minus");
        }
        else {
            info_div.animate({
                "height": 0
            });
            $(this).find("a.hex-little-btn-20").removeClass("hex-img-minus").addClass("hex-img-plus");
        }
    });

    /**
     * 获取内容高
     */
    function getheight(){
        $(".hex-message-index-body .body .one .info").each(function () {
            $(this).attr("data-height", $(this).height() + 35).css("height", 0);
        });
    }
});

/**
 * 收缩展开，徐正龙使用
 * @param thisobj 不带$的this
 */
function　selsct_receiver(thisobj){
    var second = $(thisobj).parent("div").next("div");
    var num = second.children("div").size();

    if (second.height() == 0) {
        second.animate({
            "height": num * 40
        });
        $(thisobj).removeClass("hex-img-plus").addClass("hex-img-minus");
    }
    else {
        second.animate({
            "height": 0
        });
        $(thisobj).removeClass("hex-img-minus").addClass("hex-img-plus");
    }
}