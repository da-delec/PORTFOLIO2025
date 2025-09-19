"use client"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  // Animation qui augmente le flou et fait disparaître au scroll
  const blur = useTransform(scrollYProgress, [0, 1], [0, 20])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section 
      ref={ref} 
      className="min-h-screen text-black flex items-center justify-center relative overflow-hidden"
     
    >
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-black/20 flex-1 max-w-24"></div>
            <div className="mx-6">
              <span className="font-cormorant text-black text-lg md:text-xl">
                Full Stack developer based in France.
              </span>
            </div>
            <div className="h-px bg-black/20 flex-1 max-w-24"></div>
          </div>
          
          <p className="font-cabinet text-base md:text-lg mb-8 leading-relaxed text-black/80 max-w-2xl mx-auto">
            Specialized in building modern web applications 
            with React, Next.js and Node.js. Currently available for new projects and collaborations.
          </p>
          
          <div className="flex items-center justify-center mb-32">
            <div className="h-px bg-black/20 flex-1 max-w-20"></div>
            <div className="mx-6 flex items-center space-x-4 text-sm font-cabinet text-black/60">
              <span>Next.js</span>
              <span className="text-black/30">•</span>
              <span>Tailwind</span>
              <span className="text-black/30">•</span>
              <span>PostgreSQL</span>
              <span className="text-black/30">•</span>
              <span>29 ans</span>
            </div>
            <div className="h-px bg-black/20 flex-1 max-w-20"></div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-0 xs:mb-0 mb-20 text-[105px] xs:text-[130px] sm:text-[180px] md:text-[230px] lg:text-[270px] xl:text-[330px] font-cabinet-black leading-[0.85]" 
        style={{ 
          filter: `blur(${blur}px)`,
          opacity: opacity,
          y: y
        }}
      >
        <h2 className="text-[0.4em] ml-1 -mb-2 font-cabinet-medium">Hello, I'm</h2>
        <h1>corentin</h1>
      </motion.div>
    </section>
  )
}