'use client'

import { DogProfileCard } from './dog-profile-card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { dogs } from '@/lib/dogs-data'

export function AdoptionSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedDogs = showAll ? dogs : dogs.slice(0, 6)

  return (
    <section id="adopt" className="py-16 sm:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              Encuentra tu Compañero
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Perros Esperando por un{' '}
            <span className="text-primary">Hogar Lleno de Amor</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Cada uno de estos increíbles perros tiene una historia única y está listo para llenar tu vida de alegría, lealtad y amor incondicional.
          </p>
        </div>

        {/* Filter Badges - Placeholder for future functionality */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-md">
            Todos
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-md">
            Pequeños
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-md">
            Medianos
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-md">
            Grandes
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-md">
            Cachorros
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-md">
            Seniors
          </Badge>
        </div>

        {/* Dogs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {displayedDogs.map((dog) => (
            <DogProfileCard
              key={dog.id}
              {...dog}
              image={dog.images[0]} // Map first image to 'image' prop
            />
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && dogs.length > 6 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 shadow-md hover:shadow-lg transition-all"
            >
              Ver Más Perros ({dogs.length - 6} más)
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
