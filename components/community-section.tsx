'use client'

import { PostCard } from './post-card'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'

const posts = [
  {
    id: '1',
    author: {
      name: 'María González',
      avatar: '/placeholder.svg?key=uiozd',
      type: 'user' as const,
    },
    image: '/placeholder.svg?key=bq34t',
    caption: 'Hoy cumple 1 año desde que adopté a Max del Refugio Esperanza Canina. Ha sido el mejor año de mi vida. Gracias por darme la oportunidad de ser su mamá. ❤️ #AdoptaNoCompres',
    likes: 234,
    comments: 42,
    timeAgo: 'Hace 2 horas',
    isLiked: false,
  },
  {
    id: '2',
    author: {
      name: 'Refugio Esperanza Canina',
      avatar: '/placeholder.svg?key=p84b2',
      type: 'shelter' as const,
    },
    image: '/placeholder.svg?key=4j0c4',
    caption: 'Conoce a estos 3 angelitos que fueron rescatados esta semana. Están buscando hogar temporal mientras se recuperan. Si puedes ayudar, contáctanos. 🐾',
    likes: 189,
    comments: 56,
    timeAgo: 'Hace 5 horas',
    isLiked: true,
  },
  {
    id: '3',
    author: {
      name: 'Carlos Ramírez',
      avatar: '/placeholder.svg?key=cv7x9',
      type: 'user' as const,
    },
    image: '/placeholder.svg?key=2hne8',
    caption: 'Luna disfrutando su primer día en la playa. No puedo creer que alguien la abandonó. Es la perrita más amorosa del mundo. 🌊🐕',
    likes: 412,
    comments: 78,
    timeAgo: 'Hace 1 día',
    isLiked: false,
  },
  {
    id: '4',
    author: {
      name: 'Patitas Felices GT',
      avatar: '/placeholder.svg?key=9mbds',
      type: 'shelter' as const,
    },
    caption: 'Gracias a todos los que nos apoyaron en la campaña de alimento. Logramos recolectar 500kg de comida para nuestros perritos. Esta comunidad es increíble. 💙',
    likes: 567,
    comments: 93,
    timeAgo: 'Hace 1 día',
    isLiked: true,
  },
  {
    id: '5',
    author: {
      name: 'Ana Sofía López',
      avatar: '/placeholder.svg?key=pqc0t',
      type: 'user' as const,
    },
    image: '/placeholder.svg?key=9xmne',
    caption: 'Mi hijo y Rocky son mejores amigos. Adoptar fue la mejor decisión que tomamos como familia. Gracias Amor Sin Fronteras por esta bendición. 🙏',
    likes: 298,
    comments: 34,
    timeAgo: 'Hace 2 días',
    isLiked: false,
  },
  {
    id: '6',
    author: {
      name: 'Amor Sin Fronteras',
      avatar: '/placeholder.svg?key=7bq3j',
      type: 'shelter' as const,
    },
    image: '/placeholder.svg?key=2xl8k',
    caption: '¡Bella encontró su hogar para siempre! Después de 6 meses en el refugio, finalmente tiene una familia que la ama. Momentos como este hacen que todo valga la pena. 🏡❤️',
    likes: 823,
    comments: 127,
    timeAgo: 'Hace 3 días',
    isLiked: true,
  },
]

export function CommunitySection() {
  return (
    <section id="community" className="py-16 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-lavender/10 text-lavender rounded-full text-sm font-semibold">
              Comunidad OurPawradise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comparte tu{' '}
            <span className="text-primary">Historia de Amor</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-8">
            Una comunidad de personas compasivas compartiendo momentos especiales con sus perros rescatados.
          </p>

          {/* Create Post Button */}
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Compartir Historia
          </Button>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8"
          >
            Cargar Más Historias
          </Button>
        </div>
      </div>
    </section>
  )
}
