'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Scissors, Zap, Monitor, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: Monitor,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, rápidos y optimizados para conversiones. Desde landing pages hasta e-commerce completo.',
    price: 'Desde $3,000 MXN',
    delivery: '5-7 días',
    features: ['Responsive Design', 'SEO Optimizado', 'Performance 95+']
  },
  {
    icon: Palette,
    title: 'Branding Profesional',
    description: 'Identidad visual completa que conecta con tu audiencia. Logo, colores, tipografía y aplicaciones.',
    price: 'Desde $2,500 MXN',
    delivery: '3-5 días',
    features: ['Logo Vectorial', 'Paleta de Colores', 'Guía de Marca']
  },
  {
    icon: Scissors,
    title: 'Corte y Grabado Láser',
    description: 'Personalización profesional con tecnología láser de precisión. Materiales diversos para todo tipo de proyectos.',
    price: 'Desde $50 MXN',
    delivery: '1-3 días',
    features: ['Alta Precisión', 'Múltiples Materiales', 'Acabado Profesional']
  },
  {
    icon: FileText,
    title: 'Diseño Gráfico Express',
    description: 'Diseños impactantes para redes sociales, impresos y digital. Creatividad y calidad garantizada.',
    price: 'Desde $300 MXN',
    delivery: '1-2 días',
    features: ['Formatos Múltiples', 'Archivos Editables', 'Revisión Incluida']
  },
  {
    icon: Code,
    title: 'Impresión Gran Formato',
    description: 'Vinilos, lonas y materiales premium para publicidad exterior e interior. Calidad fotográfica.',
    price: '$135 MXN/ml',
    delivery: '2-4 días',
    features: ['Calidad Fotográfica', 'Materiales Premium', 'Instalación Opcional']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function ServicesGrid() {
  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Servicios que <span className="text-primary">Generan Resultados</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Soluciones integrales para llevar tu negocio al siguiente nivel.
            Cada servicio está diseñado para maximizar tu retorno de inversión.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <span className="text-sm text-muted-foreground">{service.delivery}</span>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            ¿Necesitas algo específico? Todos nuestros servicios se pueden personalizar según tus necesidades.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            Entrega garantizada en tiempo y forma
          </div>
        </motion.div>
      </div>
    </section>
  )
}