"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/ACTION/resend";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Calendar, Github, Linkedin, Twitter } from "lucide-react";
import { useActionState } from "react";
import { useTransition } from "react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [state, formAction] = useActionState(sendEmail, {});
  const [isPending, startTransition] = useTransition();
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
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6">
                Let's Work
                <span className="block text-primary">Together</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                Have a project in mind? I'm always excited to work on new challenges 
                and help bring innovative ideas to life.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl mb-6">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-medium">Email</h4>
                        <a 
                          href="mailto:corentin.delesalle@example.com" 
                          className="text-muted-foreground font-light hover:text-primary transition-colors"
                        >
                          delesallecorentin3@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-medium">Response Time</h4>
                        <p className="text-muted-foreground font-light">Usually within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-medium">Location</h4>
                        <p className="text-muted-foreground font-light">France • Open for remote work</p>
                      </div>
                    </div>
                  </div>
                </div>

               
              </div>

              <Card className="p-8">
                <form action={formAction} className="space-y-6">
                  {/* Messages d'état */}
                  {state.error && (
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
                      <p className="text-destructive text-sm">{state.error}</p>
                    </div>
                  )}
                  
                  {state.success && (
                    <div className="p-4 bg-green-100 border border-green-200 rounded-md">
                      <p className="text-green-800 text-sm">{state.success}</p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project">Project Type</Label>
                    <Input id="project" name="project" placeholder="SaaS, MVP, AI Integration, etc." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Input id="budget" name="budget" placeholder="$5k - $10k, $10k - $25k, etc." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell me about your project, timeline, and requirements..."
                      className="min-h-32"
                    />
                  </div>

                  <Button className="w-full hover:opacity-90 text-white" style={{ backgroundColor: '#0891b2' }} size="lg" disabled={isPending}>
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}