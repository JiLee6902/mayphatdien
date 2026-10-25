import { Img } from '@/components/ui/Img';

const stats = [
  { value: '2007', label: 'Năm thành lập' },
  { value: '20+', label: 'Công trình tiêu biểu' },
  { value: '1250kVA', label: 'Công suất lớn nhất' },
  { value: '24/7', label: 'Kỹ thuật trực máy' },
];

const clients = [
  'PTSC M&C',
  'Lọc hóa dầu Long Sơn',
  'CapitaLand',
  'Sun Group',
  'Coteccons',
  'Vietsovpetro',
  'Metro TP.HCM',
];

/** Cinematic dark band — real jobsite photo + layered scrims give the light
 *  page visual depth and anchor PMC's experience/credibility. */
export function ExperienceBand() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Layered background */}
      <div className="absolute inset-0">
        <Img
          src="/images/projects/cang-cai-mep/hero.jpg"
          alt=""
          className="h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </div>
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-signal/25 blur-[120px]" />

      <div className="relative mx-auto max-w-[1320px] px-6 py-20 lg:px-10 md:py-28">
        <p className="eyebrow text-signal">Năng lực &amp; kinh nghiệm</p>
        <h2 className="mt-4 max-w-3xl font-display text-[30px] font-extrabold leading-[1.1] tracking-tight text-white md:text-[46px]">
          Gần 20 năm cấp nguồn cho những công trình khó nhất
        </h2>
        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/70 md:text-[17px]">
          Từ sân bay Long Thành, tổ hợp lọc hóa dầu Long Sơn đến giàn khoan ngoài khơi — nơi
          nguồn điện không được phép gián đoạn, PMC là cái tên được các nhà thầu lớn tin giao.
        </p>

        {/* Stats */}
        <div className="mt-12 grid max-w-4xl grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4 lg:gap-x-12">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-[32px] font-extrabold leading-none tracking-tight text-white md:text-[40px]">{s.value}</p>
              <div className="mt-3 h-0.5 w-8 bg-signal" />
              <p className="mt-2 text-[13px] font-semibold uppercase tracking-wide text-white/60">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Client strip */}
        <div className="mt-14 border-t border-white/15 pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">Đã phục vụ các dự án &amp; nhà thầu</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
            {clients.map((c) => (
              <span key={c} className="font-display text-[15px] font-bold tracking-tight text-white/80 md:text-base">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
