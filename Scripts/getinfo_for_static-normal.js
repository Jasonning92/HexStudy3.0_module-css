/**
 * Created by Jason on 15/8/27.
 */
/**
 * 请求路径：/Profile/GetInfoForStaticPages
 * 返回值说明：{"UserName":"张三胖","AvatarUrl":"http://192.168.0.16:8004/FileManage/DownLoad?resourceID=42949713903","Site":"http://218.241.220.194:8002"}
 * 备注：UserName为空表示未登录
 */
$(function () {
    getinfo();

    //锚点动画
    $(".first-title a").click(function (event) {
        var index = $(this).attr('data-goto');
        var id = '#' + index;
        $("html,body").animate({scrollTop: $(id).offset().top - 50}, 800);
    });

    /**
     * 获取个人资料信息
     */
    function getinfo() {
        //判断http还是https
        var now_url = window.location.href.toString();
        var ip = "";//post-url
        var url_head = "";//协议名
        if (now_url.substr(0, 5) === "https") {
            ip = "https://www.hexstudy.com";
            url_head = "https";
        } else {
            ip = "http://www.hexstudy.com";
            url_head = "http";
        }

        //判断用户是否登录，通过cookie中是否有token
        var token = getCookie('localtoken');//取token
        var url_post = "";
        if (token == "null" || token == null) {
            url_post = ip + "/Profile/GetInfoForStaticPages";
        }
        else {
            url_post = ip + "/Profile/GetInfoForStaticPages?ssotoken=" + token;
        }
        jQuery.support.cors = true;
        $.ajax({
            type: "POST",
            url: url_post,
            crossDomain: true,
            success: function (result) {
                var url = ip;//url
                var user_img = "";//用户头像
                var user_name = "";//用户名

                var my_course = "";//我的课程结构
                var not_logo = "";//登录结构
                var logoed = "";//个人信息结构

                //添加logo返回的a链接
                $(".hex-logo").children('a').attr("href", url + '/Home/HexIndex');

                //判断是否登录
                if (result.UserName == null) {
                    not_logo = '<div class="logo"><a href="' + result.SSOSite + '/User/Login">登录</a></div>';
                    my_course = '<div class="my-course"><a href="' + url + '/Course/MyCourse">我的课程</a></div>';

                    $(".hex-user-info").append(not_logo).append(my_course);
                }
                else {
                    user_name = result.UserName;
                    if (result.AvatarUrl.indexOf("userdefault.jpg") > 0) {
                        user_img = "userdefault.jpg";
                    }
                    else {
                        user_img = url_head + result.AvatarUrl.substr(4);
                    }
                    logoed = '<ul><li><img src="' + user_img + '"></li><li class="dropdown"><a id="user">' + user_name
                        + '<span class="caret"></span></a><ul class="hex-dropdown" who="user"><li><img src="' + user_img
                        + '"><a>' + user_name + '<span class="caret"></span></a></li><li><a href="' + url + '/Profile/NewMyProfile"><div>账户设置</div></a></li></ul>'
                        + '<a href="' + url + '/Notice/Index">消息</a></li>'
                        + '<li><a href="' + url + '/SalesOrder/MyBuy">我的订单</a></li>'
                        + '<li class="hex-info"><a href="#">移动平台</a><div class="hex-info-dropdown hex-info-dropdown-m"><div class="triangle-up"></div> <div><span class="hex-font-gray">有课教学</span><span class="hex-font-lightgray">在这里你可以找到帮你教学的一切</span><img src="../images/two-code/teacher.png"></div> <div><span class="hex-font-gray">有课学习</span><span class="hex-font-lightgray">这里是一座真正没有围墙的大学</span><img src="../images/two-code/student.png"></div> </div> </li>'
                        + '<li class="hex-info"> <a href="#">关注HexStudy</a> <div class="hex-info-dropdown hex-info-dropdown-a"><div class="triangle-up"></div> <img src="../images/two-code/weixin.jpg"> </div> </li>'
                        + '<li class="hex-info"><a href="#">客户服务</a><div class="hex-info-dropdown hex-info-dropdown-s"><div class="triangle-up"></div> <span>Email：service@hexstudy.com</span> <span>Tel：010-56139493</span> <span>QQ：1632182093 </span> </div> </li> </ul>';
                    my_course = '<div class="my-course"><a href="' + url + '/Course/MyCourse">我的课程</a></div>';

                    $(".hex-user-info").append(logoed).append(my_course);
                }
                $(".resource .first-title a").attr("href", ip + '/CourseLibrary/list');
                $(".link").last().find("li").first().children("a").attr("href", ip + '/CourseLibrary/list');
                $(".link").last().find("li").last().children("a").attr("href", ip + '/CourseLibrary/list');
            }
        });
    }
});

/**
 * 读取cookie
 * @param name key名
 * @returns {null}
 */
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}