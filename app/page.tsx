import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Portfolio from "@/sections/Portfolio";
import Education from "@/sections/Education";

export default function Home() {
  return (
    <main>
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Portfolio />
    </main>
  );
}