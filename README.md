# Portal de Endocrinología y Nutrición Clínica
## Tu espacio sobre Endocrinología, Nutrición y Ejercicio

---

## 📁 ESTRUCTURA DE CARPETAS

```
portal-endocrinologia/
│
├── index.html              ← La web principal (no tocar)
│
├── css/
│   └── style.css           ← Estilos (no tocar salvo para ajustes de color)
│
├── js/
│   ├── config.js           ← ⭐ CONFIGURACIÓN (URL, email, teléfono)
│   ├── contenidos.js       ← ⭐ TODOS LOS TEXTOS Y GALERÍAS
│   ├── cuestionario.js     ← ⭐ PREGUNTAS DEL FORMULARIO
│   ├── app.js              ← Lógica de navegación (no tocar)
│   └── qr.js               ← Generador QR (no tocar)
│
├── img/
│   ├── desayunos/          ← Fotos de desayunos
│   ├── almuerzos/          ← Fotos de almuerzos
│   ├── meriendas/          ← Fotos de meriendas
│   ├── cenas/              ← Fotos de cenas
│   ├── snacks/             ← Fotos de snacks
│   └── recetas/            ← Fotos de recetas
│
└── pdfs/
    ├── planes-calorias/    ← PDFs de planes por calorías
    ├── situaciones-especiales/ ← PDFs de situaciones especiales
    ├── herramientas/       ← PDFs de herramientas
    └── cuestionario-imprimible.pdf
```

---

## ⚙️ CONFIGURACIÓN BÁSICA

Abre el archivo `js/config.js` con cualquier editor de texto (Notepad, VS Code, etc.)

### Cambiar URL de la web (para el QR principal)
```js
URL_WEB: "https://TU-USUARIO.github.io/portal-endocrinologia",
```
→ Reemplaza con la URL real cuando tengas el hosting.

### Cambiar URL del cuestionario (para el QR del cuestionario)
```js
URL_CUESTIONARIO: "https://forms.gle/TU-ENLACE-GOOGLE-FORM",
```
→ Crea el formulario en Google Forms y pega el enlace aquí.
→ El QR se regenera automáticamente al guardar y recargar.

### Cambiar correo receptor del cuestionario
```js
EMAIL_DESTINO: "endocrinologia@hjrj.es",
```

### Cambiar datos de contacto
```js
CONTACTO: {
  telefono: "959 01 60 00",
  email: "endocrinologia@hjrj.es",
  ...
}
```

---

## ✏️ EDITAR TEXTOS

Abre `js/contenidos.js` y busca la sección que quieras editar.

### Ejemplo: Editar "¿Qué es la obesidad?"
```js
"obesidad-que-es": `
  <h3>Tu título aquí</h3>
  <p>Tu texto aquí. Puedes usar párrafos normales.</p>
  <p>Otro párrafo...</p>
`,
```

### Añadir una imagen dentro de un texto:
```html
<img src="img/nombre-imagen.jpg" alt="Descripción de la imagen" class="content-img">
```

### Añadir un PDF descargable:
```html
<a href="pdfs/nombre-archivo.pdf" class="pdf-btn" target="_blank">📥 Descargar PDF</a>
```

### Añadir un vídeo de YouTube:
```html
<div style="margin:12px 0;">
  <iframe width="100%" height="220"
    src="https://www.youtube.com/embed/AQUI_EL_ID_DEL_VIDEO"
    frameborder="0" allowfullscreen
    style="border-radius:12px;">
  </iframe>
</div>
```
*(El ID del vídeo es lo que aparece después de "v=" en la URL)*

---

## 🖼️ AÑADIR IMÁGENES A LAS GALERÍAS

### Paso 1: Preparar la imagen
- Formato recomendado: JPG o WebP
- Tamaño recomendado: máximo 800x800px, menos de 300KB
- Herramienta gratuita para optimizar: https://squoosh.app

### Paso 2: Subir la imagen
Copia la imagen a la carpeta correspondiente:
- `img/desayunos/` para desayunos
- `img/almuerzos/` para almuerzos
- etc.

### Paso 3: Registrar la imagen en la web
Abre `js/contenidos.js` y busca el array correspondiente:

```js
desayunos: [
  { src: "img/desayunos/mi-nueva-foto.jpg", alt: "Descripción de la foto" },
  // Añade más líneas aquí...
],
```

---

## 📋 AÑADIR PLANES DE ALIMENTACIÓN

### Por calorías:
1. Guarda el PDF en `pdfs/planes-calorias/plan-XXXX.pdf`
2. Abre `index.html` y busca la sección `planes-calorias-grid`
3. Copia una tarjeta existente y modifícala:
```html
<div class="plan-card">
  <div class="plan-kcal">2200 kcal</div>
  <p>Plan activo</p>
  <a href="pdfs/planes-calorias/plan-2200.pdf" class="pdf-btn" target="_blank">📥 Descargar PDF</a>
</div>
```

### Situaciones especiales:
1. Guarda el PDF en `pdfs/situaciones-especiales/`
2. Busca la sección `planes-especiales` en `index.html`
3. Añade una tarjeta nueva.

---

## ❓ EDITAR PREGUNTAS FRECUENTES

Abre `js/contenidos.js` y busca el array `FAQ`:

```js
const FAQ = [
  {
    pregunta: "¿Puedo comer pan?",
    respuesta: "Sí, el pan no está prohibido..."
  },
  // Añade nuevas preguntas aquí:
  {
    pregunta: "Tu nueva pregunta aquí",
    respuesta: "Tu respuesta aquí"
  }
];
```

---

## 📝 EDITAR EL CUESTIONARIO

Abre `js/cuestionario.js` y busca el array `PASOS_CUESTIONARIO`.

Cada paso tiene un `titulo` y un array de `preguntas`.

### Tipos de pregunta disponibles:
- `"texto"` → campo de texto corto
- `"texto_largo"` → área de texto amplia
- `"radio"` → una sola opción
- `"checkbox"` → varias opciones
- `"numero"` → solo números

### Ejemplo de nueva pregunta:
```js
{
  id: "sueno",
  tipo: "radio",
  label: "¿Cuántas horas duermes aproximadamente?",
  opciones: ["Menos de 5h", "5-6h", "7-8h", "Más de 8h"],
  requerido: false
}
```

---

## 🌐 PUBLICAR EN GITHUB PAGES (GRATIS)

### Primera vez:

1. Crea una cuenta en https://github.com (gratis)
2. Haz clic en "+ New repository"
3. Nombre: `portal-endocrinologia`
4. Selecciona "Public"
5. Haz clic en "Create repository"
6. Sube todos los archivos arrastrándolos o usando "uploading an existing file"
7. Ve a Settings → Pages → Source: selecciona "main" → Save
8. En unos minutos tendrás la URL: `https://TU-USUARIO.github.io/portal-endocrinologia`
9. **Copia esa URL** y ponla en `js/config.js` → `URL_WEB`

### Actualizar contenidos:
1. Haz los cambios en los archivos de tu ordenador
2. Ve a tu repositorio en GitHub
3. Haz clic en el archivo que quieres actualizar
4. Haz clic en el icono del lápiz (editar)
5. Pega el nuevo contenido
6. Haz clic en "Commit changes"
7. La web se actualiza en 1-2 minutos

### Alternativa más fácil (para imágenes y PDFs):
Instala GitHub Desktop (https://desktop.github.com) — una aplicación con interfaz visual que facilita subir archivos sin comandos.

---

## 🎨 PERSONALIZAR COLORES

Para cambiar los colores principales, abre `css/style.css` y edita las variables al inicio:

```css
:root {
  --verde-primario: #4a9b6f;   ← Color principal de botones y acentos
  --verde-oscuro:   #2d6a4f;   ← Color de títulos y cabecera
  --verde-claro:    #74c69d;   ← Color de detalles suaves
  --verde-palido:   #d8f3dc;   ← Fondos de tarjetas verdes
  --beige:          #faf7f2;   ← Fondo general de la página
}
```

---

## ❤️ NOTAS FINALES

- La web funciona **sin conexión a internet** una vez descargada (excepto los QR y las fuentes de Google)
- Compatible con todos los navegadores modernos (Chrome, Firefox, Safari, Edge)
- Optimizada para móvil (prioridad absoluta)
- Los archivos PDFs e imágenes **no se generan automáticamente** — hay que subirlos manualmente
- El formulario usa `mailto:` para enviar los datos — requiere que el dispositivo tenga un cliente de correo configurado. Para mayor fiabilidad, se recomienda usar **Google Forms** y enlazarlo con el QR.

---
### Añadir rutinas en PDF

1. Sube el archivo a `pdfs/rutinas/`.
2. Abre `contenidos.js` y añade una ficha dentro del array `RUTINAS` siguiendo el ejemplo incluido.
3. La nueva rutina aparecerá automáticamente en **Movimiento y Ejercicio → Rutinas descargables**.

*Endonutri · Recursos claros y prácticos para aprender, cuidarse y avanzar.*
