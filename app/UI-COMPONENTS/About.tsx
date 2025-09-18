"use client"
import { motion } from "motion/react"
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiOpenai, SiVercel, SiPostgresql } from "react-icons/si"

const technologies = [
  { name: "React", icon: <FaReact />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript />, category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
  { name: "Python", icon: <FaPython />, category: "Backend" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "Database" },
  { name: "OpenAI", icon: <SiOpenai />, category: "AI" },
  { name: "Vercel", icon: <SiVercel />, category: "Deployment" },
]

export default function About() {
  return (
    <section id="about" className="bg-gray-50 text-black py-24 border-t border-gray-200">
      <div className="mclane-grid">
        {/* Header */}
        <div className="col-span-12 md:col-span-8 mb-16">
          <h2 className="mclane-text-3xl font-zalando font-light mb-8">About</h2>
          <div className="space-y-6">
            <p className="mclane-text-lg font-zalando text-gray-700 leading-relaxed">
              I'm a full-stack developer based in France, specializing in building 
              modern web applications that bridge the gap between design and functionality.
            </p>
            <p className="mclane-text-base font-zalando text-gray-600 leading-relaxed">
              With expertise in React, Next.js, and Node.js, I create scalable solutions 
              that prioritize user experience and performance. I'm particularly passionate 
              about AI integration and building SaaS platforms that solve real problems.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="col-span-12 md:col-span-8 mb-16">
          <h3 className="mclane-text-xl font-zalando font-light mb-8">Experience</h3>
          <div className="space-y-8">
            <div className="border-l border-gray-200 pl-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="mclane-text-xs font-zalando text-gray-400 uppercase tracking-wide">
                  2023 - Present
                </span>
              </div>
              <h4 className="mclane-text-lg font-zalando font-medium mb-2">Full Stack Developer</h4>
              <p className="mclane-text-sm font-zalando text-gray-600">
                Freelance • Building modern web applications and SaaS platforms
              </p>
            </div>
            
            <div className="border-l border-gray-200 pl-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="mclane-text-xs font-zalando text-gray-400 uppercase tracking-wide">
                  2022 - 2023
                </span>
              </div>
              <h4 className="mclane-text-lg font-zalando font-medium mb-2">Frontend Developer</h4>
              <p className="mclane-text-sm font-zalando text-gray-600">
                Various Projects • Specialized in React and modern web technologies
              </p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="col-span-12 md:col-span-16">
          <h3 className="mclane-text-xl font-zalando font-light mb-8">Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <div className="text-2xl text-gray-600 group-hover:text-black transition-colors mb-3">
                  {tech.icon}
                </div>
                <span className="mclane-text-sm font-zalando text-gray-700 group-hover:text-black transition-colors">
                  {tech.name}
                </span>
                <span className="mclane-text-xs font-zalando text-gray-400 mt-1">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}