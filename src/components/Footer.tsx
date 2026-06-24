import Clay3D from "./Clay3D";
import Wave from "./Wave";
import { Reveal } from "./motion";

export default function Footer() {
  return (
    <footer className="relative mt-auto">
      <Wave fill="#3A3450" />
      <div className="bg-ink px-4 pb-10 pt-6 text-cream">
        <Reveal className="mx-auto max-w-6xl" y={24}>
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-3">
              <Clay3D name="rocket" size={52} className="animate-bob" />
              <span className="font-display text-2xl text-white">Pearl&apos;s Haven Dayhome</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">
              <a href="#about" className="text-cream/80 hover:text-white">Our Care</a>
              <a href="#programs" className="text-cream/80 hover:text-white">Programs</a>
              <a href="#day" className="text-cream/80 hover:text-white">Our Day</a>
              <a href="#enroll" className="text-cream/80 hover:text-white">Visit Us</a>
            </nav>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <Clay3D name="planet" size={38} className="animate-bob" />
            <Clay3D name="dino" size={38} className="animate-swing" />
            <Clay3D name="atom" size={38} className="animate-spin-slow" />
            <Clay3D name="star" size={38} className="animate-twinkle" />
            <Clay3D name="volcano" size={38} className="animate-jelly" />
          </div>

          <p className="mt-8 text-center text-base text-cream/60">
            © {new Date().getFullYear()} Pearl&apos;s Haven Dayhome · 150 Costa Mesa
            Close NE · 587-917-0079 · Fully licensed home childcare
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
