/**
 * Created by Jason on 15/5/28.
 */

/**
 * table样式，最后一个block将表格占满
 */
$(function () {
    sort_thead();
    var width = $(".hex-row-list").parent().width();

    var num = $("tr[class='row-list']").first().children().size();
    var td = $("tr[class='row-list']").first().children().first();
    for (var i = 0; i < num; i++) {
        width = width - td.width();
        td = td.next();
    }
    $("td[class='block']").css("width", width + 'px');
});

function hexrowlist() {
    /*var width = document.documentElement.clientWidth - 80 - 290;

     var num = $("tr[class='row-list']").children().size();
     var td = $("tr[class='row-list']").children().first();
     for (var i = 0; i < num; i++) {
     width = width - td.width();
     td = td.next();
     }
     $("td[class='block']").css("width", width + 'px');*/
}

/**
 * 表头的排序按钮样式，王怀林使用
 */
function sort_thead() {
    $(".table-head .sort").each(function () {
        var a_sort = $(this);
        var td = a_sort.parent("td");
        var span = a_sort.prev("span");

        span.css("margin-left", (td.width() - span.width() - 25) / 2);
    });
}













