import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Button from "../Components/Button";

const Resume = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-30">
        <div className="text-center">
          <h1 className="text-6xl font-space font-bold text-purple-950">
            AJADI, Sodiq Olasunkanmi
          </h1>
        </div>
        <div className="">
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center pt-5">
            <p className="text-[17px] font-space underline">
              <span className="text-[17px] text-purple-950 font-bold no-underline">
                Email:
              </span>{" "}
              ajadiachiever@gmail.com
            </p>
            <p className="text-[17px] font-space">
              <span className="text-[17px] text-purple-950 font-bold">
                WhatsApp:
              </span>{" "}
              081 401 5295
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center pt-1">
            <p className="text-[17px] font-space">
              <span className="text-[17px] text-purple-950 font-bold">
                GitHub:
              </span>{" "}
              github.com/KvngAjadi
            </p>
            <p className="text-[17px] font-space">
              <span className="text-[17px] text-purple-950 font-bold">
                Twitter:
              </span>{" "}
              Achiever_Nimi
            </p>
            <p className="text-[17px] font-space">
              <span className="text-[17px] text-purple-950 font-bold">
                LinkedIn:
              </span>{" "}
              Achiever Sodiq Olasunkanmi
            </p>
          </div>
        </div>
      </div>
      <div className="text-center pt-10">
        <h1 className="text-3xl font-space font-bold text-purple-950">
          Profile Summary
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center pt-5">
        <p className="text-[20px] font-space ">
          Frontend Developer skilled in creating responsive, user-friendly web
          applications using React,
        </p>
        <p className="text-[20px] font-space ">
          TailwindCSS, JavaScript, HTML, and CSS. Passionate about
          problem-solving and delivering
        </p>
        <p className="text-[20px] font-space ">
          clean, functional designs that enhance user experience.
        </p>
      </div>
      <div className="text-center pt-10">
        <h1 className="text-3xl font-space font-bold text-purple-950">
          Technical Skills
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center pt-5">
        <p className="text-[20px] font-space ">
          <span className="text-2xl text-purple-950 font-bold">Frontend:</span>{" "}
          HTML, CSS, JavaScript, React, TailwindCSS
        </p>
        <p className="text-[20px] font-space ">
          {" "}
          <span className="text-2xl text-purple-950 font-bold">
            Version Control:
          </span>{" "}
          Git, GitHub
        </p>
        <p className="text-[20px] font-space ">
          <span className="text-2xl text-purple-950 font-bold">Other:</span>{" "}
          Responsive Design, UI Implementation, Problem-Solving
        </p>
      </div>
      <div className="flex flex-col mb-10 items-center px-5 mt-3">
        <div className='flex flex-col mt-10'>
            <h1 className='text-purple-950 font-space font-bold text-4xl text-center mt-10'>Projects</h1>
            <div className='flex flex-col items-center mt-4'>
                <div className='w-1 h-10 bg-purple-950'></div>
                <div className='w-2 h-2 rounded-full bg-purple-950 mt-1'></div>
            </div>
        </div>
        <div className="flex md:flex-row flex-col md:pl-10 gap-10 mt-10 items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl font-space font-bold text-purple pb-5">
              Techty
            </h1>
            <div className="flex md:flex-row gap-5">
              <Button
                name="HTML"
                style={
                  "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md md:w-20 w-12 h-10 font-semibold"
                }
              />
              <Button
                name="CSS"
                style={
                  "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md md:w-20 w-12 h-10 font-semibold"
                }
              />
              <Button
                name="Javascript"
                style={
                  "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-2 items-center flex justify-center text-white rounded-md md:w-25 w-15 h-10 font-semibold"
                }
              />
              <Button
                name="React"
                style={
                  "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md md:w-20 w-12 h-10 font-semibold"
                }
              />
            </div>
            <p className="font-space text-[17px] font-normal pt-5">
              Used components of Javascript to implement basic data structures{" "}
              <br />
              through the website of Techty. Also used a fetch some API to
              display <br />
              the services including perfect pictures for its UI.
            </p>
            <div className="flex flex-row md:flex-row gap-5 pt-5">
              <Button
                name="View Github"
                style={
                  "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-20 md:w-40 h-10 font-semibold"
                }
              />
              <Button
                name="View project"
                style={
                  "bg-transparent hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-20 md:w-40 h-10 font-semibold"
                }
              />
            </div>
          </div>
          <div>
            <img src="/Techty.jpg" alt="" className="w-150 rounded-lg" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:pl-10 gap-10 mt-25 items-center">
          <div>
            <img src="/TicTacToe.jpg" alt="" className="w-150 rounded-lg" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-space font-bold text-purple pb-5">
              TicTacToe
            </h1>
            <div className="flex flex-row md:flex-row gap-5">
              <Button
                name="HTML"
                style={
                  "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-12 md:w-20 h-10 font-semibold"
                }
              />
              <Button
                name="CSS"
                style={
                  "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-12 md:w-20 h-10 font-semibold"
                }
              />
              <Button
                name="Javascript"
                style={
                  "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-2 items-center flex justify-center text-white rounded-md w-15 md:w-25 h-10 font-semibold"
                }
              />
              <Button
                name="React"
                style={
                  "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-12 md:w-20 h-10 font-semibold"
                }
              />
            </div>
            <p className="font-space text-[17px] font-normal pt-5">
              Used components of Javascript to implement basic data structures{" "}
              <br />
              through the website of Techty. Also used a fetch some API to
              display <br />
              the services including perfect pictures for its UI.
            </p>
            <div className="flex flex-row md:flex-row gap-5 pt-5">
              <Button
                name="View Github"
                style={
                  "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-20 md:w-40 h-10 font-semibold"
                }
              />
              <Button
                name="View project"
                style={
                  "bg-transparent hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-20 md:w-40 h-10 font-semibold"
                }
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:pl-10 gap-10 mt-25 items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl font-space font-bold text-purple pb-5">
              Netflix Clone
            </h1>
            <div className="flex flex-row md:flex-row gap-5">
              <Button
                name="HTML"
                style={
                  "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-12 md:w-20 h-10 font-semibold"
                }
              />
              <Button
                name="CSS"
                style={
                  "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-12 md:w-20 h-10 font-semibold"
                }
              />
              <Button
                name="Javascript"
                style={
                  "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-2 items-center flex justify-center text-white rounded-md w-15 md:w-25 h-10 font-semibold"
                }
              />
              <Button
                name="React"
                style={
                  "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-12 md:w-20 h-10 font-semibold"
                }
              />
            </div>
            <p className="font-space text-[17px] font-normal pt-5">
              Used components of Javascript to implement basic data structures{" "}
              <br />
              through the website of Techty. Also used a fetch some API to
              display <br />
              the services including perfect pictures for its UI.
            </p>
            <div className="flex flex-row md:flex-row gap-5 pt-5">
              <Button
                name="View Github"
                style={
                  "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-20 md:w-40 h-10 font-semibold"
                }
              />
              <Button
                name="View project"
                style={
                  "bg-transparent hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-20 md:w-40 h-10 font-semibold"
                }
              />
            </div>
          </div>
          <div>
            <img src="/Netflix.jpg" alt="" className="w-150 rounded-lg" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:pl-10 gap-10 mt-25 items-center">
          <div>
            <img src="/Inance.jpg" alt="" className="w-150 rounded-lg" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-space font-bold text-purple pb-5">
              Inance
            </h1>
            <div className="flex flex-row md:flex-row gap-5">
              <Button
                name="HTML"
                style={
                  "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-12 md:w-20 h-10 font-semibold"
                }
              />
              <Button
                name="CSS"
                style={
                  "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-12 md:w-20 h-10 font-semibold"
                }
              />
              <Button
                name="Javascript"
                style={
                  "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-2 items-center flex justify-center text-white rounded-md w-15 md:w-25 h-10 font-semibold"
                }
              />
              <Button
                name="React"
                style={
                  "bg-white hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-12 md:w-20 h-10 font-semibold"
                }
              />
            </div>
            <p className="font-space text-[17px] font-normal pt-5">
              Used components of Javascript to implement basic data structures{" "}
              <br />
              through the website of Techty. Also used a fetch some API to
              display <br />
              the services including perfect pictures for its UI.
            </p>
            <div className="flex flex-row md:flex-row gap-5 pt-5">
              <Button
                name="View Github"
                style={
                  "bg-purple-700 hover:bg-white hover:text-blue-700 text-[15px] font-space p-3 items-center flex justify-center text-white rounded-md w-20 md:w-40 h-10 font-semibold"
                }
              />
              <Button
                name="View project"
                style={
                  "bg-transparent hover:bg-purple-700 hover:text-white text-[15px] font-space p-3 items-center flex justify-center text-purple-700 rounded-md w-20 md:w-40 h-10 font-semibold"
                }
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-20">
            <h1 className="text-3xl font-space font-bold text-purple-950">
          Education and Training
        </h1>
        </div>
      </div>
      <div className="text-white py-16 rounded-lg">
  <div className="max-w-6xl mx-auto px-6 relative">
    {/* Center vertical line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-700"></div>

    {/* Heading */}
    {/* <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">Qualifications & Certificates</h2>
      <p className="text-gray-300 mt-2">
        My journey in education and skill-building.
      </p>
    </div> */}

    {/* Timeline items */}
    <div className="space-y-16 relative">
      {/* Item 1 - Left */}
      <div className="flex justify-start w-full relative">
        <div className="w-1/2 pr-10">
          <div className="bg-slate-900 shadow-lg rounded-lg p-5 transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110">
            <h3 className="font-bold text-lg">
              Political Science (In view)
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              A student of University of Ibadan, Faculty of the Social Sciences, Department
              of Political Science with high interest in Comparative politics and political ideas.
            </p>
            <p className="text-purple-500 text-sm mt-2 font-semibold">
              FEB 2024 - JAN 2025
            </p>
          </div>
        </div>
        {/* Dot */}
        <span className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-700 rounded-full border-4 border-slate-800 top-4"></span>
      </div>

      {/* Item 2 - Right */}
      <div className="flex justify-end w-full relative">
        <div className="w-1/2 pl-10">
          <div className="bg-slate-900 shadow-lg rounded-lg p-5 transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110">
            <h3 className="font-bold text-lg">UI/UX</h3>
            <p className="text-gray-300 text-sm mt-1">
              Learned to create and interpret figma user interface both application 
              and website design
            </p>
            <p className="text-purple-500 text-sm mt-2 font-semibold">
              JAN 2021 - DEC 2021
            </p>
          </div>
        </div>
        {/* Dot */}
        <span className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-700 rounded-full border-4 border-slate-800 top-4"></span>
      </div>

      {/* Item 3 - Left */}
      <div className="flex justify-start w-full relative">
        <div className="w-1/2 pr-10">
          <div className="bg-slate-900 shadow-lg rounded-lg p-5 transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110">
            <h3 className="font-bold text-lg">Larva Coding Academy</h3>
            <p className="text-gray-300 text-sm mt-1">
              Learned HTML, CSS, JS, Tailwind, React, TypeScript, and NextJs
            </p>
            <p className="text-purple-500 text-sm mt-2 font-semibold">
              MARCH 2025 - PRESENT
            </p>
          </div>
        </div>
        {/* Dot */}
        <span className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-700 rounded-full border-4 border-slate-800 top-4"></span>
      </div>

      {/* Item 4 - Right */}
      <div className="flex justify-end w-full relative">
        <div className="w-1/2 pl-10 transition delay-50 duration-300 ease-in-out hover:translate-y-1 hover:scale-110">
          <div className="bg-slate-900 shadow-lg rounded-lg p-5 ">
            <h3 className="font-bold text-lg">Content Writer</h3>
            <p className="text-gray-300 text-sm mt-1">
              Medium, Upwork, and Substack...
            </p>
            <p className="text-purple-500 text-sm mt-2 font-semibold">
              FEB 2025 - PRESENT
            </p>
          </div>
        </div>
        {/* Dot */}
        <span className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-700 rounded-full border-4 border-slate-800 top-4"></span>
      </div>
    </div>
  </div>
</div>
      <div className="bg-purple-950 w-full px-5 pb-20 pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
