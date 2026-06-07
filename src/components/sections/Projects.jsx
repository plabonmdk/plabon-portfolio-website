import React from "react";
import { projects } from "../../data/projects";
import FadeIn from "../animations/FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-slate-950 via-green-950/20 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium">
              Featured Projects
            </span>

            <h2 className="text-5xl font-bold text-white mt-4">
              My <span className="text-green-400">Projects</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A collection of modern web applications built with React,
              Tailwind CSS, Node.js and MongoDB.
            </p>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(projects || []).map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <div className="group bg-green-500/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-green-500/50 hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]">
                
                {/* Project Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.titel}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.titel}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.discription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {(project.tacknologi || []).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-6">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-slate-800 hover:bg-slate-700 transition rounded-lg text-white"
                      >
                        GitHub
                      </a>
                    )}

                    {project.damoUrl && (
                      <a
                        href={project.damoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-green-500 hover:bg-green-600 transition rounded-lg text-white"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;