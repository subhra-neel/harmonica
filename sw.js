// Offline support. To release an update: change VERSION here, APP_VERSION in index.html and "version" in version.json.
const VERSION = '2.3';
const CACHE = 'harmonica-tabs-' + VERSION;
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c =>
    Promise.all(FILES.map(u => fetch(new Request(u, { cache: 'reload' })).then(r => c.put(u, r)).catch(() => {})))
  ));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k.startsWith('harmonica-tabs') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.pathname.endsWith('version.json')) return;          // always straight from the network
  if (req.mode === 'navigate') {                               // page: network first, cache when offline
    e.respondWith(
      fetch(req.url, { cache: 'no-cache' })
        .then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put('index.html', copy)); return r; })
        .catch(() => caches.match('index.html').then(h => h || caches.match('./')))
    );
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
