import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <About/>
      <Experience />
      <Projects />
      <Skills />
      <Education/>
      <Contact/>
    </main>
  );
}