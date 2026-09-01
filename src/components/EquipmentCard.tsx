import Link from 'next/link';
import type { Equipment } from '@/config/equipment';
import { equipmentHref } from '@/config/equipment';
import { site, telHref } from '@/config/site';

function PhoneIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export function EquipmentCard({
  item,
  hotline = site.hotline,
}: {
  item: Equipment;
  hotline?: string;
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-[20px] border border-line/80 bg-white shadow-[0_1px_2px_rgba(16,42,67,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-accent/25 hover:shadow-[0_30px_60px_-24px_rgba(14,58,102,0.32)]">
      <Link href={equipmentHref(item.slug)} className="relative block aspect-[4/3] overflow-hidden bg-[#eef1ee]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={`Cho thuê ${item.name}`}
          className="h-full w-full object-cover transition duration-[600ms] ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        {/* a single small badge only — image stays clear */}
        {item.featured && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[11px] font-bold text-white shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white" /> Nổi bật
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
            {item.brand}
          </p>
          <span className="inline-flex items-center rounded-md bg-accent/10 px-2.5 py-1 text-[12px] font-bold text-accent">
            {item.power}
          </span>
        </div>
        <h3 className="mt-2.5 min-h-[3.25rem] text-[18px] font-bold leading-snug text-navy transition-colors group-hover:text-accent">
          <Link href={equipmentHref(item.slug)}>{item.name}</Link>
        </h3>

        <div className="mt-auto flex items-end justify-between border-t border-line pt-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted">Giá thuê</div>
            <div className="text-[15px] font-extrabold text-navy">Liên hệ</div>
          </div>
          <a
            href={telHref(hotline)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(226,129,28,0.7)] transition hover:bg-accent-dark"
          >
            <PhoneIcon /> Gọi ngay
          </a>
        </div>
      </div>
    </div>
  );
}
