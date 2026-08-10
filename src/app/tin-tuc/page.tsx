import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Tin tức & kinh nghiệm — PMC thiết bị công nghiệp',
  description:
    'Kiến thức và kinh nghiệm thuê, vận hành, bảo dưỡng máy phát điện, máy nén khí và thiết bị công nghiệp từ đội ngũ kỹ thuật PMC.',
};

interface Article {
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

const articles: Article[] = [
  {
    title: 'Thuê hay mua máy phát điện?',
    date: '15/07/2025',
    excerpt:
      'So sánh chi phí, hiệu quả và tính linh hoạt giữa thuê và mua máy phát điện cho từng loại công trình.',
    image: '/images/categories/may-phat-dien.jpg',
  },
  {
    title: 'Chọn công suất máy phát điện theo tải',
    date: '02/07/2025',
    excerpt:
      'Hướng dẫn tính toán công suất phù hợp để tránh quá tải và tối ưu chi phí nhiên liệu.',
    image: '/images/hero-genset.jpg',
  },
  {
    title: 'Bảo dưỡng máy nén khí đúng cách',
    date: '20/06/2025',
    excerpt:
      'Quy trình bảo dưỡng định kỳ giúp máy nén khí vận hành ổn định và kéo dài tuổi thọ.',
    image: '/images/categories/may-nen-khi.jpg',
  },
  {
    title: 'Ứng dụng phun rửa áp lực cao (UHP) trong công nghiệp',
    date: '05/06/2025',
    excerpt:
      'Vì sao UHP là giải pháp làm sạch hiệu quả cho đường ống, bồn bể và bề mặt kim loại.',
    image: '/images/categories/phun-rua-uhp.jpg',
  },
  {
    title: 'Kinh nghiệm chọn máy hàn cho công trình',
    date: '22/05/2025',
    excerpt:
      'Các tiêu chí lựa chọn máy hàn theo vật liệu, độ dày và điều kiện thi công thực tế.',
    image: '/images/categories/may-han.jpg',
  },
  {
    title: 'Chuẩn bị mặt bằng trước khi lắp đặt thiết bị',
    date: '08/05/2025',
    excerpt:
      'Những lưu ý về không gian, thông gió và an toàn khi tiếp nhận thiết bị công nghiệp.',
    image: '/images/categories/may-nen-khi.jpg',
  },
];

export default function TinTucPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tin tức"
        title="Tin tức & kinh nghiệm"
        subtitle="Chia sẻ kiến thức thực tế về thuê, vận hành và bảo dưỡng thiết bị công nghiệp."
        crumb="Tin tức"
      />

      <section className="mx-auto max-w-[1280px] px-8 py-24 md:py-32 lg:px-12">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.title}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(14,58,102,0.25)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.image}
                alt={a.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <time className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {a.date}
                </time>
                <h2 className="mt-2 text-lg font-bold leading-snug text-navy">{a.title}</h2>
                <p className="mt-2 text-sm text-muted">{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
