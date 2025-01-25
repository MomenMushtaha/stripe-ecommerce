"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Home, ShoppingBag, Headphones, User, Heart, Mail } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "/#products-and-services", icon: ShoppingBag },
  { name: "Services", href: "/#services", icon: Headphones },
  { name: "About", href: "/#about", icon: User },
  { name: "Giving Back", href: "/#giving-back", icon: Heart },
  { name: "Contact", href: "/contact", icon: Mail },
]

export default function SideNavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-premium-black text-premium-gold rounded-full md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-premium-black bg-opacity-90 text-premium-gold transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-40 md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-premium-gold">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/37-PwvDSg0lVcyoYVd1ib8viOzWTbv5ZD.png"
                alt="Fares Anbar Logo"
                width={30}
                height={30}
                className="brightness-0 invert mr-3"
              />
              <span className="text-xl font-semibold whitespace-nowrap">Fares Anbar</span>
            </Link>
          </div>
          <ul className="flex-grow py-4">
            {navItems.map((item) => (
              <li key={item.name} className="mb-2">
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-2 hover:bg-premium-gold hover:text-premium-black transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3" size={20} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t border-premium-gold text-center text-sm">&copy; 2025 Fares Anbar</div>
        </div>
      </nav>
    </>
  )
}

