'use client';

import { useMemo, useState } from 'react';
import type { Equipment } from '@/config/equipment';
import { EquipmentCard } from '@/components/EquipmentCard';

const chipBase =
  'inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors';
const chipActive = 'border-accent bg-accent text-white';
const chipIdle = 'border-line bg-white text-navy hover:border-steel';

function distinct(values: string[]): string[] {
  return Array.from(new Set(values));
}

export function CategoryFilter({ items }: { items: Equipment[] }) {
  const [brand, setBrand] = useState<string | null>(null);
  const [power, setPower] = useState<string | null>(null);

  const brands = useMemo(() => distinct(items.map((i) => i.brand)), [items]);
  const powers = useMemo(() => distinct(items.map((i) => i.power)), [items]);

  const filtered = useMemo(
    () =>
      items.filter(
        (i) =>
          (brand === null || i.brand === brand) &&
          (power === null || i.power === power),
      ),
    [items, brand, power],
  );

  const reset = () => {
    setBrand(null);
    setPower(null);
  };

  return (
    <div>
      <div className="flex flex-col gap-6">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-muted">
            Thương hiệu
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={reset}
              className={`${chipBase} ${brand === null && power === null ? chipActive : chipIdle}`}
            >
              Tất cả
            </button>
            {brands.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBrand((cur) => (cur === b ? null : b))}
                className={`${chipBase} ${brand === b ? chipActive : chipIdle}`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-muted">
            Công suất
          </p>
          <div className="flex flex-wrap gap-2">
            {powers.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPower((cur) => (cur === p ? null : p))}
                className={`${chipBase} ${power === p ? chipActive : chipIdle}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm font-semibold text-muted">
        {filtered.length} thiết bị
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <EquipmentCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-line bg-white p-10 text-center">
          <p className="text-navy">
            Không có thiết bị phù hợp với bộ lọc đã chọn.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 font-bold text-accent hover:underline"
          >
            Xóa bộ lọc
          </button>
        </div>
      )}
    </div>
  );
}
