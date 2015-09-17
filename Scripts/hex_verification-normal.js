/**
 * Created by Jason on 15/7/14.
 * HexStudy的表单验证
 *
 * 错误样式：
 * 输入错误input框体变成红色，错误提示覆盖input
 *
 * 验证等级：
 * 优先验证等级高的规则（rank值越小等级越高）
 * 验证等级如下：
 * 1级：非空---data-val-required
 * 2级：长度---data-val-length
 * 3级：最大值 --- data-val-range="xxxx" data-val-range-max="10" data-val-range-min="1"
 * 4级：邮箱---data-val-email
 * 5级：手机---data-val-phone
 * 6级：纯数字---data-val-number
 * 7级：身份证---data-val-identity="请输入身份证"
 * 8级：自定义正则匹配---data-val-regular="正则表达式不匹配" data-val-regular-exp=""
 * 9级：字段和其他input相同---data-val-equalto
 * 10级：比较其他input（日期）---data-val-compare="XXX" data-val-compare-type="1:＞　２:>=　3:<　4:<=" data-val-compare-other
 * 11级：和今天的日期比较---data-val-today data-val-today-type="1:＞　２:>=　3:<　4:<="
 * 12级：服务器返回验证---data-val-remote="XXX" data-val-remote
 */

var jason_url_count = 0;
$(function () {
    add_div();

    //提示内容消失，焦点放到input里
    $(document.body).on("click", "span[class='hex-input-massage']", function () {
        var span = $(this);
        var input = span.prev("input");

        span.fadeOut(500);
        input.focus();
    });
    //提示内容消失，焦点放到input里---时间选择器
    $(".input-group-addon").click(function () {
        var span = $(this).prev().find("span");
        var input = span.prev("input");

        span.fadeOut(500);
    });


    //密码强度
    $(document.body).on("input propertychange", "input[data-strength='true']", function () {
        hex_verification.check_password_strength($(this));
    });

    //验证其他
    $(document.body).on("blur", "input[data-val='true']", function () {
        var input = $(this);
        var span = input.next(".hex-input-massage");
        if (input.attr("data-val-required")) {
            if (input.attr("data-val-required-blur") == "false") {
            }
            else {
                /*hex_verification.check_empty(input);*/
            }
        }
        if (input.attr("data-val-length")) {
            /*hex_verification.check_length(input);*/
        }
        if (input.attr("data-val-range")) {
            hex_verification.check_range(input);
        }
        if (input.attr("data-val-email")) {
            hex_verification.check_email(input);
        }
        if (input.attr("data-val-phone")) {
            hex_verification.check_phone(input);
        }
        if (input.attr("data-val-number")) {
            hex_verification.check_number(input);
        }
        if (input.attr("data-val-identity")) {
            hex_verification.check_identity(input);
        }
        if (input.attr("data-val-regular")) {
            hex_verification.check_regular(input);
        }
        if (input.attr("data-val-equalto")) {
            hex_verification.check_same(input);
        }
        if (input.attr("data-val-compare")) {
            hex_verification.check_compare(input);
        }
        if (input.attr("data-val-today")) {
            hex_verification.check_today(input);
        }
        if (input.attr("data-val-remote")) {
            if (input.attr("data-val-remote-blur") == "false") {
            }
            else {
                hex_verification.check_get_url(input);
            }
        }
        if (span.text() == "") {
            if (input.next().next("i")) {
                var padding_x = parseInt(input.css("padding-left")) + parseInt(input.css("padding-right"));
                input.next().next("i").css("display", "block").css("left", input.width() + padding_x + 7);
            }
        }
    });

    //点击按钮验证
    $(document.body).on("submit", "form", function (e) {
        //等待请求返回
        if (jason_url_count != 0) {
            e.preventDefault();
            var that = this;
            setTimeout(function () {
                $(that).submit();
            }, 100);
        }
        else {
            $(this).find("input[data-val='true']").each(function () {
                var input = $(this);
                var span = input.next(".hex-input-massage");

                if (!input.attr("data-val-remote-url")) {
                    span.text("");
                }

                if (input.attr("data-val-required")) {
                    hex_verification.check_empty(input);
                }
                if (input.attr("data-val-length")) {
                    hex_verification.check_length(input);
                }
                if (input.attr("data-val-range")) {
                    hex_verification.check_range(input);
                }
                if (input.attr("data-val-email")) {
                    hex_verification.check_email(input);
                }
                if (input.attr("data-val-phone")) {
                    hex_verification.check_phone(input);
                }
                if (input.attr("data-val-number")) {
                    hex_verification.check_number(input);
                }
                if (input.attr("data-val-identity")) {
                    hex_verification.check_identity(input);
                }
                if (input.attr("data-val-regular")) {
                    hex_verification.check_regular(input);
                }
                if (input.attr("data-val-equalto")) {
                    hex_verification.check_same(input);
                }
                if (input.attr("data-val-compare")) {
                    hex_verification.check_compare(input);
                }
                if (input.attr("data-val-today")) {
                    hex_verification.check_today(input);
                }
                if (input.attr("data-val-remote-url")) {
                    if (input.attr("data-val-remote-blur") == "false") {
                        hex_verification.check_get_url(input);
                    }
                    else {
                    }

                }
            });
            var isOK = 1;
            $(this).find("input[data-val-checkbox='true']").each(function () {
                var checkbox_check = $(this).is(':checked');
                if (!checkbox_check) {
                    $(this).next("a").addClass("hex-font-orange");
                    isOK = 0;
                }
                else {
                    $(this).next("a").removeClass("hex-font-orange");
                }
            });
            $(this).find("span[class='hex-input-massage']").each(function () {
                if ($(this).text() != "") {
                    isOK = 0;
                }
            });
            if (isOK == 0) {
                e.preventDefault();
                if (typeof LoadingEnd === "function") {
                    LoadingEnd();
                }
                return false;
            }
            else if (isOK == 1) {
                if ($(this).attr("data-loadfunction") == "searchLoading" && typeof searchLoading === "function") {
                    searchLoading();
                }
                else if (typeof Loading === "function") {
                    Loading();
                }
            }
        }
    });
});

/**
 * 将信息放入string
 * @param input 带$的元素
 * @param string 错误信息
 */
function put_error_message(input, string) {
    var span = input.next(".hex-input-massage");
    span.text("");

    var padding_x = parseInt(input.css("padding-left")) + parseInt(input.css("padding-right"));
    var padding_y = parseInt(input.css("padding-top")) + parseInt(input.css("padding-bottom"));

    span.css("display", "inline-block").css("width", input.width() + padding_x + 2).css("height", input.height() + padding_y + 2)
        .css("line-height", input.height() + padding_y + "px").css("text-align", "center");
    span.text(string);
}

/**
 * 添加验证结构
 */
function add_div() {
    $("input[data-val='true']").each(function () {
        if ($(this).parent("div").attr("class") != "hex-input-div"
            && $(this).attr("type") != "checkbox" && $(this).attr("type") != "radio") {
            var width = $(this).width() + parseInt($(this).css("padding-left")) + parseInt($(this).css("padding-right")) + 2;
            var height = $(this).height() + parseInt($(this).css("padding-top")) + parseInt($(this).css("padding-bottom")) + 2;

            if ($(this).css("display") == "none") {
                var div = $("<div class='hex-input-div' style='width: " + width + "px;" + "height:" + height + "px;" + "display:none'></div>");
            }
            else {
                var div = $("<div class='hex-input-div' style='width: " + width + "px;" + "height:" + height + "px;'></div>");
            }
            var span = $("<span class='hex-input-massage' data-vale-rank='99' ></span>");
            var i = $("<i class='pass'></i>");
            $(this).wrap(div);
            if ($(this).attr("data-val-pass") == "true") {
                $(this).after(i);
            }
            $(this).after(span);
        }
    });
}

/**
 * 封装成单例模式
 * @type {{check_empty, check_length, check_range, check_email, check_phone, check_number, check_identity, check_regular, check_same, check_compare, check_today, check_get_url, check_password_strength}}
 */
var hex_verification = (function () {
    /**
     * 将提示信息放入span中
     * @param input input的$元素
     * @param string 验证信息属性名
     * @param rank 验证登记
     */
    function get_error_message(input, string, rank) {
        var span = input.next(".hex-input-massage");

        var padding_x = parseInt(input.css("padding-left")) + parseInt(input.css("padding-right"));
        var padding_y = parseInt(input.css("padding-top")) + parseInt(input.css("padding-bottom"));

        if (parseInt(span.attr("data-vale-rank")) >= parseInt(rank)) {
            span.css("display", "inline-block").css("width", input.width() + padding_x + 2).css("height", input.height() + padding_y + 2)
                .css("line-height", input.height() + padding_y + "px").css("text-align", "center");
            span.text(input.attr(string));
            span.attr("data-vale-rank", rank);
        }
        if (input.parent().next("i")) {
            input.parent().next("i").css("display", "none");
        }
    }

    /**
     * span中内容置空
     * @param input input的$元素
     * @param string 验证信息属性名
     */
    function emputy_message(input, string) {
        var span = input.next(".hex-input-massage");

        if (span.text() == input.attr(string)) {
            span.text("");
            span.attr("data-vale-rank", "99");
        }
    }

    /**
     * 验证非空
     * @param input input的$元素
     */
    function check_empty(input) {
        if (input.val() == "") {
            //input.addClass("hex-form-error");
            get_error_message(input, "data-val-required", "1");
        }
        else {
            emputy_message(input, "data-val-required");
        }
    }


    /**
     * 验证长度
     * @param input input的$元素
     */
    function check_length(input) {
        var max = input.attr("data-val-length-max") ? input.attr("data-val-length-max") : 0;
        var min = input.attr("data-val-length-min") ? input.attr("data-val-length-min") : 0;
        if (input.val().length < min || input.val().length > max) {
            //input.addClass("hex-form-error");
            get_error_message(input, "data-val-length", "2");
        }
        else {
            emputy_message(input, "data-val-length");
        }
    }

    /**
     * 验证最大值最小值
     */
    function check_range(input) {
        var max = input.attr("data-val-range-max") ? input.attr("data-val-range-max") : 0;
        var min = input.attr("data-val-range-min") ? input.attr("data-val-range-min") : 0;

        if (input.attr("data-val-range-max") && input.attr("data-val-range-min")) {
            if (parseFloat(input.val()) >= min && parseFloat(input.val()) <= max) {
                emputy_message(input, "data-val-range");
            }
            else {
                get_error_message(input, "data-val-range", "3");
            }
        }
        else if (input.attr("data-val-range-max") && !input.attr("data-val-range-min")) {
            if (parseFloat(input.val()) >= min) {
                emputy_message(input, "data-val-range");
            }
            else {
                get_error_message(input, "data-val-range", "3");
            }
        }
        else {
            if (parseFloat(input.val()) <= max) {
                emputy_message(input, "data-val-range");
            }
            else {
                get_error_message(input, "data-val-range", "3");

            }
        }
    }

    /**
     * 验证邮箱
     * @param input input的$元素
     */
    function check_email(input) {
        var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/;
        reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

        if (!reg.test(input.val())) {
            get_error_message(input, "data-val-email", "4");
        }
        else {
            emputy_message(input, "data-val-email");
        }
    }

    /**
     * 验证手机
     * @param input input的$元素
     */
    function check_phone(input) {
        var reg = /^1[3|4|5|7|8|9][0-9]\d{4,8}$/;

        if (!reg.test(input.val())) {
            get_error_message(input, "data-val-phone", "5");
        }
        else {
            emputy_message(input, "data-val-phone");
        }
    }


    /**
     * 验证数字
     * @param input input的$元素
     */
    function check_number(input) {
        var reg = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/;


        if (!reg.test(input.val())) {
            get_error_message(input, "data-val-number", "6");
        }
        else {
            emputy_message(input, "data-val-number");
        }
    }

    /**
     * 验证身份证
     * @param input
     */
    function check_identity(input) {
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

        if (!reg.test(input.val())) {
            get_error_message(input, "data-val-identity", "7");
        }
        else {
            emputy_message(input, "data-val-identity");
        }
    }

    /**
     * 自定义正则表达式
     * @param input
     */
    function check_regular(input) {
        var reg = eval(input.attr("data-val-regular-exp"));

        if (!reg.test(input.val())) {
            get_error_message(input, "data-val-regular", "8");
        }
        else {
            emputy_message(input, "data-val-regular");
        }
    }

    /**
     * 验证相同
     * @param input input的$元素
     */
    function check_same(input) {
        var info = input.attr("data-val-equalto-other").substr(2);
        var select = "input[name='" + info + "']";

        var target = $(select);
        if (input.val() != target.val()) {
            get_error_message(input, "data-val-equalto", "9");
        }
        else {
            emputy_message(input, "data-val-equalto");
        }
    }

    /**
     * 验证和其他input比较
     * @param input
     */
    function check_compare(input) {
        var info = input.attr("data-val-compare-other").substr(2);
        var compare = parseInt(input.attr("data-val-compare-type"));
        var select = "input[name='" + info + "']";

        var target = $(select);

        switch (compare) {
            case 1:
            {
                if (input.val() > target.val()) {
                    emputy_message(input, "data-val-compare");
                }
                else {
                    get_error_message(input, "data-val-compare", "10");
                }
                break;
            }
            case 2:
            {
                if (input.val() >= target.val()) {
                    emputy_message(input, "data-val-compare");
                }
                else {
                    get_error_message(input, "data-val-compare", "910");
                }
                break;
            }
            case 3:
            {
                if (input.val() < target.val()) {
                    emputy_message(input, "data-val-compare");
                }
                else {
                    get_error_message(input, "data-val-compare", "10");
                }
                break;
            }
            case 4:
            {
                if (input.val() <= target.val()) {
                    emputy_message(input, "data-val-compare");
                }
                else {
                    get_error_message(input, "data-val-compare", "10");
                }
                break;
            }
        }
        if (input.attr("data-val-compare-other-2")) {
            var info_2 = input.attr("data-val-compare-other-2").substr(2);
            var compare_2 = parseInt(input.attr("data-val-compare-type-2"));
            var select_2 = "input[name='" + info_2 + "']";

            var target_2 = $(select_2);

            switch (compare_2) {
                case 1:
                {
                    if (input.val() > target_2.val()) {
                        emputy_message(input, "data-val-compare-2");
                    }
                    else {
                        get_error_message(input, "data-val-compare-2", "10");
                    }
                    break;
                }
                case 2:
                {
                    if (input.val() >= target_2.val()) {
                        emputy_message(input, "data-val-compare-2");
                    }
                    else {
                        get_error_message(input, "data-val-compare-2", "10");
                    }
                    break;
                }
                case 3:
                {
                    if (input.val() < target_2.val()) {
                        emputy_message(input, "data-val-compare-2");
                    }
                    else {
                        get_error_message(input, "data-val-compare-2", "10");
                    }
                    break;
                }
                case 4:
                {
                    if (input.val() <= target_2.val()) {
                        emputy_message(input, "data-val-compare-2");
                    }
                    else {
                        get_error_message(input, "data-val-compare-2", "10");
                    }
                    break;
                }
            }
        }
    }

    /**
     * 和今日比较
     * @param input
     */
    function check_today(input) {
        var compare = parseInt(input.attr("data-val-today-type"));

        var date = new Date();
        var month = (parseInt(date.getMonth()) + 1) < 10 ? "0" + (parseInt(date.getMonth()) + 1) : parseInt(date.getMonth()) + 1;
        var day = parseInt(date.getDate()) < 10 ? "0" + date.getDate() : date.getDate();
        var today = date.getFullYear() + "/" + month + "/" + day;

        switch (compare) {
            case 1:
            {
                if (input.val() > today) {
                    emputy_message(input, "data-val-today");
                }
                else {
                    get_error_message(input, "data-val-today", "11");
                }
                break;
            }
            case 2:
            {
                if (input.val() >= today) {
                    emputy_message(input, "data-val-today");
                }
                else {
                    get_error_message(input, "data-val-today", "11");
                }
                break;
            }
            case 3:
            {
                if (input.val() < today) {
                    emputy_message(input, "data-val-today");
                }
                else {
                    get_error_message(input, "data-val-today", "11");
                }
                break;
            }
            case 4:
            {
                if (input.val() <= today) {
                    emputy_message(input, "data-val-today");
                }
                else {
                    get_error_message(input, "data-val-today", "11");
                }
                break;
            }
        }
    }

    /**
     * 从服务器请求，返回值校验
     * @param input input的$元素
     */
    function check_get_url(input) {
        jason_url_count++;
        if (input.next("span").text() == input.attr("data-val-remote")) {
            input.next("span").text("");
        }

        var url = input.attr("data-val-remote-url");

        var key = "{" + input.attr("data-val-remote-additionalfields").substr(2) + ":" + "\"" + input.val() + "\"" + "}";

        var json_key = eval("(" + key + ")");

        if (input.attr("data-val-remote-data")) {
            var other_Json = eval("(" + input.attr("data-val-remote-data") + ")");
            json_key = $.extend({}, json_key, other_Json);
        }

        $.ajax({
            type: "POST",
            url: url,
            data: json_key,
            success: function (result) {
                if (result === true || result === "true") {
                    emputy_message(input, "data-val-remote");
                }
                else {
                    get_error_message(input, "data-val-remote", "12");
                    if (result && eval(result) instanceof Function) //判断是否传参，以及参数类型
                        eval(result)();
                }
                jason_url_count--;
            }
        });
    }

    /**
     * 密码强度显示
     * @param input input的$元素
     */
    function check_password_strength(input) {
        var password = input.val();
        var strength_div = $("div[class='hex-form-strength']").children("div");

        var pattern = /[^\w\s]+/;

        var only_num = /[0-9]/;
        var only_word = /[a-z]/;
        var only_WORD = /[A-Z]/;

        var rank = 0;

        if (password == "") {
            rank = 0;
        }

        else if (only_num.test(password) && only_word.test(password) && only_WORD.test(password)) {
            rank = 3;
        }
        else if ((only_num.test(password) && only_word.test(password)) ||
            (only_num.test(password) && only_WORD.test(password)) ||
            (only_word.test(password) && only_WORD.test(password))) {
            rank = 2;
        }
        else if (only_num.test(password)) {
            rank = 1;
        }
        else if (only_word.test(password)) {
            rank = 1;
        }
        else if (only_WORD.test(password)) {
            rank = 1;
        }
        if (pattern.test(password)) {
            rank = rank == 3 ? rank : rank + 1;
        }
        if (password.length < 6) {
            rank = rank == 0 ? rank : rank - 1;
        }

        switch (rank) {
            case 0:
            {
                strength_div.children(".weak").css("background", "#bec5cb");
                strength_div.children(".middle").css("background", "#bec5cb");
                strength_div.children(".strong").css("background", "#bec5cb");
                break;
            }
            case 1:
            {
                strength_div.children(".weak").css("background", "#fc7139");
                strength_div.children(".middle").css("background", "#bec5cb");
                strength_div.children(".strong").css("background", "#bec5cb");
                break;
            }
            case 2:
            {
                strength_div.children(".weak").css("background", "#fc7139");
                strength_div.children(".middle").css("background", "#fc7139");
                strength_div.children(".strong").css("background", "#bec5cb");
                break;
            }
            case 3:
            {
                strength_div.children(".weak").css("background", "#fc7139");
                strength_div.children(".middle").css("background", "#fc7139");
                strength_div.children(".strong").css("background", "#fc7139");
                break;
            }
            default:
            {
                strength_div.children(".weak").css("background", "#bec5cb");
                strength_div.children(".middle").css("background", "#bec5cb");
                strength_div.children(".strong").css("background", "#bec5cb");
                break;
            }
        }
    }

    return {
        check_empty: check_empty,
        check_length: check_length,
        check_range: check_range,
        check_email: check_email,
        check_phone: check_phone,
        check_number: check_number,
        check_identity: check_identity,
        check_regular: check_regular,
        check_same: check_same,
        check_compare: check_compare,
        check_today: check_today,
        check_get_url: check_get_url,
        check_password_strength: check_password_strength
    };
})();






