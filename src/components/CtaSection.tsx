"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

export function CtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section ref={containerRef} className="relative z-20 h-screen bg-neutral-950 flex items-center justify-center overflow-hidden">
      {/* Animated abstract background */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-4 md:inset-8 rounded-[2rem] bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border border-white/5 overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-white mb-8">
            Let's build something <br />
            <span className="italic text-neutral-400">amazing.</span>
          </h2>
          
          <button className="group relative overflow-hidden rounded-full bg-white text-black px-10 py-5 transition-transform hover:scale-105">
            <span className="relative z-10 text-lg uppercase tracking-widest font-medium">Start a Project</span>
            <div className="absolute inset-0 bg-neutral-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
