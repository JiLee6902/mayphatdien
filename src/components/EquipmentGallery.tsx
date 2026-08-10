'use client';

import { useState } from 'react';

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
      <div className="group relative overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_50px_-20px_rgba(14,58,102,0.28)]">
        <span
          className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow ${
            featured ? 'bg-accent' : 'bg-ok'
          }`}
        >
          {featured ? '★ Nổi bật' : '● Còn hàng'}
        </span>
        <div className="aspect-[4/3] w-full overflow-hidden bg-navy-dark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={main}
            src={main}
            alt={`Cho thuê ${name}`}
            className="h-full w-full object-cover transition duration-300"
          />
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Ảnh trước"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-md transition hover:bg-white hover:text-accent focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
            >
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Ảnh sau"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-md transition hover:bg-white hover:text-accent focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
            >
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <span className="absolute bottom-3 right-3 z-10 rounded-full bg-navy/80 px-2.5 py-1 text-xs font-semibold text-white">
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
              className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 bg-navy-dark transition ${
                i === active ? 'border-accent' : 'border-line hover:border-steel'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
