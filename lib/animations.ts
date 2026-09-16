import type { Variants } from "framer-motion";
import { EASING, TIMING } from "./constants";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: TIMING.reveal, ease: EASING.outCubic },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: TIMING.reveal, ease: EASING.outCubic },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: TIMING.reveal, ease: EASING.outCubic },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: TIMING.slow, ease: EASING.outCubic },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: TIMING.slow, ease: EASING.outCubic },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -3, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: { duration: TIMING.slow, ease: EASING.outCubic },
  },
};

export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.72, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: EASING.spring,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: TIMING.stagger,
      delayChildren: 0.12,
    },
  },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "100%", rotateX: 40 },
  visible: {
    opacity: 1,
    y: "0%",
    rotateX: 0,
    transition: { duration: 0.8, ease: EASING.outCubic },
  },
};

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASING.outCubic },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.4, ease: EASING.inOut },
  },
};
