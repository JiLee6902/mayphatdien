'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Lightweight WebGL accent for the homepage hero: a slowly rotating metallic
 * knot lit with brand-red rim lights, with subtle mouse parallax. Desktop-only
 * (rendered inside an lg: container), caps pixel ratio, pauses when offscreen /
 * tab hidden, and fully disposes on unmount. Respects reduced-motion.
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
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    el.appendChild(renderer.domElement);

    const geo = new THREE.TorusKnotGeometry(1.05, 0.32, 200, 32);
    const mat = new THREE.MeshStandardMaterial({ color: 0x17181c, metalness: 0.95, roughness: 0.3 });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const key = new THREE.DirectionalLight(0xffffff, 1.2);
    key.position.set(3, 4, 5);
    scene.add(key);
    const rim = new THREE.PointLight(0xe23d2e, 70, 22);
    rim.position.set(-3.5, -1, 2.5);
    scene.add(rim);
    const rim2 = new THREE.PointLight(0xff6a4d, 34, 22);
    rim2.position.set(2.5, -2.5, 3);
    scene.add(rim2);

    let mx = 0;
    let my = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const clock = new THREE.Clock();
    let raf = 0;
    let running = true;
    const tick = () => {
      if (!running) return;
      const t = clock.getElapsedTime();
      mesh.rotation.y = t * 0.22 + mx * 0.6;
      mesh.rotation.x = t * 0.1 + my * 0.4;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };

    // Pause when the hero scrolls out of view (perf).
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !reduce) {
        if (!running) { running = true; tick(); }
      } else {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(el);

    if (reduce) {
      mesh.rotation.set(0.4, 0.7, 0);
      renderer.render(scene, camera);
    } else {
      tick();
    }

    const onResize = () => {
      w = el.clientWidth || 1;
      h = el.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} className="h-full w-full" aria-hidden />;
}
