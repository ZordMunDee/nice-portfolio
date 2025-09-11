import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="space-y-20 py-10 md:py-16">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
