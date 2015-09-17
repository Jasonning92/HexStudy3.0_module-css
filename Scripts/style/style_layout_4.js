/**
 * Created by Jason on 15/6/25.
 */

/**
 * 模板4样式
 */
$(function (){
    $("#main_div").css("padding-bottom", "0").css("margin-top", 40 + "px").css("background", "#fff");

    var height = ($(".hex-person-body").height() + 40 + 105 + 20) > document.documentElement.clientHeight ?
        ($(".hex-person-body").height() + 40 + 105 + 20) : document.documentElement.clientHeight;
    $(".binding").css("height", height - 40 - 105 - 270 - 55 - 55);
});

function layout_4() {
}