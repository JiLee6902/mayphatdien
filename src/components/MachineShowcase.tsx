'use client';

import { useRef } from 'react';
import { Img } from './ui/Img';

/**
 * The hero machine as a 3D-tilt card: a real equipment photo on a plane that
 * rotates in 3D toward the cursor (perspective), with layered shadow + red
 * glow so it reads as a machine "floating" in space. Lightweight (CSS 3D +
 * a pointer handler, no WebGL), disabled under reduced-motion via CSS.
 */
export function MachineShowcase() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `rotateY(${px * 16}deg) rotateX(${-py * 14}deg) translateZ(0)`;
  };
  const onLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = 'rotateY(-7deg) rotateX(3deg)';
  };

  return (
    <div className="[perspective:1200px]" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div
        ref={cardRef}
        className="relative transition-transform duration-300 ease-out will-change-transform [transform:rotateY(-7deg)_rotateX(3deg)] [transform-style:preserve-3d]"
      >
        {/* glow behind */}
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-signal/30 blur-[50px]" />
        <div className="overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.7)]">
          <Img
            src="/images/showcase-genset-yard.jpg"
            alt="Máy phát điện PMC"
            className="aspect-[4/3] w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        {/* floating spec chip (adds depth) */}
        <div className="absolute -bottom-5 -left-5 rounded-xl bg-white px-5 py-3 shadow-xl [transform:translateZ(60px)]">
          <div className="font-display text-[22px] font-extrabold leading-none text-ink">550 kVA</div>
          <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-paper-mute">Cummins · sẵn kho</div>
        </div>
      </div>
    </div>
  );
}
