$(function() {
    var $url = $("#film-play-url"),
    $urlMobile = $("#film-play-url-mobile"),
    isPC = IsPC();
    function getCurrentVideoUrl() {
        return (isPC ? $url: $urlMobile).val()
    }
    $(document).ready(function() {
        //var sv, otherWebsiteUrl = getCurrentVideoUrl();
        var sv, otherWebsiteUrl;
        //alert(otherWebsiteUrl);

        var topValue = $(window).height(),
        palyerIframeHeight = .7 * topValue,
        topValue = .04 * topValue;
        $("#palyer-iframe").height(palyerIframeHeight),
        $("#play-box").css("top", topValue);
        
        const url = new URL(window.location);
        const media_url = url.searchParams.get('url');
        const type = url.searchParams.get('type');
        if (media_url) {
            otherWebsiteUrl = media_url
        } else {
            otherWebsiteUrl = getCurrentVideoUrl();
        }
        /*
        if (getUrl() == 0 ) {
            otherWebsiteUrl = getCurrentVideoUrl();
        } else {
            otherWebsiteUrl = getUrl();
        }
        */
        //alert(otherWebsiteUrl);
        //alert(ROOT);
            
        otherWebsiteUrl && (otherWebsiteUrl = otherWebsiteUrl.replace(/\s*/g, ""), 
        sv = otherWebsiteUrl, $url.val(sv), $urlMobile.val(sv), 
        playUrl = $("#link-choice").val() + otherWebsiteUrl, 
        $("#palyer-iframe").attr("src", playUrl), 
        $("#current-play-url").text(playUrl), 
        $("#current-play-url").attr("href", playUrl), 
        sv = "sv", 
        sv = new RegExp("(^|&)" + sv + "=([^&]*)(&|$)"), 
        null != (sv = null != (sv = window.location.search.substr(1).match(sv)) ? sv[2] : "") && "" != sv && 0 != sv.length ? history.pushState({},"页面标题", ROOT + "/?sv=" + sv + "&url=" + otherWebsiteUrl) : history.pushState({},"页面标题", ROOT + "/?url=" + otherWebsiteUrl));
        
        
    }),
    $("#play-btn").on("click", function() {
        var sv, otherWebsiteUrl = getCurrentVideoUrl();
        otherWebsiteUrl && (otherWebsiteUrl = otherWebsiteUrl.replace(/\s*/g, ""), sv = otherWebsiteUrl, $url.val(sv), $urlMobile.val(sv), playUrl = $("#link-choice").val() + otherWebsiteUrl, $("#palyer-iframe").attr("src", playUrl), $("#current-play-url").text(playUrl), $("#current-play-url").attr("href", playUrl), sv = "sv", sv = new RegExp("(^|&)" + sv + "=([^&]*)(&|$)"), null != (sv = null != (sv = window.location.search.substr(1).match(sv)) ? sv[2] : "") && "" != sv && 0 != sv.length ? history.pushState({},
        "页面标题", ROOT + "/?sv=" + sv + "&url=" + otherWebsiteUrl) : history.pushState({},
        "页面标题", ROOT + "/?url=" + otherWebsiteUrl))
    }),
    $("#back-website-btn").on("click", function() {
        var otherWebsiteUrl = getCurrentVideoUrl();
        otherWebsiteUrl && (window.location.href = otherWebsiteUrl)
    })
});

function getUrl() {
    var httpUrl = window.location.href;
    httpUrl = decodeURI(httpUrl);

    //alert(httpUrl);
    //alert(ROOT);

    if (httpUrl.indexOf("?") > 0) {
        urlInfo = httpUrl.substring(httpUrl.indexOf("=")+1);
        //alert(urlInfo);
        
        return urlInfo;
    } else {
        //alert("播放地址错误！");
        return 0;
    }
}
