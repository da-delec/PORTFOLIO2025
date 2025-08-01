"use client"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { motion } from "motion/react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 relative overflow-hidden pt-16">
     
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute top-0  right-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full "></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className=" tracking-widefont-satoshi space-y-8">
            <motion.h1 initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 , ease: "easeInOut" , delay: 0.2 }} className="text-5xl md:text-7xl lg:text-8xl ">
              Hi 👋
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              I'm <AuroraText className="font-satoshi tracking-wide text-7xl font-black">Corentin</AuroraText>
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 , ease: "easeInOut", delay: 0.3 }} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              I'm a full stack developer and I build modern SaaS applications and MVPs using cutting-edge technologies. 
              Specializing in Next.js, TypeScript, and AI integrations.
            </motion.p>
          </div>

          <motion.div  initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 , ease: "easeInOut", delay: 0.5 }} className="flex flex-wrap gap-4 justify-center items-center">
            <a className=" " href="#Stack">
            <Button size="lg" className="group cursor-pointer">
              View My Expertise
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>
            <a className=" " href="#contact">
            <Button variant="outline" size="lg" className="cursor-pointer">
              Get In Touch
            </Button>
            </a>
          </motion.div>

          <div className="flex justify-center space-x-6">
          
            <motion.a initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 , ease: "easeInOut", delay: 0.6 }} href="https://www.linkedin.com/in/corentin-delesalle-307829214" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 , ease: "easeInOut", delay: 0.7 }} href="mailto:delesallecorentin3@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}