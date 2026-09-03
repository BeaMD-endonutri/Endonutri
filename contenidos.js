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

  "obesidad-piramide": `
    <div class="habits-page">
      <span class="eyebrow">DE LO MÁS IMPORTANTE A LO MÁS PEQUEÑO</span>
      <h3>Construye desde la base</h3>
      <p>Esta pirámide adapta la lógica del modelo de prioridades de Eric Helms al tratamiento actual del sobrepeso y la obesidad. Su idea principal es sencilla: <strong>primero deben funcionar los hábitos básicos; después se afinan los detalles</strong>.</p>
      <p>No es una escala clínica oficial ni significa que todas las personas necesiten lo mismo. La obesidad es una enfermedad compleja y, además de los hábitos, puede requerir apoyo psicológico, medicación o cirugía cuando estén indicados.</p>

      <div class="habits-intro-note"><span>👇</span><p><strong>Pulsa cada nivel</strong> para ver ejemplos, consejos y un mito frecuente. Empieza por la base, no por la punta.</p></div>

      <div class="habits-pyramid" aria-label="Pirámide interactiva de buenos hábitos">
        <button class="habit-level habit-level-6" onclick="toggleHabitLevel('habit-panel-6', this)" aria-expanded="false" aria-controls="habit-panel-6"><span>6</span>Detalles y suplementos<small>Opcionales</small></button>
        <button class="habit-level habit-level-5" onclick="toggleHabitLevel('habit-panel-5', this)" aria-expanded="false" aria-controls="habit-panel-5"><span>5</span>Sueño y recuperación<small>Facilitan el proceso</small></button>
        <button class="habit-level habit-level-4" onclick="toggleHabitLevel('habit-panel-4', this)" aria-expanded="false" aria-controls="habit-panel-4"><span>4</span>Fuerza y movimiento<small>Protegen la salud y el músculo</small></button>
        <button class="habit-level habit-level-3" onclick="toggleHabitLevel('habit-panel-3', this)" aria-expanded="false" aria-controls="habit-panel-3"><span>3</span>Calidad y saciedad<small>Alimentos que nutren y llenan</small></button>
        <button class="habit-level habit-level-2" onclick="toggleHabitLevel('habit-panel-2', this)" aria-expanded="false" aria-controls="habit-panel-2"><span>2</span>Déficit moderado<small>La condición para perder grasa</small></button>
        <button class="habit-level habit-level-1" onclick="toggleHabitLevel('habit-panel-1', this)" aria-expanded="false" aria-controls="habit-panel-1"><span>1</span>Constancia, entorno y apoyo<small>La base que sostiene todo</small></button>
      </div>

      <div class="habit-panels" aria-live="polite">
        <article class="habit-panel" id="habit-panel-1">
          <div class="habit-panel-title"><span>🌱</span><div><small>NIVEL 1 · LA BASE</small><h3>Constancia, entorno y apoyo</h3></div></div>
          <p>El mejor plan no es el más perfecto, sino el que puedes mantener. Los cambios pequeños y repetidos suelen ser más útiles que empezar con muchas prohibiciones y abandonar a las pocas semanas.</p>
          <div class="habit-example"><strong>Ejemplos:</strong> planificar dos o tres comidas sencillas, tener opciones saludables visibles, pedir ayuda en casa o acudir a seguimiento profesional.</div>
          <p class="habit-tip"><strong>Tip:</strong> elige solo uno o dos cambios para esta semana y anota cuándo los vas a realizar.</p>
          <p class="habit-myth"><strong>Mito:</strong> “Si tuviera fuerza de voluntad, podría hacerlo solo”.<br><span>Realidad:</span> el entorno, el hambre, el sueño, la salud mental, la biología y los recursos disponibles influyen. Pedir apoyo no es fracasar.</p>
        </article>

        <article class="habit-panel" id="habit-panel-2">
          <div class="habit-panel-title"><span>⚖️</span><div><small>NIVEL 2</small><h3>Un déficit energético moderado</h3></div></div>
          <p>Para perder grasa, el cuerpo necesita recibir algo menos de energía de la que gasta durante un tiempo. <strong>Déficit no significa pasar hambre ni comer lo mínimo posible.</strong> Debe ser asumible, individualizado y proteger la salud.</p>
          <div class="habit-example"><strong>Ejemplos:</strong> ajustar raciones, limitar bebidas calóricas y picoteos poco saciantes, cocinar más en casa o aplicar el método del plato.</div>
          <p class="habit-tip"><strong>Tip:</strong> observa la tendencia durante varias semanas. El peso puede variar de un día a otro por agua, sal, menstruación o contenido intestinal.</p>
          <p class="habit-myth"><strong>Mito:</strong> “Cuanto menos coma, más sano y rápido adelgazaré”.<br><span>Realidad:</span> una restricción excesiva aumenta el hambre, dificulta cubrir nutrientes y favorece la pérdida de masa muscular y el abandono.</p>
        </article>

        <article class="habit-panel" id="habit-panel-3">
          <div class="habit-panel-title"><span>🥗</span><div><small>NIVEL 3</small><h3>Calidad de la dieta y saciedad</h3></div></div>
          <p>La energía importa para el peso, pero la calidad importa para la salud, el hambre y la capacidad de mantener el plan. Prioriza verduras, fruta entera, legumbres, alimentos proteicos, cereales integrales, frutos secos y aceite de oliva virgen extra.</p>
          <div class="habit-example"><strong>Ejemplos:</strong> yogur natural con fruta; lentejas con verduras; pescado con patata y ensalada; tortilla con pisto y pan integral.</div>
          <p class="habit-tip"><strong>Tip:</strong> incluye una fuente de proteína y algún alimento rico en fibra en las comidas principales.</p>
          <p class="habit-myth"><strong>Mito:</strong> “Para adelgazar tengo que eliminar los carbohidratos”.<br><span>Realidad:</span> pan, arroz, pasta, patata o legumbres pueden formar parte del plan. Importan la cantidad, la calidad y el conjunto de la dieta.</p>
        </article>

        <article class="habit-panel" id="habit-panel-4">
          <div class="habit-panel-title"><span>🏋️</span><div><small>NIVEL 4</small><h3>Fuerza, pasos y actividad física</h3></div></div>
          <p>La actividad física aporta beneficios aunque la báscula cambie poco. Durante la pérdida de peso, el entrenamiento de fuerza ayuda a conservar masa muscular. Caminar, subir escaleras y hacer actividad aeróbica cuidan el corazón y reducen el tiempo sentado.</p>
          <div class="habit-example"><strong>Ejemplo semanal:</strong> fuerza dos o tres días, pasos adaptados a tu nivel y paseos, bicicleta o baile repartidos durante la semana.</div>
          <p class="habit-tip"><strong>Tip:</strong> progresa poco a poco. Empieza con una cantidad que puedas repetir incluso en una semana complicada.</p>
          <p class="habit-myth"><strong>Mito:</strong> “Si no sudo mucho, no sirve”.<br><span>Realidad:</span> sudar regula la temperatura; no mide la grasa perdida ni la calidad del entrenamiento.</p>
        </article>

        <article class="habit-panel" id="habit-panel-5">
          <div class="habit-panel-title"><span>🌙</span><div><small>NIVEL 5</small><h3>Sueño, estrés y recuperación</h3></div></div>
          <p>Dormir mejor no crea por sí solo un déficit calórico, pero el cansancio puede aumentar el hambre, empeorar las elecciones y reducir las ganas de moverse. El estrés también puede dificultar la planificación y favorecer comer de forma automática.</p>
          <div class="habit-example"><strong>Ejemplos:</strong> horarios de sueño regulares, menos pantallas al final del día, luz natural por la mañana y estrategias de relajación que te resulten realistas.</div>
          <p class="habit-tip"><strong>Tip:</strong> si roncas mucho, haces pausas al respirar o tienes somnolencia intensa, consulta: la apnea del sueño es frecuente y tiene tratamiento.</p>
          <p class="habit-myth"><strong>Mito:</strong> “El cortisol me impide adelgazar haga lo que haga”.<br><span>Realidad:</span> el estrés influye, pero no anula las leyes de la energía. Conviene tratarlo por salud y porque facilita mantener los hábitos.</p>
        </article>

        <article class="habit-panel" id="habit-panel-6">
          <div class="habit-panel-title"><span>🧩</span><div><small>NIVEL 6 · LA PUNTA</small><h3>Horarios, aplicaciones y suplementos</h3></div></div>
          <p>Son ajustes secundarios. El número de comidas y sus horarios pueden adaptarse a tus preferencias, medicación, hambre y rutina. Las aplicaciones pueden ayudar a registrar hábitos, pero no son necesarias para todo el mundo.</p>
          <div class="habit-example"><strong>Ejemplos:</strong> preparar la comida con antelación, repartir la proteína durante el día o usar una alarma para recordar caminar.</div>
          <p class="habit-tip"> <strong>Tip:</strong> utiliza suplementos solo cuando exista una indicación concreta o sea difícil cubrir una necesidad con alimentos.</p>
          <p class="habit-myth"><strong>Mito:</strong> “Un quemagrasas, un detox o comer a una hora exacta desbloqueará mi metabolismo”.<br><span>Realidad:</span> ningún suplemento compensa una base que no funciona y algunos productos pueden producir efectos adversos.</p>
        </article>
      </div>

      <aside class="habits-summary"><strong>Orden práctico:</strong> si algo no avanza, revisa primero la base. Cambiar suplementos o el horario de una comida tendrá poco efecto si el plan no es sostenible o no existe un déficit energético.</aside>

      <div class="habits-sources">
        <h3>Modelo y evidencia</h3>
        <p>Adaptación educativa inspirada en <a href="https://muscleandstrengthpyramids.com/" target="_blank" rel="noopener">The Muscle &amp; Strength Pyramid</a> de Eric Helms y actualizada con las <a href="https://www.nice.org.uk/guidance/ng246/chapter/Physical-activity-and-diet" target="_blank" rel="noopener">recomendaciones NICE 2025</a>, los <a href="https://diabetesjournals.org/care/article/49/Supplement_1/S166/163915/8-Obesity-and-Weight-Management-for-the-Prevention" target="_blank" rel="noopener">Standards of Care 2026 de la ADA</a> y la <a href="https://bmjopensem.bmj.com/content/11/3/e002363" target="_blank" rel="noopener">revisión sobre fuerza durante la pérdida de peso</a>.</p>
      </div>
    </div>
  `,

  "obesidad-dietas": `
    <div class="diets-page">
      <div class="diets-hero">
        <span class="eyebrow">MODAS, MÉTODOS Y PATRONES ALIMENTARIOS</span>
        <h3>No todas las “dietas” son lo mismo</h3>
        <p>Algunas describen <strong>qué alimentos</strong> se priorizan; otras cambian <strong>cuándo se come</strong>; y otras venden una solución sin respaldo. Pulsa cada ficha para conocer en qué consiste, qué sabemos sobre la pérdida de peso y qué precauciones requiere.</p>
      </div>

      <div class="evidence-legend" aria-label="Leyenda del nivel de evidencia">
        <span class="ev-high">● Evidencia sólida</span><span class="ev-medium">● Puede funcionar</span><span class="ev-low">● Evidencia limitada</span><span class="ev-none">● Sin respaldo / riesgo</span>
      </div>

      <div class="diet-accordions">
        <details class="diet-card">
          <summary><img src="img/tipos-dietas/mediterranea.webp" alt="Alimentos propios del patrón mediterráneo"><span><small class="ev-high">EVIDENCIA SÓLIDA</small><b>Dieta mediterránea</b><em>Un patrón saludable, no una dieta rápida</em></span><i>＋</i></summary>
          <div class="diet-body"><p><strong>¿En qué consiste?</strong> Prioriza verduras, fruta, legumbres, cereales integrales, frutos secos y aceite de oliva; incluye pescado con frecuencia y limita carnes procesadas, bebidas azucaradas y productos de baja calidad nutricional.</p><p><strong>Pérdida de peso:</strong> puede producirla cuando las cantidades generan un déficit energético. Su gran ventaja es la evidencia cardiovascular y metabólica y que admite variedad.</p><p class="diet-tip"><strong>Ejemplo:</strong> lentejas con verduras; pescado con patata y ensalada; yogur natural con fruta.</p><p class="diet-myth"><strong>Mito:</strong> “Como el aceite y los frutos secos son saludables, no cuentan”. <span>Son saludables y también energéticos; la cantidad sigue importando.</span></p></div>
        </details>

        <details class="diet-card">
          <summary><img src="img/tipos-dietas/keto.webp" alt="Salmón, huevos, aguacate, verduras y frutos secos"><span><small class="ev-medium">PUEDE FUNCIONAR</small><b>Cetogénica o keto</b><em>Muy pocos hidratos y mucha grasa</em></span><i>＋</i></summary>
          <div class="diet-body"><p><strong>¿En qué consiste?</strong> Reduce mucho los hidratos —habitualmente por debajo de 20–50 g al día— para producir cetosis. Predominan grasas y proteínas, con una selección limitada de frutas, legumbres y cereales.</p><p><strong>Pérdida de peso:</strong> puede lograr una bajada inicial mayor, en parte por pérdida de agua. A 12–24 meses no muestra una superioridad clara frente a dietas equilibradas cuando la energía y el apoyo son comparables.</p><p class="diet-tip"><strong>Puede encajar</strong> si la persona la prefiere y está bien planificada. No es imprescindible y suele ser difícil de mantener.</p><p class="diet-alert"><strong>Precaución:</strong> supervisión si hay diabetes, medicación, embarazo, enfermedad renal/hepática o antecedentes de trastorno alimentario. No es lo mismo que la dieta cetogénica terapéutica para epilepsia.</p></div>
        </details>

        <details class="diet-card">
          <summary><img src="img/tipos-dietas/ayuno.webp" alt="Plato equilibrado junto a un reloj"><span><small class="ev-medium">PUEDE FUNCIONAR</small><b>Ayuno intermitente</b><em>Cambia el horario, no define la calidad</em></span><i>＋</i></summary>
          <div class="diet-body"><p><strong>¿En qué consiste?</strong> Alterna periodos sin comer y ventanas de ingesta: 12:12, 16:8, 5:2 o días alternos. Es un horario, no una dieta por sí misma.</p><p><strong>Pérdida de peso:</strong> la revisión Cochrane de 2026 concluye que, en promedio, no adelgaza más que una restricción energética continua. Puede servir si facilita comer menos y se mantiene.</p><p class="diet-myth"><strong>Mito:</strong> “Activa la autofagia y quema grasa aunque coma lo mismo”. <span>No se ha demostrado una ventaja clínica especial para adelgazar independiente de la energía total.</span></p><p class="diet-alert"><strong>No se recomienda sin valoración</strong> en embarazo, infancia, personas frágiles, diabetes tratada con riesgo de hipoglucemia o trastorno de la conducta alimentaria.</p></div>
        </details>

        <details class="diet-card">
          <summary><img src="img/tipos-dietas/paleo.webp" alt="Carne, pescado, huevos, verduras, frutos rojos y frutos secos"><span><small class="ev-low">EVIDENCIA LIMITADA</small><b>Dieta paleo</b><em>Excluye cereales, legumbres y lácteos</em></span><i>＋</i></summary>
          <div class="diet-body"><p><strong>¿En qué consiste?</strong> Intenta imitar una interpretación de la alimentación paleolítica. Incluye carne, pescado, huevos, frutas, verduras y frutos secos, y suele excluir cereales, legumbres, lácteos y muchos procesados.</p><p><strong>Pérdida de peso:</strong> algunos estudios pequeños encuentran descensos a corto plazo, pero no hay evidencia de que excluir grupos completos aporte una ventaja propia. Puede bajar la energía al reducir muchas opciones.</p><p class="diet-myth"><strong>Mito:</strong> “Nuestro cuerpo no está adaptado a cereales o legumbres”. <span>No es correcto como regla general; ambos pueden formar parte de un patrón saludable.</span></p></div>
        </details>

        <details class="diet-card">
          <summary><img src="img/tipos-dietas/vegetariana.webp" alt="Plato vegetal con legumbres, tofu, cereales, verduras y frutos secos"><span><small class="ev-high">BUENA EVIDENCIA SI ESTÁ PLANIFICADA</small><b>Vegetariana o vegana</b><em>Reduce o elimina alimentos animales</em></span><i>＋</i></summary>
          <div class="diet-body"><p><strong>¿En qué consiste?</strong> La vegetariana puede incluir huevos y lácteos; la vegana excluye todos los productos animales. La calidad depende de los alimentos elegidos, no solo de la ausencia de carne.</p><p><strong>Pérdida de peso:</strong> puede ayudar por su riqueza en fibra y menor densidad energética, pero también necesita déficit. Una dieta vegana basada en bollería, bebidas azucaradas y fritos no garantiza salud ni pérdida de peso.</p><p class="diet-tip"><strong>Claves:</strong> legumbres, tofu/tempeh, cereales, frutos secos, verduras y fruta. En veganismo, vitamina B12 suplementada de forma obligatoria y revisión de yodo, calcio, hierro, vitamina D y omega-3 según el caso.</p></div>
        </details>

        <details class="diet-card">
          <summary><img src="img/tipos-dietas/dash.webp" alt="Pescado, legumbres, cereales, fruta, verduras y yogur"><span><small class="ev-high">EVIDENCIA SÓLIDA</small><b>Dieta DASH</b><em>Diseñada para cuidar la presión arterial</em></span><i>＋</i></summary>
          <div class="diet-body"><p><strong>¿En qué consiste?</strong> Prioriza fruta, verdura, legumbres, cereales integrales, frutos secos, lácteos bajos en grasa y proteínas magras; limita sodio, carnes procesadas y azúcares.</p><p><strong>Pérdida de peso:</strong> no nació como dieta de adelgazamiento, pero puede ayudar cuando se adapta a un déficit. Tiene evidencia sólida para reducir la presión arterial.</p><p class="diet-tip"><strong>Ideal para:</strong> personas que desean un patrón flexible y especialmente quienes necesitan cuidar tensión arterial, siempre individualizando.</p></div>
        </details>

        <details class="diet-card">
          <summary><img src="img/tipos-dietas/baja-grasa.webp" alt="Alimentos variados con poca grasa visible"><span><small class="ev-medium">PUEDE FUNCIONAR</small><b>Dieta baja en grasa</b><em>Reduce un nutriente muy energético</em></span><i>＋</i></summary>
          <div class="diet-body"><p><strong>¿En qué consiste?</strong> Disminuye la proporción de grasa, especialmente productos fritos, salsas, carnes grasas y bollería. No debería eliminar las grasas insaturadas necesarias.</p><p><strong>Pérdida de peso:</strong> puede funcionar al reducir la densidad energética, pero no es claramente superior a una dieta baja en hidratos a largo plazo. La preferencia y adherencia deciden mucho.</p><p class="diet-myth"><strong>Mito:</strong> “La grasa que como se convierte directamente en grasa corporal”. <span>El almacenamiento depende del balance energético; la calidad de la grasa importa para la salud.</span></p></div>
        </details>

        <details class="diet-card">
          <summary><img src="img/tipos-dietas/alta-proteina.webp" alt="Fuentes variadas de proteína con verduras y cereales"><span><small class="ev-medium">ÚTIL COMO AJUSTE</small><b>Dieta alta en proteína</b><em>Más saciedad y protección muscular</em></span><i>＋</i></summary>
          <div class="diet-body"><p><strong>¿En qué consiste?</strong> Aumenta la proporción de proteína mediante legumbres, pescado, huevos, lácteos, tofu o carnes no procesadas.</p><p><strong>Pérdida de peso:</strong> puede mejorar la saciedad y ayudar a conservar masa muscular durante un déficit, sobre todo junto al entrenamiento de fuerza. Más proteína no compensa un exceso energético.</p><p class="diet-tip"><strong>Consejo:</strong> repartir fuentes proteicas en las comidas suele ser más útil que depender de batidos. Individualizar en enfermedad renal.</p></div>
        </details>

        <details class="diet-card">
          <summary><img src="img/tipos-dietas/antiinflamatoria.webp" alt="Alimentos mediterráneos con verduras, pescado, aceite de oliva y frutos rojos"><span><small class="ev-low">TÉRMINO IMPRECISO</small><b>“Dieta antiinflamatoria”</b><em>Suele ser mediterránea con otro nombre</em></span><i>＋</i></summary>
          <div class="diet-body"><p><strong>¿En qué consiste?</strong> No existe una única dieta antiinflamatoria validada. Las versiones sensatas priorizan alimentos vegetales, aceite de oliva, frutos secos y pescado, y limitan tabaco, alcohol y productos de baja calidad: se parecen al patrón mediterráneo.</p><p><strong>Pérdida de peso:</strong> no “desinflama la grasa” ni adelgaza por ingredientes especiales. Funciona si mejora la calidad y produce déficit.</p><p class="diet-myth"><strong>Mito:</strong> “Gluten, lácteos o tomate inflaman a todo el mundo”. <span>No hay base para excluirlos de forma general; solo si existe diagnóstico, intolerancia o indicación individual.</span></p></div>
        </details>

        <details class="diet-card">
          <summary><img src="img/tipos-dietas/anticancer.webp" alt="Plato vegetal equilibrado junto a un lazo simbólico"><span><small class="ev-none">NO EXISTE UNA DIETA QUE CURE EL CÁNCER</small><b>“Dieta anticancerígena”</b><em>Prevención no significa tratamiento</em></span><i>＋</i></summary>
          <div class="diet-body"><p><strong>¿En qué consiste?</strong> Es un nombre comercial o divulgativo, no un tratamiento definido. Un patrón rico en vegetales, fibra y legumbres, con poca carne procesada y alcohol, puede reducir el riesgo poblacional de algunos cánceres.</p><p><strong>Pérdida de peso:</strong> solo ocurrirá si existe déficit. Ningún alimento, suplemento, ayuno o alcalinización cura el cáncer.</p><p class="diet-alert"><strong>Muy importante:</strong> durante el tratamiento oncológico no se deben hacer restricciones sin el equipo sanitario. Pueden empeorar desnutrición, pérdida muscular o interferir con el tratamiento.</p></div>
        </details>

        <details class="diet-card">
          <summary><img src="img/tipos-dietas/sin-gluten-lactosa.webp" alt="Alimentos naturalmente sin gluten y lácteos sin lactosa"><span><small class="ev-low">SOLO CON INDICACIÓN</small><b>Sin gluten o sin lactosa</b><em>Eliminar no equivale a adelgazar</em></span><i>＋</i></summary>
          <div class="diet-body"><p><strong>¿En qué consiste?</strong> La dieta sin gluten es tratamiento para celiaquía y otras indicaciones concretas. Reducir lactosa ayuda si hay intolerancia sintomática; muchas personas toleran cierta cantidad.</p><p><strong>Pérdida de peso:</strong> no aportan una ventaja propia. Algunos productos “sin” tienen igual o mayor energía, menos fibra o más azúcar/grasa.</p><p class="diet-alert"><strong>No retires el gluten antes de estudiar una posible celiaquía:</strong> puede falsear las pruebas. Consulta si hay síntomas persistentes.</p></div>
        </details>

        <details class="diet-card">
          <summary><img src="img/tipos-dietas/detox-monodieta.webp" alt="Zumos verdes y una selección repetitiva de una sola fruta"><span><small class="ev-none">SIN RESPALDO</small><b>Detox, zumos y monodietas</b><em>Piña, alcachofa, sopa, potitos…</em></span><i>＋</i></summary>
          <div class="diet-body"><p><strong>¿En qué consisten?</strong> Limitan la alimentación a zumos, caldos o uno o pocos alimentos durante varios días. Prometen “limpiar toxinas” o perder peso con rapidez.</p><p><strong>Pérdida de peso:</strong> la bajada rápida suele incluir agua, glucógeno y contenido intestinal. No hay evidencia de que eliminen toxinas; hígado, riñones, pulmones e intestino ya cumplen esas funciones.</p><p class="diet-alert"><strong>Riesgos:</strong> hambre, mareos, pérdida muscular, carencias, efecto rebote y peor relación con la comida. No son una estrategia saludable.</p></div>
        </details>

        <details class="diet-card">
          <summary><img src="img/tipos-dietas/carnivora.webp" alt="Plato compuesto únicamente por carnes, pescado y huevos"><span><small class="ev-none">EVIDENCIA INSUFICIENTE Y RESTRICTIVA</small><b>Dieta carnívora</b><em>Elimina prácticamente todos los vegetales</em></span><i>＋</i></summary>
          <div class="diet-body"><p><strong>¿En qué consiste?</strong> Solo o casi solo alimentos animales. Excluye fruta, verdura, legumbres y cereales, por lo que aporta muy poca fibra y puede contener mucha grasa saturada y sal.</p><p><strong>Pérdida de peso:</strong> puede reducir espontáneamente la ingesta por monotonía o saciedad proteica, no por una propiedad exclusiva. Faltan ensayos robustos sobre seguridad y eficacia a largo plazo.</p><p class="diet-alert"><strong>No es recomendable como patrón general.</strong> Puede empeorar el perfil lipídico en algunas personas y dificulta cubrir una dieta variada.</p></div>
        </details>

        <details class="diet-card">
          <summary><img src="img/tipos-dietas/milagro-homeopatia.webp" alt="Productos adelgazantes sin marca junto a un plato vacío y una cinta métrica"><span><small class="ev-none">SIN EVIDENCIA / POSIBLE RIESGO</small><b>Dietas milagro, homeopatía y “quemagrasas”</b><em>Promesas grandes, pruebas pequeñas o inexistentes</em></span><i>＋</i></summary>
          <div class="diet-body"><p><strong>Señales de alarma:</strong> promete muchos kilos en pocos días, usa testimonios, prohíbe grupos enteros, habla de “toxinas”, exige productos propios, asegura servir a todo el mundo o dice que no necesita déficit.</p><p><strong>Evidencia:</strong> la homeopatía no ha demostrado eficacia para adelgazar más allá del placebo. Los suplementos “quemagrasas” suelen producir efectos pequeños o nulos y pueden causar taquicardia, ansiedad, daño hepático o interacciones.</p><p class="diet-alert"><strong>No sustituyen</strong> el tratamiento nutricional, psicológico, farmacológico o quirúrgico indicado. “Natural” no significa seguro.</p></div>
        </details>
      </div>

      <div class="diets-conclusion">
        <span>⚖️</span><div><small>RESUMEN FINAL</small><h3>¿Qué tienen en común las dietas que hacen perder grasa?</h3><p>Funcionan cuando consiguen mantener durante suficiente tiempo un <strong>déficit energético adecuado</strong>: ingerir algo menos de energía de la que se gasta. La distribución de hidratos y grasas, el horario o el nombre de la dieta pueden cambiar, pero no sustituyen ese requisito.</p><p>Eso no significa que “solo importen las calorías”. Para la salud y para sostener el proceso también importan la proteína, la fibra, los micronutrientes, el entrenamiento de fuerza, el sueño, el entorno, las preferencias y la relación con la comida. <strong>La mejor opción es la segura, nutricionalmente completa, individualizada y sostenible.</strong></p></div>
      </div>

      <div class="diets-safety"><strong>Consulta antes de hacer restricciones importantes</strong> si hay embarazo o lactancia, infancia/adolescencia, diabetes con medicación, enfermedad renal o hepática, cáncer, fragilidad, desnutrición o antecedentes de trastorno alimentario.</div>
      <div class="evidence-box"><h3>Fuentes y evidencia</h3><p><a href="https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD013334.pub2/information" target="_blank" rel="noopener">Cochrane: bajo contenido en hidratos frente a dieta equilibrada</a> · <a href="https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD015610.pub2/full" target="_blank" rel="noopener">Cochrane 2026: ayuno intermitente</a> · <a href="https://www.nice.org.uk/guidance/ng246/chapter/Physical-activity-and-diet" target="_blank" rel="noopener">NICE: tratamiento dietético de la obesidad</a> · <a href="https://www.wcrf.org/diet-activity-and-cancer/cancer-prevention-recommendations/" target="_blank" rel="noopener">World Cancer Research Fund</a> · <a href="https://www.nccih.nih.gov/health/homeopathy" target="_blank" rel="noopener">NCCIH: homeopatía</a>.</p></div>
    </div>
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
    <div class="tool-hero tool-hero--label">
      <span class="eyebrow">GUÍA PARA EL SUPERMERCADO</span>
      <h3>Leer una etiqueta sin convertir la compra en un examen</h3>
      <p>La etiqueta sirve para <strong>comparar productos parecidos</strong>, no para decidir si un alimento es “bueno” o “malo”. Primero mira el alimento y su papel en tu dieta; después, los números.</p>
    </div>

    <div class="label-map" aria-label="Orden recomendado para leer una etiqueta">
      <div class="label-sheet">
        <span class="label-kicker">INFORMACIÓN NUTRICIONAL</span>
        <strong>Valores medios por 100 g</strong>
        <div><span>Energía</span><b>620 kJ / 148 kcal</b></div>
        <div><span>Grasas</span><b>4,2 g</b></div>
        <div class="label-indent"><span>de las cuales saturadas</span><b>0,7 g</b></div>
        <div><span>Hidratos de carbono</span><b>18 g</b></div>
        <div class="label-indent"><span>de los cuales azúcares</span><b>3,8 g</b></div>
        <div><span>Fibra</span><b>5,6 g</b></div>
        <div><span>Proteínas</span><b>7,1 g</b></div>
        <div><span>Sal</span><b>0,42 g</b></div>
      </div>
      <ol class="label-steps">
        <li><b>1. Qué producto es</b><span>No compares yogur con galletas: compara yogures entre sí.</span></li>
        <li><b>2. Ingredientes</b><span>Aparecen de mayor a menor cantidad. Los alérgenos van destacados.</span></li>
        <li><b>3. Por 100 g o 100 ml</b><span>Es la referencia más útil para comparar dos envases.</span></li>
        <li><b>4. La cantidad que tomas</b><span>La “ración” del fabricante puede no coincidir con la tuya.</span></li>
      </ol>
    </div>

    <h3>¿Qué significa cada apartado?</h3>
    <div class="info-grid">
      <article><span>🧾</span><h4>Lista de ingredientes</h4><p>El primero es el más abundante. Un porcentaje junto a un ingrediente indica cuánto contiene cuando aparece en el nombre o se destaca en el envase. “Sin azúcares añadidos” no significa “sin azúcar”: puede contener el azúcar propio de la fruta o la leche.</p></article>
      <article><span>🔥</span><h4>Energía</h4><p>Se expresa en kJ y kcal. Ayuda a comparar, pero no mide por sí sola la calidad: aceite, frutos secos o queso aportan energía y pueden formar parte de una dieta saludable.</p></article>
      <article><span>🌾</span><h4>Hidratos y azúcares</h4><p>Los hidratos incluyen almidones y azúcares. “De los cuales azúcares” suma los naturales y los añadidos; la tabla europea no los separa. Para detectar azúcares añadidos hay que mirar ingredientes: azúcar, jarabe, miel, dextrosa, concentrado de zumo, etc.</p></article>
      <article><span>🥑</span><h4>Grasas y saturadas</h4><p>“Grasas” incluye saturadas e insaturadas. Conviene priorizar aceite de oliva, frutos secos, semillas y pescado, y limitar el exceso de saturadas. Las grasas trans industriales están restringidas en la UE, pero el patrón completo sigue siendo lo importante.</p></article>
      <article><span>🫘</span><h4>Proteínas y fibra</h4><p>La proteína ayuda a conservar masa muscular y aporta saciedad. La fibra favorece el tránsito y la salud cardiometabólica. La fibra puede aparecer de forma voluntaria; si no figura, no significa necesariamente que sea cero.</p></article>
      <article><span>🧂</span><h4>Sal</h4><p>La etiqueta declara sal, no sodio. Como orientación poblacional, la OMS recomienda menos de 5 g de sal al día. Mira especialmente panes, salsas, caldos, quesos, conservas y embutidos.</p></article>
      <article><span>⚠️</span><h4>Alérgenos y trazas</h4><p>Los 14 alérgenos de declaración obligatoria aparecen resaltados. “Puede contener” avisa de una posible contaminación cruzada; es relevante para alergias, no una señal de peor calidad.</p></article>
      <article><span>📅</span><h4>Fechas y conservación</h4><p>“Caducidad” se relaciona con seguridad: no lo consumas después. “Consumo preferente” habla de calidad; si se ha conservado bien, puede seguir siendo seguro tras esa fecha.</p></article>
    </div>

    <div class="compare-board">
      <h3>Ejemplos reales de pasillo</h3>
      <div class="compare-grid">
        <article><b>Yogur natural</b><p>Compara yogures naturales: leche y fermentos es una opción sencilla. Un yogur con fruta puede tener más azúcar sin que todo sea añadido; confirma en ingredientes.</p></article>
        <article><b>Pan integral</b><p>Busca “harina integral” como primer ingrediente y comprueba el porcentaje. El color oscuro, las semillas o la palabra “multicereal” no garantizan que sea integral.</p></article>
        <article><b>Tomate triturado o frito</b><p>Ambos pueden encajar. En el frito compara tomate, aceite, sal y azúcares añadidos. Escoge según uso, frecuencia y cantidad.</p></article>
        <article><b>Conservas y legumbres</b><p>Son opciones prácticas. Escurrir y enjuagar garbanzos o verduras reduce parte de la sal. En pescado, alterna al natural, en aceite de oliva y otras variedades.</p></article>
        <article><b>Cereales de desayuno</b><p>Compara por 100 g: cereal integral, fibra, azúcares y sal. “Fitness”, “natural” o dibujos de fruta son publicidad, no criterios nutricionales.</p></article>
        <article><b>Fiambre y hamburguesas</b><p>Mira el porcentaje de carne/pescado/legumbre, sal y grasas saturadas. Las carnes procesadas conviene reservarlas para un consumo ocasional.</p></article>
      </div>
    </div>

    <h3>Ingredientes añadidos: qué merece más atención</h3>
    <div class="traffic-cards">
      <article class="traffic-card traffic-card--amber"><b>Conviene limitar en el conjunto de la dieta</b><p>Azúcares libres, mucha sal, grasas saturadas y carnes procesadas. El riesgo depende de la <strong>cantidad y la frecuencia</strong>, no de que una palabra aparezca una vez.</p></article>
      <article class="traffic-card traffic-card--green"><b>No hay que temer automáticamente</b><p>Un número E indica un aditivo autorizado y evaluado en la UE. Que un ingrediente sea largo, “químico” o no esté en tu cocina no demuestra que sea perjudicial.</p></article>
      <article class="traffic-card traffic-card--red"><b>Atención individual</b><p>Alérgenos si existe alergia, cafeína en niños/embarazo o sensibilidad, polialcoholes si provocan molestias digestivas y alcohol. Sigue la indicación sanitaria que corresponda.</p></article>
    </div>

    <div class="tips-ten">
      <h3>10 trucos para elegir mejor —sin buscar la perfección—</h3>
      <ol>
        <li>Compara alimentos de la <strong>misma categoría</strong>.</li>
        <li>Usa la columna <strong>por 100 g/ml</strong> para comparar.</li>
        <li>Comprueba cuál es el <strong>primer ingrediente</strong>.</li>
        <li>En pan, busca un buen porcentaje de <strong>harina integral</strong>.</li>
        <li>En yogur, diferencia el azúcar natural de la leche de los <strong>azúcares añadidos</strong>.</li>
        <li>En conservas, caldos y salsas, compara la <strong>sal</strong>.</li>
        <li>Prioriza alimentos que aporten <strong>fibra y/o proteína</strong> cuando tenga sentido.</li>
        <li>No te dejes guiar solo por “light”, “bio”, “fitness”, “artesano” o “sin azúcar”.</li>
        <li>Piensa en la <strong>frecuencia y la cantidad</strong>, no en ingredientes aislados.</li>
        <li>Deja sitio a productos por placer: un procesado puede encajar en una alimentación saludable.</li>
      </ol>
    </div>
    <p class="kind-note"><strong>Idea clave:</strong> procesado no es sinónimo de perjudicial. El aceite de oliva, el yogur, el pan integral, las legumbres cocidas o las verduras congeladas también están procesados. Importan el tipo de producto, su composición y el patrón habitual.</p>
    <div class="evidence-box"><h3>Fuentes y evidencia</h3><p><a href="https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32011R1169" target="_blank" rel="noopener">Reglamento (UE) 1169/2011 sobre información alimentaria</a> · <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank" rel="noopener">OMS: dieta saludable</a> · <a href="https://www.efsa.europa.eu/es/topics/topic/food-additives" target="_blank" rel="noopener">EFSA: seguridad de los aditivos</a>.</p></div>
  `,

  "herramientas-compra": `
    <div class="media-hero">
      <div><span class="eyebrow">PLANIFICAR · ELEGIR · DISFRUTAR</span><h3>Una compra saludable empieza antes de entrar</h3><p>No hace falta llenar el carro de productos perfectos. Una buena compra es la que facilita comidas completas, se adapta al presupuesto y deja también espacio al disfrute.</p></div>
      <img src="img/compra-saludable-endonutri.png" alt="Cesta de compra con alimentos mediterráneos variados, frescos y envasados">
    </div>
    <div class="shopping-route" aria-label="Infografía de cuatro pasos para organizar la compra">
      <article><span>1</span><b>Antes</b><p>Revisa despensa y congelador, decide 3–4 comidas y prepara una lista flexible.</p></article>
      <article><span>2</span><b>Momento</b><p>Ve con tiempo y, si puedes, después de haber comido. El hambre puede favorecer compras impulsivas, pero no es una norma rígida.</p></article>
      <article><span>3</span><b>En tienda</b><p>Compara precio por kilo/litro y etiquetas de productos similares. La marca más cara no siempre es mejor.</p></article>
      <article><span>4</span><b>En casa</b><p>Deja lo saludable visible y fácil: fruta lavada, verdura accesible y raciones listas para congelar.</p></article>
    </div>
    <h3>La cesta mediterránea: una base práctica</h3>
    <div class="basket-grid">
      <article><span>🥦</span><b>Verduras y frutas</b><p>Frescas, congeladas o en conserva. Elige variedad de colores, temporada y opciones que realmente vayas a usar.</p></article>
      <article><span>🫘</span><b>Legumbres</b><p>Secas o cocidas: lentejas, garbanzos, alubias y guisantes. Baratas, versátiles y ricas en fibra.</p></article>
      <article><span>🌾</span><b>Cereales y tubérculos</b><p>Avena, pan y pasta integrales, arroz, patata o boniato. Alterna según preferencias y tolerancia.</p></article>
      <article><span>🐟</span><b>Proteínas variadas</b><p>Pescado, huevos, aves, tofu, yogur natural y legumbres. Limita la frecuencia de carnes procesadas.</p></article>
      <article><span>🫒</span><b>Grasas de calidad</b><p>Aceite de oliva virgen, frutos secos y semillas. Son saludables, aunque energéticos: ajusta la cantidad a tus necesidades.</p></article>
      <article><span>🍫</span><b>Alimentos por placer</b><p>También pueden estar en la cesta. Elegirlos conscientemente ayuda más que prohibirlos y llegar después con sensación de pérdida de control.</p></article>
    </div>
    <div class="two-col-list">
      <section><h3>Consejos que facilitan la semana</h3><ul><li>Compra verduras ya cortadas, congeladas o en bote si te ayudan a consumirlas.</li><li>Ten “comodines”: huevos, legumbres cocidas, conservas de pescado, gazpacho, verduras congeladas y arroz de cocción rápida.</li><li>No compres grandes formatos solo por oferta si terminarán desperdiciándose.</li><li>Haz una compra principal y deja una pequeña reposición para frescos.</li><li>Online o presencial: usa favoritos y lista para reducir decisiones repetidas.</li></ul></section>
      <section><h3>Presupuesto y seguridad</h3><ul><li>Compara el precio por kg o litro, no solo el precio del envase.</li><li>Los productos de temporada, legumbres y congelados suelen ser aliados económicos.</li><li>Compra refrigerados y congelados al final; llévalos pronto a casa.</li><li>Separa alimentos crudos de los listos para comer.</li><li>Planifica cómo aprovechar sobras antes de comprar más.</li></ul></section>
    </div>
    <div class="myth-row"><b>Mito: “solo es saludable lo fresco”.</b><span>Realidad: congelados y conservas sencillas mantienen buena calidad nutricional y pueden reducir tiempo y desperdicio.</span></div>
    <div class="myth-row"><b>Mito: “si está en los pasillos centrales es malo”.</b><span>Realidad: allí también están legumbres, avena, arroz, conservas, frutos secos y aceite de oliva.</span></div>
    <div class="evidence-box"><h3>Fuentes y evidencia</h3><p>Basado en las <a href="https://www.aesan.gob.es/AECOSAN/docs/documentos/nutricion/RECOMENDACIONES_DIETETICAS.pdf" target="_blank" rel="noopener">recomendaciones dietéticas de AESAN</a>, la <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank" rel="noopener">guía de dieta saludable de la OMS</a> y principios de planificación, accesibilidad y reducción del desperdicio.</p></div>
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
    <div class="media-hero media-hero--reverse">
      <div><span class="eyebrow">FLEXIBILIDAD SIN CULPA</span><h3>Comer fuera también forma parte de una vida saludable</h3><p>Una comida no define tu salud ni necesitas “compensarla”. Si comes fuera a menudo, unas decisiones sencillas pueden ayudarte; si es algo puntual, disfruta y vuelve a tu rutina habitual.</p></div>
      <img src="img/comer-fuera-endonutri.png" alt="Mesa mediterránea compartida con pescado, ensalada, verduras, pan, agua y postre">
    </div>
    <div class="outside-timeline">
      <article><span>ANTES</span><h4>Llega con hambre normal</h4><p>No te saltes comidas para “guardar calorías”. Si llegarás muy tarde, toma antes fruta con yogur o un pequeño bocadillo.</p></article>
      <article><span>DURANTE</span><h4>Elige lo que te apetece y te sienta bien</h4><p>Mira el menú, incluye alguna verdura si es posible, come despacio y para cuando estés cómodamente satisfecho.</p></article>
      <article><span>DESPUÉS</span><h4>Continúa, no compenses</h4><p>La siguiente comida puede ser la habitual. No hace falta ayunar, entrenar de más ni pesarse al día siguiente.</p></article>
    </div>
    <h3>Herramientas según la situación</h3>
    <div class="scenario-grid">
      <article><span>🍽️</span><h4>Menú del día</h4><p>Combina verdura o legumbre con pescado, huevo o carne no procesada. Pan, arroz o patata pueden encajar. Agua como bebida habitual.</p></article>
      <article><span>🥘</span><h4>Tapas y raciones</h4><p>Pide primero una cantidad razonable y añade después si hace falta. Alterna verduras, marisco, pescado, tortilla o guisos con opciones fritas si te apetecen.</p></article>
      <article><span>🍔</span><h4>Hamburguesería</h4><p>Una hamburguesa no “estropea” la dieta. Si buscas equilibrio, añade ensalada o verdura, elige agua y decide patatas o postre según hambre y apetencia.</p></article>
      <article><span>🍕</span><h4>Pizza o italiano</h4><p>Comparte una ensalada, elige el tamaño con calma y come hasta sentirte satisfecho. No es obligatorio escoger masa integral ni dejar los bordes.</p></article>
      <article><span>🥡</span><h4>Comida asiática</h4><p>Combina arroz o fideos con verduras y una fuente de proteína. Salsas y caldos pueden aportar mucha sal: ajusta la frecuencia, no hace falta eliminarlos.</p></article>
      <article><span>🎉</span><h4>Celebraciones</h4><p>Prioriza la experiencia social. Sírvete lo que realmente quieras, prueba despacio y recuerda que puedes dejar comida o repetir: ambas opciones son válidas.</p></article>
    </div>
    <div class="tips-banner"><h3>Pequeños gestos útiles cuando comes fuera con frecuencia</h3><p>Consulta el menú antes · comparte entrantes · pide verduras como guarnición · solicita salsas aparte si lo prefieres · alterna alcohol con agua · evita el “todo o nada” · escucha hambre y saciedad.</p></div>
    <h3>Mitos que conviene dejar fuera de la mesa</h3>
    <div class="myth-row"><b>“A la plancha siempre adelgaza”.</b><span>La técnica ayuda, pero importan el alimento, el aceite, las salsas, la cantidad y el conjunto del día.</span></div>
    <div class="myth-row"><b>“El pan es el problema”.</b><span>El pan puede encajar. Valora hambre, cantidad y el resto de la comida sin señalar un único alimento.</span></div>
    <div class="myth-row"><b>“Mañana lo quemo”.</b><span>El ejercicio no es un castigo. Volver a tus hábitos habituales es más sostenible que compensar.</span></div>
    <div class="myth-row"><b>“Si estoy perdiendo peso no puedo salir”.</b><span>Puede hacerse compatible. Si las salidas son frecuentes, planificar elecciones y cantidades facilita mantener un déficit energético moderado.</span></div>
    <p class="kind-note"><strong>Si tienes diabetes, enfermedad renal, celiaquía, alergias u otra indicación clínica:</strong> pregunta por ingredientes, alérgenos y preparación. La flexibilidad debe adaptarse a tu tratamiento.</p>
    <div class="evidence-box"><h3>Fuentes y evidencia</h3><p>Recomendaciones coherentes con la <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank" rel="noopener">OMS</a> y con la evidencia sobre <a href="https://www.cochrane.org/evidence/CD011045_portion-package-or-tableware-size-changing-selection-and-consumption-food-alcohol-and-tobacco" target="_blank" rel="noopener">tamaño de porciones y consumo</a>. Las estrategias son herramientas opcionales, no reglas morales.</p></div>
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
