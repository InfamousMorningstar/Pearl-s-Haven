import Clay3D from "./Clay3D";
import Wave from "./Wave";
import Bubbles from "./Bubbles";
import { Reveal, Stagger, StaggerItem } from "./motion";

const GROUPS = [
  {
    icon: "planet" as const,
    anim: "animate-bob",
    name: "Tiny Sprouts",
    age: "12–18 months",
    tint: "bg-sky/15",
    perks: ["Gentle routines", "Sensory play", "Lots of cuddles", "Tummy-time fun"],
  },
  {
    icon: "dino" as const,
    anim: "animate-swing",
    name: "Busy Bees",
    age: "18 months – 3 yrs",
    tint: "bg-coral/15",
    featured: true,
    perks: ["Potty-training help", "Music & movement", "Messy art", "First friendships"],
  },
  {
    icon: "flask" as const,
    anim: "animate-jelly",
    name: "Big Kids",
    age: "3–5 years",
    tint: "bg-grape/15",
    perks: ["Pre-K basics", "Show & tell", "Garden science", "Kindergarten prep"],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden px-4 py-20 sm:py-24">
      <Bubbles className="opacity-50" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="font-display text-lg text-mint">Programs by age</span>
          <h2 className="mt-2 text-4xl text-ink sm:text-5xl">
            A cozy group for every little stage
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl text-ink-soft">
            Mixed-age play with age-matched activities, so siblings stay together
            and friendships grow.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {GROUPS.map((g, i) => (
            <StaggerItem
              key={g.name}
              index={i}
              gap={0.13}
              interactive
              className={`relative flex flex-col rounded-[36px] border-4 bg-white p-7 shadow-[0_18px_36px_-20px_rgba(58,52,80,0.4)] ${
                g.featured ? "border-coral md:-mt-4 md:mb-4" : "border-cream-deep"
              }`}
            >
              {g.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1.5 text-base font-extrabold text-white shadow-md">
                  Most popular
                </span>
              )}
              <div
                className={`mx-auto flex h-28 w-28 items-center justify-center rounded-[28px] ${g.tint}`}
              >
                <Clay3D name={g.icon} size={88} className={g.anim} />
              </div>
              <h3 className="mt-5 text-center text-3xl text-ink">{g.name}</h3>
              <p className="text-center text-lg font-bold text-ink-soft">{g.age}</p>
              <ul className="mt-5 space-y-2.5">
                {g.perks.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-lg text-ink">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-mint text-sm text-white">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#enroll"
                className={`squish mt-7 block rounded-full px-5 py-3 text-center text-lg font-extrabold ${
                  g.featured
                    ? "bg-coral text-white shadow-[0_8px_0_0_#D8424B]"
                    : "border-4 border-ink text-ink"
                }`}
              >
                Ask about spots
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      <Wave fill="#FFC93C" className="mt-20" />
    </section>
  );
}
