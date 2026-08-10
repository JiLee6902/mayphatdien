import { Button } from './ui/Button';
import { site, telHref } from '@/config/site';

const stats = [
  { value: '18+', label: 'Năm kinh nghiệm' },
  { value: '70+', label: 'Thiết bị sẵn kho' },
  { value: '10+', label: 'Tỉnh thành phục vụ' },
];

export function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-[linear-gradient(135deg,#12508a_0%,#0e3a66_48%,#082744_100%)] text-white md:min-h-[88vh]">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_85%_5%,rgba(56,132,255,0.28),transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-[1280px] px-8 py-28 md:py-32 lg:px-12">
        <div className="grid items-center gap-x-24 gap-y-16 md:grid-cols-[1.05fr_0.95fr]">
          {/* left */}
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white/75 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Cho thuê thiết bị công nghiệp
            </p>
            <h1 className="mt-8 text-[44px] font-extrabold leading-[1.12] tracking-tight md:text-[62px] md:leading-[1.08]">
              Cho thuê máy phát điện, máy nén khí{' '}
              <span className="text-accent">&amp; thiết bị công trình</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-9 text-white/65">
              Đầy đủ công suất 10–1500 kVA, thương hiệu lớn, sẵn kho. Khảo sát, vận chuyển và
              lắp đặt tận công trình khắp miền Nam.
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
              <Button href="/lien-he/">Nhận báo giá</Button>
              <Button href={telHref(site.hotline)} variant="outline-light">
                Gọi ngay 0936 899 431
              </Button>
            </div>
            <div className="mt-16 grid max-w-md grid-cols-3 gap-10 border-t border-white/10 pt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[40px] font-extrabold leading-none text-white">{s.value}</div>
                  <div className="mt-2.5 text-xs text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right — clean image card */}
          <div className="hidden md:block">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.85)]">
              <div className="relative h-[460px] overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-genset.jpg"
                  alt="Cho thuê máy phát điện công nghiệp PMC"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <div className="text-lg font-bold text-white">Kho thiết bị PMC</div>
                  <div className="text-sm text-white/75">70+ máy sẵn sàng điều động</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
