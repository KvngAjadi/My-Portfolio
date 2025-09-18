import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Skills from './Components/Skills'

const App = () => {
  return (
    <div className='flex flex-col'>
      <div className=''>
     <NavBar/>
      </div>
      <div className="relative h-screen bg-[url('/Code.jpg')] flex justify-center items-center md:pt-20 pt-10 px-5 md:px-20 [background-size:contain, cover]">
     <Hero/>
      </div>
      <div className=''>
        <Skills/>
      </div>
    <Footer/>
    </div>
  )
}

export default App