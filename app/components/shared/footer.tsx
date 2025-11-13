import Link from 'next/link'
import { Zap } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import Image from 'next/image'

const iconMap = {
  Instagram: '/icons/instagramIcon.svg',
  Facebook: '/icons/facebookIcon.svg',
  TikTok: '/icons/tiktokIcon.svg',
}

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
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <Image
                    src={iconMap[social.icon as keyof typeof iconMap]}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-2">
              {siteConfig.footerLinks.servicios.map((link) => (
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
              {siteConfig.footerLinks.empresa.map((link) => (
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
                <Image
                  src="/icons/mailIcon.svg"
                  alt="Email"
                  width={16}
                  height={16}
                  className="w-4 h-4 flex-shrink-0"
                />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Image
                  src="/icons/telefonoIcon.svg"
                  alt="Teléfono"
                  width={16}
                  height={16}
                  className="w-4 h-4 flex-shrink-0"
                />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Image
                  src="/icons/ubicacionIcon.svg"
                  alt="Ubicación"
                  width={16}
                  height={16}
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                />
                <span>{siteConfig.contact.address}</span>
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