'use client'

import { DogProfileCard } from './dog-profile-card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

const dogs = [
  {
    id: '1',
    name: 'Luna',
    breed: 'Labrador Mix',
    age: '2 años',
    size: 'Mediano',
    temperament: 'Amigable',
    color: 'Dorado',
    healthStatus: 'Vacunada',
    image: '/friendly-golden-labrador-rescue-dog.jpg',
    shelter: { name: 'Refugio Esperanza Canina', id: '1' },
    tags: [
      { label: 'Amigable con niños', variant: 'default' as const },
      { label: 'Activa', variant: 'secondary' as const },
      { label: 'Esterilizada', variant: 'accent' as const },
    ],
  },
  {
    id: '2',
    name: 'Max',
    breed: 'Pastor Alemán',
    age: '3 años',
    size: 'Grande',
    temperament: 'Leal',
    color: 'Negro y café',
    healthStatus: 'Vacunado',
    image: '/german-shepherd-rescue-dog-loyal.jpg',
    shelter: { name: 'Patitas Felices GT', id: '2' },
    tags: [
      { label: 'Entrenado', variant: 'default' as const },
      { label: 'Guardián', variant: 'secondary' as const },
      { label: 'Desparasitado', variant: 'accent' as const },
    ],
  },
  {
    id: '3',
    name: 'Bella',
    breed: 'Beagle Mix',
    age: '1 año',
    size: 'Pequeño',
    temperament: 'Juguetona',
    color: 'Tricolor',
    healthStatus: 'Vacunada',
    image: '/playful-beagle-puppy-rescue-dog.jpg',
    shelter: { name: 'Amor Sin Fronteras', id: '3' },
    tags: [
      { label: 'Amigable con gatos', variant: 'default' as const },
      { label: 'Energética', variant: 'secondary' as const },
      { label: 'Microchip', variant: 'accent' as const },
    ],
  },
  {
    id: '4',
    name: 'Rocky',
    breed: 'Pitbull Mix',
    age: '4 años',
    size: 'Grande',
    temperament: 'Cariñoso',
    color: 'Gris',
    healthStatus: 'Vacunado',
    image: '/loving-gray-pitbull-rescue-dog.jpg',
    shelter: { name: 'Rescate y Amor', id: '4' },
    tags: [
      { label: 'Tranquilo', variant: 'default' as const },
      { label: 'Obediente', variant: 'secondary' as const },
      { label: 'Esterilizado', variant: 'accent' as const },
    ],
  },
  {
    id: '5',
    name: 'Coco',
    breed: 'Chihuahua',
    age: '5 años',
    size: 'Pequeño',
    temperament: 'Alerta',
    color: 'Café',
    healthStatus: 'Vacunado',
    image: '/brown-chihuahua-rescue-dog-alert.jpg',
    shelter: { name: 'Hogar Temporal GT', id: '5' },
    tags: [
      { label: 'Apto para apartamento', variant: 'default' as const },
      { label: 'Leal', variant: 'secondary' as const },
      { label: 'Vacunado', variant: 'accent' as const },
    ],
  },
  {
    id: '6',
    name: 'Toby',
    breed: 'Golden Retriever',
    age: '6 años',
    size: 'Grande',
    temperament: 'Gentil',
    color: 'Dorado',
    healthStatus: 'Vacunado',
    image: '/gentle-golden-retriever-senior-rescue-dog.jpg',
    shelter: { name: 'Segunda Oportunidad', id: '6' },
    tags: [
      { label: 'Amigable con todos', variant: 'default' as const },
      { label: 'Tranquilo', variant: 'secondary' as const },
      { label: 'Senior', variant: 'accent' as const },
    ],
  },
  {
    id: '7',
    name: 'Lola',
    breed: 'Husky Siberiano',
    age: '2 años',
    size: 'Mediano',
    temperament: 'Aventurera',
    color: 'Blanco y gris',
    healthStatus: 'Vacunada',
    image: '/siberian-husky-rescue-dog-adventurous.jpg',
    shelter: { name: 'Refugio Esperanza Canina', id: '1' },
    tags: [
      { label: 'Activa', variant: 'default' as const },
      { label: 'Necesita ejercicio', variant: 'secondary' as const },
      { label: 'Esterilizada', variant: 'accent' as const },
    ],
  },
  {
    id: '8',
    name: 'Bruno',
    breed: 'Rottweiler Mix',
    age: '3 años',
    size: 'Grande',
    temperament: 'Protector',
    color: 'Negro',
    healthStatus: 'Vacunado',
    image: '/protective-black-rottweiler-rescue-dog.jpg',
    shelter: { name: 'Patitas Felices GT', id: '2' },
    tags: [
      { label: 'Guardián', variant: 'default' as const },
      { label: 'Leal', variant: 'secondary' as const },
      { label: 'Entrenado', variant: 'accent' as const },
    ],
  },
  {
    id: '9',
    name: 'Mía',
    breed: 'Poodle Mix',
    age: '1 año',
    size: 'Pequeño',
    temperament: 'Dulce',
    color: 'Blanco',
    healthStatus: 'Vacunada',
    image: '/sweet-white-poodle-mix-rescue-dog.jpg',
    shelter: { name: 'Amor Sin Fronteras', id: '3' },
    tags: [
      { label: 'Hipoalergénica', variant: 'default' as const },
      { label: 'Cariñosa', variant: 'secondary' as const },
      { label: 'Microchip', variant: 'accent' as const },
    ],
  },
]

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
            <DogProfileCard key={dog.id} {...dog} />
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
