"use client";

import { aboutReviews, aboutStats } from "@/lib/aboutData";
import { EASING } from "@/lib/constants";
import { animate, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

function Counter({
  value,
  suffix,
  decimals,
  active,
}: {
  value: number;
  suffix: string;
  decimals: number;
  active: boolean;
}) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: EASING.outCubic,
      onUpdate: (nextValue) => setDisplay(nextValue.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [active, decimals, value]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

function ReviewStars({ rating, active }: { rating: number; active: boolean }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0.2, scale: 0.7 }}
          animate={active ? { opacity: index < rating ? 1 : 0.25, scale: 1 } : undefined}
          transition={{ delay: index * 0.05, duration: 0.35, ease: EASING.outCubic }}
          className={index < rating ? "text-gold" : "text-cream/30"}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
}

export default function ReviewsRatings() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-12% 0px" });

  return (
    <section ref={sectionRef} data-cursor="dark" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.9, ease: EASING.outCubic }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script text-4xl text-gold">A table worth returning to</p>
          <h2 className="mt-3 font-serif text-4xl text-cream md:text-6xl">
            Our Guests Love Us
          </h2>
          <p className="mt-5 text-cream/70">
            The best measure of Attil is how often guests come back and who they
            bring with them.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: index * 0.15, duration: 0.8, ease: EASING.outCubic }}
              className="rounded-3xl border border-gold/20 bg-gradient-to-br from-midnight/80 to-deep/60 p-7 text-center"
            >
              <p className="font-serif text-5xl text-gold">
                <Counter {...stat} active={inView} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-cream/65">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {aboutReviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.65 + index * 0.25, duration: 0.8, ease: EASING.outCubic }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition-shadow duration-300 hover:border-gold/30 hover:shadow-[0_18px_50px_rgba(15,52,96,0.45)]"
            >
              <ReviewStars rating={review.rating} active={inView} />
              <blockquote className="mt-6 font-serif text-2xl leading-relaxed text-cream">
                “{review.quote}”
              </blockquote>
              <footer className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold to-rose text-sm font-semibold text-navy">
                  {review.initials}
                </span>
                <span>
                  <span className="block text-sm text-cream">{review.name}</span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-cream/50">
                    {review.role}
                  </span>
                </span>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
