import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { telHref } from '@/config/site';
import { loadSettings } from '@/lib/content';

export const metadata: Metadata = {
  title: { absolute: 'Liên hệ PMC — Hotline, Zalo, Email và văn phòng' },
  description:
    'Liên hệ Công ty TNHH P.M.C để được khảo sát và báo giá miễn phí thuê máy phát điện, máy nén khí, thiết bị UHP, máy hàn. Hotline 0936 899 431.',
  alternates: { canonical: '/lien-he/' },
};

function formatPhone(phone: string): string {
  const d = phone.replace(/\D/g, '');
  if (d.length === 10) return `${d.slice(0, 4)} ${d.slice(4, 7)} ${d.slice(7)}`;
  return d;
}

function mapsHref(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function PhoneIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

type Method = {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  cta: string;
  external?: boolean;
};

export default async function LienHePage() {
  const settings = await loadSettings();
  const methods: Method[] = [
    {
      icon: <PhoneIcon />,
      label: 'Hotline',
      value: formatPhone(settings.hotline),
      href: telHref(settings.hotline),
      cta: 'Gọi ngay',
    },
    {
      icon: <ChatIcon />,
      label: 'Zalo',
      value: 'Chat báo giá nhanh',
      href: settings.zaloUrl,
      cta: 'Nhắn Zalo',
      external: true,
    },
    {
      icon: <MailIcon />,
      label: 'Email',
      value: settings.email,
      href: `mailto:${settings.email}`,
      cta: 'Gửi Email',
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Liên hệ"
        title="Liên hệ PMC"
        subtitle="Gọi ngay để được khảo sát và báo giá miễn phí. Đội ngũ PMC tư vấn công suất, phương án lắp đặt và vận hành phù hợp với công trình của bạn."
        crumb="Liên hệ"
      />

      <section className="mx-auto max-w-[1280px] px-8 py-24 md:py-32 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: contact methods */}
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Kênh liên hệ nhanh
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
              Kết nối với PMC
            </h2>

            <div className="mt-8 space-y-4">
              {methods.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-5 rounded-2xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(14,58,102,0.25)]"
                >
                  <span className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-navy/5 text-accent">
                    {m.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wide text-muted">{m.label}</p>
                    <a
                      href={m.href}
                      className="mt-1 block truncate text-lg font-extrabold text-navy transition-colors hover:text-accent"
                    >
                      {m.value}
                    </a>
                  </div>
                  <a
                    href={m.href}
                    className="inline-flex flex-none items-center rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-accent-dark"
                  >
                    {m.cta}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-navy p-6 text-sm text-white/85">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-accent/20 text-accent">
                <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p>
                <span className="font-bold text-white">Khảo sát &amp; báo giá miễn phí trong ngày.</span>{' '}
                Liên hệ Hotline hoặc Zalo — website hiện chưa có biểu mẫu gửi yêu cầu trực tuyến.
              </p>
            </div>
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

            <div className="mt-8 space-y-6">
              {settings.locations.map((loc) => (
                <div
                  key={loc.name}
                  className="rounded-2xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(14,58,102,0.25)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-navy/5 text-accent">
                      <PinIcon />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-navy">{loc.name}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{loc.address}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-line pt-5">
                    <a
                      href={telHref(loc.phone)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors hover:text-accent"
                    >
                      <PhoneIcon />
                      {formatPhone(loc.phone)}
                    </a>
                    <a
                      href={mapsHref(loc.address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:underline"
                    >
                      Chỉ đường
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
