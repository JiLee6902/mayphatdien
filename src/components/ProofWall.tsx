'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Img } from '@/components/ui/Img';
import { projectHref } from '@/config/projects';
import { gallery, galleryCategories, type GalleryShot, type GalleryCategory } from '@/config/gallery';

function HardBadge() {
  return (
    <span className="absolute left-1.5 top-1.5 z-10 inline-flex items-center gap-1 rounded bg-signal px-1.5 py-0.5 text-[10px] font-bold text-white">
      <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg>
      Khó
    </span>
  );
}

function Shot({ s }: { s: GalleryShot }) {
  const inner = (
    <figure className="group relative block h-full overflow-hidden rounded-md bg-ink">
      {s.hard && <HardBadge />}
      <Img src={s.src} alt={s.caption} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
      {/* caption bar — thin, directly under the image (dense, readable) */}
      <figcaption className="line-clamp-2 bg-ink px-2 py-1.5 text-[11px] font-medium leading-snug text-white/90">
        {s.caption}
      </figcaption>
    </figure>
  );
  return s.projectSlug ? (
    <Link href={projectHref(s.projectSlug)} aria-label={s.caption} className="block h-full">{inner}</Link>
  ) : (
    inner
  );
}

export function ProofWall({
  shots,
  showFilter = true,
  limit,
}: {
  shots?: GalleryShot[];
  showFilter?: boolean;
  limit?: number;
}) {
  const base = shots ?? gallery;
  const [active, setActive] = useState<GalleryCategory | 'all'>('all');

  const items = useMemo(() => {
    const filtered = active === 'all' ? base : base.filter((s) => s.category === active);
    // hard projects first
    const sorted = [...filtered].sort((a, b) => Number(!!b.hard) - Number(!!a.hard));
    return limit ? sorted.slice(0, limit) : sorted;
  }, [base, active, limit]);

  return (
    <div>
      {showFilter && (
        <div className="mb-6 flex flex-wrap gap-2">
          {galleryCategories.map((c) => {
            const on = active === c.slug;
            return (
              <button
                key={c.slug}
                type="button"
                onClick={() => setActive(c.slug)}
                className={
                  on
                    ? 'rounded-full bg-signal px-4 py-2 text-[13px] font-bold text-white'
                    : 'rounded-full border border-edge bg-graphite px-4 py-2 text-[13px] font-bold text-paper transition-colors hover:border-signal hover:text-signal'
                }
              >
                {c.label}
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {items.map((s) => (
          <Shot key={s.src} s={s} />
        ))}
      </div>
    </div>
  );
}
