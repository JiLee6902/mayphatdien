import { Img } from '@/components/ui/Img';
import { Reveal } from '@/components/motion/Reveal';

const STRENGTHS: { title: string; desc: string }[] = [
  {
    title: 'Dải công suất 25 – 1250 kVA',
    desc: 'Đáp ứng từ công trình nhỏ đến nhà máy, cảng và giàn khoan.',
  },
  {
    title: 'Thương hiệu Nhật & châu Âu',
    desc: 'Mitsubishi, Cummins, Denyo, Komatsu, Hitachi, Perkins, MTU, Airman.',
  },
  {
    title: 'Máy cách âm & dạng container',
    desc: 'Vận hành êm, chịu thời tiết, lắp đặt ngoài trời và ngoài khơi.',
  },
  {
    title: 'Đội xe cẩu – xe nâng riêng',
    desc: 'PMC tự vận chuyển, cẩu hạ và đấu nối ngay tại công trường.',
  },
  {
    title: 'Kỹ thuật trực theo máy 24/7',
    desc: 'Bảo dưỡng định kỳ, xử lý sự cố tại chỗ, không gián đoạn.',
  },
  {
    title: 'Kiểm tra & đại tu tại xưởng',
    desc: 'Mọi tổ máy được bảo dưỡng kỹ trước khi giao đến khách hàng.',
  },
];

function Check() {
  return (
    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-md bg-signal/10 text-signal-dark">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 13 4 4L19 7" />
      </svg>
    </span>
  );
}

export function FleetStrength() {
  return (
    <section className="border-y border-edge bg-graphite">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10 md:py-20">
        {/* Copy */}
        <Reveal>
          <p className="eyebrow">Năng lực thiết bị</p>
          <h2 className="mt-3 font-display text-[26px] font-extrabold tracking-tight text-paper md:text-[34px]">
            Thế mạnh đội máy PMC
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-paper-dim">
            PMC sở hữu đội máy lớn, đa dạng chủng loại và luôn sẵn kho — không phải thuê lại qua trung gian.
            Đây là lý do nhà thầu lớn tin tưởng giao cho PMC những công trình đòi hỏi nguồn điện liên tục và tuyệt đối ổn định.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {STRENGTHS.map((s) => (
              <div key={s.title} className="flex gap-3">
                <Check />
                <div>
                  <p className="font-display font-bold leading-snug text-paper">{s.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-paper-mute">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Fleet mosaic */}
        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-3">
            <figure className="col-span-2 overflow-hidden rounded-lg border border-edge">
              <Img src="/images/fleet/f7.jpg" alt="Xe cẩu PMC hạ tổ máy phát điện tại kho" className="aspect-[16/9] w-full object-cover" />
            </figure>
            <figure className="overflow-hidden rounded-lg border border-edge">
              <Img src="/images/fleet/f4.jpg" alt="Máy phát điện cách âm trong đội máy PMC" className="aspect-square w-full object-cover" />
            </figure>
            <figure className="overflow-hidden rounded-lg border border-edge">
              <Img src="/images/fleet/f1.jpg" alt="Tổ máy phát điện 1250kVA dạng container" className="aspect-square w-full object-cover" />
            </figure>
          </div>
          <p className="mt-3 text-center text-[13px] text-paper-mute">Đội máy &amp; kho bãi thực tế của PMC</p>
        </Reveal>
      </div>
    </section>
  );
}
