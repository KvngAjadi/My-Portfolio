import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col items-center mt-20 gap-5'>
        <div className="relative flex items-center justify-center">
  {/* Background ring */}
  <div className="absolute w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-purple-500 blur-2xl opacity-60"></div>

  {/* Inner circle (the ring effect) */}
  <div className="absolute w-30 h-30 rounded-full border-8 border-purple-500 opacity-80"></div>

  {/* Your Image / Content */}
  <img
    src="/Oga.png"
    alt="Profile"
    className="relative z-10 w-20 h-20 rounded-full object-cover"
  />
</div>
        <h1 className='text-2xl font-space font-bold text-purple-500'>Ajadi Sodiq Olasunkanmi</h1>
      </div>
    </div>
  )
}

export default Footer