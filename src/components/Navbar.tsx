"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = ["Home", "About", "Projects", "Skills", "Contact"] as const;

const navVariants = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const linkVariants = {
  hidden: { opacity: 0, y: -6 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + index * 0.06, duration: 0.4 },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 shadow-[0_10px_30px_rgba(15,23,42,0.6)] backdrop-blur-xl"
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-950/70 via-indigo-950/70 to-purple-950/70" />
      <div className="absolute inset-0 -z-10 opacity-60">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(56, 189, 248, 0.18), transparent 45%), radial-gradient(circle at top left, rgba(129, 140, 248, 0.22), transparent 40%)",
          }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
            Abdullah Jan
          </span>
          <span className="hidden text-xs text-white/40 sm:inline">
            Full Stack Engineer
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item, index) => (
            <motion.a
              key={item}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70 transition duration-300 hover:text-white"
              href={`#${item.toLowerCase()}`}
              variants={linkVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 transition duration-300 hover:border-white/40 hover:text-white md:hidden"
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </div>

      <motion.div
        className="md:hidden"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-4 px-6 pb-6 pt-2 sm:px-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70 transition duration-300 hover:text-white"
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
