"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000;
    const intervalTime = 20;
    const increments = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / increments) * 100), 100);
      setProgress(nextProgress);

      if (currentStep >= increments) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          window.scrollTo(0, 0);
        }, 300); // slight pause at 100%
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 text-white"
        >
          <div className="absolute top-1/2 flex -translate-y-1/2 flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-4xl font-light tracking-[0.2em] md:text-6xl"
            >
              Welcome
            </motion.div>
            <div className="text-xl font-light tracking-widest text-neutral-500">
              {progress}%
            </div>
          </div>
          
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-white"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
