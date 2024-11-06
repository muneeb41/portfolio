import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import HeroSection from './components/home/HeroSection'
import Navbar from './components/home/Navbar'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {
  
 useEffect(()=>{
  Aos.init({
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100
    
  });
 },[])

  return (
    <div className=''>
      <Navbar/>
      <HeroSection/>
       <About/>
       <Skills/>
       <Projects/>
       <Contact/>
       <Footer />
    </div>
  )
}

export default App
