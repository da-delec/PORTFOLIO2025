"use client"
import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    image: "/flowscriptor.png",
    link: "https://flowscriptor-ai.vercel.app/",
  },
  {
    image: "/linkfaster.png", 
    link: "https://linkfaster.link/",
  }
]

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="work" className="bg-gray-50 py-80 ">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="mclane-text-3xl font-zalando font-light text-center mb-16">Selected Work</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <Link href={project.link} target="_blank" className="block">
                <div className="relative bg-gray-50 rounded-lg overflow-hidden aspect-[4/3] mb-4">
                  <Image
                    src={project.image}
                    alt="Project"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="w-4 h-4"></div>
                  <motion.div 
                    animate={{ 
                      x: hoveredProject === index ? 4 : 0,
                      y: hoveredProject === index ? -4 : 0 
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      fill="none"
                      className="text-gray-600 group-hover:text-black transition-colors"
                    >
                      <path 
                        d="M5 15L15 5M15 5H7M15 5V13" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}