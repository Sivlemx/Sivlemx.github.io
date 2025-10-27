# Optimización de Imágenes Pendiente

## CRÍTICO: Imágenes muy pesadas

Las siguientes imágenes necesitan optimización urgente:

### Python Curso Hero
- **Actual:** 1.2MB (assets/img/python-curso-hero.jpg y .webp)
- **Objetivo:** 150-200KB máximo
- **Herramientas recomendadas:**
  - [Squoosh.app](https://squoosh.app/) (online, gratis)
  - [TinyPNG](https://tinypng.com/) (online, gratis)
  - ImageOptim (Mac)
  - GIMP (multiplataforma)

### Pasos para optimizar:

1. Abrir la imagen en Squoosh.app
2. Configurar:
   - WebP: Calidad 75-80
   - JPG: Calidad 75, Progressive
3. Descargar y reemplazar en `assets/img/`

### Otras imágenes a revisar:
- DataLogo.png (1.2MB) - probablemente se puede reducir a 100-200KB
- Inicio-full.webp (19K) - está bien optimizada ✓

## Impacto esperado:
- Reducción de ~2.3MB en peso total
- Mejora significativa en tiempo de carga
- Mejor puntuación en Google PageSpeed Insights
