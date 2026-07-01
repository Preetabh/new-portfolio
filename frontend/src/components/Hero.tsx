import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { personal } from "../data/portfolio";

const socialLinks = [
  { icon: FaGithub, href: personal.socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: personal.socials.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: personal.socials.twitter, label: "Twitter" },
  { icon: FaInstagram, href: personal.socials.instagram, label: "Instagram" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:pt-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            className="font-display text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {personal.fullName.split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              {personal.fullName.split(" ")[1]}
            </span>
          </motion.h1>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl"
          >
            {personal.role}
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105"
            >
              View Projects
              <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-white/15 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            >
              <HiOutlineMail />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-10 flex items-center gap-3"
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/15 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
              >
                <s.icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-fuchsia-500/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl shadow-indigo-500/20">
              <img
                src="https://images.pexels.com/photos/34803994/pexels-photo-34803994.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Developer workspace with code on laptop"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-transparent" />
            </div>
            <motion.div
              animate={{ rotate: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-xl backdrop-blur dark:bg-[#12142a]/90"
            >
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Currently building</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Full Stack Apps 🚀</p>
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 flex items-center gap-2 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-xl backdrop-blur dark:bg-[#12142a]/90"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <p className="text-sm font-bold text-slate-900 dark:text-white">Open to work</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 dark:text-slate-500 sm:flex"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-8 w-5 rounded-full border-2 border-current p-1"
        >
          <span className="block h-1.5 w-1.5 rounded-full bg-current" />
        </motion.div>
      </motion.div>
    </section>
  );
}
