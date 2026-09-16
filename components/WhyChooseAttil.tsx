"use client";

import { aboutReasons } from "@/lib/aboutData";
import { EASING } from "@/lib/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WhyChooseAttil() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-12% 0px" });

  return (
    <section
      ref={ref}
      data-cursor="dark"
      className="relative overflow-hidden bg-gradient-to-br from-deep/80 via-navy to-purple/20 px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.9, ease: EASING.outCubic }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script text-4xl text-gold">The Attil difference</p>
          <h2 className="mt-3 font-serif text-4xl text-cream md:text-6xl">
            Why Guests Choose Attil
          </h2>
          <p className="mt-5 text-cream/70">
            Thoughtful ingredients, skilled hands, and a generous welcome shape
            every visit.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {aboutReasons.map((reason, index) => {
            const fromLeft = index % 2 === 0;
            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
                animate={inView ? { opacity: 1, x: 0 } : undefined}
                transition={{
                  delay: 0.25 + index * 0.25,
                  duration: 0.8,
                  ease: EASING.outCubic,
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group rounded-3xl border border-gold/20 bg-cream/5 p-7 backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(15,52,96,0.45)] md:p-8"
              >
                <motion.div
                  initial={{ rotate: 0, scale: 0.7 }}
                  animate={inView ? { rotate: 360, scale: 1 } : undefined}
                  transition={{
                    delay: 0.25 + index * 0.25,
                    duration: 0.8,
                    ease: EASING.outCubic,
                  }}
                  whileHover={{ rotate: 360, transition: { duration: 1.8, repeat: Infinity, ease: "linear" } }}
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-rose font-serif text-2xl text-navy shadow-[0_8px_24px_rgba(212,175,55,0.22)]"
                >
                  {reason.icon}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : undefined}
                  transition={{
                    delay: 0.65 + index * 0.25,
                    duration: 0.65,
                    ease: EASING.outCubic,
                  }}
                >
                  <h3 className="font-serif text-2xl text-gold md:text-3xl">
                    {reason.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-cream/75">
                    {reason.description}
                  </p>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
