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

// 🏷️ CATÁLOGO DE SISTEMAS MARRIOTT - BASADO EN LA TABLA PROPORCIONADA
const SISTEMAS_MARRIOTT = [
  // POWER STATIONS (0-200 kWh)
  {
    rangoMin: 0,
    rangoMax: 100,
    nombre: "Power Station 1000W",
    tipo: "OFF_GRID",
    potencia: 1.0,
    precio: 770.75,
    precioConIVA: 886.36,
    produccionMensual: 80, // Estimado para respaldo
    cantidadPaneles: 2,
    areaRequerida: 4.4,
    autonomiaHoras: 8,
    descripcion: "Sistema portátil de respaldo para equipos básicos",
  },
  {
    rangoMin: 101,
    rangoMax: 200,
    nombre: "Power Station 2400W",
    tipo: "OFF_GRID",
    potencia: 2.4,
    precio: 1250.0,
    precioConIVA: 1437.5,
    produccionMensual: 180,
    cantidadPaneles: 4,
    areaRequerida: 8.8,
    autonomiaHoras: 12,
    descripcion: "Sistema de respaldo para equipos esenciales del hogar",
  },

  // SISTEMAS OFF GRID (201-900 kWh)
  {
    rangoMin: 201,
    rangoMax: 600,
    nombre: "BLUESUN 3KW OFF GRID",
    tipo: "OFF_GRID",
    potencia: 3.0,
    precio: 1899.0,
    precioConIVA: null, // NO APLICA según tabla
    produccionMensual: 300,
    cantidadPaneles: 6,
    areaRequerida: 13.2,
    autonomiaHoras: 16,
    descripcion: "Sistema completo de respaldo para hogares medianos",
  },
  {
    rangoMin: 601,
    rangoMax: 900,
    nombre: "BLUESUN 5KW OFF GRID",
    tipo: "OFF_GRID",
    potencia: 5.0,
    precio: 3299.0,
    precioConIVA: null,
    produccionMensual: 450,
    cantidadPaneles: 10,
    areaRequerida: 22.0,
    autonomiaHoras: 20,
    descripcion: "Sistema robusto de respaldo para hogares grandes",
  },

  // SISTEMAS ON GRID (901-3500 kWh)
  {
    rangoMin: 901,
    rangoMax: 1000,
    nombre: "ON GRID 3KW + 6 PANELES",
    tipo: "ON_GRID",
    potencia: 3.0,
    precio: 1860.0,
    precioConIVA: 2081.6,
    produccionMensual: 360,
    cantidadPaneles: 6,
    areaRequerida: 13.2,
    autonomiaHoras: 0, // ON GRID no tiene respaldo
    descripcion: "Sistema conectado a la red para ahorro en factura eléctrica",
  },
  {
    rangoMin: 1001,
    rangoMax: 1200,
    nombre: "ON GRID 5KW + 10 PANELES",
    tipo: "ON_GRID",
    potencia: 5.0,
    precio: 2970.0,
    precioConIVA: 3325.6,
    produccionMensual: 600,
    cantidadPaneles: 10,
    areaRequerida: 22.0,
    autonomiaHoras: 0,
    descripcion: "Sistema de ahorro para consumos medios-altos",
  },
  {
    rangoMin: 2501,
    rangoMax: 3000,
    nombre: "ON GRID 10KW + 24 PANELES",
    tipo: "ON_GRID",
    potencia: 10.0,
    precio: 6010.0,
    precioConIVA: 6731.2,
    produccionMensual: 1200,
    cantidadPaneles: 24,
    areaRequerida: 52.8,
    autonomiaHoras: 0,
    descripcion: "Sistema de alto rendimiento para grandes consumos",
  },
  {
    rangoMin: 3001,
    rangoMax: 4000,
    nombre: "2 X (ON GRID 10KW + 24 PANELES)",
    tipo: "ON_GRID",
    potencia: 20.0,
    precio: 8060.0,
    precioConIVA: 9027.2,
    produccionMensual: 2400,
    cantidadPaneles: 48,
    areaRequerida: 105.6,
    autonomiaHoras: 0,
    descripcion: "Sistema doble para consumos industriales o comerciales grandes",
  },

  // SISTEMAS HÍBRIDOS (1201-2500 kWh)
  {
    rangoMin: 1201,
    rangoMax: 1500,
    nombre: "SOSEN 10KW + 10 PANELES HÍBRIDO",
    tipo: "HIBRIDO",
    potencia: 10.0,
    precio: 7049.0,
    precioConIVA: null,
    produccionMensual: 900,
    cantidadPaneles: 10,
    areaRequerida: 22.0,
    autonomiaHoras: 12,
    descripcion: "Sistema híbrido con ahorro y respaldo incluido",
  },
  {
    rangoMin: 1501,
    rangoMax: 1800,
    nombre: "SOSEN FOX 11KW + 15 PANELES HÍBRIDO",
    tipo: "HIBRIDO",
    potencia: 11.0,
    precio: 7974.0,
    precioConIVA: null,
    produccionMensual: 1100,
    cantidadPaneles: 15,
    areaRequerida: 33.0,
    autonomiaHoras: 14,
    descripcion: "Sistema híbrido avanzado para máximo aprovechamiento",
  },
  {
    rangoMin: 1801,
    rangoMax: 2500,
    nombre: "SOSEN 15KW + 20 PANELES HÍBRIDO",
    tipo: "HIBRIDO",
    potencia: 15.0,
    precio: 11499.0,
    precioConIVA: null,
    produccionMensual: 1500,
    cantidadPaneles: 20,
    areaRequerida: 44.0,
    autonomiaHoras: 16,
    descripcion: "Sistema híbrido de alta capacidad",
  },
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
let registroGuardado = false
const gtag = window.gtag || (() => {})

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo) {
  console.log(`Notificación (${tipo}): ${mensaje}`)
}

// 🔍 FUNCIÓN PARA ENCONTRAR SISTEMA RECOMENDADO
function encontrarSistemaRecomendado(consumo) {
  for (const sistema of SISTEMAS_MARRIOTT) {
    if (consumo >= sistema.rangoMin && consumo <= sistema.rangoMax) {
      return sistema
    }
  }
  // Si no encuentra sistema, devolver el más grande
  return SISTEMAS_MARRIOTT[SISTEMAS_MARRIOTT.length - 1]
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
    // Contenedores específicos por tipo
    contenedorAhorro: document.getElementById("contenedor-ahorro"),
    contenedorRespaldo: document.getElementById("contenedor-respaldo"),
    contenedorHibrido: document.getElementById("contenedor-hibrido"),
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

  // 🚀 AUTO-GUARDADO INMEDIATO AL ESCRIBIR EL NOMBRE
  elementos.nombre.addEventListener("input", (e) => {
    const nombre = e.target.value.trim()

    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout)
    }

    if (nombre.length >= 3 && !registroGuardado) {
      autoSaveTimeout = setTimeout(() => {
        guardarRegistroInmediato(nombre)
      }, 2000)
    } else if (nombre.length < 3) {
      registroGuardado = false
    }
  })

  // Modal de ayuda para consumo
  elementos.verConsumoLink.addEventListener("click", (e) => {
    e.preventDefault()
    mostrarModalConsumo()
  })

  elementos.closeModal.addEventListener("click", cerrarModalConsumo)

  elementos.consumoModal.addEventListener("click", (e) => {
    if (e.target === elementos.consumoModal) {
      cerrarModalConsumo()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && elementos.consumoModal.style.display === "block") {
      cerrarModalConsumo()
    }
  })

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

// 💾 FUNCIÓN PARA GUARDAR REGISTRO INMEDIATO
async function guardarRegistroInmediato(nombre) {
  if (registroGuardado) return

  try {
    const registroInmediato = {
      fechaCalculo: new Date().toISOString(),
      nombre: nombre,
      tipoCliente: elementos.tipoCliente.value || "No especificado",
      celular: elementos.celular.value.trim() || "593000000000",
      email: elementos.email.value.trim() || "no-email@ejemplo.com",
      ciudad: elementos.ciudad.value.trim() || "No especificado",
      consumoMensual: Number.parseInt(elementos.consumoMensual.value) || 0,
      consumoAnual: 0,
      costoMensualActual: 0.0,
      costoAnualActual: 0,
      tamanoSistema: 0.0,
      precioInversion: 0,
      produccionAnual: 0,
      produccionMensual: 0,
      cantidadPaneles: 0,
      areaRequerida: 0.0,
      nuevoConsumoMensual: 0,
      nuevoCostoMensual: 0.0,
      ahorroMensual: 0.0,
      ahorroAnual: 0.0,
      ahorroAnualPorcentaje: 0.0,
      tiempoRetorno: 0.0,
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

    if (response.ok) {
      registroGuardado = true
      console.log("✅ LEAD CAPTURADO - Registro automático guardado:", nombre)

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
  window.open(urlWhatsApp, "_blank")
  mostrarNotificacion("📱 Redirigiendo a WhatsApp...", "info")
}

function validarCelular(celular) {
  const regex = /^593\d{9}$/
  return regex.test(celular)
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

// 📄 FUNCIÓN PARA GENERAR PDF
function generarPDF() {
  if (!datosCalculados) {
    mostrarNotificacion("❌ No hay datos para generar el PDF", "error")
    return
  }

  try {
    mostrarNotificacion("📄 Generando informe PDF...", "info")

    const { jsPDF } = window.jspdf
    const doc = new jsPDF()

    // Agregar marca de agua
    function agregarMarcaDeAgua() {
      doc.saveGraphicsState()
      doc.setTextColor(245, 245, 245)
      doc.setFontSize(70)
      doc.setFont("helvetica", "bold")

      const pageWidth = doc.internal.pageSize.width
      const pageHeight = doc.internal.pageSize.height
      const centerX = pageWidth / 2
      const centerY = pageHeight / 2
      const angle = -45 * (Math.PI / 180)

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

    agregarMarcaDeAgua()

    const primaryColor = [255, 158, 26]
    const textColor = [55, 65, 81]
    const accentColor = [16, 185, 129]

    // HEADER DEL PDF
    doc.setFillColor(...primaryColor)
    doc.rect(0, 0, 210, 40, "F")

    const logoImg = new Image()
    logoImg.crossOrigin = "anonymous"
    logoImg.onload = () => {
      doc.addImage(logoImg, "PNG", 10, 5, 50, 25)

      doc.setTextColor(255, 255, 255)
      doc.setFontSize(18)
      doc.setFont("helvetica", "bold")
      doc.text("INFORME DE ANÁLISIS SOLAR", 70, 20)

      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.text(`Sistema: ${datosCalculados.sistema.nombre}`, 70, 27)

      const fecha = new Date().toLocaleDateString("es-EC", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      doc.text(`Fecha: ${fecha}`, 70, 34)

      continuarGeneracionPDF()
    }

    logoImg.onerror = () => {
      console.warn("No se pudo cargar el logo, continuando sin él")
      continuarGeneracionPDF()
    }

    logoImg.src = "https://images.grupomarriott.com/wp-content/uploads/2022/10/31083332/LOGO_SOLAR-1.png"

    function continuarGeneracionPDF() {
      let yPos = 55

      // INFORMACIÓN DEL CLIENTE
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

      // SISTEMA RECOMENDADO
      yPos += 20
      doc.setFontSize(16)
      doc.setFont("helvetica", "bold")
      doc.text("SISTEMA RECOMENDADO", 20, yPos)

      yPos += 10
      doc.setFontSize(14)
      doc.setTextColor(...primaryColor)
      doc.text(`${datosCalculados.sistema.nombre}`, 20, yPos)

      yPos += 7
      doc.setFontSize(11)
      doc.setTextColor(...textColor)
      doc.text(`Tipo: ${datosCalculados.sistema.tipo.replace("_", " ")}`, 20, yPos)
      doc.text(`Potencia: ${datosCalculados.sistema.potencia} kW`, 110, yPos)

      yPos += 7
      doc.text(`Paneles: ${datosCalculados.sistema.cantidadPaneles} unidades`, 20, yPos)
      doc.text(`Área: ${datosCalculados.sistema.areaRequerida} m²`, 110, yPos)

      // INVERSIÓN
      yPos += 15
      doc.setFontSize(14)
      doc.setTextColor(...primaryColor)
      const precioMostrar = datosCalculados.sistema.precioConIVA || datosCalculados.sistema.precio
      doc.text(`Inversión: ${formatearMoneda(precioMostrar)}`, 20, yPos)

      // INFORMACIÓN ESPECÍFICA SEGÚN TIPO
      yPos += 20
      if (datosCalculados.sistema.tipo === "ON_GRID") {
        // Mostrar información de ahorro
        doc.setFontSize(16)
        doc.setFont("helvetica", "bold")
        doc.setTextColor(...textColor)
        doc.text("ANÁLISIS DE AHORRO", 20, yPos)

        yPos += 10
        doc.setFontSize(11)
        doc.setFont("helvetica", "normal")
        doc.text(`Ahorro mensual: ${formatearMoneda(datosCalculados.ahorroMensual)}`, 20, yPos)
        doc.text(`Ahorro anual: ${formatearMoneda(datosCalculados.ahorroAnual)}`, 110, yPos)

        yPos += 7
        doc.text(`Tiempo de retorno: ${formatearNumero(datosCalculados.tiempoRetorno, 1)} años`, 20, yPos)
      } else if (datosCalculados.sistema.tipo === "OFF_GRID") {
        // Mostrar información de respaldo
        doc.setFillColor(255, 243, 205)
        doc.rect(15, yPos - 5, 180, 25, "F")

        doc.setTextColor(...primaryColor)
        doc.setFontSize(16)
        doc.setFont("helvetica", "bold")
        doc.text("SISTEMA DE RESPALDO", 20, yPos + 5)

        doc.setFontSize(11)
        doc.setTextColor(...textColor)
        doc.text(`Autonomía: ${datosCalculados.sistema.autonomiaHoras} horas`, 20, yPos + 15)
      } else if (datosCalculados.sistema.tipo === "HIBRIDO") {
        // Mostrar ambos
        doc.setFontSize(16)
        doc.setFont("helvetica", "bold")
        doc.setTextColor(...textColor)
        doc.text("SISTEMA HÍBRIDO - AHORRO + RESPALDO", 20, yPos)

        yPos += 10
        doc.setFontSize(11)
        doc.setFont("helvetica", "normal")
        doc.text(`Ahorro mensual: ${formatearMoneda(datosCalculados.ahorroMensual)}`, 20, yPos)
        doc.text(`Autonomía: ${datosCalculados.sistema.autonomiaHoras} horas`, 110, yPos)
      }

      // FOOTER
      yPos = 285
      doc.setFillColor(...primaryColor)
      doc.rect(0, yPos, 210, 17, "F")

      doc.setTextColor(255, 255, 255)
      doc.setFontSize(10)
      doc.text("MARRIOTT SOLUTIONS - Para más información: +593 98 091 0905", 20, yPos + 10)

      const nombreArchivo = `Informe_Solar_${datosCalculados.nombre.replace(/\s+/g, "_")}_${new Date().toISOString().split("T")[0]}.pdf`
      doc.save(nombreArchivo)

      mostrarNotificacion("✅ PDF generado exitosamente", "success")
    }
  } catch (error) {
    console.error("Error generando PDF:", error)
    mostrarNotificacion("❌ Error al generar el PDF", "error")
  }
}

// 🧮 FUNCIÓN PRINCIPAL DE CÁLCULO
async function calcularAhorro() {
  if (!validarFormulario()) return

  const nombre = elementos.nombre.value.trim()
  const tipoCliente = elementos.tipoCliente.value
  const celular = elementos.celular.value.trim()
  const email = elementos.email.value.trim()
  const ciudad = elementos.ciudad.value.trim()
  const consumo = Number.parseFloat(elementos.consumoMensual.value)

  // 🔍 ENCONTRAR SISTEMA RECOMENDADO
  const sistemaRecomendado = encontrarSistemaRecomendado(consumo)

  // Cálculos básicos
  const costoMensualSinSFV = calcularCostoProgresivo(consumo)
  const consumoAnualSinSFV = consumo * 12
  const costoAnualSinSFV = costoMensualSinSFV * 12

  // Cálculos específicos según tipo de sistema
  let ahorroMensual = 0
  let ahorroAnual = 0
  let ahorroAnualPorcentaje = 0
  let tiempoRetorno = 0
  let nuevoConsumoMensual = consumo
  let nuevoCostoMensualSFV = costoMensualSinSFV

  if (sistemaRecomendado.tipo === "ON_GRID" || sistemaRecomendado.tipo === "HIBRIDO") {
    // Solo calcular ahorros para sistemas conectados a la red
    nuevoConsumoMensual = Math.max(0, consumo - sistemaRecomendado.produccionMensual)
    nuevoCostoMensualSFV = calcularCostoProgresivo(nuevoConsumoMensual)
    ahorroMensual = costoMensualSinSFV - nuevoCostoMensualSFV
    ahorroAnual = ahorroMensual * 12
    ahorroAnualPorcentaje = costoAnualSinSFV > 0 ? (ahorroAnual / costoAnualSinSFV) * 100 : 0

    const precioInversion = sistemaRecomendado.precioConIVA || sistemaRecomendado.precio
    tiempoRetorno = ahorroAnual > 0 ? precioInversion / ahorroAnual : 0
  }

  // Guardar datos calculados globalmente
  datosCalculados = {
    nombre,
    tipoCliente,
    celular,
    email,
    ciudad,
    consumo,
    costoMensualSinSFV,
    consumoAnualSinSFV,
    costoAnualSinSFV,
    nuevoConsumoMensual,
    nuevoCostoMensualSFV,
    ahorroMensual,
    ahorroAnual,
    ahorroAnualPorcentaje,
    tiempoRetorno,
    sistema: sistemaRecomendado,
  }

  // Enviar datos a Power Automate
  await enviarDatosAPowerAutomate(datosCalculados)

  // Mostrar resultados según tipo de sistema
  mostrarResultados(datosCalculados)
}

// 🎨 FUNCIÓN PARA MOSTRAR RESULTADOS SEGÚN TIPO DE SISTEMA
function mostrarResultados(datos) {
  // Header con información del cliente
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

  // Ocultar todos los contenedores
  elementos.contenedorAhorro.style.display = "none"
  elementos.contenedorRespaldo.style.display = "none"
  elementos.contenedorHibrido.style.display = "none"

  // Mostrar contenedor específico según tipo de sistema
  if (datos.sistema.tipo === "ON_GRID") {
    mostrarContenedorAhorro(datos)
  } else if (datos.sistema.tipo === "OFF_GRID") {
    mostrarContenedorRespaldo(datos)
  } else if (datos.sistema.tipo === "HIBRIDO") {
    mostrarContenedorHibrido(datos)
  }

  // Mostrar sección de resultados
  elementos.resultados.style.display = "block"
  elementos.resultados.scrollIntoView({ behavior: "smooth", block: "start" })
}

// 💰 MOSTRAR CONTENEDOR DE AHORRO (ON GRID)
function mostrarContenedorAhorro(datos) {
  elementos.contenedorAhorro.innerHTML = `
    <div class="system-alert system-alert-success">
      <div class="alert-content">
        <i class="fas fa-piggy-bank"></i>
        <div>
          <h4>¡Sistema de Ahorro Energético!</h4>
          <p>Este sistema te permitirá <strong>reducir significativamente</strong> tu factura eléctrica mensual conectándose directamente a la red eléctrica.</p>
        </div>
      </div>
    </div>

    <div class="results-grid">
      <!-- Sistema Recomendado -->
      <div class="result-card">
        <div class="card-header">
          <h3><i class="fas fa-solar-panel"></i> Sistema Recomendado</h3>
        </div>
        <div class="card-content">
          <div class="result-item">
            <span>Sistema:</span>
            <span><strong>${datos.sistema.nombre}</strong></span>
          </div>
          <div class="result-item">
            <span>Tipo:</span>
            <span>Conectado a Red (ON GRID)</span>
          </div>
          <div class="result-item">
            <span>Potencia:</span>
            <span>${datos.sistema.potencia} kW</span>
          </div>
          <div class="result-item">
            <span>Inversión:</span>
            <span class="cost-primary">${formatearMoneda(datos.sistema.precioConIVA || datos.sistema.precio)}</span>
          </div>
          <div class="result-item">
            <span>Producción mensual:</span>
            <span>${formatearNumero(datos.sistema.produccionMensual, 0)} kWh</span>
          </div>
          <div class="result-item">
            <span>Cantidad de paneles:</span>
            <span>${datos.sistema.cantidadPaneles <= 4 ? "No requerido" : datos.sistema.cantidadPaneles + " unidades"}</span>
          </div>
          <div class="result-item">
            <span>Área requerida:</span>
            <span>${formatearNumero(datos.sistema.areaRequerida)} m²</span>
          </div>
        </div>
      </div>

      <!-- Situación Actual vs Nueva -->
      <div class="result-card">
        <div class="card-header">
          <h3><i class="fas fa-chart-line"></i> Comparación de Costos</h3>
        </div>
        <div class="card-content">
          <div class="result-item">
            <span>Consumo actual:</span>
            <span>${formatearNumero(datos.consumo, 0)} kWh/mes</span>
          </div>
          <div class="result-item">
            <span>Costo actual:</span>
            <span class="cost-negative">${formatearMoneda(datos.costoMensualSinSFV)}/mes</span>
          </div>
          <div class="result-item">
            <span>Nuevo consumo:</span>
            <span>${formatearNumero(datos.nuevoConsumoMensual, 0)} kWh/mes</span>
          </div>
          <div class="result-item">
            <span>Nuevo costo:</span>
            <span>${formatearMoneda(datos.nuevoCostoMensualSFV)}/mes</span>
          </div>
          <div class="result-item">
            <span><strong>Ahorro mensual:</strong></span>
            <span class="cost-positive"><strong>${formatearMoneda(datos.ahorroMensual)}</strong></span>
          </div>
          <div class="result-item">
            <span><strong>Ahorro anual:</strong></span>
            <span class="cost-positive"><strong>${formatearMoneda(datos.ahorroAnual)}</strong></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Tiempo de Retorno -->
    <div class="retorno-card">
      <div class="retorno-content">
        <div class="retorno-header">
          <i class="fas fa-clock"></i>
          <h3>Tiempo de Retorno de Inversión</h3>
        </div>
        <div class="retorno-value">${formatearNumero(datos.tiempoRetorno, 1)} años</div>
        <p>Tu inversión se recuperará en aproximadamente <strong>${datos.tiempoRetorno.toFixed(1)} años</strong>, después de eso será puro ahorro.</p>
        <div class="metrics-grid">
          <div class="metric-item">
            <i class="fas fa-percentage"></i>
            <div class="metric-value">${formatearNumero(datos.ahorroAnualPorcentaje, 1)}%</div>
            <div class="metric-label">Ahorro Anual</div>
          </div>
          <div class="metric-item">
            <i class="fas fa-dollar-sign"></i>
            <div class="metric-value">${formatearMoneda(datos.ahorroAnual)}</div>
            <div class="metric-label">USD/año</div>
          </div>
          <div class="metric-item">
            <i class="fas fa-home"></i>
            <div class="metric-value">${formatearNumero(datos.sistema.areaRequerida)} m²</div>
            <div class="metric-label">Área Necesaria</div>
          </div>
        </div>
      </div>
    </div>
  `
  elementos.contenedorAhorro.style.display = "block"
}

// 🔋 MOSTRAR CONTENEDOR DE RESPALDO (OFF GRID)
function mostrarContenedorRespaldo(datos) {
  elementos.contenedorRespaldo.innerHTML = `
    <div class="system-alert system-alert-warning">
      <div class="alert-content">
        <i class="fas fa-battery-full"></i>
        <div>
          <h4>Sistema de Respaldo Energético</h4>
          <p>Este sistema <strong>NO genera ahorro</strong> en tu factura eléctrica, pero te proporciona <strong>energía de respaldo</strong> durante cortes de luz y emergencias.</p>
        </div>
      </div>
    </div>

    <div class="results-grid">
      <!-- Sistema Recomendado -->
      <div class="result-card">
        <div class="card-header">
          <h3><i class="fas fa-battery-full"></i> Sistema de Respaldo</h3>
        </div>
        <div class="card-content">
          <div class="result-item">
            <span>Sistema:</span>
            <span><strong>${datos.sistema.nombre}</strong></span>
          </div>
          <div class="result-item">
            <span>Tipo:</span>
            <span>Independiente (OFF GRID)</span>
          </div>
          <div class="result-item">
            <span>Potencia:</span>
            <span>${datos.sistema.potencia} kW</span>
          </div>
          <div class="result-item">
            <span>Inversión:</span>
            <span class="cost-primary">${formatearMoneda(datos.sistema.precioConIVA || datos.sistema.precio)}</span>
          </div>
          <div class="result-item">
            <span>Autonomía:</span>
            <span><strong>${datos.sistema.autonomiaHoras} horas</strong></span>
          </div>
          <div class="result-item">
            <span>Cantidad de paneles:</span>
            <span>${datos.sistema.cantidadPaneles <= 4 ? "No requerido" : datos.sistema.cantidadPaneles + " unidades"}</span>
          </div>
          <div class="result-item">
            <span>Área requerida:</span>
            <span>${formatearNumero(datos.sistema.areaRequerida)} m²</span>
          </div>
        </div>
      </div>

      <!-- Beneficios del Sistema -->
      <div class="result-card">
        <div class="card-header">
          <h3><i class="fas fa-shield-alt"></i> Beneficios del Sistema</h3>
        </div>
        <div class="card-content">
          <div class="benefit-item">
            <i class="fas fa-bolt"></i>
            <div>
              <strong>Energía durante cortes</strong>
              <p>Mantén tus equipos funcionando durante apagones</p>
            </div>
          </div>
          <div class="benefit-item">
            <i class="fas fa-home"></i>
            <div>
              <strong>Independencia energética</strong>
              <p>No dependes completamente de la red eléctrica</p>
            </div>
          </div>
          <div class="benefit-item">
            <i class="fas fa-leaf"></i>
            <div>
              <strong>Energía limpia</strong>
              <p>Reduces tu huella de carbono</p>
            </div>
          </div>
          <div class="benefit-item">
            <i class="fas fa-tools"></i>
            <div>
              <strong>Sistema completo</strong>
              <p>Incluye paneles, baterías e inversor</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Información Importante -->
    <div class="info-card">
      <div class="info-content">
        <div class="info-header">
          <i class="fas fa-info-circle"></i>
          <h3>Información Importante</h3>
        </div>
        <div class="info-grid">
          <div class="info-item">
            <i class="fas fa-exclamation-triangle"></i>
            <div>
              <strong>No reduce tu factura</strong>
              <p>Este sistema funciona independiente de la red eléctrica</p>
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-clock"></i>
            <div>
              <strong>Autonomía de ${datos.sistema.autonomiaHoras} horas</strong>
              <p>Tiempo de respaldo con carga completa</p>
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-cog"></i>
            <div>
              <strong>Instalación especializada</strong>
              <p>Requiere instalación por técnicos certificados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  elementos.contenedorRespaldo.style.display = "block"
}

// ⚡ MOSTRAR CONTENEDOR HÍBRIDO
function mostrarContenedorHibrido(datos) {
  elementos.contenedorHibrido.innerHTML = `
    <div class="system-alert system-alert-hybrid">
      <div class="alert-content">
        <i class="fas fa-star"></i>
        <div>
          <h4>¡Sistema Híbrido - Lo Mejor de Ambos Mundos!</h4>
          <p>Este sistema te permite <strong>ahorrar en tu factura eléctrica</strong> Y tener <strong>energía de respaldo</strong> durante cortes de luz.</p>
        </div>
      </div>
    </div>

    <div class="results-grid">
      <!-- Sistema Recomendado -->
      <div class="result-card">
        <div class="card-header">
          <h3><i class="fas fa-star"></i> Sistema Híbrido</h3>
        </div>
        <div class="card-content">
          <div class="result-item">
            <span>Sistema:</span>
            <span><strong>${datos.sistema.nombre}</strong></span>
          </div>
          <div class="result-item">
            <span>Tipo:</span>
            <span>Híbrido (Ahorro + Respaldo)</span>
          </div>
          <div class="result-item">
            <span>Potencia:</span>
            <span>${datos.sistema.potencia} kW</span>
          </div>
          <div class="result-item">
            <span>Inversión:</span>
            <span class="cost-primary">${formatearMoneda(datos.sistema.precioConIVA || datos.sistema.precio)}</span>
          </div>
          <div class="result-item">
            <span>Producción mensual:</span>
            <span>${formatearNumero(datos.sistema.produccionMensual, 0)} kWh</span>
          </div>
          <div class="result-item">
            <span>Autonomía:</span>
            <span><strong>${datos.sistema.autonomiaHoras} horas</strong></span>
          </div>
          <div class="result-item">
            <span>Cantidad de paneles:</span>
            <span>${datos.sistema.cantidadPaneles <= 4 ? "No requerido" : datos.sistema.cantidadPaneles + " unidades"}</span>
          </div>
          <div class="result-item">
            <span>Área requerida:</span>
            <span>${formatearNumero(datos.sistema.areaRequerida)} m²</span>
          </div>
        </div>
      </div>

      <!-- Análisis de Ahorro -->
      <div class="result-card">
        <div class="card-header">
          <h3><i class="fas fa-piggy-bank"></i> Análisis de Ahorro</h3>
        </div>
        <div class="card-content">
          <div class="result-item">
            <span>Consumo actual:</span>
            <span>${formatearNumero(datos.consumo, 0)} kWh/mes</span>
          </div>
          <div class="result-item">
            <span>Costo actual:</span>
            <span class="cost-negative">${formatearMoneda(datos.costoMensualSinSFV)}/mes</span>
          </div>
          <div class="result-item">
            <span>Nuevo consumo:</span>
            <span>${formatearNumero(datos.nuevoConsumoMensual, 0)} kWh/mes</span>
          </div>
          <div class="result-item">
            <span>Nuevo costo:</span>
            <span>${formatearMoneda(datos.nuevoCostoMensualSFV)}/mes</span>
          </div>
          <div class="result-item">
            <span><strong>Ahorro mensual:</strong></span>
            <span class="cost-positive"><strong>${formatearMoneda(datos.ahorroMensual)}</strong></span>
          </div>
          <div class="result-item">
            <span><strong>Ahorro anual:</strong></span>
            <span class="cost-positive"><strong>${formatearMoneda(datos.ahorroAnual)}</strong></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Tiempo de Retorno + Respaldo -->
    <div class="hybrid-benefits">
      <div class="retorno-section">
        <div class="retorno-header">
          <i class="fas fa-clock"></i>
          <h3>Retorno de Inversión</h3>
        </div>
        <div class="retorno-value">${formatearNumero(datos.tiempoRetorno, 1)} años</div>
        <p>Se recupera en <strong>${datos.tiempoRetorno.toFixed(1)} años</strong></p>
      </div>
      
      <div class="respaldo-section">
        <div class="respaldo-header">
          <i class="fas fa-battery-full"></i>
          <h3>Respaldo Incluido</h3>
        </div>
        <div class="respaldo-value">${datos.sistema.autonomiaHoras}h</div>
        <p>Autonomía durante cortes</p>
      </div>
    </div>

    <div class="metrics-grid">
      <div class="metric-item">
        <i class="fas fa-percentage"></i>
        <div class="metric-value">${formatearNumero(datos.ahorroAnualPorcentaje, 1)}%</div>
        <div class="metric-label">Ahorro Anual</div>
      </div>
      <div class="metric-item">
        <i class="fas fa-dollar-sign"></i>
        <div class="metric-value">${formatearMoneda(datos.ahorroAnual)}</div>
        <div class="metric-label">USD/año</div>
      </div>
      <div class="metric-item">
        <i class="fas fa-shield-alt"></i>
        <div class="metric-value">${datos.sistema.autonomiaHoras}h</div>
        <div class="metric-label">Respaldo</div>
      </div>
      <div class="metric-item">
        <i class="fas fa-home"></i>
        <div class="metric-value">${formatearNumero(datos.sistema.areaRequerida)} m²</div>
        <div class="metric-label">Área Necesaria</div>
      </div>
    </div>
  `
  elementos.contenedorHibrido.style.display = "block"
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

// 📤 FUNCIÓN PARA ENVIAR DATOS A POWER AUTOMATE
async function enviarDatosAPowerAutomate(datos) {
  try {
    const payload = {
      fechaCalculo: new Date().toISOString(),
      nombre: datos.nombre,
      tipoCliente: datos.tipoCliente,
      celular: datos.celular.toString(),
      email: datos.email,
      ciudad: datos.ciudad,
      consumoMensual: Number.parseInt(datos.consumo),
      consumoAnual: Number.parseInt(datos.consumoAnualSinSFV),
      costoMensualActual: Number.parseFloat(datos.costoMensualSinSFV),
      costoAnualActual: Number.parseInt(datos.costoAnualSinSFV),
      tamanoSistema: Number.parseFloat(datos.sistema.potencia),
      precioInversion: Number.parseInt(datos.sistema.precioConIVA || datos.sistema.precio),
      produccionAnual: Number.parseInt(datos.sistema.produccionMensual * 12),
      produccionMensual: Number.parseInt(datos.sistema.produccionMensual),
      cantidadPaneles: Number.parseInt(datos.sistema.cantidadPaneles),
      areaRequerida: Number.parseFloat(datos.sistema.areaRequerida),
      nuevoConsumoMensual: Number.parseInt(datos.nuevoConsumoMensual),
      nuevoCostoMensual: Number.parseFloat(datos.nuevoCostoMensualSFV),
      ahorroMensual: Number.parseFloat(datos.ahorroMensual),
      ahorroAnual: Number.parseFloat(datos.ahorroAnual),
      ahorroAnualPorcentaje: Number.parseFloat(datos.ahorroAnualPorcentaje),
      tiempoRetorno: Number.parseFloat(datos.tiempoRetorno),
    }

    console.log("🔄 Enviando cálculo completo:", payload)

    const response = await fetch(POWER_AUTOMATE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      console.log("✅ Cotización completa guardada exitosamente")
    } else {
      const errorText = await response.text()
      console.error("❌ Error al guardar cálculo completo:", response.status, errorText)
    }
  } catch (error) {
    console.error("❌ Error general al enviar cálculo completo:", error)
  }
}

// 🖼️ FUNCIONES DEL MODAL DE AYUDA
function mostrarModalConsumo() {
  elementos.consumoModal.style.display = "block"
  document.body.style.overflow = "hidden"
}

function cerrarModalConsumo() {
  elementos.consumoModal.style.display = "none"
  document.body.style.overflow = "auto"
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
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")

      const icon = mobileMenuBtn.querySelector("i")
      if (mobileMenu.classList.contains("active")) {
        icon.className = "fas fa-times"
      } else {
        icon.className = "fas fa-bars"
      }
    })

    const mobileLinks = mobileMenu.querySelectorAll("a")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.className = "fas fa-bars"
      })
    })

    document.addEventListener("click", (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.className = "fas fa-bars"
      }
    })
  }
})
