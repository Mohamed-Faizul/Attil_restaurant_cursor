export const COLORS = {
  navy: "#1a1a2e",
  midnight: "#16213e",
  deep: "#0f3460",
  rose: "#e94560",
  gold: "#d4af37",
  cream: "#f5f5f5",
  purple: "#6b5b95",
  teal: "#48a9a6",
} as const;

export const TIMING = {
  fast: 0.35,
  medium: 0.5,
  reveal: 0.9,
  slow: 1.1,
  stagger: 0.12,
} as const;

export const EASING = {
  outCubic: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  spring: { type: "spring" as const, stiffness: 280, damping: 18 },
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
