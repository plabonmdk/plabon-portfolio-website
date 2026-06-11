import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-green-500/20 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left side */}
          <div className="text-center md:text-left">
            <h2 className="text-white text-xl font-bold">
              PLABON <span className="text-green-400">DEV</span>
            </h2>
            <p className="text-sm mt-2">
              Building modern and responsive web applications
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl">
            
            <a href="#" className="hover:text-green-400 transition">
              <FaGithub />
            </a>

            <a href="#" className="hover:text-green-400 transition">
              <FaLinkedin />
            </a>

            <a href="#" className="hover:text-green-400 transition">
              <FaTwitter />
            </a>

            <a href="mailto:plabonmdk@gmail.com" className="hover:text-green-400 transition">
              <MdEmail />
            </a>

          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center text-xs mt-8 text-gray-500">
          © {new Date().getFullYear()} PLABON. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;