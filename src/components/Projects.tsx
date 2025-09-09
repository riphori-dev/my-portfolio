import BinakeLandingPage from "../images/binake-landing-page.jpg";
import TywynhLandingPage from "../images/TYWYNH.png";
import TywynhApi from "../images/TYWYNH-API.png";

// components/Projects.tsx
interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
  image: string;
  tags: string[];
  status?: "completed" | "in-progress" | "coming-soon";
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case "completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "in-progress": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "coming-soon": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    }
  };

  return (
    <div className={`group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden 
      hover:-translate-y-3 transition-all duration-500 shadow-2xl hover:shadow-blue-500/20
      ${project.featured ? 'ring-2 ring-blue-500/50' : ''}
      border border-slate-700 hover:border-blue-500/50`}>
      
      {/* Status Badge */}
      {project.status && (
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
            {project.status === "completed" ? "✓ Live" : 
             project.status === "in-progress" ? "⚡ In Progress" : "🚀 Coming Soon"}
          </span>
        </div>
      )}

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            ⭐ Featured
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Hover Action */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="btn-contrast bg-white/20 backdrop-blur-sm rounded-full p-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </a>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                text-blue-400 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300
                hover:scale-105 cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        {project.link && (
          <div className="pt-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contrast inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 
                text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 
                transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              View Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "TYWYNH",
      description:
        "Tywynh is a safe space to let go of emotions and thoughts you wish you never heard. Share freely, release the weight, and find relief without judgment.",
      image: TywynhLandingPage,
      link: "https://tywynh.vercel.app/",
      tags: ["ReactJS", "TypeScript", "TailwindCSS", "Vercel"],
      status: "completed",
      featured: true
    },
    {
      id: 2,
      title: "Binake ni Maria",
      description:
        "A modern, responsive website showcasing a local bakery business. Built with React and Tailwind CSS, it features a clean design, mobile-first approach, and optimized user experience to help drive business growth.",
      image: BinakeLandingPage,
      link: "https://binake-ni-maria.vercel.app/",
      tags: ["ReactJS", "TailwindCSS", "Vercel", "Responsive Design"],
      status: "completed",
      featured: true
    },
    {
      id: 3,
      title: "TYWYNH API",
      description:
        "Backend API powering TYWYNH, designed for reliability and clarity with a clean, maintainable architecture.",
      image: TywynhApi,
      link: "https://github.com/riphori-dev/Tywynh.API",
      tags: ["ASP.NET Core", "REST API", "Render"],
      status: "in-progress"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            modern web technologies, and user experience design.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/riphori-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contrast inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 
              text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 
              transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25
              border border-gray-600 hover:border-transparent"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
