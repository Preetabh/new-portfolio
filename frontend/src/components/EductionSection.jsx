import { Calendar, GraduationCap, MapPin } from "lucide-react";

export default function EductionSection() {
  const educationData = [

    {
      degree: "Internship (Web Development)",
      year: "Jan-2026 - Apr-2026",
      school: "Codex-Conquer (Full Stack Web Development By Intern)",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
      status: "Completed",
    },
    {
      degree: "BCA (Bachelor's in Computer Application)",
      year: "2024 - 2027",
      school: "Dr. Ram Manohar Lohia Avadh University",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
      status: "Running",
    },
    {
      degree: "Intermediate",
      year: "2022 - 2024",
      school: "UP Board Uttar Pradesh",
      image: "https://cdn-icons-png.flaticon.com/512/3976/3976626.png",
      status: "Completed",
    },
    {
      degree: "High School",
      year: "2021 - 2022",
      school: "UP Board Uttar Pradesh",
      image: "https://cdn-icons-png.flaticon.com/512/3976/3976626.png",
      status: "Completed",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-transparent transition-all duration-300">
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-sky-400/15 dark:bg-sky-500/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-fuchsia-500/15 dark:bg-purple-500/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <GraduationCap className="w-6 h-6" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400">
              Education & Experience
            </h2>
          </div>

          <p className="text-center text-sm max-w-2xl mx-auto">
            Academic milestones designed for both light and dark mode with
            modern UI polish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both`,
              }}
            >
              <div className="relative overflow-hidden rounded-[32px] border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 sm:p-7 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_50px_rgba(0,0,0,0.35)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)] dark:hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row gap-5 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-slate-200/50 dark:border-white/10 p-3 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <img
                        src={edu.image}
                        alt={edu.school}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight">
                        {edu.degree}
                      </h3>
                      <span
                        className={`flex-shrink-0 px-2 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap border ${
                          edu.status === "Ongoing"
                            ? "bg-blue-500/20 border-blue-400/40"
                            : "bg-emerald-500/20 border-emerald-400/40"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>

                    <p className="text-sm mb-3 flex items-center gap-2 leading-6">
                      <MapPin className="w-3 h-3" />
                      {edu.school}
                    </p>

                    <p className="text-sm font-semibold flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {edu.year}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-xs font-semibold border border-blue-400/20">
                        Full Time
                      </span>

                      <span className="px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-xs font-semibold border border-purple-400/20">
                        Academic
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
            <div className="w-screen h-1 bg-gray-400 ml-0 mt-8"></div>

    </section>
  );
}
