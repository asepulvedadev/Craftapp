# ANIME.JS - GUÍA COMPLETA PARA LLM

## 📋 INFORMACIÓN GENERAL

**Anime.js** es una librería de animación JavaScript ligera y versátil que permite animar CSS, SVG, atributos DOM y objetos JavaScript.

**Versión:** v4 (última)  
**Tamaño:** ~17KB (minificado)  
**GitHub:** https://github.com/juliangarnier/anime  
**Documentación:** https://animejs.com/documentation

---

## 🚀 INSTALACIÓN

### NPM (Recomendado para proyectos modernos)
```bash
npm install animejs
```

### Importación en proyecto (ES Modules - v4)
```typescript
import { animate, stagger, timeline } from 'animejs';
```

### CDN (v3 - para referencia)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script>
```

---

## 🎯 CONCEPTOS FUNDAMENTALES

### 1. ESTRUCTURA BÁSICA (v4)

```typescript
import { animate } from 'animejs';

animate(targets, {
  // Propiedades a animar
  translateX: 250,
  scale: 2,
  rotate: '1turn',
  
  // Parámetros de animación
  duration: 1000,
  delay: 500,
  ease: 'easeInOutQuad',
  loop: false,
  alternate: false,
  
  // Callbacks
  begin: () => console.log('Inicia'),
  update: (anim) => console.log('Actualizando'),
  complete: () => console.log('Completa')
});
```

---

## 🎯 TARGETS (OBJETIVOS)

Los targets son los elementos que quieres animar. Anime.js acepta múltiples formas:

### Selectores CSS (más común)
```typescript
animate('.square', { x: 300 });
animate('#element', { opacity: 0 });
animate('div', { scale: 1.5 });
```

### Selectores múltiples
```typescript
animate('.red, .blue', { y: 100 });
```

### Pseudo-selectores
```typescript
animate('.square:nth-child(even)', { rotate: 180 });
animate('.square:not(.blue)', { scale: 0.5 });
```

### DOM Nodes
```typescript
const element = document.querySelector('#myElement');
animate(element, { x: 200 });
```

### NodeList
```typescript
const elements = document.querySelectorAll('.item');
animate(elements, { opacity: [0, 1] });
```

### Arrays
```typescript
animate(['.red', '.blue', document.querySelector('#special')], {
  translateY: 250
});
```

### Objetos JavaScript
```typescript
const myObject = { value: 0, count: 0 };

animate(myObject, {
  value: 1000,
  count: 100,
  duration: 2000,
  update: () => {
    console.log(myObject.value); // Se actualiza en tiempo real
  }
});
```

---

## 🎨 PROPIEDADES ANIMABLES

### CSS Properties
```typescript
animate('.element', {
  // Transforms
  translateX: 250,          // También: x
  translateY: -50,          // También: y
  translateZ: 100,          // También: z
  rotate: '1turn',          // También en deg, rad
  rotateX: 180,
  rotateY: 90,
  scale: 2,                 // También: scaleX, scaleY, scaleZ
  skew: '20deg',            // También: skewX, skewY
  
  // Visual
  opacity: 0.5,
  color: '#FF6B35',
  backgroundColor: '#0a0a0f',
  borderRadius: '50%',
  
  // Layout
  width: 200,
  height: 100,
  margin: 20,
  padding: 10,
  
  // Nota: Las unidades se añaden automáticamente (px, %, etc)
});
```

### Valores especiales
```typescript
// Valor relativo
translateX: '+=100'      // Suma 100 al valor actual
scale: '*=2'             // Multiplica por 2

// De-Hacia
opacity: [0, 1]          // De 0 a 1
rotate: [-180, 180]      // De -180 a 180

// Valores desde
x: { from: 0 }           // Empieza desde 0
rotate: { from: -180 }   // Empieza desde -180
```

### SVG Attributes
```typescript
animate('circle', {
  cx: 250,
  cy: 150,
  r: 50,
  strokeWidth: 5,          // Nota: camelCase
  fill: '#FF6B35'
});

animate('path', {
  d: 'M0,0 L100,100',      // Morph de path
  strokeDashoffset: [1000, 0] // Dibujo de línea
});
```

### DOM Attributes
```typescript
animate('.progress-bar', {
  value: [0, 100],         // Para <progress>
  max: 100
});
```

---

## ⚙️ PARÁMETROS DE ANIMACIÓN

### Timing
```typescript
{
  duration: 1000,          // Duración en ms (default: 1000)
  delay: 500,              // Delay antes de iniciar (default: 0)
  endDelay: 200,           // Delay después de completar
}
```

### Easing (funciones de aceleración)
```typescript
{
  // Linear
  ease: 'linear',
  
  // In/Out/InOut
  ease: 'easeInQuad',
  ease: 'easeOutQuad',
  ease: 'easeInOutQuad',
  
  // Otros tipos: Cubic, Quart, Quint, Sine, Expo, Circ, Back, Elastic
  ease: 'easeInOutElastic',
  ease: 'easeOutBounce',
  
  // Cubic Bezier personalizado
  ease: [0.42, 0, 0.58, 1],
  
  // Spring (v4)
  ease: 'spring(1, 80, 10, 0)',
  
  // Steps
  ease: 'steps(10)',
}
```

### Dirección y Loop
```typescript
{
  direction: 'normal',     // normal | reverse | alternate
  loop: true,              // Boolean o número de veces
  alternate: true,         // Reversa en cada iteración
  autoplay: true,          // Inicia automáticamente (default: true)
}
```

---

## 🎬 CALLBACKS

```typescript
animate('.element', {
  x: 300,
  
  begin: (anim) => {
    console.log('Animación iniciada');
  },
  
  update: (anim) => {
    // Se llama en cada frame
    console.log('Progreso:', anim.progress);
  },
  
  complete: (anim) => {
    console.log('Animación completada');
  },
  
  loopBegin: (anim) => {
    console.log('Loop iniciado');
  },
  
  loopComplete: (anim) => {
    console.log('Loop completado');
  },
  
  change: (anim) => {
    console.log('Valor cambió');
  }
});
```

---

## 🌟 STAGGER (Animación Escalonada)

Stagger permite crear animaciones en secuencia para múltiples elementos:

```typescript
import { animate, stagger } from 'animejs';

// Básico
animate('.square', {
  x: 250,
  delay: stagger(100)      // 100ms entre cada elemento
});

// Con configuración
animate('.square', {
  x: 250,
  delay: stagger(100, {
    from: 'center',        // first | last | center | índice
    direction: 'normal',   // normal | reverse
    ease: 'linear',
    grid: [5, 5],         // Para layouts en grid
    axis: 'x'             // x | y
  })
});

// Valor de propiedad escalonado
animate('.square', {
  translateX: stagger([0, 100, 200, 300]),
  scale: stagger([1, 1.5, 2, 1.5, 1])
});

// Función personalizada
animate('.square', {
  translateY: stagger(50, {
    from: 'center',
    start: 100,
    grid: [10, 10],
    ease: 'easeOutQuad'
  })
});
```

---

## 🎞️ TIMELINE (Secuencias)

Timeline permite orquestar múltiples animaciones en secuencia:

```typescript
import { timeline } from 'animejs';

const tl = timeline({
  // Configuración global
  duration: 1000,
  ease: 'easeInOutQuad',
  loop: false,
  
  // Callbacks globales
  complete: () => console.log('Timeline completa')
});

// Añadir animaciones
tl.add('.square', {
  x: 250
})
.add('.circle', {
  y: 100,
  scale: 2
}, '-=500')              // Overlap de 500ms
.add('.triangle', {
  rotate: 180
}, '+=300');             // Gap de 300ms después

// Controlar timeline
tl.play();
tl.pause();
tl.restart();
tl.reverse();
tl.seek(500);            // Ir a 500ms
```

### Timeline con labels
```typescript
tl.add('.element1', { x: 100 })
  .add('.element2', { y: 100 }, 'label1')  // Crear label
  .add('.element3', { scale: 2 }, 'label1+=500');  // 500ms después del label
```

---

## 🎨 PROPERTY KEYFRAMES

Animar una propiedad a través de múltiples valores:

```typescript
animate('.element', {
  translateX: [
    { value: 100, duration: 500 },
    { value: 200, duration: 300, delay: 200 },
    { value: 0, duration: 500 }
  ],
  
  rotate: [
    { value: 180, duration: 800, ease: 'easeInOutSine' },
    { value: 360, duration: 800, ease: 'easeInOutSine' }
  ]
});
```

---

## 🎯 CONTROL DE ANIMACIONES

```typescript
import { animate } from 'animejs';

const animation = animate('.element', {
  x: 300,
  autoplay: false
});

// Controles
animation.play();         // Reproducir
animation.pause();        // Pausar
animation.restart();      // Reiniciar
animation.reverse();      // Reversar dirección
animation.seek(500);      // Ir a tiempo específico (ms)
animation.seek(50, true); // Ir a porcentaje (50%)

// Propiedades
animation.progress;       // Progreso (0-100)
animation.currentTime;    // Tiempo actual en ms
animation.duration;       // Duración total
animation.remaining;      // Tiempo restante
animation.paused;         // Boolean: está pausada?
animation.began;          // Boolean: comenzó?
animation.finished;       // Boolean: terminó?
```

---

## 🔧 FUNCIONES HELPER

### anime.random()
```typescript
translateX: () => anime.random(-500, 500),
scale: () => anime.random(1, 5),
rotate: () => anime.random(0, 360)
```

### anime.get()
```typescript
const currentTranslateX = anime.get('.element', 'translateX');
const currentOpacity = anime.get('.element', 'opacity');
```

### anime.set()
```typescript
// Establecer valores sin animar
anime.set('.element', {
  translateX: 100,
  opacity: 0.5
});
```

---

## 📱 EJEMPLOS PRÁCTICOS PARA CRAFTIA

### 1. Hero Particles
```typescript
import { animate, stagger } from 'animejs';

// Crear partículas flotantes
const createParticles = () => {
  animate('.particle', {
    translateX: () => anime.random(-200, 200),
    translateY: () => anime.random(-200, 200),
    scale: () => anime.random(0.5, 2),
    opacity: [0, 0.6, 0],
    duration: () => anime.random(3000, 5000),
    delay: stagger(200, { from: 'center' }),
    ease: 'linear',
    loop: true
  });
};
```

### 2. Cards con Hover Effect
```typescript
// Al montar el componente
const cards = document.querySelectorAll('.service-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    animate(card, {
      scale: 1.05,
      translateY: -10,
      duration: 300,
      ease: 'easeOutQuad'
    });
  });
  
  card.addEventListener('mouseleave', () => {
    animate(card, {
      scale: 1,
      translateY: 0,
      duration: 300,
      ease: 'easeOutQuad'
    });
  });
});
```

### 3. Counter Animation
```typescript
const animateCounter = (element, endValue) => {
  const obj = { value: 0 };
  
  animate(obj, {
    value: endValue,
    duration: 2000,
    ease: 'easeOutQuad',
    update: () => {
      element.textContent = Math.round(obj.value);
    }
  });
};

// Uso
animateCounter(document.querySelector('#projects-count'), 15);
```

### 4. Entrada escalonada de elementos
```typescript
import { animate, stagger } from 'animejs';

animate('.portfolio-item', {
  opacity: [0, 1],
  translateY: [50, 0],
  scale: [0.9, 1],
  duration: 800,
  delay: stagger(100, { from: 'first' }),
  ease: 'easeOutExpo'
});
```

### 5. Timeline para secuencia compleja
```typescript
import { timeline } from 'animejs';

const heroSequence = timeline({
  ease: 'easeOutExpo'
});

heroSequence
  .add('.hero-title', {
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000
  })
  .add('.hero-subtitle', {
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800
  }, '-=600')
  .add('.hero-cta', {
    opacity: [0, 1],
    scale: [0.8, 1],
    duration: 600
  }, '-=400')
  .add('.hero-cards', {
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 800,
    delay: stagger(100)
  }, '-=200');
```

### 6. Scroll Progress Bar
```typescript
const updateProgressBar = () => {
  const scrollPercent = (window.scrollY / 
    (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  
  animate('.progress-bar', {
    scaleX: scrollPercent / 100,
    duration: 0,
    ease: 'linear'
  });
};

window.addEventListener('scroll', updateProgressBar);
```

### 7. SVG Drawing (path animation)
```typescript
// Para logos o ilustraciones SVG
const path = document.querySelector('path');
const pathLength = path.getTotalLength();

// Preparar
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

// Animar
animate(path, {
  strokeDashoffset: [pathLength, 0],
  duration: 2000,
  ease: 'easeInOutSine'
});
```

### 8. Loading Animation
```typescript
const loadingAnimation = animate('.loader', {
  rotate: '1turn',
  duration: 1000,
  ease: 'linear',
  loop: true
});

// Detener cuando carga completa
window.addEventListener('load', () => {
  loadingAnimation.pause();
  animate('.loader', {
    opacity: 0,
    scale: 0,
    duration: 300,
    complete: () => {
      document.querySelector('.loader').remove();
    }
  });
});
```

---

## 🎯 INTEGRACIÓN CON REACT (Next.js)

### Hook personalizado
```typescript
// hooks/useAnimeJS.ts
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export function useAnimeJS(
  animationConfig: any,
  deps: any[] = []
) {
  const ref = useRef(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const anim = animate(ref.current, animationConfig);
    
    return () => {
      anim.pause();
    };
  }, deps);
  
  return ref;
}
```

### Uso en componente
```typescript
'use client';

import { useAnimeJS } from '@/hooks/useAnimeJS';

export function AnimatedCard() {
  const cardRef = useAnimeJS({
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 800,
    ease: 'easeOutQuad'
  });
  
  return (
    <div ref={cardRef} className="card">
      Content
    </div>
  );
}
```

### Trigger on Intersection
```typescript
'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export function ScrollAnimatedElement() {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(entry.target, {
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 1000,
              ease: 'easeOutQuad'
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return <div ref={ref}>Animated Content</div>;
}
```

---

## ⚡ BEST PRACTICES

### 1. Performance
- Prefiere `transform` y `opacity` (GPU accelerated)
- Evita animar `width`, `height`, `top`, `left`
- Use `will-change` CSS para hints al navegador

### 2. Cleanup en React
```typescript
useEffect(() => {
  const anim = animate('.element', { ... });
  
  return () => {
    anim.pause();  // Limpiar al desmontar
  };
}, []);
```

### 3. Reduce Motion
```typescript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const duration = prefersReducedMotion ? 0 : 1000;

animate('.element', {
  x: 300,
  duration
});
```

### 4. Reutilización
```typescript
// Configuraciones reutilizables
const fadeInConfig = {
  opacity: [0, 1],
  duration: 800,
  ease: 'easeOutQuad'
};

const slideUpConfig = {
  translateY: [50, 0],
  ...fadeInConfig
};
```

---

## 🚫 ERRORES COMUNES

### 1. Target no encontrado
```typescript
// ❌ Mal - elemento no existe aún
animate('.element', { x: 300 });

// ✅ Bien - esperar a que exista
useEffect(() => {
  const element = document.querySelector('.element');
  if (element) {
    animate(element, { x: 300 });
  }
}, []);
```

### 2. Memory leaks en React
```typescript
// ❌ Mal - no se limpia
useEffect(() => {
  animate('.element', { x: 300, loop: true });
}, []);

// ✅ Bien - cleanup
useEffect(() => {
  const anim = animate('.element', { x: 300, loop: true });
  return () => anim.pause();
}, []);
```

### 3. Unidades incorrectas
```typescript
// ❌ Mal
rotate: 180  // Sin unidad, puede fallar

// ✅ Bien
rotate: '180deg'
rotate: '0.5turn'
rotate: '3.14rad'
```

---

## 📚 RECURSOS

- **Documentación oficial v4**: https://animejs.com/documentation
- **GitHub**: https://github.com/juliangarnier/anime
- **CodePen Examples**: Buscar "anime.js" en CodePen
- **Migration Guide v3→v4**: https://github.com/juliangarnier/anime/wiki/Migration-guide

---

## 🎯 RESUMEN RÁPIDO PARA EL LLM

**Cuándo usar Anime.js en CRAFTIA:**
- ✅ Animaciones complejas de hero sections
- ✅ Efectos de entrada escalonados (stagger)
- ✅ Counters animados (stats)
- ✅ Secuencias de animación (timeline)
- ✅ Hover effects avanzados
- ✅ SVG animations (paths, morphing)
- ✅ Scroll-triggered animations con Intersection Observer

**Sintaxis básica v4:**
```typescript
import { animate, stagger, timeline } from 'animejs';

animate(target, {
  property: value,
  duration: 1000,
  ease: 'easeOutQuad',
  delay: stagger(100)
});
```

**Recuerda:**
- Anime.js v4 usa ES modules: `import { animate } from 'animejs'`
- No olvides cleanup en React: `animation.pause()` en useEffect return
- Usa `'use client'` en componentes Next.js que usen Anime.js
- Performance: prefiere `transform` y `opacity`
