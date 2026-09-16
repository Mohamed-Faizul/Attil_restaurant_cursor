"use client";

import { bounceIn, staggerContainer } from "@/lib/animations";
import { categories, menuItems, type CuisineCategory, type MenuItem } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useCart } from "./CartProvider";
import MagneticButton from "./MagneticButton";

export default function MenuGrid({
  initialCategory,
}: {
  initialCategory?: CuisineCategory | "All";
}) {
  const [filter, setFilter] = useState<CuisineCategory | "All">(
    initialCategory ?? "All",
  );
  const { add } = useCart();
  const [toast, setToast] = useState("");

  const items = useMemo(
    () =>
      filter === "All"
        ? menuItems
        : menuItems.filter((item) => item.category === filter),
    [filter],
  );

  const onAdd = (item: MenuItem) => {
    add(item);
    setToast(`${item.name} added`);
    setTimeout(() => setToast(""), 1800);
  };

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {(["All", ...categories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.18em] transition duration-500 ${
              filter === cat
                ? "bg-gold text-navy shadow-[0_8px_24px_rgba(212,175,55,0.35)]"
                : "border border-white/15 text-cream hover:border-gold hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid gap-8 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <motion.article
                layout
                key={item.id}
                variants={bounceIn}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`food-hover group grid overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2 ${
                  fromLeft ? "" : "md:[&>div:first-child]:order-2"
                }`}
              >
                <div className="relative min-h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.08]"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/80 via-transparent to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100">
                    <p className="text-sm text-cream">{item.description}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-3 p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-teal">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-3xl text-cream">{item.name}</h3>
                  <p className="text-sm text-cream/65 md:hidden">{item.description}</p>
                  <p className="text-xl text-gold transition group-hover:text-rose">
                    ₹{item.price}
                  </p>
                  <MagneticButton
                    type="button"
                    onClick={() => onAdd(item)}
                    className="mt-2 w-fit scale-95 rounded-full bg-gradient-to-r from-rose to-gold px-5 py-2 text-xs uppercase tracking-widest text-navy opacity-90 transition group-hover:scale-100"
                  >
                    Add to cart
                  </MagneticButton>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 rounded-full bg-gold px-5 py-3 text-sm text-navy shadow-xl"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
