import React from "react";

interface SkillItem {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate" | "Beginner";
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: "Expert" },
      { name: "CSS", level: "Expert" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "jQuery", level: "Advanced" },
      { name: "Blazor WASM", level: "Intermediate" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "ASP.NET MVC", level: "Advanced" },
      { name: "ASP.NET Core", level: "Advanced" },
      { name: ".NET Framework", level: "Advanced" },
      { name: "Entity Framework Core", level: "Advanced" },
      { name: "SignalR", level: "Advanced" },
      { name: "Minimal APIs", level: "Advanced" },
      { name: "ASP.NET Web API", level: "Advanced" },
      { name: "MSSQL", level: "Advanced" },
    ],
  },
  {
    title: "Architecture & Practices",
    skills: [
      { name: "Clean Architecture", level: "Expert" },
      { name: "Design Patterns", level: "Expert" },
      { name: "SOLID Principles", level: "Advanced" },
      { name: "Dependency Injection", level: "Advanced" },
      { name: "API Design", level: "Advanced" },
      { name: "Unit Testing", level: "Advanced" },
      { name: "CI/CD", level: "Intermediate" },
      { name: "Playwright", level: "Intermediate" },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "WordPress", level: "Advanced" },
      { name: "SEO (On‑page)", level: "Intermediate" },
      { name: "Content Writing", level: "Advanced" },
    ],
  },
];

const levelColor = (level: SkillItem["level"]) => {
  switch (level) {
    case "Expert":
      return "bg-emerald-500/15 text-emerald-300 border-emerald-400/30";
    case "Advanced":
      return "bg-blue-500/15 text-blue-300 border-blue-400/30";
    case "Intermediate":
      return "bg-amber-500/15 text-amber-300 border-amber-400/30";
    default:
      return "bg-slate-500/15 text-slate-300 border-slate-400/30";
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A concise snapshot of the technologies and practices I use to deliver maintainable, scalable software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-xl"
            >
              <div className="p-6 border-b border-slate-700/50">
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between">
                      <span className="text-gray-200">{skill.name}</span>
                      <span
                        className={
                          "px-2.5 py-1 rounded-full text-xs font-medium border " +
                          levelColor(skill.level)
                        }
                      >
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#projects"
            className="btn-contrast inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            View Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
