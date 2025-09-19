import React from 'react'
import Button from './Button'

const Projects = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col mt-10'>
            <h1 className='text-purple-950 font-space font-bold text-4xl text-center mt-10'>Projects</h1>
            <div className='flex flex-col items-center mt-4'>
                <div className='w-1 h-10 bg-purple-950'></div>
                <div className='w-2 h-2 rounded-full bg-purple-950 mt-1'></div>
            </div>
        </div>
        <div className='flex md:flex-row flex-col md:pl-10 gap-10 mt-10 items-center'>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-space font-bold text-purple pb-5'>Techty</h1>
            <div className='flex flex-row md:flex-row gap-5'>
                    <Button
                        name="HTML"
                        style={
                          "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-20 h-10 font-semibold"
                        }
                      />
                    <Button
                        name="CSS"
                        style={
                          "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-20 h-10 font-semibold"
                        }
                      />
                      <Button
                        name="Javascript"
                        style={
                          "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-2 items-center flex justify-center text-white rounded-md w-25 h-10 font-semibold"
                        }
                      />
                    <Button
                        name="React"
                        style={
                          "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-20 h-10 font-semibold"
                        }
                      />
                  </div>
                  <p className='font-space text-[17px] font-normal pt-5'>Used components of Javascript to implement basic data structures <br />
                  through the website of Techty. Also used a fetch some API to display <br />
                  the services including perfect pictures for its UI.</p>
                  <div className='flex flex-row md:flex-row gap-5 pt-5'>
                    <Button
                        name="View Github"
                        style={
                          "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-40 h-10 font-semibold"
                        }
                      />
                    <Button
                        name="View project"
                        style={
                          "bg-transparent hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-40 h-10 font-semibold"
                        }
                      />
                      
                  </div>
        </div>
                  <div>
                    <img src="/Techty.jpg" alt="" className='w-150 rounded-lg'/>
                  </div>
        </div>
        <div className='flex md:flex-row flex-col md:pl-10 gap-10 mt-25 items-center'>
            <div>
                    <img src="/TicTacToe.jpg" alt="" className='w-150 rounded-lg'/>
                  </div>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-space font-bold text-purple pb-5'>TicTacToe</h1>
            <div className='flex flex-row md:flex-row gap-5'>
                    <Button
                        name="HTML"
                        style={
                          "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-20 h-10 font-semibold"
                        }
                      />
                    <Button
                        name="CSS"
                        style={
                          "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-20 h-10 font-semibold"
                        }
                      />
                      <Button
                        name="Javascript"
                        style={
                          "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-2 items-center flex justify-center text-white rounded-md w-25 h-10 font-semibold"
                        }
                      />
                    <Button
                        name="React"
                        style={
                          "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-20 h-10 font-semibold"
                        }
                      />
                  </div>
                  <p className='font-space text-[17px] font-normal pt-5'>Used components of Javascript to implement basic data structures <br />
                  through the website of Techty. Also used a fetch some API to display <br />
                  the services including perfect pictures for its UI.</p>
                  <div className='flex flex-row md:flex-row gap-5 pt-5'>
                    <Button
                        name="View Github"
                        style={
                          "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-40 h-10 font-semibold"
                        }
                      />
                    <Button
                        name="View project"
                        style={
                          "bg-transparent hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-40 h-10 font-semibold"
                        }
                      />  
                  </div>      
        </div>
        </div>
        <div className='flex md:flex-row flex-col md:pl-10 gap-10 mt-25 items-center'>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-space font-bold text-purple pb-5'>Netflix Clone</h1>
            <div className='flex flex-row md:flex-row gap-5'>
                    <Button
                        name="HTML"
                        style={
                          "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-20 h-10 font-semibold"
                        }
                      />
                    <Button
                        name="CSS"
                        style={
                          "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-20 h-10 font-semibold"
                        }
                      />
                      <Button
                        name="Javascript"
                        style={
                          "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-2 items-center flex justify-center text-white rounded-md w-25 h-10 font-semibold"
                        }
                      />
                    <Button
                        name="React"
                        style={
                          "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-20 h-10 font-semibold"
                        }
                      />
                  </div>
                  <p className='font-space text-[17px] font-normal pt-5'>Used components of Javascript to implement basic data structures <br />
                  through the website of Techty. Also used a fetch some API to display <br />
                  the services including perfect pictures for its UI.</p>
                  <div className='flex flex-row md:flex-row gap-5 pt-5'>
                    <Button
                        name="View Github"
                        style={
                          "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-40 h-10 font-semibold"
                        }
                      />
                    <Button
                        name="View project"
                        style={
                          "bg-transparent hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-40 h-10 font-semibold"
                        }
                      />
                      
                  </div>
        </div>
                  <div>
                    <img src="/Netflix.jpg" alt="" className='w-150 rounded-lg'/>
                  </div>
        </div>
        <div className='flex md:flex-row flex-col md:pl-10 gap-10 mt-25 items-center'>
            <div>
                    <img src="/Inance.jpg" alt="" className='w-150 rounded-lg'/>
                  </div>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-space font-bold text-purple pb-5'>Inance</h1>
            <div className='flex flex-row md:flex-row gap-5'>
                    <Button
                        name="HTML"
                        style={
                          "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-20 h-10 font-semibold"
                        }
                      />
                    <Button
                        name="CSS"
                        style={
                          "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-20 h-10 font-semibold"
                        }
                      />
                      <Button
                        name="Javascript"
                        style={
                          "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-2 items-center flex justify-center text-white rounded-md w-25 h-10 font-semibold"
                        }
                      />
                    <Button
                        name="React"
                        style={
                          "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-20 h-10 font-semibold"
                        }
                      />
                  </div>
                  <p className='font-space text-[17px] font-normal pt-5'>Used components of Javascript to implement basic data structures <br />
                  through the website of Techty. Also used a fetch some API to display <br />
                  the services including perfect pictures for its UI.</p>
                  <div className='flex flex-row md:flex-row gap-5 pt-5'>
                    <Button
                        name="View Github"
                        style={
                          "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-40 h-10 font-semibold"
                        }
                      />
                    <Button
                        name="View project"
                        style={
                          "bg-transparent hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-40 h-10 font-semibold"
                        }
                      />  
                  </div>      
        </div>
        </div>
    </div>
  )
}

export default Projects