'use client';

import { useState } from 'react';
import { Img } from './ui/Img';

export function EquipmentGallery({
  images,
  name,
  featured,
}: {
  images: string[];
  name: string;
  featured?: boolean;
}) {
  const [active, setActive] = useState(0);
  const count = images.length;
  const main = images[active] ?? images[0];
  const go = (dir: number) => setActive((i) => (i + dir + count) % count);

  return (
    <div>
      <div className="surface group relative overflow-hidden rounded-lg">
        <span
          className={`absolute left-4 top-4 z-10 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wide ${
            featured ? 'bg-signal text-white' : 'bg-ok text-white'
          }`}
        >
          {featured ? '★ Nổi bật' : '● Còn hàng'}
        </span>
        <div className="aspect-[4/3] w-full overflow-hidden bg-graphite">
          <Img
            key={main}
            src={main}
            alt={`Cho thuê ${name}`}
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover transition duration-300"
          />
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Ảnh trước"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-white transition hover:bg-graphite hover:text-signal focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
            >
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Ảnh sau"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-white transition hover:bg-graphite hover:text-signal focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
            >
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <span className="absolute bottom-3 right-3 z-10 rounded-lg bg-ink/80 px-2.5 py-1 text-xs font-semibold text-white">
              {active + 1}/{count}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ảnh ${i + 1}`}
              aria-current={i === active}
              className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 bg-graphite transition ${
                i === active ? 'border-signal' : 'border-edge hover:border-edge-strong'
              }`}
            >
              <Img src={img} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
