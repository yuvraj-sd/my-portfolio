import React from 'react'
import Logo from '../assets/logo.png'
import { ReactTyped } from 'react-typed'
import { MailIcon, Linkedin, Target, Instagram } from 'lucide-react'

const Home = () => {
  return (
    <>
      <div className='flex justify-center align h-screen items-center'>
        <center className=''>
          <img src={Logo} width={192} alt="Logo" className='border-2 border-b-gray-700 rounded-full mb-10 md:w-[40%] sm:w-[30%]' />

          <h1 className='sm:text-lg md:text-2xl font-bold mb-2 text-[var(--text)]'>
            Hi, I'm Yuvraj Singh Dhanjal
          </h1>
          <ReactTyped
            className='sm:text-sm md:text-lg text-[var(--primary)] font-semibold'
            strings={[
              'Frontend React Web Developer 💻',
              'Python Programmer',
              'Tech Enthusiast 🚀',
              'Problem Solver 🧠',
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
          >
            <span className="text-xl text-[var(--primary)] font-semibold" />
          </ReactTyped>


          <ul className="flex justify-center space-x-4 w-full items-center mt-4">
            {[
              { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=imyuvi77@gmail.com&su=Hello&body=Let%20me%20connect%20with%20you!', target: '_blank', Icon: MailIcon },
              { href: 'https://www.linkedin.com/in/yuvraj-singh-178a35313', target: '_blank', Icon: Linkedin },
              { href: 'https://www.instagram.com/yuvrxj_sd/', target: '_blank', Icon: Instagram}
            ].map(({ href, target, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group relative w-6 h-6 flex items-center justify-center transition-transform hover:scale-110"
                  target={target}
                  rel="noopener noreferrer">
                  <Icon className="w-6 h-6 text-[var(--text)] group-hover:text-[var(--primary)] transition-colors duration-300" />
                </a>
              </li>
            ))}
          </ul>

        </center>
        {/* <>
          <div className="absolute top-[20%] left-[20%] animate-pulse">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="none" stroke="purple" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute top-[45%] left-[30%] animate-pulse">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12,4 20,20 4,20" fill="none" stroke="yellow" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute top-[50%] left-[10%] animate-pulse">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12 C6 0, 18 24, 24 12" fill="none" stroke="green" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute top-[9%] left-[70%] animate-pulse">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <polyline points="0,20 6,4 12,20 18,4 24,20" fill="none" stroke="red" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute top-[40%] left-[80%] animate-pulse">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="12" x2="24" y2="12" stroke="blue" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute top-[17%] left-[90%] animate-pulse">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="24" x2="24" y2="0" stroke="lightgreen" strokeWidth="3" />
            </svg>
          </div>


          <div className="absolute top-[60%] left-[90%] animate-pulse">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="none" stroke="purple" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute top-[70%] left-[70%] animate-pulse">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12,4 20,20 4,20" fill="none" stroke="yellow" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute top-[90%] left-[80%] animate-pulse">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12 C6 0, 18 24, 24 12" fill="none" stroke="green" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute top-[13%] left-[45%] animate-pulse">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <polyline points="0,20 6,4 12,20 18,4 24,20" fill="none" stroke="red" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute top-[75%] left-[35%] animate-pulse">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="12" x2="24" y2="12" stroke="blue" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute top-[85%] left-[20%] animate-pulse">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="24" x2="24" y2="0" stroke="lightgreen" strokeWidth="3" />
            </svg>
          </div></> */}

      </div>
    </>
  )
}

export default Home
