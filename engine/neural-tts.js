// ============================================================
// NeuralTTS —— 微软 Edge 神经语音（前端直连，免费无需 key）
// 协议：wss://speech.platform.bing.com/.../readaloud/edge/v1
// 返回 MP3 音频流，Blob 播放；失败时由调用方降级到 speechSynthesis
//
// 集成契约（PM 接线参考 docs/voice-integration.md）：
//   NeuralTTS.speak(text, {voice, ratePct, pitchHz})  —— 纯神经，失败 reject（供 SpeakEngineV5 用）
//   NeuralTTS.speakSafe(text, {lang, rate, pitch, gender}) —— 神经优先，失败自动降级浏览器 TTS（供 index.html 全局 speak 用）
//   NeuralTTS.isDisabled() / reset() / status() / configure() / setLogLevel() / onLog()
// ============================================================
(function (global) {
  'use strict';

  // ---- 可配置常量（微软会轮换，建议通过 configure() 注入新鲜值）----
  // 注意：TOKEN/SEC_VER 曾经硬编码且会过期；若合成持续 1006/403，请用 configure({token, secVer}) 更新，
  // 或配置 gecRelay 让模块自动拉取最新 Sec-MS-GEC（见 voice-integration.md）。
  let TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
  let SEC_VER = '1-143.0.3650.75';
  let GEC_RELAY = '';                 // 可选：返回 {Sec-MS-GEC, Sec-MS-GEC-Version} 的中继地址
  const HOST = 'speech.platform.bing.com';

  // 推荐音色（真人级神经语音）
  const VOICES = {
    emma: 'en-US-EmmaMultilingualNeural',
    aria: 'en-US-AriaNeural',
    leo: 'en-US-AndrewNeural',
    female: 'en-US-AvaNeural',
    male: 'en-US-AndrewNeural',
    zh: 'zh-CN-XiaoxiaoNeural',
  };

  // ---- 运行态 ----
  let _currentAudio = null;
  let _consecFails = 0;
  let _disabled = false;     // 连续失败过多时本会话禁用，避免每次点击都等超时
  let _gen = 0;              // 取消代际：新播放使旧播放作废
  let _lastError = null;     // 最近一次失败原因（供 status()/探针读取）
  let _lastPath = '';        // 最近一次 ws 收到的首个字符串路径（诊断用）
  let _serverTimeOffsetMs = 0; // 时钟漂移修正（syncClock 计算）
  let _logLevel = 2;         // 1=error 2=warn 3=info 4=debug
  let _logSubs = [];         // onLog 订阅者
  let _remoteGec = null;     // 从 gecRelay 拉取到的 {Sec-MS-GEC, Sec-MS-GEC-Version}

  // ---- 日志（分级 + 订阅，供 tts-probe.html 实时展示）----
  function _log(level, msg, data) {
    const lv = { error: 1, warn: 2, info: 3, debug: 4 }[level] || 2;
    if (lv > _logLevel) return;
    const tag = '[NeuralTTS]';
    const args = data !== undefined ? [tag, msg, data] : [tag, msg];
    if (level === 'error') console.error.apply(console, args);
    else if (level === 'warn') console.warn.apply(console, args);
    else if (level === 'info') console.info.apply(console, args);
    else console.log.apply(console, args);
    for (const fn of _logSubs) { try { fn(level, msg, data); } catch (e) {} }
  }
  function onLog(fn) { if (typeof fn === 'function') _logSubs.push(fn); return () => { _logSubs = _logSubs.filter(f => f !== fn); }; }

  // ---- 工具 ----
  function setLogLevel(lv) { _logLevel = lv; }

  // ---- 数字→英文词归一化（朗读前把阿拉伯数字换成英文词，避免被中文 voice 读成"十"等）----
  // 覆盖：独立整数 0-9999、序数(st/nd/rd/th)。
  // 不动：含 CJK 的文本、小数(如 3.14)、字母数字混合(如 mp3/b2b)、>4 位数。
  var _NUM_ONES  = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  var _NUM_TEENS = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  var _NUM_TENS  = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  function _numToEnglish(n){
    n = Math.max(0, Math.min(9999, n|0));
    if(n < 10) return _NUM_ONES[n];
    if(n < 20) return _NUM_TEENS[n-10];
    if(n < 100){ var t=_NUM_TENS[Math.floor(n/10)]; return n%10 ? t+'-'+_numToEnglish(n%10) : t; }
    if(n < 1000){ var h=_numToEnglish(Math.floor(n/100))+' hundred'; return n%100 ? h+' '+_numToEnglish(n%100) : h; }
    var th=_numToEnglish(Math.floor(n/1000))+' thousand';
    return n%1000 ? th+' '+_numToEnglish(n%1000) : th;
  }
  function _ordinalWord(n){
    var card = _numToEnglish(n);
    var idx = Math.max(card.lastIndexOf(' '), card.lastIndexOf('-'));
    var pre = idx >= 0 ? card.slice(0, idx+1) : '';
    var last = idx >= 0 ? card.slice(idx+1) : card;
    var ord;
    if(last==='one') ord='first';
    else if(last==='two') ord='second';
    else if(last==='three') ord='third';
    else if(last==='five') ord='fifth';
    else if(last==='eight') ord='eighth';
    else if(last==='nine') ord='ninth';
    else if(last==='twelve') ord='twelfth';
    else if(/y$/.test(last)) ord=last.slice(0,-1)+'ieth';
    else ord=last+'th';
    return pre+ord;
  }
  function _normalizeNumbers(text){
    if(!text || typeof text!=='string') return text;
    if(/[\u4e00-\u9fa5]/.test(text)) return text;
    text = text.replace(/(\d+)(st|nd|rd|th)\b/gi, function(_m, num){
      var n = parseInt(num,10);
      if(!isFinite(n) || n<1 || n>9999) return _m;
      return _ordinalWord(n);
    });
    text = text.replace(/(?<![\w.])(\d{1,4})(?![A-Za-z0-9]|\.\d)/g, function(_m, num){
      var n = parseInt(num,10);
      if(!isFinite(n) || n<0 || n>9999) return _m;
      return _numToEnglish(n);
    });
    return text;
  }

  function uuid() {
    try {
      if (global.crypto && global.crypto.randomUUID) return global.crypto.randomUUID(); // 带横杠的标准 UUID v4
    } catch (e) {}
    // 回退：生成带横杠的伪 UUID v4
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  function _cryptoOk() {
    return !!(global.crypto && global.crypto.subtle && typeof global.crypto.subtle.digest === 'function');
  }

  // Sec-MS-GEC 计算（现代算法，与 edge-tts 一致）：
  //   ticks = floor(now/1000 + 11644473600)  // 1601 起算的秒
  //   ticks -= ticks % 300                   // 向下取整到 5 分钟窗口（时钟容差核心）
  //   ticks *= 10000000                      // 转 100ns Windows 文件时间
  //   token = SHA256( ticks + TrustedClientToken ).toUpperCase()
  // shiftSec：额外偏移（秒），用于时钟偏差兜底重试。
  async function _genGec(shiftSec) {
    const base = Math.floor(Date.now() / 1000) + (_serverTimeOffsetMs ? Math.round(_serverTimeOffsetMs / 1000) : 0);
    let ticks = Math.floor(base + 11644473600 + (shiftSec || 0));
    ticks -= ticks % 300;                 // 时钟容差：取整到 5 分钟
    ticks = ticks * 10000000;             // 100ns 单位
    const buf = new TextEncoder().encode(String(ticks) + TOKEN);
    const digest = await global.crypto.subtle.digest('SHA-256', buf);
    return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
  }

  // 可选：从 gecRelay 拉取最新 Sec-MS-GEC（解决硬编码过期问题）
  async function _fetchRemoteGec() {
    if (!GEC_RELAY) return null;
    try {
      const r = await fetch(GEC_RELAY + (GEC_RELAY.indexOf('?') >= 0 ? '&' : '?') + '_t=' + Date.now(), { cache: 'no-store' });
      if (!r.ok) throw new Error('relay http ' + r.status);
      const j = await r.json();
      if (j && j['Sec-MS-GEC'] && j['Sec-MS-GEC-Version']) {
        _remoteGec = { gec: j['Sec-MS-GEC'], ver: j['Sec-MS-GEC-Version'] };
        _log('info', '已从中继获取新鲜 Sec-MS-GEC', _remoteGec.ver);
        return _remoteGec;
      }
    } catch (e) { _log('warn', 'gecRelay 拉取失败，回退本地计算', e.message); }
    return null;
  }

  // 时钟漂移修正：用主机计时端点估算与本地时钟差（best-effort）
  async function syncClock() {
    try {
      const t0 = Date.now();
      const r = await fetch('https://' + HOST + '/consumer/speech/synthesize/readaloud/edge/v1', { method: 'HEAD', cache: 'no-store', mode: 'cors' });
      const t1 = Date.now();
      const srv = r.headers && r.headers.get('date') ? Date.parse(r.headers.get('date')) : 0;
      if (srv) { _serverTimeOffsetMs = srv - (t0 + (t1 - t0) / 2); _log('info', '时钟漂移修正', _serverTimeOffsetMs + 'ms'); }
    } catch (e) { _log('debug', 'syncClock 失败（不影响本地计算）', e.message); }
  }

  // 单次连接尝试：resolve({chunks, audioBytes}) 或 reject
  function _attempt(text, voice, ratePct, pitchHz, shiftSec, useRemoteGec, myGen) {
    return new Promise((resolve, reject) => {
      let gec;
      let ver = SEC_VER;
      const finish = (g) => { gec = g; open(); };
      if (useRemoteGec) finish(useRemoteGec.gec), (ver = useRemoteGec.ver);
      else _genGec(shiftSec).then(finish).catch(reject);

      function open() {
        const url = `wss://${HOST}/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TOKEN}&Sec-MS-GEC=${gec}&Sec-MS-GEC-Version=${ver}&ConnectionId=${uuid()}`;
        let ws;
        try { ws = new WebSocket(url); } catch (e) { reject(e); return; }
        ws.binaryType = 'arraybuffer';
        const chunks = [];
        let audioBytes = 0;
        let settled = false;
        let genValid = true;
        const done = (fn, arg) => { if (!settled) { settled = true; clearTimeout(timer); try { ws.close(); } catch (e) {} fn(arg); } };
        const timer = setTimeout(() => { _log('warn', 'WebSocket 超时（12s）', { shiftSec }); done(reject, new Error('timeout')); }, 12000);
        ws.onopen = () => {
          if (myGen !== _gen) { genValid = false; done(reject, new Error('cancelled')); return; }
          const ts = new Date().toUTCString().replace('GMT', 'GMT+0000 (Coordinated Universal Time)');
          ws.send(`X-Timestamp:${ts}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}`);
          const escaped = String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
          const ssml = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'><voice name='${voice}'><prosody pitch='${pitchHz >= 0 ? '+' : ''}${pitchHz}Hz' rate='${ratePct >= 0 ? '+' : ''}${ratePct}%' volume='+0%'>${escaped}</prosody></voice></speak>`;
          // X-RequestId 必须是带横杠的标准 UUID v4（原代码去横杠为格式错误）
          ws.send(`X-RequestId:${uuid()}\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:${ts}\r\nPath:ssml\r\n\r\n${ssml}`);
          _log('debug', 'WS 已打开并发送请求', { voice, ratePct, pitchHz, gecHead: gec.slice(0, 8) + '…', ver });
        };
        ws.onmessage = (ev) => {
          if (typeof ev.data === 'string') {
            if (!_lastPath) _lastPath = (ev.data.match(/Path:\S+/) || [''])[0];
            if (ev.data.indexOf('Path:turn.end') >= 0) {
              if (audioBytes > 1000) { _consecFails = 0; _log('info', '合成成功', { audioBytes }); done(resolve, { chunks, audioBytes }); }
              else { _log('warn', 'turn.end 但音频为空', { audioBytes }); done(reject, new Error('no audio')); }
            }
          } else if (ev.data && ev.data.byteLength > 2) {
            const headLen = new DataView(ev.data).getUint16(0);
            if (ev.data.byteLength > 2 + headLen) {
              chunks.push(new Uint8Array(ev.data, 2 + headLen));
              audioBytes += ev.data.byteLength - 2 - headLen;
            }
          }
        };
        ws.onerror = (e) => { _log('error', 'WebSocket onerror', e && (e.message || 'error')); };
        ws.onclose = (e) => {
          if (!genValid) return; // 已因取消而 settle
          if (!settled) {
            _log('warn', 'WebSocket 关闭（未收到音频）', { code: e && e.code, _lastPath });
            done(reject, new Error('ws close ' + (e ? e.code : '')));
          }
        };
      }
    });
  }

  // 主合成：依次尝试 本地GEC / 远程GEC / 时钟偏移窗口（时钟偏差兜底）
  async function synthesize(text, opts) {
    if (_disabled) { const e = new Error('neural tts disabled this session'); _lastError = e; throw e; }
    if (!_cryptoOk()) { const e = new Error('crypto.subtle 不可用（需 https 或 localhost 安全上下文）'); _lastError = e; _log('error', e.message); throw e; }
    const voice = (opts && opts.voice) || VOICES.female;
    const ratePct = (opts && opts.ratePct) || 0;
    const pitchHz = (opts && opts.pitchHz) || 0;
    let remote = null;
    if (GEC_RELAY && !_remoteGec) remote = await _fetchRemoteGec();
    if (GEC_RELAY && _remoteGec) remote = _remoteGec;

    const strategies = [];
    if (remote) strategies.push({ kind: 'remote', shift: 0, gec: remote });
    for (const shift of [0, 300, -300, 60, -60]) strategies.push({ kind: 'local', shift });

    let lastErr;
    for (const s of strategies) {
      try {
        const r = await _attempt(text, voice, ratePct, pitchHz, s.kind === 'local' ? s.shift : 0, s.kind === 'remote' ? s.gec : null);
        return r;
      } catch (e) { lastErr = e; _log('debug', '策略失败：' + s.kind + ' shift=' + s.shift, e.message); }
    }
    _consecFails++;
    if (_consecFails >= 3) { _disabled = true; _log('warn', '连续失败 ' + _consecFails + ' 次，本会话禁用 NeuralTTS', {}); }
    _lastError = lastErr || new Error('synthesize failed');
    throw _lastError;
  }

  function _play(chunks) {
    return new Promise((resolve, reject) => {
      try {
        const parts = chunks.map(c => c.buffer.slice(c.byteOffset, c.byteOffset + c.byteLength));
        const blob = new Blob(parts, { type: 'audio/mpeg' });
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        _currentAudio = audio;
        audio.onended = () => { URL.revokeObjectURL(url); if (_currentAudio === audio) _currentAudio = null; resolve(); };
        audio.onerror = () => { URL.revokeObjectURL(url); _reject(reject, new Error('audio play error')); };
        audio.play().catch(e => _reject(reject, e));
      } catch (e) { _reject(reject, e); }
    });
  }
  function _reject(reject, e) { _lastError = e; try { reject(e); } catch (x) {} }

  // 对外主入口（纯神经）：合成并播放。resolve=播放完成；reject=彻底失败（调用方降级 speechSynthesis）
  async function speak(text, opts) {
    text = _normalizeNumbers(text);
    const myGen = ++_gen;
    const r = await synthesize(text, Object.assign({}, opts));
    if (myGen !== _gen) throw new Error('cancelled');
    await _play(r.chunks);
  }

  // 浏览器内置 speechSynthesis 最终降级（speakSafe 用）
  function _browserFallback(text, opts) {
    text = _normalizeNumbers(text);
    return new Promise((resolve) => {
      if (!('speechSynthesis' in window)) { _log('warn', 'speechSynthesis 不可用，无法降级', {}); resolve('none'); return; }
      try {
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = (opts && opts.lang) || 'en-US';
        u.volume = 1;
        u.rate = (opts && opts.rate) || 0.9;
        u.pitch = (opts && opts.pitch) || 1.0;
        if (opts && opts.gender) {
          const vs = speechSynthesis.getVoices() || [];
          const re = opts.gender === 'male' ? /male|man|boy|david|mark|alex|andrew/i : /female|woman|girl|samantha|zira|aria|jenny|emma|ava/i;
          const v = vs.filter(x => /^en/i.test(x.lang) && re.test(x.name))[0] || vs.filter(x => /^en/i.test(x.lang))[0];
          if (v) try { u.voice = v; } catch (e) {}
        }
        u.onend = () => resolve('browser');
        u.onerror = () => resolve('browser');
        speechSynthesis.speak(u);
      } catch (e) { _log('warn', '浏览器 TTS 降级失败', e.message); resolve('none'); }
    });
  }

  // 统一入口：神经优先，失败自动降级浏览器 TTS。resolve('neural'|'browser'|'none')
  async function speakSafe(text, opts) {
    if (!text) return 'none';
    text = _normalizeNumbers(text);
    try {
      await speak(text, opts);
      return 'neural';
    } catch (e) {
      _log('warn', 'NeuralTTS 失败 → 降级浏览器 TTS', e.message);
      return await _browserFallback(text, opts);
    }
  }

  function stop() {
    _gen++;
    if (_currentAudio) { try { _currentAudio.pause(); } catch (e) {} _currentAudio = null; }
  }
  function isDisabled() { return _wsDisabled || _disabled; }
  function reset() { _disabled = false; _consecFails = 0; _lastError = null; _lastPath = ''; }
  function status() {
    return {
      disabled: _disabled,
      consecFails: _consecFails,
      lastError: _lastError ? _lastError.message : null,
      lastPath: _lastPath,
      cryptoOk: _cryptoOk(),
      secureContext: global.isSecureContext,
      origin: (global.location && global.location.origin) || 'unknown',
      hasGecRelay: !!GEC_RELAY,
      usingRemoteGec: !!_remoteGec,
      serverTimeOffsetMs: _serverTimeOffsetMs,
      tokenHead: TOKEN.slice(0, 6) + '…',
      secVer: SEC_VER,
    };
  }
  function configure(o) {
    o = o || {};
    if (o.token) TOKEN = o.token;
    if (o.secVer) SEC_VER = o.secVer;
    if (o.gecRelay !== undefined) { GEC_RELAY = o.gecRelay; _remoteGec = null; }
    if (o.logLevel) _logLevel = o.logLevel;
    _log('info', 'configure 更新', { tokenHead: TOKEN.slice(0, 6) + '…', secVer: SEC_VER, hasRelay: !!GEC_RELAY });
  }

  // 探针诊断（供 tts-probe.html 使用）
  async function _probe(text) {
    text = text || 'Hello, this is a pronunciation test.';
    const report = { status: status(), steps: [] };
    try {
      const g = await _genGec(0);
      report.steps.push({ step: 'genGec', ok: true, gecHead: g.slice(0, 12) + '…' });
    } catch (e) { report.steps.push({ step: 'genGec', ok: false, err: e.message }); }
    try {
      const r = await synthesize(text, { voice: VOICES.emma, ratePct: 0, pitchHz: 0 });
      report.steps.push({ step: 'synthesize', ok: true, audioBytes: r.audioBytes });
      report.result = 'OK';
    } catch (e) {
      report.steps.push({ step: 'synthesize', ok: false, err: e.message });
      report.result = 'FAIL: ' + e.message;
    }
    return report;
  }

  global.NeuralTTS = { speak, speakSafe, stop, isDisabled, reset, status, configure, syncClock, setLogLevel, onLog, _normalizeNumbers, VOICES, _probe };

  // ============================================================
  // VoiceCore —— 统一语音选择层（Echo 重写，替代 WebSocket 神经语音方案）
  // 纯前端无法设置 Origin 头，浏览器直连 speech.platform.bing.com 永远被拒，
  // 故彻底放弃 WebSocket，改走 speechSynthesis + 严格 voice 优先级选择。
  // 优先级：P0 Online (Natural)（Edge 内置微软神经音）> P1 Microsoft Online > P2 Google > P3 lang 匹配
  // 暴露 getActiveVoice() 供监督员验收；ensureVoices() 正确等待 voiceschanged（修复历史 dead-wait）。
  // ============================================================
  global.VoiceCore = (function () {
    'use strict';

    // 等级判定：natural / microsoft / google / basic
    function tierOf(name) {
      const n = name || '';
      if (/Online\s*\(Natural\)/i.test(n)) return 'natural';
      if (/microsoft/i.test(n) && /online/i.test(n)) return 'microsoft';
      if (/google/i.test(n)) return 'google';
      return 'basic';
    }

    // 语言首选音色名（同等级内优先）：中文 Xiaoxiao/Yunyang，英文 Aria/Jenny
    function preferredName(lang) {
      const base = (lang || '').split('-')[0].toLowerCase();
      if (base === 'zh') return /(xiaoxiao|yunyang|huihui|yunxi)/i;
      return /(aria|jenny|emma|guy|andrew|zira|david|ava)/i;
    }

    const TIERS = ['natural', 'microsoft', 'google', 'basic'];

    // 等待语音列表就绪（修复历史 dead-wait：voiceschanged 可能不触发，加超时兜底）
    function ensureVoices() {
      return new Promise(function (resolve) {
        try {
          const existing = (typeof speechSynthesis !== 'undefined') ? speechSynthesis.getVoices() : [];
          if (existing && existing.length) { resolve(existing); return; }
        } catch (e) {}
        let done = false;
        const finish = function () {
          if (done) return; done = true;
          try { speechSynthesis.removeEventListener('voiceschanged', finish); } catch (e) {}
          let vs = [];
          try { vs = speechSynthesis.getVoices() || []; } catch (e) {}
          resolve(vs);
        };
        try {
          speechSynthesis.addEventListener('voiceschanged', finish);
          setTimeout(finish, 3000); // 兜底：3s 后即便无 voices 也放行，避免静默卡死
        } catch (e) { finish(); }
      });
    }

    // 选择最优 voice（返回 {voice,name,lang,tier} 或 null）
    function selectVoice(lang) {
      const base = (lang || 'zh-CN').split('-')[0].toLowerCase();
      let voices = [];
      try { voices = speechSynthesis.getVoices() || []; } catch (e) {}
      if (!voices.length) return null;
      // 同语言前缀优先，否则退回全部语音
      let pool = voices.filter(function (v) { return (v.lang || '').toLowerCase().indexOf(base) === 0; });
      if (!pool.length) pool = voices;
      const prefRe = preferredName(lang);
      for (let i = 0; i < TIERS.length; i++) {
        const tier = TIERS[i];
        const cands = pool.filter(function (v) { return tierOf(v.name) === tier; });
        if (!cands.length) continue;
        const pref = cands.filter(function (v) { return prefRe.test(v.name); });
        const pick = (pref.length ? pref : cands)[0];
        return { voice: pick, name: pick.name, lang: pick.lang, tier: tier };
      }
      return null;
    }

    // 监督员验收接口：返回当前命中 voice 名与等级
    function getActiveVoice(lang) {
      const r = selectVoice(lang);
      if (r) return { name: r.name, tier: r.tier, lang: r.lang };
      return { name: null, tier: 'none', lang: lang || 'zh-CN' };
    }

    // 朗读：自动选 voice，resolves 为命中的 tier 或 'none'
    function speak(text, opts) {
      text = _normalizeNumbers(text);
      opts = opts || {};
      return new Promise(function (resolve) {
        if (!text || typeof speechSynthesis === 'undefined' || !('speechSynthesis' in window)) { resolve('none'); return; }
        const hasCJK = /[\u4e00-\u9fa5]/.test(text);
        const lang = opts.lang || (hasCJK ? 'zh-CN' : 'en-US');
        ensureVoices().then(function () {
          speechSynthesis.cancel();
          const sel = selectVoice(lang);
          const u = new SpeechSynthesisUtterance(text);
          u.lang = lang;
          u.rate = (opts.rate != null) ? opts.rate : 1.0;
          u.pitch = (opts.pitch != null) ? opts.pitch : 1.0;
          if (sel) { try { u.voice = sel.voice; } catch (e) {} }
          u.onend = function () { resolve(sel ? sel.tier : 'browser'); };
          u.onerror = function () { resolve(sel ? sel.tier : 'browser'); };
          try { speechSynthesis.resume(); } catch (e) {}
          speechSynthesis.speak(u);
        });
      });
    }

    // 发音体检：依次播放中/英各一句，把命中 voice 名+等级写进 outId 元素
    function runCheck(outId) {
      const out = outId ? document.getElementById(outId) : null;
      function step(lang, text) {
        return ensureVoices().then(function () {
          const sel = selectVoice(lang);
          if (out) {
            out.innerHTML = (out.innerHTML || '') +
              '🔊 ' + (lang === 'zh-CN' ? '中文' : '英文') + '：命中 <b>' + (sel ? sel.name : '系统默认') + '</b>（等级 <b>' + (sel ? sel.tier : 'basic') + '</b>）<br>';
          }
          return speak(text, { lang: lang, rate: 0.95, pitch: 1.0 });
        });
      }
      if (out) out.innerHTML = '<span style="color:var(--teal);font-weight:700">🩺 发音体检中…</span><br>';
      return step('zh-CN', '你好呀，我是奇趣学园的小老师，跟着我一起读一读吧！')
        .then(function () { return step('en-US', 'Hello! I am your English teacher. Let us read together!'); })
        .then(function () {
          if (out) out.innerHTML += '<span style="color:var(--teal)">✅ 体检完成，上面就是当前命中的语音。</span>';
        });
    }

    return { ensureVoices: ensureVoices, selectVoice: selectVoice, getActiveVoice: getActiveVoice, speak: speak, runCheck: runCheck };
  })();
})(window);
