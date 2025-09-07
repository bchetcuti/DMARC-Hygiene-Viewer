export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
  
    const redirectMap = {
      "/": "/dmarc-viewer.html",
      "/dmarc": "/dmarc-viewer.html",
      "/viewer": "/dmarc-viewer.html",
    };
  
    const target = redirectMap[url.pathname];
    if (target) {
      return Response.redirect(`${url.origin}${target}`, 302);
    }
  
    return context.next(); // Proceed normally for other paths
  }