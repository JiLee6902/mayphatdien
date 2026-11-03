import type { ReactNode } from 'react';
import { Img } from '@/components/ui/Img';
import { servedProjects, servedCount } from '@/config/projects';

/** Per-sector icon — keyed by the sector label in config. */
const sectorIcon: Record<string, ReactNode> = {
  'Dầu khí & ngoài khơi': (
    <>
      <path d="M2 21h20" /><path d="M5 21l2-10h10l2 10" /><path d="M12 11V3" /><path d="M8 6h8" />
    </>
  ),
  'Lọc hóa dầu & năng lượng': (
    <>
      <path d="M2 21h20" /><path d="M4 21V11l5 3V11l5 3V7l6 4v10" /><path d="M8 7V4" />
    </>
  ),
  'Hạ tầng & đô thị': (
    <>
      <path d="M3 21h18" /><path d="M5 21V7l6-3v17" /><path d="M15 21V11l-4-2" /><path d="M19 21v-8l-4-2" />
    </>
  ),
};

const PinIcon = (
  <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-none" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

/** Breadth-of-experience roster — named công trình (incl. offshore &
 *  international) that PMC has supplied, grouped by sector. Shared by the
 *  homepage and the Dự án page so khách thấy ngay bề dày kinh nghiệm. */
export function ServedWorks({
  className = 'border-y border-edge bg-graphite',
}: {
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow text-signal-dark">Bề dày kinh nghiệm</p>
            <h2 className="mt-3 font-display text-[26px] font-extrabold leading-tight tracking-tight text-paper md:text-[34px]">
              Những công trình PMC đã phục vụ
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-paper-dim">
              Ngoài các dự án có hình ảnh, PMC còn cấp thiết bị cho nhiều công trình dầu khí ngoài
              khơi, lọc hóa dầu và hạ tầng trọng điểm — trong nước và quốc tế.
            </p>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-[40px] font-extrabold leading-none tracking-tight text-signal md:text-[52px]">{servedCount}+</span>
            <span className="text-[13px] font-semibold uppercase tracking-wide text-paper-mute">công trình<br />tiêu biểu khác</span>
          </div>
        </div>

        <div className="mt-10 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servedProjects.map((group) => (
            <div key={group.sector} className="surface rounded-xl p-6">
              {/* Sector header */}
              <div className="flex items-center gap-3 border-b border-edge pb-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-signal/10 text-signal-dark">
                  <svg aria-hidden viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    {sectorIcon[group.sector]}
                  </svg>
                </span>
                <div>
                  <h3 className="font-display text-[15px] font-extrabold uppercase tracking-wide text-paper">{group.sector}</h3>
                  <p className="text-[12px] font-semibold text-paper-mute">{group.items.length} công trình</p>
                </div>
              </div>

              {/* Items */}
              <ul className="divide-y divide-edge">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-3 py-4">
                    {item.image && (
                      <Img src={item.image} alt={item.name} className="h-12 w-14 flex-none rounded-md object-cover" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-[15px] font-bold leading-snug tracking-tight text-paper">{item.name}</p>
                      <p className="mt-1 flex items-center gap-1 text-[12.5px] text-paper-mute">
                        <span className="text-signal-dark">{PinIcon}</span>
                        {item.location}
                      </p>
                      <span className="mt-2 inline-block rounded bg-signal/10 px-2 py-0.5 text-[11.5px] font-semibold text-signal-dark">
                        {item.equipment}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
