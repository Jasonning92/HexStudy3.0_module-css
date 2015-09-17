/**
 * Created by Jason on 15/9/7.
 */

/**
 * 验证是否可以发送验证码，赵威使用
 * @returns {boolean|*|jQuery}
 */
function is_can_send() {
    return ($("input.style_phone").next(".hex-input-massage").text() == "" && !$("a.ver-sendSMS").attr("disabled"));
}

/**
 * 赵威使用
 * @type {{personinfo}}
 */
var style_personinfo = (function () {
    var jason_sendSMS_time = 60;
    function personinfo(thisObj) {
        var input = $("input.style_phone");
        var span = input.next(".hex-input-massage");
        hex_verification.check_empty(input);
        hex_verification.check_phone(input);
        if (span.text() == "") {
            if ($(thisObj).attr('disabled') != "disabled") {
                send_SMS(thisObj);
            }
        }
    }

    function countDown(thisObj, int) {
        jason_sendSMS_time = jason_sendSMS_time - 1;
        if (jason_sendSMS_time < 0) {
            jason_sendSMS_time = 60;
            thisObj.removeAttr("disabled");
            thisObj.text("点击重新发送");
            clearInterval(int);
        }
        else {
            thisObj.text(jason_sendSMS_time + "秒后重新发送");
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

    return {
        personinfo: personinfo
    }
})();