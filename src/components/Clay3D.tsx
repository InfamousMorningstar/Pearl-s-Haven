import type { CSSProperties } from "react";

/**
 * Themed 3D art, rendered from Microsoft Fluent Emoji (MIT licensed),
 * self-hosted under /public/3d. Same lightweight API as before so every
 * section keeps working — just swap the `name`.
 */
export type Clay3DName =
  | "planet"
  | "moon"
  | "rocket"
  | "ufo"
  | "alien"
  | "comet"
  | "star"
  | "sparkles"
  | "sun"
  | "atom"
  | "flask"
  | "magnet"
  | "bulb"
  | "dna"
  | "microscope"
  | "telescope"
  | "dino"
  | "trex"
  | "egg"
  | "footprint"
  | "volcano";

type Clay3DProps = {
  name: Clay3DName;
  size?: number;
  className?: string;
  style?: CSSProperties;
  /** Accessible label. Omit for purely decorative art (hidden from a11y tree). */
  title?: string;
  priority?: boolean;
};

export default function Clay3D({
  name,
  size = 120,
  className = "",
  style,
  title,
  priority = false,
}: Clay3DProps) {
  return (
    <img
      src={`/3d/${name}.png`}
      width={size}
      height={size}
      alt={title ?? ""}
      aria-hidden={title ? undefined : true}
      draggable={false}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`clay3d clay3d-poke ${className}`}
      style={{
        filter: "drop-shadow(0 10px 12px rgba(45, 42, 84, 0.22))",
        ...style,
      }}
    />
  );
}
