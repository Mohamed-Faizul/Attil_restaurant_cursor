"use client";

import { restaurant, reviews } from "@/lib/data";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import RevealText from "./RevealText";

export default function ReviewsCarousel() {
  return (
    <section
      data-cursor="dark"
      className="relative min-h-[80vh] px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">
          {restaurant.rating} ★ · {restaurant.reviewCount} Google reviews
        </p>
        <RevealText
          text="What your guests say"
          className="mt-4 font-serif text-4xl text-cream md:text-6xl"
        />
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="mt-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.name}>
              <blockquote className="rounded-[2rem] border border-gold/20 bg-white/5 px-8 py-12 backdrop-blur-md">
                <p className="font-serif text-2xl leading-relaxed text-cream md:text-3xl">
                  “{review.text}”
                </p>
                <footer className="mt-8 text-sm uppercase tracking-[0.3em] text-gold">
                  {review.name} · {review.time} · {"★".repeat(review.rating)}
                </footer>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
