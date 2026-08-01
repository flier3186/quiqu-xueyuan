// engine/mic-permission.js · 奇趣学园 V5 引擎模块
// 麦克风权限引导：检查 / 请求 / 首次引导UI / 声波测试
// 纯原生 JS，不依赖外部库
window.MicPermission = (function(){
  let _stream = null;     // 测试用流
  let _ctx = null;        // AudioContext
  let _raf = null;        // requestAnimationFrame 句柄

  function _stop(){
    if(_raf){ cancelAnimationFrame(_raf); _raf = null; }
    if(_stream){
      _stream.getTracks().forEach(t=>t.stop());
      _stream = null;
    }
    if(_ctx){ try{_ctx.close();}catch(e){} _ctx = null; }
  }

  return {
    // 检查麦克风权限状态：granted / denied / prompt / unsupported
    async check(){
      if(!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) return 'unsupported';
      if(navigator.permissions && navigator.permissions.query){
        try{
          const r = await navigator.permissions.query({name:'microphone'});
          return r.state; // 'granted' / 'denied' / 'prompt'
        }catch(e){ return 'prompt'; }
      }
      return 'prompt';
    },

    // 请求麦克风权限，返回 true/false
    async request(){
      try{
        _stop();
        _stream = await navigator.mediaDevices.getUserMedia({audio:true});
        return true;
      }catch(e){
        _stop();
        return false;
      }
    },

    // 首次引导流程（返回 HTML 字符串，事件由 data-act 标记，调用方自行绑定）
    renderGuide(){
      return `
<div class="mic-guide" style="text-align:center;padding:24px 16px;font-family:inherit">
  <div class="mic-anim" style="font-size:64px;line-height:1;margin-bottom:12px">🎤</div>
  <h3 style="color:var(--navy,#1E3A5F);margin:0 0 6px;font-size:20px">我们来测试一下麦克风吧！</h3>
  <p style="color:var(--ink-300,#6b7280);margin:0 0 18px;font-size:14px">和老师对话需要用到麦克风哦</p>
  <button class="mic-start-btn" data-act="start"
    style="background:var(--teal,#00A896);color:#fff;border:none;border-radius:999px;padding:12px 28px;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 6px 16px rgba(0,168,150,.3)">
    开始测试 🎙️
  </button>
  <div class="mic-status" data-role="status" style="margin-top:16px;min-height:24px;font-size:14px;color:var(--ink-400,#475569)"></div>
  <div class="mic-wave" data-role="wave" style="margin-top:8px;height:48px;display:none;align-items:center;justify-content:center;gap:3px"></div>
  <button class="mic-retry-btn" data-act="retry"
    style="display:none;margin-top:14px;background:var(--coral,#FB923C);color:#fff;border:none;border-radius:999px;padding:10px 22px;font-size:14px;font-weight:700;cursor:pointer">
    重新开启麦克风
  </button>
</div>`;
    },

    // 测试录音：onLevel 回调返回音量级别 0-100
    testRecording(onLevel){
      _stop();
      if(!_stream){
        // 没有现成流，先尝试申请
        navigator.mediaDevices.getUserMedia({audio:true}).then(st=>{
          _stream = st; _run(st, onLevel);
        }).catch(()=>{ if(onLevel) onLevel(-1); });
        return;
      }
      _run(_stream, onLevel);
    },

    // 停止测试录音（释放资源）
    stop: _stop
  };

  function _run(stream, onLevel){
    try{
      _ctx = new (window.AudioContext || window.webkitAudioContext)();
      const src = _ctx.createMediaStreamSource(stream);
      const anl = _ctx.createAnalyser();
      anl.fftSize = 256;
      src.connect(anl);
      const buf = new Uint8Array(anl.frequencyBinCount);
      const tick = ()=>{
        anl.getByteTimeDomainData(buf);
        let sum = 0;
        for(let i=0;i<buf.length;i++){ const v = buf[i]-128; sum += v*v; }
        const rms = Math.sqrt(sum/buf.length);
        const level = Math.min(100, Math.round(rms/64*100));
        if(onLevel) onLevel(level);
        _raf = requestAnimationFrame(tick);
      };
      tick();
    }catch(e){
      if(onLevel) onLevel(-1);
    }
  }
})();
