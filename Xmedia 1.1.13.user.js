// ==UserScript==
// @name         Xmedia 1.1.13 视频播放器 全网VIP视频免费破解去广告、全网音乐直接下载
// @namespace    https://jatosi.github.io
// @version      1.1.13
// @description  全网VIP视频免费破解去广告(综合线路电视剧免跳出选集)支持爱奇艺、腾讯、优酷、哔哩哔哩等；全网音乐有声音频免客户端下载,支持网易云音乐、QQ音乐、酷狗、喜马拉雅、咪咕等；
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OEZFQzZGMzkyM0ExMUU5QkQ5MUFFMUI0RDI2QTEwQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OEZFQzZGNDkyM0ExMUU5QkQ5MUFFMUI0RDI2QTEwQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4RkVDNkYxOTIzQTExRTlCRDkxQUUxQjREMjZBMTBDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU4RkVDNkYyOTIzQTExRTlCRDkxQUUxQjREMjZBMTBDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ymR1egAABQVJREFUeNrsW82LHEUUr1dV3TszbjaJrKsSiOjJQ0DwICgIeokoxIO3/HkexJMgOQgK4kEUJOBBk5t4SFaJbGLWj53t6fp4vtfV3TuZ2Rm7e2d2ejrT0Dtf1VX1q/f1e69qARHF03JJ8RRdG7AbsBuwG7CtvfTUNzehUUcu6t9T5vjqoifodO+hsslurYc+xYpgG1xeqpFzPpYCEATCArGi9aR+IC2g161QY+l9FKERAjKcC2EpCOARpIgx5U+yRTaLEoiJ0eoLnqBT8d9nVN0DXjnuT2T9tgos22zvvgdWZCRJ2ws+6n3ZbEbqY2lHu9wP90f93F/UHGGKG9+EM0hk61Da9GLWcdDmJp2xLLMHnY4PlR1drt3DDAclm67+jNd9Bsk3qzOCsjUdXcrPhYVC7u+3sv/iXrZkWWK0whczGHOcEHUG8MRPwKqIVX2WRPbkJ23DeMXzPDCGNxgWlHzDP8qlOwuRrNdbtzLH6OxOUC2yR3IadMNpN0yB4vYOZrWfvCcXBZ543hXjBs3h+Xi3zYNU9Q8zYxeq6DNw5gZ3ygMWK52Hlykrq/X9HGut1D6XLNC8MtA2vU6Av5Am+aARWAL6UfAvWKpUvqJuuvGMCULpoKrocdEaxfjApzYUqphPpk28RiZ5v5FkKc79CS7FoFq5SseDeyo9eimLffWc61La03x+Venw5eIZVnDSRvYtl2rFWeKilwED7cMs1g1+YqBtIvUE9BUXP3Mbc3Xg+bITbUAqoAwfLGhphq+1MYshAbwhQLqTcAUcpj6pDJY9mx+zQfLID9uctnkdPyjf07xpvlerSxbkoFCN3DsOW52kAhwJPHGi9Kd/Bm4Mqt0pefX5La1S4WV0TLZEWe7g+06XZVzUf0A0tEdcS3qTvumlTjsLlmL0s+QqiOfBgRLOu+ADMKefnSu4gQPlpTN7FP+URivos0NnbxBh+atrYHEiG4pB6V8UeiTAg0WVbtoClgBODGRHr3L5hqSsLWiT0fiov98JsHNqjKBADCk+eu/sFfbYaw92rtS9vUSk/YfIG0FZqquTk64d2Fyt3wqMwElWaWlG1zsLdsx5aVJp4xh2PLjTabBE5L+lHDmmRJLTtmvLHEuvEihloEfeYQRcidTxV2CS7qkxOafP+cWA1ByKgAtpJnlv2eOeu2SJJz9C73eAbFQp/Vh488J5jX3eYIk4QhqTNLOygjnuBjcer4x7Fe+TolpP/FgBjESzbZH2cmPiwYpA/kwE8dAh7kn6LHT09akV/HVWY5TRY+HsHtnmNa4LKTLMrOCzZG+7EskqmzwPgFaxherorvQubkPyvjQHRQCjDHjannpdF0/LqDpg1XphQ9dcsoijMi5kW6IeWo42KjbWIOTRaWWbpVzzQIxtXoGzu21GCuz1c6DZppt3f8zJsE7deceJXcM2SxdPppif46iz8+6lMvlxApFvhbT0BHY4cBAyKPjfMxx6RtiIMS+ZlVv6ZMzEiP5FpQ/ygdTKnBGZFjGxCyjKUzk59BDuasdZr7d+F868qNCVZyXInrcxnGNYnSzHABavDhQKFT0iMtOMVNCDV/ikmve4XZyCYQegWmWs2ekdBKmG0ibPnYlBMWn3Uf8bMMk7Ij8WhAJWbsDhFE1+3irqfyfT4dsLoYvSHL+braLu3SJS/zqZ7iBUhWEFmMO4tOhDiiI/gk0+lDXoKGz+1WUDdgN2ra7/BBgAWxKEmaaQjVwAAAAASUVORK5CYII=
// @author       koyo
//---------------------------------------------------
// @include      *music.163.com*
// @include      *://y.qq.com*
// @include      *://www.kugou.com*
// @include      *://www.kuwo.cn*
// @include      *://www.lizhi.fm*
// @include      *://*.ximalaya.com*
// @include      *://music.migu.cn*
//---------------------------------------------------
// @include      *://*.kuaishou.com/*
// @include		   *://www.douyin.com/*
//---------------------------------------------------
// @include      *://*.youku.com/v_*
// @include      *://www.iqiyi.com/*
// @include      *://www.iqiyi.com
// @include      *://*.iqiyi.com/v_*
// @include      *://*.iqiyi.com/w_*
// @include      *://*.iqiyi.com/a_*
// @include      *://*.le.com/ptv/vplay/*
// @include      *://v.qq.com/x/cover/*
// @include      *://v.qq.com/x/page/*
// @include      *://*.tudou.com/listplay/*
// @include      *://*.tudou.com/albumplay/*
// @include      *://*.tudou.com/programs/view/*
// @include      *://*.mgtv.com/b/*
// @include      *://film.sohu.com/album/*
// @include      *://tv.sohu.com/v/*
// @include      *://*.acfun.cn/v/*
// @include      *://*.bilibili.com/video/*
// @include      *://*.bilibili.com/anime/*
// @include      *://*.bilibili.com/bangumi/play/*
// @include      *://*.baofeng.com/play/*
// @include      *://vip.pptv.com/show/*
// @include      *://v.pptv.com/show/*
//---------------------------------------------------
// @include      *://www.xvideos.com/*
// @include      *://jatosi.github.io/*
// @include      *ajiup.com/*
// @include      *ixigua.com/*
//---------------------------------------------------
// @include      *://www.xixicai.top/mov/s/*
// @include      *://pan.baidu.com/s/*
// @include      *://cloud.tencent.com/*
// @include      *://www.aliyun.com/*
// @include      *://www.huaweicloud.com/*
// @include      *://activity.huaweicloud.com/*
// @include      *://bandwagonhost.com/*
// @include      *://www.west.cn/*
// @include      *://www.vultr.com/*
//---------------------------------------------------
// @connect      zhihu.com
// @connect      vzuu.com
// @connect      kuaishou.com
// @connect      ixigua.com
// @connect      t.mimixiaoke.com
// @connect      t.jtm.pub
// @connect      cdn.jsdelivr.net
// @connect      pcw-api.iqiyi.com
// @connect      eb.xcj.pub
//---------------------------------------------------
// @require      https://cdn.jsdelivr.net/npm/jquery-tamperk@3.2.1/jquery.min.js
// @grant        GM_info
// @grant        GM_download
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @connect      *
// @run-at       document_start
// 
// @license      AGPL License
// @charset		 UTF-8
// ==/UserScript==

(function() {
	//'use strict';

	/////**********************************************
	//true:开启  false:关闭
	//想关闭某个模块只需把对应的值改为false即可
	const iSOpenDouyinModule = true;     //是否开启抖音功能模块
	const iSOpenKuaishouModule = true;     //是否开启快手功能模块
	const isOpenVideoVipModule = true;   //是否开启视频解析模块
	const isOpenMusicVipModule = true;   //是否开启音乐解析模块
	/////**********************************************

	var $ = $ || window.$; //获得jquery的$标识符
	const window_url = window.location.href;
	const window_host = window.location.host;

	//自定义视频解析接口
	var customizeMovieInterface=[
		//{"name":"此处填接口名称","url":"此处填接口url"}
	];
  
  //alert("test");

	/**
	 * xvideo视频下载
	 */
  if (window.location.hostname === "xvideos.com" || window.location.hostname === "www.xvideos.com") {
    var url = getUrl();
    //alert(url);
    if (!!url) {
      var div = document.createElement("a");
      //div.innerHTML = "无下载";
      div.style.cssText="color: white;\n" +
          "    text-decoration: none;\n" +
          //"    width: 150px;\n" +
          //"    height: 40px;\n" +
          "    line-height: 40px;\n" +
          "    text-align: center;\n" +
          "    background-color: coral;\n" +
          "    position: fixed;\n" +
          "    padding: 0px 10px;\n" +
          "    top: 50%;\n" +
          "    z-index:999999;\n" +
          "    right: 0px;\n" +
          "    cursor: pointer;";
        div.innerHTML = "点击下载";
        div.setAttribute("href",url,"target","_blank");
        div.setAttribute("target","_blank");
        document.body.appendChild(div);
    }
  }
  
  
  if (window.location.hostname === "ixigua.com" || window.location.hostname === "www.ixigua.com") {
    var vTop;
    xv = function(){
      var str,zz,yy,a,b,c;
      str = document.body.outerHTML.toString();
      //alert(str);

      zz = '"dynamic_video_list":';
      yy = '],';

      a = str.indexOf(zz);
      //alert(a);
      str = str.substring(a).toString();
      //alert(str);
      b = str.indexOf(yy);
      //alert("B:" + b);
      c = zz.length;
      //alert(c);
      str = str.substring(c+1,b);
      //str = str.replace("'","");

      str = "[" + str + "]";
      res = JSON.parse(str);
      //alert(res.length);
      //alert(res[0]);

      //document.write(res);  
      //document.write("<br>");

      var array = [];
      var divHtml,link="";
      var n = 150;

      var divHtml = document.createElement("div");

      var topBox = "<div>";

      for (var i = 0; i < res.length; i++) {
        /*
        document.write(res[i].definition);
        document.write("<br>");
        document.write(res[i].main_url);
        document.write("<br>");
        */
        var size = res[i].definition;
        str = res[i].main_url;
        str = str.replace("u002F","");
        str = str.replace(/\\/ig,"/");
        str = decodeURI(str);
        str = str.replace("%3D","=");
        url = decode64(str);
        /*
        document.write(size + " : ");
        document.write(url);
        document.write("<br>");
        */

        if (!!url) {
          cssText="color: white;text-decoration: none;line-height: 40px;text-align: center;font-size:10px;" +
              "    background-color: coral;position: fixed;padding: 0px 10px;" +
              "    top: " + n + "px;z-index:999999" + i + ";right: 0px;cursor: pointer;";
          link += "<a href='" + url + "' target='_blank' style='" + cssText + "'>下载" + size + "视频</a>";

        }
        n = n + 45;
      }
      //alert(n);
      vTop = n;

      //document.write("<br>");
      if (!!link) {

        topBox +=link;
        topBox +="</div>";
        //alert(topBox);
        //document.write(topBox);

        divHtml.innerHTML = topBox;
        //alert(divHtml.innerHTML);
        document.body.appendChild(divHtml);

        return 1;

      }
    }
  
    xa = function() {
      var str,zz,yy,a,b,c;
      str = document.body.outerHTML.toString();
      //alert(vTop);

      zz = '"dynamic_audio_list":';
      yy = '],';

      a = str.indexOf(zz);
      //alert(a);
      str = str.substring(a).toString();
      //alert(str);
      b = str.indexOf(yy);
      //alert("B:" + b);
      c = zz.length;
      //alert(c);
      str = str.substring(c+1,b);
      //str = str.replace("'","");

      str = "[" + str + "]";
      res = JSON.parse(str);
      //alert(res.length);
      //alert(res[0]);

      //document.write(res);  
      //document.write("<br>");

      var array = [];
      var divHtml,link="";
      var n = vTop;

      var divHtml = document.createElement("div");

      var topBox = "<div>";

      for (var i = 0; i < res.length; i++) {
        /*
        document.write(res[i].definition);
        document.write("<br>");
        document.write(res[i].main_url);
        document.write("<br>");
        */
        var size = res[i].bitrate;
        str = res[i].main_url;
        str = str.replace("u002F","");
        str = str.replace(/\\/ig,"/");
        str = decodeURI(str);
        str = str.replace("%3D","=");
        url = decode64(str);
        /*
        document.write(size + " : ");
        document.write(url);
        document.write("<br>");
        */
        if (size<70000) {
          size = "低品质";
        } else if (size>70000 && size<150000) {
          size = "中品质";
        } else if (size>150000) {
          size = "高品质";
        }

        if (!!url) {
          cssText="color: white;text-decoration: none;line-height: 40px;text-align: center;font-size:10px;" +
              "    background-color: #FD2929;position: fixed;padding: 0px 10px;" +
              "    top: " + n + "px;z-index:999999" + i + ";right: 0px;cursor: pointer;";
          //link += "<a href='" + url + "' target='_blank' style='" + cssText + "'>下载" + size + "音频</a>";
          link += "<a href='" + url + "' target='_blank' style='" + cssText + "'>下载" + size + "音频</a>";

        }
        n = n + 45;
      }
      //alert(n);
      vTop = n;
      //alert(vTop);

      //document.write("<br>");
      if (!!link) {

        topBox +=link;
        topBox +="</div>";
        //alert(topBox);
        //document.write(topBox);

        divHtml.innerHTML = topBox;
        //alert(divHtml.innerHTML);
        document.body.appendChild(divHtml);

        return 1;

      }
    }
    if (xv() === xa()) {
        //alert(vTop);
        var div = document.createElement("a");
        //div.innerHTML = "无下载";
        div.style.cssText="color: white;\n" +
            "    text-decoration: none;\n" +
            //"    width: 150px;\n" +
            //"    height: 40px;\n" +
            "    line-height: 40px;\n" +
            "    text-align: center;\n" +
            "    background-color: #107C10;\n" +
            "    position: fixed;\n" +
            "    padding: 0px 10px;\n" +
            "    top: " + vTop + "px;\n" +
            //"    top: 50%;\n" +
            "    z-index:999999;\n" +
            "    right: 0px;\n" +
            "    cursor: pointer;";
        div.innerHTML = "在线合并音视频";
        div.setAttribute("href","https://maple3142.github.io/mergemp4/","target","_blank");
        div.setAttribute("target","_blank");
      //alert(div.style.cssText);
        document.body.appendChild(div);
      }
  }

//************************************************ jatosi 21.10.25 begin ************************************************

//替换字符串 str原字符串  oldStr需要替换的，newStr替换成的
function replaceAll(str, oldStr, newStr){
  var temp = '';
  temp = str.replace(oldStr, newStr);
  if(isContains(temp, oldStr)){
    temp = replaceAll(temp, oldStr, newStr);
  }
  return temp;
}
  
function encode64(input) {
   var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
   input = escape(input);  
   var output = "";  
   var chr1, chr2, chr3 = "";  
   var enc1, enc2, enc3, enc4 = "";  
   var i = 0;  
  
   do {  
      chr1 = input.charCodeAt(i++);  
      chr2 = input.charCodeAt(i++);  
      chr3 = input.charCodeAt(i++);  
  
      enc1 = chr1 >> 2;  
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
      enc4 = chr3 & 63;  
  
      if (isNaN(chr2)) {  
         enc3 = enc4 = 64;  
      } else if (isNaN(chr3)) {  
         enc4 = 64;  
      }  
  
      output = output +   
         keyStr.charAt(enc1) +   
         keyStr.charAt(enc2) +   
         keyStr.charAt(enc3) +   
         keyStr.charAt(enc4);  
      chr1 = chr2 = chr3 = "";  
      enc1 = enc2 = enc3 = enc4 = "";  
   } while (i < input.length);  
  
   return output;  
}  
  
function decode64(input) {
   var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
   var output = "";  
   var chr1, chr2, chr3 = "";  
   var enc1, enc2, enc3, enc4 = "";  
   var i = 0;  
  
   // remove all characters that are not A-Z, a-z, 0-9, +, /, or =  
   var base64test = /[^A-Za-z0-9\+\/\=]/g;  
   if (base64test.exec(input)) {  
      alert("There were invalid base64 characters in the input text.\n" +  
            "Valid base64 characters are A-Z, a-z, 0-9, '+', '/', and '='\n" +  
            "Expect errors in decoding.");  
   }  
   input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
  
   do {  
      enc1 = keyStr.indexOf(input.charAt(i++));  
      enc2 = keyStr.indexOf(input.charAt(i++));  
      enc3 = keyStr.indexOf(input.charAt(i++));  
      enc4 = keyStr.indexOf(input.charAt(i++));  
  
      chr1 = (enc1 << 2) | (enc2 >> 4);  
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
      chr3 = ((enc3 & 3) << 6) | enc4;  
  
      output = output + String.fromCharCode(chr1);  
  
      if (enc3 != 64) {  
         output = output + String.fromCharCode(chr2);  
      }  
      if (enc4 != 64) {  
         output = output + String.fromCharCode(chr3);  
      }  
  
      chr1 = chr2 = chr3 = "";  
      enc1 = enc2 = enc3 = enc4 = "";  
  
   } while (i < input.length);  
  
   return unescape(output);  
}  


//添加样式  GM_addStyle功能相同    例：addGlobalStyle('body { color: white; background-color: black; }');
function addGlobalStyle(css) { 
    var head, style; 
    head = document.getElementsByTagName('head')[0]; 
    if (!head) { return; } 
    style = document.createElement('style'); 
    style.type = 'text/css'; 
    style.innerHTML = css.replace(/;/g, ' !important;'); 
    head.appendChild(style); 
}
//************************************************ jatosi 21.10.25 end ************************************************

	/**
	 * 音乐下载：无损音乐、封面、歌词
	 */
	const musicvip={};
	musicvip.eleId = Math.ceil(Math.random()*100000000);
	musicvip.isRun = function(){
		var musicurls=[
			"music.163.com","y.qq.com","www.kugou.com","www.kuwo.cn","www.xiami.com","music.taihe.com","music.migu.cn","lizhi.fm","qingting.fm","ximalaya.com"
		];
		for(var i=0; i<musicurls.length;i++){
			if(window.location.host.indexOf(musicurls[i])!=-1){
				return true;
			}
		}
		return false;
	};
	musicvip.getPlayUrl = function(){
		var currentHost = window.location.host;
		var currentUrl = window.location.href;
		var playUrl = null;
		if(currentUrl.match(/music\.163\./)){ //网易云音乐
			if(currentUrl.match(/^https?:\/\/music\.163\.com\/#\/(?:song|dj)\?id/)) {
				playUrl = 'https://music.liuzhijin.cn/?url='+encodeURIComponent(currentUrl);
			}else if(currentUrl.match(/^https?:\/\/y\.music\.163\.com\/m\/(?:song|dj)\?id/)) {
				playUrl = 'https://music.liuzhijin.cn/?url='+encodeURIComponent('https://music.163.com/song?id='+getQueryString('id'));
			}
		}
		else if(currentUrl.match(/y\.qq\.com/)){ //QQ音乐
			if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
			if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
			var musicMatch = currentUrl.match(/^https?:\/\/y\.qq\.com\/n\/ryqq\/songDetail\/(\S*)/);
			if(musicMatch){
				playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=qq'
			}
			var musicMatch2 = currentUrl.match(/^https?:\/\/y\.qq\.com\/n\/yqq\/song\/(\S*).html/);
			if(musicMatch2){
				playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch2[1]+'&type=qq';
			}
		}
		else if(currentUrl.match(/kugou\.com/)){ //酷狗
			var musicMatch = currentUrl.match(/hash=(\S*)&album/);
			if(musicMatch){
				playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=kugou';
			}
		}
		else if(currentUrl.match(/kuwo\.cn/)){  //酷我
			if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
			if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
			var musicMatch = currentUrl.match(/play_detail\/(\S*)/);
			if(musicMatch){
				playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=kuwo';
			}
		}
		else if(currentUrl.match(/www\.ximalaya\.com/)){ //喜马拉雅
		    var xmlyUrlArr = currentUrl.split("/");
		    for(var xuaIndex =0;xuaIndex<xmlyUrlArr.length;xuaIndex++){
		        if(xuaIndex==xmlyUrlArr.length-1){
					playUrl = 'https://music.liuzhijin.cn/?id='+xmlyUrlArr[xuaIndex]+'&type=ximalaya&playUrl='+encodeURIComponent(currentUrl);
		        }
		    }
		}
		else if(currentUrl.match(/www\.lizhi\.fm/)){ //荔枝音乐
			if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
			if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
			var musicMatch = currentUrl.match(/^https?:\/\/www\.lizhi\.fm\/(\d*)\/(\d*)/);
			if(musicMatch){
				playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[2]+'&type=lizhi';
			}
		}
		else if(currentUrl.match(/music\.migu\.cn/)){ //咪咕音乐
			if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
			if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
			var musicMatch = currentUrl.match(/^https?:\/\/music\.migu\.cn\/v3\/music\/song\/(\S*)/);
			if(musicMatch){
				playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=migu';
			}
		}
		return playUrl;
	};
	musicvip.addStyle=function(){
		var innnerCss =
    /*
		"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" {position:fixed;top:150px; right:0px; padding:5px 0px; width:28px; background-color:coral;z-index:9999999899999;}"+
		"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" >.plugin_item{cursor:pointer; width:100%; text-align:center;}"+
		"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" >.plugin_item >img{width:24px; display:inline-block; vertical-align:middle;}";
    */
		"@keyframes turnaround{0%{-webkit-transform:rotate(0deg);}25%{-webkit-transform:rotate(90deg);}50%{-webkit-transform:rotate(180deg);}75%{-webkit-transform:rotate(270deg);}100%{-webkit-transform:rotate(360deg);}}"+
		"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" {position:fixed; top:150px; right:20px; padding:0px 8px; background-color:coral;z-index:9999999899999;}"+
		"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" >.plugin_item{cursor:pointer; width:100%; padding:10px 0px; text-align:center;}"+
		"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" >.plugin_item >img{width:20px; display:inline-block; vertical-align:middle;animation:turnaround 3s linear infinite;}";
		$("body").prepend("<style>"+innnerCss+"</style>");
	};
	musicvip.generateHtml=function(){
		var html="";
		var vipImgBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADU0lEQVRoQ+2ZTYhNYRjHf/+1kkQk5WNDbNj5GGUoaXyUZDFZWEgWmgXRLFkiYjFJGlYWE1IoH1mQZrJRysJHYuEjJR8LYlYePdcZnXvuOfe+59wzM+fWvJtb9zxfv/d53+d533NEhw91ePxMAeTNoJlZik6fpIG8tlx+wjOQAeCxbJJ0Py9ElQDeA92S3uSBqBKAx+0Z2CzpTyhE1QA87nOSDpQKYGYPQg0m5SR1x/9rsgfiYkcknQrxGZSBQKep/iTV+chha6ek660gqgzwEeiR9KwZRJUBPO6HEcTvLIiqA3jcg5L2lQlQtykzDB8F1tc6ZfE9EDfdL+lkmq/cGUgGlGY0qlplArib1E3dSQCpm7qTADwLA5L64lnvNICfwDxJP8YgOg3A4z4s6XSlALwwmNlqYBXgvz3AtIwKNyKpa9wAzGwxcDFPGU0ptQuBXcBeYEkC5JWkpU0BzGw6cAjYDqys2zSJuu7PYvJjM+j6tRHSB7JKs5l5KU4eJL9Imp0JYGZO7o1oeWrjaGxMeeUbrpTNeouZvUxmIS6fPCn6jN9ocng6I8kzUxtmthW4FSof6eQFeAqsiPm4JMmX1r8Mx52b2TCwNiOgJ8AOSR9iAEnjcdUG+YIA34EZMcNdkkayANLeGLjsWUkHk2Bm5obWpACnyucFMLP5gN+Vx8Y1Sb5k/49kBvxhP7AIeA3cBR5LupeWFTNbBhwHNgDPgdvN5AsAeDxXIt8eg6+AuqN1UCNrssZzP0q7kTWpQj5BDuBBb5H0Oemw0gBRxhxiVNLbtNmqPECrFE8BtJqhqJt6GZwJzAJONKzjlO7eym5qGQ1VaiVnZtuiY4j/zmklH3LLy7JR6hKKjiHeL/xEGTwmHSA6CnvgdU0mlGBSAaJZH2s2oTHH5d5JWlBE0XXaWkIlBO8xDEtaN+EAASfR0Jh6JQ2FCpfWic3sJuBVpp0xJKm3HQOFllBJs+9H8d2SXkwGwB3/ktKGY/8Ss0fSpzZs1FSLZuA8sL+g80HAv0qOFtSvUysKcCy6N+eJ4Wr0Zu1RHqVWsoUA3KiZhUD4G7TLfm+W5Muu9FEYIILwCuK3sY3AXOAb8DX6veAvCCT9Kj3qmMG2AMYzsFDbUwChMzVecn8BFTyUQAGmXQcAAAAASUVORK5CYII=";
		html+= "<div id='plugin_kiwi_analysis_vip_music_box_"+this.eleId+"'>";
		html+= "<div class='plugin_item jump_analysis_website' title='VIP音乐破解，免客户端下载！'><img src='"+vipImgBase64+"'></div>";
		html+= "</div>";
		$("body").append(html);

		$("#plugin_kiwi_analysis_vip_music_box_"+this.eleId+"").on("click", function(){
			var playUrl = musicvip.getPlayUrl();
			if(!!playUrl) GM_openInTab(playUrl, false);
		})
	};
	musicvip.operation=function(){
		setInterval(function(){
			var playUrl = musicvip.getPlayUrl();
			var $vipMusicBox = $("#plugin_kiwi_analysis_vip_music_box_"+musicvip.eleId+"");
			if(!!playUrl){
				if($vipMusicBox.length==0){
					musicvip.generateHtml();
				}
			}else{
				$vipMusicBox.remove();
			}
		}, 100);
	};
	musicvip.start=function(){
		if(this.isRun()){
			this.addStyle();
			this.operation();
		}
	};
	if(isOpenMusicVipModule){
		musicvip.start();
	}

	/**
	 * 抖音解析开始
	 */
	const douyingHelper={};
	douyingHelper.getVideoPlayerUrl=function(){
		var innnerCss = ".video_analysis_889988{font-size:12px;padding:5px 10px;text-align:center;color:#FFF;background-color:coral;cursor:pointer;margin-bottom:10px;};";
		$("body").prepend("<style>"+innnerCss+"</style>");
		var topBox = "<div style='position:fixed;z-index:999999;top:150px;right:0px;' id='xdddd78887444iio'>";
			for(var i=0; i<10; i++){
				topBox += "<div class='video_analysis_889988' style='display:none;'><a href='' target='_blank'></a></div>"
			}
			topBox +="</div>";
		$("body").append(topBox);

		setInterval(function(){
			$("body").find("video").each(function(){
				var numbers = ["①","②","③","④", "⑤", "⑥", "⑦"];
				var index = 0;

				$("#xdddd78887444iio .video_analysis_889988").hide();
				var src = $(this).attr("src");
				var $ele = $("#xdddd78887444iio").find(".video_analysis_889988").eq(index);
				var $a = $ele.find("a");
				$a.text(" 解析 "+numbers[index]);
				$a.attr("href", src);
				$ele.show();
			});
		},300);
	};
	douyingHelper.getRecommendPlayerUrl=function(){
		var base64Img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAArRJREFUaEPtWD1vE0EQfWNDNhENNBSIggok3JEGnylCAQgqKAgQCtYlFCA6EoqYAoKUhh+AyFIQPlKAKEDQkAL7RBGJBokuFSC6SBTJGeFBZ+WIufju9r58srRu7OLtzHv7ZndmTRjyDw05fxgBRTtoHBgqBzZq8gQ6qBDxODHtz5I8E/8A8LlM5a87mo9e68bWLiHHqi8CfEk3cCoc01thL5zRiaElwLEk6wTLGiNaKpJfJMCpyRkw7mZNTise4bZoqnth2FABG9aVkwR6p5UsJxCDT422Hr8PCh8qwKnVp8EcugM58d4KSzQjmgtzyQRY8hmAC7mTDE/wXLTUxUQC2lX5gQkTKQQ0Ntd637FDEWN5xFbHBy+g5yp0qvU3ID4dmz2A4gQADdFSd1zSjiVnASRywQhIcQaMA275mRIyJWRuoaIa2fD0AX4KpoMgjPs6bdQ1+h3ANyIcZsauwFEhz1GCGTdHbfWg221r8gUY53uIBAsgLImmmnSx7jOVGMHjcp4CwJgUtlrySPtE9BfQQ95dt35UHiiVsFqIA/CR8TmxXUA4vq+G/BtZMKkv/w1zhIpXNgGOFSSg2++3avofOUvO9grwfschP9hRoo+IoLruc+ADnwr5l1Bvag0RccgP1gFPSIiIuOSLERB0Jrb3Ca0X5mBLyFdOKFGj85v3lsq45mtyWuSLc0CbXjQwlQPrNTlXYtyKTpMfokO4P9ZU04GdOiy1U5VTIDzJj55GZMZlYavFRAJ4Qu5ut/ERQEUjVeYQZl4Vgo7QslpLJKA721TlWRBeZs5OJyDjnLDVqzBo5N/r7uK2Vb/K4BsADunkzQTjm3QTO+AtXDs2tWesM3K9+3Dh7uNlXyZEN4MQ8AuMFRCt7PxTnqdPD3/qxNdyQCdQURgjoKid9/IaB4wDKXfgL3IWtUBmCwlpAAAAAElFTkSuQmCC';
		var elementId = "douyin_v_"+Math.ceil(Math.random()*100000000);
		var html =
			`
				<a id="`+elementId+`" target="_blank" style="position:fixed;top:150px;right:0px;display:inline-block;cursor:pointer;"><img src=`+base64Img+` style="width:33px;"></a>
			`;
		$("body").append(html);
		var $element = $("#"+elementId);
		setInterval(function(){
			$("body").find("video").each(function(){
				$element.attr("href", $(this).attr("src"));
			});
		},300);
	};
	douyingHelper.start=function(){
		if(window.location.host==="www.douyin.com"){
			let current_window_url = window.location.href;
			if(current_window_url.indexOf("//www.douyin.com/video")!=-1){ //视频播放界面
				this.getVideoPlayerUrl();
			}
			else if(current_window_url.indexOf("//www.douyin.com/recommend")!=-1){ //首页推荐界面
				this.getRecommendPlayerUrl();
			}
		}
	};
	if(iSOpenDouyinModule){
		douyingHelper.start();
	}

	/**
	 * 快手去水印下载
	 */
	const kuaishouHelper={};
	kuaishouHelper.anasetinterval=null;
	kuaishouHelper.isRun=function(){
		var windowurl = window.location.href;
		if(windowurl.indexOf("kuaishou.com")!=-1){
			return true;
		}
		return false;
	};
	kuaishouHelper.generateCss = function(){
		var innnerCss =
		`
			.video_analysis_889988{font-size:12px;padding:8px;text-align:center;color:#FFF;background-color:coral;cursor:pointer;margin-bottom:15px;};
			#douyin_helper_download_play{display:none;}
		`;
		$("body").prepend("<style>"+innnerCss+"</style>");
	};
	kuaishouHelper.getPlayerUrl=function(){
		var $analysis = $("#douyin_helper_download_analysis");
		var isRun = false;
		var $that = this;
		$analysis.on("click", function(){
			if(isRun) return;
			var windowurl = window.location.href;
			if(windowurl.indexOf("#")!=-1){
				windowurl = windowurl.split("#")[0];
			}
			if(windowurl.indexOf("?")!=-1){
				windowurl = windowurl.split("?")[0];
			}
			var urlArray = windowurl.split("/");
			var sourceId = urlArray[urlArray.length-1];
			if(!sourceId){
				return;
			}
			windowurl = "https://c.kuaishou.com/fw/photo/"+sourceId;
			var times=1;
			isRun = true;
			$that.anasetinterval = setInterval(function(){
				$analysis.text("本地解析：准备中("+times+"S)");
				times++;
			},1000);
			//windowurl = windowurl.replace("https://video.kuaishou.com/featured", "https://c.kuaishou.com/fw/photo");
			GM_xmlhttpRequest({
				url: windowurl,
				method: "get",
				headers: {
					'User-agent': 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Mobile Safari/537.36'
				},
				onload: function(response) {
					var status = response.status;
					var playurl = "";
					if(status==200||status=='200'){
						var responseText = response.responseText;
						if(!!responseText){
							try{
								playurl = responseText.match(/"srcNoMark":"(https:\/\/.*?)"/i)[1];
							}catch(e){}
						}
					}
					//console.log("playurl="+playurl);
					clearInterval(kuaishouHelper.anasetinterval);
					kuaishouHelper.anasetinterval==null;
					isRun=false;
					if(!!playurl){
						$analysis.text("点我解析");
						GM_openInTab(playurl, false);
					}else{
						$analysis.text("失败：点我重试");
					}
				}
			});
		});
	};
	kuaishouHelper.generateHtml = function(){  //不停的检测地址变化
		setInterval(function(){
			var $box = $("#video_analysis_plugin_xxxsiii");
			if(window.location.href.indexOf("kuaishou.com/short-video")!=-1){
				if($box.length==0){
					var topBox = "<div style='position:fixed;z-index:999999;top:40%;right:0px;' id='video_analysis_plugin_xxxsiii'>"+
									"<div id='douyin_helper_download_analysis' class='video_analysis_889988'>点我解析</div>"+
								 "</div>";
					$("body").append(topBox);
					kuaishouHelper.getPlayerUrl();
				}
			}else{
				$box.remove();
			}
		},100);
	};
	kuaishouHelper.start=function(){
		if(this.isRun()){
			kuaishouHelper.generateCss();
			kuaishouHelper.generateHtml();
		}
	};
	if(iSOpenKuaishouModule){
		kuaishouHelper.start();
	}

	/**
	 * VIP视频破解开始
	 */
	const movievipHelper={};
	movievipHelper.customizeSourceArray=customizeMovieInterface;
	movievipHelper.defaultSourceArray=[
		{"name":"高速接口","category":"1","url":"https://jsap.attakids.com/?url="},
		{"name":"综合纯净/B站","url":"https://z1.m1907.cn/?jx="},
		{"name":"综合/B站1","url":"https://vip.parwix.com:4433/player/?url="},
		{"name":"综合/B站2","url":"https://www.cuan.la/m3u8.php?url="},
		{"name":"乐多资源","url":"https://api.leduotv.com/wp-api/ifr.php?isDp=1&vid="},
		{"name":"BL","url":"https://vip.bljiex.com/?v="},
		{"name":"ccyjjd","url":"https://ckmov.ccyjjd.com/ckmov/?url="},
		{"name":"M3U8","url":"https://jx.m3u8.tv/jiexi/?url="},
		{"name":"七哥","url":"https://jx.mmkv.cn/tv.php?url="},
		{"name":"老板","url":"https://vip.laobandq.com/jiexi.php?url="},
		{"name":"盘古","url":"https://www.pangujiexi.cc/jiexi.php?url="},
		{"name":"大白","url":"https://api.myzch.cn/?url="},
		{"name":"CK","url":"https://www.ckplayer.vip/jiexi/?url="},
		{"name":"CHok","url":"https://www.gai4.com/?url="},
		{"name":"云点播","url":"https://api.iopenyun.com:88/vip/?url="},
		{"name":"虾米","url":"https://jx.xmflv.com/?url="},
		{"name":"618G","url":"https://jx.618g.com/?url="},
		{"name":"ckmov","url":"https://www.ckmov.vip/api.php?url="},
		{"name":"RDHK","url":"https://jx.rdhk.net/?v="},
		{"name":"爱豆","url":"https://jx.aidouer.net/?url="},
		{"name":"H8","url":"https://www.h8jx.com/jiexi.php?url="},
		{"name":"解析la","url":"https://api.jiexi.la/?url="},
		{"name":"久播","url":"https://jx.jiubojx.com/vip.php?url="},
		{"name":"九八","url":"https://jx.youyitv.com/?url="},
		{"name":"老板","url":"https://vip.laobandq.com/jiexi.php?url="},
		{"name":"SMYS","url":"https://jxx.smys8.cn/index.php?url="},
		{"name":"MUTV","url":"https://jiexi.janan.net/jiexi/?url="},
		{"name":"明日","url":"https://jx.yingxiangbao.cn/vip.php?url="},
		{"name":"OK","url":"https://okjx.cc/?url="},
		{"name":"维多","url":"https://jx.ivito.cn/?url="},
		{"name":"小蒋","url":"https://www.kpezp.cn/jlexi.php?url="},
		{"name":"星驰","url":"https://vip.cjys.top/?url="},
		{"name":"星空","url":"http://60jx.com/?url="},
		{"name":"0523","url":"https://go.yh0523.cn/y.cy?url="},
		{"name":"17云","url":"https://www.1717yun.com/jx/ty.php?url="},
		{"name":"4K","url":"https://jx.4kdv.com/?url=","t":"m"},
		{"name":"66","url":"https://api.3jx.top/vip/?url="},
		{"name":"116","url":"https://jx.116kan.com/?url="},
		{"name":"200","url":"https://vip.66parse.club/?url="},
		{"name":"云析","url":"https://jx.yparse.com/index.php?url="},
		{"name":"8090","url":"https://www.8090g.cn/?url="},
		{"name":"月亮","url":"https://api.yueliangjx.com/?url="},
		{"name":"迪奥","url":"https://123.1dior.cn/?url="},
		{"name":"小狼","url":"https://jx.yaohuaxuan.com/?url="}
	];
	movievipHelper.getServerSource=function(){
		//合并自定义接口和默认接口
		try{
			movievipHelper.defaultSourceArray = movievipHelper.customizeSourceArray.concat(movievipHelper.defaultSourceArray);
		}catch(e){
			console.log("合并出现异常，请检查自定义接口");
		}
		//执行操作
		movievipHelper.addStyle();
		movievipHelper.generateHtml();
		movievipHelper.operation();
		console.log("onload................");
	};
	movievipHelper.eleId = Math.ceil(Math.random()*100000000);
	movievipHelper.isRun = function(){
		var isVip = false;
		var host = window.location.host;
		var href = window.location.href;
		var vipWebsites = ["iqiyi.com","v.qq.com","youku.com", "le.com","tudou.com","mgtv.com","sohu.com","acfun.cn","bilibili.com","baofeng.com","pptv.com"];
   		for(var b=0; b<vipWebsites.length; b++){
	   		if(host.indexOf(vipWebsites[b]) != -1){
				if("iqiyi.com"===vipWebsites[b]){
					//爱奇艺需要特殊处理
					if(href.indexOf("iqiyi.com/a_")!=-1 || href.indexOf("iqiyi.com/w_")!=-1 || href.indexOf("iqiyi.com/v_")!=-1){
						isVip = true;
						break;
					}
				}else{
					isVip = true;
					break;
				}
	   		}
	   	}
   		return isVip;
	};
	movievipHelper.addStyle=function(){
		var themeColor = "#FF9208";
		var innnerCss =
		"#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" {position:fixed;top:150px; right:0px; padding:5px 0px; width:28px;}"+
		"#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item{cursor:pointer; width:100%; text-align:center;}"+
		"#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.jump_analysis_website{padding:5px 0px;background-color:"+themeColor+";}"+
		"#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.open_page_inner_source{margin-top:6px; padding:5px 0px;background-color:"+themeColor+";}"+
		"#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item >img{width:24px; display:inline-block; vertical-align:middle;}"+
		"#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box{display:none;width:310px;height:400px;position:absolute;right:25px;overflow:hidden;}"+
		"#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box> .inner_table_box{width:330px;height:100%;padding-left:10px;overflow-y:scroll;overflow-x:hidden;}"+
		"#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box> .inner_table_box> table{width:300px;border-spacing:5px;border-collapse:separate;line-height:20px;}"+
		"#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box> .inner_table_box> table td{border-bottom:3px solid "+themeColor+";border-top:3px solid "+themeColor+";width:33%;color:#FFF;font-size:11px;text-align:center;cursor:pointer;background-color:"+themeColor+";box-shadow:0px 0px 5px #fff;border-radius:3px;}"+
		"#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box> .inner_table_box> table td:hover{border-bottom:3px solid #FEF2A6;border-top:3px solid #FEF2A6;}"+
		"#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box> .inner_table_box> table .td_hover{border-bottom:3px solid #FEF2A6;border-top:3px solid #FEF2A6;}";
		$("body").prepend("<style>"+innnerCss+"</style>");
	};
	movievipHelper.generateHtml=function(){
		var html="";
    var vipImgBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAZCAMAAACB+BfnAAAAA3NCSVQICAjb4U/gAAAAOVBMVEX/kgj77e3++fn87vH////98vT99PX87u/77/H97e/++vv98fH98/X97/H77+/99ff97e397fH97++TjXbzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAFnRFWHRDcmVhdGlvbiBUaW1lADEwLzE5LzIx1y7T0AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAABpSURBVCiRtdJLCsAwCARQm076CYXc/7YtBEJsNc6ms36oqCI/paKuscKTmAGMawoXpYCFUigThyEHpfy2WiHZ9fCOWe6jQKmdUfb82niXGs3mGKWY3Z++6SrlGZKwWVfxr2YU4u+FMX5uOVoD1/k6OAMAAAAASUVORK5CYII=";
		var openBase64 = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIABkAJQMBEQACEQEDEQH/xAAYAAEAAwEAAAAAAAAAAAAAAAAHAAEJBv/EADAQAAEEAQIEAggHAAAAAAAAAAMCBAUGAQAHCBETIQkXEhQxQVhhltcWGVeGsdTx/8QAGgEBAQADAQEAAAAAAAAAAAAABwAGCAkFCv/EAD8RAAEEAQICBgMLDQEAAAAAAAMCBAUGAQAHEhMIERQXV5YWGCEJFSIjMUFYYdTW1yQlJjRWZnGBkZWhscHH/9oADAMBAAIRAxEAPwDYrYDaGH3puMpV5vcCN23aR1XfWEc5KR4JFs7cM5OGj0RKQnmoJAynFKGeYMl2ZaRsSIS1JgmSB+bTYbaWH3kt0pWZu/R23TWPrL2wDm5OPBIt3ThpJw7BMUkJ5qDSMphShnmDJdGWlDEiEtSYJkge327e4kltnXGE7F1F7dDvJ1rDri2DsrM7cLljJO1SGSCjJVSxiIwG3yNQBJyp0hWXCMowgi7slwq1DdqBnZmY33r1CPD2aSgAxr6BZyJpBswSBQ5ZBHFwg8jA762cDEgLhKemrPrC/cr7MdF6p7qwU3MS++EBRjxNkkYEMc9g2ciZ+3YpCocqgh7dC5GB1zc4GNITpTy1flC+vHUebn792Hb6Wi42O2ql7WKRhGUuR61lnDMbQzvJcLj1oDXZTjK3wPGVkUQOVcePik9XtaPy/wDbn4r6l9IRf3M0xeobt79Kaq+Uo38R9Gnrc3HwCsHmF99ydVngA2693FfUs/tGL+5f86vUN29+lNVfKcZ/3cjV63Fx8ArB5hffcnGs77rX29TuVtqzOVDPNK1Zp6vtZxuFDcEy3hpV3HAlQAG5eoAGRE2S8GFDx2gaDJQlyfCcFXz9ucC3qtwtdYZyop1pXLLOwLWbAFDcEw3h5R1HglQgG5eoCKQE3S7GFDx2gaDYQlyfCcFXuJWJc1grdennMeSJcTcHEy54spFGLGmkmDd4WPKZYGqikZrMpusimzdS1DyrIBZzkaV/hrgNlrFepZlvrMqg6kKpSDuNdJkTxfWsg5aDEzaqctwOCZSuMPLl6fSzjOQ4X3yjCcr/AEbYDZmx3iYY74zOIKqCqMg7jXmZM8VgljHLwQmbftDcDha+ONPLkwHI8pVkXHnrUNKVHW9svuZC1WOdbVxnvrYSWJm3et+xifcuFXHypHJ+SYoUY4Xoo5HM5mM4wTKfkXnOG3h/o3CBPVywud47guHnW9slWkM3xPvWGDVsSG+Y5z0hMloJkilHxk+SdQno8lCHhOMqaNg6N0SJ6uWBxvBb8Q843tko0hwZsD6P51dEhtmOc8oDBaCc1Sj/AB+SYWvh6lCHw44jDd609IqKmocG29dxIxRa+wcSRvehq75c0tRsPQ8wjtCkYQnAvicI4UdeMpIvrzhLx5WeHH+opPqyQ/padO6v3O7xEx5wk/sGib086Z37HY8vMvtmqztX4cfs8xSY59uf4ske3z7MtXdV7nd4iY84Sf2DV6e9M7Ht9Dsez93mWev6v1vP+v8AOswb41rjK8XNlTnKnlRaWuxNas7UVRlOq43l3goNyoy8JWVR4xDUuSqSlRMrypWMZznGuZl9aV1hebmxqDntlTZWyxNKu75ynHaq63mHgYRz2haULPz41DYvOWlKi8XGpOMqzjG9NSPMuqrWXVjDhvYXNehTzzfA8CwCZNGtiSgcCTlSRYE+UdHLSpWEcPDjOcY69I+wFr2eqFwlZLeynyt2qzirPmEdFRDNg9ct7EaUhjtJAg5CZhAjAGObSzdRkOjGQR2JKWpELWQKDsNado6jbpSR3nqEndKwesPmEdFxLRi8cN7AWThztJBaH8vChGEMe2lG6iocmKkjoSUtSIWsgsN3cgNxrFXGDLbGxsKxPBnWrt6/kXLtsE0MNjJCcM0LZxsoRZSPDx5sCWAY1IATOToUlCCLmyW5vCfV4GdabubT2e2TTuzSL6HexkXCPgs68ZIcMI4uX9shSDcN1INkiRicCz6eMpOrPPkr7L7k9FisQU203Y2rslrmXVkkX0Q9jY2GehaQBkgwxjyqfWqHIM7dSDZWlAji+HjhOrPXo83Oo+/87KxTjb2/wdfjG8IyayLV8+lGpHMwLJO1vEYaQEklYTYUPgysgl/Bz1ix87R55+Hv8P16+nar9xNMffd0BPAK6+X6z+IWjXus6Xvi7Vv7zP8A3P1Wd8/D35duH69c+3tr1V5e35bif7q77ugL82wd1/nX6zn/ANC1d1nS98Xat9f54n/k+r9D/l/p/HWeF1fV6UuVtk6lHniapI2aefVmKdDEFzGV53Ku3ELHuAgcvACOyjSNmxRhduhIINSRuToxgquftzfV+TuFskqnHniatIWWdfVqLcjEFzG193KOjw0e4EBw8CI7OOI2blGF26Egg1JG4OjGCq3DrDSYYVqvMbC8FIT7ODiWk4/AshQPphuwbhk3gSFC2KQTl6g5hrI3bkWheFLCJWcoTzOsa17mpq1amrVqatWpq1a//9k=";
		html+= "<div id='plugin_analysis_vip_movie_box_"+movievipHelper.eleId+"' style='z-index:999999999999999999999;'>";
		html+= "<div class='plugin_item jump_analysis_website' title='点我！跳转综合VIP视频解析，电视剧可免跳出选集'><img src='"+vipImgBase64+"'></div>";
		html+= "<div class='plugin_item open_page_inner_source'><img src='"+openBase64+"'>";
		html+= "<div class='play_source_box'>";
		html+= "<div class='inner_table_box'>";
		html+= "<table style=''><tr>";
		for(var playLineIndex=0; playLineIndex<this.defaultSourceArray.length; playLineIndex++){
			if(playLineIndex%3==0){
				html +="<tr>";
				html += "<td data-url='"+this.defaultSourceArray[playLineIndex].url+"'>"+this.defaultSourceArray[playLineIndex]['name']+"</td>";
				continue;
			}
			html += "<td data-url='"+this.defaultSourceArray[playLineIndex].url+"'>"+this.defaultSourceArray[playLineIndex]['name']+"</td>";
			if((playLineIndex+1)%3==0){
				html +="</tr>";
			}
		}
		html+= "</tr></table>";
		html+= "</div></div>";
		html+= "</div>";
		html+= "</div>";
		$("body").append(html);
		var $vipMovieBox = $("#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+"");
		var $playSourceBox = $("#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+">.plugin_item>.play_source_box");
		var btnHeight = $vipMovieBox.height();
		var playSourceBoxHeight = $playSourceBox.height();
		var playSourceBoxTop = (playSourceBoxHeight-btnHeight)*0.3;
		$playSourceBox.css("top","-"+playSourceBoxTop+"px");
	};
	movievipHelper.comprehensiveAnalysis=function(videoUrl, newWindow){ //综合解析
		var jumpWebsite = "https://jatosi.github.io/?url="+videoUrl;
		//var jumpWebsite = "http://ajiup.com/zz.html?url="+videoUrl;
		if(newWindow && (typeof GM_openInTab==="function")){
			GM_openInTab(jumpWebsite, {active: true});
		}else{
			location.href = jumpWebsite;
		}
	};
	movievipHelper.operation=function(){
		$("body").on("click", "#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" .jump_analysis_website", function(){
			movievipHelper.comprehensiveAnalysis(window.location.href, true);
		});
		var $vipMovieBox = $("#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+">.open_page_inner_source");
		var $playSourceBox = $("#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+">.plugin_item>.play_source_box");
		$vipMovieBox.on("mouseover", () => {
			$playSourceBox.show();
		});
		$vipMovieBox.on("mouseout", () => {
			$playSourceBox.hide();
		});
		var player_nodes = [
			{ url:"v.qq.com", node:"#mod_player"},
			{ url:"www.iqiyi.com", node:"#flashbox"},
			{ url:"v.youku.com", node:"#player"},
			{ url:"w.mgtv.com", node:"#mgtv-player-wrap"},
			{ url:"www.mgtv.com", node:"#mgtv-player-wrap"},
			{ url:"tv.sohu.com", node:"#player"},
			{ url:"film.sohu.com", node:"#playerWrap"},
			{ url:"www.le.com", node:"#le_playbox"},
			{ url:"video.tudou.com", node:".td-playbox"},
			{ url:"v.pptv.com", node:"#pptv_playpage_box"},
			{ url:"vip.pptv.com", node:".w-video"},
			{ url:"www.wasu.cn", node:"#flashContent"},
			{ url:"www.acfun.cn", node:"#ACPlayer"},
			{ url:"vip.1905.com", node:"#player"},
			{url:"play.tudou.com",node:"#player"},
			{url:"www.bilibili.com/video",node:"#bilibiliPlayer"},
			{url:"www.bilibili.com/bangumi",node:"#player_module"},
		];
		var node = "";
		for(var m in player_nodes) {
			var playUrl = window.location.href;
			if(playUrl.indexOf(player_nodes[m].url)!= -1){
				node = player_nodes[m].node;
			}
		}
		$("#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box>.inner_table_box> table td").on("click", function(){
			$("#play-iframe-outer-7788op").remove();

			$("#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box>.inner_table_box> table td").removeClass("td_hover");
			$(this).addClass("td_hover");

			var playUrl = window.location.href;
			var playHtml = "<div id='play-iframe-outer-7788op' style='width:100%;height:100%;'><iframe allowtransparency=true frameborder='0' scrolling='no' allowfullscreen=true allowtransparency=true name='jx_play' style='height:100%;width:100%' id='play-iframe-6677i-7788'></iframe></div>";
			$(node).html(playHtml);
			var iframeSrc= $(this).attr("data-url")+playUrl;
			$("#play-iframe-6677i-7788").attr("src", iframeSrc);
		})
	};
	//视频广告过滤相关代码借鉴自其它脚本
	movievipHelper.adAccelerate=function(){//视频广告加速
		switch (window.location.host) {
			case 'www.iqiyi.com':
				try{
					unsafeWindow.rate = 0;
					unsafeWindow.Date.now = () => {
						return new unsafeWindow.Date().getTime() + (unsafeWindow.rate += 1000);
					}
					setInterval(() => {
						unsafeWindow.rate = 0;
					}, 600000);
				}catch(e){}

				//广告过滤iqiyi有点问题，10s后循环结束
				let iqiyiDelay = 0;
				let iqiyiInterval =  setInterval(() => {
					try{
						let cupidPublicTime = document.getElementsByClassName("cupid-public-time");
						if(cupidPublicTime.length!=0 && !!cupidPublicTime[0]){
							$(".skippable-after").css("display", "block");
							let skippableAfter = document.getElementsByClassName("skippable-after");
							if(skippableAfter.length!=0 && !!skippableAfter[0]){
								skippableAfter[0].click();
							}
						}
						$(".qy-player-vippay-popup").css("display", "none");
						$(".black-screen").css("display", "none");
					}catch(e){}
					if(iqiyiDelay>=10000){
						clearInterval(iqiyiInterval);
					}
					iqiyiDelay += 500;
				}, 500);
				break;
			case 'v.qq.com':
				try{
					setInterval(() => { //视频广告加速
						$(".txp_ad").find("txpdiv").find("video")[0].currentTime = 1000;
						$(".txp_ad").find("txpdiv").find("video")[1].currentTime = 1000;
					}, 1000)
					setInterval(() => {
						var txp_btn_volume = $(".txp_btn_volume");
						if (txp_btn_volume.attr("data-status") === "mute") {
							$(".txp_popup_volume").css("display", "block");
							txp_btn_volume.click();
							$(".txp_popup_volume").css("display", "none");
						}
						$(".mod_vip_popup").css("display", "none");
						$(".tvip_layer").css("display", "none");
						$("#mask_layer").css("display", "none");
					}, 500);
				}catch(e){}
				break;
			case 'v.youku.com':
				try{
					window.onload = function () {
						if (!document.querySelectorAll('video')[0]) {
							setInterval(() => {
								document.querySelectorAll('video')[1].playbackRate = 16;
							}, 100)
						}
					}
					setInterval(() => {
						var H5 = $(".h5-ext-layer").find("div")
						if(H5.length != 0){
							$(".h5-ext-layer div").remove();
							var control_btn_play = $(".control-left-grid .control-play-icon");
							if (control_btn_play.attr("data-tip") === "播放") {
								$(".h5player-dashboard").css("display", "block");
								control_btn_play.click();
								$(".h5player-dashboard").css("display", "none");
							}
						}
						$(".information-tips").css("display", "none");
					}, 500);
				}catch(e){}
				break;
			case 'tv.sohu.com':
				try{
					setInterval(() => {
						$(".x-video-adv").css("display", "none");
						$(".x-player-mask").css("display", "none");
						$("#player_vipTips").css("display", "none");
					}, 500);
				}catch(e){}
				break
		}
	};
	movievipHelper.paramsSelectedInit=function(){
		var episodeList=[];
		var episodeObj = {
			"websiteTitle":"",
			"episodeList":episodeList,
			"originVideoUrl":""
		};
		GM_setValue("episodeObj",episodeObj);
		return episodeObj;
	};
	movievipHelper.getSelected=function(){
		if(window_host==="v.qq.com"){
			setInterval(function(){ //每100ms,检测一次集数的变化
				var episodeObj = movievipHelper.paramsSelectedInit();
				var episodeList = episodeObj.episodeList;
				var $mod_episode = $(".mod_episode");
				try{
					if($mod_episode.attr("data-tpl")=="episode"){
						$mod_episode.find(".item").each(function(){
							var $a = $(this).find("a");
							var href = $a.attr("href");
							if(!!href){
								href = "https://v.qq.com"+href;
								var aText = $a.text();
								aText = aText.replace(/\s/g,"");
	    						episodeList.push({"aText":aText, "href":href, "description":""});
							}
						});
					}
				}catch(e){}
				//加入油猴缓存
				episodeObj.websiteTitle="qq";
				episodeObj.originVideoUrl=window_url;
				if(episodeList.length!=0){
					episodeObj.episodeList=episodeList;
	    		}
				GM_setValue("episodeObj",episodeObj);
			},100);
		};
		if(window_host==="www.iqiyi.com"){
			var episodeObj = movievipHelper.paramsSelectedInit();
			var episodeList = episodeObj.episodeList;
			var $i71playpagesdramalist = $("div[is='i71-play-ab']");
			if($i71playpagesdramalist.length!=0){
				var data =  $i71playpagesdramalist.attr(":page-info");
				if(!!data){
					var dataJson = JSON.parse(data);
					var barTotal = 1;
					var albumId = dataJson.albumId;
					console.log("albumId=",albumId);
					try{
						var $barlis = $(".qy-episode-tab").find(".bar-li");
						barTotal = $barlis.length;
						if(barTotal==0) barTotal=1;
					}catch(e){}
					//获取具体数据
					for(var page=1; page<=barTotal;  page++){
						try{
							GM_xmlhttpRequest({
								url: "https://pcw-api.iqiyi.com/albums/album/avlistinfo?aid="+albumId+"&page="+page+"&size=30",
							  	method: "GET",
							  	headers: {"Content-Type": "application/x-www-form-urlencoded"},
							  	onload: function(response) {
									var status = response.status;
									if(status==200||status=='200'){
										var serverResponseJson = JSON.parse(response.responseText);
										var code = serverResponseJson.code;
										if(code=="A00000"){
											var serverEpsodelist = serverResponseJson.data.epsodelist;
											//console.log(serverEpsodelist)
											for(var i=0; i<serverEpsodelist.length; i++){
												var aText = serverEpsodelist[i].order;
												var href = serverEpsodelist[i].playUrl;
												var description = serverEpsodelist[i].subtitle;
												episodeList.push({"aText":aText, "href":href, "description":description});
											}
											//加入油猴缓存
											if(episodeList.length!=0){
												episodeObj.episodeList=episodeList;
											}
											episodeObj.websiteTitle="iqiyi";
											episodeObj.originVideoUrl=window_url;
											GM_setValue("episodeObj",episodeObj);
										}
									}
							  	}
							});
						}catch(err){}
						setTimeout(function(){}, 500);
					}
					episodeObj.websiteTitle="iqiyi";
					episodeObj.originVideoUrl=window_url;
					GM_setValue("episodeObj",episodeObj);
				}
			}
		};
		if(window_host==="www.mgtv.com"){
			var episodeObj = movievipHelper.paramsSelectedInit();
			var episodeList = episodeObj.episodeList;
			setTimeout(function(){
				$("body").find(".aside-tabbox").each(function(){
					$(this).find("li").each(function(){
	    				var $a = $(this).find("a");
						var href = $a.attr("href");
						var aText = $(this).text();
						if(!!href && aText.indexOf("预告")==-1){
							href = "https://www.mgtv.com"+href;
							aText = aText.replace("VIP","");
							episodeList.push({"aText":aText, "href":href, "description":""});
						}
					});
				});
				//加入油猴缓存
				episodeObj.websiteTitle="mgtv";
				episodeObj.originVideoUrl=window_url;
				if(episodeList.length!=0){
					episodeObj.episodeList=episodeList;
	    		}
				GM_setValue("episodeObj",episodeObj);
			},1000);
		};
		if(window_host==="v.youku.com"){
			function youku_select(){
				var episodeObj = movievipHelper.paramsSelectedInit();
				var episodeList = episodeObj.episodeList;
				$(".anthology-content-scroll").find(".anthology-content").find(".box-item").each(function(){
					var title = $(this).attr("title");
					var href = $(this).attr("href");

					var $markText = $(this).find(".mark-text");
					if($markText.length==0 || "预告".indexOf($markText.text)==-1){
						if(!!href){
							var aText = title;
							var arr = aText.split(" ");
							if(arr.length>=2) aText = arr[arr.length-1];
							aText = aText.replace(/[^0-9]/ig,"");

							if(!!aText){
								episodeList.push({"aText":aText, "href":href, "description":title});
								//console.log({"aText":aText, "href":href, "description":title})
							}
						}
					}
				});
				//加入油猴缓存
				episodeObj.websiteTitle="youku";
				episodeObj.originVideoUrl=window_url;
				if(episodeList.length!=0){
	    			episodeObj.episodeList=episodeList;
	    		}
				GM_setValue("episodeObj",episodeObj);
			}
			youku_select();
			setInterval(function(){
				youku_select();
			}, 600);
		};
		if(window_host==="tv.sohu.com"){
			var episodeObj = movievipHelper.paramsSelectedInit();
			var episodeList = episodeObj.episodeList;
			setTimeout(function(){
				var $jlistwrap = $(".j-list-wrap");
				if(!!$jlistwrap){
					$jlistwrap.find("li").each(function(){
						var $a = $(this).find("a");
						if(!!$a){
							var aText = $(this).attr("data-order");
							var href = $a.attr("href");
							var title = $a.attr("data-title");
							if(!!aText && !!href){
								href = "https"+href;
								episodeList.push({"aText":aText, "href":href, "description":title});
								//console.log({"aText":aText, "href":href, "description":title});
							}
						}
					});
				}
				//加入油猴缓存
				episodeObj.websiteTitle="sohu";
				episodeObj.originVideoUrl=window_url;
				if(episodeList.length!=0){
	    			episodeObj.episodeList=episodeList;
	    		}
				GM_setValue("episodeObj",episodeObj);
			},1000);
		};
	};
	movievipHelper.movieWebsitesPlayersSelected=function(){//支持电视剧选集
		if(window_url.indexOf("xixicai.top")!=-1){
			var innerCss=
				`
				#plugin_congcongguoke_episode_box{overflow:auto;font-size:14px!important;text-align:left!important;}
				#plugin_congcongguoke_episode_box .tip{padding:5px;}
				#plugin_congcongguoke_episode_box .episode-items> a{display:inline-block;width:25px;height:25px;text-align:center;line-height:25px;border:1px dashed #000;color:#000;margin:5px;text-decoration:none;cursor:pointer;}
				#plugin_congcongguoke_episode_box .episode-items> a:hover{border:1px dashed #FF5302;color:#FF5302;}
				#plugin_congcongguoke_episode_box .episode-items> .active{border:1px dashed #FF5302;color:#FF5302;}
				`;
			$("body").prepend("<style>"+innerCss+"</style>");
			var episodeObj = GM_getValue("episodeObj");
			if(!!episodeObj){
				var episodeList = episodeObj.episodeList;
				if(!!episodeList && episodeList.length!=0){
					episodeList.sort((d1, d2)=>{  //排序
						var aText1 = d1.aText;
						var aText2 = d2.aText;
						var aText1Value = parseInt(aText1);
						var aText2Value = parseInt(aText2);
						if(isNaN(aText1Value) || isNaN(aText2Value)){
							return 0;
						}else{
							return aText1Value-aText2Value;
						}
					});

					var websiteTitle = episodeObj.websiteTitle;
					var currentvideourl = GM_getValue("currentvideourl");
					var originVideoUrl=episodeObj.originVideoUrl;
					var waiturl="";
					var aclass="";

					var html = "<div id='plugin_congcongguoke_episode_box'>";
					html += "<div class='tip'><b>电视剧点击集数，可自由选集，<a href='"+originVideoUrl+"'>点我返回原视频</a></b></div>";
					html += "<div class='episode-items'>";
					for(var i=0; i<episodeList.length; i++){
						waiturl=episodeList[i].href;
						aclass="plugin-episode";
						if(window_url.indexOf(waiturl)!=-1 || (currentvideourl==waiturl && websiteTitle=="iqiyi")){
							aclass = aclass +" "+"active";
						}
						html+= "<a class='"+aclass+"' data-href='"+waiturl+"' title='"+episodeList[i].description+"'>"+episodeList[i].aText+"</a>";
					}
					html += "</div>";
					html += "</div>";

					let insertHtmlInterval = setInterval(function(){
						var $selectContainer = $("#palyer-iframe");
						if($selectContainer.length!=0){
							$selectContainer.after(html);
							clearInterval(insertHtmlInterval)
						}
					}, 100);

				}
			}
			$("body").on("click", ".plugin-episode", function(){
				var href=$(this).data("href");
				if(!!href){
					movievipHelper.comprehensiveAnalysis(href, false);
				}
			});
		}
	};
	movievipHelper.start=function(){
    	if(movievipHelper.isRun() && window.top==window.self){
    		movievipHelper.getServerSource();
			movievipHelper.adAccelerate();
			movievipHelper.getSelected();
    	}
		movievipHelper.movieWebsitesPlayersSelected();
    };
	if(isOpenVideoVipModule){
		movievipHelper.start();
	}
	
})();
