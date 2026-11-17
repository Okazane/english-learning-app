/* English Learning App — offline cache (app shell + curriculum). */
var CACHE = 'english-learning-app-v1';
var ASSETS = [
  'index.html',
  'lesson.html',
  'assets/style.css',
  'assets/app.js',
  'assets/lesson.js',
  'data/curriculum.js',
  'manifest.json'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE)
      .then(function (cache) {
        // cache each asset individually so one missing file does not abort installation
        return Promise.all(ASSETS.map(function (url) {
          return cache.add(url).catch(function () { });
        }));
      })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

// Network-first for same-origin GETs (so edits show up), falling back to cache offline.
self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    fetch(req)
      .then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      })
      .catch(function () {
        return caches.match(req, { ignoreSearch: true }).then(function (hit) {
          return hit || (req.mode === 'navigate' ? caches.match('index.html') : undefined);
        });
      })
  );
});
