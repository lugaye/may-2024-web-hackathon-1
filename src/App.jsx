import React from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
// import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Projects from './pages/Projects';



function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    {/* <Skills/> */}
    <Projects/>
    <Experience/>
    <Contact/>
    </>
  )
}

export default App;
