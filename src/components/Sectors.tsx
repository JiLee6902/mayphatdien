import type { ReactNode } from 'react';
import { Reveal } from '@/components/motion/Reveal';

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

const sectors: { title: string; desc: string; icon: ReactNode }[] = [
  { title: 'Dầu khí & ngoài khơi', desc: 'Giàn khoan Kình Ngư, Lạc Đà Vàng, POS — PTSC M&C, Vietsovpetro.', icon: <Icon><path d="M12 2v20M5 8l7-6 7 6M5 8v8l7 4 7-4V8" /></Icon> },
  { title: 'Cảng biển', desc: 'Cái Mép, Ba Son, Đông Xuyên, PTSC Phú Mỹ.', icon: <Icon><path d="M12 2v6M12 22a8 8 0 0 1-8-8h16a8 8 0 0 1-8 8zM8 6h8" /><circle cx="12" cy="10" r="2" /></Icon> },
  { title: 'Lọc hóa dầu', desc: 'Tổ hợp Hóa dầu Long Sơn (LSP) — môi trường khắt khe nhất.', icon: <Icon><path d="M4 21V9l6-4v4l6-4v16zM9 21v-4h3v4" /></Icon> },
  { title: 'Sân bay & hạ tầng', desc: 'Sân bay Long Thành, cao tốc Bến Lức – Long Thành, cầu Cửa Lấp.', icon: <Icon><path d="M2 12 22 4l-4 8 4 8zM6 12h12" /></Icon> },
  { title: 'Nhà máy & KCN', desc: 'Aston, Miko VSIP 3, KCN Lộc An, Pepperl+Fuchs.', icon: <Icon><path d="M3 21V11l6 4V11l6 4V7l6 4v10z" /></Icon> },
  { title: 'Y tế & công cộng', desc: 'Bệnh viện Tâm Anh, trường học, khu tái định cư.', icon: <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v6M9 11h6" /></Icon> },
  { title: 'BĐS & nghỉ dưỡng', desc: 'CapitaLand (Sycamore), Sun Group, Ixora & The Grand Hồ Tràm.', icon: <Icon><path d="M3 21h18M6 21V8l6-4 6 4v13M10 21v-5h4v5" /></Icon> },
  { title: 'Sự kiện & dự phòng', desc: 'Cấp nguồn dự phòng, sự kiện, chạy thử dây chuyền.', icon: <Icon><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></Icon> },
];

export function Sectors() {
  return (
    <section className="border-t border-edge bg-graphite-2">
      <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 md:py-20">
        <p className="eyebrow">Lĩnh vực đã phục vụ</p>
        <h2 className="mt-3 max-w-2xl font-display text-[26px] font-extrabold tracking-tight text-paper md:text-[34px]">
          Kinh nghiệm trải khắp các ngành trọng điểm
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s, i) => (
            <Reveal key={s.title} delay={i * 50}>
              <div className="surface surface-hover h-full rounded-lg p-6 hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-signal/10 text-signal-dark">{s.icon}</span>
                <h3 className="mt-4 font-display text-[15px] font-extrabold leading-snug tracking-tight text-paper">{s.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-paper-mute">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
