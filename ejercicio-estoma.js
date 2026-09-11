(function(){
  const PDF_PATH = 'pdfs/estoma/ENDONUTRI_Ejercicio_Colostomia_Ileostomia_2026.pdf';

  function addNavLink(){
    const movilidadLink = document.getElementById('navMovilidadReducida');
    if(!movilidadLink || document.getElementById('navEjercicioEstoma')) return;
    const link = document.createElement('a');
    link.id = 'navEjercicioEstoma';
    link.href = '#';
    link.innerHTML = '🩹 Ejercicio con colostomía o ileostomía';
    link.onclick = function(e){ e.preventDefault(); showSection('ejercicio-estoma'); };
    movilidadLink.insertAdjacentElement('afterend', link);
  }

  function addSection(){
    const main = document.getElementById('contentArea');
    if(!main || document.getElementById('section-ejercicio-estoma')) return;
    const movilidad = document.getElementById('section-ejercicio-movilidad-reducida');
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'section-ejercicio-estoma';
    section.innerHTML = `
      <div class="section-header">
        <button class="back-btn" onclick="showSection('home')">← Inicio</button>
        <h2>🩹 Ejercicio con colostomía o ileostomía</h2>
      </div>
      <div class="content-card" style="overflow:hidden;padding:0;">
        <div style="padding:34px;background:linear-gradient(135deg,#eef7f1,#f8fbf8);border-bottom:1px solid #dce9e0;">
          <span class="eyebrow">VUELVE A MOVERTE</span>
          <h3 style="font-size:clamp(1.55rem,3vw,2.25rem);margin:.4rem 0 .8rem;color:#0f5138;">Recuperación activa y ejercicio seguro con estoma</h3>
          <p style="max-width:850px;font-size:1.05rem;line-height:1.7;margin:0;color:#41554a;">Una guía práctica para personas operadas de estómago o intestino que llevan una colostomía o ileostomía. Explica cómo retomar el movimiento de forma gradual, cuidar la pared abdominal y adaptar el ejercicio a cada fase de recuperación.</p>
        </div>
        <div style="padding:30px;display:grid;gap:22px;">
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:14px;">
            <div style="padding:18px;border:1px solid #dce9e0;border-radius:16px;background:#fff;"><strong style="color:#0f5138;">🌱 Recuperación gradual</strong><p style="margin:.45rem 0 0;">Empieza con movimientos sencillos y aumenta tiempo, frecuencia e intensidad poco a poco.</p></div>
            <div style="padding:18px;border:1px solid #dce9e0;border-radius:16px;background:#fff;"><strong style="color:#0f5138;">🫁 Control de la presión</strong><p style="margin:.45rem 0 0;">Aprende a respirar durante el esfuerzo y a evitar empujar o contener el aire.</p></div>
            <div style="padding:18px;border:1px solid #dce9e0;border-radius:16px;background:#fff;"><strong style="color:#0f5138;">💪 Fuerza y cardio</strong><p style="margin:.45rem 0 0;">Incluye propuestas de fuerza, caminata y actividad aeróbica adaptables a tu situación.</p></div>
            <div style="padding:18px;border:1px solid #dce9e0;border-radius:16px;background:#fff;"><strong style="color:#0f5138;">💧 Estoma e hidratación</strong><p style="margin:.45rem 0 0;">Consejos para proteger el dispositivo, planificar el ejercicio y reponer líquidos.</p></div>
          </div>
          <div style="padding:20px 22px;border-radius:16px;background:#fff7e8;border:1px solid #efdfbd;line-height:1.65;"><strong>Antes de empezar:</strong> sigue las indicaciones de tu equipo de cirugía y estomaterapia. Si tienes dolor intenso o creciente, sangrado importante, fiebre, vómitos, mareo, disminución marcada de la salida del estoma o un abultamiento nuevo alrededor del estoma, detén el ejercicio y consulta.</div>
          <div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center;justify-content:center;padding:8px 0 6px;">
            <a href="${PDF_PATH}" class="pdf-btn big" target="_blank" rel="noopener">📘 Ver guía completa en PDF</a>
            <a href="${PDF_PATH}" class="pdf-btn" download>📥 Descargar PDF</a>
          </div>
          <p style="text-align:center;color:#6b7d72;margin:0;">Guía ENDONUTRI 2026 · recuperación activa · fuerza · cardio · cuidado del estoma</p>
        </div>
      </div>`;
    if(movilidad) movilidad.insertAdjacentElement('afterend', section); else main.appendChild(section);
  }

  document.addEventListener('DOMContentLoaded', function(){
    addNavLink();
    addSection();
  });
})();
