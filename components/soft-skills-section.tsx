"use client"

import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"
import { Sparkles } from "lucide-react"

export function SoftSkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Leadership",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
    "Initiative",
    "Emotional Intelligence",
    "Creativity",
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
    <section className="py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-accent" />
            <h3 className="text-2xl font-bold">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`px-4 py-2 text-sm glass-card border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
