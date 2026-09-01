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
      className="group flex flex-col overflow-hidden rounded-[20px] border border-line/80 bg-white shadow-[0_1px_2px_rgba(16,42,67,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-accent/25 hover:shadow-[0_30px_60px_-24px_rgba(14,58,102,0.32)]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-[#eef1ee]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={category.image}
          alt={`Cho thuê ${category.name}`}
          className="h-full w-full object-cover transition duration-[600ms] ease-out group-hover:scale-[1.04]"
          loading={index < 2 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'auto'}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-h-[2.75rem] text-[17px] font-bold leading-tight text-navy transition-colors group-hover:text-accent">
            {category.name}
          </h3>
          <span
            aria-hidden
            className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <p className="mt-auto text-[13.5px] leading-relaxed text-muted">{category.meta}</p>
      </div>
    </Link>
  );
}
