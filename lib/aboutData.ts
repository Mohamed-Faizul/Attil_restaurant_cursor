export type AboutReason = {
  title: string;
  description: string;
  icon: string;
};

export type AboutReview = {
  name: string;
  role: string;
  rating: number;
  quote: string;
  initials: string;
};

export type AboutStat = {
  label: string;
  value: number;
  suffix: string;
  decimals: number;
};

export const aboutReasons: AboutReason[] = [
  {
    title: "Premium Quality Ingredients",
    description: "Fresh ingredients sourced from trusted suppliers go into every plate.",
    icon: "✦",
  },
  {
    title: "Expert Chefs & Culinary Excellence",
    description: "Trained culinary professionals bring years of experience to every kitchen.",
    icon: "♨",
  },
  {
    title: "Authentic Recipes & Traditional Methods",
    description: "Time-honored recipes and traditional methods keep every flavor honest.",
    icon: "◈",
  },
  {
    title: "Welcoming Ambiance & Hospitality",
    description: "Comfortable spaces and thoughtful hospitality make every occasion feel easy.",
    icon: "❖",
  },
  {
    title: "Fresh & Hygienic Preparation",
    description: "Strict food safety and cleanliness standards guide every preparation.",
    icon: "✧",
  },
  {
    title: "Fast & Reliable Service",
    description: "Fast, courteous service keeps your table moving at the right pace.",
    icon: "➜",
  },
];

export const aboutStats: AboutStat[] = [
  { label: "Overall rating", value: 4.8, suffix: "/5.0", decimals: 1 },
  { label: "Guest reviews", value: 500, suffix: "+", decimals: 0 },
  { label: "Customer satisfaction", value: 98, suffix: "%", decimals: 0 },
  { label: "Cuisine kitchens", value: 6, suffix: "", decimals: 0 },
];

export const aboutReviews: AboutReview[] = [
  {
    name: "Priya S.",
    role: "Weekend guest",
    rating: 5,
    quote: "The flavors were beautiful, the service was warm, and everyone at our table found a favorite dish.",
    initials: "PS",
  },
  {
    name: "Arun K.",
    role: "Family diner",
    rating: 5,
    quote: "Attil makes a family meal feel special. The food arrived fresh, generous, and full of character.",
    initials: "AK",
  },
  {
    name: "Meera R.",
    role: "Celebration guest",
    rating: 5,
    quote: "A welcoming place for a celebration, with plenty of choice and a team that genuinely cares.",
    initials: "MR",
  },
];
