/**
 * Created by Jason on 15/6/27.
 */

$(function () {
    var time = 60;
    $(document.body).on("click", "a.ver-img", function () {
        var input = $("input[name='Phone']");
        var span = input.next(".hex-input-massage");
        hex_verification.check_empty(input);
        hex_verification.check_phone(input);
        if (span.text() == "") {
            if ($(this).attr('disabled') != "disabled") {
                send_SMS(this);
            }
        }
    });
    $(document.body).on("click", ".hex-logo-type .radio-phone", function () {
        $(".logo-phone").fadeIn(500);
        $(".logo-email").fadeOut(500);
        get_input();
        $(".logo-email").find("input").val("");
        var str = $(".logo-phone").find("input[data-strength='true']");
        hex_verification.check_password_strength(str);
    });
    $(document.body).on("click", ".hex-logo-type .radio-email", function () {
        $(".logo-email").fadeIn(500);
        $(".logo-phone").fadeOut(500);
        get_input();
        $(".logo-phone").find("input").val("");
        var str = $(".logo-email").find("input[data-strength='true']");
        hex_verification.check_password_strength(str);
    });

    /**
     * 重新计算宽高
     */
    function get_input() {
        $("input[data-val='true']").each(function () {
            var width = $(this).width() + parseInt($(this).css("padding-left")) + parseInt($(this).css("padding-right")) + 2;
            var height = $(this).height() + parseInt($(this).css("padding-top")) + parseInt($(this).css("padding-bottom")) + 2;

            $(this).parent("div").css("height", height).css("width", width);
        });
    }

    function countDown(thisObj, int) {
        time = time - 1;
        if (time < 0) {
            time = 60;
            thisObj.removeAttr("disabled");
            thisObj.text("点击重新发送");
            clearInterval(int);
        }
        else {
            thisObj.text(time + "秒后重新发送");
        }
    }

    function send_SMS(thisObj) {
        var button = $(thisObj);
        if (button.attr('disabled') != "disabled") {
            button.attr('disabled', 'true');
            var int = setInterval(function () {
                countDown(button, int);
            }, 1000)
        }
    }
});

/**
 * 验证是否可以发送验证码
 * @returns {boolean|*|jQuery}
 */
function is_can_send() {
    return ($("#Phone").next(".hex-input-massage").text() == "" && !$("#sendSMS").attr("disabled"));
}