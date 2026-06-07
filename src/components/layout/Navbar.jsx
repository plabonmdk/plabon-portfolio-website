import React, { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";

import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import { useScrollSpy, scrollToSection } from "../../hooks/useScrollSpy";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = NAV_LINKS.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        isScrolled ? "bg-black/50 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <Code className="w-6 h-6 text-green-400 group-hover:rotate-12 transition" />

          <button
            onClick={() => scrollToSection("home")}
            className="text-white font-bold text-lg hover:text-green-400 transition"
          >
            {PERSONAL_INFO.name}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="relative text-white font-medium group"
            >
              {link.label}

              {/* hover line */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full"></span>

              {/* active line */}
              {activeSection === link.id && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-400"></span>
              )}
            </button>
          ))}
        </div>

        {/* Hire Me */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-green-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-xl flex flex-col items-center gap-5 transition-all duration-500 overflow-hidden ${
          isMenuOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className={`text-base font-medium ${
              activeSection === link.id ? "text-green-400" : "text-white"
            }`}
          >
            {link.label}
          </button>
        ))}

        <button
          onClick={() => handleNavClick("contact")}
          className="bg-green-400 text-black px-5 py-2 rounded-full font-semibold"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;