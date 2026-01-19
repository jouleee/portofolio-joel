"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, InstagramIcon, Linkedin, Mail, Send } from "lucide-react"
import { useScrollReveal, useStaggeredReveal } from "@/hooks/use-scroll-reveal"

export function ContactSection() {
  const titleReveal = useScrollReveal({ delay: 0, triggerOnce: false })
  const formReveal = useScrollReveal({ delay: 100, triggerOnce: false })
  const { ref: socialsRef, visibleItems } = useStaggeredReveal(3, 100)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/jouleee",
      username: "@jouleee",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/juliandwi",
      username: "@juliandwi",
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      url: "https://instagram.com/juliandwii",
      username: "@juliandwii  ",
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.95_0.05_265_/_0.3),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,_oklch(0.2_0.12_265_/_0.2),_transparent_50%)]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Section Title */}
          <div 
            ref={titleReveal.ref}
            className={`text-center space-y-3 sm:space-y-4 ${
              titleReveal.isVisible 
                ? titleReveal.scrollDirection === 'down' 
                  ? 'reveal-from-bottom' 
                  : 'reveal-from-top'
                : 'opacity-0'
            }`}
            suppressHydrationWarning
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Get In Touch</h2>
            <div className="w-20 h-1 accent-divider mx-auto" />
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Form */}
            <Card 
              ref={formReveal.ref}
              className={`p-8 glass-card neon-border ${
                formReveal.isVisible 
                  ? formReveal.scrollDirection === 'down' 
                    ? 'reveal-from-left' 
                    : 'reveal-from-right'
                  : 'opacity-0'
              }`}
              suppressHydrationWarning
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass-card border-primary/20 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass-card border-primary/20 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="glass-card border-primary/20 focus:border-primary/50 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                  <div className="absolute inset-0 btn-shimmer" />
                </Button>
              </form>
            </Card>

            {/* Social Links */}
            <div className="space-y-6">
              <div className={formReveal.isVisible ? 'reveal-from-right' : 'opacity-0'}>
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Feel free to reach out through any of these platforms. I typically respond within 24 hours.
                </p>
              </div>

              <div ref={socialsRef} className="space-y-4" suppressHydrationWarning>
                {socialLinks.map((link, index) => (
                  <Card
                    key={index}
                    className={`p-4 glass-card hover:neon-border transition-all duration-300 group cursor-pointer ${
                      visibleItems.has(index) ? 'reveal-from-right' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg icon-glow flex items-center justify-center">
                        <link.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium group-hover:text-primary transition-colors">{link.label}</p>
                        <p className="text-sm text-muted-foreground">{link.username}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground relative z-10">
        <p>© 2025 codeJoel. Built with Next.js and Tailwind CSS.</p>
      </div>
    </section>
  )
}
