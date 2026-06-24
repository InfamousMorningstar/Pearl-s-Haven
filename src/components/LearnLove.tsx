import Clay3D, { type Clay3DName } from "./Clay3D";
import Bubbles from "./Bubbles";
import { Reveal, Stagger, StaggerItem } from "./motion";

type Area = {
  icon: Clay3DName;
  anim: string;
  label: string;
  color: string;
  tint: string;
};

const AREAS: Area[] = [
  { icon: "bulb", anim: "animate-swing", label: "Reading Corner", color: "text-sky", tint: "bg-sky/15" },
  { icon: "sparkles", anim: "animate-twinkle", label: "Arts & Craft", color: "text-coral", tint: "bg-coral/15" },
  { icon: "moon", anim: "animate-bob", label: "Cozy Teepee Nook", color: "text-grape", tint: "bg-grape/15" },
  { icon: "sun", anim: "animate-spin-slow", label: "House-keeping Area", color: "text-[#C77D12]", tint: "bg-sunny/20" },
  { icon: "atom", anim: "animate-spin-slow", label: "Educational Walls", color: "text-mint", tint: "bg-mint/15" },
  { icon: "microscope", anim: "animate-jelly", label: "Sensory & Montessori", color: "text-bubble", tint: "bg-bubble/15" },
  { icon: "egg", anim: "animate-hop", label: "Calm Safe Space", color: "text-sky", tint: "bg-sky/15" },
  { icon: "footprint", anim: "animate-wobble", label: "Outdoor Play & more!", color: "text-grape", tint: "bg-grape/15" },
];

export default function LearnLove() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-24">
      <Bubbles className="opacity-50" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="font-display text-lg text-coral">Our cozy spaces</span>
          <h2 className="mt-2 text-4xl text-ink sm:text-5xl">
            What your child will learn &amp; love
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl text-ink-soft">
            Thoughtful little corners for reading, building, creating, and
            resting — so every day is full of discovery.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {AREAS.map((a, i) => (
            <StaggerItem key={a.label} index={i} interactive>
              <div className="flex h-full flex-col items-center gap-3 rounded-[28px] border-4 border-cream-deep bg-white p-5 text-center shadow-[0_14px_28px_-20px_rgba(58,52,80,0.5)]">
                <div className={`flex h-20 w-20 items-center justify-center rounded-3xl ${a.tint}`}>
                  <Clay3D name={a.icon} size={56} className={a.anim} />
                </div>
                <span className={`font-display text-xl leading-tight ${a.color}`}>
                  {a.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
