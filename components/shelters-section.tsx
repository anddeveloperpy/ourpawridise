import { ShelterCard } from './shelter-card'
import { Shelter } from '@/lib/shelters-data'

interface SheltersSectionProps {
  shelters: Shelter[]
}

export function SheltersSection({ shelters }: SheltersSectionProps) {
  return (
    <section id="shelters" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
              Refugios Asociados
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Apoya a refugios que{' '}
            <span className="text-primary">transforman vidas</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Cada refugio trabaja incansablemente para rescatar, rehabilitar y encontrar hogares amorosos para perros en necesidad.
          </p>
        </div>

        {/* Shelters Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {shelters.map((shelter) => (
            <ShelterCard key={shelter.id} {...shelter} />
          ))}
        </div>
      </div>
    </section>
  )
}
