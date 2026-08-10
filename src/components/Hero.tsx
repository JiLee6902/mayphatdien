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
    <section className="relative flex items-center overflow-hidden bg-[linear-gradient(135deg,#12508a_0%,#0e3a66_45%,#08213d_100%)] text-white md:min-h-[90vh]">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_82%_8%,rgba(56,132,255,0.32),transparent_70%)]" />
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
        <path d="M-120 560 C 340 420 660 660 980 500 C 1240 370 1400 500 1620 360" stroke="white" strokeWidth="1.3" />
        <path d="M-120 680 C 360 540 680 760 1000 600 C 1280 470 1420 600 1620 470" stroke="white" strokeWidth="1" opacity="0.55" />
      </svg>

      <div className="relative mx-auto w-full max-w-[1320px] px-8 py-28 md:py-32 lg:px-12">
        <div className="grid items-center gap-x-24 gap-y-16 md:grid-cols-[1.05fr_0.95fr]">
          {/* left */}
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Cho thuê thiết bị công nghiệp
            </p>
            <h1 className="mt-8 text-[44px] font-extrabold leading-[1.14] tracking-tight md:text-[64px] md:leading-[1.1]">
              Cho thuê máy phát điện,
              <br className="hidden sm:block" /> máy nén khí{' '}
              <span className="bg-gradient-to-r from-sky-300 to-accent bg-clip-text text-transparent">
                &amp; thiết bị công trình
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-9 text-white/70">
              Đầy đủ công suất 10–1500 kVA, thương hiệu lớn, sẵn kho. Khảo sát, vận chuyển và
              lắp đặt tận công trình khắp miền Nam.
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
              <Button href="/lien-he/">Nhận báo giá</Button>
              <Button href={telHref(site.hotline)} variant="outline-light">
                Gọi ngay 0936 899 431
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
              {trust.map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <Check />
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-14 grid max-w-md grid-cols-3 gap-10 border-t border-white/10 pt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[40px] font-extrabold leading-none text-white">{s.value}</div>
                  <div className="mt-2.5 text-xs text-white/55">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right — glass card */}
          <div className="relative hidden md:block">
            <div className="rounded-[28px] border border-white/12 bg-white/[0.06] p-4 shadow-[0_50px_100px_-45px_rgba(0,0,0,0.85)] backdrop-blur-md">
              <div className="relative h-[460px] overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-genset.jpg"
                  alt="Cho thuê máy phát điện công nghiệp PMC"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/75 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 backdrop-blur-md">
                  <div>
                    <div className="text-sm font-bold text-white">Kho thiết bị PMC</div>
                    <div className="text-xs text-white/70">Sẵn sàng điều động</div>
                  </div>
                  <div className="rounded-lg bg-accent px-3.5 py-1.5 text-sm font-bold text-white">70+ máy</div>
                </div>
              </div>
            </div>
            <div className="absolute -left-7 top-10 rounded-2xl border border-white/10 bg-white px-6 py-4 text-navy shadow-2xl">
              <div className="text-3xl font-extrabold leading-none text-navy">18+</div>
              <div className="mt-1.5 text-[11px] text-muted">Năm kinh nghiệm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
