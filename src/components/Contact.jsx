import { useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_jnpfdkk'
const TEMPLATE_ID = 'template_xqqpqeh'
const PUBLIC_KEY = 'XX6ZLHydmnBPf4KGT'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      )
      setStatus('Message sent!')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('Failed to send. Please try again later.')
    }
  }

  return (
    <div className='p-4 text-[var(--text)] justify-center'>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-7 mt-2 text-center">
        Contact Me
      </h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="relative">
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" "
            required
            value={form.name}
            onChange={handleChange}
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
            value={form.email}
            onChange={handleChange}
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
            name="message"
            id="message"
            rows={4}
            placeholder=" "
            required
            value={form.message}
            onChange={handleChange}
            className="peer w-full border border-gray-300 dark:border-gray-600 bg-transparent px-4 pt-5 pb-2 rounded-xl text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
          ></textarea>
          <label
            htmlFor="message"
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
        {status && (
          <div className="text-center mt-2 text-sm">
            {status}
          </div>
        )}
      </form>
    </div>
  )
}

export default Contact
