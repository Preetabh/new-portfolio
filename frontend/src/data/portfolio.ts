import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaJava,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiSocketdotio,
  SiVite,
  SiVercel,
  SiRedux,
  SiFramer,
  SiMysql,
  SiC,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const personal = {
  name: "Preetabh",
  fullName: "Preetabh Awasthi",
  role: "Full Stack Web Developer",
  tagline:
    "I build modern, responsive, scalable and top level of projects like Ecommerce, chatting applications etc...",
  email: "preetabh.work@gmail.com",
  phone: "+91 9452900378",
  location: "Lucknow, Uttar Pradesh, India",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
  },
};

export const aboutParagraphs = [
  "Hello 👋! I'm Preetabh Awasthi, a BCA (Bachelor of Computer Applications) student currently pursuing my degree and passionate about full-stack web development. I specialize in both front-end and back-end development, creating modern, responsive, and user-friendly web applications.",
  "My core skills include React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Prisma, Socket.IO, JavaScript, and REST APIs. I enjoy building scalable applications with clean UI/UX and efficient backend architectures.",
  "As a continuous learner 📖 and tech enthusiast 🤖, I am always exploring new technologies, improving my development skills, and staying updated with the latest industry trends.",
  "I believe that consistency, creativity, and continuous learning are the keys to becoming a successful developer in the ever-evolving tech industry.",
];

export const stats = [
  { label: "Projects Completed", value: "12+" },
  { label: "Technologies Used", value: "20+" },
  { label: "Cups of Coffee", value: "500+" },
  { label: "Years Learning", value: "3+" },
];

export const education = [
  {
    title: "Internship (Web Development)",
    place: "Codex-Conquer (Full Stack Web Development By Intern)",
    date: "Jan-2026 – Apr-2026",
    status: "Completed",
    tags: ["Full Time", "Academic"],
  },
  {
    title: "BCA (Bachelor's in Computer Application)",
    place: "Dr. Ram Manohar Lohia Avadh University",
    date: "2024 – 2027",
    status: "Running",
    tags: ["Full Time", "Academic"],
  },
  {
    title: "Intermediate",
    place: "UP Board Uttar Pradesh",
    date: "2022 – 2024",
    status: "Completed",
    tags: ["Full Time", "Academic"],
  },
  {
    title: "High School",
    place: "UP Board Uttar Pradesh",
    date: "2021 – 2022",
    status: "Completed",
    tags: ["Full Time", "Academic"],
  },
];

export const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Modern full-stack e-commerce platform with Razorpay payment integration.",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    link: "#",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application with Socket.IO, authentication and modern messaging UI.",
    tags: ["Next.js", "Socket.IO", "MongoDB"],
    gradient: "from-slate-700 via-slate-800 to-slate-900",
    link: "#",
    locked: true,
  },
  {
    title: "Code Review With Corrections",
    description:
      "AI-powered code review platform with suggestions and corrections.",
    tags: ["Next.js", "Express", "Cloudinary"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    link: "#",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Java", icon: FaJava, color: "#EA2D2E" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Prisma", icon: SiPrisma, color: "#ffffff" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#ffffff" },
      { name: "Framer Motion", icon: SiFramer, color: "#ffffff" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
];
