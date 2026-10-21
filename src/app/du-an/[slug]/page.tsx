import type { Metadata } from 'next';
import Link from 'next/link';
import { Img } from '@/components/ui/Img';
import { notFound } from 'next/navigation';
import { site, telHref } from '@/config/site';
import { projectHref } from '@/config/projects';
import { equipmentHref } from '@/config/equipment';
import { loadProjects, loadProjectBySlug, loadSettings } from '@/lib/content';
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

  const [allProjects, settings] = await Promise.all([loadProjects(), loadSettings()]);
  const related = allProjects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const canonical = projectHref(project.slug);
  const crumbs = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Dự án', path: '/du-an/' },
    { name: project.title, path: canonical },
  ];

  return (
    <>
      <JsonLd data={graph([breadcrumbSchema(crumbs)])} />

      {/* ── HERO — full-bleed image + graphite overlay ── */}
      <section className="relative overflow-hidden bg-graphite">
        {project.image && (
          <div className="absolute inset-0">
            <Img src={project.image} alt="" loading="eager" fetchPriority="high" className="h-full w-full scale-105 object-cover blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-graphite via-graphite/92 to-graphite/70" />
          </div>
        )}
        <div className="grid-texture pointer-events-none absolute inset-0 opacity-60" />

        <div className="relative mx-auto max-w-[1140px] px-8 pb-14 pt-9 lg:px-12">
          <nav aria-label="Breadcrumb" className="text-[13px] text-paper-mute">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="transition-colors hover:text-paper">Trang chủ</Link></li>
              <li aria-hidden className="text-paper-mute/60">›</li>
              <li><Link href="/du-an/" className="transition-colors hover:text-paper">Dự án</Link></li>
              <li aria-hidden className="text-paper-mute/60">›</li>
              <li className="text-paper-dim line-clamp-1">{project.title}</li>
            </ol>
          </nav>

          <div className="mt-10 max-w-3xl">
            <span className="label inline-flex items-center rounded-lg bg-signal px-3 py-1 text-white">
              Dự án
            </span>
            <h1 className="mt-5 font-display text-[30px] font-extrabold leading-[1.12] tracking-tight text-paper md:text-[44px]">
              {project.title}
            </h1>
            {project.location && (
              <p className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-paper-dim">
                <svg aria-hidden viewBox="0 0 24 24" className="h-[18px] w-[18px] text-signal" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {project.location}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="bg-graphite-2 border-y border-edge pb-20 pt-14 md:pb-28">
        <div className="mx-auto max-w-[1140px] px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
            {/* Main */}
            <article className="max-w-[720px]">
              {project.image && (
                <figure className="overflow-hidden rounded-lg border border-edge">
                  <Img
                    src={project.image}
                    alt={project.title}
                    loading="eager"
                    className="aspect-[16/9] w-full object-cover"
                  />
                  {project.location && (
                    <figcaption className="flex items-center gap-2 border-t border-edge bg-graphite px-5 py-3 text-[13px] font-semibold text-paper-dim">
                      <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 text-signal" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {project.location}
                    </figcaption>
                  )}
                </figure>
              )}

              {project.desc && (
                <p className="mt-8 text-lg leading-8 text-paper-dim text-justify">{project.desc}</p>
              )}

              {project.equipmentUsed?.length ? (
                <div className="mt-10">
                  <h2 className="font-display text-xl font-extrabold tracking-tight text-paper">Thiết bị đã sử dụng</h2>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {project.equipmentUsed.map((e) => (
                      <li key={e.slug}>
                        <Link
                          href={equipmentHref(e.slug)}
                          className="inline-flex items-center gap-2 rounded-lg border border-edge bg-graphite px-4 py-2.5 font-semibold text-paper transition-colors hover:border-signal hover:text-signal"
                        >
                          {e.name}
                          <span aria-hidden>→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-12 border-t border-edge pt-6">
                <Link href="/du-an/" className="inline-flex items-center gap-2 font-semibold text-signal-dark hover:underline">
                  <span aria-hidden>←</span> Quay lại Dự án
                </Link>
              </div>
            </article>

            {/* Sticky sidebar */}
            <aside className="lg:sticky lg:top-24 h-fit space-y-6">
              <div className="rounded-lg border border-edge bg-graphite p-6">
                <p className="eyebrow">Liên hệ nhanh</p>
                <p className="mt-2 text-[15px] leading-relaxed text-paper-dim">Báo giá miễn phí, giao lắp tận công trình, hỗ trợ 24/7.</p>
                <a href={telHref(settings.hotline)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-signal py-3 text-sm font-bold text-white transition-colors hover:bg-signal-dark">
                  Gọi {settings.hotline.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3')}
                </a>
                <a href={settings.zaloUrl} target="_blank" rel="noopener noreferrer" className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-lg border border-edge py-3 text-sm font-bold text-paper transition-colors hover:border-signal hover:text-signal">
                  Chat Zalo
                </a>
              </div>

              {related.length > 0 && (
                <div className="rounded-lg border border-edge bg-graphite p-6">
                  <p className="eyebrow">Dự án khác</p>
                  <ul className="mt-4 space-y-4">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={projectHref(r.slug)} className="group flex gap-3">
                          <div className="aspect-square w-16 flex-none overflow-hidden rounded-lg bg-graphite-2">
                            <Img src={r.image} alt={r.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[14px] font-bold leading-snug text-paper line-clamp-2 transition-colors group-hover:text-signal">{r.title}</p>
                            {r.location && <p className="mt-1 text-[12px] text-paper-mute line-clamp-1">{r.location}</p>}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
