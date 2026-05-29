import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Modern full-stack e-commerce platform with Razorpay payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/ecommerce.png",
    link: "https://biggest-shop-mart.onrender.com",
    status: "Click Here",
    active: true,
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application with Socket.IO, authentication and modern messaging UI.",
    tech: ["Next.js", "Socket.IO", "MongoDB"],
    image: "/chatApp.png",
    link: "#",
    status: "Working on locally due to security reasons 🔒",
    active: false,
  },
  {
    title: "Code Review With Corrections",
    description:
      "AI-powered code review platform with suggestions and corrections.",
    tech: ["Next.js", "Express", "Cloudinary"],
    image: "/codeReview.png",
    link: "https://code-review-2-xfed.onrender.com",
    status: "Click Here",
    active: true,
  },
];

export default function ProjectSection() {
  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            Explore My Work 🕵️
          </h2>

          <p className="max-w-2xl mx-auto opacity-80">
            A collection of modern full-stack projects focused on
            performance, UI/UX and scalable architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="relative h-72 bg-black/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-blue-500/10 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="mb-6 opacity-80">
                  {project.description}
                </p>

                <a
                  href={project.active ? project.link : "#"}
                  target={project.active ? "_blank" : undefined}
                  rel={project.active ? "noopener noreferrer" : undefined}
                  aria-disabled={!project.active}
                  className={`flex items-center justify-center py-3 rounded-xl ${
                    project.active
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-700 cursor-not-allowed pointer-events-none"
                  }`}
                >
                  {project.status}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
            <div className="w-screen h-1 bg-gray-400 ml-0 mt-8"></div>

    </section>
  );
}
