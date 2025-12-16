"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      title: "Freelance Web Developer",
      company: "Codifyve",
      location: "Bandung, Indonesia",
      period: "Oct 2025 - Present",
      description: "Developed backend and full-stack solutions for client projects, including a CBTsystem using Laravel and an interactive exhibition website using PHP.",
      technologies: ["React", "Next.js", "Laravel", "Tailwind CSS"],
      type: "Part-time",
    },
    {
      title: "Assistant for Object Oriented Design and Programming Practicum",
      company: "Universitas Pendidikan Indonesia",
      location: "Bandung, Indonesia",
      period: "Aug 2023 - Present",
      description: "Assisted students in understanding Object-Oriented Programming concepts through weekly practicum sessions using Java, Python, C++, and PHP.",
      technologies: ["Java", "Python", "PHP", "C++", "OOP", "Teaching & Mentoring"],
      type: "Internship",
    },
    {
      title: "Assistant for Algorithm and Data Structure Practicum",
      company: "Universitas Pendidikan Indonesia",
      location: "Bandung, Indonesia",
      period: "Jan 2025 - Aug 2025",
      description: "Led practicum sessions for Data Structures and Algorithms, including module preparation, assignments, and student evaluations.",
      technologies: ["Algorithms", "C Programming Language", "Data Structures"],
      type: "Part-time",
    },
    {
      title: "Assistant for Fundamentals Programming Practicum",
      company: "Universitas Pendidikan Indonesia",
      location: "Bandung, Indonesia",
      period: "Aug 2024 - Jan 2025",
      description: "Supported first-semester students in learning basic programming concepts through guided practice sessions.",
      technologies: ["Algorithms & Programming", "C Programming Language", "Tutoring"],
      type: "Part-time",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-4 relative" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in web development and software engineering
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-6">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background animate-pulse" />
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/20 animate-ping" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <Card className="p-6 glass-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group border-primary/20 hover:neon-border">
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-start gap-2 mb-2 md:justify-end">
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              {exp.type}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-primary font-semibold mt-1">{exp.company}</p>
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2 md:justify-end">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 md:justify-end">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="bg-background/50 hover:bg-primary/10 hover:border-primary/40 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
