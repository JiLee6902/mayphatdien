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
  const main = images[active] ?? images[0];

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_50px_-20px_rgba(14,58,102,0.28)]">
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
