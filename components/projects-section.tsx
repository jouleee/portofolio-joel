"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const softwareProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with cart management, payment integration, and admin dashboard.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      image: "/modern-ecommerce-website.png",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team features, and analytics.",
      tags: ["React", "Express", "MongoDB", "Socket.io"],
      image: "/task-management-dashboard.png",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Social Media Clone",
      description: "Full-featured social platform with posts, comments, likes, and user authentication.",
      tags: ["Next.js", "Laravel", "MySQL", "Redis"],
      image: "/social-media-feed.jpg",
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
    <Card className="overflow-hidden glass-card hover:neon-border transition-all duration-300 group relative">
      <div className="relative h-40 sm:h-48 overflow-hidden bg-secondary/20">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-60" />
        <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          <Button size="sm" className="glass-card border-primary/40 hover:border-primary/60 hover:bg-primary/20">
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </Button>
          <Button size="sm" className="glass-card border-primary/40 hover:border-primary/60 hover:bg-primary/20">
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full border border-primary/20 hover:border-primary/40 transition-colors"
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
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              A curated collection of my work across software development, design, and AI/ML domains.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">Software</h3>
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
              <p className="text-sm sm:text-base text-muted-foreground">Full-stack web applications and scalable solutions</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {softwareProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary">Design</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              <p className="text-muted-foreground">UI/UX focused projects with modern interfaces</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-accent">AI, ML, & Data</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-transparent rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
              <p className="text-muted-foreground">Intelligent systems and data-driven applications</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
