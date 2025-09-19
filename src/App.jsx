import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Skills from './Components/Skills'
import About from './Components/About'
import Projects from './Components/Projects'

const App = () => {
  return (
    <div className='flex flex-col bg-purple-200 bg-cover'>
      <div className=''>
     <NavBar/>
      </div>
      <div className="relative h-auto bg-purple-950 flex justify-center items-center md:pt-20 pt-10 px-5 md:px-20 [background-size:contain, cover]">
     <Hero/>
      </div>
      <div className=''>
        <Skills/>
      </div>
      <div className=''>
        <About/>
      </div>
      <div>
        <Projects/>
      </div>
    <Footer/>
    </div>
  )
}

export default App