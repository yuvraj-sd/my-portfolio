import React from 'react'
import Logo from '../assets/logo.png'
import { SquareTerminalIcon, BugOffIcon, CodeXmlIcon } from 'lucide-react'

const About = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl md:text-4xl mb-20 mt-2 text-[var(--text)] font-extrabold text-center">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl">
        {/* Logo */}
        <img
          src={Logo}
          width={192}
          alt="Logo"
          className="border-2 border-b-gray-700 rounded-full"
        />

        {/* Info Card */}
        <div className="p-6 bg-[var(--accent)] rounded-3xl w-full md:w-[60%] shadow-xl border-2 border-white/20 transition-all">
          <p className="font-medium text-[var(--text)] text-sm md:text-base leading-relaxed">
            I am Yuvraj Singh Dhanjal from Punjab, India. I'm a passionate Frontend React Developer skilled in building dynamic and responsive web interfaces. For backend, I use Django because of my strong foundation in Python.
          </p>

          {/* Icons */}
          <div className="flex justify-center mt-4 gap-6">
            <SquareTerminalIcon className="text-[var(--primary)] hover:text-black transition-all duration-200 w-6 h-6 md:w-8 md:h-8" />
            <BugOffIcon className="text-[var(--primary)] hover:text-black transition-all duration-200 w-6 h-6 md:w-8 md:h-8" />
            <CodeXmlIcon className="text-[var(--primary)] hover:text-black transition-all duration-200 w-6 h-6 md:w-8 md:h-8" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
