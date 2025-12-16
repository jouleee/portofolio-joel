import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Lightbulb, Zap, Sparkles } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Developing responsive and performant web applications with a focus on usability.",
    },
    {
      icon: Zap,
      title: "Modern Stack",
      description: "Using modern tools and frameworks such as React, Next.js, and RESTful APIs.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Breaking down complex problems and delivering clear, effective solutions.",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
          </div>

          {/* Main Description */}
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-center leading-relaxed">
              I am a fifth-semester Computer Science student focused on web development.
              I build modern, user-focused web applications while continuously improving my skills
              through hands-on projects and learning.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 glass-card hover:neon-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="pt-8 space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-accent" />
              <h3 className="text-2xl font-bold">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Communication",
                "Teamwork",
                "Problem Solving",
                "Leadership",
                "Time Management",
                "Adaptability",
                "Public Speaking",
              ].map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm glass-card border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
