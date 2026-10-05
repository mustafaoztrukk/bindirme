/* MatchPlayer — servis işçisi
   Uygulamayı güncelledikten sonra SÜRÜM satırını değiştir,
   yoksa telefon eski kopyayı önbellekten açmaya devam eder. */
const SURUM = "matchplayer-v5";

const KABUK = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/splash-828x1792.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(SURUM).then(c => c.addAll(KABUK)).then(() => self.skipWaiting()).catch(() => {})
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== SURUM).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  let u; try { u = new URL(r.url); } catch (_) { return; }
  if (u.origin !== location.origin) return;     // seçilen video/still (blob:) önbelleğe girmez
  e.respondWith(
    caches.match(r).then(hit => hit || fetch(r).then(res => {
      if (res && res.status === 200 && res.type === "basic") {
        const kopya = res.clone();
        caches.open(SURUM).then(c => c.put(r, kopya)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match("./index.html")))
  );
});
