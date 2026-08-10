import { site, telHref } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-navy-dark text-[#9fb4c7]">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="text-2xl font-extrabold text-white">{site.brand}</div>
          <p className="mt-3 text-sm">{site.companyName}</p>
          <p className="mt-2 text-sm">
            Hotline:{' '}
            <a className="font-semibold text-white" href={telHref(site.hotline)}>
              0936 899 431
            </a>
          </p>
        </div>
        {site.locations.map((loc) => (
          <div key={loc.name}>
            <div className="font-semibold text-white">{loc.name}</div>
            <p className="mt-2 text-sm">{loc.address}</p>
            <p className="mt-1 text-sm">
              ĐT:{' '}
              <a className="text-white" href={telHref(loc.phone)}>
                {loc.phone}
              </a>
            </p>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[13px]">
        © 2026 {site.brand}. Đã đăng ký bản quyền.
      </div>
    </footer>
  );
}
