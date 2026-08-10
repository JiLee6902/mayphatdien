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
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(18,49,79,0.25)]"
    >
      <div className="relative h-[170px] overflow-hidden bg-navy-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={category.image}
          alt={`Cho thuê ${category.name}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading={index < 2 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'auto'}
        />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/85 to-transparent px-4 pb-2.5 pt-5 text-[15px] font-bold text-white">
          {category.name}
        </span>
      </div>
      <div className="p-5">
        <p className="min-h-[38px] text-[13.5px] text-muted">{category.meta}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 font-bold text-accent">
          Xem thiết bị
          <span aria-hidden className="transition group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
