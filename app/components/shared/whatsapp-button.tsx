import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/site-config'

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, '')}?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <Image
          src="/icons/whatsaapIcon.svg"
          alt="WhatsApp"
          width={28}
          height={28}
          className="w-7 h-7"
        />
      </Link>
    </div>
  )
}