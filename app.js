document.write('<script src="app-core.js"><\/script>');

// ENDONUTRI deployment refresh 2026-10-09 10:54
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

  // Sustituir todo el contenido de "Ejercicio en casa" por la nueva rutina
  // y mostrar todas las páginas en orden, una debajo de otra.
  const ejercicioCasa = document.getElementById("content-ejercicio-casa");
  if (ejercicioCasa) {
    ejercicioCasa.classList.remove("editable-zone");
    ejercicioCasa.style.padding = "0";
    ejercicioCasa.style.background = "transparent";
    ejercicioCasa.style.boxShadow = "none";

    const paginasRutina = [
      ["Día 1 · Base y control", "img/rutina-casa/rutina-dia-1.webp?v=20261009-1054"],
      ["Día 2 · Estabilidad y fuerza funcional", "img/rutina-casa/rutina-dia-2.webp?v=20261009-1054"],
      ["Día 3 · Coordinación y progresión", "img/rutina-casa/rutina-dia-3.webp?v=20261009-1054"],
      ["Abdominales fáciles · Nivel principiante", "img/rutina-casa/abdominales-principiante.webp?v=20261009-1054"],
      ["Progresión de abdominales · Principiante a intermedio", "img/rutina-casa/abdominales-progresion.webp?v=20261009-1054"],
    ];

    ejercicioCasa.innerHTML = `
      <div class="rutina-casa-pages" style="max-width:520px;margin:0 auto;display:grid;gap:28px;">
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
    `;
  }
});
