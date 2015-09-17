/**
 * Created by Jason on 15/7/2.
 */
$(function(){
    $(document.body).on("click",".more a",function(){
        $(this).parent().next("ul").slideDown(500);
    });
});
function pay(){
}