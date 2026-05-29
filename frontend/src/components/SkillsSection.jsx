import Image from "next/image";

const languageSkills = [
  {
    name: "JavaScript",
    image: "https://cdn.simpleicons.org/javascript",
  },
  {
    name: "C++",
    image: "https://cdn.simpleicons.org/cplusplus",
  },
];

const webDevSkills = [
  {
    name: "HTML",
    image: "https://cdn.simpleicons.org/html5",
  },
  {
    name: "CSS",
    image: "https://cdn.simpleicons.org/css",
  },
  {
    name: "React",
    image: "https://cdn.simpleicons.org/react",
  },
  {
    name: "Next.js",
    image: "https://cdn.simpleicons.org/nextdotjs",
  },
  {
    name: "Node.js",
    image: "https://cdn.simpleicons.org/nodedotjs",
  },
  {
    name: "Express",
    image: "https://cdn.simpleicons.org/express",
  },
  {
    name: "MongoDB",
    image: "https://cdn.simpleicons.org/mongodb",
  },
  {
    name: "PostgreSQL",
    image: "https://cdn.simpleicons.org/postgresql",
  },
  {
    name: "SQL",
    image: "https://cdn.simpleicons.org/mysql",
  },
  {
    name: "WebRTC",
    image: "https://cdn.simpleicons.org/webrtc",
  },
];

const toolSkills = [
  {
    name: "Git",
    image: "https://cdn.simpleicons.org/git",
  },
  {
    name: "GitHub",
    image: "https://cdn.simpleicons.org/github",
  },
  {
    name: "VS Code",
    image: "https://code.visualstudio.com/assets/branding/code-stable.png",
  },
  {
    name: "Prisma",
    image: "https://cdn.simpleicons.org/prisma",
  },
  {
    name: "Socket.IO",
    image: "https://cdn.simpleicons.org/socketdotio",
  },
  {
    name: "npm",
    image: "https://cdn.simpleicons.org/nodedotjs",
  },
];

function SkillCard({ item }) {
  return (
    <div className="group relative flex items-center justify-center transition-all duration-500 hover:-translate-y-1 hover:rotate-[30deg]">
      <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full border-[2px] border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-all duration-500 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          width={90}
          height={90}
          className="object-contain w-[50%] h-[50%] group-hover:rotate-[30deg] transition-all duration-500"
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="relative overflow-hidden py-10 px-4 sm:px-6 bg-transparent transition-all duration-300">
      <div className="absolute top-10 left-20 w-40 h-40 rounded-full bg-pink-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-52 h-52 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">


          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            Web Development
          </h2>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
            Languages
          </h3>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-7 md:gap-10">
            {languageSkills.map((item, index) => (
              <SkillCard key={index} item={item} />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
            Web Development
          </h3>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-7 md:gap-10">
            {webDevSkills.map((item, index) => (
              <SkillCard key={index} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
            Tools
          </h3>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-7 md:gap-10">
            {toolSkills.map((item, index) => (
              <SkillCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
            <div className="w-screen h-1 bg-gray-400 ml-0 mt-8"></div>

    </section>
  );
}
