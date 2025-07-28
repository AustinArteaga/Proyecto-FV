// Tabla tarifaria exacta según especificaciones
const TARIFAS_EXACTAS = [
  { desde: 50, hasta: 99, tarifa: 0.091, costoBase: 0 },
  { desde: 100, hasta: 149, tarifa: 0.093, costoBase: 4.55 },
  { desde: 150, hasta: 199, tarifa: 0.095, costoBase: 9.2 },
  { desde: 200, hasta: 249, tarifa: 0.097, costoBase: 13.95 },
  { desde: 250, hasta: 299, tarifa: 0.099, costoBase: 18.8 },
  { desde: 300, hasta: 349, tarifa: 0.101, costoBase: 23.75 },
  { desde: 350, hasta: 404, tarifa: 0.103, costoBase: 28.8 },
  { desde: 405, hasta: 699, tarifa: 0.105, costoBase: 39.73 },
  { desde: 700, hasta: 999, tarifa: 0.1285, costoBase: 77.63 },
  { desde: 1000, hasta: 1499, tarifa: 0.145, costoBase: 121.13 },
  { desde: 1500, hasta: 1999, tarifa: 0.1709, costoBase: 206.58 },
  { desde: 2000, hasta: 2499, tarifa: 0.2752, costoBase: 344.18 },
  { desde: 2500, hasta: 3500, tarifa: 0.436, costoBase: 562.18 },
  { desde: 3501, hasta: Number.POSITIVE_INFINITY, tarifa: 0.6812, costoBase: 1244.06 },
]

// ⚡ CONFIGURACIÓN DE POWER AUTOMATE - URL CORREGIDA
const POWER_AUTOMATE_URL =
  "https://default7235b983940447368527b8c69d3ffe.77.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/b87208e2a51c40489cbc3acd2fb8358a/triggers/manual/paths/invoke/?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xnRomK-ltbqgaIBOYCWDNE0udC8m6551o6hACuG9CKY"

// 📱 CONFIGURACIÓN DE WHATSAPP
const WHATSAPP_NUMBER = "593980910905"
const WHATSAPP_MESSAGE =
  "¡Hola! Estoy interesado en recibir más información de los sistemas fotovoltaicos. ¿Me pueden ayudar?"

// Variables globales para elementos DOM
let elementos = {}
let datosCalculados = null
let autoSaveTimeout = null
let registroGuardado = false // Para evitar múltiples guardados del mismo usuario
const gtag = window.gtag || (() => {}) // Declaración de gtag // Declaración de gtag

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo) {
  // Implementación de la función mostrarNotificacion
  console.log(`Notificación (${tipo}): ${mensaje}`)
}

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  inicializarElementos()
  configurarEventListeners()
})

function inicializarElementos() {
  elementos = {
    // Formulario
    nombre: document.getElementById("nombre"),
    tipoCliente: document.getElementById("tipoCliente"),
    celular: document.getElementById("celular"),
    email: document.getElementById("email"),
    ciudad: document.getElementById("ciudad"),
    consumoMensual: document.getElementById("consumoMensual"),
    calcularBtn: document.getElementById("calcularBtn"),
    // Alertas
    errorAlert: document.getElementById("error-alert"),
    errorList: document.getElementById("error-list"),
    // Resultados
    resultados: document.getElementById("resultados"),
    clienteInfo: document.getElementById("cliente-info"),
    // Situación Actual
    consumoMensualDisplay: document.getElementById("consumo-mensual-display"),
    costoMensualSinSfv: document.getElementById("costo-mensual-sin-sfv"),
    consumoAnual: document.getElementById("consumo-anual"),
    costoAnualSinSfv: document.getElementById("costo-anual-sin-sfv"),
    // Sistema Fotovoltaico
    tamanoSfv: document.getElementById("tamano-sfv"),
    precioInversion: document.getElementById("precio-inversion"),
    produccionAnual: document.getElementById("produccion-anual"),
    produccionMensual: document.getElementById("produccion-mensual"),
    cantidadPaneles: document.getElementById("cantidad-paneles"),
    areaRequerida: document.getElementById("area-requerida"),
    // Con Sistema Solar
    nuevoConsumoMensual: document.getElementById("nuevo-consumo-mensual"),
    nuevoCostoMensual: document.getElementById("nuevo-costo-mensual"),
    ahorroMensual: document.getElementById("ahorro-mensual"),
    ahorroAnual: document.getElementById("ahorro-anual"),
    ahorroporcentaje: document.getElementById("ahorro-porcentaje"),
    // Tiempo de Retorno
    tiempoRetorno: document.getElementById("tiempo-retorno"),
    retornoDescription: document.getElementById("retorno-description"),
    metricPorcentaje: document.getElementById("metric-porcentaje"),
    metricAhorro: document.getElementById("metric-ahorro"),
    metricArea: document.getElementById("metric-area"),
    // Botones de acción
    generarPdfBtn: document.getElementById("generarPdfBtn"),
    whatsappBtn: document.getElementById("whatsappBtn"),
    // Modal de ayuda
    verConsumoLink: document.getElementById("verConsumoLink"),
    consumoModal: document.getElementById("consumoModal"),
    closeModal: document.getElementById("closeModal"),
    planillaImage: document.getElementById("planillaImage"),
  }
}

function configurarEventListeners() {
  elementos.calcularBtn.addEventListener("click", calcularAhorro)
  elementos.generarPdfBtn.addEventListener("click", generarPDF)
  elementos.whatsappBtn.addEventListener("click", abrirWhatsApp)

  // 🚀 AUTO-GUARDADO INMEDIATO AL ESCRIBIR EL NOMBRE (SIN CALCULAR)
  elementos.nombre.addEventListener("input", (e) => {
    const nombre = e.target.value.trim()

    // Limpiar timeout anterior
    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout)
    }

    // Si hay nombre válido y no se ha guardado aún
    if (nombre.length >= 3 && !registroGuardado) {
      autoSaveTimeout = setTimeout(() => {
        guardarRegistroInmediato(nombre)
      }, 2000) // Esperar 2 segundos después de que deje de escribir
    } else if (nombre.length < 3) {
      registroGuardado = false // Resetear si borra el nombre
    }
  })

  // Modal de ayuda para consumo
  elementos.verConsumoLink.addEventListener("click", (e) => {
    e.preventDefault()
    mostrarModalConsumo()
  })

  elementos.closeModal.addEventListener("click", cerrarModalConsumo)

  // Cerrar modal al hacer clic fuera
  elementos.consumoModal.addEventListener("click", (e) => {
    if (e.target === elementos.consumoModal) {
      cerrarModalConsumo()
    }
  })

  // Cerrar modal con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && elementos.consumoModal.style.display === "block") {
      cerrarModalConsumo()
    }
  })

  // Ampliar imagen al hacer clic
  elementos.planillaImage.addEventListener("click", () => {
    window.open("/images/FOTO_DE_PLANILLA.png", "_blank")
  })

  // Enter key en campos de input
  elementos.nombre.addEventListener("keypress", (e) => {
    if (e.key === "Enter") calcularAhorro()
  })
  elementos.consumoMensual.addEventListener("keypress", (e) => {
    if (e.key === "Enter") calcularAhorro()
  })
  elementos.celular.addEventListener("keypress", (e) => {
    if (e.key === "Enter") calcularAhorro()
  })
  elementos.email.addEventListener("keypress", (e) => {
    if (e.key === "Enter") calcularAhorro()
  })
  elementos.ciudad.addEventListener("keypress", (e) => {
    if (e.key === "Enter") calcularAhorro()
  })
}

// 💾 FUNCIÓN PARA GUARDAR REGISTRO INMEDIATO (SOLO CON NOMBRE) - CORREGIDA PARA TIPOS NUMÉRICOS
async function guardarRegistroInmediato(nombre) {
  if (registroGuardado) return // Evitar duplicados

  try {
    // JSON que coincide EXACTAMENTE con el esquema de Power Automate - TIPOS CORREGIDOS SEGÚN ESQUEMA
    const registroInmediato = {
      fechaCalculo: new Date().toISOString(), // string
      nombre: nombre, // string
      tipoCliente: elementos.tipoCliente.value || "No especificado", // string
      celular: elementos.celular.value.trim() || "593000000000", // STRING, no número
      email: elementos.email.value.trim() || "no-email@ejemplo.com", // string
      ciudad: elementos.ciudad.value.trim() || "No especificado", // string
      consumoMensual: Number.parseInt(elementos.consumoMensual.value) || 0, // integer
      consumoAnual: 0, // integer
      costoMensualActual: 0.0, // number
      costoAnualActual: 0, // integer
      tamanoSistema: 0.0, // number
      precioInversion: 0, // integer
      produccionAnual: 0, // integer
      produccionMensual: 0, // integer
      cantidadPaneles: 0, // integer
      areaRequerida: 0.0, // number
      nuevoConsumoMensual: 0, // integer
      nuevoCostoMensual: 0.0, // number
      ahorroMensual: 0.0, // number
      ahorroAnual: 0.0, // number
      ahorroAnualPorcentaje: 0.0, // number
      tiempoRetorno: 0.0, // number
    }

    console.log("🔄 Guardando registro automáticamente:", registroInmediato)

    const response = await fetch(POWER_AUTOMATE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(registroInmediato),
    })

    console.log("📡 Respuesta del servidor:", response.status, response.statusText)

    if (response.ok) {
      // Marcar como guardado para evitar duplicados
      registroGuardado = true
      console.log("✅ LEAD CAPTURADO - Registro automático guardado:", nombre)

      // Opcional: Enviar evento de tracking
      gtag("event", "lead_captured", {
        event_category: "Solar Calculator",
        event_label: "Auto Save Name",
        value: 1,
      })
    } else {
      const errorText = await response.text()
      console.error("❌ Error del servidor:", response.status, response.statusText, errorText)
      throw new Error(`Error ${response.status}: ${response.statusText} - ${errorText}`)
    }
  } catch (error) {
    console.error("❌ Error detallado al guardar registro automático:", error)

    // Reintentar una vez después de 3 segundos
    setTimeout(() => {
      console.log("🔄 Reintentando guardado automático...")
      registroGuardado = false
      guardarRegistroInmediato(nombre)
    }, 3000)
  }
}

// 📱 FUNCIÓN PARA ABRIR WHATSAPP
function abrirWhatsApp() {
  const mensajeCodificado = encodeURIComponent(WHATSAPP_MESSAGE)
  const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`

  // Abrir en nueva ventana
  window.open(urlWhatsApp, "_blank")

  mostrarNotificacion("📱 Redirigiendo a WhatsApp...", "info")
}

function validarCelular(celular) {
  // Debe tener exactamente 12 dígitos y empezar con 593
  const regex = /^593\d{9}$/
  return regex.test(celular)
}

function validarEmail(email) {
  // Validación básica de email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

// 📄 FUNCIÓN PARA GENERAR PDF CON LOGO Y MARCA DE AGUA
function generarPDF() {
  if (!datosCalculados) {
    mostrarNotificacion("❌ No hay datos para generar el PDF", "error")
    return
  }

  try {
    mostrarNotificacion("📄 Generando informe PDF...", "info")

    const { jsPDF } = window.jspdf
    const doc = new jsPDF()

    // 🎨 AGREGAR MARCA DE AGUA MARRIOTT SOLUTIONS
    function agregarMarcaDeAgua() {
      doc.saveGraphicsState()

      // Configurar marca de agua
      doc.setTextColor(245, 245, 245) // Gris muy claro
      doc.setFontSize(70)
      doc.setFont("helvetica", "bold")

      // Centrar la marca de agua
      const pageWidth = doc.internal.pageSize.width
      const pageHeight = doc.internal.pageSize.height
      const centerX = pageWidth / 2
      const centerY = pageHeight / 2

      // Rotar 45 grados
      const angle = -45 * (Math.PI / 180)

      // Texto principal
      doc.text("MARRIOTT", centerX, centerY - 10, {
        angle: angle,
        align: "center",
      })

      doc.setFontSize(50)
      doc.text("SOLUTIONS", centerX, centerY + 10, {
        angle: angle,
        align: "center",
      })

      doc.restoreGraphicsState()
    }

    // Aplicar marca de agua
    agregarMarcaDeAgua()

    // Configuración de colores
    const primaryColor = [255, 158, 26] // Naranja
    const textColor = [55, 65, 81] // Gris oscuro
    const accentColor = [16, 185, 129] // Verde

    // HEADER DEL PDF CON LOGO
    doc.setFillColor(...primaryColor)
    doc.rect(0, 0, 210, 50, "F")

    // Cargar y agregar logo
    const logoImg = new Image()
    logoImg.crossOrigin = "anonymous"
    logoImg.onload = () => {
      // Agregar logo en la esquina superior izquierda del header
      doc.addImage(logoImg, "PNG", 15, 10, 60, 30)

      // Título del documento
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(20)
      doc.setFont("helvetica", "bold")
      doc.text("INFORME DE ANÁLISIS SOLAR", 85, 25)

      doc.setFontSize(12)
      doc.setFont("helvetica", "normal")
      doc.text("Sistema de Ahorro Fotovoltaico", 85, 32)

      // Fecha
      const fecha = new Date().toLocaleDateString("es-EC", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      doc.text(`Fecha: ${fecha}`, 85, 39)

      // Continuar con el resto del PDF
      continuarGeneracionPDF()
    }

    logoImg.onerror = () => {
      // Si no se puede cargar el logo, continuar sin él
      console.warn("No se pudo cargar el logo, continuando sin él")

      // Header sin logo
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(24)
      doc.setFont("helvetica", "bold")
      doc.text("MARRIOTT SOLUTIONS", 20, 25)

      doc.setFontSize(12)
      doc.setFont("helvetica", "normal")
      doc.text("Sistema de Ahorro Fotovoltaico", 20, 32)

      // Fecha
      const fecha = new Date().toLocaleDateString("es-EC", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      doc.text(`Fecha: ${fecha}`, 140, 32)

      continuarGeneracionPDF()
    }

    // Intentar cargar el logo
    logoImg.src = "https://images.grupomarriott.com/wp-content/uploads/2022/10/31083332/LOGO_SOLAR-1.png"

    function continuarGeneracionPDF() {
      // INFORMACIÓN DEL CLIENTE
      let yPos = 65
      doc.setTextColor(...textColor)
      doc.setFontSize(16)
      doc.setFont("helvetica", "bold")
      doc.text("INFORMACIÓN DEL CLIENTE", 20, yPos)

      yPos += 10
      doc.setFontSize(11)
      doc.setFont("helvetica", "normal")
      doc.text(`Nombre: ${datosCalculados.nombre}`, 20, yPos)
      doc.text(`Tipo: ${datosCalculados.tipoCliente}`, 110, yPos)

      yPos += 7
      doc.text(`Celular: ${datosCalculados.celular}`, 20, yPos)
      doc.text(`Ciudad: ${datosCalculados.ciudad}`, 110, yPos)

      yPos += 7
      doc.text(`Email: ${datosCalculados.email}`, 20, yPos)

      // SITUACIÓN ACTUAL
      yPos += 20
      doc.setFontSize(16)
      doc.setFont("helvetica", "bold")
      doc.text("SITUACIÓN ENERGÉTICA ACTUAL", 20, yPos)

      yPos += 10
      doc.setFontSize(11)
      doc.setFont("helvetica", "normal")
      doc.text(`Consumo mensual: ${formatearNumero(datosCalculados.consumo, 0)} kWh`, 20, yPos)
      doc.text(`Consumo anual: ${formatearNumero(datosCalculados.consumoAnualSinSFV, 0)} kWh`, 110, yPos)

      yPos += 7
      doc.text(`Costo mensual: ${formatearMoneda(datosCalculados.costoMensualSinSFV)}`, 20, yPos)
      doc.text(`Costo anual: ${formatearMoneda(datosCalculados.costoAnualSinSFV)}`, 110, yPos)

      // SISTEMA FOTOVOLTAICO PROPUESTO
      yPos += 20
      doc.setFontSize(16)
      doc.setFont("helvetica", "bold")
      doc.text("SISTEMA FOTOVOLTAICO PROPUESTO", 20, yPos)

      yPos += 10
      doc.setFontSize(11)
      doc.setFont("helvetica", "normal")
      doc.text(`Tamaño del sistema: ${formatearNumero(datosCalculados.tamanoSFV)} kWp`, 20, yPos)
      doc.text(`Cantidad de paneles: ${datosCalculados.cantidadPaneles} unidades`, 110, yPos)

      yPos += 7
      doc.text(`Área requerida: ${formatearNumero(datosCalculados.areaRequerida)} m²`, 20, yPos)
      doc.text(`Producción anual: ${formatearNumero(datosCalculados.produccionAnualSFV, 0)} kWh`, 110, yPos)

      yPos += 7
      doc.text(`Producción mensual: ${formatearNumero(datosCalculados.produccionMensualSFV, 0)} kWh`, 20, yPos)

      // INVERSIÓN Y AHORROS
      yPos += 20
      doc.setFontSize(16)
      doc.setFont("helvetica", "bold")
      doc.text("INVERSIÓN Y AHORROS", 20, yPos)

      yPos += 10
      doc.setFontSize(14)
      doc.setTextColor(...primaryColor)
      doc.text(`Inversión estimada: ${formatearMoneda(datosCalculados.precioInversion)}`, 20, yPos)

      yPos += 10
      doc.setFontSize(11)
      doc.setTextColor(...accentColor)
      doc.text(`Ahorro mensual: ${formatearMoneda(datosCalculados.ahorroMensual)}`, 20, yPos)
      doc.text(`Ahorro anual: ${formatearMoneda(datosCalculados.ahorroAnual)}`, 110, yPos)

      yPos += 7
      doc.text(`Porcentaje de ahorro: ${formatearNumero(datosCalculados.ahorroAnualPorcentaje, 1)}%`, 20, yPos)

      // TIEMPO DE RETORNO - DESTACADO
      yPos += 20
      doc.setFillColor(255, 247, 237)
      doc.rect(15, yPos - 5, 180, 25, "F")

      doc.setTextColor(...primaryColor)
      doc.setFontSize(18)
      doc.setFont("helvetica", "bold")
      doc.text(" TIEMPO DE RETORNO", 20, yPos + 5)

      doc.setFontSize(24)
      doc.text(`${formatearNumero(datosCalculados.tiempoRetorno, 1)} AÑOS`, 20, yPos + 15)

      // NUEVA SITUACIÓN CON SISTEMA SOLAR
      yPos += 35
      doc.setTextColor(...textColor)
      doc.setFontSize(16)
      doc.setFont("helvetica", "bold")
      doc.text("NUEVA SITUACIÓN CON SISTEMA SOLAR", 20, yPos)

      yPos += 10
      doc.setFontSize(11)
      doc.setFont("helvetica", "normal")
      doc.text(`Nuevo consumo mensual: ${formatearNumero(datosCalculados.nuevoConsumoMensual, 0)} kWh`, 20, yPos)
      doc.text(`Nuevo costo mensual: ${formatearMoneda(datosCalculados.nuevoCostoMensualSFV)}`, 110, yPos)

      // FOOTER CON MARRIOTT SOLUTIONS
      yPos = 280
      doc.setFillColor(...primaryColor)
      doc.rect(0, yPos, 210, 17, "F")

      doc.setTextColor(255, 255, 255)
      doc.setFontSize(10)
      doc.text("MARRIOTT SOLUTIONS - Para más información: +593 98 091 0905", 20, yPos + 10)
      doc.text("¡Invierte en energía solar y ahorra desde el primer día!", 110, yPos + 10)

      // GUARDAR PDF
      const nombreArchivo = `Informe_Solar_${datosCalculados.nombre.replace(/\s+/g, "_")}_${new Date().toISOString().split("T")[0]}.pdf`
      doc.save(nombreArchivo)

      mostrarNotificacion("✅ PDF generado exitosamente", "success")
    }
  } catch (error) {
    console.error("Error generando PDF:", error)
    mostrarNotificacion("❌ Error al generar el PDF", "error")
  }
}

async function calcularAhorro() {
  if (!validarFormulario()) return

  const nombre = elementos.nombre.value.trim()
  const tipoCliente = elementos.tipoCliente.value
  const celular = elementos.celular.value.trim()
  const email = elementos.email.value.trim()
  const ciudad = elementos.ciudad.value.trim()
  const consumo = Number.parseFloat(elementos.consumoMensual.value)

  // Cálculos
  const costoMensualSinSFV = calcularCostoProgresivo(consumo)
  const consumoAnualSinSFV = consumo * 12
  const costoAnualSinSFV = costoMensualSinSFV * 12
  const tamanoSFV = (consumoAnualSinSFV / 18000) * 13.75
  const precioInversion = tamanoSFV * 1000 * 1.1
  const produccionAnualSFV = tamanoSFV * 1080
  const produccionMensualSFV = produccionAnualSFV / 12
  const nuevoConsumoMensual = Math.max(0, consumo - produccionMensualSFV)
  const nuevoCostoMensualSFV = calcularCostoProgresivo(nuevoConsumoMensual)
  const nuevoCostoAnualSFV = nuevoCostoMensualSFV * 12
  const ahorroAnual = costoAnualSinSFV - nuevoCostoAnualSFV
  const ahorroMensual = costoMensualSinSFV - nuevoCostoMensualSFV
  const ahorroAnualPorcentaje = costoAnualSinSFV > 0 ? (ahorroAnual / costoAnualSinSFV) * 100 : 0
  const tiempoRetorno = ahorroAnual > 0 ? precioInversion / ahorroAnual : 0
  const cantidadPaneles = Math.ceil((tamanoSFV * 1000) / 480)
  const areaRequerida = cantidadPaneles * 2.2

  // Guardar datos calculados globalmente
  datosCalculados = {
    nombre,
    tipoCliente,
    celular,
    email,
    ciudad,
    consumo,
    costoMensualSinSFV,
    tamanoSFV,
    precioInversion,
    consumoAnualSinSFV,
    costoAnualSinSFV,
    produccionAnualSFV,
    produccionMensualSFV,
    nuevoConsumoMensual,
    nuevoCostoMensualSFV,
    ahorroMensual,
    ahorroAnual,
    ahorroAnualPorcentaje,
    tiempoRetorno,
    cantidadPaneles,
    areaRequerida,
  }

  // Enviar datos a Power Automate
  await enviarDatosAPowerAutomate(datosCalculados)

  // Mostrar resultados
  mostrarResultados(datosCalculados)
}

function mostrarResultados(datos) {
  // Header de resultados con información del cliente
  elementos.clienteInfo.innerHTML = `
    <div style="margin-bottom: 0.5rem;">
      <strong>${datos.nombre}</strong> - Cliente ${datos.tipoCliente}
    </div>
    <div class="cliente-info-grid">
      <div class="cliente-info-item">
        <div class="cliente-info-label">Celular</div>
        <div class="cliente-info-value">${datos.celular}</div>
      </div>
      <div class="cliente-info-item">
        <div class="cliente-info-label">Email</div>
        <div class="cliente-info-value">${datos.email}</div>
      </div>
      <div class="cliente-info-item">
        <div class="cliente-info-label">Ciudad</div>
        <div class="cliente-info-value">${datos.ciudad}</div>
      </div>
    </div>
  `

  // Situación Actual
  elementos.consumoMensualDisplay.textContent = `${formatearNumero(datos.consumo, 0)} kWh`
  elementos.costoMensualSinSfv.textContent = formatearMoneda(datos.costoMensualSinSFV)
  elementos.consumoAnual.textContent = `${formatearNumero(datos.consumoAnualSinSFV, 0)} kWh`
  elementos.costoAnualSinSfv.textContent = formatearMoneda(datos.costoAnualSinSFV)

  // Sistema Fotovoltaico
  elementos.tamanoSfv.textContent = `${formatearNumero(datos.tamanoSFV)} kWp`
  elementos.precioInversion.textContent = formatearMoneda(datos.precioInversion)
  elementos.produccionAnual.textContent = `${formatearNumero(datos.produccionAnualSFV, 0)} kWh`
  elementos.produccionMensual.textContent = `${formatearNumero(datos.produccionMensualSFV, 0)} kWh`
  elementos.cantidadPaneles.textContent = `${datos.cantidadPaneles} unidades`
  elementos.areaRequerida.textContent = `${formatearNumero(datos.areaRequerida)} m²`

  // Con Sistema Solar
  elementos.nuevoConsumoMensual.textContent = `${formatearNumero(datos.nuevoConsumoMensual, 0)} kWh`
  elementos.nuevoCostoMensual.textContent = formatearMoneda(datos.nuevoCostoMensualSFV)
  elementos.ahorroMensual.textContent = formatearMoneda(datos.ahorroMensual)
  elementos.ahorroAnual.textContent = formatearMoneda(datos.ahorroAnual)
  elementos.ahorroporcentaje.textContent = `${formatearNumero(datos.ahorroAnualPorcentaje, 1)}%`

  // Tiempo de Retorno
  if (datos.tiempoRetorno > 0) {
    elementos.tiempoRetorno.textContent = `${formatearNumero(datos.tiempoRetorno, 1)} años`
    elementos.retornoDescription.innerHTML = `Tu inversión se recuperará en aproximadamente <strong>${datos.tiempoRetorno.toFixed(1)} años</strong>`
  } else {
    elementos.tiempoRetorno.textContent = "NA"
    elementos.retornoDescription.innerHTML = `<strong>No aplica</strong> - El sistema no genera suficiente ahorro`
  }

  // Métricas
  elementos.metricPorcentaje.textContent = `${formatearNumero(datos.ahorroAnualPorcentaje, 1)}%`
  elementos.metricAhorro.textContent = formatearMoneda(datos.ahorroAnual)
  elementos.metricArea.textContent = `${formatearNumero(datos.areaRequerida)} m²`

  // Mostrar sección de resultados
  elementos.resultados.style.display = "block"

  // Scroll suave a los resultados
  elementos.resultados.scrollIntoView({ behavior: "smooth", block: "start" })
}

function formatearMoneda(valor) {
  return new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(valor)
}

function formatearNumero(valor, decimales = 2) {
  return new Intl.NumberFormat("es-EC", {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  }).format(valor)
}

// 📤 FUNCIÓN PARA ENVIAR DATOS A POWER AUTOMATE (CÁLCULO COMPLETO) - TIPOS CORREGIDOS
async function enviarDatosAPowerAutomate(datos) {
  try {
    // JSON que coincide EXACTAMENTE con el esquema de Power Automate - TIPOS CORREGIDOS
    const payload = {
      fechaCalculo: new Date().toISOString(), // string
      nombre: datos.nombre, // string
      tipoCliente: datos.tipoCliente, // string
      celular: datos.celular.toString(), // STRING, no número
      email: datos.email, // string
      ciudad: datos.ciudad, // string
      consumoMensual: Number.parseInt(datos.consumo), // integer
      consumoAnual: Number.parseInt(datos.consumoAnualSinSFV), // integer
      costoMensualActual: Number.parseFloat(datos.costoMensualSinSFV), // number
      costoAnualActual: Number.parseInt(datos.costoAnualSinSFV), // integer
      tamanoSistema: Number.parseFloat(datos.tamanoSFV), // number
      precioInversion: Number.parseInt(datos.precioInversion), // integer
      produccionAnual: Number.parseInt(datos.produccionAnualSFV), // integer
      produccionMensual: Number.parseInt(datos.produccionMensualSFV), // integer
      cantidadPaneles: Number.parseInt(datos.cantidadPaneles), // integer
      areaRequerida: Number.parseFloat(datos.areaRequerida), // number
      nuevoConsumoMensual: Number.parseInt(datos.nuevoConsumoMensual), // integer
      nuevoCostoMensual: Number.parseFloat(datos.nuevoCostoMensualSFV), // number
      ahorroMensual: Number.parseFloat(datos.ahorroMensual), // number
      ahorroAnual: Number.parseFloat(datos.ahorroAnual), // number
      ahorroAnualPorcentaje: Number.parseFloat(datos.ahorroAnualPorcentaje), // number
      tiempoRetorno: Number.parseFloat(datos.tiempoRetorno), // number
    }

    console.log("🔄 Enviando cálculo completo con tipos corregidos:", payload)

    const response = await fetch(POWER_AUTOMATE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })

    console.log("📡 Respuesta cálculo completo:", response.status, response.statusText)

    if (response.ok) {
      console.log("✅ Cotización completa guardada exitosamente")
    } else {
      const errorText = await response.text()
      console.error("❌ Error al guardar cálculo completo:", response.status, errorText)
      console.log("⚠️ Error al guardar cotización completa")
    }
  } catch (error) {
    console.error("❌ Error general al enviar cálculo completo:", error)
    console.log("❌ Error de conexión al guardar cotización")
  }
}

// 🖼️ FUNCIONES DEL MODAL DE AYUDA
function mostrarModalConsumo() {
  elementos.consumoModal.style.display = "block"
  document.body.style.overflow = "hidden" // Prevenir scroll del body
}

function cerrarModalConsumo() {
  elementos.consumoModal.style.display = "none"
  document.body.style.overflow = "auto" // Restaurar scroll del body
}

function calcularCostoProgresivo(consumo) {
  if (consumo <= 0) return 0
  if (consumo < 50) return 0

  for (let i = 0; i < TARIFAS_EXACTAS.length; i++) {
    const tramo = TARIFAS_EXACTAS[i]
    if (consumo >= tramo.desde && consumo <= tramo.hasta) {
      let costoTotal = 0
      let rangoAnterior = 0

      if (tramo.desde === 50) {
        costoTotal = consumo * tramo.tarifa
      } else if (tramo.desde === 100) {
        rangoAnterior = 50
        const consumoEnRango = consumo - rangoAnterior
        costoTotal = consumoEnRango * tramo.tarifa + tramo.costoBase
      } else if (tramo.desde === 150) {
        rangoAnterior = 100
        const consumoEnRango = consumo - rangoAnterior
        costoTotal = consumoEnRango * tramo.tarifa + tramo.costoBase
      } else if (tramo.desde === 200) {
        rangoAnterior = 150
        const consumoEnRango = consumo - rangoAnterior
        costoTotal = consumoEnRango * tramo.tarifa + tramo.costoBase
      } else if (tramo.desde === 250) {
        rangoAnterior = 200
        const consumoEnRango = consumo - rangoAnterior
        costoTotal = consumoEnRango * tramo.tarifa + tramo.costoBase
      } else if (tramo.desde === 300) {
        rangoAnterior = 250
        const consumoEnRango = consumo - rangoAnterior
        costoTotal = consumoEnRango * tramo.tarifa + tramo.costoBase
      } else if (tramo.desde === 350) {
        rangoAnterior = 300
        const consumoEnRango = consumo - rangoAnterior
        costoTotal = consumoEnRango * tramo.tarifa + tramo.costoBase
      } else if (tramo.desde === 405) {
        rangoAnterior = 350
        const consumoEnRango = consumo - rangoAnterior
        costoTotal = consumoEnRango * tramo.tarifa + tramo.costoBase
      } else {
        const consumoEnRango = consumo - tramo.desde
        costoTotal = tramo.costoBase + consumoEnRango * tramo.tarifa
      }

      return costoTotal
    }
  }

  return 0
}

function validarFormulario() {
  const errores = []

  if (!elementos.nombre.value.trim()) {
    errores.push("El nombre del cliente es obligatorio")
  }

  if (!elementos.tipoCliente.value) {
    errores.push("Debe seleccionar el tipo de cliente")
  }

  const celular = elementos.celular.value.trim()
  if (!celular) {
    errores.push("El número celular es obligatorio")
  } else if (!validarCelular(celular)) {
    errores.push("El número celular debe tener 12 dígitos y empezar con 593 (ej: 593987654321)")
  }

  const email = elementos.email.value.trim()
  if (!email) {
    errores.push("El correo electrónico es obligatorio")
  } else if (!validarEmail(email)) {
    errores.push("El correo electrónico no tiene un formato válido")
  }

  if (!elementos.ciudad.value.trim()) {
    errores.push("La ciudad es obligatoria")
  }

  const consumo = Number.parseFloat(elementos.consumoMensual.value)
  if (!elementos.consumoMensual.value || isNaN(consumo) || consumo <= 0) {
    errores.push("El consumo mensual debe ser mayor a 0")
  }

  if (errores.length > 0) {
    mostrarErrores(errores)
    return false
  } else {
    ocultarErrores()
    return true
  }
}

function mostrarErrores(errores) {
  elementos.errorList.innerHTML = ""
  errores.forEach((error) => {
    const li = document.createElement("li")
    li.textContent = error
    elementos.errorList.appendChild(li)
  })
  elementos.errorAlert.style.display = "block"
  elementos.errorAlert.scrollIntoView({ behavior: "smooth", block: "center" })
}

function ocultarErrores() {
  elementos.errorAlert.style.display = "none"
}

// ========== MOBILE MENU FUNCTIONALITY ==========
document.addEventListener("DOMContentLoaded", () => {
  // ... código existente ...

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")

      // Change icon
      const icon = mobileMenuBtn.querySelector("i")
      if (mobileMenu.classList.contains("active")) {
        icon.className = "fas fa-times"
      } else {
        icon.className = "fas fa-bars"
      }
    })

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll("a")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.className = "fas fa-bars"
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.className = "fas fa-bars"
      }
    })
  }
})
