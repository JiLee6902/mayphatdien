'use client';

import { useMemo, useRef, useState } from 'react';
import type { Equipment } from '@/config/equipment';
import { EquipmentCard } from '@/components/EquipmentCard';

const PAGE_SIZE = 20; // multiple of both 4- and 5-col grids so rows fill evenly

function distinct(values: string[]): string[] {
  return Array.from(new Set(values));
}

/** Page numbers to render, with gaps ("…") collapsed for long ranges. */
function pageList(current: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const out: (number | '…')[] = [1];
  const lo = Math.max(2, current - 1);
  const hi = Math.min(total - 1, current + 1);
  if (lo > 2) out.push('…');
  for (let i = lo; i <= hi; i++) out.push(i);
  if (hi < total - 1) out.push('…');
  out.push(total);
  return out;
}

/** Sort power labels numerically by their leading number ("75 kVA" < "550 kVA"). */
function byLeadingNumber(a: string, b: string): number {
  return (parseFloat(a) || 0) - (parseFloat(b) || 0);
}

function Select({
  label,
  value,
  onChange,
  options,
  allLabel,
}: {
  label: string;
  value: string | null;
  onChange: (value: string | null) => void;
  options: { value: string; label: string }[];
  allLabel: string;
}) {
  return (
    <label className="block flex-1 sm:max-w-[240px]">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.18em] text-paper-mute">
        {label}
      </span>
      <div className="relative">
        <select
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value || null)}
          className="w-full cursor-pointer appearance-none rounded-lg border border-edge bg-graphite-3 py-3 pl-4 pr-10 text-sm font-semibold text-paper outline-none transition-colors hover:border-edge-strong focus:border-signal"
        >
          <option value="">{allLabel}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-paper-mute"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </label>
  );
}

export function CategoryFilter({
  items,
  hotline,
  categories,
}: {
  items: Equipment[];
  hotline?: string;
  /** When provided, renders a leading category dropdown. Omit inside a
   *  single-category page (brand/power still work). */
  categories?: { slug: string; name: string }[];
}) {
  const [category, setCategory] = useState<string | null>(null);
  const [brand, setBrand] = useState<string | null>(null);
  const [power, setPower] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  // Category narrows the pool first; brand/power options cascade from it.
  const pool = useMemo(
    () => (category === null ? items : items.filter((i) => i.categorySlug === category)),
    [items, category],
  );
  const brandOptions = useMemo(
    () => distinct(pool.map((i) => i.brand)).sort().map((b) => ({ value: b, label: b })),
    [pool],
  );
  const powerOptions = useMemo(
    () =>
      distinct(pool.map((i) => i.power))
        .sort(byLeadingNumber)
        .map((p) => ({ value: p, label: p })),
    [pool],
  );

  const filtered = useMemo(
    () =>
      pool.filter(
        (i) =>
          (brand === null || i.brand === brand) &&
          (power === null || i.power === power),
      ),
    [pool, brand, power],
  );

  // Any filter change returns to page 1 so results never land on an empty page.
  const reset = () => {
    setCategory(null);
    setBrand(null);
    setPower(null);
    setPage(1);
  };
  const pickBrand = (v: string | null) => { setBrand(v); setPage(1); };
  const pickPower = (v: string | null) => { setPower(v); setPage(1); };

  // Switching category invalidates brand/power picks from the previous pool.
  const pickCategory = (slug: string | null) => {
    setCategory(slug);
    setBrand(null);
    setPower(null);
    setPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  const goTo = (p: number) => {
    setPage(p);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div ref={topRef} className="scroll-mt-28">
      {/* Filter toolbar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
          {categories && categories.length > 0 && (
            <Select
              label="Danh mục"
              value={category}
              onChange={pickCategory}
              allLabel="Tất cả danh mục"
              options={categories.map((c) => ({ value: c.slug, label: c.name }))}
            />
          )}
          <Select
            label="Thương hiệu"
            value={brand}
            onChange={pickBrand}
            allLabel="Tất cả thương hiệu"
            options={brandOptions}
          />
          <Select
            label="Công suất"
            value={power}
            onChange={pickPower}
            allLabel="Tất cả công suất"
            options={powerOptions}
          />
      </div>

      {filtered.length > 0 ? (
        <>
          <p className="mt-6 text-sm text-paper-dim">
            Hiển thị <span className="font-bold text-paper">{start + 1}–{start + pageItems.length}</span>{' '}
            trong <span className="font-bold text-paper">{filtered.length}</span> thiết bị
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {pageItems.map((item) => (
              <EquipmentCard key={item.slug} item={item} hotline={hotline} />
            ))}
          </div>

          {totalPages > 1 && (
            <nav aria-label="Phân trang" className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => goTo(current - 1)}
                disabled={current === 1}
                className="inline-flex h-10 items-center gap-1 rounded-lg border border-edge px-4 text-sm font-bold text-paper transition-colors hover:border-signal hover:text-signal disabled:pointer-events-none disabled:opacity-40"
              >
                ← Trước
              </button>
              {pageList(current, totalPages).map((p, i) =>
                p === '…' ? (
                  <span key={`gap-${i}`} className="px-2 text-paper-mute">…</span>
                ) : (
                  <button
                    key={p}
                    type="button"
                    onClick={() => goTo(p)}
                    aria-current={p === current ? 'page' : undefined}
                    className={
                      p === current
                        ? 'inline-flex h-10 w-10 items-center justify-center rounded-lg bg-signal text-sm font-bold text-white'
                        : 'inline-flex h-10 w-10 items-center justify-center rounded-lg border border-edge text-sm font-bold text-paper transition-colors hover:border-signal hover:text-signal'
                    }
                  >
                    {p}
                  </button>
                ),
              )}
              <button
                type="button"
                onClick={() => goTo(current + 1)}
                disabled={current === totalPages}
                className="inline-flex h-10 items-center gap-1 rounded-lg border border-edge px-4 text-sm font-bold text-paper transition-colors hover:border-signal hover:text-signal disabled:pointer-events-none disabled:opacity-40"
              >
                Sau →
              </button>
            </nav>
          )}
        </>
      ) : (
        <div className="surface mt-8 rounded-lg p-12 text-center">
          <p className="text-lg font-bold text-paper">Không có thiết bị phù hợp</p>
          <p className="mt-2 text-sm text-paper-dim">
            Thử điều chỉnh bộ lọc hoặc xóa để xem toàn bộ thiết bị.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex items-center rounded-lg bg-signal px-6 py-3 font-bold text-white transition hover:bg-signal-dark"
          >
            Xóa bộ lọc
          </button>
        </div>
      )}
    </div>
  );
}
