import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Faq } from '@/components/Faq';
import { CtaBand } from '@/components/CtaBand';
import { Reveal } from '@/components/motion/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { graph, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { loadSettings } from '@/lib/content';
import type { Faq as FaqItem } from '@/lib/schema';

export const metadata: Metadata = {
  title: { absolute: 'Quy trình & chính sách thuê thiết bị — PMC' },
  description:
    'Quy trình thuê thiết bị tại PMC: khảo sát & báo giá miễn phí, hợp đồng minh bạch, giao lắp tận công trình, vận hành & bảo trì, hỗ trợ kỹ thuật 24/7. Thuê linh hoạt theo ngày, tuần, tháng.',
  alternates: { canonical: '/quy-trinh-thue/' },
};

const steps: { n: string; title: string; desc: string }[] = [
  { n: '01', title: 'Liên hệ & tư vấn', desc: 'Gọi hotline hoặc gửi yêu cầu. Kỹ sư PMC tư vấn loại máy, công suất phù hợp ngay trong ngày.' },
  { n: '02', title: 'Khảo sát công trình', desc: 'PMC khảo sát mặt bằng, tải và điều kiện thi công — miễn phí, không ràng buộc.' },
  { n: '03', title: 'Báo giá & hợp đồng', desc: 'Báo giá trọn gói, minh bạch theo ngày · tuần · tháng. Ký hợp đồng rõ ràng về phạm vi, thời gian và điều khoản.' },
  { n: '04', title: 'Giao lắp & đấu nối', desc: 'Xe cẩu/xe nâng của PMC vận chuyển, hạ đặt, đấu nối, chạy thử và bàn giao tận công trình.' },
  { n: '05', title: 'Vận hành & bảo trì', desc: 'Hướng dẫn vận hành hoặc cử kỹ thuật viên trực máy; bảo dưỡng định kỳ trong suốt thời gian thuê.' },
  { n: '06', title: 'Thu hồi khi kết thúc', desc: 'Hết hạn thuê (hoặc gia hạn theo nhu cầu), PMC thu hồi thiết bị tận nơi — nhanh gọn.' },
];

const included = [
  'Vận chuyển đến & đi',
  'Lắp đặt, đấu nối, chạy thử',
  'Hướng dẫn vận hành',
  'Bảo dưỡng định kỳ',
  'Hỗ trợ kỹ thuật 24/7',
  'Thu hồi khi kết thúc',
];

const priceFactors = [
  { k: 'Loại & công suất thiết bị', v: 'Máy càng lớn, chuyên dụng thì đơn giá càng cao.' },
  { k: 'Thời gian thuê', v: 'Ngày / tuần / tháng — thuê dài hạn có đơn giá tốt hơn.' },
  { k: 'Địa điểm & vận chuyển', v: 'Khoảng cách và điều kiện giao lắp tại công trình.' },
  { k: 'Nhiên liệu & vận hành', v: 'Dầu tính theo thực tế hoặc thỏa thuận; có/không cử người trực máy.' },
  { k: 'Phụ kiện đi kèm', v: 'Tủ ATS, tủ hòa đồng bộ, cáp, bình chứa/sấy khí… nếu cần.' },
];

const faqs: FaqItem[] = [
  { q: 'Thuê thiết bị tối thiểu bao lâu?', a: 'PMC cho thuê linh hoạt theo ngày, tuần, tháng và dài hạn. Dự án ngắn ngày hoặc sự kiện vẫn nhận — liên hệ hotline để được tư vấn gói phù hợp.' },
  { q: 'Có cần đặt cọc và ký hợp đồng không?', a: 'Có hợp đồng thuê rõ ràng về thiết bị, thời gian, phạm vi và trách nhiệm hai bên. Mức đặt cọc (nếu có) theo thỏa thuận tùy giá trị và thời gian thuê — PMC trao đổi minh bạch trước khi ký.' },
  { q: 'Báo giá đã gồm giao lắp chưa? Có phí ẩn không?', a: 'Báo giá trọn gói gồm giao lắp, đấu nối, chạy thử và bảo trì; PMC nêu rõ từng khoản, không phát sinh phí ẩn. Nhiên liệu tính theo thực tế hoặc thỏa thuận.' },
  { q: 'Giao lắp mất bao lâu?', a: 'Tùy công suất và địa điểm, PMC thường giao lắp trong 24–48 giờ sau khi chốt. Trường hợp gấp, liên hệ hotline để được ưu tiên điều phối.' },
  { q: 'Nếu máy gặp sự cố khi đang thuê thì sao?', a: 'PMC hỗ trợ kỹ thuật 24/7, xử lý tại chỗ trong thời gian ngắn nhất; nếu cần sẽ thay máy để công trình không gián đoạn.' },
];

export default async function QuyTrinhThuePage() {
  const settings = await loadSettings();
  const crumbs = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Quy trình thuê', path: '/quy-trinh-thue/' },
  ];

  return (
    <>
      <JsonLd data={graph([breadcrumbSchema(crumbs), faqSchema(faqs, '/quy-trinh-thue/')])} />

      <PageHeader
        eyebrow="Quy trình & chính sách"
        title="Thuê thiết bị tại PMC"
        subtitle="Minh bạch từ cuộc gọi đầu tiên đến khi máy vận hành ổn định tại công trình — và cả khi thu hồi."
        crumb="Quy trình thuê"
      />

      {/* 6-step process — vertical timeline (distinct from the card grids used
          elsewhere; a connected journey fits a "quy trình" page). */}
      <section className="mx-auto max-w-[920px] px-6 py-16 md:py-20 lg:px-10">
        <p className="eyebrow text-signal-dark">Quy trình 6 bước</p>
        <h2 className="mt-3 font-display text-[26px] font-extrabold tracking-tight text-paper md:text-[34px]">Từ liên hệ đến bàn giao</h2>

        <ol className="relative mt-10 space-y-5 before:absolute before:bottom-6 before:left-[27px] before:top-6 before:w-px before:bg-edge">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <li className="relative flex items-start gap-5">
                <span className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-full border-4 border-graphite bg-signal font-display text-[18px] font-extrabold text-white">
                  {s.n}
                </span>
                <div className="surface flex-1 rounded-xl p-5 md:p-6">
                  <h3 className="font-display text-[17px] font-extrabold tracking-tight text-paper">{s.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-paper-dim">{s.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Included + price factors */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 md:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Gói thuê đã bao gồm</p>
            <h2 className="mt-3 font-display text-[24px] font-extrabold tracking-tight text-paper md:text-[30px]">Thuê trọn gói, không lo phát sinh</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {included.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-md bg-signal/10 text-signal-dark">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
                  </span>
                  <span className="text-[15px] font-semibold text-paper">{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Giá thuê</p>
            <h2 className="mt-3 font-display text-[24px] font-extrabold tracking-tight text-paper md:text-[30px]">Yếu tố quyết định giá</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-paper-dim">
              PMC báo giá theo nhu cầu thực tế — minh bạch, không phí ẩn. Các yếu tố ảnh hưởng:
            </p>
            <dl className="mt-5 divide-y divide-edge border-y border-edge">
              {priceFactors.map((f) => (
                <div key={f.k} className="py-3.5">
                  <dt className="font-display text-[15px] font-bold text-paper">{f.k}</dt>
                  <dd className="mt-1 text-[13.5px] leading-relaxed text-paper-mute">{f.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[13px] text-paper-mute">Liên hệ hotline để nhận báo giá chính xác cho công trình của bạn.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-edge bg-graphite-2">
        <Faq items={faqs} title="Câu hỏi về thuê thiết bị" eyebrow="Giải đáp" />
      </section>

      <CtaBand
        settings={settings}
        title="Đã nắm quy trình? Bắt đầu thuê ngay"
        lead="Khảo sát và báo giá miễn phí trong ngày — không ràng buộc."
      />
    </>
  );
}
