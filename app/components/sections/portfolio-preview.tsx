'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Code, Monitor, Palette, Zap, TrendingUp, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HoverCard } from '../animations'
import { useHover } from '@/lib/hooks'

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

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const { isHover, hoverProps } = useHover()
  const IconComponent = getCategoryIcon(project.category)

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <HoverCard className="h-full group cursor-pointer">
        <Card className="h-full glass-card border-0 relative overflow-hidden">
          {/* Animated gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          <div className="relative aspect-video bg-muted overflow-hidden">
            {/* Enhanced placeholder with animation */}
            <motion.div
              className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 flex items-center justify-center relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <IconComponent className="w-16 h-16 text-primary/60" />
              </motion.div>

              {/* Floating particles effect */}
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/30 rounded-full"
                    animate={{
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${20 + i * 10}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Enhanced overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 glass-card border border-primary/20 text-primary rounded-lg hover-glow transition-all duration-200 font-medium"
                >
                  <Zap className="w-4 h-4" />
                  Ver Proyecto
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <CardContent className="p-6 relative z-10">
            <div className="flex items-start justify-between mb-3">
              <div>
                <motion.h3
                  className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors duration-300"
                  {...hoverProps}
                >
                  {project.client}
                </motion.h3>
                <p className="text-sm text-muted-foreground">{project.title}</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Badge variant="secondary" className="glass hover:bg-primary/20 transition-colors duration-200">
                  {project.type}
                </Badge>
              </motion.div>
            </div>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * techIndex, duration: 0.3 }}
                >
                  <Badge variant="outline" className="text-xs hover-glow cursor-pointer">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-4">
                <motion.div
                  className="flex items-center gap-1 text-primary font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  <TrendingUp className="w-4 h-4" />
                  {project.metrics.pagespeed}
                </motion.div>
                <motion.div
                  className="flex items-center gap-1 text-muted-foreground"
                  whileHover={{ scale: 1.05 }}
                >
                  <Clock className="w-4 h-4" />
                  {project.metrics.deliveryDays} días
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </HoverCard>
    </motion.div>
  )
}

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass-card border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Zap className="w-4 h-4" />
            </motion.div>
            Casos de Éxito Reales
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Portafolio de <span className="gradient-text animate-glow">Éxito</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Proyectos reales que han transformado negocios. Cada solución está diseñada
            para generar resultados tangibles y maximizar el retorno de inversión.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/portafolio"
              className="inline-flex items-center gap-2 px-8 py-4 glass-card border border-primary/20 text-primary rounded-lg hover-glow transition-all duration-200 font-medium"
            >
              <ExternalLink className="w-5 h-5" />
              Ver Todos los Proyectos
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}