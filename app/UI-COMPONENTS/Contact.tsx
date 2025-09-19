"use client"
import { motion } from "motion/react"
import Link from "next/link"
import { useState } from "react"
import { sendEmail } from "@/lib/ACTION/resend"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    try {
      await sendEmail({}, formData)
      setSubmitStatus('success')
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-gray-50 text-black py-24 border-t border-gray-200">
      <div className="mclane-grid">
        {/* Header */}
        <div className="col-span-12 md:col-span-24 mb-16">
          <h2 className="mclane-text-3xl font-cormorant">Let's Work Together</h2>
        </div>

        {/* Contact info */}
        <div className="col-span-12 md:col-span-8 mb-16 md:mb-0">
          <div className="space-y-12">
            <div>
              <h3 className="mclane-text-xl font-cormorant mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <Link 
                  href="mailto:delesallecorentin3@gmail.com"
                  className="block mclane-text-base font-cabinet text-gray-700 hover:text-black transition-colors"
                >
                  delesallecorentin3@gmail.com
                </Link>
                <Link 
                  href="https://linkedin.com/in/corentindelesalle"
                  target="_blank"
                  className="block mclane-text-base font-cabinet text-gray-700 hover:text-black transition-colors"
                >
                  LinkedIn
                </Link>
              </div>
            </div>

            <div>
              <h4 className="mclane-text-sm font-cabinet text-gray-400 uppercase tracking-wide mb-4">
                Response Time
              </h4>
              <p className="mclane-text-base font-cabinet text-gray-700">
                Usually within 24 hours
              </p>
            </div>

            <div>
              <h4 className="mclane-text-sm font-cabinet text-gray-400 uppercase tracking-wide mb-4">
                Location
              </h4>
              <p className="mclane-text-base font-cabinet text-gray-700">
                France • Available for remote work
              </p>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="col-span-12 md:col-span-16">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mclane-text-sm font-cabinet text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 mclane-text-base font-cabinet text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mclane-text-sm font-cabinet text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 mclane-text-base font-cabinet text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="project" className="block mclane-text-sm font-cabinet text-gray-600 mb-2">
                Project Type
              </label>
              <input
                type="text"
                id="project"
                name="project"
                className="w-full bg-transparent border-b border-gray-300 pb-2 mclane-text-base font-cabinet text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors"
                placeholder="Web App, SaaS, MVP, etc."
              />
            </div>

            <div>
              <label htmlFor="message" className="block mclane-text-sm font-cabinet text-gray-600 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full bg-transparent border-b border-gray-300 pb-2 mclane-text-base font-cabinet text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {submitStatus === 'success' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mclane-text-sm font-cabinet text-green-600"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mclane-text-sm font-cabinet text-red-600"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center gap-2 mclane-text-sm font-cabinet text-black border-b border-gray-400 hover:border-black pb-1 transition-colors disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <motion.svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none"
                animate={{ x: isSubmitting ? 0 : 2 }}
                transition={{ duration: 0.2 }}
              >
                <path 
                  d="M4 12L12 4M12 4H6M12 4V10" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </motion.svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}