import React from "react";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiPokemon } from "react-icons/si";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        <div className="flex items-center space-x-2">
          <SiPokemon className="text-4xl text-red-500" />
          <h1 className="text-3xl font-bold">
            Poke<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Zone</span>
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/ShivamNautiyal22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaGithub className="text-2xl" />
          </a>
          
          <a
            href="https://its-shivam-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-400 py-2 px-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaCode className="text-xl" />
            <span>Portfolio</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;