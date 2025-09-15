import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="bg-blue-950 flex flex-row justify-between items-center w-full px-6 py-5 shadow-md fixed">
            <div>
                <img src="/For_bg-removebg-preview.png" alt="" className='bg-white rounded-full w-10 h-10'/>
            </div>
  <div className="flex flex-row items-center gap-10 font-space font-semibold text-white transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110">
    <a href="#home">Home</a>
    <a href="#about">About Me</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </div>
</nav>
    </div>
  )
}

export default NavBar