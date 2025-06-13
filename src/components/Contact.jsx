// import React from 'react'

// const Contact = () => {
//   return (
//     <div className='p-4 text-[var(--text)] justify-center'>
//       <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-7 mt-2 text-center">
//         Contact Me
//       </h1>
//     </div>



//   )
// }

// export default Contact


// src/components/Contact.jsx
import { useState } from 'react'
import axios from 'axios'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://127.0.0.1:8000/api/contact/', form)
      setStatus('Message sent!')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('Failed to send')
    }
  }

  return (
    <div className='p-4 text-[var(--text)] justify-center'>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-7 mt-2 text-center">
        Contact Me
      </h1>Temporarily does not work yet


      <form className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" "
            required
            className="peer w-full border border-gray-300 dark:border-gray-600 bg-transparent px-4 pt-5 pb-2 rounded-md text-sm focus:outline-none focus:border-blue-600 transition-colors"
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-2 text-gray-500 text-sm transition-all scale-100 origin-left peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Name
          </label>
        </div>

        {/* Email Field */}
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            required
            className="peer w-full border border-gray-300 dark:border-gray-600 bg-transparent px-4 pt-5 pb-2 rounded-md text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-2 text-gray-500 text-sm transition-all scale-100 origin-left peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
          >
            Email
          </label>
        </div>

        {/* Message Field */}
        <div className="relative">
          <textarea
            name="msg"
            id="msg"
            rows={4}
            placeholder=" "
            required
            className="peer w-full border border-gray-300 dark:border-gray-600 bg-transparent px-4 pt-5 pb-2 rounded-xl text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
          ></textarea>
          <label
            htmlFor="msg"
            className="absolute left-4 top-2 text-gray-500 text-sm transition-all scale-100 origin-left peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
          >
            Your message
          </label>
        </div>


        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-[#35ff5d] text-black border-1 border-[var(--text)] hover:bg-[#37b149] text-sm font-medium rounded-xl transition-colors duration-200 "
        >
          Send
        </button>
      </form>
      {/* </div> */}

    </div>
  )
}

export default Contact
