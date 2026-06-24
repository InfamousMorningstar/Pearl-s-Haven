"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Drifts its children as the page scrolls — different `speed`/`spin` values
 * give the hero a layered, parallax "everything is floating" feel.
 */
export default function Parallax({
  children,
  className,
  style,
  speed = 80,
  spin = 0,
  range = 700,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** vertical drift (px) across the scroll `range` */
  speed?: number;
  /** rotation (deg) across the scroll `range` */
  spin?: number;
  range?: number;
}) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, range], [0, speed]);
  const rotate = useTransform(scrollY, [0, range], [0, spin]);

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div className={className} style={{ y, rotate, ...style }}>
      {children}
    </motion.div>
  );
}
