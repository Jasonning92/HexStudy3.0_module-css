/**
 * Created by Jason on 15/6/2.
 */
'use strict';
/**
 * 拖动窗口重新计算
 */
window.onresize = function () {
    getlacation();
};
/**
 * 注册事件方法
 */
$(function(){
    $("div .hex-chapterbtn").click(function () {
        gotochapter_list(this);
    });
    $("div .hex-point").click(function () {
        gotopoint_list(this);
    });
    $("div .hex-note").click(function () {
        gotonote_list(this);
    });
    $("div .hex-bookmark").click(function () {
        gotobookmark_list(this);
    });
    $(".hex-search-input input").click(function () {
        becomebig();
    });
    $(".hex-search-input a").click(function () {
        becomesmall();
    });

    $(document.body).on('keypress', ".hex-search-input input", function (event) {
        if (event.keyCode == "13") {
            gotosearch_list();
        }
    });

    $(".hex-ebook-goto-icon a").click(function (e) {
        e.stopPropagation();
        if($(".hex-ebook-goto-icon .hex-ebook-goto_page").css("display")=="none"){
            $(".hex-ebook-goto-icon .hex-ebook-goto_page").fadeIn(500);
            $(".hex-ebook-goto-icon .triangle-up").fadeIn(500);
        }
        else{
            $(".hex-ebook-goto-icon .hex-ebook-goto_page").fadeOut(500);
            $(".hex-ebook-goto-icon .triangle-up").fadeOut(500);
        }
    });
    $(document).click(function() {
        $(".hex-ebook-goto-icon .hex-ebook-goto_page").fadeOut(500);
        $(".hex-ebook-goto-icon .triangle-up").fadeOut(500);
    });

    getlacation();
});
function booknavbar() {
    /*$("div .hex-chapterbtn").click(function () {
     gotochapter_list(this);
     });
     $("div .hex-point").click(function () {
     gotopoint_list(this);
     });
     $("div .hex-note").click(function () {
     gotonote_list(this);
     });
     $("div .hex-bookmark").click(function () {
     gotobookmark_list(this);
     });
     $(".hex-search-input input").click(function () {
     becomebig();
     });
     $(".hex-search-input a").click(function () {
     becomesmall();
     });

     $(document.body).on('keypress', ".hex-search-input input", function (event) {
     if (event.keyCode == "13") {
     gotosearch_list();
     }
     });

     $(".hex-ebook-goto-icon a").click(function (e) {
     e.stopPropagation();
     if($(".hex-ebook-goto-icon .hex-ebook-goto_page").css("display")=="none"){
     $(".hex-ebook-goto-icon .hex-ebook-goto_page").fadeIn(500);
     $(".hex-ebook-goto-icon .triangle-up").fadeIn(500);
     }
     else{
     $(".hex-ebook-goto-icon .hex-ebook-goto_page").fadeOut(500);
     $(".hex-ebook-goto-icon .triangle-up").fadeOut(500);
     }
     });
     $(document).click(function() {
     $(".hex-ebook-goto-icon .hex-ebook-goto_page").fadeOut(500);
     $(".hex-ebook-goto-icon .triangle-up").fadeOut(500);
     });

     getlacation();*/
}

/**
 * 计算电子书各个模块位置
 */
function getlacation() {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var nav = $("div[class='hex-book-navbar']");
    var content = $("div[class='hex-ebook-content']");
    var body = $("div[class='hex-ebook-body']");
    var page = $("div[class='hex-ebook-pagedown']");
    var pageup = $("div[class='hex-ebook-pageup']");
    var iframe = $(".hex-ebook-content iframe");
    nav.css("height", height - 40);
    content.css("width", width - 300 - 40 - 20);
    body.css("height", height - 40).css("width", width - 40);
    page.css("width", width - 300 - 40 - 20);
    pageup.css("width", width - 300 - 40 - 20);
    iframe.css("min-height", height - 40 - 40);

    $("div[class='hex-ebook-teach-icon']").css("left", width - 70);
    $("div[class='hex-ebook-collect-icon']").css("left", width - 70);
    $("div[class='hex-ebook-goto-icon']").css("left",width-70);


    $(".hex-search-result-list").children("div").first().next().children().first().next().css("height", height - 40 - 244);
    $(".hex-chapter-list").css("height", height - 40 - 164);
    $(".hex-point-list").css("height", height - 40 - 164);
    $(".hex-note-list").css("height", height - 40 - 164);
    $(".hex-bookmark-list").css("height", height - 40 - 164);
    $(".hex-search-list").css("height", height - 40 - 164);

    if ($(".free-chapter").size() != 0) {
        $(".hex-chapter").css("margin-top", 0);
    }
    else {
        $(".hex-chapter").css("margin-top", 20);
    }
}

/**
 * 搜索框变大动画
 * @param thisObj
 */
function becomebig() {
    //左侧4图标div
    $("div .hex-tag").children().first().animate({
        width: 0,
    }, 1000);
    //右侧输入框div
    $(".hex-search-input").animate({
        width: "295px"
    }, 1000);
    //input
    $(".hex-search-input").find("input").animate({
        width: "279px",
    }, 1000);

    listhide("hex-search-list");
    $("div .hex-search-list").fadeIn(1000);
}

/**
 * 搜索框变小动画
 * @param thisObj
 */
function becomesmall() {
    //左侧4图标div
    $("div .hex-tag").children().first().animate({
        width: "150px"
    }, 1000);
    //右侧输入框div
    $(".hex-search-input").animate({
        width: "140px"
    }, 1000);
    //input
    $(".hex-search-input").find("input").animate({
        width: "130px"
    }, 1000);
    gotochapter_list(".hex-tag div .hex-chapterbtn");
}

/**
 * 展开折叠章节
 * @param thisObj
 */
function hidesection(thisObj) {
    if ($(thisObj).parent("div").nextAll("ul").css("display") != "none") {
        //$(thisObj).parent("div").nextAll("div").slideUp(1000);
        $(thisObj).parent("div").nextAll("ul").slideUp(1000);
        $(thisObj).parent("div").children(".hex-hide-btn").removeClass("hex-jianhao");
        $(thisObj).parent("div").children(".hex-hide-btn").addClass("hex-jiahao");
    }
    else {
        //$(thisObj).parent("div").nextAll("div").slideDown(1000);
        $(thisObj).parent("div").nextAll("ul").slideDown(1000);
        $(thisObj).parent("div").children(".hex-hide-btn").removeClass("hex-jiahao");
        $(thisObj).parent("div").children(".hex-hide-btn").addClass("hex-jianhao");
    }
}

/**
 * 只展开章节，徐正龙使用
 */
function opensection(thisObj) {
    if ($(thisObj).parent("div").nextAll("ul").css("display") == "none") {
        $(thisObj).parent("div").nextAll("ul").slideDown(1000);
        $(thisObj).parent("div").children(".hex-hide-btn").removeClass("hex-jiahao");
        $(thisObj).parent("div").children(".hex-hide-btn").addClass("hex-jianhao");
    }
}

/**
 * 切换章节列表、笔记列表、书签列表、知识点列表
 * @param name
 */
function listhide(name) {
    if ($("div .hex-chapter-list").css("display") != "none" && name != "hex-chapter-list") {
        $("div .hex-chapter-list").fadeOut(1000);
        $("div .hex-chapter-active").removeClass("hex-chapter-active");
    }
    if ($("div .hex-point-list").css("display") != "none" && name != "hex-point-list") {
        $("div .hex-point-list").fadeOut(1000);
        $("div .hex-point-active").removeClass("hex-point-active");
    }
    if ($("div .hex-note-list").css("display") != "none" && name != "hex-note-list") {
        $("div .hex-note-list").fadeOut(1000);
        $("div .hex-note-active").removeClass("hex-note-active");
    }
    if ($("div .hex-bookmark-list").css("display") != "none" && name != "hex-bookmark-list") {
        $("div .hex-bookmark-list").fadeOut(1000);
        $("div .hex-bookmark-active").removeClass("hex-bookmark-active");
    }
    if ($("div .hex-search-list").css("display") != "none" && name != "hex-search-list") {
        $("div .hex-search-list").fadeOut(1000);
    }
    if ($("div .hex-search-result-list").css("display") != "none" && name != "hex-search-result-list") {
        $("div .hex-search-result-list").fadeOut(1000);
    }
}

/**
 * 切换到章节列表
 * @param thisObj 选择器
 */
function gotochapter_list(thisObj) {
    listhide("hex-chapter-list");
    $("div .hex-chapter-list").fadeIn(1000);
    if (thisObj instanceof jQuery) {
        thisObj.addClass("hex-chapter-active");
    }
    else {
        $(thisObj).addClass("hex-chapter-active");
    }
}

/**
 * 切换到知识点列表
 * @param thisObj 选择器
 */
function gotopoint_list(thisObj) {
    listhide("hex-point-list");
    $("div .hex-point-list").fadeIn(1000);
    $(thisObj).addClass("hex-point-active");
}

/**
 * 切换到笔记列表
 * @param thisObj 选择器
 */
function gotonote_list(thisObj) {
    listhide("hex-note-list");
    $("div .hex-note-list").fadeIn(1000);
    $(thisObj).addClass("hex-note-active");
}

/**
 * 切换到书签列表
 * @param thisObj 选择器
 */
function gotobookmark_list(thisObj) {
    listhide("hex-bookmark-list");
    $("div .hex-bookmark-list").fadeIn(1000);
    $(thisObj).addClass("hex-bookmark-active");
}

/**
 * 显示搜索结果list
 */
function gotosearch_list() {
    var dom = $(" .hex-search-result-list");
    if (dom.css("display") == "none") {
        dom.fadeIn(1000);
        listhide("hex-search-result-list");
    }
}