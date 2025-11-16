import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Mail, Heart, ExternalLink, DogIcon, Package, Stethoscope, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/footer'

// Mock data - in a real app this would come from a database
const shelterData: Record<string, any> = {
  '1': {
    name: 'Refugio Esperanza Canina',
    location: 'Antigua Guatemala',
    phone: '+502 1234-5678',
    email: 'contacto@esperanzacanina.org',
    description: 'Refugio Esperanza Canina nace del amor incondicional hacia los animales. Desde 2015, hemos dedicado nuestras vidas a rescatar, rehabilitar y encontrar hogares para perros abandonados y maltratados en Antigua Guatemala y sus alrededores.',
    mission: 'Nuestra misión es crear un mundo donde cada perro tenga un hogar amoroso y una vida digna. Trabajamos para educar a la comunidad sobre tenencia responsable y promover la adopción en lugar de la compra.',
    bannerImage: '/dog-shelter-outdoor-facility-antigua-guatemala.jpg',
    needs: [
      { icon: 'food', label: 'Alimento para perros', urgent: true },
      { icon: 'medicine', label: 'Medicamentos y vacunas', urgent: true },
      { icon: 'blankets', label: 'Cobijas y camas', urgent: false },
      { icon: 'volunteers', label: 'Voluntarios para paseos', urgent: true },
    ],
    availableDogs: 12,
    totalRescued: 230,
    adoptionRate: 85,
  },
}

export async function generateStaticParams() {
  // Return all shelter IDs that should be pre-rendered at build time
  return Object.keys(shelterData).map((id) => ({
    id: id,
  }))
}

export default async function ShelterDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const shelter = shelterData[id] || shelterData['1']

  const needIcons: Record<string, any> = {
    food: Package,
    medicine: Stethoscope,
    blankets: Heart,
    volunteers: Users,
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Banner */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <Image
          src={shelter.bannerImage || "/placeholder.svg"}
          alt={shelter.name}
          width={1200}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        {/* Header Card */}
        <Card className="mb-8 shadow-xl border-2">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                  {shelter.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{shelter.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{shelter.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{shelter.email}</span>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="flex flex-wrap gap-6 mt-6">
                  <div>
                    <div className="text-2xl font-bold text-primary">{shelter.totalRescued}+</div>
                    <div className="text-sm text-muted-foreground">Rescatados</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">{shelter.adoptionRate}%</div>
                    <div className="text-sm text-muted-foreground">Tasa de Adopción</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">{shelter.availableDogs}</div>
                    <div className="text-sm text-muted-foreground">Disponibles</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 shadow-lg">
                  <Heart className="w-4 h-4 mr-2 fill-white" />
                  Donar Ahora
                </Button>
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6">
                  Contactar Refugio
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mission */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Nuestra Historia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {shelter.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {shelter.mission}
                </p>
              </CardContent>
            </Card>

            {/* Available Dogs */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Perros en Adopción</CardTitle>
                  <Badge className="bg-primary text-white">
                    <DogIcon className="w-3 h-3 mr-1" />
                    {shelter.availableDogs} disponibles
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Link key={i} href={`/dogs/${i}`}>
                      <div className="group relative rounded-2xl overflow-hidden aspect-square hover:shadow-xl transition-all">
                        <Image
                          src={`/adoptable-rescued-dog-.jpg?height=300&width=300&query=adoptable rescued dog ${i}`}
                          alt={`Dog ${i}`}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                          <div className="font-semibold">Ver Perfil</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/#adopt">
                  <Button variant="outline" className="w-full mt-6 rounded-full">
                    Ver Todos los Perros
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Needs Card */}
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent fill-accent" />
                  Necesidades Urgentes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {shelter.needs.map((need: any, idx: number) => {
                  const Icon = needIcons[need.icon]
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        need.urgent ? 'bg-accent/5 border border-accent/20' : 'bg-muted/50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${need.urgent ? 'text-accent' : 'text-muted-foreground'}`} />
                      <div className="flex-1">
                        <div className={`text-sm font-medium ${need.urgent ? 'text-accent' : 'text-foreground'}`}>
                          {need.label}
                        </div>
                      </div>
                      {need.urgent && (
                        <Badge variant="destructive" className="text-xs">
                          Urgente
                        </Badge>
                      )}
                    </div>
                  )
                })}
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-full mt-4">
                  Contribuir
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Enlaces Rápidos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Ser Voluntario
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  Programa de Apadrinamiento
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="w-4 h-4 mr-2" />
                  Lista de Deseos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
