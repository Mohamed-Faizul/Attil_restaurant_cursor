"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const trail = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (fine) document.body.classList.add("has-custom-cursor");
    return () => document.body.classList.remove("has-custom-cursor");
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let tx = 0;
    let ty = 0;
    let hovering = false;
    let dark = true;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const target = e.target as HTMLElement | null;
      hovering = Boolean(
        target?.closest("a, button, input, textarea, select, [data-magnetic]"),
      );
      const section = target?.closest("[data-cursor]") as HTMLElement | null;
      dark = section?.dataset.cursor !== "light";
    };

    const loop = () => {
      rx += (x - rx) * 0.22;
      ry += (y - ry) * 0.22;
      tx += (x - tx) * 0.08;
      ty += (y - ty) * 0.08;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
        dot.current.style.background = hovering
          ? "#d4af37"
          : dark
            ? "#f5f5f5"
            : "#e94560";
      }
      if (ring.current) {
        const size = hovering ? 52 : 28;
        ring.current.style.transform = `translate3d(${rx - size / 2}px, ${ry - size / 2}px, 0)`;
        ring.current.style.width = `${size}px`;
        ring.current.style.height = `${size}px`;
        ring.current.style.borderColor = hovering ? "#e94560" : "#d4af37";
      }
      if (trail.current) {
        const dx = x - tx;
        const dy = y - ty;
        const dist = Math.min(Math.hypot(dx, dy), 80);
        const angle = Math.atan2(dy, dx);
        trail.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${angle}rad)`;
        trail.current.style.width = `${dist}px`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={trail}
        className="pointer-events-none fixed left-0 top-0 z-[200] h-px origin-left bg-gradient-to-r from-gold/0 via-gold/50 to-rose/70"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[201] rounded-full border border-gold/80 transition-[width,height] duration-300"
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[202] h-2 w-2 rounded-full bg-cream mix-blend-difference"
      />
    </>
  );
}
