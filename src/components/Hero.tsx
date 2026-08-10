import { Button } from './ui/Button';
import { site, telHref } from '@/config/site';

const trust = ['Khảo sát miễn phí', 'Giao lắp tận nơi', 'Hỗ trợ 24/7'];

function Check() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4 flex-none text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(226,129,28,0.18),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Cho thuê thiết bị công nghiệp
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Cho thuê máy phát điện, máy nén khí{' '}
            <span className="text-accent">&amp; thiết bị công trình</span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#c3d3e2]">
            Đầy đủ công suất, thương hiệu lớn, sẵn kho. Khảo sát, giao lắp tận công trình
            khắp miền Nam.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/lien-he/">Nhận báo giá</Button>
            <Button href={telHref(site.hotline)} variant="outline-light">
              Gọi ngay 0936 899 431
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#9fb4c7]">
            {trust.map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Check />
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-genset.jpg"
              alt="Cho thuê máy phát điện công nghiệp PMC"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 text-navy shadow-xl">
            <div className="text-3xl font-extrabold text-navy">18+</div>
            <div className="mt-0.5 text-sm text-muted">Năm kinh nghiệm</div>
          </div>
        </div>
      </div>
    </section>
  );
}
