"use client"
import { Hero } from "./UI-COMPONENTS/Hero";
import { Projects } from "./UI-COMPONENTS/Projects";
import About from "./UI-COMPONENTS/About";
import { Hobbies } from "./UI-COMPONENTS/Hobbies";
import { Contact } from "./UI-COMPONENTS/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Hobbies />
      <Projects />
      <Contact />
      
      <footer className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="mclane-grid">
          <div className="col-span-12 md:col-span-24 text-center">
            <p className="mclane-text-sm font-zalando text-gray-500">
              © 2024 Corentin Delesalle. Full Stack Developer based in France.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}