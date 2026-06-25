import Clay3D from "./Clay3D";
import Wave from "./Wave";
import { DaySky } from "./Scene";
import { Reveal, Stagger, StaggerItem } from "./motion";

const DAY = [
  {
    time: "7:00 – 8:30",
    title: "Soft morning start",
    icon: "sun" as const,
    anim: "animate-spin-slow",
    blurb: "Warm hellos, calm music, and a gentle settle-in to their second home.",
    perks: ["Free play & puzzles", "A cozy book", "Breakfast together"],
  },
  {
    time: "9:00 – 11:10",
    title: "Learning & adventures",
    icon: "star" as const,
    anim: "animate-twinkle",
    blurb: "Our busiest, brightest stretch — circle time, creating, and fresh air.",
    perks: ["Circle time", "Arts & crafts", "Outdoor play & walks"],
  },
  {
    time: "11:30 – 2:30",
    title: "Lunch & cozy nap",
    icon: "moon" as const,
    anim: "animate-swing",
    blurb: "A home-style meal together, then quiet rest for every little one.",
    perks: ["Wash up", "Lunch together", "Nap & quiet time"],
  },
  {
    time: "2:30 – 5:00",
    title: "Afternoon fun",
    icon: "volcano" as const,
    anim: "animate-bob",
    blurb: "Snack, stories, and lots of hands-on play with caregivers in the mix.",
    perks: ["Wake-up snack", "Afternoon circle", "Yard & free play"],
  },
  {
    time: "5:00 – 6:00",
    title: "Wind-down & home-time",
    icon: "rocket" as const,
    anim: "animate-hop",
    blurb: "Calm activities and gentle goodbyes as families arrive.",
    perks: ["Quiet play", "Goodbye hugs", "Closes at 6:00"],
  },
];

export default function DailyDay() {
  return (
    <section
      id="day"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FFE0C2_0%,#FFE59E_16%,#FFC93C_44%,#FFB85C_72%,#FF9E5C_100%)] px-4 pb-24 pt-12"
    >
      <DaySky />
      <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="font-display text-lg text-[#8a5a00]">Our sticker-chart day</span>
        <h2 className="mt-2 text-4xl text-ink sm:text-5xl">
          From morning hugs to goodbye waves
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-xl text-[#7a5410]">
          A gentle, predictable rhythm helps little ones feel safe — here&apos;s how
          a sunny day unfolds.
        </p>
      </Reveal>

      <Stagger as="ol" className="relative z-10 mx-auto mt-14 max-w-2xl">
        {DAY.map((item, i) => (
          <StaggerItem
            as="li"
            key={item.time}
            index={i}
            gap={0.07}
            dx={-44}
            dy={0}
            className="relative pb-8 pl-24 last:pb-0"
          >
            {/* dotted string between stickers */}
            {i < DAY.length - 1 && (
              <span className="absolute left-[39px] top-16 h-[calc(100%-3.5rem)] w-1 rounded-full bg-white/70" />
            )}
            {/* clay sticker */}
            <span className="absolute left-0 top-0 flex h-20 w-20 items-center justify-center rounded-[26px] border-4 border-white bg-white/40 shadow-md">
              <Clay3D name={item.icon} size={56} className={item.anim} />
            </span>
            <div className="squish rounded-[26px] border-4 border-white bg-cream px-6 py-5 text-left shadow-[0_12px_24px_-14px_rgba(58,52,80,0.5)]">
              <span className="font-display text-lg text-coral">{item.time}</span>
              <h3 className="text-2xl text-ink">{item.title}</h3>
              <p className="mt-1.5 text-lg text-ink-soft">{item.blurb}</p>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {item.perks.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-cream-deep bg-white px-3 py-1 text-base font-bold text-ink-soft"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Wave fill="#4D96FF" className="mt-16" />
    </section>
  );
}
