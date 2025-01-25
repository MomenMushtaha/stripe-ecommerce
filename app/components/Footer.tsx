import { Instagram, Facebook, Youtube, Mail, Users } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-premium-black py-12 border-t border-premium-gold">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="font-playfair text-sm text-premium-gold mb-4 md:mb-0">
          &copy; 2025 Fares Anbar. All rights reserved. | Email: info@faresanbar.co
        </p>
        <div className="flex items-center space-x-6">
          <a
            href="https://www.instagram.com/faressol2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-premium-gold hover:text-premium-light-gold transition-colors duration-300 flex items-center"
            aria-label="Personal Instagram"
          >
            <Instagram size={20} />
            <span className="ml-1 text-xs">Personal</span>
          </a>
          <a
            href="https://www.instagram.com/f.a_rhythms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-premium-gold hover:text-premium-light-gold transition-colors duration-300 flex items-center"
            aria-label="Band Instagram"
          >
            <Users size={20} />
            <span className="ml-1 text-xs">Band</span>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-premium-gold hover:text-premium-light-gold transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-premium-gold hover:text-premium-light-gold transition-colors duration-300"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <Link
            href="/contact"
            className="text-premium-gold hover:text-premium-light-gold transition-colors duration-300"
            aria-label="Contact Us"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

