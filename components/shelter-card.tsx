import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Heart, DogIcon, Package, Stethoscope, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ShelterNeed {
  icon: 'food' | 'medicine' | 'blankets' | 'volunteers'
  label: string
}

interface ShelterCardProps {
  id: string
  name: string
  location: string
  description: string
  image: string
  needs: ShelterNeed[]
  dogsCount: number
}

const needIcons = {
  food: Package,
  medicine: Stethoscope,
  blankets: Heart,
  volunteers: Users,
}

export function ShelterCard({ id, name, location, description, image, needs, dogsCount }: ShelterCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/95 text-primary hover:bg-white border-0 shadow-md">
            <DogIcon className="w-3 h-3 mr-1" />
            {dogsCount} perros
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {name}
        </CardTitle>
        <CardDescription className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          {location}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Needs Icons */}
        <div className="flex flex-wrap gap-2">
          {needs.map((need, idx) => {
            const Icon = needIcons[need.icon]
            return (
              <Badge 
                key={idx} 
                variant="outline" 
                className="border-accent/30 text-accent/80 hover:bg-accent/10 transition-colors"
              >
                <Icon className="w-3 h-3 mr-1" />
                {need.label}
              </Badge>
            )
          })}
        </div>
        
        <Link href={`/shelters/${id}`}>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full shadow-md hover:shadow-lg transition-all">
            Ver Perfil del Refugio
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
