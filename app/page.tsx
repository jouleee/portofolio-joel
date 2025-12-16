import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { OrganizationSection } from "@/components/organization-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Page() {
  return (
    <main className="min-h-screen gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 sm:opacity-30" />
      <div className="relative z-10 overflow-x-hidden">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <OrganizationSection />
        <ContactSection />
      </div>
    </main>
  )
}
