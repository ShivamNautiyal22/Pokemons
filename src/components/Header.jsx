import React from "react";
import { FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full  bg-gray-800 text-white ">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-3 px-3 sm:px-5">
        <h1 className="text-3xl">
          Poke <span className="text-emerald-400">Zone</span>
        </h1>

        <a href="https://its-shivam-portfolio.netlify.app/" target="_blank">
          <div className="flex items-center gap-1 cursor-pointer text-[22px] bg-emerald-400 py-1 px-4 rounded-full">
            <FaCode />
            <h1 className="text-[20px]">Shivam</h1>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
