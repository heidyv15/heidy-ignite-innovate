import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
    return (
          <main className="min-h-screen bg-background overflow-x-hidden">
                <Navbar />
                <Hero />
                <Projects />
                <About />
                <Skills />
                <Contact />
          </main>
        );
};

export default Index;
