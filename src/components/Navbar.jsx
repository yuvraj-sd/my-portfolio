import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo_small.png'
import {
    Home,
    User,
    GraduationCap,
    Database,
    Folder,
    MessageCircle,
    Menu,
    X,
    Sun,
    Moon
} from 'lucide-react'

const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);

    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('theme')
            if (stored) return stored
            return 'dark'
        }
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme)
            localStorage.setItem('theme', theme)
        }
    }, [theme])

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    const navItems = [
        { href: '#home', Icon: Home, title: 'Home' },
        { href: '#about', Icon: User, title: 'About' },
        { href: '#education', Icon: GraduationCap, title: 'Education' },
        { href: '#skills', Icon: Database, title: 'Skills' },
        { href: '#projects', Icon: Folder, title: 'Projects' },
        { href: '#contact', Icon: MessageCircle, title: 'Contact' },
    ];


    return (
        <>

            <div className="fixed shadow hidden justify-between m-0 top-0 z-50 md:flex w-full transition-colors duration-200 bg-[var(--navbar-bg)] backdrop-blur-md p-3"
            style={{ background: 'var(--navbar-bg)' }}>

                <img src={Logo} alt="Logo" width={45} height={45} />
                <main className='flex justify-center items-center gap-10'>

                    {navItems.map(({ href, Icon, title }) => {
                        return (
                            <div key={href}>
                                <a href={href} title={title}
                                    className='w-6 h-6 hover:scale-110 transition-transform duration-200'>
                                    <Icon
                                        className='hover:scale-110 text-[var(--text)] transition-transform duration-200 hover:text-[var(--primary)] w-6 h-6 transition-colors duration-200' />
                                </a>
                            </div>
                        )
                    })}
                </main>

                <button
                    aria-label='Toggle theme'
                    onClick={toggleTheme}
                    className='cursor-pointer'>
                    {theme === 'light'
                        ? <Moon className='w-6 h-6 text-[var(--text)] hover:text-[var(--primary)]' />
                        : <Sun className='w-6 h-6 text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-300' />}

                </button>

            </div>


            <div className='md:hidden fixed top-4 left-4 z-50'>
                <Menu
                    className={`w-8 h-8 cursor-pointer transition-all duration-300 ease-in-out text-[var(--text)] ${isOpen ? 'opacity-0 scale-70 pointer-events-none' : 'opacity-100 scale-100 pointer-events-auto'} `}
                    onClick={() => setIsOpen(true)}
                />
            </div>


            <>
                <div
                    className={`fixed inset-0 bg-white/30 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Sidebar Drawer */}
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-[rgba(18,24,38,0.8)] backdrop-blur-md p-4 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <div className='absolute top-4 left-4'>
                        <X
                            className={`w-8 h-8 cursor-pointer transition-all duration-300 text-[var(--text)] ${!isOpen ? 'opacity-0 scale-70' : 'opacity-100 scale-100'}`}
                            onClick={() => setIsOpen(false)}
                        />
                    </div>

                    {/* Flex container for sidebar content */}
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            {/* Logo */}
                            <div className='mt-12 flex justify-center'>
                                <img src={Logo} alt="Logo" width={100} />
                            </div>
                            {/* Navigation Items */}
                            <main className='flex flex-col gap-6 mt-8'>
                                {navItems.map(({ href, Icon }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        className='flex items-center gap-3 text-[var(--text)] active:text-[var(--primary)] active:scale-90 transition-all duration-200 hover:text-[var(--primary)]'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Icon className='w-5 h-5' />
                                        <span className='text-sm '>
                                            {href.replace('#', '').toUpperCase()}
                                        </span>
                                    </a>
                                ))}
                            </main>
                        </div>


                        <button
                            aria-label='Toggle theme'
                            onClick={toggleTheme}
                            className=' flex items-center gap-3 text-[var(--text)] active:text-[var(--primary)] active:scale-90 transition-all duration-50 hover:text-[var(--primary)]'
                        >
                            {theme === 'light'
                                ? <Moon className='w-5 h-5 text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-300' />
                                : <Sun className='w-5 h-5  text-[var(--text)] hover:text-[var(--primary)] transition-colors duration-300' />}
                            <span className="text-sm ">{theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}</span>
                        </button>
                    </div>
                </div>
            </>
        </>
    )
}

export default Navbar
