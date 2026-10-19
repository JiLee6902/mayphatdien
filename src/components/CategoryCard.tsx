import Link from 'next/link';
import type { Category } from '@/config/categories';
import { categoryHref } from '@/config/categories';

export function CategoryCard({
  category,
  index = 0,
}: {
  category: Category;
  index?: number;
}) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <Link
      href={categoryHref(category.slug)}
      className="group relative flex h-[340px] overflow-hidden rounded-lg shadow-[0_14px_34px_-20px_rgba(22,24,28,0.35)] ring-1 ring-edge transition-all duration-300 hover:shadow-[0_26px_50px_-22px_rgba(22,24,28,0.45)]"
    >
      <picture>
        <source srcSet={category.image.replace(/\.jpe?g$/i, '.webp')} type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={category.image}
          alt={`Cho thuê ${category.name}`}
          className="photo-grade absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={index === 0 ? 'high' : 'auto'}
        />
      </picture>

      {/* Dark gradient so the label is always legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5" />

      {/* Index — top */}
      <span className="absolute left-5 top-4 font-display text-[22px] font-extrabold leading-none text-white/90">{num}</span>

      {/* Title + arrow — bottom */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <h3 className="font-display text-[20px] font-extrabold uppercase leading-tight tracking-tight text-white">
          {category.name}
        </h3>
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-signal text-white transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}
