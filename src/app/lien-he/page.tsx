import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/Button';
import { site, telHref } from '@/config/site';

export const metadata: Metadata = {
  title: 'Liên hệ PMC — Hotline, Zalo, Email và văn phòng',
  description:
    'Liên hệ Công ty TNHH P.M.C để được khảo sát và báo giá miễn phí thuê máy phát điện, máy nén khí, thiết bị UHP, máy hàn. Hotline 0936 899 431.',
};

function formatPhone(phone: string): string {
  const d = phone.replace(/\D/g, '');
  if (d.length === 10) return `${d.slice(0, 4)} ${d.slice(4, 7)} ${d.slice(7)}`;
  return d;
}

export default function LienHePage() {
  return (
    <>
      <PageHeader
        eyebrow="Liên hệ"
        title="Liên hệ PMC"
        subtitle="Gọi ngay để được khảo sát và báo giá miễn phí. Đội ngũ PMC tư vấn công suất, phương án lắp đặt và vận hành phù hợp với công trình của bạn."
        crumb="Liên hệ"
      />

      <section className="mx-auto max-w-[1280px] px-8 py-24 md:py-32 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: primary contact block */}
          <div className="rounded-2xl border border-line bg-navy p-8 text-white shadow-sm md:p-10">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Kênh liên hệ nhanh
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">
              Kết nối với PMC
            </h2>

            <div className="mt-6">
              <p className="text-sm uppercase tracking-wide text-white/60">Hotline</p>
              <a
                href={telHref(site.hotline)}
                className="mt-1 block text-4xl font-extrabold tracking-tight text-white transition-colors hover:text-accent md:text-5xl"
              >
                {formatPhone(site.hotline)}
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={telHref(site.hotline)} variant="accent">
                Gọi Hotline
              </Button>
              <Button href={site.zaloUrl} variant="outline-light">
                Nhắn Zalo
              </Button>
              <Button href={`mailto:${site.email}`} variant="outline-light">
                Gửi Email
              </Button>
            </div>

            <div className="mt-8 space-y-2 border-t border-white/15 pt-6 text-sm text-white/80">
              <p>
                Email:{' '}
                <a href={`mailto:${site.email}`} className="font-semibold text-white hover:text-accent">
                  {site.email}
                </a>
              </p>
              <p>
                Zalo:{' '}
                <a href={site.zaloUrl} className="font-semibold text-white hover:text-accent">
                  {site.zaloUrl}
                </a>
              </p>
            </div>

            <p className="mt-6 rounded-xl bg-white/10 p-4 text-sm text-white/80">
              Để nhận báo giá nhanh nhất, vui lòng liên hệ qua Hotline hoặc Zalo — website
              hiện chưa có biểu mẫu gửi yêu cầu trực tuyến.
            </p>
          </div>

          {/* Right: locations */}
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Văn phòng
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
              Địa điểm của PMC
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {site.locations.map((loc) => (
                <div
                  key={loc.name}
                  className="rounded-2xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(14,58,102,0.25)]"
                >
                  <h3 className="text-lg font-bold text-navy">{loc.name}</h3>
                  <p className="mt-2 text-sm text-muted">{loc.address}</p>
                  <a
                    href={telHref(loc.phone)}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors hover:text-accent"
                  >
                    {formatPhone(loc.phone)}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
