import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/config/site';
import { projectHref } from '@/config/projects';
import { equipmentHref } from '@/config/equipment';
import { loadProjects, loadProjectBySlug } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { graph, breadcrumbSchema } from '@/lib/schema';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await loadProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await loadProjectBySlug(slug);
  if (!project) return { title: 'Không tìm thấy dự án' };
  const canonical = projectHref(slug);
  const description = project.desc || `Dự án ${project.title} — ${project.location}.`;
  return {
    title: project.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${project.title} | PMC`,
      description,
      url: `${site.url}${canonical}`,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await loadProjectBySlug(slug);
  if (!project) notFound();

  const canonical = projectHref(project.slug);
  const crumbs = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Dự án', path: '/du-an/' },
    { name: project.title, path: canonical },
  ];

  return (
    <article className="bg-bg pb-24 pt-10 md:pb-32">
      <JsonLd data={graph([breadcrumbSchema(crumbs)])} />
      <div className="mx-auto max-w-[900px] px-8 lg:px-12">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-accent">Trang chủ</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/du-an/" className="hover:text-accent">Dự án</Link></li>
            <li aria-hidden>›</li>
            <li className="font-semibold text-navy line-clamp-1">{project.title}</li>
          </ol>
        </nav>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-accent">Dự án tiêu biểu</p>
        <h1 className="mt-3 text-[30px] font-extrabold leading-tight tracking-tight text-navy md:text-[40px]">
          {project.title}
        </h1>
        {project.location && (
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-muted">
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {project.location}
          </p>
        )}

        {project.image && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-navy-dark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} alt={project.title} className="h-auto w-full object-cover" />
          </div>
        )}

        {project.desc && (
          <p className="mt-10 text-lg leading-8 text-ink/80">{project.desc}</p>
        )}

        {project.equipmentUsed?.length ? (
          <div className="mt-12">
            <h2 className="text-xl font-extrabold tracking-tight text-navy">Thiết bị đã sử dụng</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {project.equipmentUsed.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={equipmentHref(e.slug)}
                    className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 font-semibold text-navy transition hover:border-accent hover:text-accent"
                  >
                    {e.name}
                    <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-12 border-t border-line pt-8">
          <Link href="/du-an/" className="inline-flex items-center gap-2 font-bold text-accent hover:underline">
            <span aria-hidden>←</span> Quay lại Dự án
          </Link>
        </div>
      </div>
    </article>
  );
}
