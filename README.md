# 🌟 Pearl's Haven Dayhome

> **Nurturing little minds, one day at a time.** Safe hands, happy hearts.

A warm, playful, single-page marketing website for **Pearl's Haven Dayhome** — a fully licensed home dayhome in Costa Mesa Close NE for children ages 1–5. Built to feel alive and joyful for families with young children, with soft candy colours, friendly rounded type, cute 3D characters, and lots of gentle motion.

---

## ✨ Features

- **Playful, kid-friendly design** — candy palette, chunky rounded display type (Baloo 2) paired with a highly readable body face (Nunito).
- **3D character art** — space, science & dinosaur themed 3D illustrations from Microsoft Fluent Emoji.
- **Lots of life & motion** — scroll-triggered reveals, parallax floaters, count-up stats, "poke to wiggle" characters, drifting bubbles, CSS shooting stars, and a confetti burst on form submit.
- **Fully responsive** — looks great from small phones to desktop.
- **Accessible by default** — keyboard focus styles, a skip-link, semantic markup, and full `prefers-reduced-motion` support (all motion is disabled for users who ask for it).
- **Real business info baked in** — programs, daily schedule, learning areas, credentials, and contact details.

## 🧩 Sections

1. **Hero** — welcome, tagline, licensing & subsidy badges, and key stats.
2. **Our Care** — caregiver intro, credentials (ECE Level 3, 8+ years, fully licensed), and why families love us.
3. **What your child will learn & love** — the cozy learning spaces (reading corner, arts & craft, teepee nook, Montessori, and more).
4. **Programs** — age-based groups for ages 1–5.
5. **Our Day** — a sticker-chart style daily schedule.
6. **Book a Visit** — contact details and an inquiry form.

## 🛠️ Tech Stack

| Tool | Purpose |
| --- | --- |
| [Next.js 16](https://nextjs.org) (App Router) | React framework |
| [React 19](https://react.dev) | UI library |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [Framer Motion 12](https://www.framer.com/motion/) | Scroll & interaction animations |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Run the production server
npm run start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Theme tokens + keyframe animations
│   ├── layout.tsx       # Fonts + metadata
│   └── page.tsx         # Page composition
└── components/
    ├── Nav.tsx          # Floating pill navigation
    ├── Hero.tsx         # Hero + parallax floaters
    ├── About.tsx        # Caregiver + credentials
    ├── LearnLove.tsx    # Learning spaces
    ├── Programs.tsx     # Age groups
    ├── DailyDay.tsx     # Daily schedule timeline
    ├── Enroll.tsx       # Contact + inquiry form
    ├── Footer.tsx
    ├── Clay3D.tsx       # 3D image renderer
    ├── Scene.tsx        # Starfield + orbiting planet
    ├── ShootingStars.tsx
    ├── Bubbles.tsx      # Ambient drifting bubbles
    ├── Confetti.tsx     # Form-success burst
    ├── CountUp.tsx      # Animated stat counter
    ├── Parallax.tsx     # Scroll-driven motion
    └── motion.tsx       # Reveal / Stagger primitives
public/
└── 3d/                  # 3D art assets (see ATTRIBUTION.txt)
```

## ☁️ Deployment

The site is a static-friendly Next.js app and deploys cleanly to [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

## 🙏 Credits

- 3D artwork: [Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji) (MIT License) — see [`public/3d/ATTRIBUTION.txt`](public/3d/ATTRIBUTION.txt).
- Fonts: [Baloo 2](https://fonts.google.com/specimen/Baloo+2) & [Nunito](https://fonts.google.com/specimen/Nunito) via Google Fonts.

## 📬 Contact

**Pearl's Haven Dayhome** · 
📧 pearlshaven@gmail.com ·
Hours: Mon–Fri, 7:00am – 6:00pm · Fully licensed · Government grant & subsidy available

---

<sub>Built with care. 💛</sub>
