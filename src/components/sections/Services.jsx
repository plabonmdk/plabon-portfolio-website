import React from "react";
import  services  from "../../data/servicas";
import { Wrench } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 mb-4">
              <Wrench size={18} />
              <span>Services</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What I Can Do For You
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              I build modern, responsive and high-performance web applications
              using the latest technologies to help businesses grow online.
            </p>
          </div>
        </FadeIn>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(services || []).map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <div className="group bg-green-500/10 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-green-500/50 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10">
                <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6">
                  <span className="text-green-400 text-sm font-medium">
                    Learn More →
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;