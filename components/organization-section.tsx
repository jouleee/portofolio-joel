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
      role: "Head of Organization",
      organization: "Keluarga Mahasiswa Komputer FPMIPA Universitas Pendidikan Indonesia",
      period: "2025 - 2026",
      description: "Led a team of 50+ members in organizing technical workshops, hackathons, and community events. Managed budget and collaborated with industry partners.",
      achievements: [
        "Organized 5+ successful tech events",
        "Increased member engagement by 60%",
        "Secured partnerships with 3 tech companies",
      ],
      icon: "🎯",
    },
    {
      role: "Staff for Interest and Talent Division",
      organization: "Keluarga Mahasiswa Komputer FPMIPA Universitas Pendidikan Indonesia",
      period: "2024 - 2025",
      description: "Coordinated weekly coding sessions and mentored junior members. Organized inter-university programming competitions.",
      achievements: [
        "Mentored 30+ students",
        "Hosted 2 inter-university competitions",
        "Published 20+ tutorial articles",
      ],
      icon: "💻",
    },
    {
      role: "Staff for Interest and Talent Division",
      organization: "Keluarga Mahasiswa FPMIPA Universitas Pendidikan Indonesia",
      period: "2024 - 2025",
      description: "Managed logistics and coordinated with speakers for annual tech conference with 500+ attendees.",
      achievements: [
        "Coordinated 20+ speakers",
        "Managed event budget of $10,000",
        "Achieved 95% attendee satisfaction",
      ],
      icon: "🎪",
    },
    {
      role: "Vice Chair of the Organizing Committee",
      organization: "A-Storia : Annual Event by Computer Science Class of 2023",
      period: "2023",
      description: "Active contributor to open source projects. Participated in code reviews and documentation improvements.",
      achievements: [
        "Contributed to 10+ projects",
        "Fixed 50+ issues",
        "Helped onboard new contributors",
      ],
      icon: "🌟",
    },
    {
      role: "Head of Supervisory Commission",
      organization: "Majelis Perwakilan Kelas SMAN 1 Cisaat",
      period: "2022",
      description: "Active contributor to open source projects. Participated in code reviews and documentation improvements.",
      achievements: [
        "Contributed to 10+ projects",
        "Fixed 50+ issues",
        "Helped onboard new contributors",
      ],
      icon: "🌟",
    },
    {
      role: "Treasurer",
      organization: "Gerakan Pramuka SMAN 1 Cisaat",
      period: "2022",
      description: "Active contributor to open source projects. Participated in code reviews and documentation improvements.",
      achievements: [
        "Contributed to 10+ projects",
        "Fixed 50+ issues",
        "Helped onboard new contributors",
      ],
      icon: "🌟",
    },
    {
      role: "Head of Information and Communication Division",
      organization: "Organisasi Siswa Intra Sekolah SMPN 1 Cisaat",
      period: "2018",
      description: "Active contributor to open source projects. Participated in code reviews and documentation improvements.",
      achievements: [
        "Contributed to 10+ projects",
        "Fixed 50+ issues",
        "Helped onboard new contributors",
      ],
      icon: "🌟",
    },
    {
      role: "Secretary",
      organization: "Gerakan Pramuka SMPN 1 Cisaat",
      period: "2018",
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
    <section id="organization" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Organizations & Communities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Leadership roles and community involvement that shaped my professional growth
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {organizations.map((org, index) => (
            <Card
              key={index}
              className={`p-4 sm:p-6 glass-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-primary/20 hover:neon-border group relative overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 text-6xl sm:text-8xl opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                {org.icon}
              </div>

              <div className="relative space-y-3 sm:space-y-4">
                <div className="flex items-start justify-between gap-2 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 mb-2 flex-wrap">
                      <span className="text-2xl sm:text-3xl">{org.icon}</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
                        <Users className="w-3 h-3 mr-1" />
                        <span className="break-words">{org.role}</span>
                      </Badge>
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold group-hover:text-primary transition-colors break-words">
                      {org.organization}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>{org.period}</span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {org.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>Key Achievements</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                    {org.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                        <span className="break-words">{achievement}</span>
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
