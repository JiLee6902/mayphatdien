import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Giới thiệu Công ty TNHH P.M.C — Cho thuê thiết bị công nghiệp',
  description:
    'Thành lập năm 2007, P.M.C chuyên cho thuê máy phát điện, máy nén khí, thiết bị phun rửa áp lực cao (UHP) và máy hàn, phục vụ các tỉnh thành miền Nam.',
};

const stats = [
  { value: '18+ năm', label: 'Kinh nghiệm ngành' },
  { value: '70+ thiết bị', label: 'Sẵn kho cho thuê' },
  { value: '10+ tỉnh thành', label: 'Phủ khắp miền Nam' },
  { value: '24/7 hỗ trợ', label: 'Vận hành & sự cố' },
];

const services = [
  { title: 'Khảo sát', desc: 'Đánh giá tải, mặt bằng và điều kiện thi công tại công trình.' },
  { title: 'Vận chuyển', desc: 'Điều phối xe chuyên dụng, giao thiết bị đúng tiến độ.' },
  { title: 'Lắp đặt', desc: 'Đấu nối, căn chỉnh và kiểm tra an toàn trước khi bàn giao.' },
  { title: 'Vận hành', desc: 'Hướng dẫn hoặc cử kỹ thuật viên vận hành theo yêu cầu.' },
  { title: 'Bảo trì', desc: 'Bảo dưỡng định kỳ, thay thế vật tư trong suốt thời gian thuê.' },
  { title: 'Xử lý sự cố', desc: 'Đội kỹ thuật cơ động, có mặt nhanh khi phát sinh sự cố.' },
];

export default function GioiThieuPage() {
  return (
    <>
      <PageHeader
        eyebrow="Về chúng tôi"
        title="Giới thiệu Công ty TNHH P.M.C"
        subtitle="Đối tác tin cậy trong lĩnh vực cho thuê thiết bị công nghiệp tại miền Nam từ năm 2007."
        crumb="Giới thiệu"
      />

      <section className="mx-auto max-w-[1280px] px-8 py-24 md:py-32 lg:px-12">
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink">
          <p>
            Công ty TNHH P.M.C được thành lập từ năm 2007, chuyên cung cấp dịch vụ cho thuê
            máy phát điện, máy nén khí, thiết bị phun rửa áp lực cao (UHP) và máy hàn công
            nghiệp. Trải qua hơn 18 năm hoạt động, PMC đã trở thành đối tác tin cậy của nhiều
            nhà thầu, khu công nghiệp và dự án trọng điểm.
          </p>
          <p>
            Chúng tôi phục vụ khách hàng trên khắp khu vực miền Nam, bao gồm TP. Hồ Chí Minh,
            Bình Dương, Vũng Tàu, Đồng Nai, Cần Thơ và nhiều tỉnh thành lân cận. Kho thiết bị
            đa dạng công suất cùng đội ngũ kỹ thuật giàu kinh nghiệm giúp PMC đáp ứng linh hoạt
            mọi quy mô công trình — từ sự kiện ngắn ngày đến các dự án thi công dài hạn.
          </p>
          <p>
            Phương châm của PMC là mang đến giải pháp thuê thiết bị trọn gói, minh bạch về chi
            phí và cam kết tiến độ. Mỗi đơn hàng đều được khảo sát kỹ lưỡng để tư vấn đúng công
            suất, tối ưu chi phí vận hành và bảo đảm an toàn tuyệt đối cho công trình của khách
            hàng.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-white p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mt-20">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Dịch vụ trọn gói
          </p>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
            Đồng hành từ khảo sát đến vận hành
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((sv) => (
              <div
                key={sv.title}
                className="rounded-2xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(14,58,102,0.25)]"
              >
                <h3 className="text-lg font-bold text-navy">{sv.title}</h3>
                <p className="mt-2 text-sm text-muted">{sv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
