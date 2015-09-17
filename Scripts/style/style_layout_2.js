/**
 * Created by Jason on 15/5/27.
 */

/**
 * 模板2中的动画
 */
$(function (){
    var time = 1000;
    var my_height = 0;
    var prompt_height = 0;
    var syllabus_height = 0;

    prompt_height = $("li[class='hex-prompt']").height();
    syllabus_height = $("li[class='hex-syllabus']").height();

    my_height = $("div[class='hex-left-info']").children("ul").height();

    is_tooheight(my_height);
    $('#left-button').children().first().children().first().next().css("display", "none");
    $('#left-button').children().first().children().first().next().next().css("display", "none");


    /*左侧按钮*/
    /* 这个鬼动画到底要怎么弄啊！！-ning */
    $(".hex-left-button ul .active-button").mouseenter(function () {
        showleftbutton(this);
    });
    $(document).click(function () {
        $(".hex-left-button ul .active-button").each(function () {
            hideleftbutton(this);
        });
    });

    /*$(".hex-left-button ul li").mouseleave(function () {
     hideleftbutton(this);
     });*/


    $("li .hex-shrink-button a").click(function () {
        hint_shrink(this);
        is_tooheight(my_height);
    });

    $("li .left a").click(function () {
        showleft(this);
    });

    $("li .right a").click(function () {
        showright(this);
    });

    /**
     *  左侧滚动条
     */
    $("div[class='hex-left-info']").scroll(function () {
        var height_top = $(this).scrollTop();
        //alert(height_top + "    " + (my_height - 270));
        if (height_top >= (my_height - document.documentElement.clientHeight + 60)) {
            $("div[class='left-bttom']").css("display", "none");
        }
        else {
            $("div[class='left-bttom']").css("display", "");
        }
    });

    /**
     *  无分页，content就margin-right=20px
     */
    if ($("div[class='hex-page-number']").size() == 0) {
        $(" .hex-content_2").css("padding-right", 20);
        $(".hex-question .hex-question-body .body .one .p").css("width", document.documentElement.clientWidth - 290 - 20 - 80);
    }
    else {
        $(".hex-question .hex-question-body .body .one .p").css("width", document.documentElement.clientWidth - 290 - 20 - 80 - 60);
    }
    $(".hex-question .hex-question-body .body .one").each(function () {
        if ($(this).children(".title").height() < $(this).children(".p").height()) {
            $(this).children(".title").css("height", 200);
        }
    });

    /**
     * 注册左侧箭头事件
     */
    $("a[class='left-bttom']").click(function () {
        $(".hex-left-info").animate({
            scrollTop: $(".hex-left-info").width() + 100
        }, 500);
    });


    /**
     * 点击按钮滚动到底部
     */
    $(".hex-left-info").scroll(function () {
        var $this = $(this),
            viewH = $(this).height(),//可见高度
            contentH = $(this).get(0).scrollHeight,//内容高度
            scrollTop = $(this).scrollTop();//滚动高度
        //if(contentH - viewH - scrollTop <= 100) { //到达底部100px时,加载新内容
        if (scrollTop / (contentH - viewH) >= 0.95) { //到达底部100px时,加载新内容
            $("a[class='left-bttom']").css("display", "none");
        }
        else {
            $("a[class='left-bttom']").css("display", "");
        }
    });


    /**
     * 左侧按钮动画
     */
    function showleftbutton(thisObj) {
        var num = $(thisObj).parent().children().size();
        if (num == 3) {

            $(thisObj).next().slideDown(500);
            $(thisObj).next().next().slideDown(500, function () {
                $(this).parent().children("li").animate({
                    "width": "80px",
                    "height": "80px"
                }, 500);
                $(this).parent().children("li").children("a").animate({
                    "width": "80px",
                    "height": "80px"
                }, 500);
                $(this).parent().children("li").children("a").children("img").animate({
                    "top": "25px",
                    "left": "25px"
                }, 500);
                $(this).parent().children("li").children("a").each(function () {
                    $(this).children("span").animate({
                        "opacity": "1"
                    }, 500);
                });
            });
        }
        else {
            $(thisObj).next().slideDown(500, function () {
                $(this).parent().children("li").animate({
                    "width": "80px",
                    "height": "80px"
                }, 500);
                $(this).parent().children("li").children("a").animate({
                    "width": "80px",
                    "height": "80px"
                }, 500);
                $(this).parent().children("li").children("a").children("img").animate({
                    "top": "25px",
                    "left": "25px"
                }, 500);
                $(this).parent().children("li").children("a").each(function () {
                    $(this).children("span").animate({
                        "opacity": "1"
                    }, 500);
                });
            });
        }
    }

    /**
     * 我的课程等三个button动画
     * @param thisObj
     */
    function hideleftbutton(thisObj) {
        $(thisObj).parent().children("li").children("a").each(function () {
            $(this).children("span").animate({
                "opacity": "0"
            }, 500);
        });
        var num = $(thisObj).parent().children().size();

        if (num == 3) {
            $(thisObj).next().slideUp(500);
            $(thisObj).next().next().slideUp(500, function () {
                $(this).parent().children("li").animate({
                    "width": "60px",
                    "height": "60px"
                }, 500);
                $(this).parent().children("li").children("a").animate({
                    "width": "60px",
                    "height": "60px"
                }, 500);
                $(this).parent().children("li").children("a").children("img").animate({
                    "top": "15px",
                    "left": "15px"
                }, 500);
            });
        }
        else {
            $(thisObj).next().slideUp(500, function () {
                $(this).parent().children("li").animate({
                    "width": "60px",
                    "height": "60px"
                }, 500);
                $(this).parent().children("li").children("a").animate({
                    "width": "60px",
                    "height": "60px"
                }, 500);
                $(this).parent().children("li").children("a").children("img").animate({
                    "top": "15px",
                    "left": "15px"
                }, 500);
            });
        }
    }

    /**
     * 左侧收缩展开+/-
     * @param thisObj
     */
    function hint_shrink(thisObj) {
        if ($(thisObj).parent().next().css("display") == 'none') {
            $(thisObj).parent().next().slideDown(500);
            $(thisObj).removeClass("jiahao");
            if ($(thisObj).parent().parent().get(0).toString() == $("li[class='hex-prompt']").get(0).toString()) {
                my_height = my_height + prompt_height;
            }
            else {
                my_height = my_height + syllabus_height;
            }
        } else {
            $(thisObj).parent().next().slideUp(500);
            $(thisObj).addClass("jiahao");
            if ($(thisObj).parent().parent().get(0).toString() == $("li[class='hex-prompt']").get(0).toString()) {
                my_height = my_height - prompt_height;
            }
            else {
                my_height = my_height - syllabus_height;
            }
        }
    }

    /**
     * 课程表左边按钮
     * @param thisObj
     */
    function showleft(thisObj) {
        var num = $("#style-syllabus").children().size() - 1;//一共有num周数据
        var first = $("#style-syllabus").children().first();//找到第一周的数据
        var thisul = $(thisObj).parent().parent().parent();
        if (thisul.prev("ul").get(0) != undefined) {
            //隐藏已有的
            $(thisObj).parent().parent().css("display", "none");
            $(thisObj).parent().parent().next().css("display", "none");
            $(thisObj).parent().parent().next().next().css("display", "none");

            //渐进出现新的
            thisul.prev("ul").children().first().css("display", "block");
            thisul.prev("ul").children().first().next().fadeIn(time);
            thisul.prev("ul").children().first().next().next().fadeIn(time);
        }
    }

    /**
     * 课程表右边按钮
     * @param thisObj
     */
    function showright(thisObj) {
        var thisul = $(thisObj).parent().parent().parent();
        if (thisul.next("ul").get(0) != undefined) {
            //隐藏已有的
            $(thisObj).parent().parent().css("display", "none");
            $(thisObj).parent().parent().next().css("display", "none");
            $(thisObj).parent().parent().next().next().css("display", "none");

            //渐进出现新的
            thisul.next("ul").children().first().css("display", "block");
            thisul.next("ul").children().first().next().fadeIn(time);
            thisul.next("ul").children().first().next().next().fadeIn(time);
        }
    }

    /**
     * 是否显示左侧箭头（下方提示）
     * @param height
     */
    function is_tooheight(height) {
        if ((document.documentElement.clientHeight - 40) > height) {
            $("a[class='left-bttom']").css("display", "none");
        }
        else {
            $("a[class='left-bttom']").css("display", "");
        }
    }
});
function layout_2() {
}

