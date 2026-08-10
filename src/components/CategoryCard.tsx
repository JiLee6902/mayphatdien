import Link from 'next/link';
import type { Category } from '@/config/categories';
import { categoryHref } from '@/config/categories';

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={categoryHref(category.slug)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-[170px] overflow-hidden bg-navy-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={category.image}
          alt={`Cho thuê ${category.name}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/85 to-transparent px-4 pb-2.5 pt-5 text-[15px] font-bold text-white">
          {category.name}
        </span>
      </div>
      <div className="p-5">
        <p className="min-h-[38px] text-[13.5px] text-muted">{category.meta}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 font-bold text-accent">
          Xem thiết bị →
        </span>
      </div>
    </Link>
  );
}
