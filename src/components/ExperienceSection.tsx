"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Code2, MonitorPlay, GraduationCap, Briefcase, Code } from "lucide-react";
import { code } from "motion/react-client";

type Experience = {
  id: string;
  role: string;
  company: string;
  type: string;
  duration?: string;
  icon: React.ElementType;
  description?: string;
  subRoles?: { title: string }[];
};

const experiences: Experience[] = [
  {
    id: "exp1",
    role: "Fullstack Software Developer",
    company: "Len Innovation Technology",
    type: "Internship",
    duration : "6 mos",
    icon: Code2,
  },
  {
    id: "exp2",
    role: "Freelance Web Developer",
    company: "Codifyve",
    type: "Full-time",
    duration : "Actively working on it",
    icon: Code,
  },
  {
    id: "exp3",
    role: "Assistant & Practicum Instructor",
    company: "Universitas Pendidikan Indonesia",
    type: "Part-time",
    duration: "1 yr 6 mos",
    icon: Code2,
    subRoles: [
      { title: "Object Oriented Design and Programming Practicum" },
      { title: "Data Structure & Algorithm (DSA) Practicum" },
      { title: "Fundamentals Programming Practicum" },
    ],
  },
  {
    id: "exp4",
    role: "Frontend Web Developer - Project",
    company: "Bersekolah",
    type: "Contract",
    duration : "5 mos",
    icon: Code,
  },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative z-20 bg-neutral-950 text-white px-6 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col relative z-10">
        
        {/* Header */}
        <div className="mb-20 md:mb-32">
          <div className="text-sm tracking-[0.3em] text-neutral-500 uppercase mb-4">
            [ 02 — History ]
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
            Work Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          
          {/* Connecting Line Desktop (Centered) & Mobile (Left) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
          
          {/* Animated Gradient Line */}
          <motion.div 
            style={{ scaleY: pathLength }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white via-white/50 to-transparent origin-top -translate-x-1/2 z-0"
          />

          {/* Cards */}
          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const Icon = exp.icon;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col md:flex-row items-start md:items-center w-full gap-8 md:gap-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-1/2" />
                  
                  {/* Center Node / Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-white/20 bg-neutral-950 flex items-center justify-center z-10 md:mt-0 mt-2 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <Icon size={20} className="text-white/70" />
                  </div>

                  {/* Card Content */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16'} pl-20 md:pl-0`}>
                    <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden w-full max-w-[420px]">
                      
                      {/* Interactive glow on hover */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      <div className="flex flex-col gap-4 relative z-10">
                        {/* Tags */}
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-full border border-white/20 text-neutral-300">
                            {exp.type}
                          </span>
                          {exp.duration && (
                            <span className="text-sm font-light text-neutral-500">
                              {exp.duration}
                            </span>
                          )}
                        </div>

                        {/* Title & Company */}
                        <div>
                          <h3 className="text-2xl font-light text-white mb-2 leading-tight group-hover:text-white transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <div className="text-lg text-neutral-400 font-medium">
                            {exp.company}
                          </div>
                        </div>

                        {/* Sub Roles (grouped items) */}
                        {exp.subRoles && (
                          <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                            <ul className="space-y-3">
                              {exp.subRoles.map((sub, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-white/30 shrink-0" />
                                  <span className="text-neutral-300 font-light text-sm leading-relaxed">
                                    {sub.title}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
