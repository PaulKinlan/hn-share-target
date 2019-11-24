onfetch = async (event) => {
  const url = new URL(event.request.url);
  if (url.pathname !== '/share.html') return;

  const location = encodeURIComponent(url.searchParams.get('url') || url.searchParams.get('text'));
  const title = encodeURIComponent(url.searchParams.get('title'))
  const hnUrl = `https://news.ycombinator.com/submitlink?u=${location}&t=${title}`

  event.waitUntil(event.respondWith(Response.redirect(hnUrl)));
};

oninstall = () => {
  skipWaiting();
};

onactivate = () => {
  clients.claim();
};