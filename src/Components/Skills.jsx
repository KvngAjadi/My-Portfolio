import React from 'react'

const Skills = () => {
  return (
    <div className=''>
        <div className='flex flex-col items-center'>
            <div className='text-center mt-10'>
                <h1 className='text-6xl font-space font-bold text-purple-950'>My Skills</h1>
            </div>
            <div className='flex flex-row mt-10'>
            <div>
            <img src="/origi.png" alt="" className='w-50 h-50' />
                        <h1 className='text-bold text-2xl text-purple-950 text-center font-bold'>HTML</h1>
            </div>
            <div>
            <img src="/CSS.jpg" alt="" className='w-50 h-50' />
                        <h1 className='text-bold text-2xl text-purple-950 text-center font-bold'>CSS</h1>
            </div>
            <div className='flex flex-col'>
            <img src="/Javascript.png" alt="" className='w-50 h-40 mt-5' />
            <h1 className='text-bold text-2xl text-purple-950 text-center font-bold mt-5'>JavaScript</h1>
            </div>
            </div>  
        </div>
        <div className='flex flex-col items-center mt-10'>
        <div className='flex items-center'>
            <div>
                <img src="/ReactO.png" alt="" className='w-60 h-50 mt-6' />
                            <h1 className='text-bold text-2xl text-purple-950 text-center font-bold mt-5'>REACT</h1>
            </div>
            <div>
                <img src="/TypescriptO.png" alt="" className='rounded-md w-70 h-50 mt-7' />
            <h1 className='text-bold text-2xl text-purple-950 text-center font-bold mt-5'>TypeScript</h1>
            </div>
            <div>
                <img src="/git.png" alt="" className='w-50 h-50 mt-7'/>
                            <h1 className='text-bold text-2xl text-purple-950 text-center font-bold mt-5'>Github</h1>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Skills