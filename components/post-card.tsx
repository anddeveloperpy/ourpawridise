'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Heart, MessageCircle, Share2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface PostCardProps {
  id: string
  author: {
    name: string
    avatar: string
    type: 'user' | 'shelter'
  }
  image?: string
  caption: string
  likes: number
  comments: number
  timeAgo: string
  isLiked?: boolean
}

export function PostCard({
  id,
  author,
  image,
  caption,
  likes: initialLikes,
  comments,
  timeAgo,
  isLiked: initialIsLiked = false,
}: PostCardProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked)
  const [likes, setLikes] = useState(initialLikes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 border-2 border-primary/20">
            <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-foreground">{author.name}</h3>
              {author.type === 'shelter' && (
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  Refugio
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{timeAgo}</p>
          </div>
        </div>
      </CardHeader>

      {image && (
        <div className="relative w-full aspect-square max-h-[500px] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt="Post image"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <CardContent className="pt-4 space-y-4">
        {/* Caption */}
        <p className="text-foreground leading-relaxed">{caption}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="font-medium">
            {likes} {likes === 1 ? 'me gusta' : 'me gusta'}
          </span>
          <span>•</span>
          <span>
            {comments} {comments === 1 ? 'comentario' : 'comentarios'}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-2 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            className={`flex-1 gap-2 ${isLiked ? 'text-accent' : 'text-muted-foreground'} hover:text-accent transition-colors`}
            onClick={handleLike}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-accent' : ''}`} />
            Me Gusta
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 gap-2 text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="w-5 h-5" />
            Comentar
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 gap-2 text-muted-foreground hover:text-secondary transition-colors">
            <Share2 className="w-5 h-5" />
            Compartir
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
