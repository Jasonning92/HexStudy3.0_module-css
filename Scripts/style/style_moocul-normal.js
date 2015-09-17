/**
 * Created by Jason on 15/6/25.
 */

$(function () {
    $(document.body).on("click", ".hex-mooc-ul .jianhao", function () {
        up_li(this);
    });

    $(document.body).on("click", ".hex-mooc-ul .jiahao", function () {
        down_li(this);
    });


    $(document.body).on("click", ".hex-about_us-ul .jianhao", function () {
        up_li(this);
    });

    $(document.body).on("click", ".hex-about_us-ul .jiahao", function () {
        down_li(this);
    });

    $(".hex-about_us-ul .jiahao").each(function () {
        $(this).parent().next("div").css("display", "none");
    });

    $(document.body).on("click", ".hex-about_us-ul .resource .title a", function () {
        $(this).parent().next().slideDown(500);
        $(this).next().removeClass("jiahao");
        $(this).next().addClass("jianhao");
    });

    $(document.body).on("mouseenter", ".hex-about_us-ul .title", function () {
        $(this).addClass("active");
    });
    $(document.body).on("mouseleave", ".hex-about_us-ul .title", function () {
        $(this).removeClass("active");
    });
    $(document.body).on("mouseenter", ".hex-about_us-ul .first-title", function () {
        $(this).addClass("active");
    });
    $(document.body).on("mouseleave", ".hex-about_us-ul .first-title", function () {
        $(this).removeClass("active");
    });

    //$(".hex-about_us .hex-about_us-ul").css("left",(document.documentElement.clientWidth - 1180) / 2);
});

function up_li(thisObj) {
    var li = $(thisObj).parent().next("div");
    li.slideUp(500);
    $(thisObj).removeClass("jianhao");
    $(thisObj).addClass("jiahao");
}

function down_li(thisObj) {
    var li = $(thisObj).parent().next("div");
    li.slideDown(500);
    $(thisObj).removeClass("jiahao");
    $(thisObj).addClass("jianhao");
}