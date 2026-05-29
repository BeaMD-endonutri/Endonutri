/**
 * =============================================
 *  APP.JS — Lógica principal del portal
 * =============================================
 */

// ---- NAVEGACIÓN ----
function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  const target = document.getElementById("section-" + id);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Resalta enlace activo en sidebar
    document.querySelectorAll(".nav-submenu a").forEach(a => a.classList.remove("active"));
    const activeLink = document.querySelector(`.nav-submenu a[onclick*="${id}"]`);
    if (activeLink) activeLink.classList.add("active");
  }
  closeSidebar();

  // Init formulario si es necesario
  if (id === "cuestionario-form") {
    initForm();
  }
}

// ---- SIDEBAR ----
function openSidebar() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("active");
  document.body.style.overflow = "";
}

// ---- GRUPOS COLAPSABLES ----
function toggleGroup(btn) {
  const submenu = btn.nextElementSibling;
  if (!submenu || !submenu.classList.contains("nav-submenu")) return;
  const isOpen = submenu.classList.contains("open");
  // Cierra todos
  document.querySelectorAll(".nav-submenu.open").forEach(m => m.classList.remove("open"));
  document.querySelectorAll(".nav-group-title").forEach(b => b.classList.remove("collapsed"));
  // Abre el clicado si estaba cerrado
  if (!isOpen) {
    submenu.classList.add("open");
  } else {
    btn.classList.add("collapsed");
  }
}

// ---- FAQ ----
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains("open");
  document.querySelectorAll(".faq-answer.open").forEach(a => a.classList.remove("open"));
  document.querySelectorAll(".faq-question.open").forEach(b => b.classList.remove("open"));
  if (!isOpen) {
    answer.classList.add("open");
    btn.classList.add("open");
  }
  btn.setAttribute("aria-expanded", !isOpen);
}

// ---- LIGHTBOX ----
function openLightbox(src, alt) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  img.src = src;
  img.alt = alt || "";
  lb.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
}

// Cerrar lightbox con ESC
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeLightbox();
    closeSidebar();
  }
});

// ---- INIT ----
document.addEventListener("DOMContentLoaded", () => {
  // Carga contenidos
  if (typeof cargarContenidos === "function") cargarContenidos();

  // Sección inicial
  showSection("home");

  // En desktop, abrir el primer grupo del sidebar
  if (window.innerWidth >= 768) {
    const firstSubmenu = document.querySelector(".nav-submenu");
    if (firstSubmenu) firstSubmenu.classList.add("open");
  }
});
