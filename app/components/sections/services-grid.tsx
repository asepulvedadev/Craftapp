'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Scissors, Zap, Monitor, FileText, ArrowRight, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HoverCard } from '../animations'
import { useHover } from '@/lib/hooks'

const services = [
  {
    icon: Monitor,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, rápidos y optimizados para conversiones. Desde landing pages hasta e-commerce completo.',
    price: 'Desde $3,000 MXN',
    delivery: '5-7 días',
    features: ['Responsive Design', 'SEO Optimizado', 'Performance 95+'],
    iconColor: 'text-primary'
  },
  {
    icon: Palette,
    title: 'Branding Profesional',
    description: 'Identidad visual completa que conecta con tu audiencia. Logo, colores, tipografía y aplicaciones.',
    price: 'Desde $2,500 MXN',
    delivery: '3-5 días',
    features: ['Logo Vectorial', 'Paleta de Colores', 'Guía de Marca'],
    iconColor: 'text-primary'
  },
  {
    icon: Scissors,
    title: 'Corte y Grabado Láser',
    description: 'Personalización profesional con tecnología láser de precisión. Materiales diversos para todo tipo de proyectos.',
    price: 'Desde $50 MXN',
    delivery: '1-3 días',
    features: ['Alta Precisión', 'Múltiples Materiales', 'Acabado Profesional'],
    iconColor: 'text-primary'
  },
  {
    icon: FileText,
    title: 'Diseño Gráfico Express',
    description: 'Diseños impactantes para redes sociales, impresos y digital. Creatividad y calidad garantizada.',
    price: 'Desde $300 MXN',
    delivery: '1-2 días',
    features: ['Formatos Múltiples', 'Archivos Editables', 'Revisión Incluida'],
    iconColor: 'text-primary'
  },
  {
    icon: Code,
    title: 'Impresión Gran Formato',
    description: 'Vinilos, lonas y materiales premium para publicidad exterior e interior. Calidad fotográfica.',
    price: '$135 MXN/ml',
    delivery: '2-4 días',
    features: ['Calidad Fotográfica', 'Materiales Premium', 'Instalación Opcional'],
    iconColor: 'text-primary'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  }
}

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const { isHover, hoverProps } = useHover()

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <HoverCard className="h-full group cursor-pointer">
        <Card className="h-full glass-card border-0 relative overflow-hidden">


          <CardHeader className="relative z-10">
            <motion.div
              {...hoverProps}
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                isHover ? 'bg-primary/20 scale-110' : 'bg-primary/10'
              }`}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <service.icon className={`w-7 h-7 ${service.iconColor} transition-colors duration-300`} />
            </motion.div>

            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
              {service.title}
            </CardTitle>

            <CardDescription className="text-base leading-relaxed">
              {service.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="relative z-10">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <motion.span
                  className="text-2xl font-bold gradient-text"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.price}
                </motion.span>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  {service.delivery}
                </div>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * featureIndex }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 bg-primary rounded-full mr-2"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.div
                className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 10 }}
                whileInView={{ y: 0 }}
              >
                <motion.button
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary text-sm font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Más Información
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </HoverCard>
    </motion.div>
  )
}

export function ServicesGrid() {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />

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
            Servicios Premium con Garantía
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Servicios que <span className="gradient-text animate-glow">Generan Resultados</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Soluciones integrales para llevar tu negocio al siguiente nivel.
            Cada servicio está diseñado para maximizar tu retorno de inversión.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-muted-foreground mb-6"
            whileHover={{ scale: 1.02 }}
          >
            ¿Necesitas algo específico? Todos nuestros servicios se pueden personalizar según tus necesidades.
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 glass-card border border-primary/20 rounded-full text-primary text-sm font-medium cursor-pointer hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Zap className="w-4 h-4" />
            </motion.div>
            Entrega garantizada en tiempo y forma
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}