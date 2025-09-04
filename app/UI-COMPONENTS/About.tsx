"use client"
import { Card } from "@/components/ui/card";
import { Music,Clapperboard, Code, Piano, Cpu, Trophy, HeartHandshake } from "lucide-react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "framer-motion";

const passions = [
  {
    icon: Music,
    title: "Rock Music",
    description: "Passionate about rock music and music in general. Music fuels my creativity and keeps me energized while coding. Oh and I'm a big fan of Guns N' Roses and Ozzy Osbourne. 🤘  ",
    color: "text-red-500"
  },
  {
    icon:Clapperboard,
    title: "Cinema",
    description: "I love watching movies and TV shows. It's a great way to relax and escape from the daily grind. I'm a big fan of Quentin Tarantino and Christopher Nolan.",
    color: "text-pink-500"
  },
  {
    icon: Code,
    title: "Coding",
    description: "Love the art of coding and problem-solving. There's nothing quite like the satisfaction of building something from scratch.",
    color: "text-blue-500"
  },
  {
    icon: Piano,
    title: "Piano",
    description: "Currently learning to play piano. The discipline and precision required translates well to programming.",
    color: "text-teal-600"
  },
  {
    icon: Cpu,
    title: "Technology",
    description: "Always excited about emerging technologies and how they can be used to solve real-world problems.",
    color: "text-green-500"
  },
  {
    icon: Trophy,
    title: "Chess",
    description: "Strategic thinking in chess helps me approach complex coding challenges with patience and logic.",
    color: "text-yellow-600"
  }
 
];

export function About() {
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
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6">
                Beyond
                <span className="block text-primary">Code</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                When I'm not building applications, you'll find me exploring my passions 
                that keep me creative, focused, and constantly learning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {passions.map((passion, index) => {
                const IconComponent = passion.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="flex items-center justify-center w-16 h-16 bg-background rounded-full shadow-md">
                          <IconComponent className={`h-8 w-8 ${passion.color}`} />
                        </div>
                      </div>
                      <h3 className="text-xl">{passion.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {passion.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <Card className="p-8 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <HeartHandshake className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl">Let's Connect</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I believe that great work comes from passionate people. Whether you want to discuss 
                  a project, share music recommendations, talk about the latest tech trends, or even 
                  challenge me to a chess game, I'd love to hear from you. Let's create something amazing together!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}