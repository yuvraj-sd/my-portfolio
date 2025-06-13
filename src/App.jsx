import React, { useRef, useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useInView, motion } from 'framer-motion'

const App = () => {
  const [darkmode, setDarkmode] = useState(true)

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const educationRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)

  const homeInView = useInView(homeRef, { amount: 0.4, once: false })
  const aboutInView = useInView(aboutRef, { amount: 0.4, once: false })
  const educationInView = useInView(educationRef, { amount: 0.4, once: false })
  const skillsInView = useInView(skillsRef, { amount: 0.4, once: false })
  const contactInView = useInView(contactRef, { amount: 0.4, once: false })

  const [homeAnimated, setHomeAnimated] = useState(false)
  const [aboutAnimated, setAboutAnimated] = useState(false)
  const [educationAnimated, setEducationAnimated] = useState(false)
  const [skillsAnimated, setSkillsAnimated] = useState(false)
  const [contactAnimated, setContactAnimated] = useState(false)

  if (homeInView && !homeAnimated) setHomeAnimated(true)
  if (aboutInView && !aboutAnimated) setAboutAnimated(true)
  if (educationInView && !educationAnimated) setEducationAnimated(true)
  if (skillsInView && !skillsAnimated) setSkillsAnimated(true)
  if (contactInView && !contactAnimated) setContactAnimated(true)

  return (
    <div>
      <Navbar />
      <div className=''>
        {/* Home Section */}
        <section
          id='home'
          ref={homeRef}
          className='relative transition-all duration-500 bg-[var(--section-bg)]'
        >
          <motion.div
            initial={homeAnimated ? { x: -100, opacity: 0 } : { }}
            animate={homeAnimated ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Home />
          </motion.div>

          {/* Background blobs */}
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 bg-purple-500 opacity-30 blur-3xl rounded-full top-10 sm:top-16 md:top-20 left-5 sm:left-12 md:left-20 pointer-events-none"></div>
          <div className="absolute w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-pink-500 opacity-25 blur-2xl rounded-full bottom-15 sm:bottom-10 right-10 sm:right-24 md:right-40 pointer-events-none"></div>
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-blue-400 opacity-20 blur-3xl rounded-full top-5 sm:top-8 md:top-10 right-5 sm:right-10 md:right-10 pointer-events-none"></div>
          <div className="absolute w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 bg-green-400 opacity-20 blur-2xl rounded-full bottom-5 sm:bottom-8 md:bottom-10 left-10 sm:left-20 md:left-40 pointer-events-none"></div>
        </section>

        {/* About Section */}
        <section
          id='about'
          ref={aboutRef}
          className='relative transition-all duration-500 rounded-4xl bg-[var(--section-bg)] mt-10 pb-5 mx-4 md:mx-15'
        >
          <motion.div
            initial={aboutAnimated ? { x: -100, opacity: 0 } : { }}
            animate={aboutAnimated ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <About />
          </motion.div>

          {/* Background blobs */}
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 bg-indigo-500 opacity-30 blur-3xl rounded-full top-10 sm:top-16 md:top-20 left-5 sm:left-12 md:left-60 pointer-events-none"></div>
          <div className="absolute w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-yellow-500 opacity-25 blur-2xl rounded-full bottom-5 sm:bottom-10 right-10 sm:right-24 md:right-32 pointer-events-none"></div>
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-red-400 opacity-20 blur-3xl rounded-full top-5 sm:top-8 md:top-10 right-5 sm:right-10 md:right-54 pointer-events-none"></div>
          <div className="absolute w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 bg-zinc-100 opacity-20 blur-2xl rounded-full bottom-5 sm:bottom-8 md:bottom-10 left-10 sm:left-20 md:left-[120px] pointer-events-none"></div>
        </section>

        {/* Education Section */}
        <section
          id='education'
          ref={educationRef}
          className='relative transition-all duration-500 rounded-4xl bg-[var(--section-bg)] mt-10 pb-5 mx-4 md:mx-15'
        >
          <motion.div
            animate={educationAnimated ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            initial={educationAnimated ? { x: -100, opacity: 0 } : { }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Education />
          </motion.div>

          {/* Background blobs */}
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 bg-[#2f0051] opacity-30 blur-3xl rounded-full top-10 sm:top-16 md:top-20 left-5 sm:left-12 md:left-70 pointer-events-none"></div>
          <div className="absolute w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-[#ff6200] opacity-25 blur-2xl rounded-full bottom-5 sm:bottom-10 right-10 sm:right-24 md:right-32 pointer-events-none"></div>
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-[#0077ff] opacity-20 blur-3xl rounded-full top-5 sm:top-8 md:top-10 right-5 sm:right-10 md:right-10 pointer-events-none"></div>
          <div className="absolute w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 bg-[#a7cc1e] opacity-20 blur-2xl rounded-full bottom-5 sm:bottom-8 md:bottom-10 left-10 sm:left-20 md:left-[180px] pointer-events-none"></div>
        </section>

        {/* Skills Section */}
        <section
          id='skills'
          ref={skillsRef}
          className='relative transition-all duration-500 rounded-4xl bg-[var(--section-bg)] mt-10 pb-5 mx-4 md:mx-15'
        >
          <motion.div
            initial={skillsAnimated ? { x: -100, opacity: 0 } : { }}
            animate={skillsAnimated ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Skills />
          </motion.div>

          {/* Background blobs */}
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 bg-[#2f0051] opacity-30 blur-3xl rounded-full top-0 sm:top-12 md:top-20 left-5 sm:left-12 md:left-70 pointer-events-none"></div>
          <div className="absolute w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-[#ff6200] opacity-25 blur-2xl rounded-full bottom-5 sm:bottom-10 right-10 sm:right-24 md:right-32 pointer-events-none"></div>
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-[#0077ff] opacity-20 blur-3xl rounded-full top-5 sm:top-4 md:top-0 right-5 sm:right-10 md:right-10 pointer-events-none"></div>
          <div className="absolute w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 bg-[#a7cc1e] opacity-20 blur-2xl rounded-full bottom-5 sm:bottom-8 md:bottom-10 left-10 sm:left-20 md:left-[180px] pointer-events-none"></div>
        </section>



        {/* Contact Section */}
        <section
          id='contact'
          ref={contactRef}
          className='relative transition-all duration-500 rounded-4xl bg-[var(--section-bg)] mt-10 pb-5 mx-4 md:mx-15 mb-10'
        >
          <motion.div
            initial={contactAnimated ? { x: -100, opacity: 0 } : { }}
            animate={contactAnimated ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Contact />
          </motion.div>

          {/* Background blobs */}
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 bg-[#2f0051] opacity-30 blur-3xl rounded-full top-0 sm:top-12 md:top-20 left-5 sm:left-12 md:left-70 pointer-events-none"></div>
          <div className="absolute w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-[#ff6200] opacity-25 blur-2xl rounded-full bottom-5 sm:bottom-10 right-10 sm:right-24 md:right-32 pointer-events-none"></div>
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-[#0077ff] opacity-20 blur-3xl rounded-full top-5 sm:top-4 md:top-0 right-5 sm:right-10 md:right-10 pointer-events-none"></div>
          <div className="absolute w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 bg-[#a7cc1e] opacity-20 blur-2xl rounded-full bottom-5 sm:bottom-8 md:bottom-10 left-10 sm:left-20 md:left-[180px] pointer-events-none"></div>
        </section>
      </div>
    </div>
  )
}

export default App
