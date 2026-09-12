// Verify the cloud-tts.js scope bug is fixed by simulating the cache path.
const vm = require('vm');
const fs = require('fs');

const code = fs.readFileSync('engine/cloud-tts.js', 'utf8');

let fetchCalled = false;
let fetchUrl = null;
let putCalled = false;

const mockGlobal = {
  localStorage: {
    getItem: () => JSON.stringify({ apiKey: 'sk-test12345678901234567890', voiceZh: 'FunAudioLLM/CosyVoice2-0.5B:diana', voiceEn: 'FunAudioLLM/CosyVoice2-0.5B:alex', emotion: true }),
    setItem: () => {}
  },
  caches: {
    open: () => Promise.resolve({
      match: () => Promise.resolve(null),
      put: () => { putCalled = true; return Promise.resolve(); }
    })
  },
  fetch: (url, opts) => {
    fetchCalled = true;
    fetchUrl = url;
    return Promise.resolve({
      ok: true,
      blob: () => Promise.resolve({ slice: () => ({}) })
    });
  },
  Audio: class Audio {
    set onended(fn) { setTimeout(fn, 0); }
    set onerror(fn) {}
    play() { return Promise.resolve(); }
  },
  URL: { createObjectURL: () => 'blob://fake', revokeObjectURL: () => {} }
};

mockGlobal.window = mockGlobal;
const ctx = vm.createContext(mockGlobal);
vm.runInContext(code, ctx);

ctx.CloudTTS.test().then(function (ok) {
  console.log('test ok:', ok);
  console.log('fetch called:', fetchCalled, 'url:', fetchUrl);
  console.log('cache put called:', putCalled);
  if (!fetchCalled) console.error('ERROR: fetch was not called');
  if (!putCalled) console.error('ERROR: cache put was not called (scope bug?)');
  const status = ctx.CloudTTS.status();
  console.log('status:', JSON.stringify(status));
  if (status.lastError) console.error('lastError:', status.lastError);
}).catch(function (e) {
  console.error('UNCAUGHT:', e && e.message || e);
});
