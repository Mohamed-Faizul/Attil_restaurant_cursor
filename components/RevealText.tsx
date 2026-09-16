"use client";

import { motion } from "framer-motion";
import { staggerContainer, wordReveal } from "@/lib/animations";

export default function RevealText({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      <motion.span
        className="flex flex-wrap justify-inherit gap-x-[0.35em]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        style={{ perspective: 800 }}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={wordReveal}
              transition={{ delay: delay + i * 0.04 }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
