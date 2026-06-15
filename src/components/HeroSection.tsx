"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const TYPING_PHRASES = [
  "Designing resilient systems and delightful interfaces.",
  "Building full-stack experiences with precision and care.",
  "Turning complex ideas into fast, scalable products.",
];

const TYPING_SPEED_MS = 40;
const PAUSE_MS = 1400;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = useMemo(
    () => TYPING_PHRASES[phraseIndex % TYPING_PHRASES.length],
    [phraseIndex]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && typedText.length < currentPhrase.length) {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
        return;
      }

      if (isDeleting && typedText.length > 0) {
        setTypedText(currentPhrase.slice(0, typedText.length - 1));
        return;
      }

      if (!isDeleting && typedText.length === currentPhrase.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((index) => index + 1);
      }
    }, typedText.length === currentPhrase.length ? PAUSE_MS : TYPING_SPEED_MS);

    return () => clearTimeout(timeout);
  }, [currentPhrase, isDeleting, typedText]);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-indigo-900 to-purple-950" />
      <div className="absolute inset-0 opacity-50 mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at top, rgba(129, 140, 248, 0.35), transparent 45%), radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.3), transparent 40%), radial-gradient(circle at 80% 10%, rgba(244, 114, 182, 0.28), transparent 45%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
        <motion.div
          className="flex flex-col gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.span
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 shadow-[0_0_18px_rgba(99,102,241,0.35)]"
            variants={itemVariants}
          >
            Full-Stack Engineer Portfolio
          </motion.span>

          <motion.div className="space-y-6" variants={itemVariants}>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Abdullah Jan –{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent">
                Full Stack Engineer
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
              {typedText}
              <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-white/70 align-middle" />
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            variants={itemVariants}
          >
            <a
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.55)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(99,102,241,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              href="#projects"
            >
              View Projects
            </a>
            <span className="text-sm text-white/60">
              Leading Vixroa Tech — premium full-stack engineering services.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
