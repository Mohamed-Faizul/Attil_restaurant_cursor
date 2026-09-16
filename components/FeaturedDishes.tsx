"use client";

import { bounceIn, staggerContainer } from "@/lib/animations";
import { featuredDishes } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RevealText from "./RevealText";

export default function FeaturedDishes() {
  return (
    <section
      data-cursor="dark"
      className="relative min-h-screen overflow-hidden px-6 py-24 md:px-10"
    >
      <div className="pointer-events-none absolute -left-10 top-20 h-72 w-72 rounded-full bg-rose/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <RevealText
          text="Signature specialties"
          className="font-serif text-4xl text-cream md:text-6xl"
        />
        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-4 max-w-xl text-cream/70"
        >
          Chef’s special creations that have won hearts — biryani, kebabs, and
          Arabian fire.
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featuredDishes.map((dish) => (
            <motion.article
              key={dish.id}
              variants={bounceIn}
              whileHover={{ y: -12, scale: 1.03 }}
              className="food-hover group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_50px_rgba(15,52,96,0.35)] backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_30px_70px_rgba(233,69,96,0.28)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80" />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="font-serif text-2xl text-gold">{dish.name}</h3>
                <p className="text-sm text-cream/70">{dish.description}</p>
                <p className="text-rose">₹{dish.price}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-block border-b border-gold pb-1 text-sm uppercase tracking-[0.25em] text-gold transition hover:text-rose"
          >
            Full menu
          </Link>
        </div>
      </div>
    </section>
  );
}
