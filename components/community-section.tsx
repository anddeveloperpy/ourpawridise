'use client'

import { PostCard } from './post-card'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import { communityPosts } from '@/lib/community-data'

export function CommunitySection() {
  return (
    <section id="community" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityPosts.map((post) => (
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
