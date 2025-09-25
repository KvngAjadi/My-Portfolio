import React from 'react'
import NavBar from '../Components/NavBar'
import Button from '../Components/Button'
import { Clock4, Mail, MapPin, Phone } from 'lucide-react'
import Footer from '../Components/Footer'

const Portfolio = () => {
  return (
    <div>
        <NavBar/>
        <div>
            <div className='mb-80 h-auto pt-20'>
          <div className='font-space text-center pt-20 mb-20'>
            <h1 className='font-bold font-space text-5xl'>Contact Us</h1>
            <p className='text-[20px] text-[#6F7681]'>We constantly pushing the boundaries of what's <br />possible and seeking new ways to improve our <br />services.</p>
          </div>
          <div className=''>
          <div className='md:relative flex flex-col gap-10 pt-7 md:pl-20 pl-2'>
            <div className='font-space'>
              <h1 className='font-space font-semibold text-2xl'>We're happy to discuss your project <br />and answer any question</h1>
            </div>
            <div>
            <div className='flex md:gap-40 gap-10 pt-20'>
              <div className='flex flex-col'>
            <div className='flex flex-col'>
            <div className='flex'>
              <Phone className='h-7 w-7 text-purple-500'/>
              <p className='font-space font-semibold text-[20px] pl-2'>Phone Number</p>
            </div>
            <div>
              <p className='font-space text-[#6F7681]'>+234 903 543 6039</p>
            </div>
            </div>
            <div className='flex flex-col pt-7'>
            <div className='flex'>
                <Clock4 className='w-7 h-7 text-purple-500'/>
              <p className='font-space font-semibold text-[20px] pl-2'>Working Hours</p>
            </div>
            <div>
              <p className='font-space text-[#6F7681]'>Mon - Friday,</p>
              <p className='font-space text-[#6F7681]'>9a.m - 8 p.m</p>
            </div>
            </div>
              </div>
            <div className='flex flex-col'>
            <div className='flex flex-col'>
            <div className='flex'>
              <Mail className='w-7 h-7 text-purple-500'/>
              <p className='font-space font-semibold text-[20px] pl-2'>Mail Address</p>
            </div>
            <div>
              <p className='font-space text-[#6F7681]'>ajadiachiever@gmail.com</p>
            </div>
            </div>
            <div className='flex flex-col pt-7'>
            <div className='flex'>
              <MapPin className='w-7 h-7 text-purple-500'/>
              <p className='font-space font-semibold text-[20px] pl-2'>Office Address</p>
            </div>
            <div>
              <p className='font-space text-[#6F7681]'>Abule Egba, Lagos.</p>
            </div>
            </div>
            </div>
          </div>
          </div>
          <div>
            <form action="" className='md:absolute left-200 top-10 bg-purple-950 rounded-lg pb-5 transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110'>
              <h1 className='text-4xl font-space font-semibold pl-3 pt-3 text-purple-500'>Send Us Message</h1>
              <p className='font-space text-[15px] pt-3 pl-3 text-purple-500'>Fell free to fill up the form and our team will get back to you <br />within 24 hours.</p>
              <div className='flex flex-col gap-3'>
              <div className='flex gap-3 pt-7 pl-3'>
              <input type="text" placeholder='Name' className='w-full h-7 bg-[#F1F1F1] p-5 rounded-md font-space pl-3' />
              <input type="text" placeholder='Email' className='w-full h-7 bg-[#F1F1F1] p-5 rounded-md font-space mr-3' />
              </div>
              <div className='bg-[#F1F1F1] pl-3 rounded-lg ml-3 mr-3'>
              <textarea name="text" id="Message" className='font-space p-3 w-full border-none h-60'></textarea>
              </div>
              <div className='pl-3 pr-3'>
                          <Button name='Send Us Your Feedback' style={"bg-purple-500 text-white text-center rounded-lg hover:bg-purple-700 p-3 font-semibold"}/>
              </div>
              </div>
            </form>
          </div>
          </div>
          </div>
        </div>
        <div className="bg-purple-950 w-full px-5 pb-20 pt-5">
        <Footer />
      </div>
        </div>
    </div>
  )
}

export default Portfolio