"use client";

import { restaurant } from "@/lib/data";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MagneticButton from "./MagneticButton";

type Fields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>();

  return (
    <form
      onSubmit={handleSubmit(() => setSent(true))}
      className="space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md"
    >
      {sent ? (
        <p className="font-serif text-2xl text-gold">
          Message received. Call us anytime at {restaurant.phoneDisplay}.
        </p>
      ) : (
        <>
          <label className="block text-xs uppercase tracking-[0.2em] text-gold">
            Name
            <input
              className={`mt-2 w-full rounded-2xl border bg-navy/40 px-4 py-3 text-base normal-case tracking-normal text-cream ${
                errors.name ? "shake border-rose" : "border-white/15"
              }`}
              {...register("name", { required: true })}
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.2em] text-gold">
            Email
            <input
              type="email"
              className={`mt-2 w-full rounded-2xl border bg-navy/40 px-4 py-3 text-base normal-case tracking-normal text-cream ${
                errors.email ? "shake border-rose" : "border-white/15"
              }`}
              {...register("email", { required: true })}
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.2em] text-gold">
            Phone
            <input
              className={`mt-2 w-full rounded-2xl border bg-navy/40 px-4 py-3 text-base normal-case tracking-normal text-cream ${
                errors.phone ? "shake border-rose" : "border-white/15"
              }`}
              {...register("phone", { required: true })}
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.2em] text-gold">
            Message
            <textarea
              rows={5}
              className={`mt-2 w-full rounded-2xl border bg-navy/40 px-4 py-3 text-base normal-case tracking-normal text-cream ${
                errors.message ? "shake border-rose" : "border-white/15"
              }`}
              {...register("message", { required: true })}
            />
          </label>
          <MagneticButton
            type="submit"
            className="w-full rounded-full bg-gold py-3 text-sm uppercase tracking-[0.2em] text-navy"
          >
            Send
          </MagneticButton>
        </>
      )}
    </form>
  );
}
