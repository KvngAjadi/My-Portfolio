import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-2">
  <div className="flex flex-col md:flex-row mt-10 font-space justify-between md:items-start gap-30">
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl font-space text-white font-semibold mt-30 ">
        <span className="text-6xl text-purple-700 font-bold font-space text-center md:text-left">Ajadi</span>
        <br />
        Sodiq Olasunkanmi
      </h1>
      <div className='flex flex-row md:flex-row gap-5'>
        <Button
            name="Resume"
            style={
              "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-40 h-10 font-semibold"
            }
          />
        <Button
            name="Portfolio"
            style={
              "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-40 h-10 font-semibold"
            }
          />
      </div>
    </div>
    <div>
    </div>
  </div>
  <div className="relative flex items-center justify-center h-screen transition delay-50 duration-1000 ease-in-out hover:translate-y-1 hover:scale-110">
  {/* Background ring */}
  <div className="absolute w-50 h-50 rounded-full bg-gradient-to-r from-purple-700 to-red-500 blur-2xl opacity-60"></div>

  {/* Inner circle (the ring effect) */}
  <div className="absolute md:w-100 w-70 h-100 rounded-full border-8 border-purple-700 opacity-80"></div>

  {/* Your Image / Content */}
  <img
    src="/Oga.png"
    alt="Profile"
    className="relative z-10 md:w-90 w-60 h-90 rounded-full object-cover"
  />
</div>
</div>
  )
}

export default Hero