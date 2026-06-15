"use client";

import { motion } from "framer-motion";

const TIMELINE = [
  {
    year: "2024",
    title: "Web Development",
    description:
      "Laid a strong foundation in modern web development with clean, responsive interfaces.",
  },
  {
    year: "2025",
    title: "Full Stack Engineer",
    description:
      "Delivered full-stack products with scalable APIs, polished dashboards, and cloud-ready tooling.",
  },
  {
    year: "2026",
    title: "Founder, Vixroa Tech",
    description:
      "Founded Vixroa Tech to deliver premium full-stack engineering services for startups and growth teams.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-indigo-950 to-purple-950" />
      <div className="absolute inset-0 opacity-50 mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.28), transparent 45%), radial-gradient(circle at 90% 20%, rgba(129, 140, 248, 0.32), transparent 45%), radial-gradient(circle at 50% 80%, rgba(244, 114, 182, 0.22), transparent 50%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 py-24 sm:px-10 lg:flex-row lg:items-center lg:px-16">
        <motion.div
          className="flex flex-1 flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 shadow-[0_0_18px_rgba(99,102,241,0.35)]"
            variants={itemVariants}
          >
            About Abdullah
          </motion.span>

          <motion.h2
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            variants={itemVariants}
          >
            Building powerful experiences with calm, intentional engineering.
          </motion.h2>

          <motion.p
            className="max-w-2xl text-base text-white/70 sm:text-lg"
            variants={itemVariants}
          >
            I’m Abdullah Jan, a full stack developer who blends technical depth
            with thoughtful design. I thrive on shipping reliable products,
            collaborating across teams, and bringing a calm, focused energy to
            every project.
          </motion.p>

          <motion.p
            className="max-w-2xl text-base text-white/70 sm:text-lg"
            variants={itemVariants}
          >
            Core strengths include React, Next.js, TypeScript, Node.js, and cloud
            services—paired with a love for clean UI, performance, and resilient
            architecture.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-1 flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative mx-auto flex h-56 w-56 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_35px_rgba(99,102,241,0.4)] sm:h-64 sm:w-64"
            variants={itemVariants}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-indigo-500/10 to-purple-500/30 blur-2xl" />
            <img
              className="relative h-48 w-48 rounded-full border border-white/20 object-cover sm:h-56 sm:w-56"
              src="/images/abdullah-portrait.png"
              alt="Portrait of Abdullah Jan"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
              Career Journey
            </h3>
            <div className="space-y-6">
              {TIMELINE.map((item) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  className="relative border-l border-white/10 pl-6"
                  variants={itemVariants}
                >
                  <span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-300 to-purple-300 shadow-[0_0_10px_rgba(129,140,248,0.7)]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
                    {item.year}
                  </p>
                  <p className="text-base font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="text-sm text-white/65">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
