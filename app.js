document.write('<script src="app-core.js"><\/script>');

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
});
