/**
 * =============================================
 *  ARCHIVO DE CONFIGURACIÓN
 *  Edita este archivo para personalizar el portal
 * =============================================
 *
 *  ⚠️  INSTRUCCIONES:
 *  - Cambia solo los valores entre comillas ("")
 *  - No borres las comas ni los signos de puntuación
 *  - Guarda el archivo tras cada cambio
 */

const CONFIG = {

  // ------------------------------------------
  // URL DE LA WEB COMPLETA (para QR principal)
  // Cambia esto cuando tengas el hosting definitivo
  // ------------------------------------------
  URL_WEB: "https://beamd-endonutri.github.io/Endonutri/#",

  // ------------------------------------------
  // URL DEL CUESTIONARIO ONLINE
  // Puedes usar Google Forms, Typeform, etc.
  // Cuando tengas la URL definitiva, cámbiala aquí
  // El QR se regenera automáticamente
  // ------------------------------------------
  URL_CUESTIONARIO: "",

  // ------------------------------------------
  // CORREO RECEPTOR DEL CUESTIONARIO
  // Las respuestas del formulario se envían aquí
  // (Si usas Google Forms, configúralo en Google)
  // ------------------------------------------
  EMAIL_DESTINO: "",

  // ------------------------------------------
  // DATOS DE CONTACTO
  // ------------------------------------------
  CONTACTO: {
    telefono:       "",
    telefono_ext:   "",
    email:          "",
    horario:        "",
    direccion:      "",
    whatsapp:       "",   // Deja vacío si no quieres mostrar WhatsApp
    google_maps_url: ""
  }

};
