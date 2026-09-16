import PageHero from "@/components/PageHero";
import ReviewsRatings from "@/components/ReviewsRatings";
import WhyChooseAttil from "@/components/WhyChooseAttil";
import { images } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Attil story"
        title="About Attil"
        subtitle="A joyful gathering place where specialised kitchens bring global flavors to Andipatti."
        image={images.outlook}
      />
      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10">
        <p className="font-script text-4xl text-gold">More than a meal</p>
        <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">
          Many cuisines, one generous table.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-cream/75">
          Attil brings South Indian, North Indian, Chinese, Tandoor, and
          Continental favorites together under one roof. Every plate is made
          for sharing, celebrating, and making the next visit feel familiar.
        </p>
      </section>
      <WhyChooseAttil />
      <ReviewsRatings />
    </>
  );
}
