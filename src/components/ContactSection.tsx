"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconBase =
  "h-5 w-5 fill-current text-white/70 transition duration-300 group-hover:text-white";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setStatus("sending");
    setStatusMessage("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = (await response.json()) as { error?: string };
        throw new Error(errorBody.error ?? "Something went wrong.");
      }

      formElement.reset();
      setStatus("sent");
      setStatusMessage("Message sent. I will reply soon.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Unable to send the message."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-indigo-950 to-purple-950" />
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.2), transparent 45%), radial-gradient(circle at 90% 30%, rgba(129, 140, 248, 0.28), transparent 50%), radial-gradient(circle at 50% 85%, rgba(244, 114, 182, 0.2), transparent 55%)",
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
            Contact
          </motion.span>
          <motion.h2
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            variants={itemVariants}
          >
            Let’s build something bold together.
          </motion.h2>
          <motion.p
            className="max-w-2xl text-base text-white/70 sm:text-lg"
            variants={itemVariants}
          >
            Share your idea, timeline, or collaboration goals. I’ll respond with
            clarity, care, and momentum.
          </motion.p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.form
            className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(15,23,42,0.6)]"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={handleSubmit}
          >
            <motion.div className="space-y-2" variants={itemVariants}>
              <label className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                Name
              </label>
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-blue-400/40"
                placeholder="Your name"
                type="text"
                name="name"
                required
              />
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <label className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                Email
              </label>
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-blue-400/40"
                placeholder="you@example.com"
                type="email"
                name="email"
                required
              />
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <label className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                Message
              </label>
              <textarea
                className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-blue-400/40"
                placeholder="Tell me about your project..."
                name="message"
                required
              />
            </motion.div>

            <motion.button
              className="w-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_0_20px_rgba(99,102,241,0.6)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(99,102,241,0.9)]"
              type="submit"
              variants={itemVariants}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>
            <motion.p
              className={`text-sm ${
                status === "error" ? "text-rose-200" : "text-white/70"
              }`}
              variants={itemVariants}
            >
              {statusMessage}
            </motion.p>
          </motion.form>

          <motion.div
            className="flex flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(15,23,42,0.6)]"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white">
                Connect with me
              </h3>
              <div className="flex gap-4">
                <a
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-white/30 hover:bg-white/10"
                  href="https://github.com/AbdullahJan-007"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <svg
                    className={iconBase}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.02c0 4.423 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.109-1.466-1.109-1.466-.907-.62.069-.608.069-.608 1.003.071 1.531 1.034 1.531 1.034.892 1.53 2.341 1.088 2.91.832.092-.648.35-1.088.636-1.338-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.845c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.31.678.923.678 1.86 0 1.343-.012 2.427-.012 2.758 0 .268.18.58.688.481A10.022 10.022 0 0 0 22 12.02C22 6.484 17.523 2 12 2Z" />
                  </svg>
                </a>
                <a
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-white/30 hover:bg-white/10"
                  href="https://www.linkedin.com/in/abdullah-jan-128587343"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    className={iconBase}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6.94 8.5H4.18V20h2.76V8.5ZM5.56 3.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM20 20h-2.76v-5.93c0-1.42-.03-3.25-1.98-3.25-1.98 0-2.28 1.55-2.28 3.15V20H10.2V8.5h2.64v1.57h.04c.37-.7 1.28-1.45 2.63-1.45 2.81 0 3.33 1.85 3.33 4.25V20Z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="border-t border-white/10 pt-6 text-sm text-white/60"
              variants={itemVariants}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                Motto
              </p>
              <p className="mt-2 text-base text-white/70">
                “Every pixel and line of code should inspire confidence.”
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.footer
          className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.3em] text-white/40"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={itemVariants}>
            © 2026 Abdullah Jan. All rights reserved.
          </motion.span>
          <motion.span variants={itemVariants}>
            Build bold. Ship with purpose.
          </motion.span>
        </motion.footer>
      </div>
    </section>
  );
}
