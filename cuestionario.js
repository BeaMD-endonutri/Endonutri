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
        id: "correo_electronico",
        tipo: "texto",
        label: "Correo electrónico",
        placeholder: "E-mail",
        requerido: false
      }
    ]
  },

  // ---- PASO 2: Alimentación últimas 24h ----
  {
    titulo: "¿Qué comiste ayer?",
    preguntas: [
      {
        id: "desayuno",
        tipo: "texto_largo",
        label: "Desayuno",
        placeholder: "¿Qué tomaste? ¿A qué hora? ¿Con pan? ¿Postre?",
        requerido: false
      },
      {
        id: "media_manana",
        tipo: "texto_largo",
        label: "Media mañana",
        placeholder: "¿Tomaste algo? ¿El qué?",
        requerido: false
      },
      {
        id: "almuerzo",
        tipo: "texto_largo",
        label: "Almuerzo",
        placeholder: "¿Qué tomaste? ¿A qué hora? ¿Con pan? ¿Postre?",
        requerido: false
      },
      {
        id: "merienda",
        tipo: "texto_largo",
        label: "Merienda",
        placeholder: "¿Tomaste algo? ¿El qué?",
        requerido: false
      },
      {
        id: "cena",
        tipo: "texto_largo",
        label: "Cena",
        placeholder: "¿Qué tomaste? ¿A qué hora? ¿Con pan? ¿Postre?",
        requerido: false
      },
      {
        id: "picoteo",
        tipo: "texto_largo",
        label: "¿Sueles picotear entre horas? ¿Qué tipo de alimentos?",
        placeholder: "Cuéntanos...",
        requerido: false
      }
    ]
  },

  // ---- PASO 3: Peso e hidratación ----
  {
    titulo: "Peso e hidratación",
    preguntas: [
      {
        id: "peso_habitual",
        tipo: "texto_largo",
        label: "¿Cuál ha sido tu peso habitual? ¿Ha variado con los años o a raíz de algún evento?",
        placeholder: "Cuéntanos tu historial de peso...",
        requerido: false
      },
      {
        id: "agua",
        tipo: "radio",
        label: "¿Cuánta agua tomas a lo largo del día?",
        opciones: [
          "Menos de 1 litro",
          "Entre 1 y 1,5 litros",
          "Entre 1,5 y 2 litros",
          "Más de 2 litros"
        ],
        requerido: false
      }
    ]
  },

  // ---- PASO 4: Actividad física ----
  {
    titulo: "Actividad física",
    preguntas: [
      {
        id: "ejercicio",
        tipo: "texto_largo",
        label: "¿Realizas alguna actividad o ejercicio físico? Si es así, ¿cuál y con qué frecuencia semanal?",
        placeholder: "Tipo de ejercicio y frecuencia...",
        requerido: false
      },
      {
        id: "patologia_ejercicio",
        tipo: "texto_largo",
        label: "¿Tienes alguna patología que te dificulte hacer ejercicio?",
        placeholder: "Si no tienes ninguna, escribe 'No'",
        requerido: false
      }
    ]
  },

  // ---- PASO 5: Dietas y hábitos ----
  {
    titulo: "Dietas y hábitos",
    preguntas: [
      {
        id: "dietas_anteriores",
        tipo: "texto_largo",
        label: "¿Has realizado otras dietas anteriormente? ¿Cómo fueron los resultados?",
        placeholder: "Cuéntanos tu experiencia...",
        requerido: false
      },
      {
        id: "tabaco_alcohol",
        tipo: "texto_largo",
        label: "¿Fumas o bebes alcohol? ¿Con qué frecuencia?",
        placeholder: "Sí / No / Ocasionalmente...",
        requerido: false
      },
      {
        id: "dificultades",
        tipo: "checkbox",
        label: "¿Qué es lo que más te dificulta a la hora de perder peso?",
        opciones: [
          "Falta de tiempo",
          "Falta de motivación",
          "Cargas familiares",
          "Ansiedad",
          "Cansancio",
          "Hambre constante",
          "Trabajo por turnos",
          "Comer fuera de casa",
          "Otro"
        ],
        requerido: false
      }
    ]
  },

  // ---- PASO 6: Preferencias alimentarias ----
  {
    titulo: "Preferencias alimentarias",
    preguntas: [
      {
        id: "alergias",
        tipo: "texto_largo",
        label: "¿Qué alimentos no te gustan o eres alérgico/intolerante?",
        placeholder: "Alimentos que no toleras o no te gustan...",
        requerido: false
      },
      {
        id: "favoritos",
        tipo: "texto_largo",
        label: "¿Cuáles son tus comidas favoritas?",
        placeholder: "Tus platos preferidos...",
        requerido: false
      }
    ]
  },

  // ---- PASO 7: Motivación y expectativas ----
  {
    titulo: "Motivación y expectativas",
    preguntas: [
      {
        id: "motivacion",
        tipo: "radio",
        label: "¿Te sientes motivado/a para empezar un cambio?",
        opciones: [
          "Sí, tengo muchas ganas",
          "Sí, aunque tengo dudas",
          "Regular, necesito apoyo",
          "Todavía no estoy seguro/a"
        ],
        requerido: false
      },
      {
        id: "temas_sesiones",
        tipo: "texto_largo",
        label: "¿Qué temas te gustaría que abordáramos en las siguientes sesiones?",
        placeholder: "Cuéntanos qué te interesa...",
        requerido: false
      },
      {
        id: "info_adicional",
        tipo: "texto_largo",
        label: "Otra información a comentar o que creas que podría sernos útil (cirugía bariátrica, medicación pautada por endocrino, etc.)",
        placeholder: "Cualquier información relevante...",
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
  // Construye el resumen de respuestas
  let resumen = "";
  PASOS_CUESTIONARIO.forEach(paso => {
    resumen += "\n" + paso.titulo.toUpperCase() + "\n";
    paso.preguntas.forEach(p => {
      const val = respuestas[p.id];
      if (val) {
        resumen += p.label + "\n→ " + (Array.isArray(val) ? val.join(", ") : val) + "\n";
      }
    });
  });

  const datos = {
    access_key: "582ddeca-12df-4308-9b3f-1c7e232844ed",
    subject: "Cuestionario previo sesión grupal - " + (respuestas["nombre"] || "Paciente"),
    from_name: "Portal Endonutri",
    message: resumen
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos)
    });

    const result = await response.json();

    if (result.success) {
      document.getElementById("formCard").style.display = "none";
      document.getElementById("formSuccess").style.display = "block";
    } else {
      alert("Hubo un problema al enviar. Inténtalo de nuevo.");
    }
  } catch (error) {
    alert("Error de conexión. Comprueba tu internet e inténtalo de nuevo.");
  }
}
