import React from 'react'
import NavBar from '../Components/NavBar'

const AboutMe = () => {
  return (
    <div>
      <NavBar/>
        <div className='flex flex-col md:flex-row gap-20 pt-20 pl-1 md:pl-20 bg-[#F0F8FF] h-auto pb-20 '>
          <div className='mt-10'>
          <img src="/Hero-pic.jpg" alt="" className='w-120 h-120 rounded-lg'/>
          </div>
          <div className='flex flex-col gap-10 mt-10 text-center md:text-left '>
            <div className='transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110'>
            <h1 className='text-3xl font-space font-bold text-purple-950'><span className='font-space font-bold text-purple-950 text-3xl'>About</span> Me</h1>
            <p className="text-[17px] text-md font-normal font-space text-purple-950">
          I started my software journey with a craving for creativity, <br />
          I want to contribute to making the technological advancement <br />
          seamless. I learn to love the process of creating something from the crash.<br />
          Since then, I have been committed to being a FrontEnd Developer.
        </p>
        </div>
            <div className='transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110'>
            <h1 className='text-2xl font-space font-bold'> Vision</h1>
            <p className='font-space mt-5 text-[17px]'>We're constantly pushing the boundaries of what's <br /> possible and seeking new ways to improve our services <br /> and help our clients achieve their goals.</p>
            </div>
            <div className='transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110'>
            <h1 className='text-2xl font-space font-bold'> Mission</h1>
            <p className='font-space mt-5 text-[17pxpx]'>We're constantly pushing the boundaries of what's <br /> possible and seeking new ways to improve our services <br /> and help our clients achieve their goals.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutMe