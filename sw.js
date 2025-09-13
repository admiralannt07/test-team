self.addEventListener('install', e => {
  e.waitUntil(caches.open('ar-pwa-v1').then(c => c.addAll([
    './',
    './index.html',
    './css/style.css',
    './js/main.js',
    './manifest.json'
  ])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
