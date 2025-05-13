import React from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  // Skills categorized by type
  const skillsCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 100 },
        { name: "CSS", level: 100 },
        { name: "JavaScript", level: 90 },
        { name: "Bootstrap", level: 90 },
        { name: "JQuery", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "ReactJS", level: 80 },
        { name: "TypeScript", level: 80 },
        { name: "Blazor WASM", level: 75 },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "ASP.NET MVC (Full Framework)", level: 95 },
        { name: "ASP.NET Core / .NET Core", level: 90 },
        { name: ".NET Framework", level: 90 },
        { name: "Entity Framework Core", level: 85 },
        { name: "SignalR", level: 85 },
        { name: "Minimal APIs (.NET Core)", level: 85 },
        { name: "ASP.NET Web API", level: 80 },
      ],
    },
    {
      title: "Architecture & Other Tools",
      skills: [
        { name: "Clean Code Architecture", level: 100 },
        { name: "Design Patterns", level: 100 },
        { name: "API Development", level: 90 },
        { name: "Unit Testing", level: 85 },
        { name: "Dependency Injection", level: 80 },
        { name: "SOLID Principles", level: 80 },
        { name: "MSSQL", level: 80 },
        { name: "Playwright.dev", level: 80 },
        { name: "CI/CD", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#11172B]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-2">Skills</h2>
        <div className="w-16 h-1 bg-[#4169E1] mb-10"></div>

        <p className="text-gray-300 mb-12 max-w-2xl">
          In my 3+ years as a full-stack developer, I’ve built up a wide range
          of skills that enable me to deliver clean, scalable, and maintainable
          solutions with a focus on long-term reliability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1a223d] rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
            >
              <h3 className="text-xl font-semibold text-[#4169E1] mb-6">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#0c111f] rounded-full h-2">
                      <div
                        className="bg-[#4169E1] h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white mb-6">
            Additional Skills
          </h3>
          <div className="space-y-4">
            <div className="bg-[#1a223d] rounded-lg p-5 transition-all duration-300 hover:shadow-lg">
              <p className="text-white">
                <span className="font-semibold text-[#4169E1]">WordPress</span>{" "}
                – Gained experience customizing themes using Elementor and
                managing plugins for small business websites during my
                internship. Also responsible for maintaining and updating
                several WordPress sites.
              </p>
            </div>
            <div className="bg-[#1a223d] rounded-lg p-5 transition-all duration-300 hover:shadow-lg">
              <p className="text-white">
                <span className="font-semibold text-[#4169E1]">
                  SEO Management
                </span>{" "}
                – On-page optimization and keyword tracking using Yoast and
                Google Search Console.
              </p>
            </div>
            <div className="bg-[#1a223d] rounded-lg p-5 transition-all duration-300 hover:shadow-lg">
              <p className="text-white">
                <span className="font-semibold text-[#4169E1]">
                  CI/CD Pipelines
                </span>{" "}
                – Setting up automated testing and deployment workflows using
                Azure DevOps and GitHub Actions.
              </p>
            </div>
            <div className="bg-[#1a223d] rounded-lg p-5 transition-all duration-300 hover:shadow-lg">
              <p className="text-white">
                <span className="font-semibold text-[#4169E1]">
                  Content Writing
                </span>{" "}
                – I used to write prose and poetry as a personal outlet for
                self-expression and reflection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
