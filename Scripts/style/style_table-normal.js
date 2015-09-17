/**
 * Created by Jason on 15/6/3.
 */
$(function(){
    var height = $("table[class='hex-table']").attr("table-height");
    if (height != 0) {
        $("table[class='hex-table']").children("tbody").css("height", height + 'px');
    }
    else {
        $("table[class='hex-table']").children("tbody").css("height", "auto");
    }

    if ($("table[class='hex-table']").attr("hex-width") == 1000) {
        width = 950;
    }
    else {
        var width = $("table[class='hex-table']").width();
    }
    var num = $("table[class='hex-table']").children("thead").children("tr").first().children().size() - 1;
    var td = $("table[class='hex-table']").children("thead").children("tr").first().children().first();
    for (var i = 0; i < num; i++) {
        width = width - parseInt(td.width());
        td = td.next();
    }
    ;
    $("td[class='block']").css("width", width + 'px');
});
function table() {
}