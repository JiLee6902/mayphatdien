import Link from 'next/link';
import { telHref, defaultSiteSettings, type SiteSettings } from '@/config/site';
import { categories, categoryHref } from '@/config/categories';

const quickLinks = [
  { label: 'Dự án', href: '/du-an/' },
  { label: 'Tin tức', href: '/tin-tuc/' },
  { label: 'Giới thiệu', href: '/gioi-thieu/' },
  { label: 'Liên hệ', href: '/lien-he/' },
];

export function Footer({ settings = defaultSiteSettings }: { settings?: SiteSettings }) {
  return (
    <footer className="bg-navy-dark text-[#9fb4c7]">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="text-2xl font-extrabold text-white">
            {settings.brand}
            <span className="ml-0.5 text-accent">.</span>
          </div>
          <p className="mt-3 text-sm">
            Cho thuê máy phát điện, máy nén khí, phun rửa áp lực cao (UHP) và máy hàn — giao
            lắp tận công trình.
          </p>
          <p className="mt-4 text-sm">
            Hotline:{' '}
            <a className="font-semibold text-white hover:text-accent" href={telHref(settings.hotline)}>
              0936 899 431
            </a>
          </p>
        </div>

        <div>
          <div className="font-semibold text-white">Thiết bị</div>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link className="hover:text-accent" href={categoryHref(c.slug)}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-semibold text-white">Liên kết</div>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link className="hover:text-accent" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          {settings.locations.map((loc) => (
            <div key={loc.name}>
              <div className="font-semibold text-white">{loc.name}</div>
              <p className="mt-2 text-sm">{loc.address}</p>
              <p className="mt-1 text-sm">
                ĐT:{' '}
                <a className="text-white hover:text-accent" href={telHref(loc.phone)}>
                  {loc.phone}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[13px]">
        © {new Date().getFullYear()} {settings.brand} · {settings.companyName}
      </div>
    </footer>
  );
}
