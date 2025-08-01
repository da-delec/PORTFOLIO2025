"use client"
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "framer-motion";

const technologies = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs"]
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: ["PostgreSQL", "Supabase", "Prisma", "Redis"]
  },
  {
    category: "Integration",
    icon: "🔗",
    skills: ["Stripe", "Authentication", "OAuth", "Webhooks", "Third-party APIs"]
  },
  {
    category: "AI & ML",
    icon: "🤖",
    skills: ["OpenAI API", "LangChain", "AI Chatbots"]
  },
  {
    category: "DevOps",
    icon: "🚀",
    skills: ["Vercel", "CI/CD", "Git"]
  }
];

const specialties = [
  "SaaS Development",
  "MVP Creation",
  "E-commerce Solutions",
  "AI Integration",
  "Payment Processing",
  "User Authentication",
  "Real-time Features",
  "API Development"
];

export function Skills() {
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
      <section id="Stack" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6">
                Technologies & 
                <span className="block text-primary">Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                I work with modern technologies to build scalable, performant applications 
                that deliver exceptional user experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {technologies.map((tech, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{tech.icon}</span>
                    <h3 className="text-xl font-medium">{tech.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-2xl mb-6">Specializations</h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {specialties.map((specialty, index) => (
                  <Badge key={index} variant="outline" className="px-4 py-2">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}