"use client";

import { NAV_LINKS } from "@/lib/constants";
import { restaurant } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-navy/95 via-midnight/95 to-deep/95 shadow-[0_12px_40px_rgba(15,52,96,0.45)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-gold/50 transition duration-500 group-hover:scale-105 group-hover:ring-rose">
            <Image
              src={restaurant.logo}
              alt={restaurant.name}
              fill
              className="object-contain p-1"
              sizes="48px"
              priority
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-lg tracking-wide text-cream">
              Attil
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold">
              Multi Cuisine
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm uppercase tracking-[0.18em] text-cream/80 transition duration-300 hover:text-gold"
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-gold to-rose transition-all duration-500 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {count > 0 && (
            <Link
              href="/menu"
              className="hidden rounded-full border border-gold/40 px-3 py-1 text-xs uppercase tracking-widest text-gold md:inline"
            >
              Cart {count}
            </Link>
          )}
          <Link href="/contact" className="hidden sm:block">
            <MagneticButton className="rounded-full bg-gradient-to-r from-rose to-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy shadow-[0_8px_30px_rgba(233,69,96,0.35)]">
              Reserve
            </MagneticButton>
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-0.5 w-6 bg-cream transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-gold transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-cream transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden bg-navy/95 lg:hidden"
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-serif text-2xl text-cream"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
