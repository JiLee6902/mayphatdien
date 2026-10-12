import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

// Required for metadata routes under `output: 'export'`.
export const dynamic = 'force-static';

// Emitted as a static /manifest.webmanifest at build time.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PMC — Cho thuê thiết bị công nghiệp',
    short_name: 'PMC',
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: site.themeColor,
    lang: 'vi-VN',
    icons: [
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
