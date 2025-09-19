"use client"
import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    image: "/flowscriptor.png",
    link: "https://flowscriptor-ai.vercel.app/",
    title: "Flowscriptor AI",
    category: "AI Platform",
    year: "2024",
    description: "Next-generation AI workflow automation platform with intuitive visual scripting capabilities."
  },
  {
    image: "/linkfaster.png", 
    link: "https://linkfaster.link/",
    title: "LinkFaster",
    category: "Web Application",
    year: "2024", 
    description: "High-performance link management system with advanced analytics and custom domains."
  }
]

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="work" className="bg-white text-black relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100/50"></div>
      
      {/* Ambient decoration */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center mb-8"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-black/20 to-transparent flex-1 max-w-32"></div>
              <span className="mx-6 text-sm font-cabinet-medium tracking-[0.2em] text-black/60 uppercase">Portfolio</span>
              <div className="h-px bg-gradient-to-r from-transparent via-black/20 to-transparent flex-1 max-w-32"></div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-cormorant tracking-tight text-black mb-6"
            >
              Selected Work
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg font-cabinet text-black/60 max-w-2xl mx-auto leading-relaxed"
            >
              Crafting digital experiences that push boundaries and redefine possibilities. 
              Each project represents a unique journey of innovation and excellence.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <motion.div 
                  className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Link href={project.link} target="_blank" className="block">
                    <div className="relative group/image">
                      {/* Image container with luxury border */}
                      <div className="relative bg-gradient-to-br from-gray-200/20 to-gray-100/10 p-1 rounded-2xl">
                        <div className="relative bg-white rounded-xl overflow-hidden aspect-[16/10] shadow-2xl">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={500}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          />
                          
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* External link icon */}
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ 
                              opacity: hoveredProject === index ? 1 : 0,
                              scale: hoveredProject === index ? 1 : 0.8
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200/50 shadow-lg"
                          >
                            <svg 
                              width="20" 
                              height="20" 
                              viewBox="0 0 20 20" 
                              fill="none"
                              className="text-black"
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
                      </div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-gray-300/20 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl"></div>
                    </div>
                  </Link>
                </motion.div>

                {/* Project Info */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-cabinet-medium tracking-[0.15em] text-black/40 uppercase">
                        {project.category}
                      </span>
                      <div className="h-px bg-black/10 flex-1"></div>
                      <span className="text-sm font-cabinet-medium text-black/40">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-cormorant text-black tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg font-cabinet text-black/70 leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                  
                  <Link 
                    href={project.link} 
                    target="_blank"
                    className="inline-flex items-center gap-3 text-black/60 hover:text-black transition-colors duration-300 group/link"
                  >
                    <span className="font-cabinet-medium tracking-wide">View Project</span>
                    <motion.div
                      animate={{ x: hoveredProject === index ? 4 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none"
                        className="group-hover/link:translate-x-1 transition-transform duration-300"
                      >
                        <path 
                          d="M1 8H15M15 8L8 1M15 8L8 15" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}