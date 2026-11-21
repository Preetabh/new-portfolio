import { motion } from "framer-motion";
import {
  HiOutlineSparkles,
  HiOutlineDeviceMobile,
  HiOutlineServer,
  HiOutlineDatabase,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { personal } from "../data/portfolio";

const PILLARS = [
  {
    icon: HiOutlineDeviceMobile,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with React Native. Native performance, fluid 60fps animations, local storage, and responsive touch interfaces.",
    color: "#61DAFB",
  },
  {
    icon: HiOutlineCodeBracketSquare,
    title: "Full-Stack Web Engineering",
    desc: "Modern web applications using React, Next.js, and TypeScript. Accessible components, state management, and seamless UX across screen sizes.",
    color: "#ff5722",
  },
  {
    icon: HiOutlineServer,
    title: "Backend & RESTful APIs",
    desc: "Robust backends and microservices built with .NET (C#), PHP (Laravel), and Node.js. Clean architecture, auth, and secure API endpoints.",
    color: "#a855f7",
  },
  {
    icon: HiOutlineDatabase,
    title: "Database & Scalability",
    desc: "Relational and NoSQL schemas with MongoDB, MySQL, and PostgreSQL. Query optimization, index tuning, and cloud deployment pipelines.",
    color: "#10b981",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section Header (saurabhshukla.com style) */}
        <div className="mb-10 text-center">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#ff5722]/30 bg-[#ff5722]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5722]">
            <HiOutlineSparkles size={13} />
            Engineering Philosophy
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            From Idea to Production
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            How I architect and deliver reliable software — from system design and mobile engineering to resilient backends and continuous deployment.
          </p>
        </div>

        {/* 4 Architectural Pillar Cards */}
        <div className="grid gap-4 sm:grid-cols-2 mb-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 sm:p-6 shadow-md shadow-slate-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/80 dark:shadow-none transition-colors hover:border-[#ff5722]/40"
              >
                <div
                  className="mb-3.5 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: `${pillar.color}15`,
                    color: pillar.color,
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Story & Background Bento */}
        <div className="grid gap-5 md:grid-cols-12">
          {/* Main Story Card */}
          <div className="md:col-span-8 flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/90 p-6 sm:p-7 shadow-lg shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/80 dark:shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[#ff5722]" />
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  About Preetabh Awasthi
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-3">
                I am a Full Stack and Mobile App Developer based in Lucknow, India, currently engineering full-stack solutions at <strong className="text-[#ff5722]">DigiEpitome</strong> (Aug 2026 – Present). Previously, I engineered web platforms remotely for <strong className="text-slate-900 dark:text-white">Malay Infotech</strong> (Gujarat) and completed an intensive web development internship with US-based company <strong className="text-slate-900 dark:text-white">Codex-Conquer</strong> (Sep 2025 – Dec 2025).
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                I focus on writing clean, maintainable code, designing scalable REST APIs, and building intuitive mobile interfaces that solve real-world problems.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-200 dark:border-white/5 pt-4">
              <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-mono text-slate-700 dark:bg-white/5 dark:text-slate-300">
                🚀 Current: DigiEpitome
              </span>
              <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-mono text-slate-700 dark:bg-white/5 dark:text-slate-300">
                📱 Mobile: React Native
              </span>
              <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-mono text-slate-700 dark:bg-white/5 dark:text-slate-300">
                ⚡ Backend: .NET &amp; PHP
              </span>
            </div>
          </div>

          {/* Quick Action Card */}
          <div className="md:col-span-4 flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-lg shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/80 dark:shadow-none">
            <div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-xs font-semibold mb-2">
                <HiOutlineLocationMarker className="text-[#ff5722]" size={16} />
                <span>{personal.location}</span>
              </div>
              <h4 className="font-display text-base font-bold text-slate-900 dark:text-white mb-1">
                Open to Opportunities
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Available for full-time engineering roles, mobile app builds, and select contract engagements.
              </p>
            </div>

            <div className="mt-5 space-y-2 border-t border-slate-200 dark:border-white/5 pt-4">
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 transition-colors hover:bg-emerald-500/25 w-full"
              >
                <FaWhatsapp size={15} />
                <span>WhatsApp Message</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white px-3.5 py-2 text-xs font-bold transition-colors w-full"
              >
                <FaGithub size={15} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
