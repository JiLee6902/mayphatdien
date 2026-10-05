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
  return (
    <Link
      href={categoryHref(category.slug)}
      className="group relative flex h-[340px] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/[0.06] transition-all duration-300 hover:shadow-2xl hover:shadow-navy/20 hover:ring-accent/30"
    >
      <picture>
        <source srcSet={category.image.replace(/\.jpe?g$/i, '.webp')} type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={category.image}
          alt={`Cho thuê ${category.name}`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={index === 0 ? 'high' : 'auto'}
        />
      </picture>

      {/* Clean bottom scrim — top of image stays crisp */}
      <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

      {/* Count badge — top */}
      {category.count && (
        <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur-md ring-1 ring-white/20">
          {category.count}
        </span>
      )}

      {/* Content — bottom */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div className="min-w-0">
          <h3 className="text-[18px] font-extrabold leading-snug text-white">{category.name}</h3>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/70 line-clamp-2">{category.meta}</p>
        </div>
        {/* Arrow circle */}
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md transition-all duration-300 group-hover:bg-accent group-hover:text-navy-dark group-hover:ring-accent">
          <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
