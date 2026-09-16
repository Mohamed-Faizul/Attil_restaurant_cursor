"use client";

import { restaurant } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Footer() {
  return (
    <footer
      data-cursor="dark"
      className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-deep to-navy"
    >
      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-purple/20 blur-3xl" />
      <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 md:px-8"
      >
        <motion.div variants={fadeUp} className="space-y-4">
          <div className="relative h-16 w-16">
            <Image src={restaurant.logo} alt="" fill className="object-contain" />
          </div>
          <p className="font-serif text-2xl text-cream">{restaurant.name}</p>
          <p className="text-sm text-cream/70">{restaurant.tagline}</p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Visit</p>
          <p className="text-sm leading-relaxed text-cream/80">
            {restaurant.address.full}
          </p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Contact</p>
          <a href={restaurant.phoneHref} className="block text-cream hover:text-gold">
            {restaurant.phoneDisplay}
          </a>
          <a
            href={`mailto:${restaurant.email}`}
            className="mt-2 block text-sm text-cream/80 hover:text-gold"
          >
            {restaurant.email}
          </a>
          <p className="mt-4 text-sm text-cream/70">{restaurant.hoursNote}</p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Social</p>
          <a
            href={restaurant.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-cream transition hover:text-rose"
          >
            Instagram {restaurant.instagramHandle}
          </a>
          <div className="mt-6 flex flex-col gap-2 text-sm">
            <Link href="/menu" className="hover:text-gold">
              Menu
            </Link>
            <Link href="/about" className="hover:text-gold">
              About
            </Link>
            <Link href="/contact" className="hover:text-gold">
              Contact
            </Link>
          </div>
        </motion.div>
      </motion.div>
      <p className="border-t border-white/10 py-6 text-center text-xs tracking-widest text-cream/50">
        © {new Date().getFullYear()} {restaurant.name}. Andipatti · Theni.
      </p>
    </footer>
  );
}
