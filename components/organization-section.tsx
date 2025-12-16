"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function OrganizationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const organizations = [
    {
      role: "President",
      organization: "Computer Science Student Association",
      period: "2023 - 2024",
      description: "Led a team of 50+ members in organizing technical workshops, hackathons, and community events. Managed budget and collaborated with industry partners.",
      achievements: [
        "Organized 5+ successful tech events",
        "Increased member engagement by 60%",
        "Secured partnerships with 3 tech companies",
      ],
      icon: "🎯",
    },
    {
      role: "Vice President",
      organization: "Programming Club",
      period: "2022 - 2023",
      description: "Coordinated weekly coding sessions and mentored junior members. Organized inter-university programming competitions.",
      achievements: [
        "Mentored 30+ students",
        "Hosted 2 inter-university competitions",
        "Published 20+ tutorial articles",
      ],
      icon: "💻",
    },
    {
      role: "Event Coordinator",
      organization: "Tech Conference Committee",
      period: "2022",
      description: "Managed logistics and coordinated with speakers for annual tech conference with 500+ attendees.",
      achievements: [
        "Coordinated 20+ speakers",
        "Managed event budget of $10,000",
        "Achieved 95% attendee satisfaction",
      ],
      icon: "🎪",
    },
    {
      role: "Member",
      organization: "Open Source Community",
      period: "2021 - Present",
      description: "Active contributor to open source projects. Participated in code reviews and documentation improvements.",
      achievements: [
        "Contributed to 10+ projects",
        "Fixed 50+ issues",
        "Helped onboard new contributors",
      ],
      icon: "🌟",
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
    <section id="organization" className="py-20 px-4 relative" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Organization Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leadership roles and community involvement that shaped my professional growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {organizations.map((org, index) => (
            <Card
              key={index}
              className={`p-6 glass-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-primary/20 hover:neon-border group relative overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                {org.icon}
              </div>

              <div className="relative space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl">{org.icon}</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Users className="w-3 h-3 mr-1" />
                        {org.role}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {org.organization}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{org.period}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {org.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <Award className="w-4 h-4" />
                    <span>Key Achievements</span>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {org.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
