import React from "react";
import { motion } from "framer-motion";
import { Download, Code2, Sparkles } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

import { PERSONAL_INFO, ABOUT_STATS } from "../../utils/constants";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const About = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-black text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-green-400/10 blur-[120px] rounded-full"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        
        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-2">
            <Sparkles className="text-green-400" />
            About Me
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            {PERSONAL_INFO?.about ||
              "I am a passionate developer who loves building modern web applications."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Code2 className="text-green-400" />
              Who I Am
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {PERSONAL_INFO?.bio ||
                "I specialize in building full-stack applications using modern technologies."}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-xl transition"
            >
              <Download size={18} />
              Download CV
            </motion.button>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div variants={fadeUp}>
            <h3 className="text-2xl font-semibold mb-6">
              Skills & Tools
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {[
                { icon: <SiReact />, name: "React" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <SiTailwindcss />, name: "Tailwind" },
                { icon: <SiNodedotjs />, name: "Node.js" },
                { icon: <SiMongodb />, name: "MongoDB" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition"
                >
                  <div className="text-3xl text-green-400">
                    {skill.icon}
                  </div>
                  <p className="text-sm mt-2 text-gray-300">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {ABOUT_STATS?.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="bg-white/5 p-6 rounded-xl text-center hover:bg-white/10 transition"
            >
              <h4 className="text-2xl font-bold text-green-400">
                {stat.value}
              </h4>
              <p className="text-gray-400 mt-1 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;