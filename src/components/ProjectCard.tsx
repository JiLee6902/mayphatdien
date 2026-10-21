import Link from 'next/link';
import type { Project } from '@/config/projects';
import { projectHref } from '@/config/projects';
import { Img } from './ui/Img';

/** Shared project / case-study card (used on the homepage and the Dự án page). */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group surface surface-hover flex h-full flex-col overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1">
      <Link href={projectHref(project.slug)} className="relative block h-52 overflow-hidden bg-graphite">
        <Img
          src={project.image}
          alt={project.title}
          className="photo-grade h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-ink/80 px-3 py-1 text-xs font-bold text-white">
          <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 text-signal" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {project.location}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-extrabold leading-snug tracking-tight text-paper transition-colors group-hover:text-signal-dark">
          <Link href={projectHref(project.slug)}>{project.title}</Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-paper-dim">{project.desc}</p>
        <Link
          href={projectHref(project.slug)}
          className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-signal-dark"
        >
          Xem chi tiết
          <span aria-hidden className="transition group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
