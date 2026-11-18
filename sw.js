/* English Learning App — offline cache (app shell + curriculum). */
var CACHE = 'english-learning-app-v5';
var ASSETS = [
  'index.html',
  'lesson.html',
  'assets/style.css?v=5',
  'assets/app.js?v=5',
  'assets/lesson.js?v=5',
  'data/curriculum.js?v=5',
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

// lesson.html?day=1 ... ?day=30 is one and the same document, so HTML pages are cached under their
// path only (no query string): a single copy of lesson.html instead of 30.
function cacheKey(req) {
  var url = new URL(req.url);
  if (url.search && (/\.html$/.test(url.pathname) || req.mode === 'navigate')) {
    return new Request(url.origin + url.pathname, { method: 'GET' });
  }
  return req;
}

// Network-first for same-origin GETs (so edits show up), falling back to cache offline.
self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  var key = cacheKey(req);
  event.respondWith(
    fetch(req)
      .then(function (res) {
        if (res && res.ok && res.type === 'basic') {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { return c.put(key, copy); }).catch(function () { });
        }
        return res;
      })
      .catch(function () {
        return caches.match(key, { ignoreSearch: true }).then(function (hit) {
          return hit || caches.match(req, { ignoreSearch: true });
        }).then(function (hit) {
          return hit || (req.mode === 'navigate' ? caches.match('index.html') : undefined);
        });
      })
  );
});