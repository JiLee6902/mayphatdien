import Link from 'next/link';
import { Img } from '@/components/ui/Img';
import { Reveal } from '@/components/motion/Reveal';
import type { Project } from '@/config/projects';
import { projectHref } from '@/config/projects';

function catLabel(slug: string): string {
  if (slug.startsWith('may-nen-khi')) return 'Máy nén khí';
  if (slug.startsWith('may-phun')) return 'Thiết bị UHP';
  if (slug.startsWith('may-han') || slug.startsWith('may-phat-han')) return 'Máy hàn';
  return 'Máy phát điện';
}

/** Magazine-cover spotlight for a single flagship project — large image +
 *  editorial story + quick facts. A focal point, not a card grid. */
export function ProjectSpotlight({ project }: { project: Project }) {
  const equip = Array.from(new Set((project.equipmentUsed ?? []).map((e) => catLabel(e.slug))));
  const facts: { label: string; value: string }[] = [
    ...(project.location ? [{ label: 'Địa điểm', value: project.location }] : []),
    ...(equip.length ? [{ label: 'Thiết bị', value: equip.join(' · ') }] : []),
    ...(project.gallery?.length ? [{ label: 'Ảnh thực tế', value: `${project.gallery.length + 1} ảnh` }] : []),
  ];

  return (
    <div className="grid overflow-hidden rounded-[22px] border border-edge bg-white lg:grid-cols-2">
      {/* Image */}
      <Link href={projectHref(project.slug)} className="group relative block min-h-[280px] overflow-hidden lg:min-h-[460px]">
        <Img
          src={project.image}
          alt={project.title}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="label absolute left-5 top-5 inline-flex items-center rounded-full bg-signal px-3.5 py-1.5 text-white shadow-md shadow-signal/30">
          Dự án nổi bật
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-col justify-center p-7 md:p-12">
        <Reveal>
          {project.location && (
            <p className="inline-flex items-center gap-2 text-[13px] font-bold text-signal-dark">
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              {project.location}
            </p>
          )}
          <h3 className="mt-3 font-display text-[26px] font-extrabold leading-tight tracking-tight text-paper md:text-[36px]">
            <Link href={projectHref(project.slug)} className="transition-colors hover:text-signal-dark">{project.title}</Link>
          </h3>
          <p className="mt-4 text-[15.5px] leading-relaxed text-paper-dim line-clamp-4">{project.desc}</p>

          {facts.length > 0 && (
            <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-edge pt-6">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[11px] font-bold uppercase tracking-wide text-paper-mute">{f.label}</dt>
                  <dd className="mt-1 text-[13.5px] font-bold leading-snug text-paper">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <Link
            href={projectHref(project.slug)}
            className="group mt-8 inline-flex items-center gap-2 self-start rounded-full bg-signal px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-signal-dark"
          >
            Xem chi tiết dự án
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
