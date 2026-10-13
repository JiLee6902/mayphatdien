import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { site, telHref } from '@/config/site';
import { postHref } from '@/config/posts';
import { Img } from '@/components/ui/Img';
import { loadPosts, loadPostBySlug, loadSettings } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { graph, articleSchema, breadcrumbSchema } from '@/lib/schema';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await loadPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPostBySlug(slug);
  if (!post) return { title: 'Không tìm thấy bài viết' };
  const canonical = postHref(slug);
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: `${post.title} | PMC`,
      description: post.excerpt,
      url: `${site.url}${canonical}`,
      type: 'article',
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

// Tailwind-styled renderers so we don't depend on the typography plugin.
const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="mt-5 leading-8 text-paper-dim text-justify">{children}</p>
    ),
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="mt-10 text-2xl font-extrabold tracking-tight text-paper">{children}</h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="mt-8 text-xl font-bold text-paper">{children}</h3>
    ),
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="mt-6 border-l-4 border-signal pl-5 italic text-paper-dim">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-paper-dim">{children}</ul>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-paper-dim">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-bold text-paper">{children}</strong>
    ),
    link: ({ children, value }: { children?: ReactNode; value?: { href?: string } }) => (
      <a href={value?.href} className="font-semibold text-signal-dark hover:underline">
        {children}
      </a>
    ),
  },
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await loadPostBySlug(slug);
  if (!post) notFound();

  const [allPosts, settings] = await Promise.all([loadPosts(), loadSettings()]);
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const canonical = postHref(post.slug);
  const crumbs = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Tin tức', path: '/tin-tuc/' },
    { name: post.title, path: canonical },
  ];

  return (
    <>
      <JsonLd data={graph([articleSchema(post, canonical), breadcrumbSchema(crumbs)])} />

      {/* ── HERO — full-bleed image + graphite overlay (masks low-res source) ── */}
      <section className="relative overflow-hidden bg-graphite">
        {post.image && (
          <div className="absolute inset-0">
            <Img src={post.image} alt="" loading="eager" fetchPriority="high" className="h-full w-full scale-105 object-cover blur-[2px]" />
            {/* Heavy graphite gradient — image becomes a subtle textured backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-graphite via-graphite/92 to-graphite/70" />
          </div>
        )}
        <div className="grid-texture pointer-events-none absolute inset-0 opacity-60" />

        <div className="relative mx-auto max-w-[1140px] px-8 pb-14 pt-9 lg:px-12">
          <nav aria-label="Breadcrumb" className="text-[13px] text-paper-mute">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="transition-colors hover:text-paper">Trang chủ</Link></li>
              <li aria-hidden className="text-paper-mute/60">›</li>
              <li><Link href="/tin-tuc/" className="transition-colors hover:text-paper">Tin tức</Link></li>
              <li aria-hidden className="text-paper-mute/60">›</li>
              <li className="text-paper-dim line-clamp-1">{post.title}</li>
            </ol>
          </nav>

          <div className="mt-10 max-w-3xl">
            <span className="label inline-flex items-center rounded-lg bg-signal px-3 py-1 text-ink">
              Tin tức
            </span>
            <h1 className="mt-5 text-[30px] font-extrabold leading-[1.12] tracking-tight text-paper md:text-[44px]">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-paper-dim">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="bg-graphite-2 border-y border-edge pb-20 pt-14 md:pb-28">
        <div className="mx-auto max-w-[1140px] px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
            {/* Article */}
            <article className="max-w-[720px]">
              {post.body?.length ? (
                <PortableText value={post.body} components={ptComponents} />
              ) : (
                <p className="text-lg leading-8 text-paper-dim">{post.excerpt}</p>
              )}

              {/* Inline end CTA */}
              <div className="mt-12 flex flex-col gap-4 rounded-lg border border-edge bg-graphite p-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-extrabold text-paper">Cần tư vấn thiết bị cho dự án?</p>
                </div>
                <a
                  href={telHref(settings.hotline)}
                  className="inline-flex flex-none items-center justify-center gap-2 rounded-lg bg-signal px-6 py-3.5 font-bold text-ink transition-all hover:bg-signal-dark active:scale-[0.98]"
                >
                  Gọi {settings.hotline.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3')}
                </a>
              </div>

              <div className="mt-10 border-t border-edge pt-6">
                <Link href="/tin-tuc/" className="inline-flex items-center gap-2 font-semibold text-signal-dark hover:underline">
                  <span aria-hidden>←</span> Quay lại Tin tức
                </Link>
              </div>
            </article>

            {/* Sticky sidebar */}
            <aside className="lg:sticky lg:top-24 h-fit space-y-6">
              {/* Contact card */}
              <div className="rounded-lg border border-edge bg-graphite p-6">
                <p className="eyebrow">Liên hệ nhanh</p>
                <p className="mt-2 text-[15px] leading-relaxed text-paper-dim">Báo giá miễn phí, giao lắp tận công trình, hỗ trợ 24/7.</p>
                <a href={telHref(settings.hotline)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-signal py-3 text-sm font-bold text-ink transition-colors hover:bg-signal-dark">
                  Gọi {settings.hotline.replace(/^(\d{4})(\d{3})(\d{3})$/, '$1 $2 $3')}
                </a>
                <a href={settings.zaloUrl} target="_blank" rel="noopener noreferrer" className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-lg border border-edge py-3 text-sm font-bold text-paper transition-colors hover:border-signal hover:text-signal">
                  Chat Zalo
                </a>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="rounded-lg border border-edge bg-graphite p-6">
                  <p className="eyebrow">Bài viết liên quan</p>
                  <ul className="mt-4 space-y-4">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={postHref(r.slug)} className="group flex gap-3">
                          <div className="aspect-square w-16 flex-none overflow-hidden rounded-lg bg-graphite-2">
                            <Img src={r.image} alt={r.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[14px] font-bold leading-snug text-paper line-clamp-2 transition-colors group-hover:text-signal">{r.title}</p>
                            <p className="mt-1 text-[12px] text-paper-mute">{r.date}</p>
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
