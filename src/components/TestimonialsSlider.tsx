"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Joel's ability to blend high-fidelity motion with robust React architectures is unmatched. Our conversion rates skyrocketed.",
    author: "Sarah Jenkins",
    role: "Design Director, ACME",
  },
  {
    quote: "Working with someone who genuinely understands BOTH design and code is a rarity. This portfolio proves that perfectly.",
    author: "Tom Hiddles",
    role: "Founder, StartupX",
  },
  {
    quote: "He doesn't just write code; he crafts digital experiences. Every interaction is thoughtful, purposeful, and buttery smooth.",
    author: "Elena Rodriguez",
    role: "Lead Engineer, TechCorp",
  },
];

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-20 bg-neutral-950 text-white min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative h-[300px] flex items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 text-white/10">
          <Quote size={80} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <h3 className="text-3xl md:text-5xl font-light leading-snug tracking-tight text-white/90">
              "{testimonials[index].quote}"
            </h3>
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg font-medium text-white">{testimonials[index].author}</span>
              <span className="text-sm tracking-widest text-neutral-500 uppercase">{testimonials[index].role}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-20 flex gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 transition-all duration-500 ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'} rounded-full`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
