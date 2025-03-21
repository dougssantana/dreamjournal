const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/dreamjournal/",
            "/dreamjournal/index.html",
        ]),
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(caches.match(event.request));
});
