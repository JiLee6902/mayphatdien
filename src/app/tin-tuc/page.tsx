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

      <section className="mx-auto max-w-[1320px] px-6 py-16 md:py-20 lg:px-10">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal
              key={a.title}
              delay={(i % 3) * 90}
              as="article"
              className="group surface surface-hover flex flex-col overflow-hidden rounded-sm transition-all duration-300 hover:-translate-y-1"
            >
              <Link href={postHref(a.slug)} className="relative block h-52 overflow-hidden bg-graphite">
                <Img
                  src={a.image}
                  alt={a.title}
                  className="h-full w-full object-cover brightness-[0.92] contrast-[1.07] saturate-[1.05] transition duration-500 group-hover:scale-105"
                />
                <time className="absolute left-3 top-3 inline-flex items-center rounded-sm bg-ink/80 px-3 py-1 text-xs font-bold text-white">
                  {a.date}
                </time>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-extrabold uppercase leading-snug tracking-tight text-paper transition-colors group-hover:text-signal">
                  <Link href={postHref(a.slug)}>{a.title}</Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-dim">{a.excerpt}</p>
                <Link
                  href={postHref(a.slug)}
                  className="mt-5 inline-flex items-center gap-1.5 font-bold text-signal-dark"
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
