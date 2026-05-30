import Image from "next/image";

export default function HomeSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-28 overflow-hidden">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-lg mb-3">Hello, I'm</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Preetabh <span className="text-blue-500">Awasthi</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl  mb-6">
            Full Stack Web Developer
          </h2>

          <p className=" text-base sm:text-lg leading-7 sm:leading-8 mb-8 max-w-xl">
            I build modern, responsive, scalable and top level of projects like Ecommerce, chatting applications etc...
          </p>

          <div className="flex gap-4 flex-wrap items-center">
            <a
              href="#projects"
              className="bg-blue-400 hover:bg-blue-700 transition-all duration-300 px-6 py-3 rounded-xl font-medium"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-600 hover:border-white transition-all duration-300 px-6 py-3 rounded-xl font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-[#0576ff] blur-3xl opacity-40 rounded-full"></div>

            <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[390px] md:h-[390px] rounded-[40px] border border-[#106ee062] bg-gradient-to-br from-[#d0d2d4a1] via-[#fafbf962] to-[#106ee062] p-2 shadow-[0_0_80px_rgba(250,204,21,0.35)] relative backdrop-blur-xl">
              <div className="w-full h-full rounded-[32px] bg-[#111] flex items-center justify-center overflow-hidden">
                <Image
                  src="/homesection2.png"
                  width={400}
                  height={400}
                  alt="profile"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
