'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Code, Palette, Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useMousePosition } from '@/lib/hooks'
import { ParticleBackground } from '../animations'

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, 50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])
  const mousePosition = useMousePosition()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Dynamic background with mouse tracking */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 53, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Particle background effect */}
      <ParticleBackground particleCount={15} className="opacity-60" />

      {/* Animated background elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
      />

      {/* Floating icons */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute top-32 right-20 w-12 h-12 glass-card flex items-center justify-center"
      >
        <Code className="w-6 h-6 text-primary" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-40 left-20 w-12 h-12 glass-card flex items-center justify-center"
      >
        <Palette className="w-6 h-6 text-primary" />
      </motion.div>

      <motion.div
        animate={{
          x: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 right-32 w-12 h-12 glass-card flex items-center justify-center"
      >
        <Printer className="w-6 h-6 text-primary" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Enhanced Badge with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass-card border border-primary/20 rounded-full text-primary text-sm font-medium hover-glow cursor-pointer"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <span className="gradient-text font-semibold">Soluciones Digitales Profesionales</span>
          </motion.div>

          {/* Enhanced Headline with staggered animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Soluciones Digitales que
              </motion.span>
              <br />
              <motion.span
                className="block gradient-text animate-glow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6, type: 'spring' }}
              >
                Generan Resultados
              </motion.span>
              <motion.span
                className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-muted-foreground mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                en 5-7 Días
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Enhanced Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            Transformamos ideas en experiencias digitales excepcionales. Desarrollo web, branding,
            impresión gran formato y diseño gráfico profesional para impulsar tu negocio.
          </motion.p>

          {/* Enhanced CTAs with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild className="glass-card hover-glow group px-8 py-4">
                <Link href="#servicios" className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Ver Portafolio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" asChild className="glass hover:bg-primary/10 px-8 py-4">
                <Link href="#contacto">
                  Cotizar Ahora
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats with glassmorphism cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { number: '50+', label: 'Proyectos Completados', icon: Code },
              { number: '95%', label: 'Satisfacción Cliente', icon: Sparkles },
              { number: '5-7', label: 'Días de Entrega', icon: Zap },
              { number: '24/7', label: 'Soporte', icon: Printer },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 1.8 + index * 0.1,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 200,
                }}
                className="glass-card p-6 text-center hover-lift cursor-pointer"
              >
                <motion.div
                  className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="w-6 h-10 glass-card border border-border/50 rounded-full flex justify-center cursor-pointer hover-glow"
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, 5, 0] }}
          transition={{ y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}