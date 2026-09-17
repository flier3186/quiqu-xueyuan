/**
 * engine/asr.js · 可插拔 ASR 语音识别层（阶段0：API 服务矩阵 + ASR 降级链）
 * 设计：适配器模式。统一入口 Asr.transcribe(audio) -> Promise<text|null>，
 * 按 付费 ASR -> 浏览器 Web Speech -> 报不支持 顺序降级，绝不抛异常、绝不阻塞页面。
 * 三级识别链：
 *   1) 付费 ASR（可插拔，默认关）：讯飞 / DeepSeek。家长粘贴 key 后启用，兜底 iOS Safari。
 *   2) 浏览器 Web Speech API：零成本默认；iOS Safari 不支持。
 *   3) 都不支持 / 无 key：resolve null，调用方回落到"关键词匹配 + 内置语音"闭环，离线 PWA 不崩。
 * 全局 API：Asr.transcribe(audio,opts)/supports()/active()/status()/saveConfig(cfg)/getConfig()/mask(key)/test()
 * 存储键 quiqu_asr_v1（独立于 quiqu_cloudtts_v1 / ququxv4_state_v1，不写 S.apiConfig）。
 */
(function (global) {
  'use strict';
  var STORE_KEY = 'quiqu_asr_v1';
  var DEFAULT_CFG = {
    enabled: false,        // 付费 ASR 总开关（默认关，走 Web Speech 零成本）
    provider: 'iflytek',   // 'iflytek' | 'deepseek'
    iFlyKey: '',
    deepseekKey: ''
  };
  var cfg = null;
  var lastError = null;
  // key 脱敏工具（前 6 后 4，与 cloud-tts.js "前 6 ***" 同风格；统一 DeepSeek/Groq/SiliconFlow 面板）
  function mask(key) {
    key = String(key || '').trim();
    if (!key) return '';
    if (key.length < 12) {
      var h = Math.max(1, Math.floor(key.length / 3));
      return key.slice(0, h) + '***' + key.slice(-2);
    }
    return key.slice(0, 6) + '***' + key.slice(-4);
  }
  function load() {
    if (cfg) return cfg;
    try {
      var raw = global.localStorage && global.localStorage.getItem(STORE_KEY);
      cfg = raw ? Object.assign({}, DEFAULT_CFG, JSON.parse(raw)) : Object.assign({}, DEFAULT_CFG);
    } catch (e) { cfg = Object.assign({}, DEFAULT_CFG); }
    var bad = false;
    ['iFlyKey', 'deepseekKey'].forEach(function (k) {
      var v = String(cfg[k] || '').trim();
      if (v && /^https?:\/\//i.test(v)) { cfg[k] = ''; bad = true; }
    });
    if (bad) save();
    return cfg;
  }
  function save() {
    try { global.localStorage && global.localStorage.setItem(STORE_KEY, JSON.stringify(cfg)); } catch (e) {}
  }
  function saveConfig(patch) {
    cfg = Object.assign(load(), patch || {});
    ['iFlyKey', 'deepseekKey'].forEach(function (k) {
      if (typeof cfg[k] === 'string') {
        cfg[k] = cfg[k].trim().replace(/[\r\n\t]/g, '');
        if (/^https?:\/\//i.test(cfg[k])) cfg[k] = '';
      }
    });
    save();
    return getConfig();
  }
  function getConfig() {
    var c = load();
    return {
      enabled: !!c.enabled,
      provider: c.provider,
      iFlyKey: mask(c.iFlyKey),
      deepseekKey: mask(c.deepseekKey),
      iFlyKeySet: !!c.iFlyKey,
      deepseekKeySet: !!c.deepseekKey
    };
  }
  function webAvailable() {
    var g = global || {};
    return !!(g.SpeechRecognition || g.webkitSpeechRecognition);
  }
  function paidKey() {
    var c = load();
    if (!c.enabled) return null;
    if (c.provider === 'deepseek') return c.deepseekKey || '';
    return c.iFlyKey || '';
  }
  function paidReady() { return !!paidKey(); }
  function active() {
    if (paidReady()) return 'paid';
    if (webAvailable()) return 'web';
    return 'none';
  }
  function supports() {
    var out = [];
    if (paidReady()) out.push('paid');
    if (webAvailable()) out.push('web');
    return out;
  }
  function status() {
    var c = load();
    return {
      paidProvider: c.provider,
      hasPaidKey: paidReady(),
      webAvailable: webAvailable(),
      active: active(),
      lastError: lastError
    };
  }
  // ============ 付费 ASR 适配器（可插拔，默认关） ============
  function b64toBytes(b64) {
    var bin = global.atob(b64);
    var out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  async function paidTranscribeDeepSeek(audio, opts) {
    var c = load();
    var key = c.deepseekKey;
    if (!key) { lastError = "DeepSeek ASR 未配置 key"; return null; }
    try {
      var blob = audio && audio.blob ? audio.blob : audio;
      var b64 = await new Promise(function (res, rej) {
        var fr = new global.FileReader();
        fr.onload = function () { res(String(fr.result || "").split(",")[1] || ""); };
        fr.onerror = rej;
        fr.readAsDataURL(blob);
      });
      var bytes = b64toBytes(b64);
      var fd = new global.FormData();
      fd.append("file", new global.Blob([bytes], { type: "audio/wav" }), "input.wav");
      fd.append("model", "whisper-1");
      var res = await global.fetch("https://api.deepseek.com/audio/transcriptions", {
        method: "POST", headers: { "Authorization": "Bearer " + key }, body: fd
      });
      if (!res.ok) { lastError = "DeepSeek ASR HTTP " + res.status; return null; }
      var j = await res.json();
      return String(j.text || "").trim() || null;
    } catch (e) { lastError = "DeepSeek ASR 调用失败: " + e.message; return null; }
  }
  async function paidTranscribeIFlytek(audio, opts) {
    var c = load();
    var key = c.iFlyKey;
    var relay = global.__IFLY_ASR_RELAY__ || (opts && opts.relay);
    if (!key) { lastError = "讯飞 ASR 未配置 key"; return null; }
    if (!relay) {
      lastError = "讯飞 ASR 需配置 __IFLY_ASR_RELAY__ 中转地址（讯飞 REST 需服务端签名，纯前端直连不可行，需家长自备轻量 relay 服务）";
      return null;
    }
    try {
      var blob = audio && audio.blob ? audio.blob : audio;
      var b64 = await new Promise(function (res, rej) {
        var fr = new global.FileReader();
        fr.onload = function () { res(String(fr.result || "").split(",")[1] || ""); };
        fr.onerror = rej;
        fr.readAsDataURL(blob);
      });
      var res = await global.fetch(String(relay).replace(/\/$/, "") + "/asr", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-IFlytek-Key": key },
        body: JSON.stringify({ audio: b64, type: "wav" })
      });
      if (!res.ok) { lastError = "讯飞 ASR relay HTTP " + res.status; return null; }
      var j = await res.json();
      return String(j.text || "").trim() || null;
    } catch (e) { lastError = "讯飞 ASR 调用失败: " + e.message; return null; }
  }
  async function paidTranscribe(audio, opts) {
    var c = load();
    if (c.provider === "deepseek") return await paidTranscribeDeepSeek(audio, opts);
    return await paidTranscribeIFlytek(audio, opts);
  }
  // ============ 浏览器 Web Speech 适配器（零成本默认，iOS Safari 不支持） ============
  function webTranscribe(audio, opts) {
    // audio: 传 { blob } 已录音文件，或 { live:true } 实时录音。
    // Web Speech API 仅能实时识别麦克风；对"已录好的 blob"无法离线转写 -> 返回 null 让调用方回落。
    return new Promise(function (resolve) {
      var g = global || {};
      var SR = g.SpeechRecognition || g.webkitSpeechRecognition;
      if (!SR) { lastError = "浏览器不支持 Web Speech API（iOS Safari 不支持）"; resolve(null); return; }
      if (!audio || !audio.live) { lastError = "已录音文件无法用 Web Speech 离线转写，请配置付费 ASR key"; resolve(null); return; }
      try {
        var rec = new SR();
        rec.lang = (opts && opts.lang) || "zh-CN";
        rec.maxAlternatives = 1;
        var final = "";
        rec.onresult = function (ev) { final = ev.results[0][0].transcript || ""; };
        rec.oncomplete = function () { resolve(final.trim() || null); };
        rec.onerror = function (ev) { lastError = "Web Speech 错误: " + (ev.error || ev); resolve(null); };
        rec.start();
        // 暴露停止句柄，让调用方控制时长
        Asr._lastWebRec = rec;
      } catch (e) { lastError = "Web Speech 启动失败: " + e.message; resolve(null); }
    });
  }
  // ============ 统一入口：付费 -> Web -> 不支持（失败一律 resolve null，绝不 reject） ============
  function transcribe(audio, opts) {
    return new Promise(function (resolve) {
      var a = active();
      function done(t) { resolve(t == null ? null : String(t)); }
      if (a === "paid") {
        paidTranscribe(audio, opts).then(function (t) {
          if (t) return done(t);
          // 付费失败，继续降级到 Web
          if (webAvailable()) return webTranscribe(audio, opts).then(done);
          return done(null);
        }).catch(function () { done(null); });
      } else if (a === "web") {
        webTranscribe(audio, opts).then(done);
      } else {
        lastError = "无任何可用 ASR 通道（无付费 key 且浏览器不支持 Web Speech）";
        done(null);
      }
    });
  }
  // ============ 连接测试（供配置面板"测试连接"按钮调用，绝不抛异常） ============
  function test() {
    return new Promise(function (resolve) {
      var c = load();
      var out = { active: active(), supports: supports(), ok: false, detail: "" };
      if (c.enabled && c.provider === "deepseek" && c.deepseekKey) {
        global.fetch("https://api.deepseek.com/audio/transcriptions", { method: "POST" }).then(function (r) {
          out.ok = true;
          out.detail = "DeepSeek 端点可达 HTTP " + r.status + (r.status === 401 ? "（鉴权失败，请核对 key）" : "");
          resolve(out);
        }).catch(function (e) { out.detail = "无法连接 DeepSeek: " + e.message; resolve(out); });
        return;
      }
      if (c.enabled && c.provider === "iflytek") {
        var relay = global.__IFLY_ASR_RELAY__;
        if (!relay) { out.detail = "讯飞 ASR 未配置 relay（__IFLY_ASR_RELAY__）"; resolve(out); return; }
        out.ok = true; out.detail = "讯飞 relay 已配置: " + relay; resolve(out); return;
      }
      // 无付费 key -> 探 Web Speech
      if (webAvailable()) { out.ok = true; out.detail = "Web Speech 可用（零成本默认通道）"; }
      else { out.detail = "当前浏览器无 Web Speech，且未配置付费 ASR key"; }
      resolve(out);
    });
  }
  var Asr = {
    transcribe: transcribe,
    supports: supports,
    active: active,
    status: status,
    saveConfig: saveConfig,
    getConfig: getConfig,
    mask: mask,
    test: test,
    DEFAULT_PROVIDER: "iflytek",
    version: "1.0.0"
  };
  global.Asr = Asr;
  // 供 webTranscribe 内部访问的句柄（不导出到 public API，加下划线表内部）
  Asr._lastWebRec = null;
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));
