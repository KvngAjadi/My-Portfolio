import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import Resume from './Pages/Resume'
import Portfolio from './Pages/Portfolio'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutMe' element={<AboutMe/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App