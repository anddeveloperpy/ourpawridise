'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Our<span className="text-primary">Pawradise</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/shelters" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Refugios
            </Link>
            <Link href="/adoption" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Adopción
            </Link>
            <Link href="/community" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Comunidad
            </Link>
            <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all">
              Ayuda Ahora
            </Button>
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
            <Link 
              href="/shelters" 
              className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Refugios
            </Link>
            <Link 
              href="/adoption" 
              className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Adopción
            </Link>
            <Link 
              href="/community" 
              className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Comunidad
            </Link>
            <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full shadow-md">
              Ayuda Ahora
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
