// JSON-LD structured data builders. All @id values are stable, absolute URLs
// so nodes can cross-reference each other into a single connected graph.
//
// Deliberately excluded: FAQPage (Google retired FAQ rich results 2026-05-07)
// and HowTo (deprecated 2023-09). Product offers are omitted because rental
// pricing is quote-based ("Liên hệ") — fabricating a price would be invalid.

import { site } from '@/config/site';
import type { EquipmentDoc } from '@/lib/content';

const ORIGIN = site.url;

/** Absolute URL for a site-relative path (keeps the trailing slash convention). */
export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;
}

const ORG_ID = `${ORIGIN}/#organization`;
const WEBSITE_ID = `${ORIGIN}/#website`;

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.companyName,
    alternateName: site.brand,
    url: `${ORIGIN}/`,
    logo: absoluteUrl('/images/categories/may-phat-dien.jpg'),
    image: absoluteUrl(site.ogImage),
    description: site.description,
    email: site.email,
    telephone: `+84${site.hotline.replace(/^0/, '')}`,
    areaServed: site.areaServed,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+84${site.hotline.replace(/^0/, '')}`,
      contactType: 'sales',
      areaServed: 'VN',
      availableLanguage: ['vi'],
    },
    sameAs: [site.zaloUrl],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${ORIGIN}/`,
    name: `${site.brand} — Cho thuê thiết bị công nghiệp`,
    inLanguage: 'vi-VN',
    publisher: { '@id': ORG_ID },
  };
}

/** One LocalBusiness node per physical office — the core of local ranking. */
export function localBusinessSchemas() {
  return site.locations.map((loc, i) => ({
    '@type': 'LocalBusiness',
    '@id': `${ORIGIN}/#local-${i}`,
    name: `${site.companyName} — ${loc.name}`,
    image: absoluteUrl(site.ogImage),
    url: `${ORIGIN}/`,
    telephone: loc.phone,
    email: site.email,
    priceRange: '$$',
    parentOrganization: { '@id': ORG_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.address,
      addressLocality: loc.addressLocality ?? '',
      addressRegion: loc.addressRegion ?? '',
      addressCountry: 'VN',
    },
    areaServed: site.areaServed,
  }));
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(items: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** Product node for an equipment detail page (specs -> additionalProperty). */
export function productSchema(item: EquipmentDoc, path: string) {
  const images = (item.images?.length ? item.images : [item.image])
    .filter(Boolean)
    .map(absoluteUrl);
  return {
    '@type': 'Product',
    '@id': `${absoluteUrl(path)}#product`,
    name: item.name,
    description: item.seoDescription || item.description,
    image: images,
    sku: item.slug,
    category: item.categoryName,
    ...(item.brand
      ? { brand: { '@type': 'Brand', name: item.brand } }
      : {}),
    additionalProperty: item.specs.map((s) => ({
      '@type': 'PropertyValue',
      name: s.label,
      value: s.value,
    })),
  };
}

// Convert a "dd/mm/yyyy" display date to ISO "yyyy-mm-dd" (or undefined).
function toIso(display: string): string | undefined {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(display);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : undefined;
}

export function articleSchema(
  post: { title: string; excerpt: string; image: string; date: string },
  path: string,
) {
  const iso = toIso(post.date);
  return {
    '@type': 'BlogPosting',
    '@id': `${absoluteUrl(path)}#article`,
    headline: post.title,
    description: post.excerpt,
    ...(post.image ? { image: [absoluteUrl(post.image)] } : {}),
    ...(iso ? { datePublished: iso } : {}),
    inLanguage: 'vi-VN',
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: absoluteUrl(path),
  };
}

/**
 * Wrap nodes in a single @graph document with the shared @context. Pass the
 * page-specific nodes; the site-wide Organization/WebSite live in the layout.
 */
export function graph(nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
