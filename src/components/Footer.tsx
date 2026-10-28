import Link from 'next/link';
import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';
import { categories, categoryHref } from '@/config/categories';

const quickLinks = [
  { label: 'Dự án', href: '/du-an/' },
  { label: 'Hình ảnh thực tế', href: '/hinh-anh-thuc-te/' },
  { label: 'Quy trình thuê', href: '/quy-trinh-thue/' },
  { label: 'Tin tức', href: '/tin-tuc/' },
  { label: 'Giới thiệu', href: '/gioi-thieu/' },
  { label: 'Liên hệ', href: '/lien-he/' },
];

/** Group a VN phone number for readable display (mobile + landline). */
function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, '');
  if (d.length === 10) return d.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3'); // 0936 899 431
  if (d.length === 11) {
    // 3-digit area (028/024): 028 3514 1558 · 4-digit area (0254): 0254 383 9699
    return /^02[48]/.test(d)
      ? d.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3')
      : d.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
  }
  return raw;
}

export function Footer({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  return (
    <footer className="bg-ink text-[15px] text-white/55">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4 lg:gap-12 lg:px-10">

        {/* Brand + contact */}
        <div className="md:col-span-1">
          <div className="font-display text-[22px] font-extrabold text-white">
            {settings.brand}<span className="text-signal">.</span>
          </div>
          <div className="mt-5 space-y-1.5">
            <a className="block font-display text-[18px] font-bold text-white transition-colors hover:text-signal" href={telHref(settings.hotline)}>
              {formatPhone(settings.hotline)}
            </a>
            <a className="block font-mono text-[13px] transition-colors hover:text-white" href={`mailto:${settings.email}`}>
              {settings.email}
            </a>
          </div>
        </div>

        {/* Equipment nav */}
        <div>
          <p className="label text-white/40">Thiết bị</p>
          <ul className="mt-4 space-y-3">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link className="transition-colors hover:text-white" href={categoryHref(c.slug)}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company nav */}
        <div>
          <p className="label text-white/40">Công ty</p>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link className="transition-colors hover:text-white" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Offices — name + phone only */}
        <div>
          <p className="label text-white/40">Văn phòng</p>
          <div className="mt-4 space-y-4">
            {settings.locations.map((loc) => (
              <div key={loc.name}>
                <p className="font-semibold text-white">{loc.name}</p>
                <a className="font-mono text-[13px] transition-colors hover:text-signal" href={telHref(loc.phone)}>
                  {formatPhone(loc.phone)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center font-mono text-[12px] text-white/35">
        © {new Date().getFullYear()} {settings.brand} · {settings.companyName}
      </div>
    </footer>
  );
}
