import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaPhp,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiLaravel,
  SiVite,
  SiVercel,
  SiSocketdotio,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";

export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  level: "Advanced" | "Proficient" | "Familiar";
  icon: IconType;
  color: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "fullstack" | "frontend" | "ai";
  stack: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  status: "In Progress" | "Completed";
  details: string;
}

export const personal = {
  name: "Preetabh",
  fullName: "Preetabh Awasthi",
  role: "Full Stack Web Developer",
  tagline: "I build fast, responsive, and scalable web applications.",
  bio: "Hi, I'm Preetabh Awasthi. I specialize in both front-end and back-end development, building clean, responsive, and user-friendly web apps.",
  email: "preetabh.work@gmail.com",
  phone: "+91 9452900378",
  rawPhone: "+919452900378",
  whatsapp: "https://wa.me/919452900378",
  location: "Lucknow, Uttar Pradesh, India",
  availability: "Available for Hire",
  github: "https://github.com/",
  githubUsername: "preetabh-awasthi",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    whatsapp: "https://wa.me/919452900378",
    email: "mailto:preetabh.work@gmail.com",
    phone: "tel:+919452900378",
  },
};

export const verifiedMetrics = [
  {
    label: "Projects Completed",
    value: "12+",
    subtext: "Production & side projects",
    color: "#ff5722",
  },
  {
    label: "Technologies",
    value: "16+",
    subtext: "Languages & frameworks",
    color: "#10b981",
  },
  {
    label: "Experience",
    value: "2+ Yrs",
    subtext: "Hands-on web development",
    color: "#3b82f6",
  },
  {
    label: "Happy Clients",
    value: "100%",
    subtext: "Positive feedback",
    color: "#a855f7",
  },
];

export const education: EducationItem[] = [
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Dr. Ram Manohar Lohia Avadh University",
    year: "2024 – 2027",
    status: "In Progress",
    details: "Core focus on programming, data structures, databases, and web technologies.",
  },
  {
    degree: "Web Development Internship",
    institution: "Codex-Conquer",
    year: "Jan 2026 – Apr 2026",
    status: "Completed",
    details: "Full stack web development intern building live client features and REST APIs.",
  },
  {
    degree: "12th (Intermediate)",
    institution: "UP Board Uttar Pradesh",
    year: "2022 – 2024",
    status: "Completed",
    details: "Science and mathematics foundation.",
  },
  {
    degree: "10th (High School)",
    institution: "UP Board Uttar Pradesh",
    year: "2021 – 2022",
    status: "Completed",
    details: "Completed secondary education.",
  },
];

export const skills: SkillItem[] = [
  // Frontend
  { name: "React.js", category: "frontend", level: "Advanced", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", category: "frontend", level: "Proficient", icon: SiNextdotjs, color: "#ffffff" },
  { name: "JavaScript", category: "frontend", level: "Advanced", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", category: "frontend", level: "Proficient", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", category: "frontend", level: "Advanced", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5 / CSS3", category: "frontend", level: "Advanced", icon: FaHtml5, color: "#E34F26" },

  // Backend
  { name: "Node.js", category: "backend", level: "Advanced", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", category: "backend", level: "Advanced", icon: SiExpress, color: "#F8FAFC" },
  { name: "PHP", category: "backend", level: "Advanced", icon: FaPhp, color: "#777BB4" },
  { name: "Laravel", category: "backend", level: "Proficient", icon: SiLaravel, color: "#FF2D20" },
  { name: "Socket.IO", category: "backend", level: "Proficient", icon: SiSocketdotio, color: "#ffffff" },

  // Database
  { name: "MongoDB", category: "database", level: "Advanced", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", category: "database", level: "Proficient", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", category: "database", level: "Proficient", icon: SiMysql, color: "#4479A1" },
  { name: "Prisma", category: "database", level: "Proficient", icon: SiPrisma, color: "#ffffff" },

  // Tools
  { name: "Git", category: "tools", level: "Advanced", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", category: "tools", level: "Advanced", icon: FaGithub, color: "#F8FAFC" },
  { name: "VS Code", category: "tools", level: "Advanced", icon: VscVscode, color: "#007ACC" },
  { name: "Vercel", category: "tools", level: "Advanced", icon: SiVercel, color: "#ffffff" },
  { name: "Vite", category: "tools", level: "Advanced", icon: SiVite, color: "#646CFF" },
  { name: "Docker", category: "tools", level: "Familiar", icon: FaDocker, color: "#2496ED" },
];

export const projects: ProjectItem[] = [
  {
    id: "biggest-shop-mart",
    title: "E-Commerce Website",
    category: "fullstack",
    stack: "React, Node.js, MongoDB",
    description: "Modern full-stack e-commerce store with user authentication and Razorpay payment gateway integration.",
    highlights: [
      "User authentication and product catalog with search & filter",
      "Seamless cart and checkout with Razorpay online payments",
      "Deployed live on Render with MongoDB Atlas database",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    liveUrl: "https://biggest-shop-mart.onrender.com",
    githubUrl: "https://github.com/",
    featured: true,
  },
  {
    id: "code-review",
    title: "Code Review & Corrections",
    category: "ai",
    stack: "Next.js, Express, AI",
    description: "AI-powered developer platform that reviews code snippets, detects errors, and gives instant corrections.",
    highlights: [
      "Instant code analysis and intelligent error corrections",
      "Clean syntax highlighted diff view for easy reading",
      "Built with Next.js, Express backend, and deployed on Render",
    ],
    tags: ["Next.js", "Express", "AI", "Cloudinary"],
    liveUrl: "https://code-review-2-xfed.onrender.com",
    githubUrl: "https://github.com/",
    featured: true,
  },
  {
    id: "chat-app",
    title: "Real-Time Chat App",
    category: "fullstack",
    stack: "Next.js, Socket.IO, MongoDB",
    description: "Real-time chatting application with instant WebSocket messaging, user status, and modern responsive UI.",
    highlights: [
      "Instant real-time messaging with Socket.IO",
      "User presence status and group / private messaging",
      "Modern dark UI built with Tailwind CSS",
    ],
    tags: ["Next.js", "Socket.IO", "Node.js", "MongoDB"],
    liveUrl: "https://github.com/",
    githubUrl: "https://github.com/",
    featured: true,
  },
  {
    id: "codementor-ai",
    title: "CodeMentor AI",
    category: "ai",
    stack: "MERN + Gemini AI",
    description: "Full-stack AI code auditor and security checker powered by Google Gemini and custom diff tools.",
    highlights: [
      "Automated code vulnerability checks and refactoring tips",
      "Google Gemini integration with responsive modern UI",
      "Deployed live on Vercel",
    ],
    tags: ["React", "Node.js", "MongoDB", "Gemini AI"],
    liveUrl: "https://codementor-ai-mern.vercel.app/",
    githubUrl: "https://github.com/",
    featured: false,
  },
  {
    id: "spaceweb",
    title: "SpaceWeb",
    category: "frontend",
    stack: "React + Vite",
    description: "Visually stunning space-themed interactive web app with smooth animations and fast load times.",
    highlights: [
      "Interactive cosmic celestial graphics and responsive layout",
      "Built with React and Vite for 60fps performance",
      "Deployed live on Vercel",
    ],
    tags: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://spaceweb-ten.vercel.app",
    githubUrl: "https://github.com/",
    featured: false,
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    category: "fullstack",
    stack: "MERN Stack",
    description: "Converts long links into short, shareable URLs with click analytics and quick copy.",
    highlights: [
      "Short link generation with custom alias support",
      "RESTful API with Node.js, Express, and MongoDB",
      "Click count tracking and instant redirection",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://github.com/",
    githubUrl: "https://github.com/",
    featured: false,
  },
];
