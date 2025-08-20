PAQUETE DE DEPLOY – 2025-08-20

Contenido:
1) contacto.html — formulario listo con Formspree (solo cambia tu Form ID).
2) gracias.html — página de confirmación post‑envío.
3) robots.txt — colócalo en la raíz del sitio.
4) sitemap.xml — reemplaza https://TU-DOMINIO-AQUI/ por tu dominio y súbelo a la raíz.
5) assets/Inicio-full.webp — imagen optimizada para Open Graph y hero.
6) assets/hero_srcset_snippet.html — snippet <picture> para imágenes responsivas.
7) checklist_web.md — lista breve de pendientes/mejoras.

PASOS RÁPIDOS:
A) FORMULARIO
   - Abre contacto.html y reemplaza REEMPLAZA_TU_ID por tu Form ID de Formspree.
   - (Opcional) Activa reCAPTCHA en Formspree si recibes spam.

B) GRACIAS
   - Ya configurado: <input type="hidden" name="_next" value="/gracias.html">

C) SEO / SHARING
   - En cada página, agrega meta Open Graph/Twitter (usa assets/Inicio-full.webp como imagen).
   - (Opcional) Añade <link rel="canonical" ...> por página.

D) SITEMAP y ROBOTS
   - Edita sitemap.xml: sustituye https://TU-DOMINIO-AQUI/ por tu dominio (ej. https://tudominio.com/).
   - Sube sitemap.xml y robots.txt a la raíz del sitio.
   - En Search Console, envía el sitemap si quieres.

E) IMAGEN HERO (opcional)
   - Abre assets/hero_srcset_snippet.html y copia el bloque <picture> en index.html donde va la imagen.
   - Ajusta rutas si tu hosting no sirve desde / (raíz).

¡Listo! Con esto ya tienes un deploy limpio y profesional.
