/**
 * Created by Jason on 15/6/29.
 */
'use strict';
$(function () {
    /**
     * 提示使用的地址
     * @type {string}
     */
    var hint_url = '//static.hexstudy.com/Scripts/hint.xml';
    //var hint_url = 'http://124.202.214.142:8008/Scripts/hint.xml';

    var ul = $("#user").parent().parent();
    var width = ul.children().first().width() + ul.children().first().next().width() - 18;
    $("ul[who='user']").css("width", width);

    /*用户头像下拉菜单*/
    $(document.body).on("click", "a[id='user']", function (e) {
        if ($("ul[who='user']").css('display') == 'none') {
            $("ul[who='user']").css("display", "block");
        }
        else {
            $("ul[who='user']").css("display", "none");
        }
        e.stopPropagation();
    });

    $(document.body).on("mouseenter", "a[id='user']", function () {
        $("ul[who='user']").css("display", "block");
    });

    $(document.body).on("mouseleave", "ul[who='user']", function () {
        $("ul[who='user']").css("display", "none");
    });

    $(document.body).on("mouseenter", ".hex-info", function () {
        $(this).find(".hex-info-dropdown").css("display", "block");
    });

    $(document.body).on("mouseleave", ".hex-info", function () {
        $(this).find(".hex-info-dropdown").css("display", "none");
    });

    $(document).click(function () {
        $("ul[who='user']").css("display", "none");
    });

    /* 回top */
    goto_top();

    /*/!* 判断是否是IE浏览器 *!/
     var userAgent = navigator.userAgent.toLowerCase();
     jQuery.browser = {
     version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
     safari: /webkit/.test(userAgent),
     opera: /opera/.test(userAgent),
     msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
     mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
     };*/
    //alert(userAgent);
    /*function isIE() {
     if (!!window.ActiveXObject || "ActiveXObject" in window)
     return true;
     else
     return false;
     }*/

    /*if ($(".error-IE").size() == 0) {
     var div_error = '<div class="error-IE">' +
     '<span>您使用的是IE浏览器，为了更好地体验效果，请下载<a href="http://www.firefox.com.cn">火狐浏览器</a>或者<a href="http://www.google.cn/chrome/browser">谷歌浏览器</a></span>' +
     '<div class="hex-close">' +
     '<a title="关闭" href="javascript:void (0)"></a>' +
     '</div>' +
     '</div>';
     $("body").append(div_error);
     }*/
    var isIE = !!window.ActiveXObject;
    var isIE6 = isIE && !window.XMLHttpRequest;
    var isIE8 = isIE && !!window.document.documentMode;
    var isIE7 = isIE && !isIE6 && !isIE8;

    if (!isIE6 && !isIE7 && !isIE8) {
        $(".error-IE").css("height", 0);
    }
    /*if (!isIE()) {
     $(".error-IE").css("height", 0);
     }*/
    $(document.body).on("click", ".error-IE .hex-close a", function () {
        $(".error-IE").animate({
            "height": "0px"
        });
    });

    /**
     * 回顶部
     */
    function goto_top() {
        var li_num = $(".hex-page-number").children("ul").children("li").size();

        var top = 0;
        if (li_num == 0) {
            top = 100;
        }
        else {
            top = 30 + li_num * 26;
        }

        var div_string = "<div class='hex-goto-top' style='bottom: " + top + "px;'><a>TOP</a></div>";

        var div = $(div_string);

        $("#main_div").after(div);

        $(window).scroll(function () {
            var tip_div = $(".hex-goto-top");

            if ($(window).scrollTop() > 10) {
                tip_div.fadeIn(500);
            }
            else {
                tip_div.fadeOut(500);
            }

        });

        $(document.body).on("click", ".hex-goto-top", function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    }

    /**
     * 是否有hint，若有加载进来
     */
    (function () {
        var now_url = window.location.href.toString();

        //我的课程
        if (now_url.indexOf("Course/MyCourse") >= 0) {
            getinfo("MyCourse");
        }
        //新建课程页面
        else if (now_url.indexOf("Course/CreateSet") >= 0) {
            getinfo("CreateSet");
        }
        //作业测试
        else if (now_url.indexOf("HTE/Index") >= 0) {
            getinfo("HTE");
        }

        /**
         * 获取xml中的内容
         * @param key 页面的url中特定的一部分，区分页面
         */
        function getinfo(key) {
            var hint_a = '<a class="hex-hint"></a>';
            var hintbody_div = '<div class="hex-hint-body"></div>';

            $("#main_div").after(hint_a).after(hintbody_div);

            $.ajax({
                url: hint_url,
                dataType: 'xml',
                type: 'GET',
                timeout: 2000,
                error: function (xml) {
                    console.log("加载XML 文件出错！");
                },
                success: function (xml) {
                    var body_div = $(".hex-hint-body");

                    var hint = $(xml).find("hint");
                    hint.children("page").each(function () {
                        var page = $(this);
                        if (page.attr("id") == key) {
                            var num = page.children("num").text();
                            for (var i = 1; i <= num; i++) {
                                var info = page.children("info" + i);
                                var title = info.children("title").text();
                                var body = info.children("body").text();

                                var info_div = '<div><span class="hex-font-lightgray"><span class="hex-font-gray">' + title + '</span>' + body + '</span> </div>';
                                body_div.append(info_div);
                            }
                        }
                    });
                }
            });
        }

        $(document.body).on("mouseenter", ".hex-hint", function () {
            $(".hex-hint-body").fadeIn(500);
        });
        $(document.body).on("mouseleave", ".hex-hint", function () {
            $(".hex-hint-body").fadeOut(500);
        });
    })();
});

/**
 * 设置最小高
 */
$(function () {
    var height_window = document.documentElement.clientHeight;
    height_window = height_window - 40;
    if ($("footer[class='hex-publisher-foot-0']").length == 1) {
        height_window = height_window - parseInt($("footer[class='hex-publisher-foot-0']").css("height"));
    }
    if ($("footer[class='hex-publisher-foot-1']").length == 1) {
        height_window = height_window - parseInt($("footer[class='hex-publisher-foot-1']").css("height"));
    }
    if ($("footer[class='hex-publisher-foot-2']").length == 1) {
        height_window = height_window - parseInt($("footer[class='hex-publisher-foot-2']").css("height"));
    }
    if ($("footer[class='hex-footer']").length == 1) {
        height_window = height_window - parseInt($("footer[class='hex-footer']").css("height"));
    }

    $("#main_div").css("min-height", height_window);
});