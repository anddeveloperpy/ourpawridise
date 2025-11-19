import { ShelterCard } from './shelter-card'

const shelters = [
  {
    id: '1',
    name: 'Asociación Amigos de los Animales (AMA)',
    location: 'Ciudad de Guatemala',
    description: 'La organización se dedica a ayudar a mejorar la calidad de vida de los animales en Guatemala sin importar su estado, procedencia o apariencia.',
    image: '/Refugios/AMA.png',
    needs: [
      { icon: 'food' as const, label: 'Alimento' },
      { icon: 'medicine' as const, label: 'Medicina' },
      { icon: 'volunteers' as const, label: 'Voluntarios' },
    ],
    dogsCount: 45,
  },
  {
    id: '2',
    name: 'Asociación Guatemalteca Mano Amiga ',
    location: 'Ciudad de Guatemala',
    description: 'Esta asociación busca darle un hogar a los animales que están en calidad de abandono, ofreciéndoles cuidados veterinarios y afectividad, para luego darlos en adopción a familias.',
    image: '/Refugios/ManoAmiga.png',
    needs: [
      { icon: 'food' as const, label: 'Alimento' },
      { icon: 'blankets' as const, label: 'Cobijas' },
    ],
    dogsCount: 32,
  },
  {
    id: '3',
    name: 'Albergue Municipal de Mixco',
    location: 'Ciudad de Guatemala',
    description: 'Este refugio para perros es parte de los proyectos comunitarios de la municipalidad de Mixco. El albergue rescata perritos de la calle y les brinda la atención veterinaria que necesiten. ',
    image: '/Refugios/AlbergueMunicipal.png',
    needs: [
      { icon: 'medicine' as const, label: 'Medicina' },
      { icon: 'blankets' as const, label: 'Cobijas' },
      { icon: 'volunteers' as const, label: 'Voluntarios' },
    ],
    dogsCount: 28,
  },
  {
    id: '4',
    name: 'Animal Aware Guatemala',
    location: 'Sacatepequez',
    description: 'Esta organización sin fines de lucro opera en el sector de Sumpango, Sacatepéquez. Desde 1998 se dedican al rescate de animales maltratados y agredidos. ',
    image: '/Refugios/AnimalAware.png',
    needs: [
      { icon: 'food' as const, label: 'Alimento' },
      { icon: 'medicine' as const, label: 'Medicina' },
    ],
    dogsCount: 18,
  },
  {
    id: '5',
    name: 'Ayudando Huellitas',
    location: 'Ciudad de Guatemala',
    description: 'Son un grupo benéfico enfocado en el rescate de peludos maltratados en la calle. Están ubicados sobre la calzada Roosevelt a la altura del Centro Comercial Eskala. ',
    image: '/Refugios/AyudandoHuellitas.png',
    needs: [
      { icon: 'volunteers' as const, label: 'Voluntarios' },
      { icon: 'blankets' as const, label: 'Cobijas' },
    ],
    dogsCount: 15,
  }
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
