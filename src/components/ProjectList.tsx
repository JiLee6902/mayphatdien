'use client';

import { useRef, useState } from 'react';
import type { Project } from '@/config/projects';
import { ProjectCard } from '@/components/ProjectCard';

const PAGE_SIZE = 16; // 4 rows of the 4-col grid — denser per page

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

export function ProjectList({ projects }: { projects: Project[] }) {
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * PAGE_SIZE;
  const pageItems = projects.slice(start, start + PAGE_SIZE);

  const goTo = (p: number) => {
    setPage(p);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div ref={topRef} className="scroll-mt-28">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pageItems.map((p) => (
          <ProjectCard key={p.slug} project={p} />
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
    </div>
  );
}
