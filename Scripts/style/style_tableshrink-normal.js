/**
 * Created by Jason on 15/6/18.
 */
$(function (){
    get_table_app();

    //width_name = width_name + 50 + 220 + 80 + 20;

    //$("div[class='block']").css("width", $("div[class='hex-table-shrink']").width() - width_name + "px")

    $(document.body).on("click", ".shrink-btn a", function () {
        shrink_tbody(this);
    });

    function shrink_tbody(thisObj) {
        var tbody = $(thisObj).parent().parent().next();
        if (tbody.css("display") == "none") {
            tbody.slideDown(500);
            $(thisObj).removeClass("jiahao");
        }
        else {
            tbody.slideUp(500);
            $(thisObj).addClass("jiahao");
        }
    }
});
function tableshrink() {
}

/**
 * 仿table将宽度固定，王怀林使用
 */
function get_table_app(){
    var width_name = 0;
    var width_title = 0;


    /* 仿table的列对齐效果 */
    $(".hex-table-shrink div[class='name']").each(function () {
        if (width_name < $(this).width()) {
            width_name = $(this).width();
        }
    });
    $(".hex-table-shrink div[class='title']").each(function () {
        if (width_title < $(this).width()) {
            width_title = $(this).width();
        }
    });

    $(".hex-table-shrink div[class='name']").each(function () {
        $(this).css("width", width_name + 25 + "px");
    });

    $(".hex-table-shrink div[class='title']").each(function () {
        $(this).css("width", width_title + 25 + "px");
    });

    $(".shrink-btn a").each(function(){
        if($(this).attr("class")=="jiahao"){
            var tbody = $(this).parent().parent().next();
            tbody.slideUp(500);
        }
    });
}

