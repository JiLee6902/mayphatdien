import Link from 'next/link';

/** Shared section header: eyebrow + title + optional "view all" link. */
export function SectionHeader({
  eyebrow,
  title,
  link,
}: {
  eyebrow: string;
  title: string;
  link?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-edge pb-6">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-display text-[28px] font-extrabold leading-[1.05] tracking-tight text-paper md:text-[40px]">
          {title}
        </h2>
      </div>
      {link && (
        <Link
          href={link.href}
          className="group inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wide text-paper-dim transition-colors hover:text-signal-dark"
        >
          {link.label}
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      )}
    </div>
  );
}
