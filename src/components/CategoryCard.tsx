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
      className="group surface flex h-full flex-col overflow-hidden rounded-2xl ring-1 ring-edge transition-all duration-300 hover:-translate-y-1 hover:ring-signal"
    >
      {/* Image — compact band so the content, not the raw photo, carries the card */}
      <div className="relative aspect-[16/10] overflow-hidden bg-graphite-3">
        <picture>
          <source srcSet={category.image.replace(/\.jpe?g$/i, '.webp')} type="image/webp" />
          <img
            src={category.image}
            alt={`Cho thuê ${category.name}`}
            className="photo-grade h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            loading={index < 2 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        </picture>
        {/* soft bottom fade so the photo meets the white body cleanly */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/35 to-transparent" />

        {/* Index — red pill */}
        <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-signal font-display text-[13px] font-extrabold leading-none text-white shadow-md shadow-signal/30">
          {num}
        </span>

        {/* Inventory badge */}
        {category.count && (
          <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-wide text-ink shadow-sm">
            {category.count}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[20px] font-extrabold leading-tight tracking-tight text-paper">
          {category.name}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-paper-mute">{category.meta}</p>

        {/* red underline grows on hover */}
        <span className="mt-4 block h-[3px] w-9 bg-signal transition-all duration-300 group-hover:w-16" />

        <span className="mt-auto pt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-signal-dark">
          Xem chi tiết
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
