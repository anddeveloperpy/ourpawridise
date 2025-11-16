'use client'

import Link from 'next/link'
import { Home, Building2, Heart, Users } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function MobileNav() {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/', icon: Home, label: 'Inicio' },
    { href: '/shelters', icon: Building2, label: 'Refugios' },
    { href: '/adoption', icon: Heart, label: 'Adoptar' },
    { href: '/community', icon: Users, label: 'Comunidad' },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-lg">
      <div className="grid grid-cols-4 gap-1 px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
