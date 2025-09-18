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
    <section ref={ref} className="min-h-screen bg-gray-50 text-black flex items-center justify-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-zalando font-medium mclane-text-lg md:mclane-text-xl mb-40 leading-relaxed text-black">
            <span className=" font-[Cormorant] italic font-semibold">Full Stack developer based in France.</span> Specialized in building modern web applications 
            with React, Next.js and Node.js. Currently available for new projects and collaborations.
          </p>
        </motion.div>
      </div>
      <motion.h1 
        className="absolute bottom-0 xs:mb-0  text-[118px] mb-20 xs:text-[150px] sm:text-[200px] md:text-[250px] lg:text-[300px] xl:text-[400px] font-zalando font-bold leading-none" 
        style={{ 
          marginBottom: '-0.10em',
          filter: `blur(${blur}px)`,
          opacity: opacity,
          y: y
        }}
      >
        corentin
      </motion.h1>
    </section>
  )
}