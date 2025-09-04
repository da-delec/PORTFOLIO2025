"use client"
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import source from "@/public/flowscriptor.png"
import Image from "next/image";
import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { title } from "process";
import linkfaster from "@/public/linkfaster.png";

const projects = [
  {
    title: "Flowscriptor",
    description: "Flowecriptor is an AI-powered cold call script generator designed to help freelancers and salespeople speak with confidence, handle objections, and close more deals — without the stress.",
    image: source,
    technologies: ["Next.js", "TypeScript", "Supabase","Prisma", "Stripe", "OpenAI","Better-auth"],
    features: ["Real-time Analytics", "AI Insights", "Payment Integration"],
    demoUrl: "https://flowscriptor-ai.vercel.app/",
 
  },
  {
    title:"Linkfaster",
    description:"LinkFaster is a SaaS that lets developers, designers, and creators centralize all their links in one sleek, customizable page — a faster, smarter alternative to Linktree.",
    image:linkfaster,
    technologies: ["Next.js", "TypeScript", "Supabase","Prisma", "Stripe", "OpenAI","Better-auth"],
    features: ["Real-time Analytics", "AI Insights", "Payment Integration"],
    demoUrl: "https://linkfaster.link/",
  }

];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1,
  });

  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 50 }} 
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <section
      id="Project" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6">
                Featured
                <span className="block text-primary">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Here are the latest project I've built, ranging from SaaS applications 
                to AI-powered solutions.
              </p>
            </div>

            <div className="space-y-12">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''}`}>
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        width={300}
                        height={300}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl lg:text-3xl mb-4">{project.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="mb-3">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button asChild style={{ backgroundColor: '#0891b2', color: 'white' }} className="hover:opacity-90">
                          <a href={project.demoUrl}>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Go to Flowscriptor
                          </a>
                        </Button>
                       
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}