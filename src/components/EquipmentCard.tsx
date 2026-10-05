import Link from 'next/link';
import type { Equipment } from '@/config/equipment';
import { equipmentHref } from '@/config/equipment';
import { site, telHref } from '@/config/site';
import { Img } from './ui/Img';

export function EquipmentCard({
  item,
  hotline = site.hotline,
}: {
  item: Equipment;
  hotline?: string;
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(20,36,59,0.22)] hover:ring-accent/30">

      <Link href={equipmentHref(item.slug)} className="relative block aspect-[4/3] overflow-hidden bg-slate-100">
        <Img
          src={item.image}
          alt={`Cho thuê ${item.name}`}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 via-transparent to-transparent" />
        <span className="absolute right-3 top-3 rounded-lg bg-accent px-2.5 py-1 text-[12px] font-extrabold text-navy-dark shadow-md shadow-accent/30">
          {item.power}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent-dark">{item.brand}</p>
        <h3 className="mt-2 text-[17px] font-extrabold leading-snug tracking-tight text-navy">
          <Link href={equipmentHref(item.slug)} className="transition-colors hover:text-accent-dark">{item.name}</Link>
        </h3>

        {item.specs.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[12.5px] text-muted">
            {item.specs.slice(0, 2).map((s) => (
              <span key={s.label} className="inline-flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-accent/60" />
                {s.value}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
          <a
            href={telHref(hotline)}
            className="group/btn flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy py-3 text-sm font-bold text-white transition-colors hover:bg-accent hover:text-navy-dark"
          >
            Gọi báo giá
            <span className="transition-transform duration-200 group-hover/btn:translate-x-0.5">→</span>
          </a>
          <Link
            href={equipmentHref(item.slug)}
            aria-label={`Xem chi tiết ${item.name}`}
            className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-xl border border-line text-navy transition-colors hover:border-accent/50 hover:bg-accent/5 hover:text-accent-dark"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
