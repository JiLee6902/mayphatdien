import { Img } from '@/components/ui/Img';
import { servedProjects } from '@/config/projects';

/** Breadth-of-experience roster — named công trình (incl. offshore &
 *  international) that PMC has supplied, grouped by sector. Shared by the
 *  homepage and the Dự án page so khách thấy ngay bề dày kinh nghiệm. */
export function ServedWorks({
  className = 'border-t border-edge bg-graphite-2',
}: {
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20 lg:px-10">
        <p className="eyebrow text-signal-dark">Bề dày kinh nghiệm</p>
        <h2 className="mt-3 max-w-3xl font-display text-[26px] font-extrabold leading-tight tracking-tight text-paper md:text-[34px]">
          Những công trình PMC đã phục vụ
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-paper-dim">
          Ngoài các dự án có hình ảnh, PMC còn cấp thiết bị cho nhiều công trình dầu khí ngoài
          khơi, lọc hóa dầu và hạ tầng trọng điểm — trong nước và quốc tế.
        </p>

        <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {servedProjects.map((group) => (
            <div key={group.sector}>
              <h3 className="flex items-center gap-2 font-display text-[15px] font-extrabold uppercase tracking-wide text-signal-dark">
                <span className="h-px w-5 bg-signal" />
                {group.sector}
              </h3>
              <ul className="mt-5 space-y-5">
                {group.items.map((item) => (
                  <li key={item.name} className="flex gap-3 border-l-2 border-edge pl-4">
                    {item.image && (
                      <Img
                        src={item.image}
                        alt={item.name}
                        className="h-14 w-16 flex-none rounded-md object-cover"
                      />
                    )}
                    <div>
                      <p className="font-display text-[15.5px] font-bold tracking-tight text-paper">{item.name}</p>
                      <p className="mt-0.5 text-[13px] text-paper-mute">{item.location}</p>
                      <p className="mt-1 text-[13.5px] leading-snug text-paper-dim">{item.equipment}</p>
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
