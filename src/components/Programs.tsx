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
    chip: "bg-sky/15 text-sky",
    blurb: "Our littlest ones, wrapped in cuddles and calm.",
    perks: ["Gentle routines", "Sensory play", "Lots of cuddles", "Tummy-time fun"],
  },
  {
    icon: "dino" as const,
    anim: "animate-swing",
    name: "Busy Bees",
    age: "18 months – 3 yrs",
    tint: "bg-coral/15",
    chip: "bg-coral/15 text-coral",
    blurb: "Wobbly walkers blooming into curious explorers.",
    perks: ["Potty-training help", "Music & movement", "Messy art", "First friendships"],
  },
  {
    icon: "flask" as const,
    anim: "animate-jelly",
    name: "Big Kids",
    age: "3–5 years",
    tint: "bg-grape/15",
    chip: "bg-grape/15 text-grape",
    blurb: "Confident kiddos getting all set for school.",
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
              className="flex h-full flex-col items-center rounded-[36px] border-4 border-cream-deep bg-white p-7 text-center shadow-[0_18px_36px_-20px_rgba(58,52,80,0.4)]"
            >
              <div
                className={`flex h-28 w-28 items-center justify-center rounded-[28px] ${g.tint}`}
              >
                <Clay3D name={g.icon} size={88} className={g.anim} />
              </div>
              <h3 className="mt-5 text-3xl text-ink">{g.name}</h3>
              <p className="text-lg font-bold text-ink-soft">{g.age}</p>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">{g.blurb}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {g.perks.map((p) => (
                  <span
                    key={p}
                    className={`rounded-full px-3.5 py-1.5 text-base font-bold ${g.chip}`}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* one warm, shared call to action — not a price-tier button per card */}
        <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-lg text-xl text-ink-soft">
            Not sure which group fits?{" "}
            <span className="font-bold text-ink">We&apos;ll help you find the perfect spot.</span>
          </p>
          <a
            href="#enroll"
            className="squish cta-attention rounded-full bg-coral px-9 py-4 text-xl font-extrabold text-white shadow-[0_10px_0_0_#D8424B]"
          >
            Ask about spots
          </a>
        </Reveal>
      </div>
      <Wave fill="#FFC93C" className="mt-20" />
    </section>
  );
}
