import Clay3D from "./Clay3D";
import Wave from "./Wave";
import Bubbles from "./Bubbles";
import { Reveal, Stagger, StaggerItem } from "./motion";

const REASONS = [
  {
    icon: "sun" as const,
    anim: "animate-spin-slow",
    title: "Loved like family",
    body: "A tiny group means every child gets cuddles, patience, and a grown-up who truly knows them.",
  },
  {
    icon: "bulb" as const,
    anim: "animate-swing",
    title: "Learning through play",
    body: "Paint, blocks, stories, and backyard mud pies — big lessons hiding inside every giggle.",
  },
  {
    icon: "egg" as const,
    anim: "animate-jelly",
    title: "Safe & cozy home",
    body: "A child-proofed, sunny space with nap nooks, fenced play yard, and zero screens.",
  },
  {
    icon: "flask" as const,
    anim: "animate-hop",
    title: "Yummy home cooking",
    body: "Fresh, allergy-friendly snacks and lunches made from scratch in our own kitchen.",
  },
];

export default function About() {
  return (
    <>
      <Wave fill="#FFFFFF" />
      <section id="about" className="relative overflow-hidden bg-white px-4 py-20 sm:py-24">
        <Bubbles className="opacity-60" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Caregiver intro card */}
            <Reveal className="relative">
              <div className="absolute -left-6 -top-6 z-0">
                <Clay3D name="atom" size={120} className="animate-spin-slow" />
              </div>
              <div className="relative rounded-[40px] border-4 border-cream-deep bg-cream p-8 shadow-[0_20px_40px_-20px_rgba(58,52,80,0.4)]">
                <div className="flex items-center gap-4">
                  <Clay3D name="sun" size={84} title="Miss Pearl" className="animate-spin-slow" />
                  <div>
                    <p className="font-display text-2xl text-ink">Hi, I&apos;m Miss Pearl!</p>
                    <p className="text-lg text-ink-soft">Your dayhome caregiver</p>
                  </div>
                </div>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  &ldquo;With over eight joyful years in childcare, I welcome little
                  ones into my home like family. We sing in the mornings, build
                  forts after lunch, and end each day with a story and a sleepy
                  snuggle. Your child won&apos;t just be watched here — they&apos;ll
                  be cherished.&rdquo;
                </p>
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
