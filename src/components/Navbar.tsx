"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { text: "Home", href: "#" },
  { text: "About", href: "#" },
  { text: "Selected Work", href: "#" },
  { text: "Contact", href: "#" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference text-white pointer-events-none">
        <div className="text-xl font-medium tracking-[0.2em] pointer-events-auto">
          JOEL
        </div>
        
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          Menu
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-neutral-950 text-white flex flex-col justify-between px-6 py-6"
          >
            {/* Header inside menu */}
            <div className="flex justify-between items-center w-full">
              <div className="text-xl font-medium tracking-[0.2em]">
                JOEL
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Close
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4 mt-auto mb-auto md:ml-32">
              {navLinks.map((link, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                    className="block text-5xl md:text-8xl font-light tracking-tighter hover:text-neutral-500 transition-colors origin-left"
                    style={{ lineHeight: 1.1 }}
                  >
                    {link.text}
                  </motion.a>
                </div>
              ))}
            </div>

            {/* Footer inside menu */}
            <div className="flex justify-between items-end border-t border-white/20 pt-6 mt-12 text-xs uppercase tracking-widest text-neutral-500">
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
              </div>
              <div>hello@joelcreative.dev</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
