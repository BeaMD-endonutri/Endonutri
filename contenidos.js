/**
 * =============================================
 *  CONTENIDOS DEL PORTAL
 *  Edita este archivo para añadir/modificar contenido
 * =============================================
 *
 *  CÓMO AÑADIR TEXTO:
 *    Escribe HTML dentro de las comillas ``
 *    Ejemplo: <p>Tu párrafo aquí</p>
 *
 *  CÓMO AÑADIR IMÁGENES:
 *    1. Sube la imagen a la carpeta correspondiente
 *    2. Añade: <img src="img/carpeta/nombre.jpg" alt="Descripción" class="content-img">
 *
 *  CÓMO AÑADIR PDFs:
 *    1. Sube el PDF a la carpeta /pdfs/
 *    2. Añade: <a href="pdfs/nombre.pdf" class="pdf-btn" target="_blank">📥 Descargar PDF</a>
 *
 *  CÓMO AÑADIR VÍDEOS DE YOUTUBE:
 *    <div class="video-embed">
 *      <iframe src="https://www.youtube.com/embed/ID_DEL_VIDEO"
 *              allowfullscreen></iframe>
 *    </div>
 */

// =============================================
// SECCIONES DE TEXTO (Obesidad, Ejercicio, Herramientas)
// =============================================
const CONTENIDOS = {

  // ---------- ENTENDIENDO LA OBESIDAD ----------

  "obesidad-que-es": `
    <h3>La obesidad es una enfermedad crónica</h3>
    <p>La obesidad es una <strong>enfermedad crónica, compleja y multifactorial</strong>. No es una cuestión de fuerza de voluntad. Está influenciada por factores genéticos, metabólicos, hormonales, psicológicos y sociales.</p>
    <p>Se define cuando el Índice de Masa Corporal (IMC) es igual o superior a 30 kg/m². Pero el IMC es solo una herramienta, no el único indicador de salud.</p>
    <p>El tratamiento de la obesidad requiere un enfoque integral: alimentación, actividad física, apoyo psicológico y, en algunos casos, tratamiento médico o quirúrgico.</p>
    <!-- Añade más texto o imágenes aquí -->
  `,

  "obesidad-por-que": `
    <h3>Tu cuerpo lucha para recuperar el peso perdido</h3>
    <p>Cuando perdemos peso, nuestro cuerpo activa mecanismos de "defensa" para recuperarlo. Esto incluye cambios hormonales (aumenta el hambre, disminuye la saciedad) y una reducción del gasto metabólico.</p>
    <p>No es debilidad. Es biología. Tu cuerpo percibe la pérdida de peso como una amenaza y se adapta para sobrevivir.</p>
    <p>Por eso la pérdida de peso debe ser <strong>gradual, sostenible y acompañada</strong> por profesionales.</p>
  `,

  "obesidad-hambre": `
    <h3>Hambre real vs. hambre emocional</h3>
    <p>Existen distintos tipos de hambre:</p>
    <p>🟢 <strong>Hambre fisiológica:</strong> aparece gradualmente, cualquier alimento la calma, desaparece al comer.</p>
    <p>🔴 <strong>Hambre emocional:</strong> aparece de repente, pide alimentos específicos (dulces, ultraprocesados), no desaparece aunque comas.</p>
    <p>Las hormonas del hambre (grelina) y la saciedad (leptina, GLP-1, PYY) regulan cuándo y cuánto comemos. En la obesidad, estas señales pueden estar alteradas.</p>
  `,

  "obesidad-metabolismo": `
    <h3>El metabolismo: ¿qué es exactamente?</h3>
    <p>El metabolismo es el conjunto de procesos que usa tu cuerpo para obtener y gastar energía. Se divide en:</p>
    <p>⚡ <strong>Metabolismo basal:</strong> la energía que gastas solo para vivir (respirar, latir el corazón...). Representa el 60-70% de tu gasto total.</p>
    <p>🏃 <strong>Actividad física:</strong> el ejercicio y el movimiento del día a día.</p>
    <p>🍽️ <strong>Efecto térmico de los alimentos:</strong> la energía que usas para digerir.</p>
    <p>El metabolismo es individual y puede variar. No existe un "metabolismo lento" como excusa universal, pero sí hay factores que lo influyen: edad, masa muscular, hormonas tiroideas, sueño y más.</p>
  `,

  "obesidad-mitos": `
    <h3>Mitos frecuentes sobre la obesidad</h3>
    <p>❌ <strong>"La obesidad es solo cuestión de voluntad"</strong><br>
    ✅ La obesidad tiene bases biológicas, genéticas y ambientales. No es una elección.</p>
    <p>❌ <strong>"Para adelgazar solo hay que comer menos y moverse más"</strong><br>
    ✅ Es más complejo. Las hormonas, el sueño, el estrés y la microbiota también influyen.</p>
    <p>❌ <strong>"Los carbohidratos engordan"</strong><br>
    ✅ Ningún nutriente aislado engorda. El exceso de calorías totales es lo que importa.</p>
    <p>❌ <strong>"Saltarse el desayuno ayuda a adelgazar"</strong><br>
    ✅ Depende de cada persona. No hay una sola pauta válida para todos.</p>
    <p>❌ <strong>"Los productos 'light' son siempre una buena opción"</strong><br>
    ✅ Pueden tener menos grasa pero más azúcar. Hay que leer las etiquetas.</p>
  `,

  "obesidad-composicion": `
    <h3>No solo importa el peso en la báscula</h3>
    <p>El peso corporal es la suma de músculo, grasa, hueso, agua y órganos. Lo que realmente importa en salud es la <strong>composición corporal</strong>.</p>
    <p>Podemos tener un peso "normal" con exceso de grasa (obesidad sarcopénica), o un peso elevado con mucho músculo y poca grasa.</p>
    <p>Por eso en consulta usamos mediciones como:</p>
    <p>📏 <strong>Perímetro de cintura:</strong> indicador de grasa visceral (la más peligrosa)</p>
    <p>⚖️ <strong>Bioimpedancia:</strong> mide % de grasa, músculo y agua</p>
    <p>📊 <strong>IMC:</strong> útil como orientación, pero no suficiente por sí solo</p>
  `,

  // ---------- EJERCICIO ----------

  "ejercicio-empezar": `
    <h3>Cómo empezar a moverse desde cero</h3>
    <p>Lo más importante es <strong>empezar</strong>. No necesitas ir al gimnasio ni hacer ejercicio intenso para empezar a notar beneficios.</p>
    <p>🎯 <strong>Semana 1-2:</strong> Camina 10-15 minutos al día. Cualquier momento vale.</p>
    <p>🎯 <strong>Semana 3-4:</strong> Aumenta a 20-30 minutos. Añade alguna cuesta.</p>
    <p>🎯 <strong>Mes 2:</strong> Intenta llegar a los 150 minutos semanales de actividad moderada.</p>
    <p>💡 <strong>Consejo:</strong> Encuentra una actividad que disfrutes. La adherencia a largo plazo es lo que marca la diferencia.</p>
  `,

  "ejercicio-fuerza": `
    <h3>El entrenamiento de fuerza: tu mejor aliado</h3>
    <p>Desarrollar músculo es fundamental para la salud metabólica. El músculo consume energía incluso en reposo, ayuda a controlar la glucosa y mejora la composición corporal.</p>
    <p>No necesitas pesas enormes. Puedes empezar con tu propio peso corporal.</p>
    <p>🏋️ <strong>Ejercicios básicos para empezar:</strong><br>
    Sentadillas · Zancadas · Flexiones · Plancha · Puente de glúteos</p>
    <p>Recomendación: 2-3 sesiones por semana, dejando un día de descanso entre sesiones.</p>
  `,

  "ejercicio-cardio": `
    <h3>Cardio: mueve tu corazón</h3>
    <p>El ejercicio cardiovascular mejora la salud del corazón, la capacidad pulmonar y el estado de ánimo. También ayuda a crear un déficit calórico.</p>
    <p>Ejemplos de cardio de bajo impacto (ideal para empezar):</p>
    <p>🚶 Caminar rápido · 🚴 Bicicleta (estática o normal) · 🏊 Natación · 💃 Baile</p>
    <p>El cardio moderado (puedes hablar pero notas el esfuerzo) durante 30 minutos, 5 días a la semana, es el objetivo recomendado.</p>
  `,

  "ejercicio-casa": `
    <h3>Ejercicio en casa sin equipamiento</h3>
    <p>No necesitas salir de casa para mantenerte activo/a. Con 20-30 minutos al día puedes hacer una rutina completa.</p>
    <p>💡 <strong>Rutina básica en casa (3 días/semana):</strong></p>
    <p>1. Calentamiento: marcha en el sitio 3 min<br>
    2. Sentadillas: 3 series de 10<br>
    3. Flexiones (rodillas si necesario): 3 series de 8<br>
    4. Puente de glúteos: 3 series de 12<br>
    5. Plancha: 3 series de 20 segundos<br>
    6. Enfriamiento: estiramientos suaves 5 min</p>
  `,

  "ejercicio-pasos": `
    <div class="steps-page">
      <span class="eyebrow">MUÉVETE MÁS A LO LARGO DEL DÍA</span>
      <h3>Los pasos diarios también cuentan</h3>
      <p>Entrenar fuerza es fundamental para conservar el músculo, cuidar los huesos y mantener la autonomía. Sin embargo, hacer fuerza dos o tres días por semana <strong>no compensa por completo pasar el resto del tiempo sentado</strong>. Caminar añade movimiento cotidiano, mejora la resistencia y ayuda a reducir el sedentarismo.</p>

      <div class="steps-combo">
        <div><span>👟</span><strong>Pasos diarios</strong><small>Corazón, resistencia y menos tiempo sentado</small></div>
        <b aria-hidden="true">+</b>
        <div><span>🏋️</span><strong>Entrenamiento de fuerza</strong><small>Músculo, huesos y capacidad para el día a día</small></div>
      </div>

      <h3>¿Cuántos pasos hay que dar?</h3>
      <p><strong>No existe una cifra mágica ni una meta igual para todo el mundo.</strong> La evidencia más reciente indica que aumentar los pasos desde un nivel bajo ya se relaciona con beneficios para la salud. Para muchos adultos, acercarse a <strong>7.000 pasos diarios</strong> puede ser una referencia útil y alcanzable.</p>
      <p>Los conocidos 10.000 pasos también son una buena cantidad si encajan en tu vida, pero <strong>no son obligatorios</strong>. Una persona que pasa de 3.000 a 4.000 o 5.000 pasos ya está progresando, aunque todavía no llegue a 7.000.</p>

      <div class="steps-goal-card">
        <span aria-hidden="true">🎯</span>
        <div>
          <strong>Una forma sencilla de empezar</strong>
          <p>Mira tu media de los últimos siete días y añade aproximadamente <strong>500–1.000 pasos diarios</strong>. Cuando te resulte fácil, puedes volver a subir poco a poco. Tu objetivo debe adaptarse a tu estado de salud, movilidad, tiempo disponible y punto de partida.</p>
        </div>
      </div>

      <h3>¿Por qué es beneficioso caminar?</h3>
      <ul class="steps-benefits">
        <li>Ayuda a cuidar la salud cardiovascular y metabólica.</li>
        <li>Mejora la capacidad para caminar, subir escaleras y realizar tareas cotidianas.</li>
        <li>Reduce parte del tiempo que pasamos sentados.</li>
        <li>Puede favorecer el bienestar mental y la calidad del sueño.</li>
        <li>Aumenta el gasto energético y puede ayudar a controlar el peso, aunque la pérdida de grasa requiere un déficit calórico.</li>
      </ul>
      <p class="steps-evidence-note"><strong>Importante:</strong> gran parte de los estudios sobre número de pasos son observacionales. Esto significa que muestran una relación clara entre caminar más y una mejor salud, pero no permiten asegurar que toda la diferencia se deba únicamente a los pasos.</p>

      <figure class="steps-infographic">
        <img src="img/pasos-diarios.webp" alt="Infografía con una meta orientativa de 7.000 pasos, la combinación de caminar y entrenar fuerza y consejos para sumar pasos" loading="lazy">
        <figcaption>Utiliza la cifra como orientación, no como un examen diario.</figcaption>
      </figure>

      <h3>Ideas para sumar pasos sin hacerlos todos de una vez</h3>
      <div class="steps-tips">
        <div><span>🕒</span><p><strong>Reparte el movimiento.</strong> Tres paseos de 10 minutos también cuentan.</p></div>
        <div><span>🍽️</span><p><strong>Pasea después de comer.</strong> Una vuelta corta es más fácil de mantener que una caminata larga.</p></div>
        <div><span>🪜</span><p><strong>Usa las escaleras</strong> en lugar del ascensor cuando sea posible.</p></div>
        <div><span>🚌</span><p><strong>Baja una parada antes</strong> o aparca un poco más lejos.</p></div>
        <div><span>📞</span><p><strong>Camina mientras hablas</strong> por teléfono o escuchas un audio.</p></div>
        <div><span>📱</span><p><strong>Usa el móvil, un reloj o un podómetro.</strong> Las aplicaciones de salud pueden registrar tus pasos automáticamente.</p></div>
        <div><span>⏰</span><p><strong>Pon recordatorios.</strong> Levántate y muévete unos minutos después de periodos largos sentado.</p></div>
        <div><span>👥</span><p><strong>Busca compañía.</strong> Caminar con otra persona puede hacerlo más agradable y constante.</p></div>
      </div>

      <aside class="steps-safety"><strong>Adáptalo a ti:</strong> si tienes dolor, problemas de movilidad, mareos o una enfermedad que limite el ejercicio, consulta con un profesional sanitario antes de aumentar mucho la actividad.</aside>

      <div class="steps-sources">
        <h3>Fuentes y evidencia</h3>
        <p>Contenido basado en la <a href="https://pubmed.ncbi.nlm.nih.gov/40713949/" target="_blank" rel="noopener">revisión sistemática de 2025 sobre pasos y salud</a>, el <a href="https://pubmed.ncbi.nlm.nih.gov/37555441/" target="_blank" rel="noopener">metaanálisis sobre pasos y mortalidad cardiovascular</a> y las <a href="https://www.who.int/europe/publications/i/item/9789240014886" target="_blank" rel="noopener">recomendaciones de actividad física de la OMS</a>.</p>
      </div>
    </div>
  `,

  "ejercicio-videos": `
    <h3>Vídeos recomendados</h3>
    <p>Próximamente añadiremos vídeos de rutinas adaptadas para nuestros pacientes.</p>
    <!-- EJEMPLO DE VÍDEO YOUTUBE - Descomenta y cambia el ID:
    <div class="video-embed">
      <iframe width="100%" height="220"
        src="https://www.youtube.com/embed/AQUI_EL_ID_DEL_VIDEO"
        title="Ejercicio en casa"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style="border-radius:12px; margin-top:12px;">
      </iframe>
    </div>
    -->
  `,

  // ---------- HERRAMIENTAS ----------

  "herramientas-etiquetas": `
    <h3>Cómo leer una etiqueta nutricional</h3>
    <p>Cuando leas una etiqueta, fíjate en este orden:</p>
    <p>1️⃣ <strong>Tamaño de ración:</strong> toda la información se refiere a esa cantidad. Si comes el doble, duplicas todo.</p>
    <p>2️⃣ <strong>Calorías por ración:</strong> orientativo, no es lo único importante.</p>
    <p>3️⃣ <strong>Azúcares:</strong> menos de 5g/100g = bajo en azúcar. Más de 22,5g = alto.</p>
    <p>4️⃣ <strong>Grasas saturadas:</strong> menos de 1,5g/100g = bajo. Más de 5g = alto.</p>
    <p>5️⃣ <strong>Sal:</strong> menos de 0,3g/100g = bajo. Más de 1,5g = alto.</p>
    <p>6️⃣ <strong>Lista de ingredientes:</strong> van de mayor a menor cantidad. Si el azúcar o la grasa aparecen en los primeros 3, es un producto de consumo ocasional.</p>
  `,

  "herramientas-compra": `
    <h3>Claves para una compra saludable</h3>
    <p>🛒 <strong>Planifica antes de ir:</strong> haz una lista. Comprar con hambre lleva a decisiones impulsivas.</p>
    <p>🥦 <strong>Empieza por frutas y verduras:</strong> que ocupen la mayor parte del carro.</p>
    <p>🐟 <strong>Proteínas variadas:</strong> pescado, huevos, legumbres, pollo, pavo.</p>
    <p>🌾 <strong>Cereales integrales:</strong> pan, arroz, pasta, avena. Más fibra, más saciedad.</p>
    <p>🥜 <strong>Frutos secos sin sal:</strong> en cantidad moderada, son excelentes.</p>
    <p>🚫 <strong>Limita:</strong> ultraprocesados, bebidas azucaradas, bollería industrial, embutidos grasos.</p>
    <p>💡 <strong>Regla práctica:</strong> Si el producto tiene más de 5 ingredientes que no reconoces, mejor dejarlo.</p>
  `,

  "herramientas-raciones": `
    <h3>El tamaño de las raciones con la mano</h3>
    <p>Puedes usar tu propia mano como guía de raciones, sin necesidad de báscula:</p>
    <p>✊ <strong>Puño cerrado</strong> → una ración de hidratos (arroz, pasta, patata cocida)</p>
    <p>🤲 <strong>Palma de la mano</strong> → una ración de proteína (carne, pescado)</p>
    <p>👍 <strong>Pulgar</strong> → una ración de grasa (aceite, frutos secos)</p>
    <p>🖐️ <strong>Mano abierta</strong> → una ración de verdura cruda</p>
    <p>🤜 <strong>Puño</strong> → una ración de fruta</p>
    <p>💡 Este método es aproximado pero práctico para el día a día.</p>
  `,

  "herramientas-fuera": `
    <h3>Estrategias para comer fuera de casa</h3>
    <p>Comer en restaurantes no tiene por qué arruinar tu alimentación. Con estas claves lo manejarás bien:</p>
    <p>🔍 <strong>Mira el menú antes:</strong> decide en casa, sin presión ni hambre.</p>
    <p>🥗 <strong>Empieza por ensalada o verdura:</strong> ayuda a comer menos del plato principal.</p>
    <p>💧 <strong>Bebe agua antes y durante:</strong> reduce el apetito y evita el consumo de refrescos.</p>
    <p>🍽️ <strong>Pide la salsa aparte:</strong> controlas mejor la cantidad.</p>
    <p>🐟 <strong>Elige preparaciones sencillas:</strong> a la plancha, al vapor, al horno. Evita rebozados y fritos.</p>
    <p>🍰 <strong>Postres:</strong> fruta o compartir si quieres algo dulce.</p>
    <p>🚫 <strong>No hay alimentos prohibidos:</strong> un día puntual no define tu alimentación.</p>
  `,

  "herramientas-plato": ""  // el plato tiene diseño propio en el HTML
};

// =============================================
// GALERÍA DE IMÁGENES POR CATEGORÍA
// =============================================
/**
 * INSTRUCCIONES:
 * 1. Sube tu imagen a la carpeta correspondiente (ej: img/desayunos/)
 * 2. Añade una entrada en el array correspondiente:
 *    { src: "img/desayunos/nombre-imagen.jpg", alt: "Descripción de la imagen" }
 *
 * FORMATOS ACEPTADOS: .jpg · .jpeg · .png · .webp · .gif
 */
const GALERIAS = {
  desayunos: [
       { src: "img/desayunos/DESAYUNOS.jpg", alt: "Desayunos para cada día" },
  ],
  almuerzos: [
       { src: "img/almuerzos/ALMUERZOS.jpg", alt: "Almuerzos fáciles y nutritivos" },
  ],
  meriendas: [
       { src: "img/meriendas/MERIENDAS.png", alt: "Meriendas saciantes" },
  ],
  cenas: [
       { src: "img/cenas/CENAS.jpg", alt: "Cenas rápidas y apetecibles" },
  ],
  snacks: [
    // { src: "img/snacks/zanahoria-hummus.jpg", alt: "Zanahoria con hummus" },
    // { src: "img/snacks/manzana.jpg",           alt: "Media manzana" },
  ],
  recetas: [
    // { src: "img/recetas/gazpacho.jpg",      alt: "Gazpacho andaluz" },
    // { src: "img/recetas/pisto-manchego.jpg", alt: "Pisto manchego" },
  ]
};

// =============================================
// RUTINAS DESCARGABLES EN PDF
// =============================================
/**
 * 1. Sube el PDF a /pdfs/rutinas/
 * 2. Añade una ficha al array. Ejemplo:
 * {
 *   titulo: "Rutina de iniciación",
 *   descripcion: "Trabajo global · 2 días por semana",
 *   nivel: "principiante",
 *   icono: "🌱",
 *   archivo: "pdfs/rutinas/rutina-iniciacion.pdf"
 * }
 */
const RUTINAS = [
  {
    titulo: "Rutina con bandas · Día A",
    descripcion: "8 ejercicios de cuerpo completo con bandas y material doméstico.",
    nivel: "principiante",
    etiqueta: "DÍA A",
    icono: "A",
    archivo: "pdfs/rutinas/rutina-principiante-dia-a.pdf"
  },
  {
    titulo: "Rutina con bandas · Día B",
    descripcion: "8 ejercicios complementarios para continuar la semana de entrenamiento.",
    nivel: "principiante",
    etiqueta: "DÍA B",
    icono: "B",
    archivo: "pdfs/rutinas/rutina-principiante-dia-b.pdf"
  },
  {
    titulo: "Rutina con bandas · Día C",
    descripcion: "8 ejercicios para completar la programación semanal de iniciación.",
    nivel: "principiante",
    etiqueta: "DÍA C",
    icono: "C",
    archivo: "pdfs/rutinas/rutina-principiante-dia-c.pdf"
  }
];

const NIVELES_RUTINA = [
  {
    id: "principiante",
    titulo: "Principiante",
    descripcion: "Tres sesiones semanales para aprender la técnica y crear una base de fuerza.",
    icono: "🌱"
  },
  {
    id: "intermedio",
    titulo: "Intermedio",
    descripcion: "Rutinas para seguir progresando cuando domines el nivel inicial.",
    icono: "🌿"
  },
  {
    id: "avanzado",
    titulo: "Avanzado",
    descripcion: "Propuestas de mayor exigencia para personas con experiencia previa.",
    icono: "🌳"
  }
];

// =============================================
// PREGUNTAS FRECUENTES (FAQ)
// =============================================
/**
 * Para añadir o editar una pregunta:
 * Añade un nuevo objeto { pregunta: "...", respuesta: "..." }
 * Separado por coma del anterior.
 */
const FAQ = [
  {
    pregunta: "¿Puedo comer pan?",
    respuesta: "Sí, el pan no está prohibido. Preferimos pan integral, en cantidades moderadas y dentro de una dieta equilibrada. Un par de rebanadas al día, bien combinadas, no son un problema."
  },
  {
    pregunta: "¿Tengo que pasar hambre para adelgazar?",
    respuesta: "No. Una dieta bien planificada debe mantenerte saciado/a. Si pasas mucha hambre, tu cuerpo activará mecanismos de defensa que harán más difícil la pérdida de peso. Cuéntanoslo en consulta y ajustamos el plan."
  },
  {
    pregunta: "¿Qué pasa si un día me salto la dieta?",
    respuesta: "Absolutamente nada. Un día puntual no define tu proceso. Lo que importa es el patrón general de alimentación a lo largo del tiempo. No hay alimentos prohibidos ni días arruinados."
  },
  {
    pregunta: "¿Cuánto peso puedo perder por semana?",
    respuesta: "Lo saludable y sostenible es entre 0,5 y 1 kg por semana. Pérdidas más rápidas suelen implicar pérdida de músculo y agua, y son difíciles de mantener."
  },
  {
    pregunta: "¿Tengo que hacer ejercicio para adelgazar?",
    respuesta: "El ejercicio no es imprescindible para la pérdida de peso, pero es fundamental para la salud general, el mantenimiento del peso perdido y la mejora de la composición corporal. Recomendamos combinarlo siempre con la alimentación."
  },
  {
    pregunta: "¿La fruta engorda por la noche?",
    respuesta: "No. La fruta es un alimento saludable independientemente de la hora a la que se consuma. Lo que importa es el total de calorías del día, no el horario."
  },
  {
    pregunta: "¿Puedo tomar suplementos para adelgazar?",
    respuesta: "No recomendamos ningún suplemento sin supervisión médica. Muchos productos del mercado no tienen evidencia científica y algunos pueden ser perjudiciales. Consulta siempre con tu equipo médico. Los análogos GLP-1 (Como Rybelsus, Ozempic, Wegovy o Mounjaro) pueden ser de gran ayuda siempre que se acompañen de una serie de hábitos dietéticos y de ejercicio saludables. Si tu facultativo te los ha recetado sigue siempre sus intrucciones. Las sesiones grupales e individuales de enfermería juegan un papel crucial en el mantenimiento de estos hábitos, además de resolver las dudas pertinentes acerca de estos medicamentos y sus posibles efectos asociados. "
  },
  {
    pregunta: "¿Cuándo empezaré a ver resultados?",
    respuesta: "Los cambios internos (tensión arterial, glucosa, energía) suelen notarse antes que el peso en la báscula. Normalmente en 2-4 semanas de adherencia al plan se observan cambios medibles."
  }
];

// =============================================
// FUNCIÓN: Cargar todos los contenidos
// =============================================
function cargarContenidos() {
  // Textos
  Object.entries(CONTENIDOS).forEach(([id, html]) => {
    const el = document.getElementById("content-" + id);
    if (el && html.trim()) el.innerHTML = html;
  });

  // Galerías
  Object.entries(GALERIAS).forEach(([categoria, imagenes]) => {
    const container = document.getElementById("gallery-" + categoria);
    if (!container) return;
    if (imagenes.length === 0) return; // muestra el placeholder
    container.innerHTML = "";
    imagenes.forEach(img => {
      const item = document.createElement("div");
      item.className = "gallery-caption";
      item.innerHTML = `
        <img src="${img.src}" alt="${img.alt}" loading="lazy"
             onclick="openLightbox('${img.src}', '${img.alt}')">
        <div class="gallery-caption-text">${img.alt}</div>
      `;
      container.appendChild(item);
    });
  });

  // Rutinas descargables
  const routinesGrid = document.getElementById("routinesGrid");
  if (routinesGrid) {
    const levelNav = `
      <nav class="routine-level-nav" aria-label="Niveles de las rutinas">
        ${NIVELES_RUTINA.map(nivel => `<a href="#routine-level-${nivel.id}">${nivel.titulo}</a>`).join("")}
      </nav>`;

    const levelSections = NIVELES_RUTINA.map(nivel => {
      const rutinasNivel = RUTINAS.filter(rutina => rutina.nivel === nivel.id);
      const cards = rutinasNivel.length
        ? `<div class="routines-grid">${rutinasNivel.map(rutina => `
            <article class="routine-card">
              <div class="routine-icon" aria-hidden="true">${rutina.icono || "🏃"}</div>
              <span class="eyebrow">${rutina.etiqueta || "RUTINA"}</span>
              <h3>${rutina.titulo}</h3>
              <p>${rutina.descripcion || "Consulta la rutina cuando quieras."}</p>
              <div class="routine-actions">
                <a href="${rutina.archivo}" class="pdf-btn" target="_blank" rel="noopener">Ver PDF ↗</a>
                <a href="${rutina.archivo}" class="pdf-download" download>Descargar ↓</a>
              </div>
            </article>
          `).join("")}</div>`
        : `<div class="routines-empty">
            <span>${nivel.icono}</span>
            <h3>Rutinas en preparación</h3>
            <p>Próximamente añadiremos propuestas para el nivel ${nivel.titulo.toLowerCase()}.</p>
          </div>`;

      return `
        <section class="routine-level" id="routine-level-${nivel.id}">
          <header class="routine-level-header">
            <span class="routine-level-icon" aria-hidden="true">${nivel.icono}</span>
            <div><span class="eyebrow">NIVEL</span><h3>${nivel.titulo}</h3><p>${nivel.descripcion}</p></div>
          </header>
          ${cards}
        </section>`;
    }).join("");

    routinesGrid.innerHTML = levelNav + levelSections;
  }

  // FAQ
  const faqContainer = document.getElementById("faqContainer");
  if (faqContainer) {
    faqContainer.innerHTML = FAQ.map((item, i) => `
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
          <span>${item.pregunta}</span>
          <span class="faq-chevron">▾</span>
        </button>
        <div class="faq-answer">${item.respuesta}</div>
      </div>
    `).join("");
  }

  // Contacto
  const contactGrid = document.getElementById("contactGrid");
  if (contactGrid && typeof CONFIG !== "undefined") {
    const c = CONFIG.CONTACTO;
    let cards = "";
    if (c.telefono) cards += `
      <a href="tel:${c.telefono.replace(/\s/g,'')}" class="contact-card" style="text-decoration:none;">
        <div class="contact-icon">📞</div>
        <div class="contact-info">
          <div class="contact-label">Teléfono</div>
          <div class="contact-value">${c.telefono}</div>
          ${c.telefono_ext ? `<div class="contact-sub">${c.telefono_ext}</div>` : ""}
        </div>
      </a>`;
    if (c.email) cards += `
      <a href="mailto:${c.email}" class="contact-card" style="text-decoration:none;">
        <div class="contact-icon">✉️</div>
        <div class="contact-info">
          <div class="contact-label">Email</div>
          <div class="contact-value">${c.email}</div>
        </div>
      </a>`;
    if (c.horario) cards += `
      <div class="contact-card">
        <div class="contact-icon">🕐</div>
        <div class="contact-info">
          <div class="contact-label">Horario</div>
          <div class="contact-value">${c.horario}</div>
        </div>
      </div>`;
    if (c.direccion) cards += `
      <a href="${c.google_maps_url || '#'}" target="_blank" class="contact-card" style="text-decoration:none;">
        <div class="contact-icon">📍</div>
        <div class="contact-info">
          <div class="contact-label">Dirección</div>
          <div class="contact-value">${c.direccion}</div>
          <div class="contact-sub">Ver en Google Maps →</div>
        </div>
      </a>`;
    if (c.whatsapp) cards += `
      <a href="https://wa.me/34${c.whatsapp.replace(/\s/g,'')}" target="_blank" class="contact-card" style="text-decoration:none;">
        <div class="contact-icon">💬</div>
        <div class="contact-info">
          <div class="contact-label">WhatsApp</div>
          <div class="contact-value">${c.whatsapp}</div>
        </div>
      </a>`;
    contactGrid.innerHTML = cards || `
      <div class="contact-card contact-empty">
        <div class="contact-icon">✉️</div>
        <div class="contact-info">
          <div class="contact-label">Contacto</div>
          <div class="contact-value">Próximamente</div>
          <div class="contact-sub">Este espacio se actualizará con una vía de contacto de Endonutri.</div>
        </div>
      </div>`;
  }
}
