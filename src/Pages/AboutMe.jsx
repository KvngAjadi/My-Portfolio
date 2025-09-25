import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const AboutMe = () => {
  return (
    <div>
      <NavBar/>
      <div></div>
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
            <h1 className='text-2xl font-space font-bold text-purple-950'> Mission</h1>
            <p className='text-[17px] text-md font-normal font-space text-purple-950'>My mission is to craft beautiful responsive websites and applications that<br /> solve real problems, engage users, and perform seamlessly across all<br /> platforms -- powered by solid architecture and thoughtful engineering.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:pl-20 h-auto pb-10 bg-white text-center md:text-left'>
          <div>
            <h1 className='font-space font-bold text-3xl mt-30'>Message from <span className='font-space font-bold text-3xl text-purple-500'>The developer</span></h1>
          </div>
<div className='flex flex-col items-center md:items-start md:flex-row gap-20'>
          <div className='mt-10'>
            <p className='font-space transition-transform duration-50 hover:-translate-y-2'>I would like to take a moment to express my sincere <br /> gratitude for choosing to visit my portfolio. As the founder of <br /> this company, I am proud to say that we are committed to <br /> providing the best possible solutions for your business <br /> needs.</p>
            <p className='font-space mt-5 transition-transform duration-300 hover:-translate-y-2'>We understand the challenges that come with managing <br /> an enterprise in the digital age, and we are dedicated to <br /> delivering innovative and reliable IT services to help you <br /> navigate these challenges with ease.</p>
            <p className='font-space mt-5 transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-3'>Our team of experts is constantly working to improve our <br /> services and stay up-to-date with the latest <br /> technological advancements. We strive to provide <br /> personalized solutions that cater to your specific <br /> requirements, ensuring that your business operations run <br /> smoothly and efficiently.</p>
            <h1 className='font-bold font-space text-2xl mt-5 text-purple-950'>AJADI, Sodiq Olasunkanmi</h1>
            <p className='font-space text-[20px]'>FrontEnd Developer</p>
          </div>
          <div className=''>
            <img src="/Maolid.jpg" alt="" className='w-120 h-150 rounded-lg' />
          </div>
          </div>
        </div>
        <div className='bg-purple-950 w-full px-5 pb-20 pt-5'>
        <Footer/>
        </div>
    </div>
  )
}

export default AboutMe