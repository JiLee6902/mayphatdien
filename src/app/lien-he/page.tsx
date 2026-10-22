import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/ContactForm';
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

// Reliable address-search embed (always pins the exact address, no fake place id).
const MAPS_EMBED =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('246/40A11 Xô Viết Nghệ Tĩnh, Phường 21, Bình Thạnh, TP.HCM') +
  '&output=embed';

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
        subtitle="Khảo sát và báo giá miễn phí trong ngày. Gọi hotline hoặc điền form — PMC phản hồi trong vòng 1 giờ."
        crumb="Liên hệ"
      />

      <section className="mx-auto max-w-[1320px] px-6 py-16 md:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left: channels + locations */}
          <div className="space-y-10">
            <div>
              <p className="eyebrow">Kênh liên hệ nhanh</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-paper md:text-3xl">Kết nối với PMC</h2>
              <div className="mt-6 space-y-4">
                {methods.map((m) => (
                  <div
                    key={m.label}
                    className="surface surface-hover flex items-center gap-5 rounded-lg p-5 hover:-translate-y-0.5"
                  >
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-signal/10 text-signal-dark">
                      {m.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold uppercase tracking-wide text-paper-mute">{m.label}</p>
                      <a
                        href={m.href}
                        {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="mt-0.5 block truncate text-base font-extrabold text-paper transition-colors hover:text-signal-dark"
                      >
                        {m.value}
                      </a>
                    </div>
                    <a
                      href={m.href}
                      {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="inline-flex flex-none items-center rounded-lg bg-signal px-4 py-2.5 text-sm font-bold text-white transition hover:bg-signal-dark"
                    >
                      {m.cta}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow">Văn phòng</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-paper md:text-3xl">Địa điểm của PMC</h2>
              <div className="mt-6 space-y-4">
                {settings.locations.map((loc) => (
                  <div
                    key={loc.name}
                    className="surface surface-hover rounded-lg p-5 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-signal/10 text-signal-dark">
                        <PinIcon />
                      </span>
                      <div>
                        <h3 className="font-display tracking-tight text-paper">{loc.name}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-paper-dim">{loc.address}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-edge pt-4">
                      <a href={telHref(loc.phone)} className="inline-flex items-center gap-2 text-sm font-bold text-paper transition-colors hover:text-signal-dark">
                        <PhoneIcon />
                        {formatPhone(loc.phone)}
                      </a>
                      <a href={mapsHref(loc.address)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-signal-dark hover:underline">
                        Chỉ đường →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div>
            <p className="eyebrow">Gửi yêu cầu báo giá</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-paper md:text-3xl">Điền form — PMC gọi lại ngay</h2>
            <p className="mt-2 text-sm text-paper-dim">Phản hồi trong vòng 1 giờ (7:00 – 21:00 hàng ngày).</p>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="border-t border-edge">
        <iframe
          src={MAPS_EMBED}
          title="Vị trí PMC trên Google Maps"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          className="border-edge"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
