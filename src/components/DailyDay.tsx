import Clay3D from "./Clay3D";
import Wave from "./Wave";
import { Reveal, Stagger, StaggerItem } from "./motion";

const DAY = [
  { time: "7:00", title: "Hellos & free play", icon: "sun" as const, anim: "animate-spin-slow", note: "Soft landings and big morning hugs." },
  { time: "9:00", title: "Snack & circle time", icon: "star" as const, anim: "animate-twinkle", note: "Songs, calendar, and the weather dance." },
  { time: "9:45", title: "Learning play", icon: "atom" as const, anim: "animate-spin-slow", note: "Letters, numbers, building, and stories." },
  { time: "11:00", title: "Outdoor adventures", icon: "footprint" as const, anim: "animate-hop", note: "Backyard, garden digging, and bubbles." },
  { time: "12:00", title: "Home-cooked lunch", icon: "flask" as const, anim: "animate-jelly", note: "Fresh, allergy-friendly, made with love." },
  { time: "1:00", title: "Cozy nap time", icon: "moon" as const, anim: "animate-swing", note: "Quiet music and a sleepy story." },
  { time: "3:00", title: "Art & messy fun", icon: "volcano" as const, anim: "animate-bob", note: "Paint, playdough, and proud creations." },
  { time: "4:30", title: "Wind-down & pickups", icon: "rocket" as const, anim: "animate-hop", note: "Tidy-up song and goodbye waves." },
];

export default function DailyDay() {
  return (
    <section id="day" className="bg-sunny px-4 pb-24 pt-12">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="font-display text-lg text-[#8a5a00]">Our sticker-chart day</span>
        <h2 className="mt-2 text-4xl text-ink sm:text-5xl">
          From morning hugs to goodbye waves
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-xl text-[#7a5410]">
          A gentle, predictable rhythm helps little ones feel safe — here&apos;s how
          a sunny day unfolds.
        </p>
      </Reveal>

      <Stagger as="ol" className="mx-auto mt-14 max-w-2xl">
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
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl text-coral">{item.time}</span>
                <h3 className="text-2xl text-ink">{item.title}</h3>
              </div>
              <p className="mt-1 text-lg text-ink-soft">{item.note}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Wave fill="#4D96FF" className="mt-16" />
    </section>
  );
}
