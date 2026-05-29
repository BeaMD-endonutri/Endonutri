/**
 * =============================================
 *  QR.JS — Generador de códigos QR
 * =============================================
 *
 *  Los QR se generan automáticamente a partir
 *  de las URLs configuradas en js/config.js
 *
 *  Para cambiar una URL:
 *  1. Edita js/config.js
 *  2. El QR se regenera al recargar la página
 */

function generarQR(canvasId, url, size) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !url) return;

  try {
    // Usa la librería qrcode.js si está disponible
    if (typeof QRCode !== "undefined") {
      // Limpia el contenedor
      const container = canvas.parentElement;
      container.innerHTML = "";
      new QRCode(container, {
        text: url,
        width: size || 110,
        height: size || 110,
        colorDark: "#2d6a4f",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
      });
    }
  } catch (e) {
    console.warn("QR no disponible:", e);
    // Fallback: muestra URL como texto
    canvas.parentElement.innerHTML = `
      <div style="
        font-size:0.65rem;
        word-break:break-all;
        color:#2d6a4f;
        text-align:center;
        padding:8px;
        border:2px dashed #4a9b6f;
        border-radius:8px;
        max-width:110px;
      ">${url}</div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof CONFIG === "undefined") return;

  // QR de la web principal
  if (CONFIG.URL_WEB) {
    const urlLabel = document.getElementById("qrUrlLabel");
    if (urlLabel) urlLabel.textContent = CONFIG.URL_WEB;
    generarQR("mainQrCanvas", CONFIG.URL_WEB, 110);
  }

  // QR del cuestionario
  if (CONFIG.URL_CUESTIONARIO) {
    generarQR("cuestionarioQrCanvas", CONFIG.URL_CUESTIONARIO, 110);
  }
});
