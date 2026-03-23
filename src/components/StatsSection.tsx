"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { label: "Projects Completed", value: 34, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Awwwards Won", value: 2, suffix: "" },
  { label: "Happy Clients", value: 12, suffix: "+" },
];

function CountUp({ to, duration = 2 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percentage = Math.min(progress / (duration * 1000), 1);
      // easeOutExpo
      const easing = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(easing * to));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export function StatsSection() {
  return (
    <section className="relative z-20 bg-neutral-950 text-white px-6 py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6">
            Proving value through <span className="italic text-neutral-400">measurable impact.</span>
          </h2>
          <p className="text-neutral-400">
            Numbers don't tell the whole story, but they highlight the scale and consistency of my creative output across various industries.
          </p>
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-8 md:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col border-l border-white/20 pl-6">
              <div className="text-5xl md:text-7xl font-light mb-2">
                <CountUp to={stat.value} />
                <span className="text-neutral-500">{stat.suffix}</span>
              </div>
              <div className="text-sm tracking-widest text-neutral-400 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
