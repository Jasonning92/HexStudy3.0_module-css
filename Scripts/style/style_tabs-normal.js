/**
 * Created by Jason on 15/6/3.
 */

/**
 * tab菜单下拉
 */
$(function (){
    $("a[id='more-list']").click(function (e) {
        $("ul[who='more-list']").slideDown(500);
        $(".hex-more-list div a").addClass("active");

        e.stopPropagation();
    });
    $(document).click(function () {
        $("ul[who='more-list']").slideUp(500);
        $(".hex-more-list div a").removeClass("active");
    });
});

function tabs() {
}


