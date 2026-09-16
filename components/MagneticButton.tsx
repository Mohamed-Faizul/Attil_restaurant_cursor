"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

type Props = HTMLMotionProps<"button"> & {
  children: ReactNode;
  className?: string;
};

export default function MagneticButton({
  children,
  className = "",
  onClick,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.28);
    y.set((e.clientY - r.top - r.height / 2) * 0.28);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const ripple = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px;border-radius:999px;background:rgba(245,245,245,.35);transform:scale(0);animation:ripple .6s ease-out forwards;pointer-events:none;`;
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 650);
    onClick?.(e);
  };

  return (
    <motion.button
      ref={ref}
      data-magnetic
      style={{ x: sx, y: sy }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.35 }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onClick={ripple}
      className={`relative overflow-hidden ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
