"use client"
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatePresence, motion } from "motion/react";
import React from 'react'
import src from "@/public/publicLogo.png"
import Image from 'next/image'
const LoaderPage = () => {
  return (
 
    <motion.div
       initial={{opacity:0.7}}
       animate={{opacity:1}}
       exit={{opacity:0 ,}}
       transition={{duration:1}}

      className="min-h-screen bg-cover  flex justify-center items-end bg-center bg-no-repeat"
      style={{backgroundImage: 'url(/loaderBackground.jpg)'}}
    >
       <div className=" w-full flex flex-col items-center" id="data-container">
        <Image className=' mb-14' alt='logo' height={130} width={130} src={src} />
        <div className=" w-full flex justify-end mb-6 mr-10 " id="couter">
         <NumberTicker className=" font-[Cormorant] text-5xl md:text-6xl italic" value={100} />
         <h1> %</h1>
        </div>
        </div>
    
      
    </motion.div>
  
  )
}

export default LoaderPage
