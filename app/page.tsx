"use client"
import { Hero } from "./UI-COMPONENTS/Hero";
import { Projects } from "./UI-COMPONENTS/Projects";
import About from "./UI-COMPONENTS/About";
import { Hobbies } from "./UI-COMPONENTS/Hobbies";
import { useEffect, useState } from "react";
import { Contact } from "./UI-COMPONENTS/Contact";
import LoaderPage from "./UI-COMPONENTS/Loader";

export default function Home() {
  const [isFirstRender, setIsFirstRender] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setIsFirstRender(false)
    }, 3000)
  }, [])

  if (isFirstRender) {
    return <LoaderPage />
  }

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
            <p className="mclane-text-sm font-cabinet text-gray-500">
              © 2024 Corentin Delesalle. Full Stack Developer based in France.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}