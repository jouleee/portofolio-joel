"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Laravel", level: 75 },
        { name: "PostgreSQL", level: 70 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Postman", level: 85 },
        { name: "Figma", level: 75 },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.2_0.1_265_/_0.15),_transparent_70%)]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 glass-card hover:neon-border transition-all duration-300 group">
                <h3 className="text-xl font-semibold mb-6 text-primary group-hover:neon-text transition-all duration-300">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary/30 rounded-full overflow-hidden backdrop-blur-sm relative">
                        <div
                          className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(99,102,241,0.5)] relative"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${skillIndex * 100}ms`,
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
