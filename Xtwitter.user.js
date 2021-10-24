// ==UserScript==
// @name         TWITTER DOWNLOAD GIF&VIDEO
// @namespace    http://tampermonkey.net/
// @version      1.33
// @description  Helps you download gifs, videos and original images from Twitter.
// @copyright 2021, Trixille/Vitaminiser (https://twitter.com/vitaminiser)
// @license      Artistic-2.0
// @author       https://twitter.com/vitaminiser
// @match        https://twitter.com/*
// @match        https://giphy.com/upload*
// @match        https://ezgif.com/video-to-gif*
// @match        https://imgflip.com/gif-maker*
// @match        https://gifs.com/*
// @icon     https://pbs.twimg.com/media/Exfa98aWEAQ2Lmk?format=png
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @run-at       document-end
// ==/UserScript==


(function () {
    'use strict';

    const DEBUG_SCRIPT = false;

    const GIFUploader = {
        'giphy': {
            title: 'GIPHY',
            url: 'https://giphy.com/upload',
            selector: 'input[type="url"]',
            trigger: function triggerChange(value, sel) {
                let input = document.querySelector(sel);
                input.value = value;
                let event = document.createEvent('HTMLEvents');
                event.initEvent('input', true, false);
                input.dispatchEvent(event);
            }
        },
        'ezgif': {
            title: 'EzGif',
            url: 'https://ezgif.com/video-to-gif',
            selector: 'form.form input[name="new-image-url"]',
            trigger: function triggerChange(value, sel) {
                const input = document.querySelector(sel);
                input.value = value;
                document.querySelector('form.form').submit();
            }
        },
        /*
        'tenor' : {
            title: 'Tenor',
            url: 'https://tenor.com/gif-maker',
            selector: 'input#upload_url',
            trigger: function triggerChange(value, sel) {
                const input = document.querySelector(sel);
                input.value = value;
                let event = new Event('change', { bubbles: true });
                input.dispatchEvent( event );
            }
        },*/
        'imgflip': {
            title: 'ImgFlip',
            url: 'https://imgflip.com/gif-maker',
            selector: 'div#vgif-upload-panel input#url',
            trigger: function triggerChange(value, sel) {
                const input = document.querySelector(sel);
                input.value = value;
                const w = (unsafeWindow) ? unsafeWindow : window;
                let event = new w.Event('change', { bubbles: true });
                input.dispatchEvent(event);
            }
        },
        'gifs.com': {
            title: 'Gifs.com',
            url: 'https://gifs.com/',
            selector: 'div#editor-input input#home-input',
            trigger: function triggerChange(value, sel) {
                debug(value, sel);
                const input = document.querySelector(sel);
                input.value = value;
                document.querySelector('button#home-create').click();
            }
        },
        get: function (name) {
            return this[name.toLowerCase()];
        },
        props: function () {
            let o = {};
            for (let p in this) {
                if (this[p].url) o[p] = this[p];
            }
            return o;
        },
        propNames: function () {
            let o = {};
            for (let p in this) {
                if (this[p].url) o[p] = true;
            }
            return o;
        },
        setEnabled: function (name, bool) {
            this.get(name).enabled = bool;
        },
        testURL: function (url) {
            for (let o in this) {
                if (this[o].url && url.startsWith(this[o].url))
                    return true;
            }
            return false;
        }
    }

    function debug() {
        const DEBUG_ = (isExtension()) ? DEBUG : DEBUG_SCRIPT;
        if (DEBUG_) {
            console.log.apply(null, arguments);
        }
    }

    function yell(str) {
        const DEBUG_ = (isExtension()) ? DEBUG : DEBUG_SCRIPT;
        if (DEBUG_) {
            if (typeof str === "object") {
                str = JSON.stringify(str);
            }
            alert(str);
        }
    }

    function isExtension() {
        if (window.chrome && chrome.runtime && chrome.runtime.id)
            return true;
        else return false;
    }

    async function sleepUntil(selector, changefn, media, timeoutMs) {
        return new Promise((resolve, reject) => {
            let timeWas = new Date();
            let wait = setInterval(function () {
                if (document.querySelector(selector)) {
                    console.log("resolved after", new Date() - timeWas, "ms");
                    clearInterval(wait);
                    changefn(media, selector);
                    resolve();
                } else if (new Date() - timeWas > timeoutMs) { // Timeout
                    console.log("rejected after", new Date() - timeWas, "ms");
                    clearInterval(wait);
                    reject();
                }
            }, 10);
        });
    }

    if (window.location.hostname !== "twitter.com" && GIFUploader.testURL(window.location.href) && window.location.href.indexOf('?media_url=') > -1) {

        const url = new URL(window.location);
        const media_url = url.searchParams.get('media_url');
        const type = url.searchParams.get('type');
        if (!media_url || !type) return;
        const site = GIFUploader.get(type);
        sleepUntil(site.selector, site.trigger, media_url, 5000);

    }

    //Start
    else if (window.location.hostname === "twitter.com") {

        const CSS = `
        div.download-panel {
        display:none;
        flex-direction: column;
        flex-wrap: nowrap;
        position: absolute;
        pointer-events: auto !important;
        z-index: 60000;
        right: 0px;
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 12px;
        color:white;
        width:80px;
        backdrop-filter:blur(3px);
        border-top-right-radius: 15px;
        }
        
        div.download-panel > div.download-init-button {
        cursor: pointer;
        background-color: transparent;
        font-size: 10px;
        width: 100%;
        display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items:center;
        border: 1px solid rgba(255, 255, 255, 0.5);
        user-select: none;
        }
        
        div.download-panel * {
        cursor: pointer;
        }
        
        article div[data-testid="videoPlayer"]:hover div.download-panel,
        img:hover + div.download-panel,
        div.download-panel:hover{
        display: flex;
        }
        
        div[data-download_image_button="true"]:hover >div>div>div>div{
        background-color: rgba(255, 255, 255, 0.1);
        }
        
        div[data-download_image_button="true"]{
        margin-left: 23px;
        }
        
        div[data-download_image_button="true"] * {
        pointer-events: none;
        }
        
        div[data-has_panel] div.download-image-original {
        display: none;
        position:absolute;
        bottom:0px;
        right:0px;
        background-color: rgba(0, 0, 0, 0.5);
        color:white;
        min-width: 20px;
        min-height: 20px;
        font-size: 16px !important;
        align-items: baseline;
        justify-content: flex-end;
        border-top-left-radius: 20px;
        border:1px solid white;
        border-bottom-width: 0px;
        border-right-width: 0px;
        }
        div[data-has_panel] div.download-image-original:after {
        content: '⭳';
        color:white;
        }
        
        div[data-has_panel]:hover div.download-image-original {
        display: flex;
        }
        
        img + div.download-panel{
        bottom:0px;
        right:0px;
        }
        
        div.download-panel span {
        font-size: 14px;
        display: flex;
        justify-content: center;
        width: 16px;
        pointer-events:none;
        }
        
        div.download-panel>div.download-init-button>button {
        cursor: pointer;
        background-color: transparent;
        color: white;
        border: 1px solid transparent;
        font-size: 10px;
        width: 58px;
        display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
        pointer-events: none;
        }
        
        div.download-panel[data-collapsed="true"] div.download-links,
        div.download-panel>div.download-init-button>a.download-video-link {
        display: none;
        }
        
        article div[data-testid="videoPlayer"]:hover div.download-panel {
        display: flex;
        }
        
        div.download-panel div.download-links {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        }
        
        div.download-panel button {
        cursor: pointer;
        background-color: transparent;
        width: 100%;
        text-align: center;
        display: block;
        color: white;
        font-size: 10px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        padding: 1px;
        margin-top: 1px;
        text-decoration: none;
        /*Firefox hover fix*/
        max-height:15px;
        overflow:hidden;
        }
        
        div.download-panel button:after {
        content:attr(data-label);
        display:flex;
        width:100%;
        background:transparent;
        outline: 1px solid rgba(255, 255, 255, 0.1);
        padding-left: 5px;
        justify-content: center;
        align-items: center;
        padding-left: 0px;
        }
    
        div.download-panel button[data-label_hover]:hover:after {
            content:attr(data-label_hover);
        }
        
        div.download-links button[class*='upload-']:after,
        div.download-links button[data-label='as MP4']:after{
        justify-content: center;
        align-items: center;
        padding-left: 0px;
        }
        
        div.download-panel div.download-links button:hover{
        color: red;
        border-color: red;
        }
        
        div.download-panel button.download-mp4[data-best_quality="true"] {
        /*color:  yellow;*/
        font-weight: bold;
        border-color:white;
        }
        
        div.download-panel div.download-links button[data-best_quality="true"]:hover:after{
        content:'BEST BITRATE';
        text-shadow: 0px 0px 1px 0px red;
        }
        
        div.download-panel div.download-links button.download-mp4[data-status="pending"]:after {
        color: lime;
        border-color: lime;
        outline-color: lime;
        content: 'DOWNLOADING';
        }
    
        .media-downloader-settings-panel {
            display: none;
            background-color:red;
        }
    
        .media-downloader-settings-panel {
            flex-direction:column;
            justify-content:center;
            align-items:center;
            position: fixed;
            top:0px;
            bottom:0px;
            left:0px;
            right:0px;
            z-index: 30000000;
            background-color:transparent;
            pointer-events:none;
        }
    
        .media-downloader-settings-panel > div {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:400px;
            height:400px;
            background-color: rgba(0,0,0,0.8);
            pointer-events:all;
            color:white;
            border: 1px solid white;
            backdrop-filter:blur(5px);
            font-family: sans-serif;
        }
    
        .media-downloader-settings-panel fieldset {
            display:flex;
            flex-direction:column;
        }
    
        .media-downloader-settings-panel li {
            list-style: none;
            font-size: 12px;
            padding: 4px 0px 4px 0px;
        }
    
        .media-downloader-settings-panel button{
            background-color: transparent;
            border: 1px dashed;
            color: white;
            width: 150px;
            height: 40px;
            margin: 20px;
            cursor: pointer;
        }
    
        `;

        let SETTINGS = {};

        //Load Settings
        try {

            loadSettings().then(settings => {
                SETTINGS = settings;
                debug(SETTINGS);
                //SETTINGS = null;
                //GM_deleteValue('gif_hosts');
            });

        }
        catch (e) {
            debug('Error loading settings ' + e);
        }


        //GM_addStyle(CSS);
        sleepUntil('head', () => {
            const style = document.querySelector('#download-panel-style') || el('style', document.head);
            style.id = 'download-panel-style';
            style.type = 'text/css';
            style.appendChild(document.createTextNode(CSS));
        }, '', 5000);
        document.addEventListener('mouseover', function (e) {
            const t = e.target;
            let parent;
            if (t.tagName === "IMG") {
                const regexp = /https:\/\/pbs.twimg.com\/media\/(.+)\?format=([a-z]+)[\z]?&*/;
                if (t.src.match(regexp)) {
                    const p = t.parentElement.parentElement;
                    if (!p.dataset.has_panel) {
                        //'\u2B73'
                        const div = el('div', p, 'download-image-original', '');
                        div.dataset.src = t.src;
                        p.dataset.has_panel = true;
                        div.onclick = imageButtonClick;
                    }
                }
            }
            else if (e.target.classList == "css-1dbjc4n r-1p0dtai r-1loqt21 r-1d2f490 r-u8s1d r-zchlnj r-ipm5af") {
                if (t.parentElement.dataset.has_panel) return;
                if (videoEl(e.target) && !e.target.firstChild) {
                    parent = t.parentElement;
                    parent.dataset.download_panel_container = true;
                    let panel = el('div', parent, 'download-panel', '', panelClick);
                    const d = el('div', panel, 'download-init-button');
                    el('span', d, 'download-icon', '\u2B73');
                    el('button', d, 'download', 'Download');
                    parent.dataset.has_panel = true;
                }
            }
        }, false);


        function loadSettings() {
            if (!isExtension()) {
                let gif_hosts = {};

                for (let p in GIFUploader) {
                    gif_hosts[p] = true;
                }

                let value = GM_getValue('gif_hosts', JSON.stringify(gif_hosts));
                value = JSON.parse(value);


                return Promise.resolve(value);
            }
            else {
                return new Promise((resolve, reject) => {
                    chrome.storage.local.get('gif_hosts', function (result) {
                        debug('loadSettings result  ', result);
                        resolve(result.gif_hosts);
                    });
                });

            }
        }

        function createSettingsPanel() {
            const panel = el('div', document.body, 'media-downloader-settings-panel');
            const inner = el('div', panel);
            const fieldset_gifs = el('fieldset', inner);
            el('legend', fieldset_gifs, '', 'Show GIF Hosts & Converters');
            el('button', inner, '', 'Close', (e) => {
                document.querySelector('.media-downloader-settings-panel').style.display = 'none';
            });
            //this.list = el('ul',fieldset,'');


            for (let o in GIFUploader) {
                if (GIFUploader[o].url) {
                    const li = el('li', fieldset_gifs, '');
                    const radio = el('input', li, '');
                    radio.type = 'checkbox';
                    radio.value = o;
                    radio.name = o;
                    //if(settings[o] === true) radio.checked = true;
                    radio.onchange = saveSettings;
                    const label = el('label', li, '', o);
                    label.for = o;
                }
            }

            return panel;
        }

        function saveSettings(e) {
            const panel = document.querySelector('.media-downloader-settings-panel');

            //const t = e.target;
            //const name = t.name;
            //debug( name );
            const inputs = panel.querySelectorAll('input[type="checkbox"]');
            //debug( inputs );

            const propnames = GIFUploader.propNames();
            SETTINGS = SETTINGS || {};



            inputs.forEach((input) => {
                debug(input.name, input.checked);
                //GIFUploader.setEnabled( input.name, Boolean( input.checked ) );
                if (propnames[input.name]) {
                    //propnames[input.name] = Boolean( input.checked );
                    //GIFUploader.setEnabled( input.name, Boolean( input.checked ));

                    SETTINGS[input.name] = Boolean(input.checked);
                }
            });

            debug('new_settings', SETTINGS);

            //this.settings = propnames;
            if (!isExtension()) {
                GM_setValue('gif_hosts', JSON.stringify(SETTINGS));
            }
            else {
                chrome.storage.local.set({ 'gif_hosts': SETTINGS }, function () {
                    chrome.storage.local.get('gif_hosts', res => {
                        console.log('Value is set to ', res);
                    })
                });
            }

            const b = document.querySelectorAll('div.download-links button[class*="upload-"]');
            debug('existing_panels', b);

            b.forEach((btn) => {
                const name = btn.className.toLowerCase().replace('upload-', '');
                debug(name);
                if (SETTINGS[name] == false) btn.style.display = 'none';
                else btn.style.display = 'block';
            });
        }

        function showSettingsPanel() {

            Event('Settings Panel', 'Show Settings Panel');
            const panel = document.querySelector('.media-downloader-settings-panel') || createSettingsPanel();

            panel.style.display = "flex";
            const inputs = panel.querySelectorAll('input');

            inputs.forEach((input) => {

                if (SETTINGS && SETTINGS[input.value] == false) {
                    input.checked = false;
                }
                else {
                    input.checked = true;
                }
            });

        }

        function imageButtonClick(e) {
            e.preventDefault();
            e.stopPropagation();

            const t = e.target;

            function downloadImg(filename) {
                if (!filename) return;
                const url = 'https://pbs.twimg.com/media/' + filename;
                getBlob(url + ':orig').then(blob => {
                    createDownloadLink(blob, filename, 'image');
                    Event('Image', 'Download Image');
                });
            }

            if (e.target.dataset.filename) {
                debug('DOWNLOADING FROM PRESAVED');
                downloadImg(e.target.dataset.filename);
                return;
            }

            const imgmatch = /https:\/\/pbs\.twimg\.com\/media\/(.+)\?format=([a-z]+).?/;

            const res = t.dataset.src.match(imgmatch);
            debug('SRC MARTCH', res);
            if (res && res[1] && res[2]) {
                const id = res[1];
                const form = res[2];
                debug('ID & FORMAT FOUND', id, form);
                const filename = id + '.' + form;

                e.target.dataset.filename = filename;
                downloadImg(filename);
                return;
            }
        }

        async function fetchTweetInfo(tweetId) {
            const url = "https://api.twitter.com/1.1/statuses/show.json?include_profile_interstitial_type=1&include_blocking=1&" +
                "include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&skip_status=1" +
                "&cards_platform=Web-12&include_cards=1&include_ext_alt_text=true&include_reply_count=1" +
                "&tweet_mode=extended&trim_user=false&include_ext_media_color=true&id=" + tweetId;
            const headers = new Headers({
                'Content-Type': 'application/json',
                "Accept": '*/*',
                "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
                "x-csrf-token": getCookie("ct0")
            });
            const json =
                await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: headers
                }).then(response => response.json());
            return json;
        }

        function createDownloadLink(url, fileName, type) {
            type = type || 'video';
            fileName = fileName || type;

            var a = document.getElementById('download-video');

            if (!a) {
                a = document.createElement('a');
                a.setAttribute('id', 'download-video');
                a.setAttribute('target', '_blank');
                document.body.appendChild(a);
            }

            if (type === 'video') {
                if (fileName.length < 1) fileName = 'video';
                a.setAttribute('download', fileName + '.mp4');
            }
            else if (type === 'image') {
                a.setAttribute('download', fileName);
            }

            a.setAttribute('href', url);
            a.click();
            setTimeout(() => {
                URL.revokeObjectURL(url);
                console.log('Object URL ' + url + ' released.');
            }, 5000);
        }

        function panelClick(e) {
            e.preventDefault();
            let t = e.target;
            let panel = t.closest('div.download-panel');
            const fn = {
                'download-init-button': () => {
                    panel = t.parentElement;

                    if (panel.children.length > 1) {
                        panel.dataset.collapsed = (panel.dataset.collapsed === 'true') ? false : true;
                        return;
                    }
                    const video = videoEl(t);
                    const type = getVideoType(video);
                    if (type === 'gif') getGIF(panel, video);
                    else if (type === 'video') getVideo(panel, video);

                    Event('Video&Gif Panel', 'Load Variants ' + type.toUpperCase());

                },
                'download-mp4': () => {

                    if (t.dataset.status === "pending") {
                        alert('This video is downloading.');
                        return;
                    }
                    const bl = getBlob(t.dataset.url);
                    e.target.dataset.status = "pending";
                    bl.then(blob => {
                        e.target.dataset.status = "done";
                        const title = createTitle(t);
                        createDownloadLink(blob, title, 'video');
                        Event('Download', 'Download MP4 ' + e.target.dataset.size_str);
                    });

                }
            }

            const cls = t.className;

            if (cls.indexOf('upload') > -1) {
                upload(cls.replace('upload-', ''), t.dataset.url);
            }
            else if (fn[cls]) {
                fn[cls]();
            }
            e.stopPropagation();
        }

        function upload(type, url) {
            const obj = GIFUploader.get(type);
            //If Using Extension Version
            if (isExtension()) {
                // Code running in a Chrome extension (content script, background page, etc.)
                //obj.media = url;
                //obj.trigger = obj.trigger.toString();
                //obj.sleep = sleepUntil.toString()

                const selector = GIFUploader.get(type).selector;
                const trigger = GIFUploader.get(type).trigger.toString();

                debug('PREP', selector, trigger);

                let fn = 'sleepUntil( site.selector , site.trigger, media_url, 5000 )';
                fn = fn.replace('site.selector', '\'' + selector + '\'');
                fn = fn.replace('site.trigger', trigger);
                fn = fn.replace('media_url', '\'' + url + '\'');

                const sleep = sleepUntil.toString() + '\n\n' + fn;

                debug(sleep);

                const data = {
                    url: GIFUploader.get(type).url,
                    text: sleep
                }
                //fn.replace( )

                // + '\n\n(' + initSleep.toString() + ')();'
                chrome.runtime.sendMessage({ action: "uploadGIF", data: data });
                Event('GIF', 'Upload GIF to ' + type);
            }
            else {
                //Using GreaseMonkey Version
                window.open(obj.url + '?media_url=' + url + '&type=' + type);
            }
        }

        function getGIF(panel, gif) {
            debug('getGif');
            panel.dataset.media_type = 'gif';
            const div = el('div', panel, 'download-links');
            const mp4 = btn('download-mp4', '', div);
            mp4.dataset.url = gif.src;
            mp4.dataset.label = 'as MP4';
            createGIFLinks(gif.src, div);
            panel.dataset.done = true;
            return panel;
        }

        function createLinks(o) {
            const vids = o.vars;
            if (!vids) return;

            const div = el('div', null, 'download-links');

            vids.forEach(vid => {
                let b = btn('download-mp4', '', div);
                b.dataset.label = vid.size_str + ' MP4';
                for (let p in vid) {
                    b.dataset[p] = vid[p];
                }
            });

            //find smallest for gifs
            o.vars.sort((a, b) => {

                if (a.size.height < b.size.height) return -1;

            });

            debug('Smallest Video Size', o.vars[0].size_str);

            createGIFLinks(o.vars[0].url, div);

            return div;
        }

        function createGIFLinks(url, div) {
            const buttons = [];
            const names = GIFUploader.propNames();
            for (let prop in names) {
                buttons.push(GIFUploader[prop].title);
            }

            if (url && div) {

                buttons.forEach(b => {
                    const el = btn('upload-' + b, '', div);
                    el.dataset.url = url;
                    el.dataset.label = b;
                    if (SETTINGS && SETTINGS[b.toLowerCase()] == false)
                        el.style.display = 'none';
                });

                const settings_btn = btn('download-settings-button', '', div);
                settings_btn.dataset.label = '⚙';
                settings_btn.dataset.label_hover = '⚙ Settings';
                settings_btn.onclick = showSettingsPanel;

                return div;
            }
        }

        function createTitle(button) {
            const video = videoEl(button);
            if (getVideoType(video) === 'gif') {
                const label = video.getAttribute('aria-label');
                debug('VIDEO EL create Title', label);
                if (label) return label;
            }

            let title = '';
            if (button.dataset.user) title = title + button.dataset.user;
            if (button.dataset.id) title = title + '_status_' + button.dataset.id;
            if (button.dataset.size_str) title = title + '_' + button.dataset.size_str;
            return title;
        }

        function getVideoType(video) {
            if (!video || video.tagName !== 'VIDEO')
                return false;
            let type;
            if (video.src.includes('.mp4')) {
                type = 'gif';
            }
            else if (video.src.includes('blob:')) {
                type = 'video';
            }
            return type;
        }

        function getVideo(panel, video) {
            panel.dataset.done = true;
            fetchTweetInfo(getTweetId(video)).then(json => {
                debug('RESPONSE_2', json);
                const o = getMediaSources(json, isQuote(video));
                const oo = o;
                oo.orig_vars = null;
                panel.dataset.json = JSON.stringify(oo);
                panel.dataset.tweet_id = o.id;
                panel.dataset.user = o.user;
                panel.appendChild(createLinks(o));
                panel.dataset.done = true;
            });
        }

        async function getBlob(url) {
            let blob = await fetch(url).then(r => r.blob());
            blob = blob.slice(0, blob.size, "application/octet-stream");
            const bloburl = URL.createObjectURL(blob);
            return bloburl;
        }

        function getTweetId(elem) {
            var article_href = elem.closest('article').querySelector('a[href*="/status/"]').href;
            var regexp = /\/status\/(\d+)/;
            return article_href.match(regexp)[1];
        }

        function getMediaSources(json, isQuote) {
            var video_variants;
            let VIDEOS;
            let ORIG;
            let TWEET = json;

            let o = {};
            //debug( json.is_quote_status );
            //get media in quoted tweet
            if (isQuote && json.is_quote_status) {
                debug('Quote', json.quoted_status.extended_entities);
                VIDEOS = json.quoted_status.extended_entities.media[0].video_info.variants;
                TWEET = json.quoted_status;

            }
            else if (!isQuote) {
                debug('Not A Quote', json.extended_entities);
                VIDEOS = json.extended_entities.media[0].video_info.variants;
            }

            let MEDIA = TWEET.extended_entities.media[0];

            debug('MEDIA', MEDIA);

            if (MEDIA.type != 'video' && MEDIA.type != 'animated_gif') return 'Media is not a video';

            o.original_size = MEDIA.original_info;
            o.original_str = o.original_size.width + 'x' + o.original_size.height;
            o.id = MEDIA.id_str;

            //o.aspect_ratio = MEDIA.video_info.aspect_ratio;
            //o.aspect_ratio_str = MEDIA.video_info.aspect_ratio[0]+':'+MEDIA.video_info.aspect_ratio[1];

            //o.duration_ms = MEDIA.video_info.duration_millis;
            //o.duration_s = (o.duration_ms / 1000) % 60;

            o.user = TWEET.user.screen_name;

            o.orig_vars = MEDIA.video_info.variants;
            o.vars = [];

            const regexp = /\/vid\/([\dx]+)\//;

            o.orig_vars.forEach(video => {
                const m = video.url.match(regexp);
                if (video.content_type == "video/mp4") {
                    let v = {};
                    v.url = video.url.split('?')[0];
                    if (m && m[1]) {
                        v.size_str = m[1];
                        v.size = {};
                        v.size.w = parseInt(m[1].split('x')[0]);
                        v.size.h = parseInt(m[1].split('x')[1]);
                    }
                    else v.size_str = o.original_str;
                    v.is_original_size = false;
                    if (v.size_str == o.original_str) v.is_original_size = true;
                    v.bitrate = video.bitrate;
                    v.id = o.id;
                    v.user = o.user;
                    o.vars.push(v);
                }
            });

            debug('vars', o.vars);

            o.vars =
                o.vars.sort((x, y) => {
                    if (x.bitrate < y.bitrate) return -1;
                    if (x.bitrate > y.bitrate) return 1;
                    return 0;
                });
            o.vars[o.vars.length - 1].best_quality = true;

            return o;
        }

        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        function isQuote(video) {
            return video.closest('div[role="link"]') ? true : false;
        }

        function el(tag, parent, cls, text, click) {
            let e = document.createElement(tag);
            if (cls) e.setAttribute('class', cls);
            if (parent) parent.appendChild(e);
            if (text) e.innerText = text;
            if (click) e.addEventListener('click', click, false);
            return e;
        }

        function btn(cls, text, parent) {
            var btn = document.createElement('button');
            if (cls) btn.setAttribute('class', cls);
            if (text) btn.innerText = text;
            if (parent) parent.appendChild(btn);
            return btn;
        }

        function videoEl(elem) {
            return elem.closest('div[data-testid="videoPlayer"]').querySelector('video');
        }

        function Event(category, name) {
            if (window.chrome && chrome.runtime && chrome.runtime.id) {
                chrome.runtime.sendMessage({ action: "trackEvent", data: Array.from(arguments) });
            }
        }
    }

})();
