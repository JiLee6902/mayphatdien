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
function SendIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4 20-7z" /><path d="M22 2 11 13" />
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

const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.857!2d107.0816!3d10.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174f21f9e7e7e8f%3A0x0!2s1591A+%C4%90%C6%B0%E1%BB%9Dng+30%2F4%2C+Ph%C6%B0%E1%BB%9Dng+12%2C+Th%C3%A0nh+ph%E1%BB%91+V%C5%A9ng+T%C3%A0u!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn';

const fieldClass =
  'w-full rounded-sm border border-edge bg-white px-4 py-3 text-sm text-paper placeholder:text-paper-mute outline-none transition focus:border-signal';

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
              <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight text-paper md:text-3xl">Kết nối với PMC</h2>
              <div className="mt-6 space-y-4">
                {methods.map((m) => (
                  <div
                    key={m.label}
                    className="surface surface-hover flex items-center gap-5 rounded-sm p-5 hover:-translate-y-0.5"
                  >
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-sm bg-signal/10 text-signal-dark">
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
                      className="inline-flex flex-none items-center rounded-sm bg-signal px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-signal-dark"
                    >
                      {m.cta}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow">Văn phòng</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight text-paper md:text-3xl">Địa điểm của PMC</h2>
              <div className="mt-6 space-y-4">
                {settings.locations.map((loc) => (
                  <div
                    key={loc.name}
                    className="surface surface-hover rounded-sm p-5 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-sm bg-signal/10 text-signal-dark">
                        <PinIcon />
                      </span>
                      <div>
                        <h3 className="font-display uppercase tracking-tight text-paper">{loc.name}</h3>
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
            <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight text-paper md:text-3xl">Điền form — PMC gọi lại ngay</h2>
            <p className="mt-2 text-sm text-paper-dim">Phản hồi trong vòng 1 giờ (7:00 – 21:00 hàng ngày).</p>

            <form
              action={`mailto:${settings.email}`}
              method="POST"
              encType="text/plain"
              className="mt-6 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-paper-dim" htmlFor="contact-name">Họ tên *</label>
                  <input id="contact-name" name="ho_ten" type="text" required placeholder="Nguyễn Văn A" className={fieldClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-paper-dim" htmlFor="contact-phone">Số điện thoại *</label>
                  <input id="contact-phone" name="so_dien_thoai" type="tel" required placeholder="0912 345 678" className={fieldClass} />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-paper-dim" htmlFor="contact-company">Công ty / Dự án</label>
                <input id="contact-company" name="cong_ty" type="text" placeholder="Tên công ty hoặc dự án" className={fieldClass} />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-paper-dim" htmlFor="contact-equipment">Thiết bị cần thuê *</label>
                <select id="contact-equipment" name="thiet_bi" required className={fieldClass}>
                  <option value="">Chọn nhóm thiết bị…</option>
                  <option>Máy phát điện</option>
                  <option>Máy nén khí</option>
                  <option>Thiết bị phun rửa UHP</option>
                  <option>Máy hàn / máy phát hàn</option>
                  <option>Nhiều loại thiết bị</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-paper-dim" htmlFor="contact-message">Yêu cầu chi tiết</label>
                <textarea
                  id="contact-message"
                  name="yeu_cau"
                  rows={4}
                  placeholder="Công suất cần thiết, địa điểm công trình, thời gian thuê…"
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-signal px-6 py-3.5 font-bold text-ink transition hover:bg-signal-dark hover:-translate-y-0.5 active:scale-95"
              >
                <SendIcon />
                Gửi yêu cầu báo giá
              </button>

              <p className="text-center text-xs text-paper-dim">
                Hoặc gọi ngay <a href={telHref(settings.hotline)} className="font-bold text-signal-dark hover:underline">{formatPhone(settings.hotline)}</a> để được tư vấn tức thì.
              </p>
            </form>
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
