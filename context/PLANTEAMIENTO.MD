PROYECTO: CRAFTIA - Plataforma de Soluciones Digitales

## CONTEXTO DEL PROYECTO
Soy dueño de CRAFTIA, una agencia de soluciones digitales en San Nicolás, Nuevo León, México. Ofrezco desarrollo web, branding, impresión gran formato, corte láser y diseño gráfico. Necesito un sitio web profesional que funcione como portafolio interactivo y herramienta de conversión de ventas.

## STACK TECNOLÓGICO
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui para componentes
- Supabase (Backend/DB/Auth)
- Vercel para deployment

## OBJETIVO PRINCIPAL
Crear un MVP funcional en 2 semanas que:
1. Muestre mis servicios profesionalmente
2. Demuestre capacidades técnicas mediante funcionalidades interactivas
3. Genere leads mediante cotizadores y formularios
4. Sirva como portafolio de casos de éxito
5. Sea rápido, moderno y optimizado para SEO

## ESTRUCTURA DEL PROYECTO

### FASE 1: SETUP INICIAL Y ARQUITECTURA
Necesito que me ayudes a:

1. **Configurar el proyecto base**
   - Inicializar Next.js 15 con TypeScript
   - Configurar Tailwind CSS con configuración personalizada
   - Instalar y configurar shadcn/ui
   - Configurar Supabase client
   - Estructura de carpetas escalable

2. **Diseño del sistema de carpetas**
```
   /app
     /(root)
       /page.tsx              # Landing
       /servicios/page.tsx    # Servicios
       /portafolio/page.tsx   # Casos de éxito
       /blog/page.tsx         # Blog
       /contacto/page.tsx     # Contacto
     /api
   /components
     /ui                      # shadcn components
     /sections               # Secciones reutilizables
     /shared                 # Componentes compartidos
   /lib
     /supabase              # Configuración DB
     /utils                 # Utilidades
   /types                   # TypeScript types
   /public
     /images
     /icons
```

3. **Paleta de colores y tema**
   - Color primario: Naranja (#FF6B35 o similar al logo)
   - Color secundario: Blanco/Gris oscuro
   - Fondo: Dark mode con gradientes sutiles
   - Tipografía moderna y profesional

---

## FASE 2: LANDING PAGE (PRIORIDAD MÁXIMA)

### Componentes a crear:

#### 1. HERO SECTION
```typescript
// Especificaciones:
- Headline: "Soluciones Digitales que Generan Resultados en 5-7 Días"
- Subheadline enfocado en beneficios
- 2 CTAs: "Ver Portafolio" (secondary) + "Cotizar Ahora" (primary)
- Animación sutil de entrada
- Background con gradiente moderno
- Responsive: mobile-first
```

Necesito:
- Componente Hero.tsx con animaciones usando framer-motion
- Botones con hover effects
- Layout responsive con grid de Tailwind

#### 2. SERVICIOS GRID
```typescript
// Especificaciones:
Mostrar 5 servicios principales en cards:
1. Desarrollo Web (desde $3,000 MXN)
2. Impresión Gran Formato ($135 MXN/ml)
3. Corte y Grabado Láser
4. Branding Profesional
5. Diseño Gráfico Express

Cada card debe tener:
- Ícono animado (lucide-react)
- Título del servicio
- Descripción breve (2-3 líneas)
- Precio destacado
- Tiempo de entrega
- Hover effect con elevación
- Click para más detalles
```

Necesito:
- Componente ServicesGrid.tsx
- Componente ServiceCard.tsx reutilizable
- Modal o expand para detalles (shadcn Dialog)
- Animaciones smooth

#### 3. PORTAFOLIO PREVIEW
```typescript
// Especificaciones:
Mostrar 3 proyectos destacados:

1. Pentágono Seguridad (pentagono-seguridad.com)
   - Tipo: Desarrollo Web
   - Tecnologías: Next.js, Tailwind
   - Métrica: PageSpeed 95+
   
2. Best Drip (bestdrip.com.mx)
   - Tipo: Landing Page
   - Coming Soon page con countdown
   
3. Mayand Calculadora (mayand-calculadora-impresion.vercel.app)
   - Tipo: Web App
   - Sistema de cotización automatizado

Cada proyecto debe mostrar:
- Thumbnail/Screenshot
- Nombre del cliente
- Tipo de proyecto
- Métricas clave (velocidad, tech stack)
- Link "Ver proyecto" que abre en nueva pestaña
- Tag de categoría
```

Necesito:
- Componente PortfolioPreview.tsx
- Componente ProjectCard.tsx
- Integración con Supabase para traer datos
- Lightbox para ver imágenes (opcional para MVP)

#### 4. COTIZADOR EXPRESS
```typescript
// Especificaciones:
Formulario inteligente con estos campos:

1. ¿Qué servicio necesitas? (Select)
   - Página Web
   - Impresión Gran Formato
   - Corte Láser
   - Branding
   - Diseño Gráfico

2. Campos dinámicos según selección:
   
   SI "Página Web":
   - Tipo (Landing/Corporativo/E-commerce)
   - ¿Tienes diseño? (Sí/No)
   - Urgencia (Normal/Express)
   
   SI "Impresión":
   - Material (Vinil/Lona/Microperforado)
   - Metros lineales (input numérico)
   - ¿Necesitas diseño? (Sí/No)

3. Datos de contacto:
   - Nombre
   - Email
   - WhatsApp
   - Empresa (opcional)

4. Mostrar precio estimado en tiempo real
5. Botón "Enviar Cotización" que:
   - Guarda en Supabase
   - Envía email al cliente
   - Envía notificación a tu WhatsApp
   - Muestra mensaje de éxito
```

Necesito:
- Componente QuoteCalculator.tsx
- Lógica de cálculo de precios
- Validación con react-hook-form + zod
- Integración Supabase para guardar quotes
- API route para enviar emails (Resend o nodemailer)

#### 5. TESTIMONIOS
```typescript
// Especificaciones:
Carrusel con 3-5 testimonios reales:

Estructura:
- Foto/Avatar del cliente
- Nombre y empresa
- Rating (5 estrellas)
- Testimonio breve
- Link al proyecto realizado

Auto-scroll cada 5 segundos
Controles manual (flechas)
```

Necesito:
- Componente TestimonialsCarousel.tsx
- Usar embla-carousel-react o swiper
- Responsive

#### 6. CTA FINAL
```typescript
// Especificaciones:
Sección de cierre potente:
- Headline: "¿Listo para impulsar tu negocio?"
- Texto motivacional breve
- 2 opciones:
  1. Botón "Comenzar Proyecto" → abre modal de cotización
  2. Botón "WhatsApp Directo" → link a wa.me
- Background con gradiente o imagen
```

---

## FASE 3: CONFIGURACIÓN SUPABASE

### Tablas necesarias para MVP:
```sql
-- Tabla: projects (Portafolio)
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT NOW(),
  client_name TEXT NOT NULL,
  project_name TEXT NOT NULL,
  project_type TEXT NOT NULL, -- 'web', 'printing', 'laser', 'branding'
  description TEXT,
  url TEXT,
  thumbnail_url TEXT,
  technologies TEXT[], -- array de tecnologías
  metrics JSONB, -- {pagespeed: 95, deliveryDays: 7}
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true
);

-- Tabla: quotes (Cotizaciones)
CREATE TABLE quotes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT NOW(),
  service_type TEXT NOT NULL,
  details JSONB NOT NULL, -- todos los campos del form
  estimated_price DECIMAL(10,2),
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_whatsapp TEXT,
  client_company TEXT,
  status TEXT DEFAULT 'pending', -- pending, contacted, converted, lost
  notes TEXT
);

-- Tabla: blog_posts
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL, -- Markdown
  cover_image TEXT,
  category TEXT,
  tags TEXT[],
  published BOOLEAN DEFAULT false,
  views INTEGER DEFAULT 0
);

-- Tabla: testimonials
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT NOW(),
  client_name TEXT NOT NULL,
  client_company TEXT,
  client_avatar TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  testimonial TEXT NOT NULL,
  project_id UUID REFERENCES projects(id),
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true
);
```

Necesito:
- Scripts SQL para crear tablas
- Configuración de Supabase client en `/lib/supabase/client.ts`
- TypeScript types generados desde Supabase
- Funciones helper para queries comunes

---

## FASE 4: COMPONENTES SHARED Y UI

### Componentes reutilizables necesarios:
```typescript
// 1. Button personalizado
- Variantes: primary, secondary, outline, ghost
- Tamaños: sm, md, lg
- Con loading state
- Con iconos (lucide-react)

// 2. Container/Section wrapper
- Max width responsive
- Padding consistente
- Centered content

// 3. Badge/Tag
- Para categorías de proyectos
- Para tags de blog
- Colores según tipo

// 4. Card genérico
- Con hover effects
- Responsive
- Variantes visuales

// 5. Modal/Dialog (shadcn)
- Para cotizador
- Para ver proyectos
- Para formularios

// 6. Input fields personalizados
- Text input
- Select dropdown
- Textarea
- File upload
- Con validación visual

// 7. Navbar
- Logo CRAFTIA
- Links de navegación
- CTA "Cotizar"
- Mobile menu responsive
- Sticky on scroll

// 8. Footer
- Links rápidos
- Redes sociales
- Información de contacto
- Copyright
- Mapa del sitio
```

---

## INSTRUCCIONES ESPECÍFICAS PARA EL LLM

### Cuando generes código:

1. **Usa SIEMPRE TypeScript estricto**
   - Define todos los types/interfaces
   - No uses `any`
   - Props con tipos explícitos

2. **Componentes en Server Components por defecto**
   - Usa 'use client' solo cuando sea necesario (interactividad)
   - Aprovecha RSC de Next.js 15

3. **Tailwind CSS con enfoque mobile-first**
   - Clases responsive: sm:, md:, lg:, xl:
   - Usa tokens de diseño consistentes
   - Aprovecha arbitrary values cuando sea necesario

4. **Accesibilidad (a11y)**
   - Semantic HTML
   - ARIA labels donde corresponda
   - Focus states visibles
   - Contraste de colores adecuado

5. **Performance**
   - Optimiza imágenes con next/image
   - Lazy loading donde corresponda
   - Code splitting automático de Next.js
   - Minimiza bundle size

6. **Naming conventions**
   - Componentes: PascalCase (Button.tsx)
   - Funciones/variables: camelCase
   - Constantes: UPPER_SNAKE_CASE
   - Archivos: kebab-case para páginas

7. **Estructura de componentes**
```typescript
   // Imports
   // Types/Interfaces
   // Component
   // Helper functions (si hay)
   // Export
```

8. **Comentarios útiles**
   - Explica lógica compleja
   - TODOs para mejoras futuras
   - Referencias a decisiones de diseño

---

## ASSETS Y RECURSOS

### Tengo disponibles:
- Logo CRAFTIA (horizontal y cuadrado)
- Screenshots de proyectos reales
- Imágenes promocionales existentes

### Necesito generar:
- Íconos para servicios (usar lucide-react)
- Placeholders mientras subo imágenes reales
- Gradientes y backgrounds personalizados

---

## PETICIÓN INICIAL

Para empezar, ayúdame con:

1. **Configurar el proyecto desde cero**
   - Comandos exactos para instalar todo
   - Configuración inicial de archivos (tailwind.config, next.config, etc.)
   - Setup de Supabase con variables de entorno

2. **Crear la estructura de carpetas completa**
   - Con archivos base vacíos donde corresponda

3. **Desarrollar el Hero Section completo**
   - Con animaciones
   - Responsive
   - Con CTAs funcionales

4. **Crear el Navbar completo**
   - Con logo
   - Navigation funcional
   - Mobile menu
   - Sticky behavior

Por favor, genera el código completo y funcional, explicando decisiones importantes