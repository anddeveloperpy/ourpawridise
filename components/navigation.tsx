'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { BiHomeHeart } from "react-icons/bi";
import { FaDog } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";



export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 relative rounded-full overflow-hidden group-hover:scale-110 transition-transform">
              <Image
                src="/Logos/LogoOurPawradise.png"
                alt="OurPawradise Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold text-foreground">
              Our<span className="text-primary">Pawradise</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/shelters" className="group flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium relative">
              <BiHomeHeart className="w-4 h-4" />
              Refugios
            </Link>
            <Link href="/adoption" className="group flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium relative">
              <FaDog className="w-4 h-4" />
              Adopción
            </Link>
            <Link href="/community" className="group flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium relative">
              <FaUsers className="w-4 h-4" />
              Comunidad
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border animate-in slide-in-from-top-2">
            <div className="flex items-center gap-4 ">
              <Link
                href="/shelters"
                className="flex items-center gap-2 py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <BiHomeHeart className="w-4 h-4" />
                Refugios
              </Link>
            </div>
            <Link
              href="/adoption"
              className="flex items-center gap-2 py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaDog className="w-4 h-4" />
              Adopción
            </Link>
            <Link
              href="/community"
              className="flex items-center gap-2 py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaUsers className="w-4 h-4" />
              Comunidad
            </Link>

          </div>
        )}
      </div>
    </nav>
  )
}
