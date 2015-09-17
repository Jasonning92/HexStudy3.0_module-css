/**
 * Created by Jason on 15/8/28.
 */
$(function () {
    getpublisher();

    function getpublisher() {
        //判断http还是https
        var now_url = window.location.href.toString();
        var ip = "";
        var url_head = "";//协议名
        if (now_url.substr(0, 5) === "https") {
            ip = "https://www.hexstudy.com";
            url_head = "https://";
        } else {
            ip = "http://www.hexstudy.com";
            url_head = "http://";
        }
        var url_post = ip + "/Press/GetContentProviders";

        jQuery.support.cors = true;
        $.ajax({
            type: "POST",
            url: url_post,
            crossDomain: true,
            success: function (result) {
                var num = result.length;

                var img = '';
                var name = '';
                var id = '';
                var domain = '';

                var div = '';
                for (var i = 0; i < num; i++) {
                    name = result[i].Name;
                    img = result[i].Icon;
                    domain = result[i].domain;

                    div = div + '<div><a href="' + url_head + domain
                        + '" target="_blank"><img data-src="../images/publisher/qinghua.png" src="../images/publisher/'
                        + img + '"></a><div><a href="' + url_head + domain + '" target="_blank"><h2>'
                        + name + '</h2><h2>|</h2><span>合作专区</span></a></div></div>';

                }
                $(".hex-publisher-lib").append(div);
                imglazyloadinit();
            }
        });
    }
});
function imglazyloadinit() {
    //图片的延迟加载 需要设置<img data-original="要加载的图片地址" src="占位图片" />
    if (typeof $("img").lazyload != "undefined") {
        $("img").lazyload({
            effect: "fadeIn",
            //预加载
            failure_limit: 50,
            //在图片距离屏幕180px时提前载入：
            threshold: 180
        });
    }
    setTimeout(function () {
        $(document.body).scroll();
    }, 100)
};