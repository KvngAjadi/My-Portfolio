import { AlignRight } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-purple-950 flex flex-row justify-between items-center w-full px-6 py-5 shadow-lg fixed z-50">
        {/* Logo */}
        <div>
          <img
            src="/For_bg-removebg-preview.png"
            alt="logo"
            className="bg-white rounded-full w-10 h-10"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row items-center gap-10 font-space font-semibold text-white">
          <NavLink
            to="/"
            className="transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110"
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutMe"
            className="transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110"
          >
            About Me
          </NavLink>
          <NavLink
            to="/resume"
            className="transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110"
          >
            Resume
          </NavLink>
          <NavLink
            to="/portfolio"
            className="transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <AlignRight size={28} /> : <AlignRight size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-purple-950 flex flex-col items-center gap-6 py-6 font-space font-semibold text-white shadow-lg fixed top-16 left-0 w-full z-40 transition-all duration-300">
            <NavLink
              to="/home"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400"
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutMe"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400"
            >
              About Me
            </NavLink>
            <NavLink
              to="/resume"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400"
            >
              Resume
            </NavLink>
            <NavLink
              to="/portfolio"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400"
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  )
}

export default NavBar