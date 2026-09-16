"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import MagneticButton from "./MagneticButton";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section data-cursor="dark" className="px-6 py-24 md:px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mx-auto flex min-h-[50vh] max-w-5xl flex-col items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-rose/30 via-deep to-gold/20 px-6 text-center"
      >
        <p className="font-script text-4xl text-gold">Stay in the circle</p>
        <h2 className="mt-2 font-serif text-4xl text-cream md:text-5xl">
          Evening notes & table drops
        </h2>
        {done ? (
          <p className="mt-8 text-teal">You are on the list. See you at Attil.</p>
        ) : (
          <form
            className="mt-10 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setDone(true);
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 rounded-full border border-white/20 bg-navy/40 px-6 py-3 text-cream placeholder:text-cream/40 transition duration-500"
            />
            <MagneticButton
              type="submit"
              className="rounded-full bg-gold px-8 py-3 text-sm uppercase tracking-[0.2em] text-navy"
            >
              Join
            </MagneticButton>
          </form>
        )}
      </motion.div>
    </section>
  );
}
