import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <div className='mt-20 mb-10'>
        <form action="" className=''>
            <h1 className='text-4xl font-space font-bold text-purple-950 text-center'>Get in Touch</h1>
            <p className='font-space font-normal text-purple-950 text-center mt-5'>You'd love to express tell us how I would be able to help with your web development?</p>
            <div className='flex flex-col items-center'>
            <div className='flex gap-3 pt-7 items-center'>
                <div className='flex flex-col'>
                <label htmlFor="" className='text-[17px] font-normal font-space text-purple-950'>First Name</label>
              <input type="text" placeholder=' First Name' className='w-70 h-7 text-purple-950 bg-purple-100 p-5 rounded-md font-space pl-3' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-[17px] font-normal font-space text-purple-950'>Surname</label>
              <input type="text" placeholder='Surname' className='w-70 h-7 text-purple-950 bg-purple-100 p-5 rounded-md font-space pl-3' />
                </div>
              </div>
              <div className='flex flex-col mt-3'>
                <label htmlFor="" className='text-[17px] font-normal font-space text-purple-950'>Email</label>
              <input type="Email" placeholder='you@example.com' required className='w-143 h-7 text-purple-950 bg-purple-100 p-5 rounded-md font-space' />
              </div>
              <div className='flex flex-col items-start mt-3'>
                <label htmlFor="" className='text-[17px] font-normal font-space text-purple-950'>Phone number</label>
              <input type="number" placeholder='+123 - 456 7890 123' required className='w-143 h-7 text-purple-950 bg-purple-100 p-5 rounded-md font-space' />
              </div>
              <div className='flex flex-col mt-3'>
                <label htmlFor="" className='text-[17px] font-normal font-space text-purple-950'>Message</label>
                <textarea name="Message" id="feedback" placeholder='Enter your message' className='w-143 h-50 bg-purple-100 rounded-md font-space mt-1 pl-3'></textarea>
              </div>
              <div className='flex items-center mt-5'>
                <input id="subscribe" type='checkbox' className='h-4 w-4 text-purple-950 border-purple-500 rounded-lg focus:ring-purple-400' />
                <label htmlFor="subscribe" className='ml-2 text-sm text-purple-950'>Also sign up for our friendly mailing updates</label>
              </div>
              <Button name='Send Message' style={"bg-purple-950 text-purple-500 text-center w-143 mt-5 rounded-lg hover:bg-purple-500 hover:text-purple-950 p-3 font-semibold"}/>
            </div>
        </form>
    </div>
  )
}

export default Form