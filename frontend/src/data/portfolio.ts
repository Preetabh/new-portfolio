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
  FaMobileAlt,
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
  SiDotnet,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";

export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "mobile" | "database" | "tools";
  level: "Advanced" | "Proficient" | "Familiar";
  icon: IconType;
  color: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Full-Time" | "Remote" | "Internship";
  status: "Current" | "Completed";
  description: string;
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  status: "In Progress" | "Completed";
  details: string;
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

export const personal = {
  name: "Preetabh",
  fullName: "Preetabh Awasthi",
  role: "Full Stack & Mobile App Developer",
  tagline: "Building high-performance web and mobile apps with React Native, .NET, PHP, and modern full-stack frameworks.",
  bio: "Hi, I'm Preetabh Awasthi. Currently working at DigiEpitome as a Full Stack & App Developer. Specializing in responsive frontends, cross-platform mobile apps using React Native, and high-performance backends with .NET, PHP, and Node.js.",
  email: "preetabh.work@gmail.com",
  phone: "+91 9452900378",
  rawPhone: "+919452900378",
  whatsapp: "https://wa.me/919452900378",
  location: "Lucknow, Uttar Pradesh, India",
  currentCompany: "DigiEpitome",
  availability: "Available for Hire",
  github: "https://github.com/preetabh",
  githubUsername: "preetabh",
  socials: {
    github: "https://github.com/preetabh",
    linkedin: "https://linkedin.com/",
    whatsapp: "https://wa.me/919452900378",
    email: "mailto:preetabh.work@gmail.com",
    phone: "tel:+919452900378",
  },
};

export const verifiedMetrics = [
  {
    label: "Current Company",
    value: "DigiEpitome",
    subtext: "Aug 2026 – Present",
    color: "#ff5722",
  },
  {
    label: "Experience",
    value: "1+ Yr",
    subtext: "Started Sep 2025",
    color: "#10b981",
  },
  {
    label: "Core Stack",
    value: "Web & Mobile",
    subtext: "React Native, .NET, PHP",
    color: "#3b82f6",
  },
  {
    label: "Projects & Apps",
    value: "14+",
    subtext: "Production ready",
    color: "#a855f7",
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "digiepitome",
    role: "Full Stack & App Developer",
    company: "DigiEpitome",
    location: "Lucknow, India",
    period: "August 2026 – Present",
    type: "Full-Time",
    status: "Current",
    description:
      "Working on full-stack web and mobile application development. Building performant apps with React Native, designing backend APIs using .NET, PHP, and Node.js, and integrating scalable databases.",
    technologies: ["React Native", "React", ".NET", "PHP", "Node.js", "MongoDB", "MySQL"],
  },
  {
    id: "malay-infotech",
    role: "Web Developer",
    company: "Malay Infotech",
    location: "Gujarat, India (Remote)",
    period: "Jan 2026 – August 2026",
    type: "Remote",
    status: "Completed",
    description:
      "Engineered client-focused web platforms and administrative portals. Implemented robust REST APIs with PHP and Node.js, optimized database queries, and collaborated across cross-functional remote teams.",
    technologies: ["PHP", "Laravel", "React", "JavaScript", "MySQL", "REST APIs"],
  },
  {
    id: "codex-conquer",
    role: "Web Development Intern",
    company: "Codex-Conquer",
    location: "United States (Remote)",
    period: "Sep 2025 – Dec 2025",
    type: "Internship",
    status: "Completed",
    description:
      "Full stack development internship for US-based client web systems. Developed dynamic frontend components in React, integrated backend services, and gained practical experience in professional agile workflows.",
    technologies: ["React", "JavaScript", "Node.js", "HTML5", "CSS3", "Git"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Dr. Ram Manohar Lohia Avadh University",
    year: "2024 – 2027",
    status: "In Progress",
    details: "Core focus on programming, software engineering, algorithms, database architectures, and web application development.",
  },
  {
    degree: "12th (Intermediate)",
    institution: "UP Board, Uttar Pradesh",
    year: "2022 – 2024",
    status: "Completed",
    details: "Science and Mathematics foundation with focus on analytical problem solving.",
  },
  {
    degree: "10th (High School)",
    institution: "UP Board, Uttar Pradesh",
    year: "2021 – 2022",
    status: "Completed",
    details: "Completed secondary education with strong academic foundation.",
  },
];

export const skills: SkillItem[] = [
  // Mobile / App Development
  { name: "React Native", category: "mobile", level: "Advanced", icon: FaMobileAlt, color: "#61DAFB" },

  // Backend
  { name: ".NET / C#", category: "backend", level: "Proficient", icon: SiDotnet, color: "#512BD4" },
  { name: "PHP", category: "backend", level: "Advanced", icon: FaPhp, color: "#777BB4" },
  { name: "Laravel", category: "backend", level: "Proficient", icon: SiLaravel, color: "#FF2D20" },
  { name: "Node.js", category: "backend", level: "Advanced", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", category: "backend", level: "Advanced", icon: SiExpress, color: "#F8FAFC" },
  { name: "Socket.IO", category: "backend", level: "Proficient", icon: SiSocketdotio, color: "#ffffff" },

  // Frontend
  { name: "React.js", category: "frontend", level: "Advanced", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", category: "frontend", level: "Proficient", icon: SiNextdotjs, color: "#ffffff" },
  { name: "JavaScript", category: "frontend", level: "Advanced", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", category: "frontend", level: "Proficient", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", category: "frontend", level: "Advanced", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5 / CSS3", category: "frontend", level: "Advanced", icon: FaHtml5, color: "#E34F26" },

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
    githubUrl: "https://github.com/preetabh",
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
    githubUrl: "https://github.com/preetabh",
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
    liveUrl: "https://github.com/preetabh",
    githubUrl: "https://github.com/preetabh",
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
    githubUrl: "https://github.com/preetabh",
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
    githubUrl: "https://github.com/preetabh",
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
    liveUrl: "https://github.com/preetabh",
    githubUrl: "https://github.com/preetabh",
    featured: false,
  },
];
