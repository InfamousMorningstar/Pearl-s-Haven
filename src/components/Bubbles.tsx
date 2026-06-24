import type { CSSProperties } from "react";

/** Ambient bubbles drifting gently upward — soft background life. */
const COLORS = [
  "rgba(77,150,255,0.45)",
  "rgba(255,201,60,0.5)",
  "rgba(255,143,177,0.5)",
  "rgba(107,203,119,0.45)",
  "rgba(177,94,255,0.45)",
];

const BUBBLES = Array.from({ length: 9 }).map((_, i) => {
  const size = 14 + ((i * 37) % 34);
  return {
    left: `${(i * 11 + 4) % 96}%`,
    size,
    color: COLORS[i % COLORS.length],
    dur: 8 + ((i * 13) % 7),
    delay: (i * 1.3) % 8,
    bx: (i % 2 === 0 ? 1 : -1) * (10 + ((i * 7) % 26)),
    op: 0.35 + ((i * 17) % 25) / 100,
  };
});

export default function Bubbles({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={
            {
              left: b.left,
              bottom: "-30px",
              width: b.size,
              height: b.size,
              "--bubble-color": b.color,
              "--bubble-dur": `${b.dur}s`,
              "--bubble-delay": `${b.delay}s`,
              "--bx": `${b.bx}px`,
              "--bubble-op": b.op,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
