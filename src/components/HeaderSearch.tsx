'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { equipment, equipmentHref } from '@/config/equipment';

/**
 * Header quick-search with autocomplete over the static equipment list.
 * Enter jumps to the best match (or the catalog); clicking a row opens
 * the product page. Works under output: 'export' (fully client-side).
 */
export function HeaderSearch() {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return equipment
      .filter((e) => `${e.name} ${e.brand} ${e.power}`.toLowerCase().includes(s))
      .slice(0, 6);
  }, [q]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(results[0] ? equipmentHref(results[0].slug) : '/thiet-bi/');
    setOpen(false);
  };

  return (
    <form
      onSubmit={submit}
      role="search"
      className="relative ml-auto hidden lg:block"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <div className="flex items-center gap-2 rounded-lg border border-edge bg-graphite-3 px-3 py-2.5 transition-colors focus-within:border-signal focus-within:bg-white">
        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 text-paper-mute" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3-3" strokeLinecap="round" />
        </svg>
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="w-56 bg-transparent text-sm text-paper outline-none placeholder:text-paper-mute"
          placeholder="Tìm: 100kVA, cummins, máy hàn…"
          aria-label="Tìm thiết bị"
          autoComplete="off"
        />
      </div>

      {open && q.trim() && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-lg border border-edge bg-graphite-2 shadow-[0_20px_48px_-16px_rgba(0,0,0,0.6)]">
          {results.length > 0 ? (
            <ul className="max-h-[320px] overflow-auto py-1">
              {results.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={equipmentHref(e.slug)}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-graphite-3"
                  >
                    <span className="min-w-0 truncate font-semibold text-paper">{e.name}</span>
                    <span className="flex-none rounded-lg bg-graphite-3 px-2 py-0.5 font-mono text-[11px] font-bold text-signal">
                      {e.power}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-paper-dim">
              Không thấy thiết bị khớp — <Link href="/thiet-bi/" className="font-semibold text-signal" onClick={() => setOpen(false)}>xem tất cả</Link>
            </p>
          )}
        </div>
      )}
    </form>
  );
}
