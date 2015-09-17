/**
 * Created by Jason on 15/5/28.
 */

/**
 * select组件
 */
$(function () {
    $(document.body).on("click",".hex-drop-down p",function(e){
        showdropdown(this);
        e.stopPropagation();
    });
    $(document.body).on("click",".hex-drop-down div",function(e){
        showdropdown(this);
        e.stopPropagation();
    });


    $(document.body).on("click",".hex-drop-down ul li",function(){
        getdowninfo(this);
    });

    $(document).click(function() {
        $("div[class='hex-drop-down']").each(function () {
            updropdown(this);
        });
    });
});
function dropdown() {
    /* $(document.body).on("click",".hex-drop-down p",function(e){
     showdropdown(this);
     e.stopPropagation();
     });
     $(document.body).on("click",".hex-drop-down div",function(e){
     showdropdown(this);
     e.stopPropagation();
     });


     $(document.body).on("click",".hex-drop-down ul li",function(){
     getdowninfo(this);
     });

     $(document).click(function() {
     $("div[class='hex-drop-down']").each(function () {
     updropdown(this);
     });
     });*/
}

/**
 * 下拉菜单收缩展开
 * @param thisobject 选择器
 */
function showdropdown(thisobject) {
    var ul = $(thisobject).next("ul");
    if (ul.get(0) == undefined) {
        ul = $(thisobject).next().next("ul");
    }
    var img = $(thisobject).next("div");
    if (img.get(0) == undefined) {
        img = $(thisobject);
    }
    //展开
    if (ul.css("display") == "none") {
        ul.slideDown("fast");
        img.addClass("down")
    } else {
        ul.slideUp("fast");
        img.removeClass("down");
    }
}

/**
 * 收起下拉菜单
 * @param thisObj 选择器
 */
function updropdown(thisObj){
    var ul =  $(thisObj).children("ul");
    var img = $(thisObj).children("div");
    ul.slideUp("fast");
    img.removeClass("down");
}

/**
 * 获取点击的值
 * @param thisObj 选择器
 * @param callback 回调函数
 */
function getdowninfo(thisObj,callback) {
    var p = $(thisObj).parent().prev().prev("p");
    var txt = $(thisObj).text();
    var key = $(thisObj).attr("hex-key");
    p.attr("hex-value",key);
    p.html(txt);
    $(thisObj).parent().hide();
    p.next().removeClass("down");

    if(callback && callback instanceof Function) //判断是否传参，以及参数类型
        callback();
}