import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineMail,
  HiOutlineTerminal,
  HiOutlineCheck,
  HiOutlineDocumentText,
} from "react-icons/hi";
import { FaGithub, FaWhatsapp, FaPhoneAlt, FaMobileAlt, FaPhp } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiLaravel, SiDotnet } from "react-icons/si";
import toast from "react-hot-toast";
import StrokeText from "./StrokeText";
import { personal, verifiedMetrics } from "../data/portfolio";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    toast.success("Email copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] flex-col justify-center px-4 pt-28 pb-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid items-center gap-10 lg:grid-cols-12">
        {/* Left Intro Column */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Status Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Opportunities • Full-Time &amp; Projects</span>
          </div>

          {/* Heading with React Bits StrokeText Animation */}
          <div className="font-display">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl mb-2">
              Hi, I&apos;m
            </h1>
            <div className="w-full max-w-[540px]">
              <StrokeText
                text="Preetabh Awasthi"
                strokeColor="#ff5722"
                fillColor="#ff5722"
                strokeWidth={2}
                fontSize={56}
                fontWeight={800}
                fontFamily="var(--font-display, sans-serif)"
                letterSpacing={-1.5}
                drawDuration={1.3}
                fillDelay={0.18}
                stagger={0.04}
                wipeFrom="left"
                trigger="mount"
                hoverRedraw={true}
                className="stroke-text--left"
              />
            </div>
          </div>

          {/* Subtitle */}
          <div className="mt-3 flex items-center gap-2 text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200">
            <HiOutlineTerminal className="text-[#ff5722] shrink-0" size={20} />
            <span>Full Stack &amp; Mobile App Developer</span>
          </div>

          {/* Tech Line */}
          <div className="mt-1 flex flex-wrap gap-1.5 font-mono text-xs text-[#ff5722] dark:text-[#ff8a65]">
            <span>React Native</span>
            <span>•</span>
            <span>.NET</span>
            <span>•</span>
            <span>PHP / Laravel</span>
            <span>•</span>
            <span>React</span>
            <span>•</span>
            <span>Node.js</span>
          </div>

          {/* Tagline inspired by saurabhshukla.com */}
          <p className="mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Designing and developing scalable web applications and mobile apps. Specializing in cross-platform mobile apps with React Native, high-performance backend systems with .NET &amp; PHP, and modern full-stack web platforms.
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("projects")}
              className="flex items-center gap-2 rounded-xl bg-[#ff5722] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-[#ff5722]/30 transition-all hover:bg-[#ff7043]"
            >
              <span>Explore Projects</span>
              <HiOutlineArrowRight size={15} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition-colors hover:border-[#ff5722]/40 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
            >
              <HiOutlineMail size={15} />
              <span>Get in Touch</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenResume}
              className="flex items-center gap-1.5 rounded-xl border border-[#ff5722]/30 bg-[#ff5722]/10 px-4 py-2.5 text-xs font-bold text-[#ff5722] transition-colors hover:bg-[#ff5722] hover:text-white"
            >
              <HiOutlineDocumentText size={15} />
              <span>Resume</span>
            </motion.button>
          </div>

          {/* Quick Copy Email & Socials */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-mono text-slate-700 shadow-sm transition-colors hover:border-[#ff5722]/40 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
            >
              {copied ? (
                <HiOutlineCheck className="text-emerald-500" size={14} />
              ) : (
                <HiOutlineMail className="text-[#ff5722]" size={14} />
              )}
              <span>{personal.email}</span>
              <span className="rounded bg-slate-100 dark:bg-white/10 px-1 py-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                {copied ? "Copied" : "Copy"}
              </span>
            </button>

            <div className="flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:text-slate-950 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <FaGithub size={15} />
              </a>
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-emerald-600 hover:text-emerald-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
              >
                <FaWhatsapp size={15} />
              </a>
              <a
                href={`tel:${personal.rawPhone}`}
                aria-label="Phone"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-cyan-600 hover:text-cyan-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
              >
                <FaPhoneAlt size={12} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Code Card */}
        <motion.div
          className="relative lg:col-span-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-xl shadow-slate-200/60 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1020]/90 dark:shadow-2xl">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Preetabh.ts</span>
            </div>

            {/* Code */}
            <div className="font-mono text-xs leading-relaxed text-slate-800 dark:text-slate-300 space-y-1">
              <div>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span>{" "}
                <span className="text-cyan-700 dark:text-cyan-300">developer</span> = {"{"}
              </div>
              <div className="pl-4 space-y-1">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">name:</span>{" "}
                  <span className="text-amber-700 dark:text-amber-300">&quot;Preetabh Awasthi&quot;</span>,
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">role:</span>{" "}
                  <span className="text-amber-700 dark:text-amber-300">&quot;Full Stack &amp; App Developer&quot;</span>,
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">currentCompany:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">&quot;DigiEpitome&quot;</span>,
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">location:</span>{" "}
                  <span className="text-amber-700 dark:text-amber-300">&quot;Lucknow, India&quot;</span>,
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">stack:</span> [
                  <span className="text-cyan-700 dark:text-cyan-300">&quot;React Native&quot;</span>,{" "}
                  <span className="text-purple-700 dark:text-purple-300">&quot;.NET&quot;</span>,{" "}
                  <span className="text-blue-700 dark:text-blue-300">&quot;PHP&quot;</span>,{" "}
                  <span className="text-emerald-700 dark:text-emerald-300">&quot;React&quot;</span>],
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">status:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">&quot;Available for Projects&quot;</span>,
                </div>
              </div>
              <div>{"};"}</div>
            </div>

            {/* Quick Tech Badges */}
            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-200 dark:border-white/5 pt-3">
              <span className="flex items-center gap-1 rounded-md bg-[#61DAFB]/15 px-2 py-0.5 text-[11px] font-semibold text-[#0284c7] dark:text-[#61DAFB]">
                <FaMobileAlt size={11} /> React Native
              </span>
              <span className="flex items-center gap-1 rounded-md bg-[#512BD4]/15 px-2 py-0.5 text-[11px] font-semibold text-[#512BD4] dark:text-[#a78bfa]">
                <SiDotnet size={12} /> .NET
              </span>
              <span className="flex items-center gap-1 rounded-md bg-[#777BB4]/15 px-2 py-0.5 text-[11px] font-semibold text-[#4f46e5] dark:text-[#777BB4]">
                <FaPhp size={12} /> PHP
              </span>
              <span className="flex items-center gap-1 rounded-md bg-[#61DAFB]/15 px-2 py-0.5 text-[11px] font-semibold text-[#0284c7] dark:text-[#61DAFB]">
                <SiReact size={12} /> React
              </span>
              <span className="flex items-center gap-1 rounded-md bg-[#339933]/15 px-2 py-0.5 text-[11px] font-semibold text-[#15803d] dark:text-[#339933]">
                <SiNodedotjs size={12} /> Node.js
              </span>
            </div>
          </div>
        </motion.div>
        </div>

        {/* Metrics Row (Underneath Intro & Code Card across full width) */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-slate-200/80 dark:border-white/10 pt-6">
          {verifiedMetrics.map((m) => (
            <div key={m.label} className="text-center sm:text-left">
              <span className="font-display text-2xl font-black" style={{ color: m.color }}>
                {m.value}
              </span>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{m.label}</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{m.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
