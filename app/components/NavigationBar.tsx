"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/#products-and-services" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Giving Back", href: "/#giving-back" },
  { name: "Contact", href: "/contact" },
]

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-premium-black bg-opacity-90 fixed w-full z-50 top-0 left-0 border-b border-premium-gold">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/37-PwvDSg0lVcyoYVd1ib8viOzWTbv5ZD.png"
            alt="Fares Anbar Logo"
            width={30}
            height={30}
            className="brightness-0 invert mr-3"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-premium-gold">Fares Anbar</span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-premium-gold rounded-lg md:hidden hover:bg-premium-gold hover:text-premium-black focus:outline-none focus:ring-2 focus:ring-premium-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-premium-gold rounded-lg bg-premium-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 pl-3 pr-4 text-premium-gold rounded hover:bg-premium-gold hover:text-premium-black md:hover:bg-transparent md:border-0 md:hover:text-premium-light-gold md:p-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

