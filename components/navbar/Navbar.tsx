'use client'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import ToggleColorMode from './ToggleColorMode'
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons'

const Navbar = () => {
    const { theme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="px-4 py-4 bg-white dark:bg-black dark:border-b dark:border-grey-50-800 fixed top-0 left-0 w-full z-50">
            <div className="container flex flex-wrap justify-between items-center mx-auto max-w-6xl">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo.png"
                        height={40}
                        width={40}
                        className={`filter-logo-${theme}`} alt="VeriSync Logo" />
                    <span className="font-semibold text-2xl text-gray-800 dark:text-white">VeriSync</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-4">
                    <Link href="/about" className="text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300 ease-in-out">
                        About Us
                    </Link>
                    <ToggleColorMode />
                </div>

                {/* Mobile Menu Controls */}
                <div className="lg:hidden flex items-center space-x-2">
                    {/* Theme Switcher on Mobile */}
                    <ToggleColorMode />

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="text-gray-900 dark:text-gray-100 focus:outline-none">
                        {isOpen ? (
                            <Cross2Icon className="w-6 h-6" aria-label="Close Menu" />
                        ) : (
                            <HamburgerMenuIcon className="w-6 h-6" aria-label="Open Menu" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white dark:bg-black">
                    <div className="flex flex-col items-end px-4 py-2">
                        <Link href="/about" onClick={() => setIsOpen(false)} className="block w-full text-right px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                            About Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar