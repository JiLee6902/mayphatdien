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
    <div className="group surface surface-hover flex h-full flex-col overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1">

      <Link href={equipmentHref(item.slug)} className="relative block aspect-[4/3] overflow-hidden">
        <Img
          src={item.image}
          alt={`Cho thuê ${item.name}`}
          className="photo-grade h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        {/* Amber power tab */}
        <span className="absolute left-0 top-4 bg-signal px-3.5 py-1.5 font-display text-[15px] font-extrabold text-ink">
          {item.power}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[17px] font-extrabold uppercase leading-snug tracking-tight text-paper">
          <Link href={equipmentHref(item.slug)} className="transition-colors hover:text-signal-dark">{item.name}</Link>
        </h3>

        {item.specs.length > 0 && (
          <dl className="mt-4 border-t border-edge text-[13px]">
            {item.specs.slice(0, 3).map((s) => (
              <div key={s.label} className="flex items-center justify-between gap-3 border-b border-edge py-2">
                <dt className="text-paper-dim">{s.label}</dt>
                <dd className="font-semibold text-paper">{s.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <a
          href={telHref(hotline)}
          className="mt-auto flex items-center justify-center gap-1.5 rounded-lg bg-ink py-3 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-signal hover:text-ink"
        >
          Gọi báo giá →
        </a>
      </div>
    </div>
  );
}
