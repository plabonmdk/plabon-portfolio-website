import React, { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";

import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import { useScrollSpy, scrollToSection } from "../../hooks/useScrollSpy";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">

        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <Code className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white font-bold text-lg group-hover:text-primary transition"
          >
            {PERSONAL_INFO.name}
          </button>
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="relative text-base font-medium text-white transition duration-300 group"
            >
              {link.label}

              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>

              {/* Active underline */}
              {activeSection === link.id && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary"></span>
              )}
            </button>
          ))}
        </div>

        {/* Right Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-primary text-black px-5 py-2 rounded-full font-semibold 
            transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_#8DFF69]"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-xl flex flex-col items-center gap-5 px-6 transition-all duration-500 ${
          isMenuOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        } overflow-hidden`}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className={`text-base font-medium transition ${
              activeSection === link.id
                ? "text-primary"
                : "text-white hover:text-primary"
            }`}
          >
            {link.label}
          </button>
        ))}

        <button
          onClick={() => handleNavClick("contact")}
          className="bg-primary text-black px-5 py-2 rounded-full font-semibold 
          transition hover:scale-105"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;