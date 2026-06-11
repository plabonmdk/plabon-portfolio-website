import React from "react";
import { skills } from "../../data/skills";
import { motion } from "framer-motion";

const SkillCard = ({ title, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl p-6 shadow-lg border border-green-500/10 overflow-hidden"
    >
      {/* 🔥 Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-green-400/10 blur-[120px] rounded-full pointer-events-none" />

      <h3 className="text-lg font-semibold mb-6 text-white border-l-4 border-green-400 pl-3 relative z-10">
        {title}
      </h3>

      <div className="space-y-5 relative z-10">
        {items.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Top Row */}
              <div id="skills" className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Icon className="text-green-400 text-lg" />
                  <span className="text-sm">{skill.name}</span>
                </div>

                <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full">
                  {skill.level}
                </span>
              </div>

              {/* Experience */}
              <p className="text-xs text-gray-400 mb-2">
                {skill.experience}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.progress }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const frontend = skills.filter(s => s.category === "frontend");
  const backend = skills.filter(s => s.category === "backend");
  const tools = skills.filter(s => s.category === "tools");

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      
      {/* 🔥 Global Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-green-400/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-2"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-12"
        >
          A comprehensive overview of my technical skills
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard title="Frontend Development" items={frontend} />
          <SkillCard title="Backend & APIs" items={backend} />
          <SkillCard title="Tools & Others" items={tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;