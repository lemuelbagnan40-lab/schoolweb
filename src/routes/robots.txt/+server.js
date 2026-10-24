import { SITE_URL } from '$lib/site-config.js';

export function GET() {
  const base = SITE_URL;
  const body = `User-agent: *\nAllow: /\n${base ? `Sitemap: ${base}/sitemap.xml\n` : ''}`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' } });
}
