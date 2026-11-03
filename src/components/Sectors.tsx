import type { ReactNode } from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

// Experience by industry — each line folds in both the photo-backed projects and
// the extra named works (offshore, refineries, international) so this single
// section covers the full breadth. The detailed roster lives on /du-an.
const sectors: { title: string; desc: string; icon: ReactNode }[] = [
  { title: 'Dầu khí & ngoài khơi', desc: 'Kình Ngư, Lạc Đà Vàng, Sư Tử Nâu, giàn H5, Thăng Long · PTSC, Vietsovpetro · ra cả Brunei.', icon: <Icon><path d="M12 2v20M5 8l7-6 7 6M5 8v8l7 4 7-4V8" /></Icon> },
  { title: 'Lọc hóa dầu & năng lượng', desc: 'Tổ hợp Hóa dầu Long Sơn (LSP), Nghi Sơn, Dung Quất, nhà máy điện Sông Hậu.', icon: <Icon><path d="M4 21V9l6-4v4l6-4v16zM9 21v-4h3v4" /></Icon> },
  { title: 'Cảng biển', desc: 'Cái Mép, Ba Son, Đông Xuyên, cảng PTSC Phú Mỹ.', icon: <Icon><path d="M12 2v6M12 22a8 8 0 0 1-8-8h16a8 8 0 0 1-8 8zM8 6h8" /><circle cx="12" cy="10" r="2" /></Icon> },
  { title: 'Sân bay & hạ tầng', desc: 'Sân bay Long Thành, Metro TP.HCM, cao tốc Bến Lức – Long Thành, cầu Cửa Lấp.', icon: <Icon><path d="M2 12 22 4l-4 8 4 8zM6 12h12" /></Icon> },
  { title: 'Nhà máy & KCN', desc: 'Hyosung, Aston, Miko VSIP 3, KCN Lộc An, Pepperl+Fuchs.', icon: <Icon><path d="M3 21V11l6 4V11l6 4V7l6 4v10z" /></Icon> },
  { title: 'BĐS & nghỉ dưỡng', desc: 'CapitaLand (Sycamore), Sun Group, Ixora & The Grand Hồ Tràm, Empire City, Đại Quang Minh.', icon: <Icon><path d="M3 21h18M6 21V8l6-4 6 4v13M10 21v-5h4v5" /></Icon> },
  { title: 'Y tế & công cộng', desc: 'Bệnh viện Tâm Anh, trường học, khu tái định cư, nhà máy xử lý nước thải.', icon: <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v6M9 11h6" /></Icon> },
  { title: 'Sự kiện & dự phòng', desc: 'Cấp nguồn dự phòng, sự kiện, chạy thử dây chuyền, công trình hải đảo.', icon: <Icon><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></Icon> },
];

/** Single "bề dày kinh nghiệm" section on the homepage — merges the old sector
 *  list and the served-works roster so the page doesn't repeat itself. */
export function Sectors() {
  return (
    <section className="border-t border-edge bg-graphite-2">
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow text-signal-dark">Bề dày kinh nghiệm</p>
            <h2 className="mt-3 font-display text-[26px] font-extrabold tracking-tight text-paper md:text-[34px]">
              Kinh nghiệm trải khắp các ngành trọng điểm
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-paper-dim">
              Từ giàn khoan ngoài khơi, lọc hóa dầu đến cảng, sân bay và nhà máy — trong nước và quốc tế.
            </p>
          </div>
          <Link href="/du-an/" className="inline-flex shrink-0 items-center gap-2 font-bold text-signal-dark hover:underline">
            Xem tất cả công trình <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-x-12 sm:grid-cols-2">
          {sectors.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <div className="group flex items-start gap-4 border-t border-edge py-5 transition-colors">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-signal/10 text-signal-dark transition-colors group-hover:bg-signal group-hover:text-white">{s.icon}</span>
                <div>
                  <h3 className="font-display text-[16px] font-extrabold leading-snug tracking-tight text-paper">{s.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-paper-mute">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
