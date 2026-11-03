import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { Img } from '@/components/ui/Img';
import { PageHeader } from '@/components/PageHeader';
import { FleetStrength } from '@/components/FleetStrength';
import { CtaBand } from '@/components/CtaBand';
import { loadSettings } from '@/lib/content';

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export const metadata: Metadata = {
  title: { absolute: 'Giới thiệu Công ty TNHH P.M.C — Năng lực cho thuê thiết bị công nghiệp' },
  description:
    'Câu chuyện P.M.C: thành lập 2007, tự sở hữu đội máy lớn, cho thuê thiết bị công nghiệp khắp miền Nam, ra cả giàn khoan ngoài khơi và quốc tế (Brunei). Vì sao các nhà thầu lớn tin giao.',
  alternates: { canonical: '/gioi-thieu/' },
};

// Company identity — reach & ownership angle (deliberately different from the
// homepage's operational stats so the pages don't echo each other).
const identity = [
  { value: 'Từ 2007', label: 'Gần 20 năm trong nghề' },
  { value: '100%', label: 'Đội máy do PMC sở hữu' },
  { value: '10+', label: 'Tỉnh thành đã phục vụ' },
  { value: 'Brunei', label: 'Vươn ra cả quốc tế' },
];

// The three things that actually set PMC apart — not the generic selling points
// repeated elsewhere on the site.
const pillars: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: 'Đội máy sở hữu 100%',
    desc: 'PMC tự đầu tư và vận hành kho máy — chủ động nguồn, chủ động giá, không qua trung gian. Khách thuê thẳng từ chính chủ sở hữu thiết bị.',
    icon: <Icon><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" /></Icon>,
  },
  {
    title: 'Kỹ thuật đi cùng máy',
    desc: 'Không chỉ giao máy rồi rời đi — PMC cử kỹ thuật trực theo máy suốt thời gian thuê, xử lý sự cố ngay tại công trình.',
    icon: <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></Icon>,
  },
  {
    title: 'Chuyên môi trường khắt khe',
    desc: 'Lọc hóa dầu, cảng nước sâu, giàn khoan ngoài khơi — nơi nguồn điện không được phép gián đoạn chính là nơi PMC được chọn.',
    icon: <Icon><path d="M2 20h20M4 20V8l6-4 6 4M8 20v-6h4v6M18 20v-9l3 2v7" /></Icon>,
  },
];

// Geographic reach — unique to the About page (not shown anywhere else).
const coverage: { region: string; areas: string[] }[] = [
  { region: 'Đông Nam Bộ', areas: ['TP.HCM', 'Đồng Nai', 'Bà Rịa – Vũng Tàu', 'Bình Dương', 'Long An'] },
  { region: 'Tây Nam Bộ', areas: ['Cần Thơ', 'Hậu Giang', 'Cà Mau', 'Trà Vinh', 'Bến Tre', 'Bạc Liêu'] },
  { region: 'Miền Trung & Bắc', areas: ['Quảng Ngãi — Dung Quất', 'Thanh Hóa — Nghi Sơn', 'Quảng Trị', 'Khánh Hòa'] },
  { region: 'Ngoài khơi & quốc tế', areas: ['Giàn khoan offshore BR-VT', 'Brunei — MLS Total'] },
];

export default async function GioiThieuPage() {
  const settings = await loadSettings();

  return (
    <>
      <PageHeader
        eyebrow="Về chúng tôi"
        title="Giới thiệu Công ty TNHH P.M.C"
        subtitle="Từ một đội máy nhỏ năm 2007 đến đối tác cấp nguồn cho sân bay, lọc hóa dầu và giàn khoan ngoài khơi — đây là câu chuyện của PMC."
        crumb="Giới thiệu"
      />

      {/* STORY — editorial narrative with a big founding-year anchor */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 md:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
          <div>
            <p className="eyebrow text-signal-dark">Câu chuyện PMC</p>
            <div className="mt-4 flex items-baseline gap-4">
              <span className="font-display text-[64px] font-extrabold leading-none tracking-tight text-signal md:text-[88px]">2007</span>
              <span className="text-[15px] font-semibold uppercase tracking-wide text-paper-mute">Năm<br />thành lập</span>
            </div>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-paper-dim">
              <p>
                Công ty TNHH P.M.C khởi đầu năm 2007 với một đội máy khiêm tốn. Gần hai thập kỷ sau,
                PMC trở thành đối tác quen thuộc của nhiều <strong className="text-paper">nhà thầu lớn và dự án
                trọng điểm</strong> phía Nam — chuyên cho thuê máy phát điện, máy nén khí, thiết bị phun rửa
                áp lực cao (UHP) và máy hàn công nghiệp.
              </p>
              <p>
                Thứ giữ chân khách hàng không phải lời quảng cáo, mà là <strong className="text-paper">năng lực
                thật</strong>: tự sở hữu kho máy lớn, chủ động giao lắp bằng phương tiện riêng, và kỹ thuật
                viên đi cùng máy đến khi công trình vận hành ổn định.
              </p>
            </div>
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

        {/* Identity strip — reach & ownership */}
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {identity.map((s) => (
            <div key={s.label} className="surface rounded-lg p-6 text-center">
              <p className="font-display text-2xl font-extrabold tracking-tight text-signal-dark md:text-3xl">{s.value}</p>
              <p className="mt-2 text-sm leading-snug text-paper-dim">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS — dark band for visual distinction; the real differentiators */}
      <section className="border-y border-edge bg-ink">
        <div className="mx-auto max-w-[1320px] px-6 py-16 md:py-20 lg:px-10">
          <p className="eyebrow text-signal">Điều làm nên PMC</p>
          <h2 className="mt-3 max-w-2xl font-display text-[26px] font-extrabold leading-tight tracking-tight text-white md:text-[34px]">
            Ba thứ không nhà cung cấp nào sao chép được
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-white/12 bg-white/[0.03] p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-signal/15 text-signal">{p.icon}</span>
                <h3 className="mt-5 font-display text-[18px] font-extrabold tracking-tight text-white">{p.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/65">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE — geographic reach, unique to this page */}
      <section className="mx-auto max-w-[1320px] px-6 py-16 md:py-20 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow text-signal-dark">Phạm vi phục vụ</p>
          <h2 className="mt-3 font-display text-[26px] font-extrabold tracking-tight text-paper md:text-[34px]">
            Có mặt khắp miền Nam — ra cả offshore & quốc tế
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-paper-dim">
            Địa bàn càng xa, điều kiện càng khó, PMC càng có kinh nghiệm. Thiết bị của PMC đã chạy
            từ các tỉnh đồng bằng đến giàn khoan ngoài khơi và công trình tại Brunei.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coverage.map((c, i) => (
            <div
              key={c.region}
              className="surface group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              {/* red accent bar grows on hover — agency polish */}
              <span aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100" />

              <div className="flex items-center justify-between">
                <span className="font-display text-[13px] font-extrabold tracking-widest text-paper-mute">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal/10 text-signal-dark transition-colors group-hover:bg-signal group-hover:text-white">
                  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
              </div>

              <h3 className="mt-4 font-display text-[17px] font-extrabold tracking-tight text-paper">{c.region}</h3>
              <p className="mt-1 text-[11.5px] font-bold uppercase tracking-wide text-signal-dark">
                {c.areas.length} địa bàn
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-graphite px-2.5 py-1 text-[12px] font-medium leading-snug text-paper-dim ring-1 ring-edge"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link href="/du-an/" className="mt-10 inline-flex items-center gap-2 font-bold text-signal-dark hover:underline">
          Xem các công trình tiêu biểu <span aria-hidden>→</span>
        </Link>
      </section>

      {/* Fleet composition — appropriate depth for an About page */}
      <FleetStrength />

      <CtaBand
        settings={settings}
        title="Tin tưởng kinh nghiệm của PMC?"
        lead="Gọi ngay để được khảo sát và báo giá trong ngày."
      />
    </>
  );
}
