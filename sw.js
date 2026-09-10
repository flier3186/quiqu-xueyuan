const CACHE_NAME = 'quiqu-xueyuan-v5-20260910b';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/theme.css',
  '/assets/icons/icon.svg',
  '/manifest.json',
  'data/english-grammar.js',
  'data/english-listening.js',
  'data/english-phonics.js',
  'data/english-scenarios.js',
  'data/english-vocab.js',
  'data/grade-limits.js',
  'data/listening-radio.js',
  'data/math-2a-2b.js',
  'data/math-3-6-extend.js',
  'data/math-data-2b.js',
  'data/math-data-3a.js',
  'data/math-data-3b.js',
  'data/math-data-4a.js',
  'data/math-data-4b.js',
  'data/math-data-5a.js',
  'data/math-data-5b.js',
  'data/math-data-6a.js',
  'data/math-data-6b.js',
  'data/math-data-7a.js',
  'data/math-data-7b.js',
  'data/math-data-8a.js',
  'data/math-data-8b.js',
  'data/math-data-9a.js',
  'data/math-data-9b.js',
  'data/math-data-core.js',
  'data/math-daily-bank.js',
  'data/speak-8-new.js',
  'data/storybooks.js',
  'data/tpr-action-house.js',
  'data/vocab-themes.js',
  'data/word-dict.js',
  'engine/achievements.js',
  'engine/cloud-tts.js',
  'engine/english-flow-v5.js',
  'engine/listening-math.js',
  'engine/math-flow-v5.js',
  'engine/math-geometry-3d.js',
  'engine/math-kernel.js',
  'engine/math-manipulative.js',
  'engine/math-visual-v5.js',
  'engine/mic-permission.js',
  'engine/neural-tts.js',
  'engine/parent-panel.js',
  'engine/pet-companion.js',
  'engine/progress-tracker-v5.js',
  'engine/russian-questioning.js',
  'engine/scene-manager.js',
  'engine/spaced-review-v5.js',
  'engine/spaced-review.js',
  'engine/speak-engine-v5.js',
  'engine/weakness-detector-v5.js'
];

// 安装：预缓存核心文件
self.addEventListener('install', event => {
  // 逐个预缓存（allSettled：单个 404 不拖垮整体安装）
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.allSettled(ASSETS.map(a =>
        cache.add(a).catch(()=>{})
      ))
    ).catch(()=>{})
  );
  self.skipWaiting();
});

// 激活：清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// 请求：导航网络优先回退缓存，JS/CSS stale-while-revalidate
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('/index.html'))
    );
    return;
  }
  // 同源 JS/CSS：缓存优先，后台更新
  var url = new URL(event.request.url);
  if(url.origin === self.location.origin && /\.(js|css)$/.test(url.pathname)){
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache){
        return cache.match(event.request).then(function(cached){
          var fetchPromise = fetch(event.request).then(function(resp){
            if(resp && resp.ok) cache.put(event.request, resp.clone());
            return resp;
          }).catch(function(){return cached;});
          return cached || fetchPromise;
        });
      })
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
