import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
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
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-be-vietnam',
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
  alternates: { canonical: '/' },
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await loadSettings();
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body className="font-sans antialiased">
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
      </body>
    </html>
  );
}
