"use client";

import { fadeUp, staggerContainer } from "@/lib/animations";
import { whyChoose } from "@/lib/data";
import { motion } from "framer-motion";
import RevealText from "./RevealText";

const icons = ["✧", "◈", "✦", "❖"];

export default function WhyChooseUs() {
  return (
    <section
      data-cursor="dark"
      className="relative min-h-screen bg-gradient-to-br from-deep/80 via-navy to-purple/20 px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <RevealText
          text="Why guests choose Attil"
          className="text-center font-serif text-4xl text-cream md:text-6xl"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {whyChoose.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-3xl border border-gold/20 bg-cream/5 p-8 backdrop-blur-md"
            >
              <motion.div
                animate={{ rotate: [0, 8, -6, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
                className="icon-pulse mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-rose font-serif text-2xl text-navy"
              >
                {icons[i]}
              </motion.div>
              <h3 className="font-serif text-3xl text-gold">{item.title}</h3>
              <p className="mt-3 text-cream/75">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
