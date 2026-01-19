"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useScrollReveal, useStaggeredReveal } from "@/hooks/use-scroll-reveal"

export function ProjectsSection() {
  const titleReveal = useScrollReveal({ delay: 0, triggerOnce: false })
  const { ref: softwareRef, visibleItems: softwareVisible } = useStaggeredReveal(8, 80)
  const { ref: designRef, visibleItems: designVisible } = useStaggeredReveal(2, 80)
  const { ref: aiRef, visibleItems: aiVisible } = useStaggeredReveal(2, 80)
  const softwareProjects = [
    {
      title: "AtapBumi – Outdoor Gear Rental Mobile App",
      description: "Mobile application for outdoor equipment rental built with Flutter and Laravel. Enables users to browse gear, place rental orders, and manage transactions through a full-stack architecture with RESTful APIs.",
      tags: ["Flutter", "Laravel", "REST API", "MySQL"],
      image: "/placeholder.svg",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "BEM KEMAKOM Announcement Website",
      description: "Lightweight announcement website developed in one night to meet urgent organizational needs. Designed for fast access, clear information delivery, and responsive interaction without database dependency.",
      tags: ["HTML", "JavaScript"],
      image: "/bemkemakom.png",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Bus Ticket Reservation Platform (MERN Stack)",
      description: "Web-based reservation platform backend enabling route management, scheduling, and ticket booking. Designed with scalable REST APIs and structured NoSQL data models for reliable transaction flows.",
      tags: ["Node.js", "Express.js", "MongoDB", "React", "Next.js"],
      image: "/bismilah.png",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Cilimus Badminton Booking System (Cilminton)",
      description: "Web-based booking system and DBMS design for managing sports facility reservations. Provides booking forms, schedule management, and user reservation tracking.",
      tags: ["MySQL", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/cilminton.png",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Computer-Based Test (CBT) System – Physics Festival",
      description: "Backend system for academic competition testing, handling question banks, participants, test sessions, and result recapitulation through Laravel REST APIs.",
      tags: ["Laravel", "REST API"],
      image: "/phyfest.png",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "OpenLab Status Tracker – FPMIPA UPI",
      description: "Real-time dashboard system for monitoring laboratory availability during OpenLab events. Displays live status updates, summary statistics, and last-updated indicators for operational transparency.",
      tags: ["Laravel"],
      image: "/openlab.png",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Parabot Ulin – Outdoor Gear Rental Website",
      description: "Web-based outdoor equipment rental platform that supports booking, availability tracking, returns, and payment monitoring, designed to streamline rental operations.",
      tags: ["Laravel", "DBMS"],
      image: "/placeholder.svg",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "bersekolah.com – Scholarship Management Platform",
      description: "Production-ready scholarship website developed in collaboration with a real foundation. Provides scholarship information, registration, and admin management with a modern, accessible UI.",
      tags: ["Astro", "React", "TypeScript", "shadcn/ui"],
      image: "/bersekolah.png",
      demoUrl: "#",
      repoUrl: "#",
    },
  ]

  const designProjects = [
    {
      title: "Portfolio CMS",
      description: "Content management system for portfolio websites with drag-and-drop builder and SEO optimization.",
      tags: ["Next.js", "Tailwind", "Prisma", "Vercel"],
      image: "/cms-website-builder.jpg",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with forecasts, location search, and interactive maps.",
      tags: ["React", "TypeScript", "OpenWeather API", "Leaflet"],
      image: "/weather-dashboard-interface.png",
      demoUrl: "#",
      repoUrl: "#",
    },
  ]

  const aiProjects = [
    {
      title: "AI Chat Application",
      description: "Intelligent chatbot interface powered by AI with conversation history and context awareness.",
      tags: ["React", "Python", "FastAPI", "OpenAI"],
      image: "/ai-chat-interface.png",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "ML Sentiment Analyzer",
      description: "Machine learning model for sentiment analysis with real-time data visualization.",
      tags: ["Python", "TensorFlow", "Flask", "Pandas"],
      image: "/machine-learning-sentiment-analysis-dashboard.jpg",
      demoUrl: "#",
      repoUrl: "#",
    },
  ]

  const ProjectCard = ({ project }: { project: (typeof softwareProjects)[0] }) => (
    <Card className="overflow-hidden glass-card">
      <div className="relative h-40 sm:h-48 overflow-hidden bg-secondary/20">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Header */}
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Featured Projects</h2>
            <div className="w-20 h-1 accent-divider mx-auto" />
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              A curated collection of my work across software development, design, and AI/ML domains.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">Software</h3>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
              <p className="text-sm sm:text-base text-muted-foreground">Full-stack web applications and scalable solutions</p>
            </div>
            <div ref={softwareRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" suppressHydrationWarning>
              {softwareProjects.map((project, index) => (
                <div 
                  key={index}
                  className={softwareVisible.has(index) ? 'reveal-from-bottom' : 'opacity-0'}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary">Design</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full" />
              <p className="text-muted-foreground">UI/UX focused projects with modern interfaces</p>
            </div>
            <div ref={designRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" suppressHydrationWarning>
              {designProjects.map((project, index) => (
                <div 
                  key={index}
                  className={designVisible.has(index) ? 'reveal-from-left' : 'opacity-0'}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-accent">AI, ML, & Data</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-transparent rounded-full" />
              <p className="text-muted-foreground">Intelligent systems and data-driven applications</p>
            </div>
            <div ref={aiRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" suppressHydrationWarning>
              {aiProjects.map((project, index) => (
                <div 
                  key={index}
                  className={aiVisible.has(index) ? 'reveal-from-right' : 'opacity-0'}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
