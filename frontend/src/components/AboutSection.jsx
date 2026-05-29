import Image from "next/image";

export default function AboutSection() {
  return (
    <section className=" min-h-screensm:px-6 py-15 overflow-hidden ">
      <div className="max-w-7xl  px-4  mx-auto">
        <div className="flex justify-center mb-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center leading-tight">
            Who I am🤔
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0  blur-3xl rounded-[35px]"></div>

              <div className="relative w-[280px] h-[320px] sm:w-[360px] sm:h-[420px] md:w-[480px] md:h-[540px] overflow-hidden rounded-[35px] border border-white/10 shadow-2xl">
                <Image
                  src="/user.png"


                  alt="profile"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-8 text-lg sm:text-xl leading-8 font-medium">
              <p>
                Hello👋! I'm <span className="font-bold">Preetabh Awasthi</span>, a BCA (Bachelor of Computer Applications) student currently pursuing my degree and passionate about full-stack web development. I specialize in both front-end and back-end development, creating modern, responsive, and user-friendly web applications.
              </p>

              <p>
                My core skills include React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Prisma, Socket.IO, JavaScript, and REST APIs. I enjoy building scalable applications with clean UI/UX and efficient backend architectures.
              </p>

              <p>
                As a continuous learner📖 and tech enthusiast 🕵️, I am always exploring new technologies, improving my development skills, and staying updated with the latest industry trends.
              </p>

              <p>
                I believe that consistency, creativity, and continuous learning are the keys to becoming a successful developer in the ever-evolving tech industry.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 mt-12">
              <a
                href="#projects"
                className="border border-gray-400/40 hover:border-white transition-all duration-300 px-8 py-4 rounded-2xl font-semibold"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-gray-500/50 hover:border-white transition-all duration-300 px-8 py-4 rounded-2xl font-semibold"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-1 bg-gray-400 ml-0 mt-10"></div>
    </section>
  );
}
