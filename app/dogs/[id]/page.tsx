import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Share2, MapPin, Calendar, Ruler, Palette, Thermometer, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/footer'

// Mock data - in a real app this would come from a database
const dogData: Record<string, any> = {
  '1': {
    name: 'Luna',
    breed: 'Labrador Mix',
    age: '2 años',
    size: 'Mediano (22kg)',
    temperament: 'Amigable y sociable',
    color: 'Dorado',
    healthStatus: 'Excelente',
    gender: 'Hembra',
    images: [
      '/friendly-golden-labrador-rescue-dog-portrait.jpg',
      '/labrador-playing-with-ball.jpg',
      '/labrador-resting-outdoor.jpg',
    ],
    story: 'Luna fue rescatada de la calle cuando apenas era una cachorra. A pesar de su difícil comienzo, ha demostrado ser una perrita increíblemente amorosa y resiliente. Le encanta jugar con otros perros y es extremadamente cariñosa con las personas. Luna busca una familia activa que le brinde el amor y ejercicio que necesita para ser feliz.',
    personality: [
      'Extremadamente amigable con personas y otros perros',
      'Le encanta jugar y hacer ejercicio',
      'Obediente y fácil de entrenar',
      'Perfecta para familias con niños',
      'Necesita caminatas diarias y espacio para jugar',
    ],
    healthInfo: [
      { icon: CheckCircle2, label: 'Vacunada', status: 'Completo' },
      { icon: CheckCircle2, label: 'Esterilizada', status: 'Sí' },
      { icon: CheckCircle2, label: 'Desparasitada', status: 'Sí' },
      { icon: CheckCircle2, label: 'Microchip', status: 'Sí' },
    ],
    tags: [
      { label: 'Amigable con niños', variant: 'default' },
      { label: 'Amigable con perros', variant: 'default' },
      { label: 'Activa', variant: 'secondary' },
      { label: 'Entrenada', variant: 'accent' },
    ],
    shelter: {
      id: '1',
      name: 'Refugio Esperanza Canina',
      location: 'Antigua Guatemala',
      phone: '+502 1234-5678',
    },
    adoptionFee: 'Q500 (incluye vacunas y esterilización)',
  },
}

export async function generateStaticParams() {
  // Return all dog IDs that should be pre-rendered at build time
  return Object.keys(dogData).map((id) => ({
    id: id,
  }))
}

export default async function DogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const dog = dogData[id] || dogData['1']

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={dog.images[0] || "/placeholder.svg"}
                  alt={dog.name}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-3 bg-white/95 rounded-full shadow-lg hover:bg-accent hover:scale-110 transition-all group">
                    <Heart className="w-5 h-5 text-accent group-hover:fill-white group-hover:text-white" />
                  </button>
                  <button className="p-3 bg-white/95 rounded-full shadow-lg hover:bg-primary hover:scale-110 transition-all group">
                    <Share2 className="w-5 h-5 text-primary group-hover:text-white" />
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {dog.images.slice(1).map((img: string, idx: number) => (
                  <div key={idx} className="relative h-32 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${dog.name} ${idx + 2}`}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Story */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">La Historia de {dog.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{dog.story}</p>
              </CardContent>
            </Card>

            {/* Personality */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Personalidad y Comportamiento</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {dog.personality.map((trait: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{trait}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Health Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Información de Salud</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {dog.healthInfo.map((info: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <info.icon className="w-6 h-6 text-primary" />
                      <div>
                        <div className="font-medium text-foreground">{info.label}</div>
                        <div className="text-sm text-muted-foreground">{info.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="sticky top-20 border-2 border-primary/20 shadow-xl">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-2">{dog.name}</CardTitle>
                    <p className="text-lg text-muted-foreground">{dog.breed}</p>
                  </div>
                  <Badge className="bg-primary text-white text-sm">
                    Disponible
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Quick Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <span className="text-muted-foreground">Edad:</span>
                      <span className="ml-2 font-medium text-foreground">{dog.age}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Ruler className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <span className="text-muted-foreground">Tamaño:</span>
                      <span className="ml-2 font-medium text-foreground">{dog.size}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Palette className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <span className="text-muted-foreground">Color:</span>
                      <span className="ml-2 font-medium text-foreground">{dog.color}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Thermometer className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <span className="text-muted-foreground">Salud:</span>
                      <span className="ml-2 font-medium text-foreground">{dog.healthStatus}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="text-sm text-muted-foreground mb-1">Cuota de adopción:</div>
                  <div className="font-semibold text-foreground">{dog.adoptionFee}</div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {dog.tags.map((tag: any, idx: number) => (
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

                {/* CTA Buttons */}
                <div className="space-y-3 pt-4">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all text-lg py-6">
                    <Heart className="w-5 h-5 mr-2 fill-white" />
                    Quiero Adoptar a {dog.name}
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full">
                    Enviar Mensaje
                  </Button>
                </div>

                {/* Shelter Info */}
                <div className="border-t border-border pt-6">
                  <div className="text-sm text-muted-foreground mb-3">Refugio responsable:</div>
                  <Link href={`/shelters/${dog.shelter.id}`} className="group">
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {dog.shelter.name}
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {dog.shelter.location}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {dog.shelter.phone}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
