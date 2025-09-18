import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className="">
  <div className="flex flex-col md:flex-row mt-10 font-space justify-between md:items-start gap-30">
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl font-space text-white font-semibold mt-30 ">
        <span className="text-6xl text-purple-700 font-bold font-space">Ajadi</span>
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
</div>
  )
}

export default Hero