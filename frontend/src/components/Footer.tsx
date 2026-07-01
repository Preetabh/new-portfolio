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
    <footer className="relative border-t border-black/5 px-4 py-10 dark:border-white/10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-display text-lg font-black italic text-slate-900 dark:text-white">
          Preetabh<span className="text-indigo-500">.</span>
        </p>
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {personal.fullName}. Crafted with React, Tailwind &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/15 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            >
              <s.icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
