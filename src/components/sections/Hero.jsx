import { useState, useEffect } from "react";
import { ChevronDown, Star } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";

/* 👇 Typing roles */
const roles = [
  "React.js Developer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Stack Developer",
  "Next.js Developer",
  "UI/UX Enthusiast",
  "Full Stack Web Developer",
];

const Hero = () => {
  /* typing state */
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const current = roles[loopIndex % roles.length];
    const typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-black pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">

          <FadeIn delay={0}>
            <div className="flex items-center justify-center md:justify-start gap-2 bg-white/5 border border-white/10 backdrop-blur px-4 py-2 rounded-full w-fit mb-6 shadow-md mx-auto md:mx-0">
              <Star className="text-yellow-400" size={16} />
              <span className="text-xs sm:text-sm text-gray-300">
                {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-primary to-green-300 text-transparent bg-clip-text">
                {PERSONAL_INFO.name}
              </span>
              <br />
              <span className="text-gray-300 text-lg sm:text-xl md:text-3xl font-medium">
                {text}
                <span className="border-r-2 border-primary ml-1 animate-pulse"></span>
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-5 text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base md:text-lg leading-relaxed">
              I build modern, fast, and scalable web applications using React,
              Next.js, and cutting-edge technologies.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex justify-center md:justify-start gap-4 mt-8 flex-wrap">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-[0_0_20px_#8DFF69] transition"
              >
                Get in Touch
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {STATS.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-primary">
                    {item.value}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* RIGHT SIDE */}
        <FadeIn delay={200}>
          <div className="flex justify-center md:justify-end w-full">

            <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[400px] md:w-[380px] md:h-[460px] lg:w-[500px] lg:h-[600px]">

              {/* IMAGE */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden z-20">
                <img
                  src={PERSONAL_INFO.image}
                  alt="profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* ICONS */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3 px-4 py-2 rounded-xl z-30">
                {[SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-lg hover:scale-110 hover:shadow-[0_0_10px_#8DFF69] transition"
                    >
                      <Icon className="text-primary text-lg" />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* SCROLL DOWN */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={28} />
      </div>
    </section>
  );
};

export default Hero;