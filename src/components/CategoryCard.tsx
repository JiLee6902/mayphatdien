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
      className="group relative flex h-[400px] overflow-hidden rounded-lg shadow-[0_16px_38px_-22px_rgba(22,24,28,0.45)] ring-1 ring-edge transition-all duration-300 hover:shadow-[0_28px_56px_-24px_rgba(210,5,30,0.4)] hover:ring-signal"
    >
      <picture>
        <source srcSet={category.image.replace(/\.jpe?g$/i, '.webp')} type="image/webp" />
        <img
          src={category.image}
          alt={`Cho thuê ${category.name}`}
          className="photo-grade absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={index === 0 ? 'high' : 'auto'}
        />
      </picture>

      {/* gradient + brand wash */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5" />

      {/* Index — top, in a red tab */}
      <span className="absolute left-0 top-5 bg-signal px-3 py-1.5 font-display text-[18px] font-extrabold leading-none text-white">
        {num}
      </span>

      {/* Content — bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-[26px] font-extrabold leading-[0.98] tracking-tight text-white">
          {category.name}
        </h3>
        {/* red underline grows on hover */}
        <span className="mt-3 block h-[3px] w-10 bg-signal transition-all duration-300 group-hover:w-20" />
        <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-white">
          Xem chi tiết
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
