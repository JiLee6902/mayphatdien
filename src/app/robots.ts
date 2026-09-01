import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

// Required for metadata routes under `output: 'export'`.
export const dynamic = 'force-static';

// Emitted as a static /robots.txt at build time (works with output: 'export').
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
