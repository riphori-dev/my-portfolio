import React from "react";

const FreelanceBanner: React.FC = () => {
  const offerings: string[] = [
    "Website Development",
    "API Development",
    "UI Development",
    "N8N Automation",
    "Web Design",
    "WordPress Development",
  ];

  return (
    <section aria-label="Freelance availability" className="py-10">
      <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-purple-500/20 rounded-full blur-2xl" />

        <div className="relative p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Open for freelance opportunities
                </span>
              </h2>
              <p className="mt-2 text-gray-300 max-w-2xl">
                I can help with short-term or long-term projects. Here are the areas I work in:
              </p>
            </div>

            <a
              href="#contact"
              aria-label="Contact Me"
              className="white-important inline-flex items-center justify-center rounded-xl px-6 py-3 text-base sm:text-lg tracking-wide font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:-translate-y-0.5 ring-1 ring-white/20 drop-shadow"
              style={{ color: 'white !important', WebkitBackgroundClip: 'unset', backgroundClip: 'unset' }}
            >
              <span style={{ color: 'white !important', WebkitBackgroundClip: 'unset', backgroundClip: 'unset' }}>Contact Me</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {offerings.map((item) => (
              <span
                key={item}
                className="bg-slate-800/70 border border-slate-600 text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:border-blue-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceBanner;


