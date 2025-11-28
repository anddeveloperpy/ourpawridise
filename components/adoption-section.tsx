'use client'

import { DogProfileCard } from './dog-profile-card'
import { Button } from '@/components/ui/button'
import { useState, useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { Dog } from '@/lib/dogs-data'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface AdoptionSectionProps {
  dogs: Dog[]
}

type FilterType = 'type' | 'size' | 'gender'

export function AdoptionSection({ dogs }: AdoptionSectionProps) {
  const [showAll, setShowAll] = useState(false)

  // Filter states
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedGender, setSelectedGender] = useState<string | null>(null)

  // Filter options
  const typeOptions = ['Perro', 'Gato', 'Otro']
  const sizeOptions = ['Grande', 'Mediano', 'Pequeño', 'Mini']
  const genderOptions = ['Macho', 'Hembra']

  // Filter logic
  const filteredDogs = useMemo(() => {
    return dogs.filter(dog => {
      if (selectedType && dog.type !== selectedType) return false
      if (selectedSize && dog.sizeCategory !== selectedSize) return false
      if (selectedGender && dog.gender !== selectedGender) return false
      return true
    })
  }, [dogs, selectedType, selectedSize, selectedGender])

  const displayedDogs = showAll ? filteredDogs : filteredDogs.slice(0, 6)

  const clearFilters = () => {
    setSelectedType(null)
    setSelectedSize(null)
    setSelectedGender(null)
  }

  const hasActiveFilters = selectedType || selectedSize || selectedGender

  return (
    <section id="adopt" className="py-16 sm:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              Encuentra tu Compañero
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Perros esperando por un{' '}
            <span className="text-primary">hogar lleno de amor</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Cada uno de estos increíbles perros tiene una historia única y está listo para llenar tu vida de alegría, lealtad y amor incondicional.
          </p>
        </div>

        {/* Advanced Filters */}
        <div className="mb-8 space-y-4">
          {/* Compact Filter Bar */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm p-4">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">

              {/* Type Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Tipo:</span>
                <div className="flex gap-1.5">
                  {typeOptions.map((option) => (
                    <Badge
                      key={option}
                      variant={selectedType === option ? "default" : "outline"}
                      className={cn(
                        "cursor-pointer px-3 py-1 text-xs transition-all hover:scale-105",
                        selectedType === option
                          ? "bg-primary text-white border-primary shadow-md"
                          : "hover:border-primary/50 hover:bg-primary/5"
                      )}
                      onClick={() => setSelectedType(selectedType === option ? null : option)}
                    >
                      {option}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-6 bg-border/50" />

              {/* Gender Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Género:</span>
                <div className="flex gap-1.5">
                  {genderOptions.map((option) => (
                    <Badge
                      key={option}
                      variant={selectedGender === option ? "default" : "outline"}
                      className={cn(
                        "cursor-pointer px-3 py-1 text-xs transition-all hover:scale-105",
                        selectedGender === option
                          ? "bg-primary text-white border-primary shadow-md"
                          : "hover:border-primary/50 hover:bg-primary/5"
                      )}
                      onClick={() => setSelectedGender(selectedGender === option ? null : option)}
                    >
                      {option}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-6 bg-border/50" />

              {/* Size Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Tamaño:</span>
                <div className="flex gap-1.5">
                  {sizeOptions.map((option) => (
                    <Badge
                      key={option}
                      variant={selectedSize === option ? "default" : "outline"}
                      className={cn(
                        "cursor-pointer px-3 py-1 text-xs transition-all hover:scale-105",
                        selectedSize === option
                          ? "bg-primary text-white border-primary shadow-md"
                          : "hover:border-primary/50 hover:bg-primary/5"
                      )}
                      onClick={() => setSelectedSize(selectedSize === option ? null : option)}
                    >
                      {option}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Active Filters Summary & Clear */}
          {hasActiveFilters && (
            <div className="flex justify-center animate-in fade-in slide-in-from-top-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 gap-2 h-8"
              >
                <X className="w-3.5 h-3.5" />
                <span className="text-xs">Limpiar Filtros</span>
              </Button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="text-center mb-6 text-sm text-muted-foreground">
          Mostrando {filteredDogs.length} {filteredDogs.length === 1 ? 'resultado' : 'resultados'}
        </div>

        {/* Dogs Grid */}
        {filteredDogs.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {displayedDogs.map((dog) => (
              <DogProfileCard
                key={dog.id}
                {...dog}
                image={dog.images[0]}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/30 rounded-3xl border-2 border-dashed border-muted">
            <p className="text-xl text-muted-foreground font-medium">
              No encontramos mascotas con estos filtros 😢
            </p>
            <Button
              variant="link"
              onClick={clearFilters}
              className="mt-2 text-primary"
            >
              Ver todas las mascotas
            </Button>
          </div>
        )}

        {/* Show More Button */}
        {!showAll && filteredDogs.length > 6 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 shadow-md hover:shadow-lg transition-all"
            >
              Ver Más Mascotas ({filteredDogs.length - 6} más)
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
