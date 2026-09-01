import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { site } from '@/config/site';
import { postHref } from '@/config/posts';
import { loadPosts, loadPostBySlug } from '@/lib/content';
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
      <p className="mt-5 leading-8 text-ink/80">{children}</p>
    ),
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="mt-10 text-2xl font-extrabold tracking-tight text-navy">{children}</h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="mt-8 text-xl font-bold text-navy">{children}</h3>
    ),
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="mt-6 border-l-4 border-accent pl-5 italic text-muted">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-ink/80">{children}</ul>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-ink/80">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-bold text-navy">{children}</strong>
    ),
    link: ({ children, value }: { children?: ReactNode; value?: { href?: string } }) => (
      <a href={value?.href} className="font-semibold text-accent hover:underline">
        {children}
      </a>
    ),
  },
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await loadPostBySlug(slug);
  if (!post) notFound();

  const canonical = postHref(post.slug);
  const crumbs = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Tin tức', path: '/tin-tuc/' },
    { name: post.title, path: canonical },
  ];

  return (
    <article className="bg-bg pb-24 pt-10 md:pb-32">
      <JsonLd data={graph([articleSchema(post, canonical), breadcrumbSchema(crumbs)])} />
      <div className="mx-auto max-w-[820px] px-8 lg:px-12">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-accent">Trang chủ</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/tin-tuc/" className="hover:text-accent">Tin tức</Link></li>
            <li aria-hidden>›</li>
            <li className="font-semibold text-navy line-clamp-1">{post.title}</li>
          </ol>
        </nav>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-accent">Tin tức</p>
        <h1 className="mt-3 text-[30px] font-extrabold leading-tight tracking-tight text-navy md:text-[40px]">
          {post.title}
        </h1>
        <time className="mt-4 block text-sm font-semibold text-muted">{post.date}</time>

        {post.image && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-navy-dark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.title} className="h-auto w-full object-cover" />
          </div>
        )}

        <div className="mt-10">
          {post.body?.length ? (
            <PortableText value={post.body} components={ptComponents} />
          ) : (
            <p className="text-lg leading-8 text-ink/80">{post.excerpt}</p>
          )}
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <Link href="/tin-tuc/" className="inline-flex items-center gap-2 font-bold text-accent hover:underline">
            <span aria-hidden>←</span> Quay lại Tin tức
          </Link>
        </div>
      </div>
    </article>
  );
}
