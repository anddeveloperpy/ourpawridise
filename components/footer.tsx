import Link from 'next/link'
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Our<span className="text-primary">Pawradise</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Fundado por Jose Andres Hernandez el 10 de noviembre del 2025 en Guatemala con el fin de conectar personas con perros rescatados..
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#shelters" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Refugios
                </Link>
              </li>
              <li>
                <Link href="/#adopt" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Adoptar un Perro
                </Link>
              </li>
              <li>
                <Link href="/#community" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Comunidad
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Ser Voluntario
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/adoption-guide" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Guía de Adopción
                </Link>
              </li>
              <li>
                <Link href="/care-tips" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Consejos de Cuidado
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Historias de Éxito
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground mb-4">Mantente Conectado</h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@ourpawradise.org</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+502 1234-5678</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Ciudad de Guatemala, Guatemala</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">
                Recibe historias de adopción y noticias
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Tu correo"
                  className="rounded-full bg-white"
                />
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 flex-shrink-0">
                  Suscribir
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © 2025 OurPawradise. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacidad
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Términos
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
