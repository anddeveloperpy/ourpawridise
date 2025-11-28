import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, MapPin } from 'lucide-react'
import { FaMars, FaVenus } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

interface DogTag {
  label: string
  variant?: 'default' | 'secondary' | 'accent'
}

interface DogProfileCardProps {
  id: string
  name: string
  breed: string
  age: string
  size: string
  temperament: string
  color: string
  healthStatus: string
  image: string
  gender: 'Macho' | 'Hembra'
  shelter: {
    name: string
    id: string
  }
  tags: DogTag[]
}

export function DogProfileCard({
  id,
  name,
  breed,
  age,
  size,
  temperament,
  color,
  healthStatus,
  image,
  gender,
  shelter,
  tags,
}: DogProfileCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-border/50 hover:border-primary/30">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Link href={`/dogs/${id}`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>
        <div className="absolute top-4 right-4 p-2 bg-white/95 rounded-full shadow-lg transition-all">
          {gender === 'Macho' ? (
            <FaMars className="w-5 h-5 text-blue-500" />
          ) : (
            <FaVenus className="w-5 h-5 text-pink-500" />
          )}
        </div>

        {/* Health Badge */}
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-primary/95 text-white border-0 shadow-md">
            {healthStatus}
          </Badge>
        </div>
      </div>

      <CardHeader className="space-y-3 pb-3">
        {/* Name & Basic Info */}
        <div>
          <Link href={`/dogs/${id}`}>
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground mt-1">
            {breed} • {age} • {size}
          </p>
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-muted-foreground">Temperamento:</span>
            <p className="font-medium text-foreground">{temperament}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Color:</span>
            <p className="font-medium text-foreground">{color}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className={
                tag.variant === 'accent'
                  ? 'border-accent/40 text-accent bg-accent/5'
                  : tag.variant === 'secondary'
                    ? 'border-secondary/40 text-secondary bg-secondary/5'
                    : 'border-primary/40 text-primary bg-primary/5'
              }
            >
              {tag.label}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-3 pt-0">
        {/* Shelter Info */}
        <Link
          href={`/shelters/${shelter.id}`}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <MapPin className="w-4 h-4" />
          <span>{shelter.name}</span>
        </Link>

        {/* CTA Button */}
        <Link href={`/dogs/${id}`}>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full shadow-md hover:shadow-lg transition-all">
            Contactar para Adoptar
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
