import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-20 gap-5">
        <div className="relative flex items-center justify-center">
          {/* Background ring */}
          <div className="absolute w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-purple-500 blur-2xl opacity-60"></div>

          {/* Inner circle (the ring effect) */}
          <div className="absolute w-30 h-30 rounded-full border-8 border-purple-500 opacity-80"></div>

          {/* Your Image / Content */}
          <img
            src="/Oga.png"
            alt="Profile"
            className="relative z-10 w-20 h-20 rounded-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-space font-bold text-purple-500 mt-2">
          Ajadi Sodiq Olasunkanmi
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-20 items-center mt-10 p-10">
        <div>
          <h1 className="text-3xl font-space font-bold text-purple-500">
            Contact me
          </h1>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col text-purple-500 gap-3">
            <p>+234 903 543 6039</p>
            <p className="underline">ajadiachiever@gmail.com</p>
          </div>
          <div className="flex flex-col text-purple-500 gap-3">
            <p>Lagos/Nigeria</p>
            <div className="flex text-purple-500">
              <img src="/twitter-x-line.png" alt="" />
              <img src="/git.png" alt="" className="w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col text-purple-500 gap-3">
            <p className="underline">terms and conditions</p>
            <p className="underline">privacy policy</p>
          </div>
        </div>
      </div>
      <hr className="text-purple-500 mb-10" />
      <div className="flex flex-col md:flex-row text-purple-500 font-space gap-20 items-center text-center">
        <p>&copy; 2025 Ajadi Sodiq. All rights reserved.</p>
        <p>
          <NavLink
            to="/aboutMe"
            className="transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 underline "
          >
            About Me
          </NavLink>
        </p>
        <p>
          <NavLink
            to="/resume"
            className="transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 underline"
          >
            Resume
          </NavLink>
        </p>
        <p>
          <NavLink
            to="/portfolio"
            className="transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 underline"
          >
            Portfolio
          </NavLink>
        </p>
        <form className="relative mt-5 w-full max-w-sm">
            <input
              type="text"
              placeholder="Email address"
              className="font-space font-normal w-full bg-[#d3e1ee] text-purple-950 h-13 rounded-md p-4 border border-gray-400"
            />
          
            <button
              type="submit"
              className="bg-purple-950 absolute top-[5px] right-[5px] py-[10px] px-[15px] rounded-xl text-white hover:bg-purple-500"
            >
              Join
            </button>
          </form>
      </div>
    </div>
  );
};

export default Footer;
