<script type="text/javascript">
// ===================== 版本与更新检查 =====================
    // 每次打包新的 APK / 发布新版本前，把这里的版本号改成新版本。
    const APP_VERSION = '1.0.0';
    // 打包 APK 之前，把下面这个地址换成你自己存放 version.json 的稳定链接
    // （比如 GitHub 仓库里的 raw 文件地址、GitHub Pages 地址等，只要是能被
    // fetch 到的静态文件即可，不需要真正的后端服务）。留空或包含
    // "YOUR_" 字样时会自动跳过检查，不会报错。
    const UPDATE_CHECK_URL = 'https://jatosi.github.io/version.json';

    // 注入 update-banner 样式
    const bannerStyle = `
    .update-banner {
      position: fixed;
      left: 50%;
      top: 90%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      max-width: calc(100vw - 32px);
      padding: 10px 14px;
      border-radius: 16px;
      background: rgba(8,10,26,0.97);
      border: 1px solid rgba(245,200,76,0.5);
      box-shadow: 0 12px 30px rgba(0,0,0,0.9), 0 0 20px rgba(245,200,76,0.35);
      font-size: 12px;
      color: var(--text-main);
      z-index: 1600;
    }
    .update-banner .btn {
      flex-shrink: 0;
    }
    @media (max-width: 600px) {
      .update-banner {
        max-width: calc(100vw - 32px);
        min-width: calc(60vw - 32px);
      }
    }
    `;

    const styleNode = document.createElement('style');
    styleNode.type = 'text/css';
    styleNode.textContent = bannerStyle;
    document.head.appendChild(styleNode);
    
    // ===================== 检查更新 =====================
    // 原理很简单：请求一个静态的 version.json 文件（不需要后端服务），
    // 把里面的 latestVersion 和当前 APP_VERSION 比较，
    // 如果远端版本更新，就在页面底部弹一条不打扰的提示条，
    // 用户点"去更新"会打开 apkUrl 对应的下载链接。
    //
    // version.json 内容示例：
    // {
    //   "latestVersion": "1.1.0",
    //   "apkUrl": "https://your-host/app-1.1.0.apk",
    //   "notes": "修复了xxx问题"
    // }

    function isNewerVersion(remote, current){
      const a=String(remote).split('.').map(n=>parseInt(n,10)||0);
      const b=String(current).split('.').map(n=>parseInt(n,10)||0);
      for(let i=0;i<Math.max(a.length,b.length);i++){
        const x=a[i]||0, y=b[i]||0;
        if(x>y) return true;
        if(x<y) return false;
      }
      return false;
    }

    function showUpdateBanner(data){
      if(document.getElementById('update-banner')) return;
      const bar=document.createElement('div');
      bar.id='update-banner';
      bar.className='update-banner';

      const text=document.createElement('span');
      text.textContent=t('updateAvailable').replace('{v}', data.latestVersion||'');
      bar.appendChild(text);

      if(data.apkUrl){
        const btn=document.createElement('button');
        btn.className='btn btn-secondary';
        btn.textContent=t('现在更新！');
        btn.addEventListener('click',()=>{ window.open(data.apkUrl, '_blank'); });
        bar.appendChild(btn);
      }

      const closeBtn=document.createElement('button');
      closeBtn.className='btn btn-ghost btn-icon';
      closeBtn.textContent='✕';
      closeBtn.title=t('现在更新！');
      closeBtn.addEventListener('click',()=>bar.remove());
      bar.appendChild(closeBtn);

      document.body.appendChild(bar);
    }

    async function checkForUpdate(){
      if(!UPDATE_CHECK_URL || UPDATE_CHECK_URL.indexOf('YOUR_')===0) return;
      try{
        const res=await fetch(UPDATE_CHECK_URL, {cache:'no-store'});
        if(!res.ok) return;
        const data=await res.json();
        if(data && data.latestVersion && isNewerVersion(data.latestVersion, APP_VERSION)){
          showUpdateBanner(data);
        }
      }catch(e){
        console.warn('check update failed', e);
      }
    }
</scritp>