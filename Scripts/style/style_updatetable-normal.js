/**
 * Created by Jason on 15/8/5.
 */

/**
 * 上传习题，张高峰使用
 * @param thisObj
 */
function updatetable(thisObj){
    var info_div = $(thisObj).parent("div").parent("td").parent("tr")
        .next(".hex-update-question-info").children("td").children("div");

    var height = 0;
    info_div.children("div").each(function () {
        height = height + $(this).height() + parseInt($(this).css("padding-top"))
            + parseInt($(this).css("padding-bottom"));
    });

    if (info_div.height() == 0) {
        info_div.animate({
            "height": height
        });
        $(thisObj).removeClass("hex-img-plus").addClass("hex-img-minus");
    }
    else {
        info_div.animate({
            "height": 0
        });
        $(thisObj).removeClass("hex-img-minus").addClass("hex-img-plus");
    }
}