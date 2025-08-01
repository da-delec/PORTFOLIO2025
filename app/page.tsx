
import Image from "next/image";
import { ModeToggle } from "@/components/toggleTheme";
import Navbar from "./UI-COMPONENTS/Navbar";
import { Hero } from "./UI-COMPONENTS/Hero";


import { Skills } from "./UI-COMPONENTS/Skills";
import { Services } from "./UI-COMPONENTS/Services";
import { Projects } from "./UI-COMPONENTS/Projects";
import { About } from "./UI-COMPONENTS/About";
import { Contact } from "./UI-COMPONENTS/Contact";
export default function Home() {
 
  return (
    <>
    <Navbar />
    <Hero />
    <Skills />
    <About />
    <Services />
    <Projects />
    <Contact />
    <footer className="bg-muted/30 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Corentin Delesalle. Full Stack Developer based in France. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
}
