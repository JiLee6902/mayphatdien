'use client';

import { useMemo, useState } from 'react';
import type { Equipment } from '@/config/equipment';
import { EquipmentCard } from '@/components/EquipmentCard';

function distinct(values: string[]): string[] {
  return Array.from(new Set(values));
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
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-[0.15em] text-muted">
        {label}
      </span>
      <div className="relative">
        <select
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value || null)}
          className="w-full cursor-pointer appearance-none rounded-xl border border-line bg-white py-3 pl-4 pr-10 text-sm font-semibold text-navy shadow-sm outline-none transition-colors hover:border-steel focus:border-accent focus:ring-2 focus:ring-accent/20"
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
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
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

  const reset = () => {
    setCategory(null);
    setBrand(null);
    setPower(null);
  };

  // Switching category invalidates brand/power picks from the previous pool.
  const pickCategory = (slug: string | null) => {
    setCategory(slug);
    setBrand(null);
    setPower(null);
  };

  return (
    <div>
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
            onChange={setBrand}
            allLabel="Tất cả thương hiệu"
            options={brandOptions}
          />
          <Select
            label="Công suất"
            value={power}
            onChange={setPower}
            allLabel="Tất cả công suất"
            options={powerOptions}
          />
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <EquipmentCard key={item.slug} item={item} hotline={hotline} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-line bg-white p-12 text-center shadow-sm">
          <p className="text-lg font-bold text-navy">Không có thiết bị phù hợp</p>
          <p className="mt-2 text-sm text-muted">
            Thử điều chỉnh bộ lọc hoặc xóa để xem toàn bộ thiết bị.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex items-center rounded-xl bg-accent px-6 py-3 font-bold text-navy-dark shadow-sm transition hover:bg-accent-dark"
          >
            Xóa bộ lọc
          </button>
        </div>
      )}
    </div>
  );
}
