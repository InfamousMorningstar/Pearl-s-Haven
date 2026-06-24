import type { CSSProperties } from "react";

const COLORS = ["#FF6B6B", "#FFC93C", "#4D96FF", "#6BCB77", "#B15EFF", "#FF8FB1"];

/** A one-shot confetti burst. Mount it to fire (e.g. on form success). */
const PIECES = Array.from({ length: 64 }).map((_, i) => {
  const angle = (i / 64) * Math.PI * 2;
  const spread = 180 + ((i * 29) % 220);
  return {
    color: COLORS[i % COLORS.length],
    tx: Math.cos(angle) * spread,
    ty: Math.sin(angle) * spread * 0.7 + 100 + ((i * 17) % 160),
    rot: (i % 2 === 0 ? 1 : -1) * (360 + ((i * 47) % 540)),
    dur: 1.4 + ((i * 13) % 14) / 10,
    delay: ((i * 7) % 18) / 100,
    w: 9 + ((i * 5) % 9),
    h: 12 + ((i * 11) % 12),
    round: i % 3 === 0,
  };
});

export default function Confetti() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {PIECES.map((p, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={
            {
              width: p.w,
              height: p.h,
              background: p.color,
              borderRadius: p.round ? "9999px" : "2px",
              "--tx": `${p.tx}px`,
              "--ty": `${p.ty}px`,
              "--rot": `${p.rot}deg`,
              "--cdur": `${p.dur}s`,
              "--cdelay": `${p.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
