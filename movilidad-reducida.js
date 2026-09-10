(function(){
  const PDF_PATH = 'pdfs/movilidad-reducida/ENDONUTRI_Movilidad_Reducida_Fragilidad_Prevencion_Caidas_2026.pdf';

  function addNavLink(){
    const exerciseTitle = Array.from(document.querySelectorAll('.nav-group-title')).find(btn => btn.textContent.includes('Movimiento y Ejercicio'));
    const submenu = exerciseTitle?.nextElementSibling;
    if(!submenu || document.getElementById('navMovilidadReducida')) return;
    const link = document.createElement('a');
    link.id = 'navMovilidadReducida';
    link.href = '#';
    link.innerHTML = '🪑 Movilidad reducida, fragilidad y caídas';
    link.onclick = function(e){ e.preventDefault(); showSection('ejercicio-movilidad-reducida'); };
    const videosLink = Array.from(submenu.querySelectorAll('a')).find(a => a.textContent.includes('Vídeos'));
    submenu.insertBefore(link, videosLink || null);
  }

  function addSection(){
    const main = document.getElementById('contentArea');
    if(!main || document.getElementById('section-ejercicio-movilidad-reducida')) return;
    const videos = document.getElementById('section-ejercicio-videos');
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'section-ejercicio-movilidad-reducida';
    section.innerHTML = `
      <div class="section-header">
        <button class="back-btn" onclick="showSection('home')">← Inicio</button>
        <h2>🪑 Movilidad reducida, fragilidad y prevención de caídas</h2>
      </div>
      <div class="content-card" style="overflow:hidden;padding:0;">
        <div style="padding:34px;background:linear-gradient(135deg,#eef7f1,#f8fbf8);border-bottom:1px solid #dce9e0;">
          <span class="eyebrow">MUÉVETE A TU RITMO</span>
          <h3 style="font-size:clamp(1.55rem,3vw,2.25rem);margin:.4rem 0 .8rem;color:#0f5138;">Fuerza, equilibrio y movilidad para ganar autonomía</h3>
          <p style="max-width:850px;font-size:1.05rem;line-height:1.7;margin:0;color:#41554a;">Un recurso pensado especialmente para personas con movilidad reducida, fragilidad o mayor riesgo de caídas. Incluye ejercicios de fuerza, equilibrio y movilidad que pueden hacerse con una silla estable, bandas elásticas, el propio peso y objetos cotidianos.</p>
        </div>
        <div style="padding:30px;display:grid;gap:22px;">
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:14px;">
            <div style="padding:18px;border:1px solid #dce9e0;border-radius:16px;background:#fff;"><strong style="color:#0f5138;">💪 Fuerza</strong><p style="margin:.45rem 0 0;">2–3 días por semana, con progresión gradual y descansos suficientes.</p></div>
            <div style="padding:18px;border:1px solid #dce9e0;border-radius:16px;background:#fff;"><strong style="color:#0f5138;">⚖️ Equilibrio</strong><p style="margin:.45rem 0 0;">3 o más días por semana cuando existe riesgo de caída, siempre con apoyo cerca.</p></div>
            <div style="padding:18px;border:1px solid #dce9e0;border-radius:16px;background:#fff;"><strong style="color:#0f5138;">🌿 Movilidad</strong><p style="margin:.45rem 0 0;">5–10 minutos la mayoría de los días, dentro de un rango cómodo.</p></div>
            <div style="padding:18px;border:1px solid #dce9e0;border-radius:16px;background:#fff;"><strong style="color:#0f5138;">🏡 Autonomía</strong><p style="margin:.45rem 0 0;">El objetivo es facilitar tareas cotidianas: levantarse, caminar, girar y moverse con más seguridad.</p></div>
          </div>
          <div style="padding:20px 22px;border-radius:16px;background:#fff7e8;border:1px solid #efdfbd;line-height:1.65;"><strong>Antes de empezar:</strong> si has sufrido una caída reciente con lesión, presentas dolor intenso, empeoramiento brusco de la marcha, enfermedad aguda o tu profesional sanitario te ha indicado restricciones específicas, individualiza el programa antes de progresar.</div>
          <div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center;justify-content:center;padding:8px 0 6px;">
            <a href="${PDF_PATH}" class="pdf-btn big" target="_blank" rel="noopener">📘 Ver guía completa en PDF</a>
            <a href="${PDF_PATH}" class="pdf-btn" download>📥 Descargar PDF</a>
          </div>
          <p style="text-align:center;color:#6b7d72;margin:0;">Guía ENDONUTRI 2026 · fuerza · equilibrio · movilidad · prevención de caídas</p>
        </div>
      </div>`;
    if(videos) main.insertBefore(section, videos); else main.appendChild(section);
  }

  document.addEventListener('DOMContentLoaded', function(){
    addNavLink();
    addSection();
  });
})();
