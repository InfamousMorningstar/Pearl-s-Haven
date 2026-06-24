type WaveProps = {
  fill: string;
  flip?: boolean;
  className?: string;
};

/** A soft hand-cut wavy edge between sections — the torn-paper craft feel. */
export default function Wave({ fill, flip = false, className = "" }: WaveProps) {
  return (
    <div className={`wave-top ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="h-[60px] w-full"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        <path
          d="M0 30C180 60 360 0 540 18 720 36 900 60 1080 48 1260 36 1380 12 1440 24V60H0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
