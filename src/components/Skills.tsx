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
    title: "Languages",
    skills: [
      { name: "HTML", level: "Expert" },
      { name: "CSS", level: "Expert" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "C#", level: "Advanced" },
    ],
  },
  {
    title: "Frontend / UI",
    skills: [
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
      { name: "ASP.NET Core", level: "Advanced" },
      { name: "ASP.NET MVC", level: "Advanced" },
      { name: ".NET Framework", level: "Advanced" },
      { name: "ASP.NET Web API", level: "Advanced" },
      { name: "Minimal APIs", level: "Advanced" },
      { name: "Entity Framework Core", level: "Advanced" },
      { name: "SignalR", level: "Advanced" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MSSQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
    ],
  },
  {
    title: "DevOps / Testing",
    skills: [
      { name: "CI/CD", level: "Intermediate" },
      { name: "Playwright", level: "Intermediate" },
      { name: "Docker", level: "Advanced" },
      { name: "xUnit", level: "Advanced" },
      { name: "Selenium WebDriver", level: "Advanced" },
    ],
  },
  {
    title: "CMS / Content",
    skills: [
      { name: "WordPress", level: "Advanced" },
      { name: "SEO (On‑page)", level: "Intermediate" },
      { name: "Content Writing", level: "Advanced" },
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
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-600 bg-slate-800/70 text-gray-200"
                    >
                      <span>{skill.name}</span>
                      <span
                        className={
                          "px-2 py-0.5 rounded-full text-[10px] font-semibold border " +
                          levelColor(skill.level)
                        }
                      >
                        {skill.level}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services mini-cards */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6">Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Website Development", desc: "Responsive sites with modern stacks and best practices." },
              { title: "API Development", desc: "REST APIs in .NET with security and documentation." },
              { title: "UI Development", desc: "Clean, accessible interfaces in React/Tailwind/Bootstrap." },
              { title: "N8N Automation", desc: "Automate workflows: webhooks, CRON, Notion, Gmail, more." },
              { title: "Web Design", desc: "Design systems, layout, and UX-focused flows." },
              { title: "WordPress Development", desc: "Custom themes, optimization, and integrations." },
            ].map((svc) => (
              <div key={svc.title} className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-5 hover:border-blue-500/40 transition-colors">
                <h4 className="text-lg font-semibold text-white">{svc.title}</h4>
                <p className="mt-2 text-sm text-gray-400">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
