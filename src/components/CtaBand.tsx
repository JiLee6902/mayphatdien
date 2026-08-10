import { Button } from './ui/Button';
import { site, telHref } from '@/config/site';

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(226,129,28,0.18),transparent_55%)]"
      />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div>
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            Cần thuê thiết bị gấp?
          </h2>
          <p className="mt-2 text-[#c3d3e2]">
            Gọi ngay để được khảo sát và báo giá trong ngày.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={telHref(site.hotline)}>Gọi 0936 899 431</Button>
          <Button href={site.zaloUrl} variant="outline-light">
            Chat Zalo
          </Button>
        </div>
      </div>
    </section>
  );
}
