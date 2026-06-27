"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Clay3D from "./Clay3D";
import Wave from "./Wave";
import Bubbles from "./Bubbles";
import { Reveal, Stagger, StaggerItem } from "./motion";

const REASONS = [
  {
    icon: "heart" as const,
    anim: "animate-jelly",
    title: "Loved like family",
    body: "A tiny group means every child gets cuddles, patience, and a grown-up who truly knows them.",
  },
  {
    icon: "teddy" as const,
    anim: "animate-swing",
    title: "Learning through play",
    body: "Paint, blocks, stories, and backyard mud pies — big lessons hiding inside every giggle.",
  },
  {
    icon: "house" as const,
    anim: "animate-bob",
    title: "Safe & cozy home",
    body: "A child-proofed, sunny space with nap nooks, fenced play yard, and zero screens.",
  },
  {
    icon: "cooking" as const,
    anim: "animate-hop",
    title: "Yummy home cooking",
    body: "Fresh, allergy-friendly snacks and lunches made from scratch in our own kitchen.",
  },
];

const SNAP_PHOTOS = [
  { src: "/Images/IMG_4119.jpg", border: "#FF6B6B", tilt: -4, delay: 0 },
  { src: "/Images/IMG_4124.jpg", border: "#4D96FF", tilt: 2, delay: 0.08 },
  { src: "/Images/IMG_4131.jpg", border: "#6BCB77", tilt: -2.5, delay: 0.16 },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <>
      <Wave fill="#FFFFFF" />
      <section id="about" className="relative overflow-hidden bg-white px-4 py-20 sm:py-24">
        <Bubbles className="opacity-60" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Caregiver intro card */}
            <Reveal className="relative">
              <div className="relative rounded-[40px] border-4 border-cream-deep bg-cream p-8 shadow-[0_20px_40px_-20px_rgba(58,52,80,0.4)]">
                <div className="flex items-center gap-4">
                  <Clay3D name="wave" size={84} title="Miss Uzma" className="animate-wobble" />
                  <div>
                    <p className="font-display text-2xl text-ink">Hi, I&apos;m Miss Uzma!</p>
                    <p className="text-lg text-ink-soft">Your dayhome caregiver</p>
                  </div>
                </div>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
                  <p>
                    With over 8 years of experience in Early Childhood Education, I have
                    dedicated my career to supporting children through their most meaningful
                    years of growth and development. My passion for working with young
                    children is what inspired me to open my own dayhome — a place where
                    little ones feel safe, loved, and excited to learn every single day.
                  </p>
                  <p>
                    I welcome children from 1 to 5 years old into a warm, home-like
                    environment where every child is treated as an individual. I believe
                    that the early years are the most important, and I am committed to
                    providing thoughtful, play-based care that nurtures each child&apos;s
                    curiosity, confidence, and social skills.
                  </p>
                  <p>
                    As a parent yourself, you want nothing but the best for your little one
                    — and so do I. My dayhome is built on trust, open communication, and
                    genuine care for every family I work with. I take the time to get to
                    know each child and build a relationship with their family, because when
                    children feel secure, they truly flourish.
                  </p>
                  <p>
                    I would love to welcome your family into mine. Feel free to reach out —
                    I can&apos;t wait to meet you!
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["ECE Level 3", "8+ Years Experience", "Fully Licensed"].map(
                    (b) => (
                      <span
                        key={b}
                        className="rounded-full bg-white px-4 py-1.5 text-base font-bold text-ink shadow-sm"
                      >
                        {b}
                      </span>
                    ),
                  )}
                </div>
              </div>
              {/* Snap photo strip below the bio card */}
              <div className="mt-5 flex gap-3 justify-center" style={{ isolation: "isolate" }}>
                {SNAP_PHOTOS.map((p) => (
                  <motion.div
                    key={p.src}
                    className="group cursor-pointer"
                    style={{ position: "relative", zIndex: 1 }}
                    initial={reduce ? false : { opacity: 0, y: 20, rotate: p.tilt, scale: 0.85 }}
                    whileInView={{ opacity: 1, y: 0, rotate: p.tilt, scale: 1 }}
                    whileHover={{
                      rotate: 0,
                      scale: 1.12,
                      zIndex: 20,
                      transition: { type: "spring", stiffness: 300, damping: 15 },
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: "spring", stiffness: 150, damping: 12, delay: p.delay }}
                  >
                    <div
                      className="overflow-hidden rounded-[16px] bg-white p-2 shadow-[0_8px_24px_-8px_rgba(58,52,80,0.3)]"
                      style={{ border: `4px solid ${p.border}` }}
                    >
                      <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-[8px]">
                        <Image
                          src={p.src}
                          alt="A happy moment at Pearl's Haven"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="140px"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            {/* Reasons */}
            <div>
              <Reveal>
                <span className="font-display text-lg text-grape">Why families love us</span>
                <h2 className="mt-2 text-4xl text-ink sm:text-5xl">
                  Big-hearted care in a real little home
                </h2>
              </Reveal>
              <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
                {REASONS.map((r, i) => (
                  <StaggerItem key={r.title} index={i}>
                    <div className="squish h-full rounded-[28px] border-4 border-cream-deep bg-cream p-5">
                      <Clay3D name={r.icon} size={64} className={r.anim} />
                      <h3 className="mt-3 text-2xl text-ink">{r.title}</h3>
                      <p className="mt-1.5 text-lg text-ink-soft">{r.body}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal className="mt-6 flex flex-wrap gap-2.5">
                {[
                  "🍎 Healthy meals & snacks",
                  "🚌 Three bus stops nearby",
                  "🛝 Playground right out back",
                  "👶 Ages 1–5 welcome",
                ].map((f) => (
                  <span
                    key={f}
                    className="rounded-full border-2 border-cream-deep bg-white px-4 py-1.5 text-base font-bold text-ink-soft"
                  >
                    {f}
                  </span>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
