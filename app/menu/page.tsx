import MenuGrid from "@/components/MenuGrid";
import PageHero from "@/components/PageHero";
import { images } from "@/lib/data";

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Six kitchens, one table"
        title="The Attil menu"
        subtitle="Filter by cuisine. Hover a plate to reveal the story. Add favourites to your cart before you arrive."
        image={images.interiors[3]}
      />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <MenuGrid />
      </section>
    </>
  );
}
