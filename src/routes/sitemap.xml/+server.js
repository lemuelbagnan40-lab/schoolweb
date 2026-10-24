import { SITE_URL } from '$lib/site-config.js';
import { learningPaths } from '$lib/data/catalog.js';
import { detailedLessons } from '$lib/data/lessons/course-index.js';
import { projects } from '$lib/data/projects.js';

const xml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');

export function GET() {
  const base = SITE_URL;
  const paths = base ? [
    '/', '/cours', '/projets', '/reference', '/a-propos',
    ...learningPaths.map((course) => `/cours/${course.id}`),
    ...detailedLessons.map((lesson) => `/cours/${lesson.courseId}/lecons/${lesson.slug}`),
    ...projects.filter((project) => project.status === 'available').map((project) => `/projets/${project.id}`)
  ] : [];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${xml(`${base}${path}`)}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' } });
}
