import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Education />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
