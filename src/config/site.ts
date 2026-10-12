export interface Location {
  name: string;
  address: string;
  phone: string; // digits only
  addressLocality?: string;
  addressRegion?: string;
}

export const site = {
  companyName: 'Công ty TNHH P.M.C',
  brand: 'PMC',
  // Canonical production origin (no trailing slash). Used for metadataBase,
  // canonical URLs, sitemap, robots and JSON-LD @id/url fields.
  url: 'https://chothuethietbipmc.com',
  description:
    'PMC cho thuê máy phát điện, máy nén khí, thiết bị phun rửa áp lực cao (UHP) và máy hàn công nghiệp. Khảo sát, giao lắp và vận hành tận công trình tại TP.HCM, Vũng Tàu và toàn miền Nam.',
  // Default social-share image (1200×630). Relative to `url`.
  ogImage: '/images/og-default.jpg',
  // Brand color used for the web manifest + browser theme-color.
  themeColor: '#14243b',
  // Google Analytics 4 measurement ID (e.g. "G-XXXXXXXXXX"). Empty = disabled.
  // Inject at build time via NEXT_PUBLIC_GA_ID, or hardcode here.
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? '',
  // Google Search Console verification token (the `content` value of the
  // google-site-verification meta tag). Empty = tag omitted.
  // Inject via NEXT_PUBLIC_GSC_VERIFICATION, or hardcode here.
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? '',
  hotline: '0936899431',
  email: 'pmc@pmcvn.com',
  zaloUrl: 'https://zalo.me/0936899431',
  // Geographic areas the business serves (LocalBusiness.areaServed).
  areaServed: [
    'TP. Hồ Chí Minh',
    'Bà Rịa - Vũng Tàu',
    'Đồng Nai',
    'Bình Dương',
    'Long An',
  ],
  locations: [
    {
      name: 'Văn phòng TP.HCM',
      address: '246/40A11 Xô Viết Nghệ Tĩnh, P.21, Q.Bình Thạnh, TP.HCM',
      phone: '02835141558',
      addressLocality: 'TP. Hồ Chí Minh',
      addressRegion: 'TP. Hồ Chí Minh',
    },
    {
      name: 'Trụ sở Vũng Tàu',
      address: '1591A Đường 30/4, P.12, TP Vũng Tàu, BR-VT',
      phone: '02543839699',
      addressLocality: 'TP. Vũng Tàu',
      addressRegion: 'Bà Rịa - Vũng Tàu',
    },
  ] as Location[],
} as const;

/** Convert a digits-only phone into a clean tel: href (no spaces). */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/\D/g, '')}`;
}

// CMS-editable subset of site config. Components accept this as a prop and
// default to `defaultSiteSettings` so they stay synchronous + testable; server
// parents inject the CMS-loaded values. Lives here (dependency-free) so client
// components can import the default without pulling in the Sanity client.
export interface SiteSettings {
  companyName: string;
  brand: string;
  hotline: string;
  email: string;
  zaloUrl: string;
  locations: { name: string; address: string; phone: string }[];
}

export const defaultSiteSettings: SiteSettings = {
  companyName: site.companyName,
  brand: site.brand,
  hotline: site.hotline,
  email: site.email,
  zaloUrl: site.zaloUrl,
  locations: site.locations.map((l) => ({
    name: l.name,
    address: l.address,
    phone: l.phone,
  })),
};
