'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Img } from '@/components/ui/Img';
import { projectHref } from '@/config/projects';
import { gallery, galleryCategories, type GalleryShot, type GalleryCategory } from '@/config/gallery';

function Shot({ s, feature = false }: { s: GalleryShot; feature?: boolean }) {
  const linked = !!s.projectSlug;
  const inner = (
    <figure className="group relative block h-full overflow-hidden rounded-lg bg-ink">
      <Img
        src={s.src}
        alt={s.caption}
        className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
      />

      {/* cinematic gradient — caption always legible, deepens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

      {/* caption + click affordance */}
      <figcaption
        className={
          'absolute inset-x-0 bottom-0 px-3 pb-2.5 pt-10 font-semibold leading-snug text-white ' +
          (feature ? 'text-[15px] md:text-[18px]' : 'text-[12px]')
        }
      >
        <span className="line-clamp-2 drop-shadow">{s.caption}</span>

        {linked && (
          <span
            className={
              'mt-2 inline-flex items-center gap-1.5 font-bold uppercase tracking-wide ' +
              'opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 ' +
              (feature ? 'text-[13px]' : 'text-[10.5px]')
            }
          >
            <span className="rounded-full bg-signal px-2.5 py-1 text-white shadow-md shadow-signal/30">
              Xem công trình →
            </span>
          </span>
        )}
      </figcaption>
    </figure>
  );
  return linked ? (
    <Link href={projectHref(s.projectSlug!)} aria-label={`Xem công trình: ${s.caption}`} className="block h-full">
      {inner}
    </Link>
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
    // hard projects first — the most impressive works lead the wall
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

      {/* Cinematic mosaic — the lead shot spans 2×2 for scale; the rest form a
          dense brick wall. Fixed row heights keep it tidy regardless of count. */}
      <div className="grid auto-rows-[200px] grid-flow-dense grid-cols-2 gap-2.5 sm:auto-rows-[230px] sm:grid-cols-3 lg:auto-rows-[260px] lg:grid-cols-3 xl:auto-rows-[280px] xl:grid-cols-4">
        {items.map((s, i) => {
          // Feature only from sm up — on mobile the grid stays uniform so captions
          // all sit at the same height (no more "text floating high/low").
          const feature = i === 0;
          return (
            <div key={s.src} className={feature ? 'sm:col-span-2 sm:row-span-2' : ''}>
              <Shot s={s} feature={feature} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
