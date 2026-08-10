import Link from 'next/link';
import type { Equipment } from '@/config/equipment';
import { equipmentHref } from '@/config/equipment';

export function EquipmentCard({ item }: { item: Equipment }) {
  return (
    <Link
      href={equipmentHref(item.slug)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(14,58,102,0.25)]"
    >
      <div className="relative h-[190px] overflow-hidden bg-navy-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={`Cho thuê ${item.name}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-navy/90 px-2.5 py-1 text-xs font-bold text-white">
          {item.power}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">
          {item.brand}
        </p>
        <h3 className="mt-2 text-[17px] font-bold leading-snug text-navy">
          {item.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-[13.5px] text-muted">
          {item.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-bold text-accent">
          Xem chi tiết
          <span aria-hidden className="transition group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
