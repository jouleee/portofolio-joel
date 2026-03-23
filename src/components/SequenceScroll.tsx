"use client";

import { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "motion/react";

export function SequenceScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track progress in state (using a normal ref or subscribe for canvas drawing)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(scrollYProgress.get());
    }

    // Procedural animation: draw a matrix/abstract grid that shifts with scroll
    function renderFrame(progress: number) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const t = progress * 10; // "time" multiplier from scroll

      // Space out grid
      const gridSize = Math.max(80, w / 20);
      
      // We will draw a perspective field of dots / lines
      const cx = w / 2;
      const cy = h / 2;

      ctx.fillStyle = `rgba(255, 255, 255, ${0.05 + progress * 0.1})`;
      ctx.strokeStyle = `rgba(255, 255, 255, 0.1)`;
      
      for (let x = 0; x <= w; x += gridSize) {
        for (let y = 0; y <= h; y += gridSize) {
          // Add a floating distortion based on scroll "t"
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Wave effect
          const wave = Math.sin(dist * 0.01 - t) * 20;
          const radius = Math.max(1, 4 - (dist / 300) + progress * 2);

          ctx.beginPath();
          ctx.arc(x + wave, y + wave, radius, 0, Math.PI * 2);
          ctx.fill();

          // Connect some lines if close to center
          if (dist < 400 * (0.5 + progress)) {
            ctx.beginPath();
            ctx.moveTo(x + wave, y + wave);
            ctx.lineTo(cx, cy);
            ctx.stroke();
          }
        }
      }
    }

    window.addEventListener("resize", resize);
    resize();

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      renderFrame(latest);
    });

    return () => {
      window.removeEventListener("resize", resize);
      unsubscribe();
    };
  }, [scrollYProgress]);

  // Overlay opacity calculations based on scroll zones
  const opacityIntro = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const yIntro = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

  const opacityPhilosophy = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.55], [0, 1, 1, 0]);
  const xPhilosophy = useTransform(scrollYProgress, [0.25, 0.35, 0.55], [-30, 0, 30]);

  const opacitySkills = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.85], [0, 1, 1, 0]);
  const xSkills = useTransform(scrollYProgress, [0.55, 0.65, 0.85], [30, 0, -30]);

  const opacityCta = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const scaleCta = useTransform(scrollYProgress, [0.85, 0.95], [0.9, 1]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-neutral-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* The procedurally animated background */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0 h-screen w-screen" />
        
        {/* Subtle vignette over canvas */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)]" />

        {/* Storytelling Overlays */}
        <div className="relative z-20 h-full w-full">
          {/* 0% Intro */}
          <motion.div
            style={{ opacity: opacityIntro, y: yIntro }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-light tracking-tighter">
              Hi, I'm <span className="font-medium text-white">Julian</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-xl tracking-widest text-neutral-400 uppercase">
              Im a Software Developer
            </p>
          </motion.div>

          {/* 30% Philosophy */}
          <motion.div
            style={{ opacity: opacityPhilosophy, x: xPhilosophy }}
            className="absolute left-6 right-6 md:right-auto md:left-32 top-1/2 max-w-xl -translate-y-1/2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight text-white">
              I build immersive <br />
              <span className="italic text-neutral-400">web experiences.</span>
            </h2>
          </motion.div>

          {/* 60% Skills */}
          <motion.div
            style={{ opacity: opacitySkills, x: xSkills }}
            className="absolute right-6 left-6 md:left-auto md:right-32 top-1/2 max-w-xl -translate-y-1/2 md:text-right"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight text-white">
              Specialized in <br />
              <span className="text-neutral-400">Next.js, Motion,</span> <br />
              <span className="text-neutral-500">& Real-time.</span>
            </h2>
          </motion.div>

          {/* 90% CTA */}
          <motion.div
            style={{ opacity: opacityCta, scale: scaleCta }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <h2 className="mb-8 text-4xl sm:text-5xl md:text-7xl font-light">
              Let's create something <br className="md:hidden" /><span className="italic font-medium">unforgettable.</span>
            </h2>
            <button className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-3 md:px-8 md:py-4 backdrop-blur-md transition-all hover:bg-white hover:text-black">
              <span className="relative z-10 text-sm md:text-lg uppercase tracking-widest">View My Work</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
