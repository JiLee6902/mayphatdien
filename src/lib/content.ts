// Content data layer.
//
// Every getter tries Sanity first and falls back to the bundled static config
// when the CMS is not configured, is unreachable, or has no documents of that
// type yet. This keeps the static export building green today and flips the
// whole site to CMS-driven the moment content is seeded — no page changes.
//
// Shapes are normalized to the existing static interfaces so components stay
// untouched.

import { cache } from 'react';
import { projectId } from '@/sanity/client';
import {
  getCategories,
  getAllEquipment,
  getEquipmentBySlug,
  getFeaturedEquipment,
  getEquipmentByCategory,
  getProjects,
  getPosts,
  getSettings,
} from '@/sanity/queries';
import { defaultSiteSettings, type SiteSettings } from '@/config/site';
import { categories as staticCategories, type Category } from '@/config/categories';
import {
  equipment as staticEquipment,
  getImages,
  type Equipment,
} from '@/config/equipment';
import { projects as staticProjects, type Project } from '@/config/projects';
import { posts as staticPosts, type Post } from '@/config/posts';

// Equipment enriched with its full image gallery (Sanity `images[]` or the
// static gallery map) so the detail page can consume `item.images` uniformly.
export type EquipmentDoc = Equipment & {
  images: string[];
  categoryName?: string;
  seoDescription?: string;
};

// CMS is considered active only when a real project id is present. `client.ts`
// falls back to the literal 'placeholder' when the env var is unset.
const hasCms = projectId !== 'placeholder';

const nonEmpty = (arr: unknown): arr is unknown[] =>
  Array.isArray(arr) && arr.length > 0;

// ---- Normalizers (Sanity row -> static-compatible shape) ----

const toDoc = (e: Equipment): EquipmentDoc => ({ ...e, images: getImages(e) });

function fromSanityEquipment(r: Record<string, unknown>): EquipmentDoc {
  const image = (r.image as string) ?? '';
  const images = ((r.images as string[]) ?? []).filter(Boolean);
  return {
    slug: r.slug as string,
    name: r.name as string,
    categorySlug: (r.categorySlug as string) ?? '',
    categoryName: r.categoryName as string | undefined,
    brand: (r.brand as string) ?? '',
    power: (r.power as string) ?? '',
    image,
    images: images.length ? images : image ? [image] : [],
    featured: Boolean(r.featured),
    specs: ((r.specs as Equipment['specs']) ?? []).filter(Boolean),
    description: (r.description as string) ?? '',
    seoDescription: r.seoDescription as string | undefined,
  };
}

function fromSanityCategory(r: Record<string, unknown>): Category {
  return {
    slug: r.slug as string,
    name: r.name as string,
    // The static shape carries a `meta` line; the schema stores it as `description`.
    meta: (r.description as string) ?? '',
    image: (r.image as string) ?? '',
  };
}

function fromSanityProject(r: Record<string, unknown>): Project {
  return {
    slug: r.slug as string,
    title: r.name as string,
    location: (r.location as string) ?? '',
    image: (r.image as string) ?? '',
    desc: (r.description as string) ?? '',
    gallery: (r.gallery as string[]) ?? undefined,
    equipmentUsed: (r.equipmentUsed as Project['equipmentUsed']) ?? undefined,
  };
}

function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}

function fromSanityPost(r: Record<string, unknown>): Post {
  return {
    slug: r.slug as string,
    title: r.title as string,
    date: formatDate(r.publishedAt as string),
    excerpt: (r.excerpt as string) ?? '',
    image: (r.coverImage as string) ?? '',
    body: r.body as Post['body'],
  };
}

// Run a CMS fetch, map its rows, and fall back on any error or empty result.
async function load<T>(
  fetcher: () => Promise<unknown>,
  map: (rows: Record<string, unknown>[]) => T[],
  fallback: T[],
): Promise<T[]> {
  if (!hasCms) return fallback;
  try {
    const rows = await fetcher();
    return nonEmpty(rows) ? map(rows as Record<string, unknown>[]) : fallback;
  } catch {
    return fallback;
  }
}

// ---- Public API ----

export function loadCategories(): Promise<Category[]> {
  return load(getCategories, (rows) => rows.map(fromSanityCategory), staticCategories);
}

export function loadAllEquipment(): Promise<EquipmentDoc[]> {
  return load(
    getAllEquipment,
    (rows) => rows.map(fromSanityEquipment),
    staticEquipment.map(toDoc),
  );
}

export function loadFeaturedEquipment(): Promise<EquipmentDoc[]> {
  return load(
    getFeaturedEquipment,
    (rows) => rows.map(fromSanityEquipment),
    staticEquipment.filter((e) => e.featured).map(toDoc),
  );
}

export function loadEquipmentByCategory(categorySlug: string): Promise<EquipmentDoc[]> {
  return load(
    () => getEquipmentByCategory(categorySlug),
    (rows) => rows.map(fromSanityEquipment),
    staticEquipment.filter((e) => e.categorySlug === categorySlug).map(toDoc),
  );
}

export async function loadEquipmentBySlug(slug: string): Promise<EquipmentDoc | null> {
  if (hasCms) {
    try {
      const row = await getEquipmentBySlug(slug);
      if (row) return fromSanityEquipment(row as Record<string, unknown>);
    } catch {
      // fall through to static
    }
  }
  const s = staticEquipment.find((e) => e.slug === slug);
  return s ? toDoc(s) : null;
}

export function loadProjects(): Promise<Project[]> {
  return load(getProjects, (rows) => rows.map(fromSanityProject), staticProjects);
}

export async function loadProjectBySlug(slug: string): Promise<Project | null> {
  const all = await loadProjects();
  return all.find((p) => p.slug === slug) ?? null;
}

export function loadPosts(): Promise<Post[]> {
  return load(getPosts, (rows) => rows.map(fromSanityPost), staticPosts);
}

export async function loadPostBySlug(slug: string): Promise<Post | null> {
  const all = await loadPosts();
  return all.find((p) => p.slug === slug) ?? null;
}

// ---- Settings (singleton, CMS-editable site config) ----

// Cached so a build render pass fetches the singleton at most once even though
// the layout + pages each load it independently.
export const loadSettings = cache(async (): Promise<SiteSettings> => {
  const fallback = defaultSiteSettings;
  if (!hasCms) return fallback;
  try {
    const s = (await getSettings()) as Record<string, unknown> | null;
    if (!s) return fallback;
    const locations =
      (s.locations as SiteSettings['locations'] | undefined) ?? [];
    return {
      companyName: (s.companyName as string) || fallback.companyName,
      brand: (s.brand as string) || fallback.brand,
      hotline: (s.hotline as string) || fallback.hotline,
      email: (s.email as string) || fallback.email,
      zaloUrl: (s.zaloUrl as string) || fallback.zaloUrl,
      locations: locations.length ? locations : fallback.locations,
    };
  } catch {
    return fallback;
  }
});
