"use client";

import { useState } from "react";
import Clay3D from "./Clay3D";

const LINKS = [
  { href: "#about", label: "Our Care" },
  { href: "#programs", label: "Programs" },
  { href: "#day", label: "Our Day" },
  { href: "#enroll", label: "Visit Us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-[28px] border-4 border-white bg-white/80 px-4 py-2.5 shadow-[0_14px_30px_-12px_rgba(58,52,80,0.35)] backdrop-blur-md sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Clay3D name="rocket" size={42} className="animate-bob" />
          <span className="font-display text-xl text-ink sm:text-2xl">
            Pearl&apos;s Haven
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="squish rounded-full px-4 py-2 text-lg text-ink-soft hover:bg-cream-deep hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#enroll"
            className="squish ml-2 rounded-full bg-coral px-5 py-2.5 text-lg font-extrabold text-white shadow-[0_8px_0_0_#D8424B]"
          >
            Book a Visit
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="squish flex h-11 w-11 items-center justify-center rounded-2xl bg-sunny text-ink shadow-[0_6px_0_0_#E59A12] md:hidden"
        >
          <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border-4 border-white bg-white/95 p-3 shadow-xl backdrop-blur-md md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-xl text-ink hover:bg-cream-deep"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#enroll"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-2xl bg-coral px-4 py-3 text-center text-xl font-extrabold text-white"
          >
            Book a Visit
          </a>
        </div>
      )}
    </header>
  );
}
