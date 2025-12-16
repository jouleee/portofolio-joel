"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export function ContactSection() {
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
      icon: Mail,
      label: "Email",
      url: "mailto:julian.dsatrio@gmail.com",
      username: "julian.dsatrio@gmail.com",
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.2_0.12_265_/_0.2),_transparent_50%)]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 glass-card neon-border">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                </Button>
              </form>
            </Card>

            {/* Social Links */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Feel free to reach out through any of these platforms. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <Card
                    key={index}
                    className="p-4 glass-card hover:neon-border transition-all duration-300 group cursor-pointer"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300">
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
        <p>© 2025 Your Name. Built with Next.js and Tailwind CSS.</p>
      </div>
    </section>
  )
}
