
# Checklist web – Integración y mejoras (v1)

## Integración Formspree
- [x] Añadir `action="https://formspree.io/f/{tu_id}"` en `contacto.html` (reemplaza REEMPLAZA_TU_ID).
- [x] Método `POST` y campos: nombre, email, mensaje.
- [x] Honeypot `_gotcha` para bots.
- [x] `_next` a /contacto.html?enviado=1 (o a /gracias.html si creamos página de agradecimiento).
- [x] Mensajes de estado accesibles (`aria-live`) y envío con `fetch` (progressive enhancement).
- [ ] Crear página **gracias.html** opcional con confirmación y enlaces.
- [ ] Configurar en Formspree los **dominios permitidos** y activar **notificaciones** al correo deseado.
- [ ] Habilitar **reCAPTCHA v3** en Formspree (opcional, recomendado si hay spam).

## Accesibilidad (a11y)
- [x] `aria-required`, `autocomplete` y `labels` vinculados.
- [ ] Asegurar contraste de botón y textos (revisar contra WCAG AA).
- [ ] Añadir `:focus` visible en inputs/botones (outline).
- [ ] `lang="es"` ya presente.

## SEO y metadatos
- [ ] Añadir **Open Graph** y **Twitter Card** en todas las páginas (título, descripción, imagen `Inicio.jpeg` optimizada).
- [ ] `meta description` única por página.
- [ ] Incluir `sitemap.xml` y `robots.txt`.
- [ ] Títulos jerárquicos (un H1 por página).

## Performance
- [ ] Optimizar `Inicio.jpeg` (versión webp + tamaños responsivos, `loading="lazy"` donde aplique).
- [ ] Preload de imágenes críticas si el LCP es alto.
- [x] Minificar `styles.css` en build de producción generando `styles.min.css`.

## UX de contacto
- [ ] Añadir **consentimiento de privacidad** corto con enlace a Aviso de Privacidad.
- [ ] Mostrar enlaces de contacto alternativos (correo directo, redes). Ya están, revisar.
- [ ] Validación nativa de email + patrón opcional.

## Deploy
- [ ] Verificar rutas de favicons (`/favicon-32.png`) si el sitio no estará en el root del dominio (usar rutas relativas `favicon-32.png`).
- [ ] Prueba end-to-end: enviar mensaje de prueba, confirmar recepción en tu email, revisar mensaje de confirmación al usuario.
- [ ] Versión producción: subir `contacto_formspree_integrado.html` renombrándolo como `contacto.html`.
