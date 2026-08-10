import { client } from './client';

// GROQ query strings + async fetch helpers.
// NOTE: none of these run at module top-level, so importing this file never
// triggers a network call at build/import time.

// ---- Categories ----
export const categoriesQuery = /* groq */ `
  *[_type == "category"] | order(order asc) {
    "slug": slug.current,
    name,
    description,
    seoTitle,
    seoDescription,
    order,
    "image": image.asset->url
  }
`;

export function getCategories() {
  return client.fetch(categoriesQuery);
}

// ---- Equipment ----
// Common projection matching how pages consume equipment.
const equipmentProjection = /* groq */ `
  "slug": slug.current,
  name,
  brand,
  power,
  specs[]{ label, value },
  description,
  seoDescription,
  featured,
  "categorySlug": category->slug.current,
  "categoryName": category->name,
  "image": images[0].asset->url,
  "images": images[].asset->url
`;

export const allEquipmentQuery = /* groq */ `
  *[_type == "equipment"] | order(name asc) {
    ${equipmentProjection}
  }
`;

export function getAllEquipment() {
  return client.fetch(allEquipmentQuery);
}

export const equipmentBySlugQuery = /* groq */ `
  *[_type == "equipment" && slug.current == $slug][0] {
    ${equipmentProjection}
  }
`;

export function getEquipmentBySlug(slug: string) {
  return client.fetch(equipmentBySlugQuery, { slug });
}

export const featuredEquipmentQuery = /* groq */ `
  *[_type == "equipment" && featured == true] | order(name asc) {
    ${equipmentProjection}
  }
`;

export function getFeaturedEquipment() {
  return client.fetch(featuredEquipmentQuery);
}

export const equipmentByCategoryQuery = /* groq */ `
  *[_type == "equipment" && category->slug.current == $categorySlug] | order(name asc) {
    ${equipmentProjection}
  }
`;

export function getEquipmentByCategory(categorySlug: string) {
  return client.fetch(equipmentByCategoryQuery, { categorySlug });
}

// ---- Projects ----
export const projectsQuery = /* groq */ `
  *[_type == "project"] | order(name asc) {
    "slug": slug.current,
    name,
    clientName,
    location,
    description,
    "image": image.asset->url,
    "equipmentUsed": equipmentUsed[]->{
      "slug": slug.current,
      name
    }
  }
`;

export function getProjects() {
  return client.fetch(projectsQuery);
}

// ---- Posts ----
export const postsQuery = /* groq */ `
  *[_type == "post"] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    excerpt,
    seoDescription,
    publishedAt,
    body,
    "coverImage": coverImage.asset->url
  }
`;

export function getPosts() {
  return client.fetch(postsQuery);
}

// ---- Settings (singleton) ----
export const settingsQuery = /* groq */ `
  *[_type == "settings"][0] {
    companyName,
    brand,
    hotline,
    email,
    zaloUrl,
    locations[]{ name, address, phone },
    heroStats[]{ value, label }
  }
`;

export function getSettings() {
  return client.fetch(settingsQuery);
}
