import ChMS from "../images/Church Management System.png";
import BinakeLandingPage from "../images/binake-landing-page.jpg";

// components/Projects.tsx
interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
  image: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300 shadow-xl">
      <div className="h-48 overflow-hidden">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </a>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-500/10 text-blue-400 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Church Management System",
      description:
        "A responsive web application built with modern technologies that provides users with a seamless experience for managing church activities, member information, events, donations, and communications.",
      image: ChMS,
      tags: [".NET Core MVC", "Bootstrap", "JavaScript"],
    },
    {
      id: 2,
      title: "Binake ni Maria",
      description:
        "A static web page that showcases my wife's business, featuring a clean and modern design with a focus on user experience.",
      image: BinakeLandingPage,
      link: "https://binake-ni-maria.vercel.app/",
      tags: ["ReactJS", "TailwindCSS"],
    },
    {
      id: 3,
      title: "Coming soon",
      description:
        "A web application that is currently in development, showcasing my skills in building dynamic and interactive applications.",
      image: "/api/placeholder/400/200",
      tags: ["Pending"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-16">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
