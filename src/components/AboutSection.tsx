"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Photo parallax effect
  const photoY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      className="relative z-20 bg-neutral-950 text-white flex flex-col items-center justify-center px-6 py-24 md:py-40 overflow-hidden"
    >
      {/* Subtle Grain Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Soft Ambient Glow Elements */}
      <div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] -translate-x-1/2 -translate-y-1/2 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] translate-x-1/2 translate-y-1/2 bg-neutral-800/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">

        {/* Photo Column */}
        <div className="flex-1 w-full max-w-md relative group perspective-1000">
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            whileInView={{ opacity: 1, clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden"
          >
            {/* Glow behind photo container */}
            <div className="absolute inset-0 bg-neutral-100/10 blur-xl scale-95 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <motion.div style={{ y: photoY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
              <Image
                src="/foto.jpg"
                alt="Joel Profile"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                priority
              />
            </motion.div>

            {/* Outline border overlay */}
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none transition-colors duration-500 group-hover:border-white/20" />
          </motion.div>
        </div>

        {/* Text Column */}
        <motion.div
          style={{ y: textY }}
          className="flex-1 flex flex-col"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-sm tracking-[0.3em] text-neutral-500 uppercase mb-8"
          >
            [ 01 — Identity ]
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-light leading-tight mb-8"
          >
            Hi, I'm <span className="font-medium">Joel</span>.
            <br />
            <span className="italic text-neutral-400">Computer Science  </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-neutral-300 font-light text-xl leading-relaxed max-w-xl mb-12"
          >
            I'm a Computer Science student interested in software development, with experience in JavaScript, PHP, and database management. I enjoy solving problems, working in teams, and building applications that are clean, reliable, and easy to maintain.
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <h3 className="text-white font-medium mb-3 tracking-widest uppercase text-sm">Specialization</h3>
              <ul className="text-neutral-400 font-light space-y-2">
                <li>Backend & API Development</li>
                <li>Full-Stack Web Application Development</li>
                <li>Database Design & Optimization</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-white font-medium mb-3 tracking-widest uppercase text-sm">Design Focus</h3>
              <ul className="text-neutral-400 font-light space-y-2">
                <li>Clean & Modern UI Design</li>
                <li>User-Friendly Interfaces</li>
                <li>Responsive Web Design</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
