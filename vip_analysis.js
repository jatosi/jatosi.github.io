$(function() {
    var $url = $("#film-play-url"),
    $urlMobile = $("#film-play-url-mobile"),
    isPC = IsPC();
    function getCurrentVideoUrl() {
        return (isPC ? $url: $urlMobile).val()
    }
    $(document).ready(function() {
        var topValue = $(window).height(),
        palyerIframeHeight = .7 * topValue,
        topValue = .04 * topValue;
        $("#palyer-iframe").height(palyerIframeHeight),
        $("#play-box").css("top", topValue),
        otherWebsiteUrl = playUrl()
        //alert(otherWebsiteUrl)
    }),
    $("#play-btn").on("click", function() {
        var sv, otherWebsiteUrl = getCurrentVideoUrl();
        otherWebsiteUrl && (otherWebsiteUrl = otherWebsiteUrl.replace(/\s*/g, ""), sv = otherWebsiteUrl, $url.val(sv), $urlMobile.val(sv), playUrl = $("#link-choice").val() + otherWebsiteUrl, $("#palyer-iframe").attr("src", playUrl), $("#current-play-url").text(playUrl), $("#current-play-url").attr("href", playUrl), sv = "sv", sv = new RegExp("(^|&)" + sv + "=([^&]*)(&|$)"), null != (sv = null != (sv = window.location.search.substr(1).match(sv)) ? sv[2] : "") && "" != sv && 0 != sv.length ? history.pushState({},
        "页面标题", ROOT + "/zz.html?sv=" + sv + "&url=" + otherWebsiteUrl) : history.pushState({},
        "页面标题", ROOT + "/zz.html?url=" + otherWebsiteUrl))
    }),
    $("#back-website-btn").on("click", function() {
        var otherWebsiteUrl = getCurrentVideoUrl();
        otherWebsiteUrl && (window.location.href = otherWebsiteUrl)
    })
});

function playUrl() {
    var httpUrl = window.location.href;
    httpUrl = decodeURI(httpUrl);
    //alert(httpUrl);
    if (httpUrl.indexOf("?") > 0) {
        httpUrl = httpUrl.substring(httpUrl.indexOf("?"));
        //httpUrl = decodeURI(encodeURI(httpUrl));
        //httpUrl = encodeURI(httpUrl);
        httpUrl = unescape(httpUrl);
        //alert(httpUrl);
        if (httpUrl.indexOf("&") > 0) {
            var urlArr = httpUrl.split("&");
            //alert(urlArr.length);
            if (urlArr.length >= 1) {
                //alert(urlArr[1]);
                if (urlArr[0].toString().indexOf("url=") > 0) {
                    url = urlArr[0].substring(urlArr[0].indexOf("?") + 5);
                    //alert(url);
                }
                if (urlArr[1].toString().indexOf("ic=") > 0) {
                    pic = urlArr[1].substring(4);
                    //alert(pic);
                } else {
                    pic = "/images/load.gif";
                }
                if (urlArr[2].toString().indexOf("tle=") > 0) {
                    title = urlArr[2].substring(6);
                    title = title.substring(0,title.length-5);
                    //alert(title);
                } else {
                    title = "";
                }
            }
            //alert("test");
        } else {
            if (httpUrl.indexOf("url=") > 0) {
                url = httpUrl.substring(httpUrl.indexOf("?") + 5);
                //url = httpUrl.replace("url=","");
                alert(url);
                pic = "/images/load.gif";
            }
        }
    } else {
        alert("播放地址错误！");
    }
}