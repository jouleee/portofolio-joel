"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C", level: 90 },
        { name: "PHP", level: 90 },
        { name: "Javascript", level: 85 },
        { name: "Java", level: 80 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Laravel", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "MySQL", level: 90 },
        { name: "REST API", level: 80 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Figma", level: 85 },
        { name: "VS Code", level: 80 },
        { name: "Postman", level: 70 },
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
    <section ref={sectionRef} id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.2_0.1_265_/_0.15),_transparent_70%)]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
