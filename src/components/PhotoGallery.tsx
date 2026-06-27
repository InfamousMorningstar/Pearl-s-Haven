"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Bubbles from "./Bubbles";
import { Reveal } from "./motion";

const PHOTOS = [
  { src: "/Images/IMG_4117.jpg", alt: "Joyful moment at Pearl's Haven" },
  { src: "/Images/IMG_4118.jpg", alt: "Children exploring at Pearl's Haven" },
  { src: "/Images/IMG_4119.jpg", alt: "Creative play at Pearl's Haven" },
  { src: "/Images/IMG_4120.jpg", alt: "Learning time at Pearl's Haven" },
  { src: "/Images/IMG_4123.jpg", alt: "Happy kids at Pearl's Haven" },
  { src: "/Images/IMG_4124.jpg", alt: "Arts and crafts at Pearl's Haven" },
  { src: "/Images/IMG_4125.jpg", alt: "Outdoor fun at Pearl's Haven" },
  { src: "/Images/IMG_4126.jpg", alt: "Story time at Pearl's Haven" },
  { src: "/Images/IMG_4127.jpg", alt: "Playtime at Pearl's Haven" },
  { src: "/Images/IMG_4128.jpg", alt: "Circle time at Pearl's Haven" },
  { src: "/Images/IMG_4129.jpg", alt: "Snack time at Pearl's Haven" },
  { src: "/Images/IMG_4131.jpg", alt: "Discovery at Pearl's Haven" },
  { src: "/Images/IMG_4132.jpg", alt: "Smiles at Pearl's Haven" },
  { src: "/Images/IMG_4133.jpg", alt: "Growing together at Pearl's Haven" },
  { src: "/Images/IMG_4137.jpg", alt: "Friends at Pearl's Haven" },
];

const BORDERS = ["#FF6B6B", "#4D96FF", "#6BCB77", "#B15EFF", "#FF8FB1", "#FFC93C"];
const TILTS = [-3.5, 2.5, -2, 3, -1, 2.5, -3, 1.5, -2.5, 2, -1.5, 3.5, -2, 1, -2.8];

export default function PhotoGallery() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length)),
    [],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % PHOTOS.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <>
      <section id="gallery" className="relative overflow-hidden bg-white px-4 py-20 sm:py-24">
        <Bubbles className="opacity-40" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <Reveal className="text-center">
            <span className="font-display text-lg text-bubble">Our happy moments</span>
            <h2 className="mt-2 text-4xl text-ink sm:text-5xl">
              Peek inside our little world
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-xl text-ink-soft">
              Real days, real smiles — a glimpse of the joy at Pearl&apos;s Haven
              every day.
            </p>
          </Reveal>

          <div
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 sm:gap-5"
            style={{ isolation: "isolate" }}
          >
            {PHOTOS.map((photo, i) => {
              const border = BORDERS[i % BORDERS.length];
              const tilt = TILTS[i];
              return (
                <motion.button
                  key={photo.src}
                  aria-label={`Open photo: ${photo.alt}`}
                  onClick={() => setActive(i)}
                  className="group cursor-zoom-in text-left"
                  style={{ position: "relative", zIndex: 1 }}
                  initial={reduce ? false : { opacity: 0, y: 36, rotate: tilt, scale: 0.88 }}
                  whileInView={{ opacity: 1, y: 0, rotate: tilt, scale: 1 }}
                  whileHover={{
                    rotate: 0,
                    scale: 1.1,
                    zIndex: 20,
                    transition: { type: "spring", stiffness: 280, damping: 14 },
                  }}
                  whileTap={{ scale: 0.97 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 12,
                    delay: reduce ? 0 : i * 0.055,
                  }}
                >
                  <div
                    className="overflow-hidden rounded-[18px] bg-white p-2.5 shadow-[0_10px_30px_-10px_rgba(58,52,80,0.3)]"
                    style={{ border: `4px solid ${border}` }}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                      />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            {/* Blurred backdrop */}
            <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" />

            {/* Card */}
            <motion.div
              className="relative z-10 w-full max-w-3xl"
              initial={{ scale: 0.82, opacity: 0, y: 32 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.82, opacity: 0, y: 32 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo */}
              <div
                className="overflow-hidden rounded-[26px] bg-white p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
                style={{ border: `5px solid ${BORDERS[active % BORDERS.length]}` }}
              >
                <div
                  className="relative w-full overflow-hidden rounded-[16px] bg-ink/5"
                  style={{ height: "clamp(220px, 65vh, 620px)" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 220, damping: 24 }}
                    >
                      <Image
                        src={PHOTOS[active].src}
                        alt={PHOTOS[active].alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 92vw, 75vw"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Counter badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <span className="flex items-center gap-1.5 rounded-full border-4 border-white bg-ink px-4 py-1 font-display text-base text-white shadow-lg">
                  <span className="text-sunny">{active + 1}</span>
                  <span className="opacity-50">/</span>
                  <span className="opacity-70">{PHOTOS.length}</span>
                </span>
              </div>

              {/* Close button */}
              <motion.button
                aria-label="Close photo"
                onClick={close}
                className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full bg-coral text-2xl font-extrabold text-white shadow-[0_6px_0_0_#D8424B]"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 350, damping: 16 }}
              >
                ×
              </motion.button>

              {/* Prev */}
              <motion.button
                aria-label="Previous photo"
                onClick={prev}
                className="absolute -left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-4 border-cream-deep bg-white text-2xl font-extrabold text-ink shadow-[0_6px_0_0_#ffeccf]"
                whileHover={{ scale: 1.12, x: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 320, damping: 16 }}
              >
                ‹
              </motion.button>

              {/* Next */}
              <motion.button
                aria-label="Next photo"
                onClick={next}
                className="absolute -right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-4 border-cream-deep bg-white text-2xl font-extrabold text-ink shadow-[0_6px_0_0_#ffeccf]"
                whileHover={{ scale: 1.12, x: 2 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 320, damping: 16 }}
              >
                ›
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
