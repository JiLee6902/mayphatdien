import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { categoryHref } from '@/config/categories';
import { equipmentHref } from '@/config/equipment';
import { postHref } from '@/config/posts';
import { projectHref } from '@/config/projects';
import {
  loadCategories,
  loadAllEquipment,
  loadPosts,
  loadProjects,
} from '@/lib/content';

// Required for metadata routes under `output: 'export'`.
export const dynamic = 'force-static';

// Emitted as a static /sitemap.xml at build time (works with output: 'export').
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const [categories, equipment, posts, projects] = await Promise.all([
    loadCategories(),
    loadAllEquipment(),
    loadPosts(),
    loadProjects(),
  ]);

  const entry = (
    path: string,
    priority: number,
    changeFrequency: 'weekly' | 'monthly',
  ): MetadataRoute.Sitemap[number] => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry('/', 1, 'weekly'),
    entry('/thiet-bi/', 0.9, 'weekly'),
    ...categories.map((c) => entry(categoryHref(c.slug), 0.8, 'monthly')),
    ...equipment.map((e) => entry(equipmentHref(e.slug), 0.7, 'monthly')),
    entry('/du-an/', 0.6, 'monthly'),
    ...projects.map((p) => entry(projectHref(p.slug), 0.5, 'monthly')),
    entry('/tin-tuc/', 0.6, 'weekly'),
    ...posts.map((p) => entry(postHref(p.slug), 0.5, 'monthly')),
    entry('/gioi-thieu/', 0.5, 'monthly'),
    entry('/lien-he/', 0.5, 'monthly'),
  ];
}
