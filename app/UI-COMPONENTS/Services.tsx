"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🚀",
    title: "SaaS Development",
    description: "Complete SaaS application development from concept to launch, including user management, billing, and analytics.",
    features: [
      "Multi-tenant architecture",
      "Subscription management",
      "Real-time features",
      "Admin dashboards"
    ]
  },
  {
    icon: "⚡",
    title: "MVP Development",
    description: "Rapid MVP development to validate your ideas quickly and cost-effectively with modern technologies.",
    features: [
      "Rapid prototyping",
      "User feedback integration",
      "Scalable architecture",
      "Quick iteration cycles"
    ]
  },
  {
    icon: "🤖",
    title: "AI Integration",
    description: "Integrate cutting-edge AI capabilities into your applications to enhance user experience and automate processes.",
    features: [
      "OpenAI API integration",
      "Custom AI chatbots",
      "Data analysis & insights",
      "Automated workflows"
    ]
  },
  {
    icon: "💳",
    title: "Payment Integration",
    description: "Secure payment processing with Stripe, including subscriptions, one-time payments, and marketplace features.",
    features: [
      "Stripe integration",
      "Subscription billing",
      "Marketplace payments",
      "Payment analytics"
    ]
  },
  {
    icon: "🔐",
    title: "Authentication Systems",
    description: "Robust user authentication and authorization systems with social logins and enterprise features.",
    features: [
      "OAuth integration",
      "Multi-factor authentication",
      "Role-based access",
      "Session management"
    ]
  },
  {
    icon: "🔧",
    title: "API Development",
    description: "RESTful and GraphQL API development with proper documentation, testing, and security measures.",
    features: [
      "RESTful APIs",
      "GraphQL endpoints",
      "API documentation",
      "Rate limiting & security"
    ]
  }
];

export function Services() {
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
      <section id="About" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6">
                Services I
                <span className="block text-primary">Offer</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                From initial concept to production deployment, I provide comprehensive 
                development services to bring your ideas to life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="p-8 h-full">
                  <div className="text-center mb-6">
                    <span className="text-4xl mb-4 block">{service.icon}</span>
                    <h3 className="text-xl mb-3 font-medium">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-2xl mb-6">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
                Let's discuss your project requirements and how I can help bring your vision to life 
                with modern technologies and best practices. Based in France, available for remote work worldwide.
              </p>
              <Button size="lg" style={{ backgroundColor: '#0891b2', color: 'white' }} className="hover:opacity-90">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}