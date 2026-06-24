"use client";

import type { ElementType, ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

const SPRING = { type: "spring", stiffness: 180, damping: 11 } as const;

/** Fades + springs a block into view the first time it's scrolled to. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ ...SPRING, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Plain layout container for a group of <StaggerItem>s. `as` keeps it
 * semantic (ul/ol/etc.). The stagger itself lives on each item via `index`,
 * so even tall, far-down groups reveal reliably.
 */
export function Stagger({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}

export function StaggerItem({
  children,
  className,
  as = "div",
  dx = 0,
  dy = 34,
  index = 0,
  gap = 0.09,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  dx?: number;
  dy?: number;
  /** Position within its group — drives the cascade delay. */
  index?: number;
  gap?: number;
  /** Adds a springy hover-lift + press, driven by Framer (use when the
   * element itself is the card, so CSS :hover transforms can't apply). */
  interactive?: boolean;
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as as keyof typeof motion] as typeof motion.div;
  const hover =
    interactive && !reduce
      ? { whileHover: { y: -6, scale: 1.03 }, whileTap: { scale: 0.97 } }
      : {};
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, x: dx, y: dy, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ ...SPRING, delay: index * gap }}
      {...hover}
    >
      {children}
    </Tag>
  );
}

/** A chunky rainbow bar that fills as you scroll — pure kid candy. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-60 h-1.5 origin-left bg-[linear-gradient(90deg,#FF6B6B,#FFC93C,#6BCB77,#4D96FF,#B15EFF)]"
    />
  );
}
