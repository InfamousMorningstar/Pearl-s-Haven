import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LearnLove from "@/components/LearnLove";
import Programs from "@/components/Programs";
import DailyDay from "@/components/DailyDay";
import Enroll from "@/components/Enroll";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/motion";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-coral focus:px-5 focus:py-2.5 focus:font-extrabold focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <LearnLove />
        <Programs />
        <DailyDay />
        <Enroll />
      </main>
      <Footer />
    </>
  );
}
