'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ArrowLeft, Check, User, Briefcase, MessageSquare, Send, Sparkles } from 'lucide-react'
import { HoverCard } from '../animations'

const steps = [
  {
    id: 1,
    title: 'Información Personal',
    icon: User,
    description: 'Cuéntanos sobre ti'
  },
  {
    id: 2,
    title: 'Detalles del Proyecto',
    icon: Briefcase,
    description: '¿Qué necesitas?'
  },
  {
    id: 3,
    title: 'Mensaje Final',
    icon: MessageSquare,
    description: 'Detalles adicionales'
  }
]

interface FormData {
  // Step 1
  name: string
  email: string
  company: string
  phone: string
  // Step 2
  service: string
  budget: string
  timeline: string
  // Step 3
  message: string
  newsletter: boolean
}

export function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false
  })

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission - in real app, send to Resend or n8n
    console.log('Form submitted:', formData)
    alert('¡Gracias! Tu mensaje ha sido enviado. Te contactaremos pronto.')
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Nombre completo *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="glass-input"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Correo electrónico *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="glass-input"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">
                  Empresa
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Nombre de tu empresa"
                  value={formData.company}
                  onChange={(e) => updateFormData('company', e.target.value)}
                  className="glass-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Teléfono
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+52 123 456 7890"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="glass-input"
                />
              </div>
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Servicio de interés *
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Desarrollo Web',
                    'Branding',
                    'Impresión',
                    'Corte Láser',
                    'Diseño Gráfico'
                  ].map((service) => (
                    <motion.div
                      key={service}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        type="button"
                        onClick={() => updateFormData('service', service)}
                        className={`w-full p-3 rounded-lg border text-left transition-all duration-200 ${
                          formData.service === service
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50 glass-card'
                        }`}
                      >
                        {service}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Presupuesto aproximado
                  </Label>
                  <select
                    value={formData.budget}
                    onChange={(e) => updateFormData('budget', e.target.value)}
                    className="w-full p-3 rounded-lg glass-input border-border"
                  >
                    <option value="">Seleccionar rango</option>
                    <option value="3k-10k">3,000 - 10,000 MXN</option>
                    <option value="10k-25k">10,000 - 25,000 MXN</option>
                    <option value="25k-50k">25,000 - 50,000 MXN</option>
                    <option value="50k+">Más de 50,000 MXN</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Timeline deseado
                  </Label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => updateFormData('timeline', e.target.value)}
                    className="w-full p-3 rounded-lg glass-input border-border"
                  >
                    <option value="">Seleccionar tiempo</option>
                    <option value="urgent">Urgente (1-2 días)</option>
                    <option value="week">Esta semana</option>
                    <option value="month">Este mes</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Cuéntanos más sobre tu proyecto
              </Label>
              <Textarea
                id="message"
                placeholder="Describe tu proyecto, objetivos, referencias, etc."
                value={formData.message}
                onChange={(e) => updateFormData('message', e.target.value)}
                className="glass-input min-h-[120px] resize-none"
                rows={5}
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="newsletter"
                checked={formData.newsletter}
                onChange={(e) => updateFormData('newsletter', e.target.checked)}
                className="rounded border-border"
              />
              <Label htmlFor="newsletter" className="text-sm">
                Quiero recibir actualizaciones y ofertas especiales
              </Label>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-primary/5 border border-primary/20 rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-primary mb-1">
                    ¿Listo para comenzar?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Revisaremos tu información y te contactaremos en menos de 24 horas
                    con una propuesta personalizada.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <MessageSquare className="w-4 h-4" />
            </motion.div>
            Contacto Profesional
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hablemos de tu <span className="gradient-text animate-glow">Proyecto</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Completa el formulario y recibe una cotización personalizada.
            Nuestro equipo te responderá en menos de 24 horas.
          </motion.p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isCompleted = currentStep > step.id
              const isCurrent = currentStep === step.id

              return (
                <div key={step.id} className="flex items-center">
                  <motion.div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      isCompleted
                        ? 'bg-primary border-primary text-primary-foreground'
                        : isCurrent
                        ? 'border-primary text-primary bg-primary/10'
                        : 'border-border text-muted-foreground'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <IconComponent className="w-5 h-5" />
                    )}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <motion.div
                      className={`w-16 h-0.5 mx-2 transition-colors duration-300 ${
                        isCompleted ? 'bg-primary' : 'bg-border'
                      }`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isCompleted ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <HoverCard className="max-w-2xl mx-auto">
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-center text-xl">
                  {steps[currentStep - 1].title}
                </CardTitle>
                <p className="text-center text-muted-foreground">
                  {steps[currentStep - 1].description}
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {renderStepContent()}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <motion.div
                    className="flex justify-between mt-8 pt-6 border-t border-border"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="glass hover:bg-primary/10"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Anterior
                    </Button>

                    {currentStep < steps.length ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="glass-card hover-glow"
                      >
                        Siguiente
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="glass-card hover-glow group"
                      >
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Enviar Mensaje
                      </Button>
                    )}
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </HoverCard>
        </motion.div>
      </div>
    </section>
  )
}