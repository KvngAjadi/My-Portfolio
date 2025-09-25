import React from 'react'

const About = () => {
  return (
    <div className="flex gap-10 mt-2 pb-4 md:pl-20">
      <div>
        <img
          src="/Hero-pic.jpg"
          alt="My photo"
          className="w-140 hidden md:block h-120 rounded-lg mt-10 border-3 border-purple-950 bg-cover"
        />
      </div>
      <div className="flex flex-col gap-7 mt-40">
        <h1 className="text-purple-950 font-space font-bold md:text-5xl text-3xl text-center mt-5">
          ABOUT ME
        </h1>
          <h1 className="font-space text-purple-700 font-bold md:text-5xl text-center">Ajadi Sodiq Olasunkanmi.</h1>
        <p className="text-[20px] text-md font-normal font-space text-purple-950">
          I started my software journey with a craving for creativity, <br />
          I want to contribute to making the technological advancement <br />
          seamless. I learn to love the process of creating something from the crash.<br />
          Since then, I have been committed to being a FrontEnd Developer.
        </p>
        <div className="flex gap-10">
          <div>
            <h1 className="text-6xl font-space text-purple-700 font-bold">99%</h1>
            <p className="font-space mt-3 text-[20px] text-purple-950">
              Swift Deliver
            </p>
            <img src="/Frame 15.png" alt="star rating" className="w-30 mt-3" />
          </div>
          <div>
            <h1 className="text-6xl font-space text-purple-700 font-bold">4X</h1>
            <p className="font-space mt-3 text-[20px] text-purple-950">
              New Visitors
            </p>
            <img src="/Frame 15.png" alt="star rating" className="w-30 mt-3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About