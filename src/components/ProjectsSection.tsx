"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "AETHER — Advanced Polyglot AI Systems Agent",
    description:
      "Production-grade AI coding architect that generates complete, shippable apps with real-time streaming and live workspace editing.",
    image: "/images/project-aether.png",
    stack: [
      { name: "Next.js 16", label: "N", tone: "from-slate-200 to-slate-400" },
      { name: "React 19", label: "R", tone: "from-cyan-400 to-blue-500" },
      { name: "TypeScript", label: "T", tone: "from-blue-500 to-indigo-500" },
      { name: "Framer", label: "F", tone: "from-fuchsia-400 to-purple-500" },
    ],
    github:
      "https://github.com/AbdullahJan-007/AETHER-Advanced-Polyglot-AI-Systems-Agent",
    demo: "https://aether-ai-agent-pied.vercel.app",
  },
  {
    title: "Portfolio Management System",
    description:
      "Full-stack portfolio management app with auth, dashboard, and CRUD for skills and projects.",
    image: "/images/project-portfolio.png",
    stack: [
      { name: "Next.js", label: "N", tone: "from-slate-200 to-slate-400" },
      { name: "TypeScript", label: "T", tone: "from-blue-500 to-indigo-500" },
      { name: "Prisma", label: "P", tone: "from-indigo-400 to-purple-500" },
      { name: "SQLite", label: "S", tone: "from-emerald-400 to-teal-400" },
    ],
    github: "https://github.com/AbdullahJan-007/Portfolio-Management-System",
    demo: "https://portfolio-management-system-ochre.vercel.app",
  },
  {
    title: "Pulse Mobile",
    description:
      "Cross-platform wellness app with offline-first experiences.",
    image: "/images/project-pulse.svg",
    stack: [
      { name: "React", label: "R", tone: "from-cyan-400 to-blue-500" },
      { name: "Expo", label: "E", tone: "from-slate-200 to-slate-400" },
      { name: "GraphQL", label: "G", tone: "from-pink-400 to-fuchsia-500" },
      { name: "Vercel", label: "V", tone: "from-slate-200 to-slate-500" },
    ],
    github: "https://github.com/abdullahjan/pulse-mobile",
    demo: "https://pulse.example.com",
  },
  {
    title: "Student Record Management System",
    description:
      "C++ console app for student records, attendance, grades, promotion, and file persistence.",
    image: "/images/project-student.png",
    stack: [
      { name: "C++", label: "C++", tone: "from-blue-400 to-indigo-500" },
      { name: "OOP", label: "O", tone: "from-slate-200 to-slate-400" },
      { name: "File I/O", label: "F", tone: "from-emerald-400 to-teal-400" },
      { name: "Data Structures", label: "D", tone: "from-fuchsia-400 to-purple-500" },
    ],
    github:
      "https://github.com/AbdullahJan-007/Student-Record-Management-System",
    demo: undefined,
  },
  {
    title: "ATM Simulation",
    description:
      "C++ console-based ATM simulator with balance checks, deposits, withdrawals, and input validation.",
    image: "/images/project-atm.png",
    stack: [
      { name: "C++", label: "C++", tone: "from-blue-400 to-indigo-500" },
      { name: "OOP", label: "O", tone: "from-slate-200 to-slate-400" },
      { name: "Input Handling", label: "I", tone: "from-emerald-400 to-teal-400" },
      { name: "Console App", label: "C", tone: "from-fuchsia-400 to-purple-500" },
    ],
    github: "https://github.com/AbdullahJan-007/Arch-Tech-ATM-Simulation",
    demo: undefined,
  },
  {
    title: "Dice Rolling Game",
    description:
      "C++ console dice roller with configurable dice counts, session tracking, and menu-driven UI.",
    image: "/images/project-dice.png",
    stack: [
      { name: "C++17", label: "C++", tone: "from-blue-400 to-indigo-500" },
      { name: "OOP", label: "O", tone: "from-slate-200 to-slate-400" },
      { name: "Input Validation", label: "I", tone: "from-emerald-400 to-teal-400" },
      { name: "Console UI", label: "C", tone: "from-fuchsia-400 to-purple-500" },
    ],
    github: "https://github.com/AbdullahJan-007/ArchTech_Dice-Rolling-Game",
    demo: undefined,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-indigo-950 to-purple-950" />
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(56, 189, 248, 0.2), transparent 45%), radial-gradient(circle at 85% 10%, rgba(129, 140, 248, 0.28), transparent 50%), radial-gradient(circle at 55% 90%, rgba(244, 114, 182, 0.2), transparent 55%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 sm:px-10 lg:px-16">
        <motion.div
          className="flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 shadow-[0_0_18px_rgba(99,102,241,0.35)]"
            variants={cardVariants}
          >
            Projects
          </motion.span>
          <motion.h2
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            variants={cardVariants}
          >
            Selected work crafted for impact and scale.
          </motion.h2>
          <motion.p
            className="max-w-2xl text-base text-white/70 sm:text-lg"
            variants={cardVariants}
          >
            A snapshot of recent builds spanning product design, full-stack
            engineering, and cloud infrastructure.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(15,23,42,0.6)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              variants={cardVariants}
            >
              <div className="overflow-hidden">
                <img
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  src={project.image}
                  alt={`${project.title} preview`}
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 px-6 py-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {project.stack.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${tech.tone} text-xs font-semibold text-slate-950 shadow-[0_0_15px_rgba(99,102,241,0.55)]`}
                      >
                        {tech.label}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                  <a
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 transition duration-300 hover:border-white/50 hover:text-white"
                    href={project.github}
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  {project.demo ? (
                    <a
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(99,102,241,0.8)]"
                      href={project.demo}
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
