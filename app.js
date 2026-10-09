document.write('<script src="app-core.js"><\/script>');

// ENDONUTRI deployment refresh 2026-10-09 14:58
// Ajustes de interfaz solicitados para ENDONUTRI.
document.addEventListener("DOMContentLoaded", () => {
  // Eliminar por completo la sección "Ideas de Comidas" de la navegación,
  // la portada y sus vistas internas, sin afectar a Planes de Alimentación.
  const comidasNavLink = document.querySelector('a[onclick*="comidas-desayunos"]');
  comidasNavLink?.closest(".nav-group")?.remove();

  document.querySelector('.home-card[onclick*="comidas-desayunos"]')?.remove();

  document
    .querySelectorAll('[id^="section-comidas-"]')
    .forEach((section) => section.remove());

  // En "Rellenar cuestionario previo", quitar el QR del cuestionario.
  document
    .getElementById("cuestionarioQrCanvas")
    ?.closest(".qr-card")
    ?.remove();

  // Quitar la nota interna "Instrucciones para el equipo médico".
  document.querySelectorAll(".info-box").forEach((box) => {
    const text = box.textContent || "";
    if (text.includes("Instrucciones para el equipo médico")) {
      box.remove();
    }
  });

  // EJERCICIO EN CASA
  // Garantiza que la sección exista y sustituye su contenido por la nueva guía visual.
  // La versión anterior buscaba un elemento #content-ejercicio-casa que no existe
  // en la estructura actual, por eso las imágenes estaban subidas pero no se mostraban.
  const main = document.getElementById("contentArea");
  let ejercicioCasa = document.getElementById("section-ejercicio-casa");

  if (!ejercicioCasa && main) {
    ejercicioCasa = document.createElement("section");
    ejercicioCasa.className = "section";
    ejercicioCasa.id = "section-ejercicio-casa";
    const pasos = document.getElementById("section-ejercicio-pasos");
    if (pasos) main.insertBefore(ejercicioCasa, pasos);
    else main.appendChild(ejercicioCasa);
  }

  if (ejercicioCasa) {
    const paginasRutina = [
      ["Día 1 · Base y control", "img/rutina-casa/rutina-dia-1.webp?v=20261009-1458"],
      ["Día 2 · Estabilidad y fuerza funcional", "img/rutina-casa/rutina-dia-2.webp?v=20261009-1458"],
      ["Día 3 · Coordinación y progresión", "img/rutina-casa/rutina-dia-3.webp?v=20261009-1458"],
      ["Abdominales fáciles · Nivel principiante", "img/rutina-casa/abdominales-principiante.webp?v=20261009-1458"],
      ["Progresión de abdominales · Principiante a intermedio", "img/rutina-casa/abdominales-progresion.webp?v=20261009-1458"],
    ];

    ejercicioCasa.innerHTML = `
      <div class="section-header">
        <button class="back-btn" onclick="showSection('home')">← Inicio</button>
        <h2>🏠 Ejercicio en casa</h2>
      </div>
      <div style="max-width:720px;margin:0 auto 24px;">
        <div style="padding:24px 24px 20px;margin-bottom:24px;border-radius:18px;background:linear-gradient(135deg,#eef7f1,#f8fbf8);border:1px solid #dce9e0;">
          <span class="eyebrow">RUTINA GUIADA</span>
          <h3 style="margin:.4rem 0 .7rem;color:#0f5138;">Entrena en casa paso a paso</h3>
          <p style="margin:0;line-height:1.65;color:#41554a;">Sigue las páginas en orden. Incluyen tres días de trabajo y una progresión sencilla de abdominales para nivel principiante e intermedio.</p>
        </div>
        <div class="rutina-casa-pages" style="display:grid;gap:28px;">
          ${paginasRutina.map(([titulo, src], index) => `
            <figure style="margin:0;">
              <img
                src="${src}"
                alt="${titulo}"
                loading="${index === 0 ? "eager" : "lazy"}"
                style="display:block;width:100%;height:auto;margin:0;border-radius:18px;box-shadow:0 10px 34px rgba(16,68,58,.12);background:#f7f3ea;"
              >
            </figure>
          `).join("")}
        </div>
      </div>
    `;
  }
});