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

export function EquipmentCard({ item }: { item: Equipment }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(14,58,102,0.25)]">
      <Link href={equipmentHref(item.slug)} className="relative block h-[210px] overflow-hidden bg-navy-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-ok shadow-sm">
          {item.featured ? '★ Nổi bật' : '● Còn hàng'}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link href={equipmentHref(item.slug)}>
          <h3 className="font-bold leading-snug text-navy hover:text-accent">{item.name}</h3>
        </Link>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-md border border-line bg-bg px-2.5 py-1 text-xs font-semibold text-ink/70">{item.power}</span>
          <span className="rounded-md border border-line bg-bg px-2.5 py-1 text-xs font-semibold text-ink/70">{item.brand}</span>
        </div>
        <p className="mt-3 text-sm text-muted">
          Giá thuê: <span className="font-bold text-navy">Liên hệ</span> · theo ngày / tháng
        </p>
        <Link href={equipmentHref(item.slug)} className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-steel hover:text-accent">
          Xem chi tiết &amp; thông số
          <span aria-hidden className="transition group-hover:translate-x-1">→</span>
        </Link>
        <div className="mt-4 flex gap-2.5">
          <a href={telHref(site.hotline)} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent py-2.5 text-sm font-bold text-white hover:bg-accent-dark">
            <PhoneIcon /> Gọi thuê
          </a>
          <a href={site.zaloUrl} className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-line bg-bg py-2.5 text-sm font-bold text-navy hover:border-steel">
            Zalo
          </a>
        </div>
      </div>
    </div>
  );
}
