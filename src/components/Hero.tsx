import ProfilePic from "../images/profilepictures.png";

// components/Hero.tsx
interface HeroProps {
  isLoaded: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoaded }) => {
  return (
    <section
      id="home"
      className="py-20 min-h-[80vh] grid md:grid-cols-2 gap-16 items-center"
    >
      <div>
        <h1
          className={`text-4xl md:text-5xl font-extrabold mb-4 leading-tight transition-all duration-700 
              ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
        >
          Hello, I'm <span className="text-blue-500 block">Rios Zoe Bunao</span>
        </h1>
        <p
          className={`text-lg text-gray-400 mb-8 max-w-lg transition-all duration-700 delay-200
              ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
        >
          An application developer with a strong passion for creating dynamic
          websites, APIs, and applications across various platforms. I enjoy
          turning complex problems into elegant solutions.
        </p>

        <div
          className={`transition-all duration-700 delay-300
              ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 white-important font-semibold rounded-md 
                hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-800/30"
          >
            View My Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <a
            href="https://web.facebook.com/profile.php?id=61575548308177"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 ml-4 border border-gray-300 text-white font-semibold rounded-md 
                hover:bg-white hover:text-slate-900 hover:-translate-y-1 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        <div
          className={`flex flex-wrap gap-3 mt-8 transition-all duration-700 delay-500
              ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
        >
          {[
            "Web Development",
            "API Development",
            "FullStack Developer",
            "WordPress Developer",
            "Content Writer",
            "Movie Enthusiast",
            "Gamer",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-slate-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`relative rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 delay-200
            ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
      >
        <img
          src={ProfilePic}
          alt="Rios Zoe Bunao"
          className="w-full rounded-xl transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
