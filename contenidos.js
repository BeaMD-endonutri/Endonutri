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
    <div class="obesity-lead">
      <span class="obesity-kicker">COMPRENDER SIN CULPAR</span>
      <h3>La obesidad es mucho más que un número en la báscula</h3>
      <p>Es una condición crónica y compleja en la que existe un exceso de grasa corporal —o una distribución de esa grasa— que puede aumentar el riesgo de enfermedad o llegar a alterar el funcionamiento del organismo. <strong>No es una elección, ni una falta de voluntad.</strong></p>
    </div>

    <div class="obesity-callout">
      <div class="obesity-callout-icon" aria-hidden="true">i</div>
      <div>
        <h4>El IMC orienta, pero no cuenta toda la historia</h4>
        <p>El IMC sirve como primera señal y para estudiar poblaciones, pero no distingue grasa de músculo ni indica dónde se acumula la grasa. En una valoración individual conviene añadir el perímetro de cintura, la composición corporal, la historia clínica, las analíticas, los síntomas y cómo se desenvuelve la persona en su día a día.</p>
      </div>
    </div>

    <h3 class="obesity-section-title">Obesidad preclínica y clínica: una forma más precisa de entenderla</h3>
    <div class="obesity-state-grid">
      <article class="obesity-state-card preclinical">
        <span class="state-label">Riesgo aumentado</span>
        <h4>Obesidad preclínica</h4>
        <p>Hay exceso de grasa corporal, pero los órganos funcionan bien y no existen limitaciones atribuibles a ella. El objetivo es vigilar la salud y reducir riesgos futuros.</p>
      </article>
      <article class="obesity-state-card clinical">
        <span class="state-label">Enfermedad presente</span>
        <h4>Obesidad clínica</h4>
        <p>El exceso de grasa ya contribuye a síntomas, alteraciones de órganos o dificultades importantes en actividades cotidianas. Requiere tratamiento basado en evidencia y seguimiento sanitario.</p>
      </article>
    </div>

    <h3 class="obesity-section-title">¿Cómo puede afectar a la salud?</h3>
    <p>El riesgo no es igual para todas las personas. Depende de la cantidad y localización de la grasa, del tiempo de evolución, la edad, la genética y otras enfermedades. Cuando aparecen complicaciones, pueden afectar a varios sistemas:</p>
    <div class="health-impact-grid">
      <article><span aria-hidden="true">♥</span><strong>Corazón y vasos</strong><small>Hipertensión, infarto, insuficiencia cardiaca, arritmias e ictus.</small></article>
      <article><span aria-hidden="true">●</span><strong>Metabolismo</strong><small>Diabetes tipo 2, alteraciones del colesterol e hígado graso.</small></article>
      <article><span aria-hidden="true">◒</span><strong>Sueño y respiración</strong><small>Apnea del sueño, peor descanso y dificultad respiratoria.</small></article>
      <article><span aria-hidden="true">◆</span><strong>Articulaciones</strong><small>Más carga, dolor, artrosis y limitación de la movilidad.</small></article>
      <article><span aria-hidden="true">✦</span><strong>Salud reproductiva</strong><small>Alteraciones menstruales, fertilidad y complicaciones del embarazo.</small></article>
      <article><span aria-hidden="true">☼</span><strong>Bienestar y calidad de vida</strong><small>Fatiga, dolor, estigma y mayor riesgo de algunos trastornos mentales y cánceres.</small></article>
    </div>

    <div class="spain-prevalence" aria-label="Prevalencia de obesidad y exceso de peso en España">
      <div class="spain-copy">
        <span class="obesity-kicker">LA REALIDAD EN ESPAÑA</span>
        <h3>Casi 1 de cada 5 personas adultas vive con obesidad</h3>
        <p>El estudio nacional ENE-COVID, con 57.131 participantes adultos, estimó que en 2020 había cerca de <strong>9 millones</strong> de adultos con obesidad. Son datos basados en peso y talla declarados por los participantes, por lo que deben interpretarse como una estimación.</p>
      </div>
      <div class="prevalence-numbers">
        <div><strong>18,7%</strong><span>obesidad</span></div>
        <div><strong>55,8%</strong><span>exceso de peso</span></div>
        <div><strong>4,9%</strong><span>obesidad severa</span></div>
      </div>
    </div>
    <p class="prevalence-child-note"><strong>En la infancia:</strong> ALADINO 2023 encontró exceso de peso en más de un tercio de los escolares de 6 a 9 años, con mediciones directas en una muestra representativa de 12.678 niños y niñas.</p>

    <div class="obesity-wheel-intro">
      <span class="obesity-kicker">UNA RUEDA, MUCHAS INFLUENCIAS</span>
      <h3>¿Qué factores intervienen en la obesidad?</h3>
      <p>Pulsa cada elemento de la rueda. Ningún factor actúa solo y su importancia cambia de una persona a otra.</p>
    </div>
    <div class="obesity-wheel" id="obesityWheel" role="group" aria-label="Rueda interactiva de factores que influyen en la obesidad">
      <div class="wheel-rings" aria-hidden="true"></div>
      <div class="wheel-center"><strong>Tu historia es única</strong><span>No existe una sola causa</span></div>
      <button class="wheel-factor active" data-factor="biology" style="--x:50%;--y:7%"><span>🧬</span>Biología y genética</button>
      <button class="wheel-factor" data-factor="brain" style="--x:80%;--y:21%"><span>🧠</span>Hambre y metabolismo</button>
      <button class="wheel-factor" data-factor="food" style="--x:93%;--y:50%"><span>🍽️</span>Alimentación y entorno</button>
      <button class="wheel-factor" data-factor="movement" style="--x:80%;--y:79%"><span>🚶</span>Movimiento diario</button>
      <button class="wheel-factor" data-factor="sleep" style="--x:50%;--y:93%"><span>🌙</span>Sueño y ritmos</button>
      <button class="wheel-factor" data-factor="mind" style="--x:20%;--y:79%"><span>💭</span>Estrés y emociones</button>
      <button class="wheel-factor" data-factor="medical" style="--x:7%;--y:50%"><span>💊</span>Salud y medicación</button>
      <button class="wheel-factor" data-factor="social" style="--x:20%;--y:21%"><span>🏘️</span>Entorno social</button>
    </div>
    <div class="factor-detail" id="obesityFactorDetail" aria-live="polite">
      <div class="factor-detail-icon" id="factorDetailIcon" aria-hidden="true">🧬</div>
      <div>
        <span class="factor-detail-label">FACTOR SELECCIONADO</span>
        <h4 id="factorDetailTitle">Biología y genética</h4>
        <p id="factorDetailText">Los genes influyen en el apetito, la saciedad, la distribución de la grasa y la respuesta del cuerpo al entorno. Predisposición no significa destino, pero explica por qué el mismo ambiente no afecta a todas las personas igual.</p>
        <div class="factor-advice"><strong>¿Qué puede ayudar?</strong><p id="factorDetailAdvice">Evita compararte. Trabaja con objetivos y estrategias ajustados a tu historia, y pide una valoración profesional si existe obesidad de inicio muy temprano, hambre extrema o antecedentes familiares marcados.</p></div>
      </div>
    </div>

    <div class="obesity-takeaway">
      <strong>La idea importante</strong>
      <p>El balance energético sigue siendo el mecanismo por el que cambia la grasa corporal, pero ese balance está condicionado por la biología, el entorno y las circunstancias de vida. Tratar la obesidad consiste en actuar sobre las piezas que sí pueden modificarse y ofrecer ayuda sanitaria cuando no basta con cambios de hábitos.</p>
    </div>

    <details class="evidence-sources">
      <summary>Fuentes científicas y datos utilizados</summary>
      <ul>
        <li><a href="https://pubmed.ncbi.nlm.nih.gov/39824205/" target="_blank" rel="noopener">Comisión de The Lancet sobre definición y criterios diagnósticos de obesidad clínica (2025)</a>.</li>
        <li><a href="https://dom-pubs.onlinelibrary.wiley.com/doi/10.1111/dom.16263" target="_blank" rel="noopener">Revisión de complicaciones relacionadas con la obesidad (Blüher, 2025)</a>.</li>
        <li><a href="https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2023.1195249/full" target="_blank" rel="noopener">Estudio ENE-COVID: prevalencia adulta y desigualdades geográficas en España (2023)</a>.</li>
        <li><a href="https://aesan.gob.es/nutricion/datos-sobrepeso-obesidad" target="_blank" rel="noopener">AESAN: ENE-COVID y ALADINO 2023</a>.</li>
      </ul>
    </details>
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
    <div class="strength-page">
      <span class="strength-eyebrow">FUERZA PARA LA VIDA REAL</span>
      <h3>Entrenar fuerza es enseñar a tu cuerpo a superar resistencias</h3>
      <p class="strength-lead">No hace falta levantar enormes cantidades de peso ni tener experiencia. Entrenamos fuerza cada vez que nuestros músculos empujan, tiran, sostienen o frenan una carga: una mancuerna, una máquina, una banda, una mochila o el propio cuerpo. <strong>El objetivo inicial no es sufrir: es aprender, progresar y ganar capacidad.</strong></p>

      <figure class="strength-hero">
        <img src="img/fuerza-gimnasio-casa.webp" alt="Personas de distintas edades y tamaños corporales entrenando fuerza con mancuernas, una silla y bandas elásticas en el gimnasio y en casa" loading="lazy">
        <figcaption>La fuerza puede adaptarse al lugar, al material y a las capacidades de cada persona.</figcaption>
      </figure>

      <section class="strength-benefits" aria-label="Beneficios del entrenamiento de fuerza">
        <article><span>💪</span><strong>Más fuerza y músculo</strong><p>Facilita levantarse, cargar bolsas, subir escaleras y mantener la autonomía.</p></article>
        <article><span>🦴</span><strong>Huesos y articulaciones</strong><p>Estimula el hueso y mejora la capacidad de los tejidos para tolerar cargas.</p></article>
        <article><span>🩸</span><strong>Salud metabólica</strong><p>Mejora la sensibilidad a la insulina y ayuda a controlar glucosa y tensión arterial.</p></article>
        <article><span>⚖</span><strong>Composición corporal</strong><p>Ayuda a conservar masa muscular durante una pérdida de peso y puede reducir grasa.</p></article>
        <article><span>🧠</span><strong>Confianza y bienestar</strong><p>Comprobar que puedes hacer más mejora la seguridad, la función y la calidad de vida.</p></article>
        <article><span>🛡</span><strong>Envejecimiento saludable</strong><p>Combate la pérdida de fuerza y masa muscular que aparece con la edad y la inactividad.</p></article>
      </section>

      <div class="strength-dose">
        <div class="dose-copy"><span class="strength-eyebrow">¿CUÁNTOS DÍAS?</span><h3>Dos sesiones semanales son una base excelente</h3><p>La mayor mejora ocurre al pasar de no entrenar a entrenar con regularidad. No existe una frecuencia perfecta para todo el mundo: importa trabajar los grandes grupos musculares, recuperarse y poder mantenerlo.</p></div>
        <div class="dose-steps" role="img" aria-label="Infografía sobre frecuencia semanal de fuerza">
          <div><span>1</span><strong>día</strong><small>Ya puede aportar beneficios y es un comienzo válido.</small></div>
          <div class="recommended"><span>2</span><strong>días</strong><small>Base recomendada para salud y progreso inicial.</small><b>BUEN PUNTO DE PARTIDA</b></div>
          <div><span>3</span><strong>días</strong><small>Permite repartir más práctica y volumen si recuperas bien.</small></div>
        </div>
        <p class="dose-note"><strong>¿Y lo óptimo?</strong> Para la mayoría de principiantes, dos sesiones de cuerpo completo son eficaces y realistas. Tres pueden ser útiles si gustan y encajan. Más días no garantizan más resultados: suelen servir para repartir el trabajo, no para reemplazar descanso y constancia.</p>
      </div>

      <h3>Distintas formas de entrenar la fuerza</h3>
      <div class="strength-modalities">
        <details open><summary><span>🏋️</span><div><strong>Pesos libres</strong><small>Mancuernas, barras, kettlebells</small></div><i>+</i></summary><div><p>Permiten muchos movimientos y progresiones. Requieren aprender a estabilizar la carga, pero no son solo para personas avanzadas.</p><p><strong>Ejemplos:</strong> sentadilla a un banco con mancuerna, peso muerto con kettlebell, remo y press de hombro.</p></div></details>
        <details><summary><span>⚙</span><div><strong>Máquinas</strong><small>Recorrido guiado y ajuste sencillo</small></div><i>+</i></summary><div><p>Ofrecen estabilidad y facilitan concentrarse en empujar o tirar. Son especialmente prácticas al empezar, con problemas de equilibrio o cuando interesa descargar una articulación.</p><p><strong>Ejemplos:</strong> prensa de piernas, remo sentado, jalón al pecho y press de pecho.</p></div></details>
        <details><summary><span>↔</span><div><strong>Bandas elásticas</strong><small>Portátiles y adaptables</small></div><i>+</i></summary><div><p>La resistencia aumenta al estirar la banda. Funcionan para ganar fuerza si la tensión progresa y las últimas repeticiones requieren esfuerzo.</p><p><strong>Ejemplos:</strong> remo, sentadilla, press, pasos laterales y extensión de rodilla.</p></div></details>
        <details><summary><span>🏠</span><div><strong>Peso corporal y objetos de casa</strong><small>Sin gimnasio</small></div><i>+</i></summary><div><p>Levantarse de una silla, empujar una pared o cargar una mochila también es fuerza. Para progresar puedes añadir repeticiones, reducir apoyos, aumentar recorrido o cargar la mochila.</p><p><strong>Ejemplos:</strong> sentarse y levantarse, flexión en pared, puente de glúteos, remo con banda y transporte de bolsas.</p></div></details>
        <details><summary><span>⏸</span><div><strong>Isométricos</strong><small>Hacer fuerza sin mover la articulación</small></div><i>+</i></summary><div><p>Se mantiene una posición durante unos segundos. Pueden ser útiles cuando el movimiento está limitado o como complemento, aunque no sustituyen todo el trabajo dinámico.</p><p><strong>Ejemplos:</strong> empujar una pared, sostener una banda o mantener una sentadilla alta apoyada.</p></div></details>
        <details><summary><span>⚡</span><div><strong>Potencia</strong><small>Producir fuerza con rapidez y control</small></div><i>+</i></summary><div><p>Es importante para reaccionar, subir un escalón o evitar una caída. Se entrena moviendo una carga manejable con intención rápida, después de dominar la técnica.</p><p><strong>Ejemplo:</strong> levantarse de una silla con rapidez y volver a sentarse lentamente, con supervisión si existe riesgo de caída.</p></div></details>
      </div>

      <section class="strength-recipe" aria-label="Infografía de una sesión inicial de fuerza">
        <div class="recipe-title"><span class="strength-eyebrow">TU PRIMERA SESIÓN</span><h3>Una receta sencilla de cuerpo completo</h3><p>Elige una variante que puedas hacer con buena técnica y sin dolor agudo.</p></div>
        <div class="movement-map">
          <article><span>1</span><strong>Rodillas</strong><small>Sentarse y levantarse o prensa</small></article>
          <article><span>2</span><strong>Empujar</strong><small>Pared, mancuernas o máquina</small></article>
          <article><span>3</span><strong>Tirar</strong><small>Remo con banda o polea</small></article>
          <article><span>4</span><strong>Cadera</strong><small>Puente de glúteos o peso muerto</small></article>
          <article><span>5</span><strong>Transportar y estabilizar</strong><small>Cargar bolsas o ejercicios de tronco</small></article>
        </div>
        <div class="training-formula">
          <div><strong>1–3</strong><span>series por ejercicio</span></div><b>×</b><div><strong>6–15</strong><span>repeticiones</span></div><b>·</b><div><strong>2–3</strong><span>repeticiones «en reserva»</span></div><b>·</b><div><strong>1–3 min</strong><span>de descanso</span></div>
        </div>
        <p class="recipe-explain"><strong>Repeticiones en reserva:</strong> termina la serie cuando notes que todavía podrías hacer dos o tres repeticiones correctas. No necesitas llegar al fallo muscular para progresar.</p>
      </section>

      <div class="gym-home">
        <section><span class="place-icon">🏋️</span><h3>En el gimnasio</h3><p>Las máquinas aportan estabilidad y permiten cambiar la carga con facilidad. Pide que te enseñen a regular asiento y apoyos.</p><ol><li>Prensa o sentadilla a banco</li><li>Remo sentado</li><li>Press de pecho en máquina</li><li>Peso muerto con mancuerna</li><li>Jalón al pecho</li><li>Transporte de mancuernas</li></ol></section>
        <section><span class="place-icon">🏠</span><h3>En casa</h3><p>Una silla estable, una banda y una mochila pueden ser suficientes. Comprueba que los anclajes no se suelten.</p><ol><li>Sentarse y levantarse</li><li>Remo con banda</li><li>Flexiones en pared o encimera</li><li>Puente de glúteos</li><li>Press con banda o botellas</li><li>Cargar una mochila o bolsas</li></ol></section>
      </div>

      <section class="progress-ladder" aria-label="Infografía para progresar en fuerza">
        <span class="strength-eyebrow">PROGRESIÓN SIN PRISAS</span><h3>Cuando se vuelve fácil, sube un solo escalón</h3>
        <ol><li><span>1</span><p>Aprende el movimiento y repítelo con control.</p></li><li><span>2</span><p>Añade alguna repetición dentro del rango.</p></li><li><span>3</span><p>Añade una serie si la recuperación es buena.</p></li><li><span>4</span><p>Sube ligeramente el peso o la tensión.</p></li><li><span>5</span><p>Vuelve a empezar en la parte baja del rango.</p></li></ol>
        <p>Si completas todas las repeticiones con buena técnica y aún podrías hacer muchas más, la resistencia probablemente ya es demasiado fácil.</p>
      </section>

      <h3>¿Cuándo notaré resultados?</h3>
      <div class="muscle-timeline">
        <article><span>Primeras semanas</span><strong>Aprendes y coordinas mejor</strong><p>Es frecuente ganar fuerza antes de ver cambios corporales porque el sistema nervioso usa mejor la musculatura.</p></article>
        <article><span>6–12 semanas</span><strong>Pueden aparecer cambios medibles</strong><p>Con entrenamiento progresivo, alimentación suficiente y descanso pueden empezar a detectarse cambios musculares.</p></article>
        <article><span>3–6 meses y más</span><strong>Los cambios se hacen más claros</strong><p>La masa muscular aumenta lentamente. Edad, experiencia, genética, proteína, energía, sueño y constancia cambian el ritmo.</p></article>
      </div>
      <p class="timeline-note">No uses estas fechas como examen: son orientativas. La fuerza, la facilidad para moverte, la ropa y los perímetros pueden cambiar antes o de forma distinta al peso.</p>

      <section class="recomp-card">
        <div class="recomp-scale" aria-hidden="true"><span>GRASA</span><b>↘</b><i>⇄</i><b>↗</b><span>MÚSCULO</span></div>
        <div><span class="strength-eyebrow">RECOMPOSICIÓN CORPORAL</span><h3>Perder grasa mientras se gana o conserva músculo</h3><p>La báscula puede bajar poco —o incluso mantenerse— mientras disminuye la grasa y mejora la masa muscular. Esto se llama recomposición corporal y suele ser más probable en personas principiantes, que vuelven tras una pausa o que tienen mayor reserva de grasa.</p><p>La favorecen un entrenamiento progresivo, suficiente proteína, un déficit energético moderado si se busca perder grasa y descanso adecuado. <strong>No ocurre a la misma velocidad en todo el mundo</strong> y conservar músculo durante una pérdida de peso ya es un resultado valioso.</p></div>
      </section>

      <h3>Mitos frecuentes: abre y comprueba</h3>
      <div class="strength-myths">
        <details><summary><span>“Para adelgazar solo necesito cardio”</span><i>+</i></summary><div><strong>Falso.</strong> La pérdida de grasa depende sobre todo del balance energético, pero la fuerza ayuda a conservar músculo, mejora la función y complementa al cardio. Lo más completo es combinar ambas formas de ejercicio.</div></details>
        <details><summary><span>“Las pesas me harán demasiado grande”</span><i>+</i></summary><div><strong>Muy improbable.</strong> Ganar mucha masa muscular exige años de entrenamiento específico. Al comenzar suelen mejorar antes la fuerza, la postura y la capacidad para las tareas diarias.</div></details>
        <details><summary><span>“Si no tengo agujetas, no ha servido”</span><i>+</i></summary><div><strong>Falso.</strong> Las agujetas reflejan novedad o daño muscular, no la calidad del entrenamiento. Progresar con buena técnica sin dolor incapacitante es mejor señal.</div></details>
        <details><summary><span>“Tengo que llegar siempre al fallo”</span><i>+</i></summary><div><strong>Falso.</strong> Se puede ganar fuerza y músculo terminando la mayoría de series con algunas repeticiones posibles. El fallo aumenta fatiga y no es necesario para principiantes.</div></details>
        <details><summary><span>“Poco peso no sirve”</span><i>+</i></summary><div><strong>Falso.</strong> Cargas ligeras también pueden estimular el músculo si la serie resulta suficientemente exigente y progresa. Las cargas mayores son especialmente útiles para maximizar fuerza, pero no son el único camino.</div></details>
        <details><summary><span>“El músculo pesa más que la grasa”</span><i>+</i></summary><div><strong>Un kilo siempre pesa un kilo.</strong> El músculo es más denso y ocupa menos volumen que la grasa; por eso dos cuerpos con el mismo peso pueden tener formas y funciones diferentes.</div></details>
        <details><summary><span>“Se puede eliminar grasa de una zona con ejercicios”</span><i>+</i></summary><div><strong>No de forma selectiva.</strong> Un ejercicio fortalece los músculos de la zona, pero el cuerpo decide de dónde moviliza la grasa según genética, hormonas y balance energético.</div></details>
        <details><summary><span>“Con obesidad o edad avanzada es peligroso”</span><i>+</i></summary><div><strong>No si se adapta correctamente.</strong> La fuerza es especialmente útil para conservar autonomía y masa muscular. Deben ajustarse carga, rango, apoyos y ejercicios a la situación clínica.</div></details>
      </div>

      <aside class="strength-safety"><span>!</span><div><strong>Entrena con seguridad</strong><p>Respira durante el esfuerzo, evita aguantar el aire de forma prolongada, usa apoyos estables y detente ante dolor agudo, opresión torácica, desmayo o falta de aire anormal. Si existe cardiopatía inestable, hipertensión no controlada, cirugía reciente o limitación importante, pide una valoración profesional antes de progresar.</p></div></aside>

      <details class="strength-sources"><summary>Fuentes científicas utilizadas</summary><ul>
        <li><a href="https://pubmed.ncbi.nlm.nih.gov/41843416/" target="_blank" rel="noopener">ACSM 2026: prescripción de fuerza para función, hipertrofia y rendimiento; síntesis de 137 revisiones</a>.</li>
        <li><a href="https://pubmed.ncbi.nlm.nih.gov/37414459/" target="_blank" rel="noopener">Prescripción de fuerza e hipertrofia: revisión sistemática y metaanálisis en red (2023)</a>.</li>
        <li><a href="https://pubmed.ncbi.nlm.nih.gov/33955140/" target="_blank" rel="noopener">Ejercicio, pérdida de peso y composición corporal en adultos con sobrepeso u obesidad: revisión de revisiones (2021)</a>.</li>
        <li><a href="https://pubmed.ncbi.nlm.nih.gov/38841642/" target="_blank" rel="noopener">Entrenamiento combinado y composición corporal en sobrepeso y obesidad: revisión sistemática y metaanálisis (2024)</a>.</li>
        <li><a href="https://pubmed.ncbi.nlm.nih.gov/35228201/" target="_blank" rel="noopener">Fortalecimiento muscular y riesgo de mortalidad y enfermedades crónicas: revisión sistemática y metaanálisis (2022)</a>.</li>
        <li><a href="https://pubmed.ncbi.nlm.nih.gov/37057640/" target="_blank" rel="noopener">Ejercicio para sarcopenia en personas mayores: revisión sistemática y metaanálisis en red (2023)</a>.</li>
      </ul></details>
    </div>
  `,

  "ejercicio-cardio": `
    <div class="cardio-page">
      <span class="cardio-eyebrow">MOVERSE PARA VIVIR MEJOR</span>
      <h3>Cardio: entrenar el corazón, los pulmones y la resistencia</h3>
      <p class="cardio-lead">Llamamos cardio o ejercicio aeróbico a cualquier actividad repetida que implica grandes grupos musculares y aumenta la respiración y el pulso durante varios minutos. <strong>No es solo correr:</strong> caminar, pedalear, nadar, bailar, remar o mover brazos y piernas desde una silla también pueden ser cardio.</p>

      <section class="cardio-benefit-band" aria-label="Beneficios principales del ejercicio cardiovascular">
        <div><span aria-hidden="true">♥</span><strong>Corazón</strong><small>Mejora la capacidad cardiorrespiratoria y ayuda a controlar la tensión.</small></div>
        <div><span aria-hidden="true">⚡</span><strong>Metabolismo</strong><small>Favorece el control de glucosa, grasa visceral y perfil lipídico.</small></div>
        <div><span aria-hidden="true">☀</span><strong>Vida diaria</strong><small>Da más resistencia para caminar, subir escaleras y mantener autonomía.</small></div>
        <div><span aria-hidden="true">☺</span><strong>Bienestar</strong><small>Puede mejorar sueño, ánimo, función cognitiva y calidad de vida.</small></div>
      </section>

      <div class="cardio-target">
        <div class="target-dial" aria-hidden="true"><strong>150–300</strong><span>min/semana</span></div>
        <div>
          <span class="cardio-eyebrow">META DE SALUD, NO PUNTO DE PARTIDA</span>
          <h3>La referencia semanal para adultos</h3>
          <p>La OMS recomienda entre <strong>150 y 300 minutos de actividad moderada</strong>, o entre <strong>75 y 150 minutos de actividad vigorosa</strong>, o una combinación. Se puede repartir durante la semana y <strong>cualquier cantidad es mejor que ninguna</strong>. Si partes de cero, no tienes que alcanzar esta cifra de golpe.</p>
        </div>
      </div>

      <h3>¿Cómo sé a qué intensidad estoy?</h3>
      <div class="talk-test" role="img" aria-label="Infografía del test del habla para medir la intensidad">
        <article class="talk-zone zone-light"><span>1–2/10</span><strong>Suave</strong><p>Hablas y cantas con facilidad.</p><small>Paseo tranquilo, pedaleo muy suave.</small></article>
        <article class="talk-zone zone-moderate"><span>3–5/10</span><strong>Moderada</strong><p>Hablas en frases, pero cantar cuesta.</p><small>Paso ligero, bici cómoda, baile continuo.</small></article>
        <article class="talk-zone zone-hard"><span>6–8/10</span><strong>Vigorosa</strong><p>Solo dices pocas palabras seguidas.</p><small>Subir cuestas, correr, intervalos intensos.</small></article>
        <article class="talk-zone zone-max"><span>9–10/10</span><strong>Máxima</strong><p>Casi no puedes hablar.</p><small>No es necesaria para cuidar la salud ni adecuada para empezar.</small></article>
      </div>

      <h3>Tipos de cardio: distintas herramientas, no una competición</h3>
      <div class="cardio-types">
        <article>
          <div class="type-head"><span class="type-icon">🌿</span><div><small>LISS</small><h4>Continuo suave</h4></div></div>
          <p>Ritmo estable y fácil, normalmente durante más tiempo. Es cómodo para empezar, recuperarse o acumular movimiento.</p>
          <div class="type-example"><strong>Ejemplo:</strong> 25–45 min caminando, pedaleando o nadando suave; esfuerzo 2–3/10.</div>
        </article>
        <article>
          <div class="type-head"><span class="type-icon">🚶</span><div><small>MICT</small><h4>Continuo moderado</h4></div></div>
          <p>Mantienes un ritmo medio sin pausas. Es una de las formas con más evidencia y permite regular bien el esfuerzo.</p>
          <div class="type-example"><strong>Ejemplo:</strong> 20–40 min a paso ligero o en bicicleta; esfuerzo 3–5/10.</div>
        </article>
        <article>
          <div class="type-head"><span class="type-icon">↔</span><div><small>INTERVALOS</small><h4>Trabajo y recuperación</h4></div></div>
          <p>Alterna tramos algo exigentes con otros suaves. No todos los intervalos son HIIT y pueden adaptarse a niveles bajos.</p>
          <div class="type-example"><strong>Ejemplo:</strong> 1 min ligero + 2 min suave, repetido 6 veces.</div>
        </article>
        <article>
          <div class="type-head"><span class="type-icon">⚡</span><div><small>HIIT</small><h4>Intervalos intensos</h4></div></div>
          <p>Los tramos de trabajo son vigorosos y breves. Ahorra tiempo y mejora la capacidad aeróbica, pero no es imprescindible ni siempre apropiado.</p>
          <div class="type-example"><strong>Ejemplo iniciado:</strong> 30 s intensos + 90 s suaves, 6–8 rondas, después de calentar.</div>
        </article>
        <article>
          <div class="type-head"><span class="type-icon">💧</span><div><small>BAJO IMPACTO</small><h4>Menos carga articular</h4></div></div>
          <p>Reduce saltos y golpes sin dejar de trabajar la resistencia. Puede realizarse suave, moderado o intenso.</p>
          <div class="type-example"><strong>Ejemplo:</strong> bici reclinada, elíptica, ejercicios acuáticos o marcha sentada.</div>
        </article>
      </div>
      <p class="cardio-evidence-note"><strong>Lo que dice la evidencia:</strong> en personas con sobrepeso u obesidad, HIIT y cardio continuo moderado producen cambios parecidos en peso y grasa corporal. El mejor método es el que resulte seguro, tolerable y sostenible. Además, hacer cardio puede mejorar la salud aunque la báscula apenas cambie.</p>

      <h3>Adaptar el cardio cuando existe una patología o limitación</h3>
      <p>No hay un ejercicio universal. Estas orientaciones ayudan a elegir una opción inicial, pero el diagnóstico, los síntomas y la medicación pueden exigir una valoración individual.</p>
      <div class="cardio-adaptations">
        <details open>
          <summary><span>🫁</span><div><strong>Problemas respiratorios</strong><small>EPOC, asma o disnea</small></div><i>+</i></summary>
          <div><p><strong>Suele funcionar:</strong> caminar o bicicleta estática, calentamiento más largo e intervalos cortos con recuperación. Por ejemplo, 1 minuto de trabajo y 1–2 minutos suaves.</p><p><strong>Adapta:</strong> regula el esfuerzo con la disnea; debe costar, pero seguir siendo controlable. En EPOC estable, tanto el entrenamiento continuo como el interválico pueden mejorar la capacidad física. La rehabilitación pulmonar es el contexto ideal cuando la limitación es importante.</p><p><strong>Precaución:</strong> sigue el plan de inhaladores indicado y evita entrenar durante una exacerbación.</p></div>
        </details>
        <details>
          <summary><span>🧠</span><div><strong>Problemas neurológicos</strong><small>Ictus, Parkinson o esclerosis múltiple</small></div><i>+</i></summary>
          <div><p><strong>Suele funcionar:</strong> bicicleta estática o reclinada, pedalier de brazos/piernas, marcha con apoyo o ejercicios acuáticos supervisados.</p><p><strong>Adapta:</strong> usa sesiones cortas, descansos planificados, señales rítmicas si ayudan a la marcha y una intensidad moderada que no empeore la técnica. La fatiga neurológica y el calor pueden requerir más pausas.</p><p><strong>Precaución:</strong> después de un ictus o con síntomas inestables, la progresión debe individualizarla rehabilitación o fisioterapia.</p></div>
        </details>
        <details>
          <summary><span>⚖</span><div><strong>Problemas de equilibrio o riesgo de caída</strong><small>Vértigo, fragilidad o inestabilidad</small></div><i>+</i></summary>
          <div><p><strong>Suele funcionar:</strong> bicicleta reclinada, pedalier sentado, piscina con apoyo o marcha junto a una barandilla y acompañamiento.</p><p><strong>Adapta:</strong> prioriza un entorno despejado, buena iluminación, calzado estable y tareas simples. El entrenamiento del equilibrio debe añadirse aparte; el cardio sentado mejora resistencia, pero no entrena por sí solo todas las reacciones de equilibrio.</p><p><strong>Evita al inicio:</strong> cinta sin supervisión, cambios rápidos de dirección y combinar marcha con tareas cognitivas si aumentan la inestabilidad.</p></div>
        </details>
        <details>
          <summary><span>🦴</span><div><strong>Dolor articular, obesidad o movilidad reducida</strong><small>Rodilla, cadera, espalda o baja tolerancia</small></div><i>+</i></summary>
          <div><p><strong>Suele funcionar:</strong> ejercicio acuático, bicicleta, elíptica, marcha en llano o cardio sentado.</p><p><strong>Adapta:</strong> empieza con 5–10 minutos, menos impacto y una resistencia que permita moverse con control. Divide una sesión larga en bloques breves si el dolor o la fatiga lo requieren.</p><p><strong>Regla práctica:</strong> una molestia leve y estable puede ser tolerable; dolor agudo, cojera nueva o empeoramiento que dura más de 24 horas indica que conviene reducir y consultar.</p></div>
        </details>
        <details>
          <summary><span>♥</span><div><strong>Cardiopatía, hipertensión o diabetes</strong><small>Con control clínico y ajuste individual</small></div><i>+</i></summary>
          <div><p><strong>Suele funcionar:</strong> cardio continuo moderado y progresivo. Calienta y vuelve a la calma durante 5–10 minutos; no termines de forma brusca.</p><p><strong>Adapta:</strong> algunos fármacos alteran la frecuencia cardiaca, por lo que el test del habla o la percepción de esfuerzo pueden ser más útiles. En diabetes tratada con insulina o sulfonilureas hay que conocer el riesgo de hipoglucemia.</p><p><strong>Precaución:</strong> cardiopatía inestable, tensión no controlada o síntomas con el esfuerzo requieren indicación sanitaria antes de progresar.</p></div>
        </details>
      </div>

      <section class="cardio-start" aria-label="Infografía para empezar a hacer cardio desde cero">
        <div class="start-title"><span class="cardio-eyebrow">DESDE CERO, SIN PRISAS</span><h3>Un ejemplo de progresión en seis semanas</h3><p>Repite cada semana si todavía cuesta. Avanza primero en tiempo, después en frecuencia y, por último, en intensidad.</p></div>
        <ol class="start-route">
          <li><span>1</span><div><strong>Semanas 1–2</strong><p>5–10 min suaves, 3 días. Puedes dividirlos en bloques de 3–5 min.</p></div></li>
          <li><span>2</span><div><strong>Semanas 3–4</strong><p>10–20 min, 3–4 días. Añade tramos moderados de 1–2 min.</p></div></li>
          <li><span>3</span><div><strong>Semanas 5–6</strong><p>20–30 min, 4–5 días. La mayor parte moderada y controlada.</p></div></li>
          <li><span>✓</span><div><strong>Después</strong><p>Acércate poco a poco a 150 min semanales y elige la modalidad que puedas mantener.</p></div></li>
        </ol>
        <div class="start-formula"><strong>Antes</strong><span>5–10 min de calentamiento</span><b>→</b><strong>Durante</strong><span>ritmo que controles</span><b>→</b><strong>Después</strong><span>5 min suaves</span></div>
      </section>

      <section class="neat-infographic" aria-label="Infografía sobre NEAT y salud">
        <div class="neat-main"><span aria-hidden="true">↗</span><div><small>NEAT</small><h3>El movimiento que no llamamos ejercicio</h3><p>Es la energía que gastas al caminar por casa, trabajar de pie, limpiar, subir escaleras, hacer recados o jugar. <strong>No sustituye al entrenamiento</strong>, pero reduce el tiempo sedentario y suma actividad durante muchas horas del día.</p></div></div>
        <div class="neat-examples">
          <article><span>30 min</span><p>de entrenamiento es valioso</p></article>
          <b>+</b>
          <article><span>Todo el día</span><p>con pequeñas oportunidades para moverse</p></article>
          <b>=</b>
          <article class="neat-result"><span>Más salud</span><p>y menos sedentarismo</p></article>
        </div>
        <div class="neat-actions">
          <div>📞 Camina al hablar</div><div>🪜 Usa escaleras</div><div>⏱ Levántate con frecuencia</div><div>🛒 Haz recados a pie</div><div>🏠 Participa en tareas domésticas</div><div>🚶 Da paseos breves tras comer</div>
        </div>
        <p class="neat-note">No existe una cifra mágica de NEAT. El objetivo útil es detectar dónde puedes sentarte menos y moverte algo más, sin convertir cada minuto en una obligación.</p>
      </section>

      <aside class="cardio-safety"><span aria-hidden="true">!</span><div><strong>Detén el ejercicio y solicita valoración</strong><p>si aparece dolor u opresión en el pecho, desmayo, confusión, debilidad súbita, palpitaciones mantenidas o una falta de aire intensa y distinta de la habitual. Ante síntomas graves, llama al 112.</p></div></aside>

      <details class="cardio-sources">
        <summary>Fuentes científicas utilizadas</summary>
        <ul>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/33239350/" target="_blank" rel="noopener">Guías de actividad física y comportamiento sedentario de la OMS (2020)</a>.</li>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/39724371/" target="_blank" rel="noopener">Ejercicio aeróbico y pérdida de peso: revisión sistemática y metaanálisis dosis-respuesta de 116 ensayos (2024)</a>.</li>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/37800068/" target="_blank" rel="noopener">HIIT frente a entrenamiento continuo moderado en sobrepeso y obesidad: revisión sistemática y metaanálisis (2023)</a>.</li>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/40083154/" target="_blank" rel="noopener">Entrenamiento aeróbico en EPOC: revisión sistemática y metaanálisis en red (2025)</a>.</li>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/30844920/" target="_blank" rel="noopener">Guías de ejercicio para esclerosis múltiple, ictus y Parkinson: revisión sistemática (2019)</a>.</li>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/34709478/" target="_blank" rel="noopener">Ejercicio y equilibrio en ictus, Parkinson y esclerosis múltiple: revisión sistemática y metaanálisis (2022)</a>.</li>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/31552570/" target="_blank" rel="noopener">Interrumpir periodos prolongados sentado: revisión sistemática y metaanálisis (2020)</a>.</li>
        </ul>
      </details>
    </div>
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
