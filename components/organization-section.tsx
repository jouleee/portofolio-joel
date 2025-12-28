"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function OrganizationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const organizations = [
    {
      role: "Head of Organization",
      organization: "Keluarga Mahasiswa Komputer FPMIPA Universitas Pendidikan Indonesia",      logo: "/LOGO KEMAKOM.png",      period: "2025 - 2026",
      description: "Led the organization’s strategic direction, coordinated cross-division programs, and represented the association in institutional and external collaborations.",
      achievements: [
        "Led and coordinated 100+ active members across multiple divisions",
        "Initiated and supervised academic, social, and technology-focused programs",
        "Make system improvements that increased member engagement by 30%",
      ],
      icon: "🎯",
    },
    {
      role: "Staff for Interest and Talent Division",
      organization: "Keluarga Mahasiswa Komputer FPMIPA Universitas Pendidikan Indonesia",
      logo: "/LOGO KEMAKOM.png",
      period: "2024 - 2025",
      description: "Social Media Manager for instagram account @dpmb.kemakom, creating engaging content and Designing promotional materials for events and activities.",
      achievements: [
        "Increased social media engagement by 40%",
        "Produced 20+ high-quality posts and stories",
        "Create seasonal bulletin to give information about organization activities",
      ],
      icon: "💻",
    },
    {
      role: "Staff for Interest and Talent Division",
      organization: "Keluarga Mahasiswa FPMIPA Universitas Pendidikan Indonesia",
      logo: "/logo fpmipa.png",
      period: "2024 - 2025",
      description: "PIC for Liga Mahasiswa FPMIPA (MIPA League) event, coordinating logistics, team registrations, and match schedules.",
      achievements: [
        "Successfully organized a tournament with 11 participating teams for basketball and futsal",
        "Preparing Athlete Training Sessions for FPMIPA delegation in Pekan Olahraga dan Seni Mahasiswa UPI 2024",
      ],
      icon: "🎪",
    },
    {
      role: "Vice Chair of the Organizing Committee",
      organization: "A-Storia : Annual Event by Computer Science Class of 2023",
      logo: "/Logo A-Storia.png",
      period: "2023",
      description: "Assisted the Chair in coordinating the organizing committee, overseeing event preparation, and ensuring smooth execution of the annual cohort event.",
      achievements: [
        "Successfully manageded committee of 160+ members (Computer Science class of 2023)",
        "Ensured event timeline and operational readiness",
      ],
      icon: "🌟",
    },
    {
      role: "Head of Supervisory Commission",
      organization: "Majelis Perwakilan Kelas SMAN 1 Cisaat",
      logo: "/logo mpk.png",
      period: "2022",
      description: "Led the supervisory commission in monitoring organizational performance and ensuring accountability of executive bodies.",
      achievements: [
        "Designed Monitoring and Evaluation System for student organization activities",
        "Conducted performance reviews for Information and Communication Division",
        "Making Majelis Perwakilan Kelas SMAN 1 Cisaat Logo as identity of the organization",
      ],
      icon: "🌟",
    },
    {
      role: "Staff of Creative Division",
      organization: "Smancis In Game, Music, Academy, and Art. (SIGMAA) SMAN 1 Cisaat",
      logo: "/Logo SIGMAA.svg",
      period: "2022",
      description: "Member of the creative division responsible for social media management, content creation, and event promotion.",
      achievements: [
        "Co-directed and produced the live-streamed Grand Opening and Closing Ceremonies of the SIGMAA event.",
        "Managed @officialsigmaa social media accounts",
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
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-20 h-20 sm:w-24 sm:h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Image
                  src={org.logo}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative space-y-3 sm:space-y-4">
                <div className="flex items-start justify-between gap-2 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-lg overflow-hidden p-1.5 shadow-md border bg-white border-border/30">
                        <Image
                          src={org.logo}
                          alt={`${org.organization} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
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
