/**
 * Created by Jason on 15/6/4.
 */
$(function(){
    var percent = 0;
    $("div[class='hex-progress-bar']").each(function () {

        //percent = parseFloat(parseInt(parseFloat($(this).attr("hex-percent"))*100)/100);
        percent = $(this).attr("hex-percent");
        $(this).children().first().css("width", percent + '%');

        if ($(this).attr("hex-color") == 'true') {
            $(this).children().first().next().text(percent+'%');
            if (percent < 10) {
                $(this).children().first().css("background-color", 'red');
            }
            else if (percent > 10 && percent <= 20) {
                $(this).children().first().css("background-color", '#f76242');
            }
            else if (percent > 20 && percent <= 30) {
                $(this).children().first().css("background-color", '#fc7c40');
            }
            else if (percent > 30 && percent <= 40) {
                $(this).children().first().css("background-color", '#ff933c');
            }
            else if (percent > 40 && percent <= 50) {
                $(this).children().first().css("background-color", '#ffac34');
            }
            else if (percent > 50 && percent <= 60) {
                $(this).children().first().css("background-color", '#ffc42f');
            }
            else if (percent > 60 && percent <= 70) {
                $(this).children().first().css("background-color", '#ffdf2f');
            }
            else if (percent > 70 && percent <= 80) {
                $(this).children().first().css("background-color", '#fdff2f');
            }
            else if (percent > 80 && percent <= 90) {
                $(this).children().first().css("background-color", '#bee535');
            }
            else if (percent > 90 && percent <= 100) {
                $(this).children().first().css("background-color", '#8ce535');
            }
            else {
                $(this).children().first().css("background-color", '#6cbf3f');
            }
        }
        else {
            $(this).children().first().css("background-color", '#D7DCE0');
        }
    });
});
function progressbar() {
}