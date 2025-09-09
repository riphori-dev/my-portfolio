import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navItems: { name: string; href: string }[] = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'glass backdrop-blur-md bg-slate-900/80 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">RC</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Riphoria Codes
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group text-gray-300 font-medium relative hover:text-white transition-all duration-300 
                      after:content-[''] after:absolute after:h-0.5 after:w-0 after:left-0 after:bottom-[-4px] 
                      after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all 
                      after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 backdrop-blur-sm border border-gray-600 hover:border-blue-400 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${
          mobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        <div 
          className="absolute inset-0 bg-slate-900/95 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        <div className="relative flex flex-col items-center justify-center h-full p-6">
          <nav className="text-center">
            <ul className="flex flex-col gap-8">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`block text-2xl font-medium transition-all duration-300 hover:scale-110 ${
                      mobileMenuOpen 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-white hover:to-white transition-all duration-300">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Footer */}
          <div className={`mt-12 text-center transition-all duration-500 delay-300 ${
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-gray-400 text-sm">Let's build something amazing together</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
