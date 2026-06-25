"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Clay3D, { type Clay3DName } from "./Clay3D";
import Confetti from "./Confetti";
import { Starfield } from "./Scene";
import { Reveal, Stagger, StaggerItem } from "./motion";

const ADDRESS = "150 Costa Mesa Close NE, Calgary, AB";
const Q = encodeURIComponent(ADDRESS);

/** Universal links: each opens the native app where available, web elsewhere. */
const DIRECTIONS = [
  { name: "Google Maps", emoji: "🗺️", url: `https://www.google.com/maps/search/?api=1&query=${Q}`, color: "#4d96ff" },
  { name: "Apple Maps", emoji: "🧭", url: `https://maps.apple.com/?q=${Q}`, color: "#3a3450" },
  { name: "Waze", emoji: "🚗", url: `https://waze.com/ul?q=${Q}&navigate=yes`, color: "#19c0ed" },
];

const INFO: {
  icon: Clay3DName;
  anim: string;
  label: string;
  value: string;
  directions?: boolean;
}[] = [
  { icon: "clock", anim: "animate-swing", label: "Hours", value: "Mon–Fri · 7:00am–6:00pm" },
  { icon: "pin", anim: "animate-bob", label: "Find us", value: "150 Costa Mesa Close NE", directions: true },
  { icon: "envelope", anim: "animate-hop", label: "Email", value: "pearlshaven@gmail.com" },
  { icon: "phone", anim: "animate-wobble", label: "Call", value: "587-917-0079" },
  { icon: "chat", anim: "animate-bob", label: "Text", value: "587-917-8201" },
  { icon: "bulb", anim: "animate-swing", label: "Good to know", value: "Grant & subsidy available" },
];

export default function Enroll() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="enroll"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#4D96FF_0%,#7C70EC_52%,#B15EFF_100%)] px-4 py-20 sm:py-24"
    >
      <Starfield className="opacity-80" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left: warm invite + info, on the band */}
        <Reveal>
          <span className="font-display text-lg text-sunny">Come say hello</span>
          <h2 className="mt-2 text-4xl text-white sm:text-5xl">
            Book a visit &amp; meet the little ones
          </h2>
          <p className="mt-4 max-w-md text-xl text-white/85">
            Pop by for a tour, a cup of tea, and a feel for our happy little home.
            Tell us a bit about your family and we&apos;ll be in touch within a day.
          </p>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
            {INFO.map((it, i) => {
              const cardClass =
                "flex items-center gap-4 rounded-3xl border-2 border-white/40 bg-white/15 p-4 backdrop-blur-sm";
              const body = (
                <>
                  <Clay3D name={it.icon} size={52} className={`shrink-0 ${it.anim}`} />
                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-wide text-white/70">
                      {it.label}
                    </p>
                    <p className="wrap-break-word text-lg font-bold leading-tight text-white">
                      {it.value}
                    </p>
                  </div>
                </>
              );
              if (it.directions) {
                return (
                  <DirectionsCard key={it.label} index={i} cardClass={cardClass} body={body} />
                );
              }
              return (
                <StaggerItem key={it.label} index={i} className={cardClass}>
                  {body}
                </StaggerItem>
              );
            })}
          </Stagger>
        </Reveal>

        {/* Right: form floating on a clean white card */}
        <Reveal
          delay={0.1}
          className="relative rounded-[40px] border-4 border-white bg-white p-7 shadow-[0_30px_60px_-24px_rgba(20,16,60,0.6)] sm:p-9"
        >
          {sent ? (
            <div className="relative flex h-full flex-col items-center justify-center py-10 text-center">
              <Confetti />
              <Clay3D name="rocket" size={120} className="animate-hop" />
              <h3 className="mt-6 text-3xl text-ink">Yay — message sent!</h3>
              <p className="mt-2 max-w-xs text-lg text-ink-soft">
                Thanks for reaching out. Miss Uzma will get back to you very soon.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="squish mt-6 rounded-full border-4 border-ink px-6 py-2.5 text-lg font-extrabold text-ink"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <Field label="Your name" id="name" placeholder="Jordan Parent" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" id="email" type="email" placeholder="you@email.com" />
                <Field label="Phone" id="phone" type="tel" placeholder="587-000-0000" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Child's age" id="age" placeholder="2 years" />
                <Field label="Ideal start" id="start" placeholder="e.g. September 2026" />
              </div>
              <div>
                <label htmlFor="msg" className="mb-1.5 block text-lg font-bold text-ink">
                  Tell us about your little one
                </label>
                <textarea
                  id="msg"
                  name="msg"
                  rows={3}
                  placeholder="Naps, favourite games, allergies, anything!"
                  className="w-full rounded-2xl border-4 border-cream-deep bg-cream px-4 py-3 text-lg text-ink shadow-inner outline-none placeholder:text-ink-soft/50 focus:border-sky"
                />
              </div>
              <button
                type="submit"
                className="squish w-full rounded-full bg-coral px-6 py-4 text-xl font-extrabold text-white shadow-[0_10px_0_0_#D8424B]"
              >
                Send my visit request ✦
              </button>
              <p className="text-center text-base text-ink-soft">
                No spam, ever — just a friendly reply.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/** "Find us" card with a bubbly directions pop-up: hover to peek, tap to pin,
 *  closes on mouse-leave or any outside tap. */
function DirectionsCard({
  index,
  cardClass,
  body,
}: {
  index: number;
  cardClass: string;
  body: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  return (
    <StaggerItem index={index} className="relative">
      <div
        ref={ref}
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={open}
          aria-label="Find us — show directions"
          onClick={() => setOpen((v) => !v)}
          className={`${cardClass} squish w-full cursor-pointer text-left outline-none transition-colors hover:border-white/80 hover:bg-white/25 focus-visible:border-white`}
        >
          {body}
          <span
            aria-hidden="true"
            className={`ml-auto shrink-0 text-white/70 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            ▾
          </span>
        </button>

        {/* bubbly directions pop-up */}
        <div
          data-open={open}
          className="dir-bubble absolute left-1/2 top-full z-30 w-60 max-w-[80vw] pt-3"
        >
          <div className="relative rounded-[26px] border-4 border-white bg-cream p-3 shadow-[0_26px_54px_-18px_rgba(20,16,60,0.75)]">
            {/* little tail */}
            <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 rounded-tl-md border-l-4 border-t-4 border-white bg-cream" />
            <p className="mb-2 text-center font-display text-base text-ink">Take me there! ✨</p>
            <div className="space-y-2">
              {DIRECTIONS.map((d) => (
                <a
                  key={d.name}
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: d.color }}
                  className="squish flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-base font-extrabold text-white shadow-md"
                >
                  <span aria-hidden="true">{d.emoji}</span>
                  {d.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StaggerItem>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-lg font-bold text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border-4 border-cream-deep bg-cream px-4 py-3 text-lg text-ink shadow-inner outline-none placeholder:text-ink-soft/50 focus:border-sky"
      />
    </div>
  );
}
