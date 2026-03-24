"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

const projects = [
  {
    title: "Bersekolah",
    description: "Production-ready scholarship website developed in collaboration with a real foundation. Provides scholarship information, registration, and admin management with a modern, accessible UI.",
    techList: ["Astro", "TypeScript", "React.js"],
    image: "/projects/bersekolah.png",
  },
  {
    title: "Cilminton",
    description: "Immersive 3D portfolio and interactive web experience designed for modern browsers.",
    techList: ["React", "Motion", "Three.js"],
    image: "/projects/cilminton.png",
  },
  {
    title: "Phyfest",
    description: "Event management and ticketing platform tailored for contemporary physical festivals.",
    techList: ["Vue", "Node.js", "PostgreSQL"],
    image: "/projects/phyfest.png",
  },
  {
    title: "Parabotulin",
    description: "Creative agency landing page featuring advanced WebGL interactions and smooth scrolling.",
    techList: ["Svelte", "WebGL", "GSAP"],
    image: "/projects/parabotulin.png",
  },
  {
    title: "Kemakom Announcement Website",
    description: "Lightweight announcement website developed in one night to meet urgent organizational needs. Designed for fast access, clear information delivery, and responsive interaction without database dependency.",
    techList: ["HTML", "CSS", "JavaScript"],
    image: "/projects/parabotulin.png",
  },
  {
    title: "OpenLab FPMIPA UPI",
    description: "Real-time dashboard system for monitoring laboratory availability during OpenLab events. Displays live status updates, summary statistics, and last-updated indicators for operational transparency.",
    techList: ["Laravel", "MySQL"],
    image: "/projects/parabotulin.png",
  },
  {
    title: "Bus Ticket Reservation",
    description: "Web-based reservation platform backend enabling route management, scheduling, and ticket booking. Designed with scalable REST APIs and structured NoSQL data models for reliable transaction flows.",
    techList: ["MongoDB", "Express.js", "React.js", "Next.js"],
    image: "/projects/parabotulin.png",
  },
];

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={2} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    } 
  },
};

export function ProjectsBento() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section 
      ref={containerRef} 
      className={`relative z-20 bg-neutral-950 text-neutral-50 px-6 py-32 md:py-48 ${outfit.className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12">
          <div className="flex flex-col gap-6">
            <span className="text-sm tracking-[0.3em] text-neutral-400 uppercase">
              [ 02 — Selected Work ]
            </span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white drop-shadow-sm">
              Featured Projects
            </h2>
          </div>
          <p className="text-neutral-400 max-w-sm text-lg font-light leading-relaxed">
            A selection of my recent works ranging from immersive web experiences to complex real-time applications.
          </p>
        </div>

        {/* Projects Grid Container with Parallax Effect */}
        <motion.div style={{ y: parallaxY }} className="w-full">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
          >
            {projects.map((project, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                className="group flex flex-col gap-6 cursor-pointer"
              >
                {/* Image Container with strict 4:3 aspect ratio */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] bg-neutral-900 border border-white/5 shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                  />
                  
                  {/* Dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[0.16,1,0.3,1]" />
                  
                  {/* Overlay Content revealed smoothly on hover */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1]">
                    <p className="text-neutral-200 text-base md:text-lg leading-relaxed mb-6 max-w-md font-light">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techList.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-neutral-100 tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Always-visible Title and Action Icon */}
                <div className="flex items-center justify-between px-2">
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-100 group-hover:text-white transition-colors duration-500">
                    {project.title}
                  </h3>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-500 relative overflow-hidden">
                    <ArrowUpRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-950 transition-colors duration-500 relative z-10 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
