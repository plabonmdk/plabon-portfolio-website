import React from "react";
import FadeIn from "../animations/FadeIn";
import testimonials from "../../data/testimoniais";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-green-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex px-4 py-2 rounded-full border border-green-400/30 bg-green-500/10 text-green-400 text-sm font-medium">
              Testimonials
            </span>

            <h2 className="text-5xl font-bold text-white mt-4">
              What Clients <span className="text-green-400">Say</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Trusted by clients worldwide for creating modern, responsive,
              and high-quality web experiences.
            </p>
          </div>
        </FadeIn>

        {/* Slider Wrapper */}
        <div className="relative">
          
          {/* Left Button */}
          <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 border border-green-500/30 text-green-400 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300">
            <ChevronLeft size={22} />
          </button>

          {/* Right Button */}
          <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-900 border border-green-500/30 text-green-400 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300">
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group relative overflow-hidden rounded-3xl border border-green-500/20 bg-slate-900/60 backdrop-blur-lg p-7 h-full transition-all duration-500 hover:-translate-y-3 hover:border-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.35)]">

                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/5"></div>

                  <div className="relative z-10">

                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-green-400 mb-4 opacity-80" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-gray-300 text-sm leading-relaxed min-h-[100px]">
                      "{item.quote}"
                    </p>

                    {/* User */}
                    <div className="flex items-center gap-4 mt-8">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-green-400 shadow-lg shadow-green-500/20"
                      />

                      <div>
                        <h3 className="text-white font-semibold">
                          {item.name}
                        </h3>

                        <p className="text-green-400 text-sm">
                          {item.role}
                        </p>

                        <p className="text-gray-500 text-xs">
                          {item.company}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;