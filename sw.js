const CACHE_NAME = 'map-editor-v6';

// ไฟล์ของแอป (โดเมนเดียวกัน) — ใช้ network-first เพื่อให้ได้เวอร์ชันล่าสุดเสมอ
// ถ้าออฟไลน์ค่อยใช้ของที่ cache ไว้
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.svg',
  './icon-512.svg',
  './icon-192.png',
  './icon-512.png'
];

// ไฟล์จาก CDN (เวอร์ชันคงที่) — ใช้ stale-while-revalidate
const CDN_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css',
  'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=IBM+Plex+Sans+Thai:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      // ไฟล์ไหนโหลดไม่ได้ไม่ให้ทำให้ install ล้มทั้งชุด
      await Promise.all(
        [...APP_SHELL, ...CDN_ASSETS].map(url =>
          cache.add(new Request(url, { cache: 'reload' })).catch(() => {})
        )
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // ข้ามพวก tile แผนที่ / API ภายนอกอื่นๆ ให้ browser จัดการเอง
  const isCdn = CDN_ASSETS.includes(req.url) ||
    url.hostname === 'fonts.gstatic.com';
  const isSameOrigin = url.origin === self.location.origin;
  // ข้าม Dropbox และ Google APIs (authentication)
  const isAuthApi = url.hostname === 'www.dropbox.com' || url.hostname === 'apis.google.com';
  if (!isSameOrigin && !isCdn) return;
  if (isAuthApi) return;

  if (isSameOrigin) {
    // network-first
    event.respondWith(
      fetch(req)
        .then(res => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(req, copy));
          }
          return res;
        })
        .catch(() =>
          caches.match(req, { ignoreSearch: true }).then(hit =>
            hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())
          )
        )
    );
    return;
  }

  // stale-while-revalidate สำหรับ CDN
  event.respondWith(
    caches.match(req).then(hit => {
      const network = fetch(req)
        .then(res => {
          if (res && (res.ok || res.type === 'opaque')) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(req, copy));
          }
          return res;
        })
        .catch(() => hit);
      return hit || network;
    })
  );
});
