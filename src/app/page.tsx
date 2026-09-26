import { Starfield } from "@/components/background/Starfield";
import { NebulaLayer } from "@/components/background/NebulaLayer";
import { CursorGlow } from "@/components/background/CursorGlow";
import { Nav } from "@/components/layout/Nav";
import { ProgressRail } from "@/components/layout/ProgressRail";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Starfield />
      <NebulaLayer />
      <CursorGlow />
      <ProgressRail />
      <Nav />

      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />

      <Footer />
    </div>
  );
}
