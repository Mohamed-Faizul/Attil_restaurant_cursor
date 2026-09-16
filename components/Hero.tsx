"use client";

import { images, restaurant } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MagneticButton from "./MagneticButton";

const slides = [
  images.interiors[0],
  images.interiors[1],
  images.interiors[2],
  images.banner,
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={ref}
      data-cursor="dark"
      className="relative isolate h-screen min-h-[640px] overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {slides.map((src, i) => (
          <motion.div
            key={src}
            initial={false}
            animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.08 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              className="ken-burns object-cover"
              sizes="100vw"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-midnight/45 to-navy/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,26,46,0.55)_100%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 font-script text-3xl text-gold md:text-5xl"
        >
          Welcome to Theni&apos;s pride
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl leading-tight text-cream md:text-7xl lg:text-8xl"
        >
          <span className="gradient-text">{restaurant.name}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-base text-cream/85 md:text-xl"
        >
          A symphony of global flavors — South Indian, North Indian, Chinese,
          Tandoor, Continental, and pantry indulgences, crafted by specialised
          chefs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/menu">
            <MagneticButton className="rounded-full bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-navy">
              Explore menu
            </MagneticButton>
          </Link>
          <Link href="/contact">
            <MagneticButton className="rounded-full border border-cream/40 bg-white/5 px-8 py-3 text-sm uppercase tracking-[0.2em] text-cream backdrop-blur-md">
              Book a table
            </MagneticButton>
          </Link>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-gold"
      >
        Scroll
      </motion.div>
    </section>
  );
}
