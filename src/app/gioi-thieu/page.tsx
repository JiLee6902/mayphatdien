import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { Img } from '@/components/ui/Img';
import { PageHeader } from '@/components/PageHeader';
import { FleetStrength } from '@/components/FleetStrength';
import { CtaBand } from '@/components/CtaBand';
import { projectHref } from '@/config/projects';
import { loadProjects, loadSettings } from '@/lib/content';

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export const metadata: Metadata = {
  title: { absolute: 'Giới thiệu Công ty TNHH P.M.C — Năng lực cho thuê thiết bị công nghiệp' },
  description:
    'P.M.C — gần 20 năm cho thuê máy phát điện, máy nén khí, UHP và máy hàn. Đã cấp thiết bị cho sân bay Long Thành, lọc hóa dầu Long Sơn, giàn khoan ngoài khơi, cảng Cái Mép, bệnh viện và nhiều dự án trọng điểm miền Nam.',
  alternates: { canonical: '/gioi-thieu/' },
};

const stats = [
  { value: 'Từ 2007', label: 'Gần 20 năm trong nghề' },
  { value: '20+', label: 'Công trình tiêu biểu' },
  { value: '55+', label: 'Thiết bị, công suất đến 1250kVA' },
  { value: 'Offshore', label: 'Phục vụ cả giàn khoan ngoài khơi' },
];

// Real clients / contractors / projects PMC has supplied equipment to.
const clients = [
  'Sân bay Quốc tế Long Thành',
  'Lọc hóa dầu Long Sơn (LSP)',
  'PTSC M&C',
  'Vietsovpetro — giàn Kình Ngư',
  'CapitaLand',
  'Sun Group',
  'Coteccons',
  'Cảng Cái Mép',
  'Cảng PTSC Phú Mỹ',
  'Bệnh viện Tâm Anh',
  'Metro TP.HCM',
  'Pepperl+Fuchs',
  'Đại Quang Minh',
  'Cao tốc Bến Lức – Long Thành',
];

const whyUs: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: 'Đội máy sở hữu — không qua trung gian',
    desc: 'PMC tự sở hữu kho máy lớn, chủ động nguồn và giá, không phụ thuộc bên thứ ba.',
    icon: <Icon><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" /></Icon>,
  },
  {
    title: 'Công suất 25 – 1250 kVA',
    desc: 'Đủ dải cho công trình nhỏ đến nhà máy, cảng, lọc hóa dầu và giàn khoan.',
    icon: <Icon><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></Icon>,
  },
  {
    title: 'Kỹ thuật trực theo máy 24/7',
    desc: 'Kỹ thuật viên đồng hành suốt thời gian thuê, xử lý sự cố nhanh tại chỗ.',
    icon: <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></Icon>,
  },
  {
    title: 'Giao lắp tận công trình',
    desc: 'Xe cẩu, xe nâng chuyên dụng của PMC vận chuyển, hạ đặt và đấu nối tận nơi.',
    icon: <Icon><path d="M1 3h13v13H1zM14 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="1.5" /><circle cx="17.5" cy="18.5" r="1.5" /></Icon>,
  },
  {
    title: 'Thương hiệu Nhật & châu Âu',
    desc: 'Mitsubishi, Cummins, Denyo, Komatsu, Hitachi, Perkins, MTU, Airman — bền, êm, tiết kiệm.',
    icon: <Icon><path d="M20 7 12 3 4 7l8 4 8-4zM4 7v10l8 4 8-4V7M12 11v10" /></Icon>,
  },
  {
    title: 'Minh bạch & đúng tiến độ',
    desc: 'Khảo sát kỹ, báo giá rõ ràng, cam kết thời gian — yếu tố sống còn với công trình.',
    icon: <Icon><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></Icon>,
  },
];

const services: { title: string; desc: string; icon: ReactNode }[] = [
  { title: 'Khảo sát', desc: 'Đánh giá tải, mặt bằng và điều kiện thi công tại công trình.', icon: <Icon><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></Icon> },
  { title: 'Vận chuyển', desc: 'Điều phối xe cẩu/xe nâng chuyên dụng, giao đúng tiến độ.', icon: <Icon><path d="M1 3h13v13H1zM14 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="1.5" /><circle cx="17.5" cy="18.5" r="1.5" /></Icon> },
  { title: 'Lắp đặt', desc: 'Đấu nối, căn chỉnh và kiểm tra an toàn trước khi bàn giao.', icon: <Icon><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2z" /></Icon> },
  { title: 'Vận hành', desc: 'Hướng dẫn hoặc cử kỹ thuật viên vận hành theo yêu cầu.', icon: <Icon><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></Icon> },
  { title: 'Bảo trì', desc: 'Bảo dưỡng định kỳ, thay thế vật tư trong suốt thời gian thuê.', icon: <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></Icon> },
  { title: 'Xử lý sự cố', desc: 'Đội kỹ thuật cơ động, có mặt nhanh khi phát sinh sự cố.', icon: <Icon><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></Icon> },
];

export default async function GioiThieuPage() {
  const [projects, settings] = await Promise.all([loadProjects(), loadSettings()]);
  const proof = projects.slice(0, 8);

  return (
    <>
      <PageHeader
        eyebrow="Về chúng tôi"
        title="Giới thiệu Công ty TNHH P.M.C"
        subtitle="Gần 20 năm cho thuê thiết bị công nghiệp tại miền Nam — từ công trình dân dụng đến nhà máy, cảng biển và giàn khoan ngoài khơi."
        crumb="Giới thiệu"
      />

      {/* Intro + real photo */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 md:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
          <div className="space-y-5 text-[17px] leading-relaxed text-paper-dim">
            <p>
              Công ty TNHH P.M.C thành lập năm 2007, chuyên cho thuê <strong className="text-paper">máy phát điện,
              máy nén khí, thiết bị phun rửa áp lực cao (UHP) và máy hàn</strong> công nghiệp. Qua gần hai thập kỷ,
              PMC là đối tác quen thuộc của nhiều nhà thầu lớn và dự án trọng điểm phía Nam.
            </p>
            <p>
              Điểm khác biệt của PMC là <strong className="text-paper">sở hữu đội máy lớn, đa dạng công suất 25–1250kVA</strong> và
              chủ động giao lắp bằng phương tiện riêng — không qua trung gian. Nhờ đó PMC đáp ứng được những công
              trình khắt khe nhất về độ ổn định nguồn điện: lọc hóa dầu, cảng nước sâu, bệnh viện và giàn khoan ngoài khơi.
            </p>
            <p>
              Mỗi đơn hàng đều được khảo sát kỹ, tư vấn đúng công suất và có kỹ thuật viên trực theo máy — để công
              trình của khách hàng <strong className="text-paper">không bao giờ gián đoạn</strong>.
            </p>
          </div>
          <figure className="overflow-hidden rounded-xl border border-edge">
            <Img
              src="/images/projects/loc-hoa-dau-long-son/hero.jpg"
              alt="Máy phát điện PMC tại Tổ hợp Lọc hóa dầu Long Sơn"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
            <figcaption className="border-t border-edge bg-graphite px-5 py-3 text-[13px] font-semibold text-paper-dim">
              Tổ máy PMC tại Tổ hợp Lọc hóa dầu Long Sơn
            </figcaption>
          </figure>
        </div>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="surface rounded-lg p-6 text-center">
              <p className="font-display text-2xl font-extrabold tracking-tight text-signal-dark md:text-3xl">{s.value}</p>
              <p className="mt-2 text-sm leading-snug text-paper-dim">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROOF — real projects (credibility) */}
      <section className="border-y border-edge bg-graphite-2">
        <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Năng lực đã được chứng minh</p>
              <h2 className="mt-3 font-display text-[26px] font-extrabold tracking-tight text-paper md:text-[34px]">
                Những công trình PMC đã cấp thiết bị
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-paper-dim">
                Hình ảnh thật tại công trường — bằng chứng rõ ràng nhất về năng lực của một nhà cung cấp.
              </p>
            </div>
            <Link href="/du-an/" className="hidden shrink-0 items-center gap-2 font-bold text-signal-dark hover:underline sm:inline-flex">
              Xem tất cả dự án <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {proof.map((p) => (
              <Link
                key={p.slug}
                href={projectHref(p.slug)}
                className="group relative overflow-hidden rounded-lg border border-edge"
              >
                <Img src={p.image} alt={p.title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="text-[13px] font-bold leading-snug text-white line-clamp-2">{p.title}</p>
                  {p.location && <p className="mt-0.5 text-[11px] text-white/70 line-clamp-1">{p.location}</p>}
                </div>
              </Link>
            ))}
          </div>

          <Link href="/du-an/" className="mt-8 inline-flex items-center gap-2 font-bold text-signal-dark hover:underline sm:hidden">
            Xem tất cả dự án <span aria-hidden>→</span>
          </Link>

          {/* Trusted by */}
          <div className="mt-14">
            <p className="eyebrow">Đã phục vụ các dự án & nhà thầu</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {clients.map((c) => (
                <span key={c} className="inline-flex items-center rounded-lg border border-edge bg-graphite px-4 py-2 text-sm font-semibold text-paper">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet strengths */}
      <FleetStrength />

      {/* Why choose PMC */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 md:py-20 lg:px-10">
        <p className="eyebrow">Vì sao chọn PMC</p>
        <h2 className="mt-3 font-display text-[26px] font-extrabold tracking-tight text-paper md:text-[34px]">
          Sự vững chắc đến từ năng lực thật
        </h2>
        <div className="mt-8 grid gap-x-12 sm:grid-cols-2">
          {whyUs.map((w) => (
            <div
              key={w.title}
              className="flex items-start gap-4 border-t border-edge py-6"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-signal/10 text-signal-dark">{w.icon}</span>
              <div>
                <h3 className="font-display text-[17px] font-extrabold tracking-tight text-paper">{w.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-paper-dim">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Services process */}
        <div className="mt-20">
          <p className="eyebrow">Dịch vụ trọn gói</p>
          <h2 className="mt-3 font-display text-[26px] font-extrabold tracking-tight text-paper md:text-[34px]">
            Đồng hành từ khảo sát đến vận hành
          </h2>
          <div className="mt-8 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((sv, i) => (
              <div
                key={sv.title}
                className="flex items-start gap-4 border-t border-edge py-6"
              >
                <span className="font-display text-[26px] font-extrabold leading-none text-signal/30">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-[16px] font-extrabold tracking-tight text-paper">{sv.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-paper-dim">{sv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        settings={settings}
        title="Tin tưởng kinh nghiệm của PMC?"
        lead="Gọi ngay để được khảo sát và báo giá trong ngày."
      />
    </>
  );
}
