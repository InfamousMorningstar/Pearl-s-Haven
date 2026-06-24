"use client";

import { useState } from "react";
import Clay3D from "./Clay3D";
import Confetti from "./Confetti";
import { Starfield } from "./Scene";
import { Reveal, Stagger, StaggerItem } from "./motion";

const INFO = [
  { icon: "sun" as const, anim: "animate-spin-slow", label: "Hours", value: "Mon–Fri · 7:00am–6:00pm" },
  { icon: "planet" as const, anim: "animate-bob", label: "Find us", value: "150 Costa Mesa Close NE" },
  { icon: "rocket" as const, anim: "animate-hop", label: "Email", value: "pearlshaven@gmail.com" },
  { icon: "bulb" as const, anim: "animate-swing", label: "Call", value: "587-917-0079" },
  { icon: "star" as const, anim: "animate-twinkle", label: "Text", value: "587-917-8201" },
  { icon: "egg" as const, anim: "animate-hop", label: "Good to know", value: "Grant & subsidy available" },
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
            {INFO.map((it, i) => (
              <StaggerItem
                key={it.label}
                index={i}
                className="flex items-center gap-4 rounded-3xl border-2 border-white/40 bg-white/15 p-4 backdrop-blur-sm"
              >
                <Clay3D name={it.icon} size={52} className={`shrink-0 ${it.anim}`} />
                <div className="min-w-0">
                  <p className="text-sm font-bold uppercase tracking-wide text-white/70">
                    {it.label}
                  </p>
                  <p className="wrap-break-word text-lg font-bold leading-tight text-white">
                    {it.value}
                  </p>
                </div>
              </StaggerItem>
            ))}
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
                Thanks for reaching out. Miss Pearl will get back to you very soon.
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
