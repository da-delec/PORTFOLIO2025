"use client"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";
import { GradientBars } from "@/components/background";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { BorderBeam } from "@/components/magicui/border-beam";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
      <GradientBars  colors={[ "#0891b2", "transparent"]} />
      
      <div className="relative z-10 container mx-auto px-6  text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12 max-w-4xl flex flex-col  mx-auto"
        >
          <div className=" mt-16  space-y-8">
            <Badge variant="outline" className="mx-auto px-4 py-2 text-sm font-bold bg-background/50 backdrop-blur-sm border border-border/80">
            <BorderBeam size={60} colorFrom="#0891b2" colorTo="#0891b2" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available • Full Stack Developer
              </div>
            </Badge>
            
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-['Satoshi-Black'] tracking-tighter leading-none bg-gradient-to-b from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                I'm
              </h1>
              <TypingAnimation 
                className="text-6xl md:text-9xl lg:text-[10rem] font-['Satoshi-Black'] tracking-tighter leading-none bg-gradient-to-b from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent"
               >Corentin</TypingAnimation>
            </div>
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-8 max-w-xl mx-auto" id="text-container">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground tracking-wide leading-relaxed">
              I craft digital experiences that <span className="italic">matter</span>
            </p>

          <p className="text-lg md:text-xl  text-gray-600 sm:mx-8 dark:text-gray-300 text-center font-bold leading-relaxed">
            Specialized in Next.js, TypeScript, and AI integrations. 
            Building scalable SaaS applications with modern technologies.
          </p>

          <Button 
            variant="outline" 
            size="lg" 
            className="group text-base px-6 py-3 hover:scale-105 transition-all duration-200 hover:border-primary/50 mx-auto"
          >
            <a href="#Stack" className="flex items-center gap-2">
              Discover my work
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </Button>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}