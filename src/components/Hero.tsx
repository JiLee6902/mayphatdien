import { Button } from './ui/Button';
import { site, telHref } from '@/config/site';

export function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-[1180px] px-5 py-20">
        <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-accent">
          Cho thuê thiết bị công nghiệp
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
          Cho thuê máy phát điện, máy nén khí &amp; thiết bị công trình
        </h1>
        <p className="mt-4 max-w-xl text-[#c3d3e2]">
          Đầy đủ công suất, thương hiệu lớn, sẵn kho. Khảo sát, giao lắp tận công trình
          khắp miền Nam.
        </p>
        <div className="mt-7 flex gap-3">
          <Button href="/lien-he/">Nhận báo giá</Button>
          <Button href={telHref(site.hotline)} variant="outline" className="!text-white !border-white/40">
            Gọi ngay 0936 899 431
          </Button>
        </div>
      </div>
    </section>
  );
}
