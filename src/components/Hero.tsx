import Clay3D from "./Clay3D";
import { Orbit, Starfield } from "./Scene";
import ShootingStars from "./ShootingStars";
import Parallax from "./Parallax";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-24 pt-32 sm:pt-40"
    >
      <Starfield />
      <ShootingStars />

      {/* Floating discovery objects — drift at different rates as you scroll */}
      <Parallax
        speed={-70}
        spin={-22}
        className="pointer-events-none absolute -left-6 top-24 hidden lg:block"
      >
        <Orbit size={108} ring={190} className="animate-drift" />
      </Parallax>
      <Parallax
        speed={170}
        spin={26}
        className="pointer-events-none absolute right-[6%] top-24 hidden md:block"
      >
        <Clay3D name="rocket" size={104} className="animate-bob" />
      </Parallax>
      <Parallax
        speed={120}
        spin={120}
        className="pointer-events-none absolute left-[12%] top-[60%] hidden md:block"
      >
        <Clay3D name="atom" size={76} className="animate-spin-slow" />
      </Parallax>
      <Parallax
        speed={90}
        spin={-18}
        className="pointer-events-none absolute right-[12%] top-[62%] hidden md:block"
      >
        <Clay3D name="dino" size={92} className="animate-swing" />
      </Parallax>
      <Parallax
        speed={-120}
        spin={40}
        className="pointer-events-none absolute left-[44%] top-24 hidden sm:block"
      >
        <Clay3D name="star" size={48} className="animate-twinkle" />
      </Parallax>
      {/* superhero pals — kids love a caped friend */}
      <Parallax
        speed={-100}
        spin={14}
        className="pointer-events-none absolute left-[4%] top-[40%] hidden lg:block"
      >
        <Clay3D name="hero-woman" size={100} className="animate-bob" />
      </Parallax>
      <Parallax
        speed={130}
        spin={-16}
        className="pointer-events-none absolute right-[4%] top-[42%] hidden lg:block"
      >
        <Clay3D name="hero-man" size={104} className="animate-hop" />
      </Parallax>

      {/* mobile-only floaters so small screens still feel alive */}
      <Parallax
        speed={120}
        spin={20}
        className="pointer-events-none absolute right-3 top-24 sm:hidden"
      >
        <Clay3D name="rocket" size={62} className="animate-bob" />
      </Parallax>
      <Parallax
        speed={-90}
        spin={-25}
        className="pointer-events-none absolute left-3 top-28 sm:hidden"
      >
        <Clay3D name="planet" size={58} className="animate-hop" />
      </Parallax>
      <Parallax
        speed={70}
        spin={16}
        className="pointer-events-none absolute left-2 top-[54%] sm:hidden"
      >
        <Clay3D name="hero-woman" size={62} className="animate-bob" />
      </Parallax>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span className="animate-pop inline-flex items-center gap-2 rounded-full border-4 border-white bg-white/70 px-5 py-2 text-base text-ink shadow-sm backdrop-blur sm:text-lg">
          <span className="h-3 w-3 animate-twinkle rounded-full bg-mint" /> Now
          welcoming new little ones for Fall
        </span>

        <h1
          className="animate-pop mt-6 text-5xl text-ink sm:text-7xl"
          style={{ animationDelay: "0.05s" }}
        >
          A happy little{" "}
          <span className="relative inline-block text-coral">
            home
            <svg
              className="absolute -bottom-3 left-0 w-full"
              viewBox="0 0 200 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 13c44-9 150-12 194-4"
                stroke="#FFC93C"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          away from home
        </h1>

        <p
          className="animate-pop mx-auto mt-5 max-w-xl font-display text-2xl text-grape sm:text-3xl"
          style={{ animationDelay: "0.1s" }}
        >
          Nurturing little minds, one day at a time.
        </p>
        <p
          className="animate-pop mx-auto mt-4 max-w-xl text-xl text-ink-soft sm:text-2xl"
          style={{ animationDelay: "0.12s" }}
        >
          Pearl&apos;s Haven is a fully licensed home dayhome for ages 1–5 —
          safe hands, happy hearts, and play-filled days where little ones grow.
        </p>

        <div
          className="animate-pop mt-6 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="rounded-full border-2 border-mint bg-mint/15 px-4 py-1.5 text-base font-bold text-ink">
            ✓ Fully Licensed Dayhome
          </span>
          <span className="rounded-full border-2 border-grape bg-grape/15 px-4 py-1.5 text-base font-bold text-ink">
            ✓ Gov&apos;t Grant &amp; Subsidy Available
          </span>
        </div>

        <div
          className="animate-pop mt-8 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.18s" }}
        >
          <a
            href="#enroll"
            className="squish cta-attention rounded-full bg-coral px-8 py-4 text-xl font-extrabold text-white shadow-[0_10px_0_0_#D8424B]"
          >
            Book a Visit
          </a>
          <a
            href="#day"
            className="squish rounded-full border-4 border-ink bg-white px-8 py-4 text-xl font-extrabold text-ink shadow-[0_10px_0_0_#3A3450]"
          >
            Peek at Our Day
          </a>
        </div>

        <dl className="animate-pop mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-3 sm:gap-6">
          {[
            { to: 8, suffix: "+ yrs", l: "in childcare", c: "text-sky" },
            { to: 3, suffix: "", l: "bus stops nearby", c: "text-grape" },
            { to: 100, suffix: "%", l: "healthy meals", c: "text-mint" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-3xl border-4 border-white bg-white/70 px-3 py-4 shadow-sm backdrop-blur"
            >
              <dt className={`font-display text-3xl sm:text-4xl ${s.c}`}>
                <CountUp to={s.to} suffix={s.suffix} />
              </dt>
              <dd className="mt-1 text-sm text-ink-soft sm:text-base">{s.l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
