import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Overview } from "@/sections/Overview";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Visualizations } from "@/sections/Visualizations";
import { Experience } from "@/sections/Experience";
import { Achievements } from "@/sections/Achievements";
import { Certifications } from "@/sections/Certifications";
import { Blog } from "@/sections/Blog";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ThemeProvider } from "@/contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Overview />
          <About />
          <Skills />
          <Projects />
          <Visualizations />
          <Experience />
          <Achievements />
          <Certifications />
          <Blog />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
