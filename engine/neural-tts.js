// ============================================================
// NeuralTTS —— 微软 Edge 神经语音（前端直连，免费无需 key）
// 协议：wss://speech.platform.bing.com/.../readaloud/edge/v1
// 返回 MP3 音频流，Blob 播放；失败时由调用方降级到 speechSynthesis
// ============================================================
(function (global) {
  'use strict';

  const TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
  const SEC_VER = '1-143.0.3650.75';
  const HOST = 'speech.platform.bing.com';

  // 推荐音色（真人级神经语音）
  const VOICES = {
    emma: 'en-US-EmmaMultilingualNeural',   // 温柔女声，多语
    aria: 'en-US-AriaNeural',               // 自然女声
    leo: 'en-US-AndrewNeural',              // 活力男声
    female: 'en-US-AvaNeural',
    male: 'en-US-AndrewNeural',
    zh: 'zh-CN-XiaoxiaoNeural',             // 中文女声（备用）
  };

  let _currentAudio = null;
  let _consecFails = 0;
  let _disabled = false;   // 连续失败过多时本会话禁用，避免每次点击都等超时
  let _gen = 0;            // 取消代际：新播放使旧播放作废

  async function _genGec(shiftSec) {
    let ticks = Math.floor(Date.now() / 1000 + 11644473600 + (shiftSec || 0));
    ticks -= ticks % 300;
    ticks = ticks * 10000000;  // Windows 100ns 文件时间
    const buf = new TextEncoder().encode(String(ticks) + TOKEN);
    const digest = await crypto.subtle.digest('SHA-256', buf);
    return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
  }

  function _uuid32() {
    return (crypto.randomUUID ? crypto.randomUUID() : 'u' + Math.random().toString(36).slice(2) + Date.now().toString(36)).replace(/-/g, '').slice(0, 32).padEnd(32, '0');
  }

  // 单次连接尝试：resolve({chunks, audioBytes}) 或 reject
  function _attempt(text, voice, ratePct, pitchHz, shiftSec, myGen) {
    return new Promise((resolve, reject) => {
      let gec;
      _genGec(shiftSec).then(g => { gec = g; open(); }).catch(reject);

      function open() {
        const url = `wss://${HOST}/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TOKEN}&Sec-MS-GEC=${gec}&Sec-MS-GEC-Version=${SEC_VER}&ConnectionId=${_uuid32()}`;
        let ws;
        try { ws = new WebSocket(url); } catch (e) { reject(e); return; }
        ws.binaryType = 'arraybuffer';
        const chunks = [];
        let audioBytes = 0;
        let settled = false;
        const done = (fn, arg) => { if (!settled) { settled = true; clearTimeout(timer); try { ws.close(); } catch (e) {} fn(arg); } };
        const timer = setTimeout(() => done(reject, new Error('timeout')), 12000);
        ws.onopen = () => {
          const ts = new Date().toUTCString().replace('GMT', 'GMT+0000 (Coordinated Universal Time)');
          ws.send(`X-Timestamp:${ts}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}`);
          const escaped = String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
          const ssml = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'><voice name='${voice}'><prosody pitch='${pitchHz >= 0 ? '+' : ''}${pitchHz}Hz' rate='${ratePct >= 0 ? '+' : ''}${ratePct}%' volume='+0%'>${escaped}</prosody></voice></speak>`;
          ws.send(`X-RequestId:${_uuid32()}\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:${ts}\r\nPath:ssml\r\n\r\n${ssml}`);
        };
        ws.onmessage = (ev) => {
          if (typeof ev.data === 'string') {
            if (ev.data.indexOf('Path:turn.end') >= 0) {
              if (audioBytes > 1000) { _consecFails = 0; done(resolve, { chunks, audioBytes }); }
              else done(reject, new Error('no audio'));
            }
          } else if (ev.data && ev.data.byteLength > 2) {
            const headLen = new DataView(ev.data).getUint16(0);
            if (ev.data.byteLength > 2 + headLen) {
              chunks.push(new Uint8Array(ev.data, 2 + headLen));
              audioBytes += ev.data.byteLength - 2 - headLen;
            }
          }
        };
        ws.onerror = () => {};
        ws.onclose = (e) => done(reject, new Error('ws close ' + (e ? e.code : '')));
      }
    });
  }

  // 主合成：依次尝试 0/+300/-300 秒窗口（时钟偏差兜底）
  async function synthesize(text, opts) {
    if (_disabled) throw new Error('neural tts disabled this session');
    const voice = (opts && opts.voice) || VOICES.female;
    const ratePct = (opts && opts.ratePct) || 0;
    const pitchHz = (opts && opts.pitchHz) || 0;
    let lastErr;
    for (const shift of [0, 300, -300]) {
      if (_gen !== (opts && opts.__gen || _gen) && shift > 0) { /* 取消检查 */ }
      try {
        const r = await _attempt(text, voice, ratePct, pitchHz, shift);
        return r;
      } catch (e) { lastErr = e; }
    }
    _consecFails++;
    if (_consecFails >= 3) _disabled = true;
    throw lastErr || new Error('synthesize failed');
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
        audio.onerror = () => { URL.revokeObjectURL(url); _onFail(reject, new Error('audio play error')); };
        audio.play().catch(e => _onFail(reject, e));
      } catch (e) { _onFail(reject, e); }
    });
  }
  function _onFail(reject, e) { try { reject(e); } catch (x) {} }

  // 对外主入口：合成并播放。resolve=播放完成；reject=彻底失败（调用方降级 speechSynthesis）
  async function speak(text, opts) {
    const myGen = ++_gen;
    const r = await synthesize(text, Object.assign({}, opts, { __gen: myGen }));
    await _play(r.chunks);
  }
  // 立即停止当前播放
  function stop() {
    _gen++;
    if (_currentAudio) { try { _currentAudio.pause(); } catch (e) {} _currentAudio = null; }
  }
  function isDisabled() { return _disabled; }
  function reset() { _disabled = false; _consecFails = 0; }

  global.NeuralTTS = { speak, stop, isDisabled, reset, VOICES };
})(window);
