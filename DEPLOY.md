# 🚀 Instrucciones de Despliegue - Tarea 5

## Opción 1: GitHub Pages (Recomendado - Gratis)

### Paso 1: Verificar que el código esté en GitHub
✅ El código ya está subido al repositorio: https://github.com/Alejos96/Tarea5-DAW

### Paso 2: Activar GitHub Pages
1. Ve a tu repositorio en GitHub: https://github.com/Alejos96/Tarea5-DAW
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral izquierdo, busca **Pages**
4. En la sección "Source" (Fuente):
   - Branch: Selecciona `main`
   - Folder: Selecciona `/ (root)`
5. Haz clic en **Save** (Guardar)
6. Espera 2-3 minutos
7. Tu página estará disponible en: `https://alejos96.github.io/Tarea5-DAW/`

### Paso 3: Verificar el despliegue
- Refresca la página de Settings > Pages
- Verás un mensaje verde: "Your site is published at..."
- Copia esta URL para tu entrega

---

## Opción 2: Netlify (Alternativa - Gratis)

### Método A: Netlify Drop (Más rápido)
1. Ve a [Netlify Drop](https://app.netlify.com/drop)
2. Arrastra la carpeta completa del proyecto
3. Espera que se cargue
4. Obtendrás una URL como: `https://nombre-aleatorio.netlify.app`
5. Opcional: Puedes cambiar el nombre en Site Settings

### Método B: Netlify con Git
1. Crea una cuenta en [Netlify](https://www.netlify.com/)
2. Haz clic en "Add new site" > "Import an existing project"
3. Conecta con GitHub
4. Selecciona el repositorio `Tarea5-DAW`
5. Configuración:
   - Build command: (dejar vacío)
   - Publish directory: `.` (punto)
6. Haz clic en "Deploy site"
7. Tu sitio estará en: `https://nombre-sitio.netlify.app`

---

## Opción 3: Vercel (Alternativa - Gratis)

1. Crea una cuenta en [Vercel](https://vercel.com/)
2. Haz clic en "Add New..." > "Project"
3. Importa tu repositorio de GitHub
4. Selecciona `Tarea5-DAW`
5. Configuración:
   - Framework Preset: Other
   - Root Directory: `./`
6. Haz clic en "Deploy"
7. Tu sitio estará en: `https://tarea5-daw.vercel.app`

---

## Opción 4: Render (Alternativa - Gratis)

1. Crea una cuenta en [Render](https://render.com/)
2. Haz clic en "New +" > "Static Site"
3. Conecta tu repositorio de GitHub
4. Configuración:
   - Name: tarea5-daw
   - Branch: main
   - Build Command: (dejar vacío)
   - Publish Directory: `.`
5. Haz clic en "Create Static Site"
6. Tu sitio estará en: `https://tarea5-daw.onrender.com`

---

## Opción 5: Cloudflare Pages (Alternativa - Gratis)

1. Crea una cuenta en [Cloudflare Pages](https://pages.cloudflare.com/)
2. Haz clic en "Create a project"
3. Conecta tu cuenta de GitHub
4. Selecciona el repositorio `Tarea5-DAW`
5. Configuración:
   - Project name: tarea5-daw
   - Production branch: main
   - Build command: (dejar vacío)
   - Build output directory: `/`
6. Haz clic en "Save and Deploy"
7. Tu sitio estará en: `https://tarea5-daw.pages.dev`

---

## 📋 Checklist para la Entrega

### Antes de entregar, verifica:

✅ **La página funciona correctamente**
   - Abre la URL en tu navegador
   - Prueba todos los botones de ejemplo
   - Verifica que se vean todos los estilos

✅ **Todos los archivos están en el repositorio**
   - index.html
   - styles.css
   - script.js
   - README.md

✅ **La URL es accesible públicamente**
   - Abre la URL en modo incógnito
   - Pide a un amigo que la abra

### Para entregar en el campus:

1. **URL pública:** [Copia la URL de tu hosting aquí]
   - Ejemplo: https://alejos96.github.io/Tarea5-DAW/

2. **Comentarios de la asignación:**
   ```
   URL de la página desplegada: [TU_URL_AQUÍ]
   
   Hosting utilizado: GitHub Pages / Netlify / Vercel / Render
   
   Todos los ejemplos de JavaScript están implementados y funcionando correctamente.
   La página es responsiva y funciona en todos los navegadores modernos.
   ```

3. **Archivos fuente:**
   - Si el tamaño es menor a 10MB: Sube los archivos directamente
   - Si el tamaño es mayor: Comparte el link del repositorio GitHub: https://github.com/Alejos96/Tarea5-DAW

---

## 🆘 Solución de Problemas

### Problema: La página no carga los estilos
**Solución:** Verifica que todos los archivos estén en la misma carpeta y que los nombres sean exactos (case-sensitive).

### Problema: Los botones no funcionan
**Solución:** Abre la consola del navegador (F12) y verifica si hay errores en JavaScript.

### Problema: GitHub Pages no se activa
**Solución:** Asegúrate de que el repositorio sea público y que hayas seleccionado la rama main.

### Problema: El hosting requiere tarjeta de crédito
**Solución:** Usa GitHub Pages, que no requiere tarjeta de crédito.

---

## 📱 Verificación en Dispositivos Móviles

No olvides verificar que tu página se vea bien en:
- ✅ Computadora de escritorio
- ✅ Tablet
- ✅ Teléfono móvil

Puedes usar las herramientas de desarrollo del navegador (F12 > Toggle device toolbar) para simular diferentes dispositivos.

---

## 🎉 ¡Listo para Entregar!

Una vez que hayas seguido estos pasos, tu tarea estará completa y lista para ser evaluada.

**¡Mucho éxito!** 🎓