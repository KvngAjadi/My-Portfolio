import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Skills from '../Components/Skills'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Form from '../Components/Form'
const App = () => {
  return (
    <div className='flex flex-col bg-[#F0F8FF] bg-cover w-full'>
      <div className=''>
     <NavBar/>
      </div>
      <div className="relative h-auto bg-purple-950 flex justify-center items-center w-full md:pt-20 pt-10 px-5 md:px-20 [background-size:contain, cover]">
     <Hero/>
      </div>
      <div className='w-full px-5'>
        <Skills/>
      </div>
      <div className='w-full px-5'>
        <About/>
      </div>
      <div className='w-full px-5'>
        <Projects/>
      </div>
      <div className='bg-[#d3e1ee]'>
        <Form/>
      </div>
      <div className='bg-purple-950 w-full px-5 pb-20'>
    <Footer/>
      </div>
    </div>
  )
}

export default App