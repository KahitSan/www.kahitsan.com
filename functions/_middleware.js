// Cloudflare Pages Function to redirect apex domain to www
export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Redirect kahitsan.com to www.kahitsan.com
  if (url.hostname === 'kahitsan.com') {
    const newUrl = new URL(context.request.url);
    newUrl.hostname = 'www.kahitsan.com';
    return Response.redirect(newUrl.toString(), 301);
  }

  // Continue to next middleware or page
  return context.next();
}
