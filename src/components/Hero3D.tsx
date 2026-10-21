'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * A real 3D genset volume (not a flat image): a built enclosure box with
 * recessed louver vents, a control panel and a skid base, metal-lit with a
 * brand-red rim. Auto-rotates and can be dragged to spin 360°. Desktop-only,
 * caps DPR, pauses offscreen, disposes on unmount, honors reduced-motion.
 */
export function Hero3D() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = el.clientWidth || 1;
    let h = el.clientHeight || 1;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
    camera.position.set(3.4, 2.1, 4.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    el.appendChild(renderer.domElement);

    const genset = new THREE.Group();
    scene.add(genset);

    const YELLOW = 0xe0a81e;
    const DARK = 0x1c1c1f;
    const bodyMat = new THREE.MeshStandardMaterial({ color: YELLOW, metalness: 0.5, roughness: 0.5 });
    const darkMat = new THREE.MeshStandardMaterial({ color: DARK, metalness: 0.6, roughness: 0.6 });

    const L = 3.0, H = 1.25, D = 1.25; // enclosure
    const body = new THREE.Mesh(new THREE.BoxGeometry(L, H, D), bodyMat);
    body.position.y = 0.1;
    genset.add(body);

    // skid base
    const base = new THREE.Mesh(new THREE.BoxGeometry(L + 0.12, 0.18, D + 0.12), darkMat);
    base.position.y = -0.55;
    genset.add(base);

    // louver vents on both long faces (z = ±D/2)
    const ventMat = new THREE.MeshStandardMaterial({ color: 0x111113, metalness: 0.4, roughness: 0.8 });
    const makeVents = (z: number) => {
      [-0.85, 0.15].forEach((bx) => {
        [0.32, 0.02, -0.28].forEach((by) => {
          const v = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.17, 0.03), ventMat);
          v.position.set(bx, by + 0.1, z);
          genset.add(v);
        });
      });
      // control panel
      const panel = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.6, 0.05), darkMat);
      panel.position.set(0.72, 0.05, z);
      genset.add(panel);
    };
    makeVents(D / 2 + 0.015);
    makeVents(-(D / 2 + 0.015));

    // edge frame lines (thin dark strips at the vertical seams)
    [-L / 2 + 0.04, 0, L / 2 - 0.04].forEach((x) => {
      const seam = new THREE.Mesh(new THREE.BoxGeometry(0.03, H, D + 0.03), darkMat);
      seam.position.set(x, 0.1, 0);
      genset.add(seam);
    });

    genset.rotation.y = -0.5;

    // lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 1.5);
    key.position.set(4, 6, 5);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.5);
    fill.position.set(-4, 2, 3);
    scene.add(fill);
    const rim = new THREE.PointLight(0xe23d2e, 40, 20);
    rim.position.set(-3, 0, -2);
    scene.add(rim);

    // drag to rotate
    let dragging = false;
    let lastX = 0;
    let vel = 0;
    const onDown = (e: PointerEvent) => { dragging = true; lastX = e.clientX; };
    const onUp = () => { dragging = false; };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      vel = dx * 0.005;
      genset.rotation.y += vel;
    };
    const dom = renderer.domElement;
    dom.style.touchAction = 'pan-y';
    dom.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointermove', onMove);

    let raf = 0;
    let running = true;
    const render = () => renderer.render(scene, camera);
    const tick = () => {
      if (!running) return;
      if (!dragging) {
        genset.rotation.y += 0.0032 + vel;
        vel *= 0.93;
      }
      render();
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !reduce) {
        if (!running) { running = true; tick(); }
      } else {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(el);

    if (reduce) render();
    else tick();

    const onResize = () => {
      w = el.clientWidth || 1; h = el.clientHeight || 1;
      camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      dom.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh) { o.geometry.dispose(); (o.material as THREE.Material).dispose(); }
      });
      renderer.dispose();
      if (dom.parentNode === el) el.removeChild(dom);
    };
  }, []);

  return <div ref={ref} className="h-full w-full cursor-grab active:cursor-grabbing" aria-hidden />;
}
