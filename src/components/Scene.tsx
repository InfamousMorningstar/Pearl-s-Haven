import type { CSSProperties } from "react";
import Clay3D from "./Clay3D";

/** Deterministic twinkling starfield (fixed positions → no hydration drift). */
const STARS: { top: string; left: string; s: number; d: number }[] = [
  { top: "12%", left: "8%", s: 8, d: 0 },
  { top: "20%", left: "24%", s: 5, d: 0.6 },
  { top: "10%", left: "46%", s: 6, d: 1.2 },
  { top: "16%", left: "70%", s: 9, d: 0.3 },
  { top: "26%", left: "88%", s: 6, d: 1.5 },
  { top: "40%", left: "5%", s: 7, d: 0.9 },
  { top: "52%", left: "16%", s: 5, d: 1.8 },
  { top: "62%", left: "30%", s: 6, d: 0.4 },
  { top: "46%", left: "92%", s: 8, d: 1.1 },
  { top: "64%", left: "82%", s: 5, d: 0.7 },
  { top: "72%", left: "60%", s: 6, d: 1.4 },
  { top: "34%", left: "52%", s: 5, d: 2 },
  { top: "78%", left: "12%", s: 7, d: 0.2 },
  { top: "82%", left: "44%", s: 5, d: 1.6 },
];

export function Starfield({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {STARS.map((st, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full"
          style={{
            top: st.top,
            left: st.left,
            width: st.s,
            height: st.s,
            background: i % 3 === 0 ? "#FFC93C" : i % 3 === 1 ? "#FF8FB1" : "#4D96FF",
            boxShadow: "0 0 8px currentColor",
            color: i % 3 === 0 ? "#FFC93C" : i % 3 === 1 ? "#FF8FB1" : "#4D96FF",
            animationDelay: `${st.d}s`,
          }}
        />
      ))}
    </div>
  );
}

/** Deterministic daytime sky: rising sun, noon rays, drifting clouds, a morning flock. */
const CLOUDS: {
  top: string;
  left: string;
  scale: number;
  dur: number;
  delay: number;
  op: number;
  bg?: string;
}[] = [
  { top: "9%", left: "13%", scale: 0.9, dur: 12, delay: 0, op: 0.9 },
  { top: "31%", left: "70%", scale: 1.25, dur: 15, delay: 1.5, op: 0.82 },
  { top: "56%", left: "9%", scale: 1.05, dur: 13, delay: 0.8, op: 0.72 },
  { top: "80%", left: "63%", scale: 1.15, dur: 17, delay: 2, op: 0.6, bg: "#fff0d6" },
];

const BIRDS: { top: string; left: string; s: number; dur: number; delay: number }[] = [
  { top: "14%", left: "31%", s: 24, dur: 7, delay: 0 },
  { top: "10%", left: "41%", s: 17, dur: 8, delay: 0.6 },
  { top: "17%", left: "48%", s: 15, dur: 7.5, delay: 1.1 },
];

export function DaySky({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* noon sun glow */}
      <div className="day-rays" />

      {/* rising morning sun */}
      <div className="absolute right-[7%] top-[3%] sm:right-[11%]">
        <div className="absolute inset-0 -z-10 scale-[2.3] rounded-full bg-[radial-gradient(circle,rgba(255,233,150,0.95),transparent_62%)] blur-md" />
        <Clay3D name="sun" size={92} className="animate-spin-slow" />
      </div>

      {/* drifting clouds */}
      {CLOUDS.map((c, i) => (
        <div
          key={i}
          className="absolute"
          style={{ top: c.top, left: c.left, transform: `scale(${c.scale})`, opacity: c.op }}
        >
          <div
            className="animate-cloud"
            style={
              {
                "--cloud-dur": `${c.dur}s`,
                "--cloud-bg": c.bg,
                animationDelay: `${c.delay}s`,
              } as CSSProperties
            }
          >
            <span className="cloud" />
          </div>
        </div>
      ))}

      {/* a little morning flock */}
      {BIRDS.map((b, i) => (
        <div
          key={i}
          className="animate-fly absolute"
          style={
            { top: b.top, left: b.left, "--fly-dur": `${b.dur}s`, animationDelay: `${b.delay}s` } as CSSProperties
          }
        >
          <svg width={b.s} height={b.s / 2} viewBox="0 0 24 12" fill="none">
            <path
              d="M1 8 Q6 1 11 7 Q17 1 23 8"
              stroke="#6c6790"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

/** A planet with a moon orbiting around it. */
export function Orbit({
  size = 120,
  ring = 200,
  className = "",
  style,
}: {
  size?: number;
  ring?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: ring, height: ring, ...style }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 grid place-items-center">
        <Clay3D name="planet" size={size} className="animate-bob" />
      </div>
      <div className="orbit absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-rev">
            <Clay3D name="moon" size={Math.round(size * 0.45)} />
          </div>
        </div>
      </div>
    </div>
  );
}
