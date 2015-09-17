/**
 * Created by Jason on 15/5/27.
 */
'use strict';
$(function (){
    var length = $(".hex-classes").first().parent().width();

    var oneclass = parseInt($(".hex-classes").first().width()) + 12;
    var num = Math.floor((length + 10) / oneclass);//一行可以放多少个
    var object = $(".hex-classes").parent().children().first();
    var classnum = $(".hex-classes").parent().children().size();

    var height = 0;
    for (var i = 0; i < classnum; i++) {
        if (height < object.height()) {
            height = object.height();
        }
        object = object.next();
    }

    object = $("div .hex-classes").parent().children().first();
    for (i = 0; i < classnum; i++) {
        object.css("height", height);
        object = object.next();
    }

    $("img.lazy").lazyload();
});

/**
 * 将高度统一
 */
function booklist() {
    /*var length = $(".hex-classes").first().parent().width();

     var oneclass = parseInt($(".hex-classes").first().width()) + 12;
     var num = Math.floor((length + 10) / oneclass);//一行可以放多少个
     var object = $(".hex-classes").parent().children().first();
     var classnum = $(".hex-classes").parent().children().size();

     var height = 0;
     for (var i = 0; i < classnum; i++) {
     if (height < object.height()) {
     height = object.height();
     }
     object = object.next();
     }

     object = $("div .hex-classes").parent().children().first();
     for (i = 0; i < classnum; i++) {
     object.css("height", height);
     object = object.next();
     }

     $("img.lazy").lazyload();*/
}