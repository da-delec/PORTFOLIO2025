"use client"
import { motion } from "motion/react"

const hobbies = [
  {
    title: "Chess",
    description: "Strategic thinking and pattern recognition",
    image: "/chess.jpg",
    bgPosition: "center"
  },
  {
    title: "Rock Music",
    description: "Guitar riffs and powerful rhythms",
    image: "/rock.jpg",
    bgPosition: "center"
  },
  {
    title: "Brazilian Jiu-Jitsu",
    description: "The gentle art of problem solving",
    image: "/jjb.jpg",
    bgPosition: "center"
  },
  {
    title: "Piano",
    description: "Classical melodies and compositions",
    image: "/piano.jpg",
    bgPosition: "center"
  },
  {
    title: "Cinema",
    description: "Storytelling through visual art",
    image: "/cinema.jpx.jpg",
    bgPosition: "center"
  }
]

export function Hobbies() {
  return (
    <section id="hobbies" className="bg-gray-50 text-black py-24 border-t border-gray-200">
      <div className="mclane-grid">
        {/* Header */}
        <div className="col-span-12 md:col-span-24 mb-16">
          <h2 className="mclane-text-3xl font-cormorant text-center">Beyond Code</h2>
        </div>

        {/* Hobbies Cards */}
        <div className="col-span-12 md:col-span-24">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-200"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  style={{ 
                    backgroundImage: `url(${hobby.image})`,
                    backgroundPosition: hobby.bgPosition
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="mclane-text-2xl font-cormorant-light text-white mb-3">
                      {hobby.title}
                    </h3>
                    <p className="mclane-text-base font-cabinet text-gray-200">
                      {hobby.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}