/**
 * Created by Jason on 15/6/4.
 */
'use strict';
$(function (){
    $("button[data-toggle='modal']").click(function show() {
        getlocation($(this).attr("data-target"));
    });
    $("a[data-toggle='modal']").click(function show() {
        getlocation($(this).attr("data-target"));
    });
});

function alert_win() {
    /*$("button[data-toggle='modal']").click(function show() {
     getlocation($(this).attr("data-target"));
     });
     $("a[data-toggle='modal']").click(function show() {
     getlocation($(this).attr("data-target"));
     });*/
}

/**
 * 获取模态窗位置，将它居中
 * @param thisObj 选择器，String
 */
function getlocation(thisObj) {
    var window_height = document.documentElement.clientHeight;
    var window_width = document.documentElement.clientWidth;

    var div_modaldialog = $(thisObj).children("div");
    var div_modalcontent = $(thisObj).children("div").children("div");
    var num = div_modaldialog.children("div").size();

    if (div_modaldialog.attr("hex-location") == 0) {
    }
    else {
        var height = 0;
        var width = 0;
        var margin = 0;
        margin = div_modaldialog.attr("hex-margin") == undefined ? 0 : div_modaldialog.attr("hex-margin");

        var div = div_modalcontent.first();
        for (var i = 0; i < num; i++) {
            if (i != 0) {
                div.css("margin-top", margin + 'px');
            }
            if (width < parseInt(div.attr("hex-width"))) {
                width = parseInt(div.attr("hex-width"));
            }
            div.css("height", div.attr("hex-height"));
            div.css("width", div.attr("hex-width"));
            height = height + parseInt(div.attr("hex-height"));
            div = div.next();
        }

        div = div_modalcontent.first();
        for (i = 0; i < num; i++) {
            div.css("margin-left", (width - parseInt(div.attr("hex-width"))) / 2 + 'px');
            div = div.next();
        }

        var margin_top = (window_height - height - margin * (num - 1)) / 2;
        var margin_left = (window_width - width) / 2;


        div_modaldialog.css("margin-top", margin_top < 0 ? '30px' : margin_top);
        div_modaldialog.css("margin-left", margin_left);
        div_modaldialog.css("height", height - margin * (num - 1));
        div_modaldialog.css("width", width);

        var close_btn = $(thisObj).find("a[class='hex-alert-close']");
        close_btn.css("top", 0);
        close_btn.css("left", width + 10 + "px");
    }
}