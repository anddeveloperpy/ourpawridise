import { ShelterCard } from './shelter-card'

const shelters = [
  {
    id: '1',
    name: 'Refugio Esperanza Canina',
    location: 'Antigua Guatemala',
    description: 'Refugio dedicado al rescate y rehabilitación de perros en situación de calle. Operamos desde 2015 con amor y dedicación.',
    image: '/dog-shelter-building-guatemala-antigua.jpg',
    needs: [
      { icon: 'food' as const, label: 'Alimento' },
      { icon: 'medicine' as const, label: 'Medicina' },
      { icon: 'volunteers' as const, label: 'Voluntarios' },
    ],
    dogsCount: 45,
  },
  {
    id: '2',
    name: 'Patitas Felices GT',
    location: 'Ciudad de Guatemala',
    description: 'ONG enfocada en rescate urbano y adopción responsable. Trabajamos con comunidades para educar sobre tenencia responsable.',
    image: '/happy-dogs-in-shelter-yard-playing.jpg',
    needs: [
      { icon: 'food' as const, label: 'Alimento' },
      { icon: 'blankets' as const, label: 'Cobijas' },
    ],
    dogsCount: 32,
  },
  {
    id: '3',
    name: 'Amor Sin Fronteras',
    location: 'Quetzaltenango',
    description: 'Refugio rural que rescata perros abandonados en las montañas. Proveemos cuidado médico y búsqueda de hogares permanentes.',
    image: '/rural-dog-shelter-in-mountains-guatemala.jpg',
    needs: [
      { icon: 'medicine' as const, label: 'Medicina' },
      { icon: 'blankets' as const, label: 'Cobijas' },
      { icon: 'volunteers' as const, label: 'Voluntarios' },
    ],
    dogsCount: 28,
  },
  {
    id: '4',
    name: 'Rescate y Amor',
    location: 'Escuintla',
    description: 'Pequeño refugio familiar que opera con el corazón. Cada perro recibe atención personalizada y mucho cariño.',
    image: '/small-family-dog-shelter-caring-volunteers.jpg',
    needs: [
      { icon: 'food' as const, label: 'Alimento' },
      { icon: 'medicine' as const, label: 'Medicina' },
    ],
    dogsCount: 18,
  },
  {
    id: '5',
    name: 'Hogar Temporal GT',
    location: 'Sololá',
    description: 'Red de hogares temporales que cuidan perros rescatados mientras encuentran su familia definitiva.',
    image: '/foster-home-with-rescued-dogs.jpg',
    needs: [
      { icon: 'volunteers' as const, label: 'Voluntarios' },
      { icon: 'blankets' as const, label: 'Cobijas' },
    ],
    dogsCount: 15,
  },
  {
    id: '6',
    name: 'Segunda Oportunidad',
    location: 'Cobán',
    description: 'Rescatamos perros de la calle y les damos una segunda oportunidad de vida. Cada rescate es una historia de esperanza.',
    image: '/rescued-street-dogs-getting-care.jpg',
    needs: [
      { icon: 'food' as const, label: 'Alimento' },
      { icon: 'medicine' as const, label: 'Medicina' },
      { icon: 'volunteers' as const, label: 'Voluntarios' },
    ],
    dogsCount: 38,
  },
]

export function SheltersSection() {
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
            Apoya a Refugios que{' '}
            <span className="text-primary">Transforman Vidas</span>
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
