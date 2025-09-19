"use client"
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "motion/react";
import React from 'react'
import src from "@/public/publicLogo.png"
import Image from 'next/image'

const LoaderPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-cover flex justify-center items-end bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url(/loaderBackground.jpg)' }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="w-full flex flex-col items-center relative z-10 pb-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            className="mb-16" 
            alt="logo" 
            height={140} 
            width={140} 
            src={src} 
          />
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex justify-end pr-10"
        >
          <div className="flex items-baseline">
            <NumberTicker 
              className="font-cormorant text-6xl md:text-7xl" 
              value={100} 
            />
            <span className="font-cormorant text-3xl md:text-4xl text-white ml-1">%</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoaderPage
