import React from 'react'
import PythonLogo from '../assets/python-svg.svg'
import ReactLogo from '../assets/react_logo.svg'
import ReactNativeLogo from '../assets/react_native_logo.svg'

const Skills = () => {
  const pythonSkill = 83
  const androidSkill = 68
  const reactSkill = 75
  const reactNativeSkill = 56

  return (
    <div className='p-4 text-[var(--text)] justify-center'>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-7 mt-2 text-center">
        Skills
      </h1>

      {/* skills div */}
      <div className="flex w-full flex-col gap-2 items-center">


        {/* python div */}
        <div className="flex flex-col bg-[#8080801c] rounded-4xl items-center gap-4 p-4 w-full">

          <div className='flex flex-row mb-2 '>
            <h2 className="text-lg"><pre>Python  </pre></h2>
            <span>
              <img src={PythonLogo} alt="Python logo" width={24} className='' />
            </span>
          </div>
          <div className="w-full bg-[var(--non-text)] rounded-full h-6 relative"
            role="progressbar"
            aria-valuenow={pythonSkill}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Python skill proficiency"
          >
            <div
              className="bg-gradient-to-r from-[#00ffe1] to-[#f6ff00] h-6 rounded-full transition-colors duration-300"
              style={{ width: `${pythonSkill}%` }}
            />
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black">
              {pythonSkill}%
            </span>
          </div>
        </div>



        {/* android dev div */}
        <div className="flex flex-col bg-[#8080801c] rounded-4xl items-center gap-4 p-4 w-full">

          <div className='flex flex-row mb-2 '>
            <h2 className="text-lg"><pre>Android Development  </pre></h2>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                <path fill="#30dc80" d="M24,14.088C11.427,14.088,1.108,23.716,0,36h48C46.892,23.716,36.573,14.088,24,14.088z M33.179,27.079c0-1.104,0.895-1.999,1.999-1.999c1.104,0,1.999,0.895,1.999,1.999c0,1.104-0.895,1.999-1.999,1.999	C34.074,29.078,33.179,28.183,33.179,27.079z M12.822,29.078c-1.104,0-1.999-0.895-1.999-1.999c0-1.104,0.895-1.999,1.999-1.999	s1.999,0.895,1.999,1.999C14.821,28.183,13.926,29.078,12.822,29.078z"></path><path fill="#30dc80" d="M34.038,19.313c-0.14,0-0.281-0.035-0.41-0.11c-0.393-0.227-0.527-0.729-0.301-1.122l5.197-9.008	c0.227-0.394,0.729-0.529,1.122-0.301c0.393,0.227,0.527,0.729,0.301,1.122l-5.197,9.008C34.598,19.166,34.322,19.313,34.038,19.313	z"></path><path fill="#30dc80" d="M13.962,19.313c-0.284,0-0.56-0.148-0.712-0.411L8.054,9.894C7.827,9.501,7.962,8.999,8.354,8.772	c0.392-0.228,0.895-0.093,1.122,0.301l5.197,9.008c0.227,0.394,0.092,0.896-0.301,1.122C14.243,19.278,14.102,19.313,13.962,19.313z"></path>
              </svg>
            </span>
          </div>
          <div className="w-full bg-[var(--non-text)] rounded-full h-6 relative"
            role="progressbar"
            aria-valuenow={androidSkill}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Python skill proficiency"
          >
            <div
              className="bg-gradient-to-r from-[#4fff4c] to-[#40ff00] h-6 rounded-full transition-colors duration-300"
              style={{ width: `${androidSkill}%` }}
            />
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black">
              {androidSkill}%
            </span>
          </div>
        </div>


        {/* react js div */}
        <div className="flex flex-col bg-[#8080801c] rounded-4xl items-center gap-4 p-4 w-full">

          <div className='flex flex-row mb-2 '>
            <h2 className="text-lg"><pre>React JS  </pre></h2>
            <span>
              <img src={ReactLogo} alt="Python logo" width={24} className='' />
            </span>
          </div>
          <div className="w-full bg-[var(--non-text)] rounded-full h-6 relative"
            role="progressbar"
            aria-valuenow={reactSkill}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Python skill proficiency"
          >
            <div
              className="bg-gradient-to-r from-[#4c8eff] to-[#00ffaa] h-6 rounded-full transition-colors duration-300"
              style={{ width: `${reactSkill}%` }}
            />
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black">
              {reactSkill}%
            </span>
          </div>
        </div>





        {/* react native div */}
        <div className="flex flex-col bg-[#8080801c] rounded-4xl items-center gap-4 p-4 w-full">

          <div className='flex flex-row mb-2 '>
            <h2 className="text-lg"><pre>React Native  </pre></h2>
            <span>
              <img src={ReactNativeLogo} alt="Python logo" width={36} className='rounded-xl' />
            </span>
          </div>
          <div className="w-full bg-[var(--non-text)] rounded-full h-6 relative"
            role="progressbar"
            aria-valuenow={reactNativeSkill}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Python skill proficiency"
          >
            <div
              className="bg-gradient-to-r from-[#f34cff] to-[#ff009d] h-6 rounded-full transition-colors duration-300"
              style={{ width: `${reactNativeSkill}%` }}
            />
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black">
              {reactNativeSkill}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
