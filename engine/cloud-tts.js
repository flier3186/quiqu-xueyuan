/**
 * engine/cloud-tts.js · CloudTTS 云端情感语音层（P0：消灭机械音）
 *
 * 三级语音链最高级：CloudTTS(有感情起伏的CosyVoice2神经音) → VoiceCore(Edge Online Natural) → 基础音
 *
 * - 服务商：SiliconFlow（已实测 CORS: Access-Control-Allow-Origin: *，浏览器可直调）
 * - 模型：FunAudioLLM/CosyVoice2-0.5B（免费额度，情感/语气可由指令控制）
 * - Key：家长在"高级语音设置"面板粘贴一次，localStorage 持久化（自用场景可接受）
 * - 缓存：Cache API 持久缓存合成音频，同一句话只请求一次
 * - 失败：任何错误静默降级到下一级，绝不阻塞页面
 *
 * 全局 API：
 *   CloudTTS.isReady()                  是否已配置 key 且可用
 *   CloudTTS.speak(text, opts)          Promise<boolean> true=云端已播报
 *   CloudTTS.cancel()                   停止当前云端播报
 *   CloudTTS.status()                   {ready, lastError, cacheSize}
 *   CloudTTS.saveConfig(cfg)            保存配置
 *   CloudTTS.getConfig()
 *   CloudTTS.test(text)                 测试播报（供设置面板）
 */
(function (global) {
  'use strict';

  var STORE_KEY = 'quiqu_cloudtts_v1';
  var CACHE_NAME = 'quiqu-tts-v1';
  var API_URL = 'https://api.siliconflow.cn/v1/audio/speech';
  var MODEL = 'FunAudioLLM/CosyVoice2-0.5B';

  // 情感语气预设（CosyVoice2 instruct 语法：指令 + <|endofprompt|> + 正文）
  var EMOTIONS = {
    warm:    '用温柔亲切的语气说',
    happy:   '用开心雀跃的语气说',
    praise:  '用热情赞扬的语气说',
    comfort: '用温和安慰的语气说',
    lively:  '用活泼俏皮的语气说',
    calm:    '用平静清晰的语气说'
  };

  var DEFAULT_CFG = {
    enabled: true,
    apiKey: '',
    voiceZh: MODEL + ':diana',      // 中文女声（活泼）
    voiceEn: MODEL + ':alex',       // 英文男声（清晰友好）
    emotion: true,                  // 情感指令开关
    speed: 1.0
  };

  var cfg = null;
  var lastError = null;
  var currentAudio = null;
  var cache = null; // 延迟打开
  var memCache = {};  // 内存兜底（Cache API 不可用时）
  var cacheCount = 0;

  function load() {
    if (cfg) return cfg;
    try {
      var raw = global.localStorage && global.localStorage.getItem(STORE_KEY);
      cfg = raw ? Object.assign({}, DEFAULT_CFG, JSON.parse(raw)) : Object.assign({}, DEFAULT_CFG);
    } catch (e) { cfg = Object.assign({}, DEFAULT_CFG); }
    // 自愈：清理历史误存的无效 Key（网址/名称/残缺串）
    if (cfg.apiKey && !/^sk-[A-Za-z0-9]{20,}$/.test(String(cfg.apiKey).trim())) {
      cfg.apiKey = '';
      save();
    }
    // 自愈：非法音色名（官方仅支持 8 个预置 + speech: 开头的自定义）回默认
    cfg = sanitizeVoices(cfg);
    return cfg;
  }

  // 官方预置音色白名单（docs.siliconflow.cn TTS 文档）：男 alex/benjamin/charles/david，女 anna/bella/claire/diana
  var PRESET_VOICES = ['alex', 'benjamin', 'charles', 'david', 'anna', 'bella', 'claire', 'diana'];
  function voiceValid(v) {
    if (!v) return false;
    if (v.indexOf('speech:') === 0) return true; // 用户自定义音色
    var m = v.match(/^[^:]+:([a-zA-Z]+)$/);
    if (!m) return false;
    return PRESET_VOICES.indexOf(m[1].toLowerCase()) >= 0;
  }
  function sanitizeVoices(c) {
    var changed = false;
    if (!voiceValid(c.voiceZh)) { c.voiceZh = DEFAULT_CFG.voiceZh; changed = true; }
    if (!voiceValid(c.voiceEn)) { c.voiceEn = DEFAULT_CFG.voiceEn; changed = true; }
    if (changed) save();
    return c;
  }
  function save() {
    try { global.localStorage && global.localStorage.setItem(STORE_KEY, JSON.stringify(cfg)); } catch (e) {}
  }

  function hash(s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
    return h.toString(36);
  }

  function getCache() {
    return cache;
  }
  function initCache() {
    if (cache) return Promise.resolve(cache);
    if (global.caches && global.caches.open) {
      return global.caches.open(CACHE_NAME).then(function (c) { cache = c; return c; }).catch(function () { return null; });
    }
    return Promise.resolve(null);
  }

  function isReady() {
    var c = load();
    return !!(c.enabled && c.apiKey);
  }

  function status() {
    return { ready: isReady(), lastError: lastError, cacheSize: cacheCount };
  }

  function saveConfig(patch) {
    cfg = Object.assign(load(), patch || {});
    // ---- 防呆：Key 规范化与校验 ----
    if (typeof cfg.apiKey === 'string') {
      cfg.apiKey = cfg.apiKey.trim().replace(/[\r\n\t]/g, '');
      if (cfg.apiKey && !/^sk-[A-Za-z0-9]{20,}$/.test(cfg.apiKey)) {
        if (/cloud\.siliconflow|^https?:/i.test(cfg.apiKey)) {
          lastError = '粘进去的是网址，不是密钥。请到 cloud.siliconflow.cn 「API 密钥」页新建并复制 sk- 开头的密钥';
        } else if (/^sk-/.test(cfg.apiKey)) {
          lastError = '密钥长度不完整，请重新完整复制';
        } else {
          lastError = '这不是有效的 SiliconFlow 密钥（应以 sk- 开头）';
        }
        cfg.apiKey = ''; // 拒绝保存错误内容
      } else if (cfg.apiKey) {
        lastError = null; // 合法 Key，清除历史错误
      }
    }
    // 音色白名单校验（非法音色是"机器味/失声"的历史根因）
    cfg = sanitizeVoices(cfg);
    save();
    return getConfig();
  }
  function getConfig() {
    var c = load();
    // 不泄露完整 key
    return Object.assign({}, c, { apiKey: c.apiKey ? c.apiKey.slice(0, 6) + '***' : '' });
  }

  function buildInput(text, emotion) {
    if (cfg.emotion && emotion && EMOTIONS[emotion]) {
      return EMOTIONS[emotion] + '<|endofprompt|>' + text;
    }
    return text;
  }

  function synth(text, opts) {
    var o = opts || {};
    var lang = o.lang || (/[\u4e00-\u9fa5]/.test(text) ? 'zh' : 'en');
    var voice = (lang === 'zh' ? cfg.voiceZh : cfg.voiceEn) || DEFAULT_CFG.voiceZh;
    var body = {
      model: MODEL,
      input: buildInput(text, o.emotion),
      voice: voice.indexOf(':') >= 0 ? voice : MODEL + ':' + voice,
      response_format: 'mp3',
      speed: Number(o.speed || cfg.speed) || 1.0
    };
    var key = hash(body.input + '|' + body.voice + '|' + body.speed);
    var cacheUrl = 'https://quiqu-tts.local/' + key + '.mp3';

    return initCache().then(function (c) {
      if (c) {
        return c.match(cacheUrl).then(function (hit) { return hit ? hit.blob() : null; });
      }
      if (memCache[key]) return memCache[key];
      return null;
    }).then(function (blob) {
      if (blob) return blob;
      return fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + cfg.apiKey },
        body: JSON.stringify(body)
      }).then(function (res) {
        if (!res.ok) {
          return res.text().then(function (t) {
            var human;
            if (res.status === 401) {
              human = '密钥无效（HTTP 401）——请确认复制的是 cloud.siliconflow.cn 「API 密钥」页生成的 sk- 开头密钥，不是网址或密钥名称';
            } else if (res.status === 429) {
              human = '请求太频繁或免费额度用尽（HTTP 429），稍后再试';
            } else if (res.status === 403) {
              human = '该模型未开通或账户受限（HTTP 403），请在 SiliconFlow 控制台确认 CosyVoice2 可用';
            } else {
              human = 'HTTP ' + res.status + ' ' + String(t).slice(0, 120);
            }
            lastError = human;
            throw new Error(human);
          });
        }
        return res.blob();
      }).then(function (b) {
        cacheCount++;
        if (c) { try { c.put(cacheUrl, new Response(b.slice(0), { headers: { 'Content-Type': 'audio/mpeg' } })); } catch (e) {} }
        else { memCache[key] = b; }
        return b;
      });
    });
  }

  function play(blob, onEnd) {
    return new Promise(function (resolve, reject) {
      try {
        if (currentAudio) { try { currentAudio.pause(); } catch (e) {} }
        var url = URL.createObjectURL(blob);
        var a = new Audio(url);
        currentAudio = a;
        a.onended = function () { URL.revokeObjectURL(url); currentAudio = null; if (onEnd) onEnd(); resolve(true); };
        a.onerror = function () { currentAudio = null; reject(new Error('audio play error')); };
        a.play().catch(function (e) { currentAudio = null; reject(e); });
      } catch (e) { reject(e); }
    });
  }

  /**
   * 云端播报。返回 Promise<boolean>：true=已由云端播出；false=未配置/失败（调用方降级到下一级）
   * opts: {lang:'zh'|'en', emotion:'warm'|'happy'|'praise'|'comfort'|'lively'|'calm', speed, onEnd}
   */
  function speak(text, opts) {
    opts = opts || {};
    return new Promise(function (resolve) {
      if (!text || !isReady()) return resolve(false);
      var c = load();
      synth(String(text), { lang: opts.lang, emotion: opts.emotion, speed: opts.speed })
        .then(function (blob) { return play(blob, opts.onEnd); })
        .then(function () { resolve(true); })
        .catch(function (e) {
          lastError = String(e && e.message || e).slice(0, 160);
          resolve(false);
        });
    });
  }

  function cancel() {
    if (currentAudio) { try { currentAudio.pause(); currentAudio = null; } catch (e) {} }
  }

  function test(text) {
    return speak(text || '你好呀！我是你的学习小伙伴，今天我们一起加油哦！', { lang: 'zh', emotion: 'happy' });
  }

  global.CloudTTS = {
    isReady: isReady,
    speak: speak,
    cancel: cancel,
    status: status,
    saveConfig: saveConfig,
    getConfig: getConfig,
    test: test,
    EMOTIONS: EMOTIONS,
    version: '1.0.0'
  };
})(window);
