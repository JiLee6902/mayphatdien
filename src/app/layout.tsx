import type { Metadata, Viewport } from 'next';
import { Be_Vietnam_Pro, Archivo } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { MobileCallBar } from '@/components/MobileCallBar';
import { JsonLd } from '@/components/JsonLd';
import { site } from '@/config/site';
import { loadSettings } from '@/lib/content';
import {
  graph,
  organizationSchema,
  websiteSchema,
  localBusinessSchemas,
} from '@/lib/schema';

const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-be-vietnam',
});

// Display face — heavy, condensed character for industrial headlines.
const archivo = Archivo({
  subsets: ['latin', 'vietnamese'],
  weight: ['600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-archivo',
});


const TITLE = 'PMC — Cho thuê máy phát điện, máy nén khí, thiết bị công nghiệp';
const DESCRIPTION =
  'PMC cho thuê máy phát điện, máy nén khí, thiết bị phun rửa áp lực cao (UHP) và máy hàn. Khảo sát, lắp đặt tận công trình. Hotline 0936 899 431.';

export const metadata: Metadata = {
  // Resolves every relative canonical/OG URL to an absolute one.
  metadataBase: new URL(site.url),
  title: {
    default: TITLE,
    // Child pages set just their name; this appends the brand.
    template: '%s | PMC',
  },
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
    languages: { 'vi-VN': '/' },
  },
  manifest: '/manifest.webmanifest',
  // Rendered only when a Search Console token is configured (empty = omitted).
  ...(site.gscVerification
    ? { verification: { google: site.gscVerification } }
    : {}),
  keywords: [
    'cho thuê máy phát điện',
    'cho thuê máy nén khí',
    'máy phun rửa áp lực cao',
    'UHP',
    'cho thuê máy hàn',
    'thiết bị công nghiệp',
    'PMC',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/`,
    type: 'website',
    locale: 'vi_VN',
    siteName: 'PMC',
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'PMC — Cho thuê thiết bị công nghiệp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [site.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await loadSettings();
  return (
    <html lang="vi" className={`${beVietnam.variable} ${archivo.variable}`}>
      <head>
        {/* Preload LCP hero image (WebP) for faster Largest Contentful Paint */}
        <link
          rel="preload"
          as="image"
          href="/images/showcase-genset-yard.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="font-sans antialiased pb-14 md:pb-0">
        {/* Site-wide entity graph: Organization + WebSite + LocalBusiness ×2 */}
        <JsonLd
          data={graph([
            organizationSchema(),
            websiteSchema(),
            ...localBusinessSchemas(),
          ])}
        />
        <Header settings={settings} />
        <main>{children}</main>
        <Footer settings={settings} />
        <FloatingContact settings={settings} />
        <MobileCallBar settings={settings} />

        {/* Google Analytics 4 — loaded only when a measurement ID is set. */}
        {site.gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
