import type { CSSProperties } from "react";

/**
 * A sky of occasional shooting stars: glowing heads with gradient tails that
 * streak diagonally. Each star streaks once per cycle then rests, and the
 * cycles are offset so the effect feels sporadic, not synced.
 */
type Star = {
  top: string;
  left: string;
  ang: number; // travel angle (deg)
  len: number; // streak distance (px)
  tail: number; // tail length (px)
  dur: number; // cycle length (s) — gap between streaks
  delay: number; // start offset (s)
  glow: string;
};

const STARS: Star[] = [
  { top: "-2%", left: "10%", ang: 24, len: 760, tail: 150, dur: 7, delay: 0, glow: "#4D96FF" },
  { top: "8%", left: "40%", ang: 30, len: 680, tail: 120, dur: 8, delay: 3.2, glow: "#FFC93C" },
  { top: "-4%", left: "62%", ang: 22, len: 820, tail: 165, dur: 6.5, delay: 5.4, glow: "#FF8FB1" },
  { top: "14%", left: "4%", ang: 28, len: 640, tail: 120, dur: 9, delay: 8, glow: "#B15EFF" },
];

export default function ShootingStars({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {STARS.map((s, i) => (
        <span
          key={i}
          className="shooting-star"
          style={
            {
              top: s.top,
              left: s.left,
              "--ang": `${s.ang}deg`,
              "--len": `${s.len}px`,
              "--tail": `${s.tail}px`,
              "--dur": `${s.dur}s`,
              "--delay": `${s.delay}s`,
              "--glow": s.glow,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
