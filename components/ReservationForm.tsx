"use client";

import { restaurant } from "@/lib/data";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MagneticButton from "./MagneticButton";

type Fields = {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  notes: string;
};

export default function ReservationForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>();

  return (
    <form
      onSubmit={handleSubmit(() => setSent(true))}
      className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md md:grid-cols-2"
    >
      {sent ? (
        <p className="font-serif text-3xl text-gold md:col-span-2">
          Table held in spirit. Confirm on {restaurant.phoneDisplay} and we will
          set your evening.
        </p>
      ) : (
        <>
          <label className="text-xs uppercase tracking-[0.2em] text-gold">
            Name
            <input
              className={`mt-2 w-full rounded-2xl border bg-navy/40 px-4 py-3 text-base normal-case tracking-normal text-cream ${errors.name ? "shake border-rose" : "border-white/15"}`}
              {...register("name", { required: true })}
            />
          </label>
          <label className="text-xs uppercase tracking-[0.2em] text-gold">
            Phone
            <input
              className={`mt-2 w-full rounded-2xl border bg-navy/40 px-4 py-3 text-base normal-case tracking-normal text-cream ${errors.phone ? "shake border-rose" : "border-white/15"}`}
              {...register("phone", { required: true })}
            />
          </label>
          <label className="text-xs uppercase tracking-[0.2em] text-gold">
            Guests
            <select
              className="mt-2 w-full rounded-2xl border border-white/15 bg-navy/40 px-4 py-3 text-base normal-case tracking-normal text-cream"
              {...register("guests", { required: true })}
            >
              {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </label>
          <label className="text-xs uppercase tracking-[0.2em] text-gold">
            Date
            <input
              type="date"
              className={`mt-2 w-full rounded-2xl border bg-navy/40 px-4 py-3 text-base normal-case tracking-normal text-cream ${errors.date ? "shake border-rose" : "border-white/15"}`}
              {...register("date", { required: true })}
            />
          </label>
          <label className="text-xs uppercase tracking-[0.2em] text-gold">
            Time
            <input
              type="time"
              className={`mt-2 w-full rounded-2xl border bg-navy/40 px-4 py-3 text-base normal-case tracking-normal text-cream ${errors.time ? "shake border-rose" : "border-white/15"}`}
              {...register("time", { required: true })}
            />
          </label>
          <label className="text-xs uppercase tracking-[0.2em] text-gold">
            Occasion
            <input
              placeholder="Dinner, party hall, gang treat…"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-navy/40 px-4 py-3 text-base normal-case tracking-normal text-cream placeholder:text-cream/40"
              {...register("notes")}
            />
          </label>
          <div className="md:col-span-2">
            <MagneticButton
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-gold to-rose py-3 text-sm uppercase tracking-[0.2em] text-navy"
            >
              Request reservation
            </MagneticButton>
          </div>
        </>
      )}
    </form>
  );
}
