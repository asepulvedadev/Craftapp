'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Portafolio', href: '/portafolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CRAFTIA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild>
              <Link href="#contacto">Cotizar Ahora</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-foreground/80 hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full mt-4">
                <Link href="#contacto" onClick={() => setIsOpen(false)}>
                  Cotizar Ahora
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}