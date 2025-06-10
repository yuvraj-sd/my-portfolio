import React, { useRef, useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useInView, motion } from 'framer-motion'

const App = () => {


  const [darkmode, setDarkmode] = useState(true)

  const homeRef = useRef(null)
  const homeInView = useInView(homeRef, { amount: 0.4, once: false })
  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, { amount: 0.4, once: false })




  return (

    <div>
      <Navbar></Navbar>
      <div className=''>

        <section
          id='home'
          ref={homeRef}
          className='relative transition-all duration-500 bg-[#161f353f]'
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={homeInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Home />
          </motion.div>

          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 bg-purple-500 opacity-30 blur-3xl rounded-full top-10 sm:top-16 md:top-20 left-5 sm:left-12 md:left-20 pointer-events-none"></div>
          <div className="absolute w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-pink-500 opacity-25 blur-2xl rounded-full bottom-5 sm:bottom-10 right-10 sm:right-24 md:right-32 pointer-events-none"></div>
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-blue-400 opacity-20 blur-3xl rounded-full top-5 sm:top-8 md:top-10 right-5 sm:right-10 md:right-10 pointer-events-none"></div>
          <div className="absolute w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 bg-green-400 opacity-20 blur-2xl rounded-full bottom-5 sm:bottom-8 md:bottom-10 left-10 sm:left-20 md:left-[120px] pointer-events-none"></div>
        </section>




        <section
          id='about'
          ref={aboutRef}
          className='relative transition-all duration-500 rounded-4xl bg-[#161f353f] mt-20 mx-15'
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={aboutInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <About />
          </motion.div>

          {/* Glow Spots - Responsive */}
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 bg-indigo-500 opacity-30 blur-3xl rounded-full top-10 sm:top-16 md:top-20 left-5 sm:left-12 md:left-20 pointer-events-none"></div>
          <div className="absolute w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-yellow-500 opacity-25 blur-2xl rounded-full bottom-5 sm:bottom-10 right-10 sm:right-24 md:right-32 pointer-events-none"></div>
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-red-400 opacity-20 blur-3xl rounded-full top-5 sm:top-8 md:top-10 right-5 sm:right-10 md:right-10 pointer-events-none"></div>
          <div className="absolute w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 bg-zinc-100 opacity-20 blur-2xl rounded-full bottom-5 sm:bottom-8 md:bottom-10 left-10 sm:left-20 md:left-[120px] pointer-events-none"></div>
        </section>


      </div>
    </div>
  )
}

export default App


