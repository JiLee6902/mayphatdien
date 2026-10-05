import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/motion/Reveal';
import { postHref } from '@/config/posts';
import { Img } from '@/components/ui/Img';
import { loadPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: { absolute: 'Tin tức & kinh nghiệm — PMC thiết bị công nghiệp' },
  description:
    'Kiến thức và kinh nghiệm thuê, vận hành, bảo dưỡng máy phát điện, máy nén khí và thiết bị công nghiệp từ đội ngũ kỹ thuật PMC.',
  alternates: { canonical: '/tin-tuc/' },
};

export default async function TinTucPage() {
  const articles = await loadPosts();

  return (
    <>
      <PageHeader
        eyebrow="Tin tức"
        title="Tin tức & kinh nghiệm"
        subtitle="Chia sẻ kiến thức thực tế về thuê, vận hành và bảo dưỡng thiết bị công nghiệp."
        crumb="Tin tức"
      />

      <section className="mx-auto max-w-[1280px] px-8 py-10 md:py-14 lg:px-12">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal
              key={a.title}
              delay={(i % 3) * 90}
              as="article"
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(20,36,59,0.22)] hover:ring-accent/30"
            >
              <Link href={postHref(a.slug)} className="relative block h-52 overflow-hidden bg-navy-dark">
                <Img
                  src={a.image}
                  alt={a.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <time className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy shadow">
                  {a.date}
                </time>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug text-navy transition-colors group-hover:text-accent">
                  <Link href={postHref(a.slug)}>{a.title}</Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                <Link
                  href={postHref(a.slug)}
                  className="mt-5 inline-flex items-center gap-1.5 font-bold text-accent"
                >
                  Đọc thêm
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
