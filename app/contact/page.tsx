import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import ReservationForm from "@/components/ReservationForm";
import { images, restaurant } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Find your way to Attil"
        title="Contact"
        subtitle="Come hungry, stay curious, and let our kitchens take you around the world."
        image={images.interiors[0]}
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.1fr] md:px-10">
        <div>
          <p className="font-script text-4xl text-gold">Let&apos;s connect</p>
          <h2 className="mt-2 font-serif text-4xl text-cream">
            A table, a takeaway, or a quick hello.
          </h2>
          <div className="mt-8 space-y-6 text-cream/75">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Visit</p>
              <p className="mt-2 leading-relaxed">{restaurant.address.full}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Call or email</p>
              <a href={restaurant.phoneHref} className="mt-2 block text-cream hover:text-gold">
                {restaurant.phoneDisplay}
              </a>
              <a
                href={`mailto:${restaurant.email}`}
                className="mt-1 block hover:text-gold"
              >
                {restaurant.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Hours</p>
              <p className="mt-2">{restaurant.hoursNote}</p>
              <ul className="mt-4 space-y-3 text-sm">
                {restaurant.hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex justify-between gap-4 border-b border-white/10 py-2"
                  >
                    <span>{row.day}</span>
                    <span className="text-right text-gold">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>

      <section className="mx-auto grid min-h-[70vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
        <div>
          <p className="font-script text-4xl text-gold">Gather your gang</p>
          <h2 className="mt-2 font-serif text-4xl text-cream">
            Pay for 5, dine as 6. Pay for 10, dine as 12.
          </h2>
          <p className="mt-4 text-cream/75">
            Prefer a call? Reach the restaurant on{" "}
            <a href={restaurant.phoneHref} className="text-gold underline">
              {restaurant.phoneDisplay}
            </a>
            .
          </p>
          <ul className="mt-8 space-y-3 text-sm text-cream/80">
            {restaurant.hours.map((row) => (
              <li key={row.day} className="flex justify-between border-b border-white/10 py-2">
                <span>{row.day}</span>
                <span className="text-gold">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <ReservationForm />
      </section>
    </>
  );
}
