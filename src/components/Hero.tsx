import ProfilePic from "../images/profilepictures.png";

// components/Hero.tsx
interface HeroProps {
  isLoaded: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoaded }) => {
  return (
    <section
      id="home"
      className="relative py-20 min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-white">Hello, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Rios Zoe Bunao
                </span>
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                An <span className="text-blue-400 font-semibold">application developer</span> with a strong passion for creating 
                <span className="text-purple-400 font-semibold"> dynamic websites</span>, 
                <span className="text-cyan-400 font-semibold"> APIs</span>, and applications across various platforms. 
                I enjoy turning complex problems into elegant solutions.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#projects"
                className="btn-contrast group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl 
                    hover:from-blue-700 hover:to-purple-700 hover:-translate-y-1 transition-all duration-300 shadow-2xl shadow-blue-500/25
                    hover:shadow-blue-500/40"
              >
                <span>View My Work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
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
                className="btn-contrast group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-600 text-white font-bold rounded-xl 
                    hover:border-blue-400 hover:bg-blue-400/10 hover:-translate-y-1 transition-all duration-300
                    backdrop-blur-sm"
              >
                <span>Get In Touch</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-sm text-gray-400 mb-4 font-medium">Technologies I work with:</p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Web Development",
                  "API Development", 
                  "FullStack Developer",
                  "WordPress Developer",
                  "Content Writer",
                  "Movie Enthusiast",
                  "Gamer",
                ].map((skill, index) => (
                  <span
                    key={skill}
                    className="group bg-gradient-to-r from-slate-800 to-slate-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium
                        hover:from-blue-600 hover:to-purple-600 hover:text-white hover:scale-105 transition-all duration-300 cursor-default
                        border border-gray-600 hover:border-transparent"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse delay-1000"></div>
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={ProfilePic}
                    alt="Riphoria Codes"
                    className="w-full h-auto rounded-2xl transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
