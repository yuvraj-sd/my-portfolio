import React from 'react'
import SchoolImg from '../assets/school_img.png'

const percentage = 97;

const Education = () => {
  return (
    <div className="p-4 text-[var(--text)]">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-20 mt-2 text-center">
        Education
      </h1>

      <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={SchoolImg}
            alt="School"
            className="w-full max-w-xs md:max-w-sm rounded-3xl border border-white shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-center">
          <h2 className="border p-2 rounded-3xl px-4 hover:bg-[#fff] hover:text-black cursor-auto">
            Studying at{' '}
            <a
              href="https://pathseekers.edu.in/"
              className="hover:text-fuchsia-500 hover:underline transition-all duration-200"
            >
              Pathseekers
            </a>
          </h2>
          <h2 className="border p-2 rounded-3xl px-4 hover:bg-[#fff] hover:text-black cursor-auto">
            In{' '}
            <a
              href="https://pathseekers.edu.in/"
              className="hover:text-fuchsia-500 hover:underline transition-all duration-200"
            >
              Pathseekers
            </a>{' '}
            since 2014
          </h2>
          <h2 className="border p-2 rounded-3xl px-4 hover:bg-[#fff] hover:text-black cursor-auto">
            Currently in Class 11 - Science
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <h2 className="mt-3 mb-2 text-lg">Percentage in Class 10:</h2>
        <div className="w-full max-w-md bg-gray-200 rounded-full h-6 dark:bg-gray-700 relative">
          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-6 rounded-full transition-all duration-700"
            style={{ width: `${percentage}%` }}
          ></div>
          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default Education
