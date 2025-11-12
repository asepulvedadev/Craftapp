'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Code, Monitor, Palette } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 1,
    client: 'Pentágono Seguridad',
    title: 'Sistema de Seguridad Empresarial',
    type: 'Desarrollo Web',
    description: 'Plataforma completa de gestión de seguridad con dashboard administrativo y monitoreo en tiempo real.',
    url: 'https://pentagono-seguridad.com',
    thumbnail: '/images/projects/pentagono.jpg', // Placeholder
    technologies: ['Next.js', 'Tailwind', 'Supabase'],
    metrics: { pagespeed: 95, deliveryDays: 7 },
    category: 'web'
  },
  {
    id: 2,
    client: 'Best Drip',
    title: 'Landing Page E-commerce',
    type: 'Tienda Online',
    description: 'Coming soon page con diseño moderno y sistema de preventa para marca de streetwear.',
    url: 'https://bestdrip.com.mx',
    thumbnail: '/images/projects/bestdrip.jpg', // Placeholder
    technologies: ['React', 'Tailwind', 'Stripe'],
    metrics: { pagespeed: 92, deliveryDays: 5 },
    category: 'web'
  },
  {
    id: 3,
    client: 'Mayand Calculator',
    title: 'Calculadora de Impresión',
    type: 'Web App Interactiva',
    description: 'Herramienta web para calcular costos de impresión con interfaz intuitiva y cotización automática.',
    url: 'https://mayand-calculadora.vercel.app',
    thumbnail: '/images/projects/mayand.jpg', // Placeholder
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    metrics: { pagespeed: 98, deliveryDays: 3 },
    category: 'web'
  }
]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'web':
      return Monitor
    case 'design':
      return Palette
    case 'print':
      return Code
    default:
      return Monitor
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Portafolio de <span className="text-primary">Éxito</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Proyectos reales que han transformado negocios. Cada solución está diseñada
            para generar resultados tangibles y maximizar el retorno de inversión.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => {
            const IconComponent = getCategoryIcon(project.category)
            return (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    {/* Placeholder for project image */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <IconComponent className="w-12 h-12 text-primary/60" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Ver Proyecto
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1">
                          {project.client}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.title}</p>
                      </div>
                      <Badge variant="secondary" className="ml-2">
                        {project.type}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-primary font-medium">
                          {project.metrics.pagespeed} PageSpeed
                        </span>
                        <span className="text-muted-foreground">
                          {project.metrics.deliveryDays} días
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Ver Todos los Proyectos
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}