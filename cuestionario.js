/**
 * =============================================
 *  CUESTIONARIO PREVIO A SESIÓN GRUPAL
 *  Edita las preguntas aquí
 * =============================================
 *
 *  TIPOS DE PREGUNTA DISPONIBLES:
 *  - "texto"    → campo de texto libre
 *  - "radio"    → una sola opción
 *  - "checkbox" → varias opciones
 *  - "numero"   → solo números
 *  - "select"   → lista desplegable
 *
 *  CÓMO AÑADIR UNA PREGUNTA:
 *  Copia un bloque y pégalo al final del array (antes del ];)
 *  No olvides la coma antes del nuevo bloque.
 */

const PASOS_CUESTIONARIO = [

  // ---- PASO 1: Datos básicos ----
  {
    titulo: "Cuéntanos sobre ti",
    preguntas: [
      {
        id: "nombre",
        tipo: "texto",
        label: "¿Cómo te llamas?",
        placeholder: "Nombre y apellidos",
        requerido: true
      },
      {
        id: "edad",
        tipo: "numero",
        label: "¿Cuántos años tienes?",
        placeholder: "Edad",
        requerido: true
      },
      {
        id: "correo electronico",
        tipo: "texto",
        label: "Correo electrónico",
        placeholder: "E-mail",
        requerido: true
      },
      {
        id: "peso_habitual",
        tipo: "texto",
        label: "¿Cuál ha sido tu peso habitual? ¿Ha variado con los años o a raíz de algún evento?",
        placeholder: "Ej: 92 kg, subí a raíz de los embarazos",
        requerido: false
      }
    ]
  },

  // ---- PASO 2: Motivación ----
  {
    titulo: "¿Por qué estás aquí?",
    preguntas: [
      {
        id: "motivacion_principal",
        tipo: "radio",
        label: "¿Cuál es tu principal motivo para acudir a esta consulta?",
        opciones: [
          "Quiero perder peso",
          "Me lo ha recomendado mi médico",
          "Tengo problemas de salud relacionados con el peso",
          "Quiero aprender a comer mejor",
          "Otro motivo"
        ],
        requerido: true
      },
      {
        id: "intentos_anteriores",
        tipo: "radio",
        label: "¿Has intentado perder peso antes?",
        opciones: [
          "Sí, muchas veces",
          "Sí, alguna vez",
          "No, es la primera vez",
          "No lo necesito, vengo por otro motivo"
        ],
        requerido: false
      }
    ]
  },

  // ---- PASO 3: Alimentación ----
  {
    titulo: "Tu alimentación actual",
    preguntas: [
      {
        id: "comidas_dia",
        tipo: "radio",
        label: "¿Cuántas veces comes al día aproximadamente?",
        opciones: [
          "1-2 veces",
          "3 veces",
          "4-5 veces",
          "Pico continuamente, sin horarios fijos"
        ],
        requerido: false
      },
      {
        id: "dificultades_alimentacion",
        tipo: "checkbox",
        label: "¿Cuáles de estas situaciones te resultan difíciles?",
        opciones: [
          "Picar entre horas",
          "Comer por ansiedad o emociones",
          "Comer fuera de casa",
          "Cocinar de forma saludable",
          "Mantener los hábitos en fin de semana",
          "El dulce y los ultraprocesados",
          "Comer deprisa o sin prestar atención"
        ],
        requerido: false
      }
    ]
  },

  // ---- PASO 4: Actividad física ----
  {
    titulo: "Tu actividad física",
    preguntas: [
      {
        id: "nivel_actividad",
        tipo: "radio",
        label: "¿Cómo describirías tu nivel de actividad física actual?",
        opciones: [
          "Sedentario/a (muy poco movimiento al día)",
          "Ligeramente activo/a (camino un poco)",
          "Moderadamente activo/a (ejercicio 1-2 días/semana)",
          "Bastante activo/a (ejercicio 3+ días/semana)"
        ],
        requerido: false
      },
      {
        id: "barreras_ejercicio",
        tipo: "checkbox",
        label: "¿Qué te impide hacer más ejercicio?",
        opciones: [
          "Falta de tiempo",
          "Dolor o problemas físicos",
          "No sé cómo empezar",
          "Falta de motivación",
          "Cansancio",
          "No tengo barreras, ya hago ejercicio"
        ],
        requerido: false
      }
    ]
  },

  // ---- PASO 5: Expectativas ----
  {
    titulo: "Tus expectativas",
    preguntas: [
      {
        id: "expectativa_peso",
        tipo: "texto",
        label: "¿Cuánto peso te gustaría perder o cuál es tu objetivo?",
        placeholder: "Ej: perder 15 kg, llegar a 80 kg, sentirme mejor...",
        requerido: false
      },
      {
        id: "dificultad_esperada",
        tipo: "radio",
        label: "¿Cómo de difícil crees que te resultará este proceso?",
        opciones: [
          "Muy difícil, tengo muchos obstáculos",
          "Difícil, pero creo que puedo",
          "Moderado, estoy bastante motivado/a",
          "No creo que me cueste demasiado"
        ],
        requerido: false
      },
      {
        id: "comentario_libre",
        tipo: "texto_largo",
        label: "¿Hay algo más que quieras contarnos antes de la sesión?",
        placeholder: "Cuéntanos lo que consideres importante...",
        requerido: false
      }
    ]
  }
];

// =============================================
// LÓGICA DEL FORMULARIO (no editar)
// =============================================
let pasoActual = 0;
const respuestas = {};

function initForm() {
  pasoActual = 0;
  renderPaso(0);
  updateProgress();
  updateNavButtons();
}

function renderPaso(index) {
  const container = document.getElementById("formSteps");
  if (!container) return;
  const paso = PASOS_CUESTIONARIO[index];

  let html = `
    <div class="form-step">
      <div class="form-step-label">Paso ${index + 1} de ${PASOS_CUESTIONARIO.length}</div>
      <h3>${paso.titulo}</h3>
  `;

  paso.preguntas.forEach(p => {
    html += `<div class="form-field">`;
    html += `<label>${p.label}${p.requerido ? ' <span style="color:#e05252">*</span>' : ''}</label>`;

    if (p.tipo === "texto") {
      const val = respuestas[p.id] || "";
      html += `<input type="text" id="inp_${p.id}" placeholder="${p.placeholder || ''}"
                 value="${val}" oninput="respuestas['${p.id}']=this.value">`;
    } else if (p.tipo === "numero") {
      const val = respuestas[p.id] || "";
      html += `<input type="number" id="inp_${p.id}" placeholder="${p.placeholder || ''}"
                 value="${val}" oninput="respuestas['${p.id}']=this.value">`;
    } else if (p.tipo === "texto_largo") {
      const val = respuestas[p.id] || "";
      html += `<textarea id="inp_${p.id}" placeholder="${p.placeholder || ''}"
                oninput="respuestas['${p.id}']=this.value">${val}</textarea>`;
    } else if (p.tipo === "radio") {
      html += `<div class="radio-group">`;
      p.opciones.forEach(op => {
        const sel = respuestas[p.id] === op ? "selected" : "";
        html += `<label class="radio-option ${sel}" onclick="selectRadio('${p.id}','${op.replace(/'/g,"\\'")}',this)">
          <input type="radio" name="${p.id}" ${sel ? "checked" : ""}> ${op}
        </label>`;
      });
      html += `</div>`;
    } else if (p.tipo === "checkbox") {
      const selArr = respuestas[p.id] || [];
      html += `<div class="checkbox-group">`;
      p.opciones.forEach(op => {
        const sel = selArr.includes(op) ? "selected" : "";
        html += `<label class="checkbox-option ${sel}" onclick="toggleCheckbox('${p.id}','${op.replace(/'/g,"\\'")}',this)">
          <input type="checkbox" ${sel ? "checked" : ""}> ${op}
        </label>`;
      });
      html += `</div>`;
    }

    html += `</div>`;
  });

  html += `</div>`;
  container.innerHTML = html;
}

function selectRadio(id, valor, el) {
  respuestas[id] = valor;
  const group = el.closest(".radio-group");
  group.querySelectorAll(".radio-option").forEach(l => {
    l.classList.remove("selected");
    l.querySelector("input").checked = false;
  });
  el.classList.add("selected");
  el.querySelector("input").checked = true;
}

function toggleCheckbox(id, valor, el) {
  if (!respuestas[id]) respuestas[id] = [];
  const arr = respuestas[id];
  const idx = arr.indexOf(valor);
  if (idx === -1) {
    arr.push(valor);
    el.classList.add("selected");
    el.querySelector("input").checked = true;
  } else {
    arr.splice(idx, 1);
    el.classList.remove("selected");
    el.querySelector("input").checked = false;
  }
}

function updateProgress() {
  const bar = document.getElementById("formProgressBar");
  if (bar) bar.style.width = ((pasoActual + 1) / PASOS_CUESTIONARIO.length * 100) + "%";
}

function updateNavButtons() {
  const btnPrev   = document.getElementById("btnPrev");
  const btnNext   = document.getElementById("btnNext");
  const btnSubmit = document.getElementById("btnSubmit");
  if (!btnPrev || !btnNext || !btnSubmit) return;
  const isLast = pasoActual === PASOS_CUESTIONARIO.length - 1;
  btnPrev.style.display   = pasoActual > 0 ? "block" : "none";
  btnNext.style.display   = isLast ? "none" : "block";
  btnSubmit.style.display = isLast ? "block" : "none";
}

function formNext() {
  if (pasoActual < PASOS_CUESTIONARIO.length - 1) {
    pasoActual++;
    renderPaso(pasoActual);
    updateProgress();
    updateNavButtons();
    document.getElementById("formCard")?.scrollIntoView({ behavior: "smooth" });
  }
}

function formPrev() {
  if (pasoActual > 0) {
    pasoActual--;
    renderPaso(pasoActual);
    updateProgress();
    updateNavButtons();
  }
}

function submitForm() {
  // Construye un resumen de las respuestas
  let resumen = "CUESTIONARIO PREVIO - SESIÓN GRUPAL\n";
  resumen += "=====================================\n";
  resumen += `Fecha: ${new Date().toLocaleDateString('es-ES')}\n\n`;

  PASOS_CUESTIONARIO.forEach(paso => {
    resumen += `\n--- ${paso.titulo} ---\n`;
    paso.preguntas.forEach(p => {
      const val = respuestas[p.id];
      if (val) {
        resumen += `${p.label}\n→ ${Array.isArray(val) ? val.join(", ") : val}\n\n`;
      }
    });
  });

  // Intenta abrir el cliente de correo con los datos
  const emailDestino = (typeof CONFIG !== "undefined") ? CONFIG.EMAIL_DESTINO : "";
  const subject = encodeURIComponent("Cuestionario previo sesión grupal - " + (respuestas["nombre"] || "Paciente"));
  const body    = encodeURIComponent(resumen);

  if (emailDestino) {
    window.open(`mailto:${emailDestino}?subject=${subject}&body=${body}`);
  }

  // Muestra confirmación
  document.getElementById("formCard").style.display = "none";
  document.getElementById("formSuccess").style.display = "block";
}
