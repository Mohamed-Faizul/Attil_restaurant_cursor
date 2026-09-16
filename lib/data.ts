const MEDIA = "https://attilmulticuisinerestaurant.com/wp-content/uploads";

export const restaurant = {
  name: "Attil Multi Cuisine Restaurant",
  shortName: "Attil",
  tagline: "A symphony of global flavors",
  phone: "7094479447",
  phoneDisplay: "+91 70944 79447",
  phoneHref: "tel:+917094479447",
  email: "hello@attilmulticuisinerestaurant.com",
  instagram: "https://www.instagram.com/attil_multicuisine/?hl=en",
  instagramHandle: "@attil_multicuisine",
  zomatoNote: "Taste the flavors of Attil, now on Zomato.",
  address: {
    line1: "36, Theni Madurai Main Road",
    line2: "Junction, Near Jakkampatti",
    city: "Andipatti, Tamil Nadu – 625512",
    full: "36, Theni Madurai Main Road, Junction, Near Jakkampatti, Andipatti, Tamil Nadu – 625512",
  },
  hoursNote:
    "Daily dining. Call to confirm today’s kitchen hours and party-hall availability.",
  hours: [
    { day: "Monday – Sunday", time: "Open for lunch & dinner" },
    { day: "Reservations", time: "Recommended for weekends" },
    { day: "Party hall", time: "By prior booking" },
  ],
  rating: 4.3,
  reviewCount: 263,
  logo: `${MEDIA}/2025/08/Attil-Logo2.png`,
} as const;

export const images = {
  logo: restaurant.logo,
  outlook: `${MEDIA}/2025/09/ATTIL-OUTLOOK.webp`,
  banner: `${MEDIA}/2025/09/banner-new.png`,
  interiors: [
    `${MEDIA}/2026/03/SID06668_resized.jpg`,
    `${MEDIA}/2026/03/SID06726_resized.jpg`,
    `${MEDIA}/2026/03/SID06798_resized.jpg`,
    `${MEDIA}/2026/03/attil-food-2.jpg`,
    `${MEDIA}/2026/03/attil-food-5.jpg`,
    `${MEDIA}/2026/03/attil-food-8.jpg`,
  ],
  dishes: {
    seekh: `${MEDIA}/2025/09/Mutton-seekah-kababe.png`,
    octopus: `${MEDIA}/2025/09/octopus-chicken-fry-1-scaled.jpg`,
    alfaham: `${MEDIA}/2025/09/100-arabian-alfaham-chicken-masala.webp`,
    tikka: `${MEDIA}/2025/09/Cilantro-Lime-Chicken-3.jpg`,
  },
} as const;

export type CuisineCategory =
  | "South Indian"
  | "North Indian"
  | "Chinese"
  | "Tandoor"
  | "Continental"
  | "Pantry & Beverages";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CuisineCategory;
  image: string;
  signature?: boolean;
};

export const featuredDishes: MenuItem[] = [
  {
    id: "attil-briyani",
    name: "Attil Briyani",
    description:
      "Aromatic basmati rice cooked with tender meat and Attil’s signature blend of spices — our most celebrated dish.",
    price: 349,
    category: "South Indian",
    image: images.interiors[3],
    signature: true,
  },
  {
    id: "mutton-seekh",
    name: "Mutton Seekh Kebab",
    description:
      "Juicy minced mutton kebabs grilled to smoky perfection on skewers.",
    price: 429,
    category: "Tandoor",
    image: images.dishes.seekh,
    signature: true,
  },
  {
    id: "octopus-chicken",
    name: "Octopus Chicken",
    description:
      "Tender chicken cooked with a spicy twist, inspired by octopus-style seasoning.",
    price: 389,
    category: "North Indian",
    image: images.dishes.octopus,
    signature: true,
  },
  {
    id: "arabian-alfaham",
    name: "Arabian Al Faham",
    description:
      "Succulent chicken infused with rich, flavorful masala spices.",
    price: 459,
    category: "Tandoor",
    image: images.dishes.alfaham,
    signature: true,
  },
];

export const menuItems: MenuItem[] = [
  ...featuredDishes,
  {
    id: "special-tikka",
    name: "Attil Special Tikka",
    description:
      "Smoky and spicy tikka with our special blend of herbs and spices.",
    price: 369,
    category: "Tandoor",
    image: images.dishes.tikka,
    signature: true,
  },
  {
    id: "masala-dosai",
    name: "Masala Dosai",
    description: "Crisp fermented crepe with spiced potato, a South Indian classic.",
    price: 149,
    category: "South Indian",
    image: images.interiors[0],
  },
  {
    id: "chicken-kari-dosa",
    name: "Chicken Kari Dosa",
    description: "Dosa folded over a fragrant chicken curry filling.",
    price: 199,
    category: "South Indian",
    image: images.interiors[1],
  },
  {
    id: "thattu-idly-chicken",
    name: "Thattu Idly Chicken Curry",
    description: "Soft thattu idly served with a robust chicken curry.",
    price: 179,
    category: "South Indian",
    image: images.interiors[4],
  },
  {
    id: "mutton-kari-dosai",
    name: "Mutton Kari Dosai",
    description: "Golden dosa paired with slow-cooked mutton kari.",
    price: 229,
    category: "South Indian",
    image: images.interiors[5],
  },
  {
    id: "veg-thali",
    name: "Veg Thali",
    description: "A complete South Indian vegetarian meal, plated with care.",
    price: 249,
    category: "South Indian",
    image: images.interiors[2],
  },
  {
    id: "punjabi-chicken",
    name: "Punjabi Chicken",
    description: "Rich North Indian curry with a bold Punjabi spice profile.",
    price: 329,
    category: "North Indian",
    image: images.dishes.octopus,
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    description: "Velvety tomato-butter gravy with tender tandoori chicken.",
    price: 339,
    category: "North Indian",
    image: images.dishes.tikka,
  },
  {
    id: "kadai-mutton",
    name: "Kadai Mutton",
    description: "Wok-tossed mutton with peppers, onions, and kadai masala.",
    price: 449,
    category: "North Indian",
    image: images.dishes.seekh,
  },
  {
    id: "paneer-pasanda",
    name: "Paneer Pasanda",
    description: "Stuffed paneer in a royal, mildly sweet cashew gravy.",
    price: 289,
    category: "North Indian",
    image: images.interiors[3],
  },
  {
    id: "dal-makhani",
    name: "Dhamaka Daal Makhani",
    description: "Overnight-simmered black lentils finished with cream and butter.",
    price: 249,
    category: "North Indian",
    image: images.interiors[0],
  },
  {
    id: "chilli-chicken",
    name: "Chilli Chicken",
    description: "Indo-Chinese classic — crisp chicken in a fiery chilli toss.",
    price: 279,
    category: "Chinese",
    image: images.interiors[1],
  },
  {
    id: "dragon-chicken",
    name: "Dragon Chicken",
    description: "Szechwan-spiked chicken, sweet heat, and wok aroma.",
    price: 289,
    category: "Chinese",
    image: images.dishes.octopus,
  },
  {
    id: "attil-noodles",
    name: "Attil Special Noodles",
    description: "House wok noodles tossed with vegetables and signature sauce.",
    price: 219,
    category: "Chinese",
    image: images.interiors[4],
  },
  {
    id: "attil-fried-rice",
    name: "Attil Fried Rice",
    description: "Fragrant wok-fried rice with a house Indo-Chinese finish.",
    price: 209,
    category: "Chinese",
    image: images.interiors[5],
  },
  {
    id: "gobi-manchurian",
    name: "Gobi Manchurian",
    description: "Crisp cauliflower in a glossy Manchurian glaze.",
    price: 199,
    category: "Chinese",
    image: images.interiors[2],
  },
  {
    id: "chicken-seekh",
    name: "Chicken Seekh Kebab",
    description: "Minced chicken kebabs from the clay oven, smoky and tender.",
    price: 329,
    category: "Tandoor",
    image: images.dishes.seekh,
  },
  {
    id: "yellow-alfaham",
    name: "Yellow Alfaham",
    description: "Rotisserie chicken with golden masala and charcoal notes.",
    price: 449,
    category: "Tandoor",
    image: images.dishes.alfaham,
  },
  {
    id: "garlic-naan",
    name: "Garlic Naan",
    description: "Clay-oven naan brushed with garlic butter.",
    price: 69,
    category: "Tandoor",
    image: images.interiors[0],
  },
  {
    id: "amritsari-paneer",
    name: "Amritsari Paneer Tikka",
    description: "Charred paneer tikka with Amritsari spice and smoke.",
    price: 279,
    category: "Tandoor",
    image: images.dishes.tikka,
  },
  {
    id: "chicken-tikka-pasta",
    name: "Chicken Tikka Pasta",
    description: "Continental pasta folded with smoky chicken tikka.",
    price: 299,
    category: "Continental",
    image: images.interiors[1],
  },
  {
    id: "pasta-arrabiata",
    name: "Pasta Arrabiata",
    description: "International classic with a gourmet chilli-tomato kick.",
    price: 259,
    category: "Continental",
    image: images.interiors[3],
  },
  {
    id: "habibi-sandwich",
    name: "Habibi Chicken Sandwich",
    description: "Grilled chicken sandwich with a Middle-Eastern flourish.",
    price: 229,
    category: "Continental",
    image: images.dishes.alfaham,
  },
  {
    id: "fish-fingers",
    name: "Fish Fingers",
    description: "Crisp golden fish fingers — a continental favourite.",
    price: 269,
    category: "Continental",
    image: images.interiors[4],
  },
  {
    id: "sizzler-alfaham",
    name: "Al Faham Sizzler",
    description: "Signature sizzler with alfaham chicken and garden sides.",
    price: 499,
    category: "Continental",
    image: images.dishes.octopus,
  },
  {
    id: "karupu-kavuni",
    name: "Karupu Kavuni Halwa",
    description: "Black-rice halwa with vanilla ice cream — rich and full of flavor.",
    price: 179,
    category: "Pantry & Beverages",
    image: images.interiors[5],
  },
  {
    id: "rose-shake",
    name: "Attil Rose Milk Shake",
    description: "House rose milk shake, chilled and fragrant.",
    price: 129,
    category: "Pantry & Beverages",
    image: images.interiors[2],
  },
  {
    id: "mukkani",
    name: "Mukkani Smoothie",
    description: "Seasonal fruit smoothie — a refreshing pantry special.",
    price: 149,
    category: "Pantry & Beverages",
    image: images.interiors[0],
  },
  {
    id: "brownie-sizzler",
    name: "Attil Brownie Sizzler",
    description: "Warm brownie sizzler to close the evening.",
    price: 199,
    category: "Pantry & Beverages",
    image: images.interiors[1],
  },
  {
    id: "mint-mojito",
    name: "Mint Lemon Mojito",
    description: "Ice-cold mint cooler, bright and restorative.",
    price: 99,
    category: "Pantry & Beverages",
    image: images.interiors[3],
  },
];

export const categories: CuisineCategory[] = [
  "South Indian",
  "North Indian",
  "Chinese",
  "Tandoor",
  "Continental",
  "Pantry & Beverages",
];

export const reviews = [
  {
    name: "Mansur Ilahi",
    time: "1 year ago",
    rating: 5,
    text: "Lunch at The Attil Multi cuisine restaurant was nothing short of spectacular. The warm, rustic decor and gentle music made for a charming atmosphere. I ordered chicken briyani which was perfectly cooked and beautifully presented also ordered Karuppu kavuni alwa was rich and full of flavor.",
  },
  {
    name: "Anand K",
    time: "12 months ago",
    rating: 5,
    text: "A 4.3-star Google favourite in Andipatti — guests return for the biryani, hospitality, and celebration-ready dining rooms.",
  },
  {
    name: "keerthy mp",
    time: "12 months ago",
    rating: 5,
    text: "Families choose Attil for hygiene, specialised chefs, and a full multicuisine table — from dosas to tandoor.",
  },
  {
    name: "BEVA Baalaji",
    time: "1 year ago",
    rating: 4,
    text: "Google guests highlight the party hall, elegant seating, and the joy of gathering a full table together.",
  },
  {
    name: "Mothys vikram",
    time: "1 year ago",
    rating: 5,
    text: "Signature plates like Arabian Al Faham and Attil Special Tikka keep Theni diners coming back.",
  },
];

export const whyChoose = [
  {
    title: "Global Flavors",
    text: "Explore a world of tastes, from fiery curries to sizzling grills, crafted with authentic recipes from around the globe.",
  },
  {
    title: "Culinary Masters",
    text: "Specialised chefs for each cuisine, ensuring authentic flavors and traditional techniques in every plate.",
  },
  {
    title: "Freshness Guaranteed",
    text: "We follow strict hygiene standards and use high-quality ingredients so every meal is safe, healthy, and delicious.",
  },
  {
    title: "Celebrate Together",
    text: "Pay for 5, dine as 6. Pay for 10, dine as 12. A spacious party hall for grand celebrations.",
  },
];

export const stats = [
  { label: "Google rating", value: 4.3, suffix: "★", decimals: 1 },
  { label: "Guest reviews", value: 263, suffix: "+", decimals: 0 },
  { label: "Cuisine kitchens", value: 6, suffix: "", decimals: 0 },
  { label: "Signature plates", value: 12, suffix: "+", decimals: 0 },
];

