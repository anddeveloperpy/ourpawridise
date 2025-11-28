import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Ruler, Palette, Thermometer, CheckCircle2, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { getDogById } from '@/lib/api/dogs'
import { notFound } from 'next/navigation'
import { ImageGallery } from '@/components/image-gallery'

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function DogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const dog = await getDogById(id)

  if (!dog) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <ImageGallery images={dog.images} name={dog.name} gender={dog.gender} />

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
                      <CheckCircle2 className="w-6 h-6 text-primary" />
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
                  <div className="font-semibold text-foreground">
                    {dog.adoptionFee.toLowerCase().includes('gratis')
                      ? dog.adoptionFee.charAt(0).toUpperCase() + dog.adoptionFee.slice(1).toLowerCase()
                      : `Q.${dog.adoptionFee.replace(/\D/g, '')}`}
                  </div>
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
                    Adoptar
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
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                        <Image
                          src={dog.shelter.image || '/placeholder.svg'}
                          alt={dog.shelter.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
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
