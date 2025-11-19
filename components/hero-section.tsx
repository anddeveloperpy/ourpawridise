import { Button } from '@/components/ui/button'
import { Heart, Home, Users } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-50 pointer-events-none" />
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="paw-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M30,40 Q30,35 35,35 Q40,35 40,40 Q40,45 35,45 Q30,45 30,40 M25,30 Q25,27 27,27 Q29,27 29,30 Q29,33 27,33 Q25,33 25,30 M35,28 Q35,25 37,25 Q39,25 39,28 Q39,31 37,31 Q35,31 35,28 M22,40 Q22,37 24,37 Q26,37 26,40 Q26,43 24,43 Q22,43 22,40 M38,40 Q38,37 40,37 Q42,37 42,40 Q42,43 40,43 Q38,43 38,40" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#paw-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                <Heart className="w-4 h-4 fill-primary" />
                Adopta, No Compres
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Ayuda a perritos rescatados a encontrar{' '}
              <span className="text-primary">amor</span> y una{' '}
              <span className="text-secondary">nueva vida</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
              Conectamos personas compasivas en Guatemala con refugios de perros y mascotas rescatadas que buscan un hogar lleno de amor.
            </p>



            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Perros Adoptados</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-secondary">25+</div>
                <div className="text-sm text-muted-foreground">Refugios Activos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Miembros</div>
              </div>
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="Shows/Show0.jpg"
                  alt="Happy rescued dog"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Small Images */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="Shows/IMG_6737.jpg"
                  alt="Rescued puppy playing"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="Shows/IMG_6739.jpg"
                  alt="Person hugging dog"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            <span className="font-semibold text-foreground">Nuestra misión:</span> Crear una comunidad compasiva que transforme la vida de perros rescatados en Guatemala, conectando refugios con familias que buscan dar amor incondicional.
          </p>
        </div>
      </div>
    </section>
  )
}
