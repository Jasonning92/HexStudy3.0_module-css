/**
 * Created by Jason on 15/9/10.
 */
$(function () {
    var window_width = document.documentElement.clientWidth;
    var window_height = document.documentElement.clientHeight;
    $("div.hex-examples-list").css("right", (window_width - 1180) / 2);
    $(".main_content").css("padding-bottom", window_height - 50 - $(".main_content").children().last().height());
    $(".main_content_tree .tree").css("height", window_height - 94);

    /**
     * 锚点滚动动画
     */
    $("body .hex-examples-list a").click(function (event) {
        var index = $(this).attr('data-goto');
        var id = '#' + index;
        $("html,body").animate({scrollTop: $(id).offset().top - 50}, 800);
    });

    /**
     * 监控属于哪个模块
     */
    window.onscroll = function () {
        var height_top = $(this).scrollTop();
        var i = 1;
        while ($("#" + i) && i < 1000) {
            var now = "#" + i;
            var next = "#" + (i + 1);
            if ($(next).size() == 0) {
                $(".hex-examples-list .active").removeClass('active');
                $("a[data-goto='" + (i) + "']").addClass("active");
                break;
            }
            else if ($("#1").offset().top - 60 > height_top) {
                i = 1;
                $(".hex-examples-list .active").removeClass('active');
                $("a[data-goto='" + (i) + "']").addClass("active");
                break;
            }
            else if ($(now).offset().top - 60 <= height_top
                && $(next).offset().top - 60 > height_top
                && $(now).attr('class') != 'active') {
                $(".hex-examples-list .active").removeClass('active');
                $("a[data-goto='" + (i) + "']").addClass("active");
                break;
            }
            i++;
        }
    };

    (function () {
        var li_num = $(".hex-page-number").children("ul").children("li").size();

        var top = 0;
        if (li_num == 0) {
            top = 100;
        }
        else {
            top = 30 + li_num * 26;
        }

        var div_string = "<div class='goto-top' style='bottom: " + top + "px;'><a>TOP</a></div>";

        var div = $(div_string);

        $("body").append(div);

        $(window).scroll(function () {
            var tip_div = $(".goto-top");

            if ($(window).scrollTop() > 10) {
                tip_div.fadeIn(500);
            }
            else {
                tip_div.fadeOut(500);
            }

        });

        $(document.body).on("click", ".goto-top", function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    })();
});