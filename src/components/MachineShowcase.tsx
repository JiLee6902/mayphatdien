'use client';

import { useRef } from 'react';
import { Img } from './ui/Img';

/**
 * The hero machine as a floating 3D object: a background-removed cutout of the
 * real genset that tilts in 3D toward the cursor (perspective), with a red
 * glow and a shadow that follows the machine's silhouette, plus a spec chip
 * popped forward on translateZ. Pure CSS 3D (no WebGL), lg-only.
 */
export function MachineShowcase() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `rotateY(${px * 18}deg) rotateX(${-py * 12}deg)`;
  };
  const onLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = 'rotateY(-8deg) rotateX(4deg)';
  };

  return (
    <div className="[perspective:1300px]" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div
        ref={cardRef}
        className="relative transition-transform duration-300 ease-out will-change-transform [transform:rotateY(-8deg)_rotateX(4deg)] [transform-style:preserve-3d]"
      >
        {/* red glow pool */}
        <div className="pointer-events-none absolute inset-x-4 bottom-2 top-10 -z-10 rounded-full bg-signal/30 blur-[55px]" />
        {/* contact shadow on the ground */}
        <div className="pointer-events-none absolute -bottom-2 left-1/2 h-8 w-4/5 -translate-x-1/2 rounded-[50%] bg-black/55 blur-xl" />

        <Img
          src="/images/genset-cutout.png"
          alt="Máy phát điện PMC"
          className="w-full [filter:drop-shadow(0_26px_34px_rgba(0,0,0,0.55))]"
          loading="eager"
          fetchPriority="high"
        />

        {/* floating spec chip, popped forward */}
        <div className="absolute -bottom-3 -left-4 rounded-xl bg-white px-5 py-3 shadow-xl [transform:translateZ(70px)]">
          <div className="font-display text-[22px] font-extrabold leading-none text-ink">550 kVA</div>
          <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-paper-mute">Cummins · sẵn kho</div>
        </div>
      </div>
    </div>
  );
}
