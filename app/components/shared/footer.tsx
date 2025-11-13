import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  servicios: [
    { name: 'Desarrollo Web', href: '/servicios#web' },
    { name: 'Branding', href: '/servicios#branding' },
    { name: 'Impresión', href: '/servicios#impresion' },
    { name: 'Corte Láser', href: '/servicios#laser' },
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '/nosotros' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ],
  soporte: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Términos de Servicio', href: '/terminos' },
    { name: 'Soporte Técnico', href: '/soporte' },
  ],
}

const socialLinks = [
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
]

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/LogoHorizontal.webp"
                alt="CRAFTIA Logo"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Soluciones digitales profesionales en San Nicolás, Nuevo León.
              Transformamos ideas en experiencias que generan resultados reales.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hola@craftia.mx</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+52 81 1234 5678</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>San Nicolás, Nuevo León, México</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 CRAFTIA. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacidad"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacidad
              </Link>
              <Link
                href="/terminos"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}