'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import ToggleColorMode from './ToggleColorMode'

const Navbar = () => {
    const { theme } = useTheme()

    return (
        <nav className="px-4 py-4">
            <div className="container flex flex-wrap justify-between items-center mx-auto max-w-6xl">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo.png"
                        height={40}
                        width={40}
                        className={`filter-logo-${theme}`} alt={''} />
                    <span className="font-semibold text-2xl">VeriSync Labs</span>
                </Link>

                <div className="flex items-center space-x-4">
                    <Link href="/about" className="text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300 ease-in-out">
                        About Us
                    </Link>
                    <ToggleColorMode />
                </div>
            </div>
        </nav>
    )
}

export default Navbar