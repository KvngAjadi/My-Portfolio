import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center">
  <div className="absolute inset-0 bg-[url('/Code.jpg')] bg-cover bg-center"></div>
  <div className="absolute inset-0 bg-black/40"></div>
  <div data-aos="fade-right">
  <h1 className="relative text-white text-5xl font-bold z-10 font-space text-left right-80">
   <span className='font-normal text-blue-400 leading-20'>AJADI</span> <br />SODIQ OLASUNKANMI
  </h1>
  </div>
  <div className='flex gap-5 pt-5'>
  <Button name="Resume" style={"relative bg-blue-950 text-white py-3 px-7 font-space rounded-md hover:bg-white hover:text-blue-950 right-107"}/>
  <Button name="Portfolio" style={"relative bg-blue-950 text-white py-3 px-7 font-space font-semibold rounded-md hover:bg-white hover:text-blue-950 right-105"}/>
    </div>
</div>

  )
}

export default Hero