"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowDown } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Software Developer", "Fullstack Developer", "Backend Engineer"]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      <div className="hero-gradient absolute inset-0" />

      <div className="absolute inset-0 hero-pattern" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto perspective-1000">
            <div
              className="relative w-full h-full transition-all duration-300 ease-out"
              style={{
                transform: isHovering
                  ? `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale(1.1)`
                  : "rotateY(0deg) rotateX(0deg) scale(1)",
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Floating rings animation */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 border-dashed" />
              </div>
              <div className="absolute inset-4 animate-reverse-spin">
                <div className="absolute inset-0 rounded-full border-2 border-accent/30 border-dotted" />
              </div>

              {/* Hexagon photo container */}
              <div className="absolute inset-8 group cursor-pointer">
                <div
                  className="w-full h-full relative overflow-hidden transition-all duration-500"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  }}
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent animate-gradient-xy" />

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl group-hover:blur-3xl transition-all duration-500" />

                  {/* Photo */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src="/joel.JPG"
                      alt="Joel's Portrait"
                      fill
                      className="object-cover object-center scale-110 group-hover:scale-125 transition-transform duration-700"
                      priority
                    />
                  </div>

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                  {/* Scan line effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-scan" />
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary animate-pulse" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary animate-pulse" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary animate-pulse" />
              </div>

              {/* Particles effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/50 rounded-full blur-sm animate-float"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance neon-text px-2">
              Hi There, I'm Joel
            </h1>
            <div className="space-y-3 px-2">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex items-baseline justify-center whitespace-nowrap">
                <span className="text-foreground">I'm&nbsp;a&nbsp;</span>
                <span className="text-accent inline-block animate-fade-in-up" key={currentRole}>
                  {roles[currentRole]}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed px-4">
            I’m passionate about crafting modern web applications that deliver both performance and great user experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[160px] relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 btn-shimmer" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://drive.google.com/file/d/1qCZsteaBkHk57bcptutgdviUoEK0ZNYS/view?usp=sharing', '_blank')}
              className="border-primary/40 hover:bg-primary/10 min-w-[160px] glass-card hover:border-primary/60 transition-all duration-300 bg-transparent"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="pt-12 animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
