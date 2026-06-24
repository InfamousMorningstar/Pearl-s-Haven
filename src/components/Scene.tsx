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
