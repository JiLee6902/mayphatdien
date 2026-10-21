import type { Faq as FaqItem } from '@/lib/schema';
import { Reveal } from './motion/Reveal';

/**
 * Accessible FAQ accordion using native <details> (no JS). The Q&A text is
 * visible on the page, satisfying Google's FAQ rich-result requirement; the
 * matching FAQPage JSON-LD is emitted by the host page's schema graph.
 */
export function Faq({
  items,
  title = 'Câu hỏi thường gặp',
  eyebrow = 'Giải đáp',
}: {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="mx-auto max-w-[860px] px-6 py-16 lg:px-10 md:py-20">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-display text-[26px] font-extrabold tracking-tight text-paper md:text-[36px]">
          {title}
        </h2>
      </Reveal>

      <div className="mt-8 divide-y divide-edge border-y border-edge">
        {items.map((f, i) => (
          <Reveal key={f.q} delay={i * 50}>
            <details className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[16px] font-bold text-paper transition-colors hover:text-signal [&::-webkit-details-marker]:hidden">
                {f.q}
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-5 w-5 flex-none text-paper-mute transition-transform duration-300 group-open:rotate-45 group-open:text-signal"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="pb-5 pr-9 text-[15px] leading-7 text-paper-dim">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
