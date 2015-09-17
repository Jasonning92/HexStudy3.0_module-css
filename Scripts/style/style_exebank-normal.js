/**
 * Created by Jason on 15/6/16.
 */

/**
 * 未使用组件，组卷-选择习题页更多按钮
 */
$(function () {
    $(document.body).on("click", ".hex-exe-bank-body a", function () {
        show_div(this);
    });

    function show_div(thisObj) {
        var div = $(thisObj).prev("div");

        if (div.css("height") == "40px") {
            div.css("height","auto");
            $(thisObj).addClass("up");
        }
        else {
            div.css("height","40px");
            $(thisObj).removeClass("up");
        }
    }
});
function exebank() {
    /*$(document.body).on("click", ".hex-exe-bank-body a", function () {
     show_div(this);
     });

     function show_div(thisObj) {
     var div = $(thisObj).prev("div");

     if (div.css("height") == "40px") {
     div.css("height","auto");
     $(thisObj).addClass("up");
     }
     else {
     div.css("height","40px");
     $(thisObj).removeClass("up");
     }
     }*/
}