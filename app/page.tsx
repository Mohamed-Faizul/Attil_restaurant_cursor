import FeaturedDishes from "@/components/FeaturedDishes";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import StatsBand from "@/components/StatsBand";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <WhyChooseUs />
      <StatsBand />
      <ReviewsCarousel />
      <Newsletter />
    </>
  );
}
