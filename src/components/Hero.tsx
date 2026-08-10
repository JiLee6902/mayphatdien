import { Button } from './ui/Button';
import { site, telHref } from '@/config/site';

const trust = ['Khảo sát miễn phí', 'Giao lắp tận nơi', 'Hỗ trợ 24/7'];
const stats = [
  { value: '18+', label: 'Năm kinh nghiệm' },
  { value: '70+', label: 'Thiết bị sẵn kho' },
  { value: '10+', label: 'Tỉnh thành phục vụ' },
];

function Check() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 flex-none text-accent" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#12508a_0%,#0e3a66_45%,#08213d_100%)] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_80%_10%,rgba(56,132,255,0.30),transparent_70%)]" />
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]" preserveAspectRatio="none" viewBox="0 0 1440 700" fill="none">
        <path d="M-100 520 C 300 400 620 600 900 460 C 1150 340 1300 460 1560 340" stroke="white" strokeWidth="1.2" />
        <path d="M-100 620 C 320 500 640 700 940 560 C 1200 440 1340 560 1560 440" stroke="white" strokeWidth="1" opacity="0.6" />
      </svg>

      <div className="relative mx-auto max-w-[1200px] px-6 pb-24 pt-24 md:pb-32 md:pt-36">
        <div className="grid items-center gap-x-20 gap-y-16 md:grid-cols-[1.05fr_0.95fr]">
          {/* left */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Cho thuê thiết bị công nghiệp
            </p>
            <h1 className="mt-7 text-[42px] font-extrabold leading-[1.12] tracking-tight md:text-[60px] md:leading-[1.08]">
              Cho thuê máy phát điện,
              <br className="hidden sm:block" /> máy nén khí{' '}
              <span className="bg-gradient-to-r from-sky-300 to-accent bg-clip-text text-transparent">
                &amp; thiết bị công trình
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-white/70">
              Đầy đủ công suất 10–1500 kVA, thương hiệu lớn, sẵn kho. Khảo sát, vận chuyển và
              lắp đặt tận công trình khắp miền Nam.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/lien-he/">Nhận báo giá</Button>
              <Button href={telHref(site.hotline)} variant="outline-light">
                Gọi ngay 0936 899 431
              </Button>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/60">
              {trust.map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <Check />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* right — glass card */}
          <div className="relative hidden md:block">
            <div className="rounded-3xl border border-white/12 bg-white/[0.06] p-3.5 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)] backdrop-blur-md">
              <div className="relative h-[400px] overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-genset.jpg"
                  alt="Cho thuê máy phát điện công nghiệp PMC"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/75 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <div>
                    <div className="text-sm font-bold text-white">Kho thiết bị PMC</div>
                    <div className="text-xs text-white/70">Sẵn sàng điều động</div>
                  </div>
                  <div className="rounded-lg bg-accent px-3 py-1 text-sm font-bold text-white">70+ máy</div>
                </div>
              </div>
            </div>
            <div className="absolute -left-6 top-8 rounded-2xl border border-white/10 bg-white px-5 py-3.5 text-navy shadow-xl">
              <div className="text-2xl font-extrabold leading-none text-navy">18+</div>
              <div className="mt-1 text-[11px] text-muted">Năm kinh nghiệm</div>
            </div>
          </div>
        </div>

        {/* stats — spacious row with plenty of air */}
        <div className="mt-20 grid max-w-lg grid-cols-3 gap-8 border-t border-white/10 pt-10 md:mt-24">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold text-white">{s.value}</div>
              <div className="mt-2 text-xs text-white/55">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
