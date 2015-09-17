/**
 * Created by Jason on 15/7/10.
 */
$(function () {
    var width = document.documentElement.clientWidth;
    if (width > 1300) {
        width = (width - 1180) / 2 - 60;
        $(" .hex-right-button").css("right", width);
    }

    $(".hex-publisher-search").mouseenter(function () {
        var input_div = $(this).next("div");
        input_div.animate({
            "width": "300px"
        }, 500);

        input_div.children("input").focus();
    });

    $(document.body).on("click", ".hex-publisher-search-div a", function () {
        var input_div = $(this).parent("div");
        input_div.animate({
            "width": "0px"
        }, 500);
    });

    $(document.body).on("click", ".hex-publisher-search-div p", function (e) {
        e.stopPropagation();
        var ul = $(".hex-publisher-search-div ul");
        var p = $(".hex-publisher-search-div p");
        if (ul.css("display") == "none") {
            ul.slideDown(300);
        }
        else {
            ul.slideUp(300);
        }
    });

    $(document.body).on("click", ".hex-publisher-search-div ul li span", function (e) {
        e.stopPropagation();
        var ul = $(".hex-publisher-search-div ul");
        var p = $(".hex-publisher-search-div p");
        p.text($(this).text());
        ul.slideUp(300);
    });

    $(document).click(function () {
        var ul = $(".hex-publisher-search-div ul");
        ul.slideUp(300);
    });
});