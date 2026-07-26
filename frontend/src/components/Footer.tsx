import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { personal } from "../data/portfolio";

const socialLinks = [
  { icon: FaGithub, href: personal.socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: personal.socials.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: personal.socials.twitter, label: "Twitter" },
  { icon: FaInstagram, href: personal.socials.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-black/5 bg-slate-900/[0.02] px-4 py-12 dark:border-white/10 dark:bg-white/[0.01] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 font-display text-xl font-black italic tracking-tight text-slate-900 dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-600 text-xs not-italic text-white shadow-md">
            P
          </span>
          <span>Preetabh</span>
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
        </div>

        <p className="text-center text-xs font-medium text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {personal.fullName}. Built with PHP, Laravel, React, Tailwind &amp; Framer Motion.
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
