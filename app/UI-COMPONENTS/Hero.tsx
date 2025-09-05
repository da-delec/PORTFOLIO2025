"use client"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";
import { GradientBars } from "@/components/background";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { BorderBeam } from "@/components/magicui/border-beam";
import { AuroraText } from "@/components/magicui/aurora-text";

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
            <Badge variant="outline" className="mx-auto px-4 py-2 text-sm font-black  bg-background/50 backdrop-blur-sm border border-border/80">
            <BorderBeam size={60} colorFrom="#0891b2" colorTo="#0891b2" />
              <div className="flex items-center font-bold gap-2">
                
                <h1 className=" font-bold">&lt; FullStack Developer /&gt;</h1>
              </div>
            </Badge>
            
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-['Satoshi-Black'] tracking-tighter leading-none bg-gradient-to-b from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                I'm
              </h1>
              <AuroraText>
              <TypingAnimation 
              
                className="text-6xl md:text-9xl lg:text-[10rem] font-['Satoshi-Black'] tracking-tighter leading-none bg-gradient-to-b from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent"
               >Corentin</TypingAnimation>
               </AuroraText>
            </div>
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-8 max-w-xl mx-auto" id="text-container">
            <p className="text-lg md:text-2xl lg:text-3xl font-semibold text-foreground tracking-wide leading-relaxed">
              I craft digital experiences that <span className="italic">matter</span>
            </p>

          <p className="text-md md:text-xl  text-gray-600 sm:mx-8 dark:text-gray-300 text-center font-bold leading-relaxed">
            Specialized in Next.js, TypeScript, and AI integrations. 
            Building scalable SaaS applications with modern technologies.
          </p>

          <Button 
            variant="outline" 
            size="lg" 
            className="group relative text-base px-6 py-3 mx-auto overflow-hidden
                       bg-gradient-to-br from-white/20 via-white/10 to-white/5
                       backdrop-blur-xl border border-white/20
                       hover:bg-gradient-to-br hover:from-white/30 hover:via-white/15 hover:to-white/10
                       hover:border-white/30 hover:shadow-xl hover:shadow-cyan-500/20
                       transition-all duration-500 ease-out
                       before:absolute before:inset-0 before:bg-gradient-to-r 
                       before:from-transparent before:via-white/20 before:to-transparent
                       before:translate-x-[-200%] before:skew-x-12
                       hover:before:translate-x-[200%] before:transition-transform before:duration-1000
                       after:absolute after:inset-0 after:bg-gradient-to-br
                       after:from-cyan-400/5 after:via-blue-500/5 after:to-purple-600/5
                       after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500"
          >
            <a href="#Stack" className="flex items-center gap-2 relative z-10">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 dark:from-white dark:to-gray-400 bg-clip-text text-transparent font-semibold group-hover:from-foreground group-hover:to-foreground/80 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                Discover my work
              </span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-foreground/70 group-hover:text-foreground dark:text-gray-400 dark:group-hover:text-gray-300" />
            </a>
          </Button>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}