const CACHE = "cashflow-v18";
const ASSETS = ["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png"];
self.addEventListener("install", e=>{ self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>{}))); });
self.addEventListener("activate", e=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e=>{
  const url=new URL(e.request.url);
  // Never cache Supabase or other cross-origin API calls; always go to network
  if(url.origin!==location.origin){ return; }
  e.respondWith(
    fetch(e.request).then(resp=>{
      const copy=resp.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy).catch(()=>{}));
      return resp;
    }).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html")))
  );
});
