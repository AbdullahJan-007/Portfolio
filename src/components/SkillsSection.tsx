"use client";

import { motion } from "framer-motion";

const SKILLS = [
  {
    name: "Next.js",
    level: 93,
    label: "N",
    icon: "next",
    tone: "from-slate-200 to-slate-400",
  },
  {
    name: "React",
    level: 92,
    label: "R",
    icon: "react",
    tone: "from-cyan-300 to-sky-400",
  },
  {
    name: "Node.js",
    level: 90,
    label: "N",
    icon: "node",
    tone: "from-emerald-300 to-lime-400",
  },
  {
    name: "TypeScript",
    level: 90,
    label: "TS",
    icon: "typescript",
    tone: "from-blue-400 to-indigo-400",
  },
  {
    name: "Prisma",
    level: 86,
    label: "P",
    icon: "prisma",
    tone: "from-indigo-400 to-purple-500",
  },
  {
    name: "SQLite",
    level: 82,
    label: "SQ",
    icon: "sqlite",
    tone: "from-emerald-300 to-teal-400",
  },
  {
    name: "MySQL",
    level: 84,
    label: "MY",
    icon: "mysql",
    tone: "from-sky-300 to-cyan-400",
  },
  {
    name: "MongoDB",
    level: 83,
    label: "M",
    icon: "mongodb",
    tone: "from-emerald-300 to-lime-400",
  },
  {
    name: "C++",
    level: 88,
    label: "C++",
    icon: "cpp",
    tone: "from-blue-400 to-indigo-500",
  },
  {
    name: "OOPs",
    level: 87,
    label: "O",
    icon: "oops",
    tone: "from-slate-200 to-slate-400",
  },
  {
    name: "Data Structures",
    level: 86,
    label: "DS",
    icon: "ds",
    tone: "from-fuchsia-300 to-purple-400",
  },
  {
    name: "HTML",
    level: 92,
    label: "H",
    icon: "html",
    tone: "from-amber-300 to-yellow-400",
  },
  {
    name: "CSS",
    level: 90,
    label: "C",
    icon: "css",
    tone: "from-sky-300 to-cyan-400",
  },
  {
    name: "JavaScript",
    level: 91,
    label: "JS",
    icon: "js",
    tone: "from-amber-300 to-yellow-400",
  },
  {
    name: "Tailwind CSS",
    level: 89,
    label: "TW",
    icon: "tailwind",
    tone: "from-sky-300 to-cyan-400",
  },
  {
    name: "API Integration",
    level: 88,
    label: "API",
    icon: "api-logo",
    tone: "from-cyan-300 to-sky-400",
  },
];

const iconStyles = "h-6 w-6 text-slate-950";
const iconStroke = {
  stroke: "currentColor",
  strokeWidth: 1.6,
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const getIcon = (icon: string, label: string) => {
  switch (icon) {
    case "next":
      return (
        <img src="/images/skill-next.png" alt="" className="h-7 w-7 rounded" />
      );
    case "react":
      return (
        <img src="/images/skill-react.png" alt="" className="h-7 w-7 rounded" />
      );
    case "node":
      return (
        <img src="/images/skill-node.png" alt="" className="h-7 w-7 rounded" />
      );
    case "typescript":
      return (
        <img
          src="/images/skill-typescript.png"
          alt=""
          className="h-7 w-7 rounded"
        />
      );
    case "prisma":
      return (
        <img
          src="/images/skill-prisma.png"
          alt=""
          className="h-7 w-7 rounded"
        />
      );
    case "sqlite":
      return (
        <img
          src="/images/skill-sqlite.png"
          alt=""
          className="h-7 w-7 rounded"
        />
      );
    case "mysql":
      return (
        <img src="/images/skill-mysql.png" alt="" className="h-7 w-7 rounded" />
      );
    case "mongodb":
      return (
        <img
          src="/images/skill-mongodb.png"
          alt=""
          className="h-7 w-7 rounded-full"
        />
      );
    case "cpp":
      return (
        <img src="/images/skill-cpp.png" alt="" className="h-7 w-7 rounded" />
      );
    case "oops":
      return (
        <img src="/images/skill-oops.png" alt="" className="h-7 w-7 rounded" />
      );
    case "ds":
      return (
        <img src="/images/skill-ds.png" alt="" className="h-7 w-7 rounded" />
      );
    case "html":
      return (
        <img src="/images/skill-html.png" alt="" className="h-7 w-7 rounded" />
      );
    case "css":
      return (
        <img src="/images/skill-css.png" alt="" className="h-7 w-7 rounded" />
      );
    case "js":
      return (
        <img src="/images/skill-js.png" alt="" className="h-7 w-7 rounded" />
      );
    case "tailwind":
      return (
        <img
          src="/images/skill-tailwind.png"
          alt=""
          className="h-7 w-7 rounded"
        />
      );
    case "api-logo":
      return (
        <img src="/images/skill-api.png" alt="" className="h-7 w-7 rounded" />
      );
    case "db":
      return (
        <svg className={iconStyles} viewBox="0 0 24 24" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="7" ry="3" {...iconStroke} />
          <path
            d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5"
            {...iconStroke}
          />
          <path
            d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
            {...iconStroke}
          />
        </svg>
      );
    case "api":
      return (
        <svg className={iconStyles} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="6" cy="12" r="2.5" {...iconStroke} />
          <circle cx="18" cy="6" r="2.5" {...iconStroke} />
          <circle cx="18" cy="18" r="2.5" {...iconStroke} />
          <path d="M8.5 11l7-3.5M8.5 13l7 3.5" {...iconStroke} />
        </svg>
      );
    case "wind":
      return (
        <svg className={iconStyles} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5" {...iconStroke} />
          <path d="M3 13h14a2.5 2.5 0 1 1-2.5 2.5" {...iconStroke} />
          <path d="M3 18h7a2.5 2.5 0 1 0-2.5-2.5" {...iconStroke} />
        </svg>
      );
    case "web":
      return (
        <svg className={iconStyles} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 5h16v12H4z" {...iconStroke} />
          <path d="M4 9h16" {...iconStroke} />
          <path d="M8 21h8" {...iconStroke} />
        </svg>
      );
    case "style":
      return (
        <svg className={iconStyles} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 4h9l5 5v9a2 2 0 0 1-2 2H5z" {...iconStroke} />
          <path d="M14 4v6h6" {...iconStroke} />
        </svg>
      );
    case "oop":
      return (
        <svg className={iconStyles} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="7" cy="7" r="3" {...iconStroke} />
          <circle cx="17" cy="7" r="3" {...iconStroke} />
          <circle cx="12" cy="17" r="3" {...iconStroke} />
          <path d="M9.5 9.5L10.5 13M14.5 13L15.5 9.5" {...iconStroke} />
        </svg>
      );
    case "nodes":
      return (
        <svg className={iconStyles} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="6" cy="6" r="3" {...iconStroke} />
          <circle cx="18" cy="6" r="3" {...iconStroke} />
          <circle cx="12" cy="18" r="3" {...iconStroke} />
          <path d="M8.5 7.5l5 8M15.5 7.5l-5 8" {...iconStroke} />
        </svg>
      );
    case "code":
    default:
      return (
        <svg className={iconStyles} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 8l-4 4 4 4" {...iconStroke} />
          <path d="M16 8l4 4-4 4" {...iconStroke} />
          <path d="M13 6l-2 12" {...iconStroke} />
          <text
            x="12"
            y="22"
            textAnchor="middle"
            fontSize="6"
            fontWeight="700"
            fill="currentColor"
          >
            {label}
          </text>
        </svg>
      );
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-indigo-950 to-purple-950" />
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 20%, rgba(56, 189, 248, 0.18), transparent 45%), radial-gradient(circle at 88% 20%, rgba(129, 140, 248, 0.26), transparent 50%), radial-gradient(circle at 40% 85%, rgba(244, 114, 182, 0.18), transparent 55%)",
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
            variants={itemVariants}
          >
            Skills
          </motion.span>
          <motion.h2
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            variants={itemVariants}
          >
            A focused toolkit for modern product engineering.
          </motion.h2>
          <motion.p
            className="max-w-2xl text-base text-white/70 sm:text-lg"
            variants={itemVariants}
          >
            A balance of frontend craft, backend reliability, and design fluency
            that keeps products polished and scalable.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_28px_rgba(15,23,42,0.6)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              variants={itemVariants}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.tone} text-xs font-semibold uppercase text-slate-950 shadow-[0_0_16px_rgba(99,102,241,0.45)]`}
                    aria-hidden="true"
                  >
                    {getIcon(skill.icon, skill.label)}
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {skill.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      Proficiency
                    </p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-white/70">
                  {skill.level}%
                </span>
              </div>

              <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
