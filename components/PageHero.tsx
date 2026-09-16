"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RevealText from "./RevealText";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative isolate flex h-[70vh] min-h-[420px] items-end overflow-hidden">
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image src={image} alt="" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-midnight/30" />
      </motion.div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs uppercase tracking-[0.4em] text-gold"
        >
          {eyebrow}
        </motion.p>
        <RevealText
          text={title}
          as="h1"
          className="mt-3 font-serif text-5xl text-cream md:text-7xl"
        />
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-4 max-w-xl text-cream/80"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
