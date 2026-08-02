const CACHE_NAME = 'quiqu-xueyuan-v5-20260802b';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/icons/icon.svg'
];

// 安装：预缓存核心文件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => {})
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
