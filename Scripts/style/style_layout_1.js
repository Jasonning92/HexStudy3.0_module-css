/**
 * Created by Jason on 15/5/27.
 */

/**
 * 模板一的三种样式
 */
function layout_1(is_getwidth) {
    if (is_getwidth == false) {
        $("#main_div").css("float", "none").css("margin", "40px auto 0").css("padding", "0 0 50px 0");
    }
    else if(is_getwidth=="exercises"){
        $("#main_div").css("float", "none").css("margin", "40px auto 0").css("padding", "0");
    }
    else if(is_getwidth=="search"){
        $("#main_div").css("float", "none").css("margin", "138px auto 0").css("padding", "0 0 50px 0");
    }
}