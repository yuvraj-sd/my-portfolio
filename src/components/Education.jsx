import React from 'react'
import SchoolImg from '../assets/school_img.png'

const Education = () => {
  return (
    <div className='p-4 text-[var(--text)]'>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-20 mt-2 text-center">
        Education
      </h1>

      <div className="flex sm:flex-col md:flex-row md:w-[60%] m-auto">
        <img
          src={SchoolImg}
          width={400}
          alt="Logo"
          className="border-1 border-white rounded-4xl"
        />
        <div className="flex flex-col m-auto gap-4 text-center">
          <h2
          className='text-xl border-1 border-var(--text)] p-2 rounded-4xl px-4 hover:bg-[#fff] hover:text-black cursor-auto'
        >Currently studying at <a href='https://pathseekers.edu.in/' className='hover:text-fuchsia-500 hover:underline transition-all duration-200'>Pathseekers</a></h2>
        <h2
          className='text-xl border-1 border-var(--text)] p-2 rounded-4xl px-4 hover:bg-[#fff] hover:text-black cursor-auto'
        >In <a href='https://pathseekers.edu.in/' className='hover:text-fuchsia-500 hover:underline transition-all duration-200'>Pathseekers</a> since 2014</h2>
        <h2
          className='text-xl border-1 border-var(--text)] p-2 rounded-4xl px-4 hover:bg-[#fff] hover:text-black cursor-auto'
        >Currenlty in Class 11 - Science</h2>
        </div>
      </div>

      <div className="flex">
        10th result
      </div>

    </div>
  )
}

export default Education
