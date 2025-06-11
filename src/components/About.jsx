import React from 'react'
import PythonLogo from '../assets/python-svg.svg'

const Skills = () => {
  const pythonSkill = 80; // percentage

  return (
    <div className='p-4 text-[var(--text)] justify-center'>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-7 mt-2 text-center">
        Skills
      </h1>

      {/* skills div */}
      <div className="flex w-full flex-col justify-center items-center">

        {/* python */}
        <div className="flex flex-col items-center gap-4 w-full p-2 border-1">
          <div className="flex flex-row items-center gap-2 mt-3 mb-2">
            <h2 className="text-lg font-semibold">Python</h2>
            <span>
              <img src={PythonLogo} alt="Python logo" width={36} />
            </span>
          </div>
          <div className="w-full max-w-md bg-gray-200 rounded-full h-6 dark:bg-gray-700 relative"
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

        {/* Centered second skill */}
        <div className="flex items-center gap-4 w-full justify-center">
          <span>
            <img src={PythonLogo} alt="Python logo" width={36} />
          </span>
          <div className="w-full max-w-md bg-gray-200 rounded-full h-6 dark:bg-gray-700 relative"
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
      </div>
    </div>
  )
}

export default Skills
