import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-blue-950'>
     <NavBar/>
      </div>
     <Hero/>
    <Footer/>
    </div>
  )
}

export default App