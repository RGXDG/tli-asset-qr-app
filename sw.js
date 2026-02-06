self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('asset-qr-v1').then((cache) => cache.addAll([
      './',
      './index.html',
      'https://unpkg.com/qr-code-styling@1.5.0/lib/qr-code-styling.js'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});