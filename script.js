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

// 🏷️ DATOS DE SISTEMAS EXACTOS COMO EN EL TSX
const systemsData = [
  {
    range: [0, 50],
    systems: [
      {
        name: "Power Station 1000W",
        description: "Power Station 1000W",
        roi: null,
        type: "POWER STATION",
        price: 770.75,
        priceWithIVA: 886.36,
        panels: 0,
        monthlySavings: 00,
        annualSavings: 00,
      },
    ],
  },
  {
    range: [51, 100],
    systems: [
      {
        name: "Power Station 1000W",
        description: "Power Station 1000W",
        roi: null,
        type: "POWER STATION",
        price: 770.75,
        priceWithIVA: 886.36,
        panels: 0,
        monthlySavings: 00,
        annualSavings: 00,
      },
    ],
  },
  {
    range: [101, 200],
    systems: [
      {
        name: "Power Station 2400W",
        description: "Power Station 2400W",
        roi: null,
        type: "POWER STATION",
        price: 1250.0,
        priceWithIVA: 1437.5,
        panels: 0,
        monthlySavings: 00,
        annualSavings: 00,
      },
    ],
  },
  {
    range: [201, 400],
    systems: [
      {
        name: "BLUESUN 1KW",
        description: "SISTEMA OFF GRID - INVERSOR 110VAC 1KW + 2 BATERIA LITIO LIFEPO4 1.33KWH",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 1329.0,
        priceWithIVA: null,
        panels: 2,
        monthlySavings: 80,
        annualSavings: 960,
      },
    ],
  },
  {
    range: [401, 600],
    systems: [
      {
        name: "BLUESUN 3KW",
        description: "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 3KW (PV INPUT 2880W) + 1 BATERIA LIFEPO4 LITIO 5.12KWH",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 2589.0,
        priceWithIVA: null,
        panels: 4,
        monthlySavings: 150,
        annualSavings: 1800,
      },
      {
        name: "SOSEN 5K",
        description: "SISTEMA OFF GRID - INVERSOR SINGLE PHASE 5KW PV (INPUT 5000W) + 1 BATERIA LITIO LIFEPO4 5KWH",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 2589.0,
        priceWithIVA: null,
        panels: 6,
        monthlySavings: 180,
        annualSavings: 2160,
      },
    ],
  },
  {
    range: [601, 700],
    systems: [
      {
        name: "BLUESUN 3KW",
        description: "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 3KW (PV INPUT 2880W) + 1 BATERIA LIFEPO4 LITIO 5.12KWH",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 2589.0,
        priceWithIVA: null,
        panels: 4,
        monthlySavings: 150,
        annualSavings: 1800,
      },
      {
        name: "AIO 6KW - 10 kWh",
        description: "SISTEMA ALL IN ONE - INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 10KWH",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 3949.0,
        priceWithIVA: null,
        panels: 8,
        monthlySavings: 220,
        annualSavings: 2640,
      },
      {
        name: "SOSEN 5K",
        description: "SISTEMA OFF GRID - INVERSOR SINGLE PHASE 5KW PV (INPUT 5000W) + 1 BATERIA LITIO LIFEPO4 5KWH",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 2589.0,
        priceWithIVA: null,
        panels: 6,
        monthlySavings: 180,
        annualSavings: 2160,
      },
    ],
  },
  {
    range: [701, 800],
    systems: [
      {
        name: "BLUESUN 5KW",
        description: "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 5KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 10.85KWH",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 3989.0,
        priceWithIVA: null,
        panels: 6,
        monthlySavings: 250,
        annualSavings: 3000,
      },
      {
        name: "AIO 6KW - 10 kWh",
        description: "SISTEMA ALL IN ONE - INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 10KWH",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 3949.0,
        priceWithIVA: null,
        panels: 8,
        monthlySavings: 220,
        annualSavings: 2640,
      },
      {
        name: "SOSEN 5K",
        description: "SISTEMA OFF GRID - INVERSOR SINGLE PHASE 5KW PV (INPUT 5000W) + 1 BATERIA LITIO LIFEPO4 5KWH",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 2589.0,
        priceWithIVA: null,
        panels: 6,
        monthlySavings: 180,
        annualSavings: 2160,
      },
    ],
  },
  {
    range: [801, 900],
    systems: [
      {
        name: "BLUESUN 5KW",
        description: "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 5KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 10.85KWH",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 3989.0,
        priceWithIVA: null,
        panels: 6,
        monthlySavings: 250,
        annualSavings: 3000,
      },
      {
        name: "AIO 6KW - 15 kWh",
        description: "SISTEMA ALL IN ONE - INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 15KWH",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 4949.0,
        priceWithIVA: null,
        panels: 10,
        monthlySavings: 280,
        annualSavings: 3360,
      },
      {
        name: "SOSEN 5K",
        description: "SISTEMA OFF GRID - INVERSOR SINGLE PHASE 5KW PV (INPUT 5000W) + 1 BATERIA LITIO LIFEPO4 5KWH",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 2589.0,
        priceWithIVA: null,
        panels: 6,
        monthlySavings: 180,
        annualSavings: 2160,
      },
    ],
  },
  {
    range: [901, 1000],
    systems: [
      {
        name: "ON GRID 3KW + 6 PANELES",
        description: "SISTEMA ON GRID - INVERSOR SINGLE PHASE 3KW + SISTEMA 6 PANELES SOLARES",
        roi: "5.5",
        type: "ON GRID",
        price: 3050.0,
        priceWithIVA: null,
        panels: 6,
        monthlySavings: 320,
        annualSavings: 3840,
      },
      {
        name: "BLUESUN 5KW + 4 PANELES",
        description: "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 5KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 10.85KWH + SISTEMA DE 4 PANELES",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 4839.0,
        priceWithIVA: null,
        panels: 4,
        monthlySavings: 350,
        annualSavings: 4200,
      },
      {
        name: "AIO 6KW - 15 kWh",
        description: "SISTEMA ALL IN ONE - INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 15KWH",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 4949.0,
        priceWithIVA: null,
        panels: 10,
        monthlySavings: 280,
        annualSavings: 3360,
      },
    ],
  },
  {
    range: [1001, 1200],
    systems: [
      {
        name: "ON GRID 5KW + 10 PANELES",
        description: "SISTEMA ON GRID - INVERSOR SINGLE PHASE 5KW + SISTEMA 10 PANELES SOLARES",
        roi: "4.5",
        type: "ON GRID",
        price: 4653.0,
        priceWithIVA: null,
        panels: 10,
        monthlySavings: 450,
        annualSavings: 5400,
      },
      {
        name: "BLUESUN 5KW + 4 PANELES",
        description:
          "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 5KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 10.85KWH + SISTEMA DE 4 PANELES SOLARES",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 4839.0,
        priceWithIVA: null,
        panels: 4,
        monthlySavings: 350,
        annualSavings: 4200,
      },
      {
        name: "AIO 6KW - 15 kWh",
        description: "SISTEMA ALL IN ONE - INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 15KWH",
        roi: null,
        type: "OFF GRID - El ahorro depende del uso de la bateria",
        price: 4949.0,
        priceWithIVA: null,
        panels: 10,
        monthlySavings: 280,
        annualSavings: 3360,
      },
    ],
  },
  {
    range: [1201, 1500],
    systems: [
      {
        name: "ON GRID 5KW + 10 PANELES",
        description: "SISTEMA ON GRID - INVERSOR SINGLE PHASE 5KW + SISTEMA 10 PANELES SOLARES",
        roi: "4 ",
        type: "ON GRID",
        price: 4653.0,
        priceWithIVA: null,
        panels: 10,
        monthlySavings: 450,
        annualSavings: 5400,
      },
      {
        name: "SOSEN 10 KW+ 10 PANELES",
        description:
          "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 10KW (PV INPUT 15000W) + 1 BATERIA LITIO LIFEPO4 10KWH + SISTEMA DE 10 PANELES",
        roi: "8.3",
        type: "HIBRIDO",
        price: 9549.0,
        priceWithIVA: null,
        panels: 10,
        monthlySavings: 520,
        annualSavings: 6240,
      },
      {
        name: "SOSEN FOX 11KW + 10 PANELES",
        description:
          "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 11.4KW (PV INPUT 17000W) + 2 BATERIAS LITIO LIFEPO4 11KWH + SISTEMA DE 10 PANELES SOLARES",
        roi: "11",
        type: "HIBRIDO",
        price: 12849.0,
        priceWithIVA: null,
        panels: 10,
        monthlySavings: 580,
        annualSavings: 6960,
      },
    ],
  },
  {
    range: [1501, 1800],
    systems: [
      {
        name: "ON GRID 5KW + 10 PANELES",
        description: "SISTEMA ON GRID - INVERSOR SINGLE PHASE 5KW + SISTEMA 10 PANELES SOLARES",
        roi: "3",
        type: "ON GRID",
        price: 4653.0,
        priceWithIVA: null,
        panels: 10,
        monthlySavings: 450,
        annualSavings: 5400,
      },
      {
        name: "SOSEN 10 KW + 15 PANELES",
        description:
          "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 10KW (PV INPUT 15000W) + 1 BATERIA LITIO LIFEPO4 10KWH + SISTEMA DE 15 PANELES SOLARES",
        roi: "5)",
        type: "HIBRIDO",
        price: 10524.0,
        priceWithIVA: null,
        panels: 15,
        monthlySavings: 650,
        annualSavings: 7800,
      },
      {
        name: "SOSEN FOX 11KW + 15 PANELES",
        description:
          "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 11.4KW (PV INPUT 17000W) + 2 BATERIAS LITIO LIFEPO4 11KWH + SISTEMA DE 15 PANELES SOLARES",
        roi: "6.5",
        type: "HIBRIDO",
        price: 13824.0,
        priceWithIVA: null,
        panels: 15,
        monthlySavings: 720,
        annualSavings: 8640,
      },
    ],
  },
  {
    range: [1801, 2000],
    systems: [
      {
        name: "ON GRID 10KW + 20 PANELES",
        description: "SISTEMA ON GRID - INVERSOR SINGLE PHASE 10KW + SISTEMA 20 PANELES SOLARES",
        roi: "3",
        type: "ON GRID",
        price: 8775.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 850,
        annualSavings: 10200,
      },
      {
        name: "SOSEN 15 KW + 20 PANELES",
        description:
          "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 15KW (PV INPUT 22500W) + 1 BATERIA LITIO LIFEPO4 15KWH + SISTEMA DE 20 PANELES SOLARES",
        roi: "5",
        type: "HIBRIDO",
        price: 14449.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 920,
        annualSavings: 11040,
      },
    ],
  },
  {
    range: [2001, 2200],
    systems: [
      {
        name: "ON GRID 10KW + 20 PANELES",
        description: "SISTEMA ON GRID - INVERSOR SINGLE PHASE 10KW + SISTEMA 20 PANELES SOLARES",
        roi: "2.8",
        type: "ON GRID",
        price: 8775.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 850,
        annualSavings: 10200,
      },
      {
        name: "SOSEN 15 KW + 20 PANELES",
        description:
          "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 15KW (PV INPUT 22500W) + 1 BATERIA LITIO LIFEPO4 15KWH + SISTEMA DE 20 PANELES SOLARES",
        roi: "4.5",
        type: "HIBRIDO",
        price: 14449.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 920,
        annualSavings: 11040,
      },
    ],
  },
  {
    range: [2201, 2500],
    systems: [
      {
        name: "ON GRID 10KW + 20 PANELES",
        description: "SISTEMA ON GRID - INVERSOR SINGLE PHASE 10KW + SISTEMA 20 PANELES SOLARES",
        roi: "2.5",
        type: "ON GRID",
        price: 8775.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 850,
        annualSavings: 10200,
      },
      {
        name: "SOSEN 15 KW + 20 PANELES",
        description:
          "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 15KW (PV INPUT 22500W) + 1 BATERIA LITIO LIFEPO4 15KWH + SISTEMA DE 20 PANELES SOLARES",
        roi: "4",
        type: "HIBRIDO",
        price: 14449.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 920,
        annualSavings: 11040,
      },
    ],
  },
  {
    range: [2501, 3000],
    systems: [
      {
        name: "ON GRID 10KW + 24 PANELES",
        description: "SISTEMA ON GRID - INVERSOR SINGLE PHASE 10KW + SISTEMA 24 PANELES SOLARES",
        roi: "2",
        type: "ON GRID",
        price: 9435.0,
        priceWithIVA: null,
        panels: 24,
        monthlySavings: 1050,
        annualSavings: 12600,
      },
      {
        name: "SOSEN 15 KW + 30 PANELES",
        description:
          "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 15KW (PV INPUT 22500W) + 1 BATERIA LITIO LIFEPO4 15KWH + SISTEMA DE 30 PANELES SOLARES",
        roi: "2.8",
        type: "HIBRIDO",
        price: 16699.0,
        priceWithIVA: null,
        panels: 30,
        monthlySavings: 1200,
        annualSavings: 14400,
      },
    ],
  },
  {
    range: [3001, 3500],
    systems: [
      {
        name: "2 SISTEMAS (ON GRID 10KW + 24 PANELES)",
        description: "SISTEMA ON GRID - 2 INVERSORES SINGLE PHASE 10KW + SISTEMA 48 PANELES SOLARES",
        roi: "2",
        type: "ON GRID",
        price: 18870.0,
        priceWithIVA: null,
        panels: 48,
        monthlySavings: 1800,
        annualSavings: 21600,
      },
    ],
  },
  {
    range: [3501, 4000],
    systems: [
      {
        name: "2 SISTEMAS (ON GRID 10KW + 24 PANELES)",
        description: "SISTEMA ON GRID - 2 INVERSORES SINGLE PHASE 10KW + SISTEMA 48 PANELES SOLARES",
        roi: "1.6",
        type: "ON GRID",
        price: 18870.0,
        priceWithIVA: null,
        panels: 48,
        monthlySavings: 1800,
        annualSavings: 21600,
      },
    ],
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

// 🔍 FUNCIÓN PARA ENCONTRAR SISTEMAS RECOMENDADOS (IGUAL AL TSX)
function getRecommendedSystems(consumption) {
  // Encontrar el rango correspondiente
  const matchingRange = systemsData.find((range) => consumption >= range.range[0] && consumption <= range.range[1])

  if (matchingRange) {
    return matchingRange.systems.slice(0, 3) // Máximo 3 sistemas
  } else {
    return []
  }
}

// Función para calcular área requerida
function calculateArea(panels) {
  return panels * 2.62 * 1.3
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
    // Tarjetas adicionales
    sistemasRecomendados: document.getElementById("sistemas-recomendados"),
    sistemasGrid: document.getElementById("sistemas-grid"),
    consumoDisplay: document.getElementById("consumo-display"),
    // Botones de acción
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

// 📄 FUNCIÓN PARA GENERAR PDF INDIVIDUAL POR SISTEMA
function generarPDFSistema(sistema, datosCliente) {
  try {
    mostrarNotificacion("📄 Generando cotización PDF...", "info")

    const { jsPDF } = window.jspdf
    const doc = new jsPDF()

    // Agregar marca de agua mejorada
    function agregarMarcaDeAgua() {
      doc.saveGraphicsState()
      doc.setTextColor(200, 200, 200) // Color más oscuro para mejor visibilidad
      doc.setFontSize(60) // Tamaño más grande
      doc.setFont("helvetica", "bold")

      const pageWidth = doc.internal.pageSize.width
      const pageHeight = doc.internal.pageSize.height
      const centerX = pageWidth / 2
      const centerY = pageHeight / 2
      const angle = -45 * (Math.PI / 180)

      // Marca de agua centrada con "MARRIOTT SOLUTIONS"
      doc.text("MARRIOTT SOLUTIONS", centerX, centerY, {
        angle: angle,
        align: "center",
      })

      doc.restoreGraphicsState()
    }

    const primaryColor = [255, 158, 26]
    const textColor = [55, 65, 81]

    // HEADER DEL PDF
    doc.setFillColor(...primaryColor)
    doc.rect(0, 0, 210, 40, "F")

    const logoImg = new Image()
    logoImg.crossOrigin = "anonymous"
    logoImg.onload = () => {
      doc.addImage(logoImg, "PNG", 10, 5, 40, 20)

      // Agregar marca de agua PRIMERO (para que quede detrás del contenido)
      agregarMarcaDeAgua()

      // MARRIOTT SOLUTIONS como título principal
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(20)
      doc.setFont("helvetica", "bold")
      doc.text("MARRIOTT SOLUTIONS", 60, 15)

      doc.setFontSize(14)
      doc.setFont("helvetica", "normal")
      doc.text("COTIZACIÓN SISTEMAS FOTOVOLTAICOS", 60, 25)

      doc.setFontSize(10)
      doc.text(`Sistema: ${sistema.name}`, 60, 32)

      const fecha = new Date().toLocaleDateString("es-EC", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      doc.text(`Fecha: ${fecha}`, 60, 37)

      continuarGeneracionPDF()
    }

    logoImg.onerror = () => {
      console.warn("No se pudo cargar el logo, continuando sin él")

      // Agregar marca de agua PRIMERO
      agregarMarcaDeAgua()

      // Si no hay logo, centrar el texto
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(20)
      doc.setFont("helvetica", "bold")
      doc.text("MARRIOTT SOLUTIONS", 105, 15, { align: "center" })

      doc.setFontSize(14)
      doc.setFont("helvetica", "normal")
      doc.text("COTIZACIÓN SISTEMA SOLAR", 105, 25, { align: "center" })

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
      doc.text(`Nombre: ${datosCliente.nombre}`, 20, yPos)
      doc.text(`Tipo: ${datosCliente.tipoCliente}`, 110, yPos)

      yPos += 7
      doc.text(`Celular: ${datosCliente.celular}`, 20, yPos)
      doc.text(`Ciudad: ${datosCliente.ciudad}`, 110, yPos)

      yPos += 7
      // Dividir email largo si es necesario
      const emailText = `Email: ${datosCliente.email}`
      if (emailText.length > 40) {
        doc.text("Email:", 20, yPos)
        doc.text(datosCliente.email, 20, yPos + 5)
        yPos += 5
      } else {
        doc.text(emailText, 20, yPos)
      }

      // SISTEMA COTIZADO
      yPos += 20
      doc.setFillColor(255, 247, 237)
      doc.rect(15, yPos - 5, 180, 70, "F")

      doc.setFontSize(16)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(...primaryColor)
      doc.text("SISTEMA COTIZADO", 20, yPos + 5)

      yPos += 15
      doc.setFontSize(12)
      doc.setTextColor(...textColor)

      // Dividir descripción larga en múltiples líneas
      const descripcion = sistema.description
      const maxWidth = 170
      const lines = doc.splitTextToSize(descripcion, maxWidth)

      for (let i = 0; i < lines.length; i++) {
        doc.text(lines[i], 20, yPos + i * 6)
      }
      yPos += lines.length * 6

      yPos += 5
      doc.setFontSize(11)
      doc.text(`Tipo: ${sistema.type}`, 20, yPos)
      if (sistema.panels > 0) {
        doc.text(`Paneles: ${sistema.panels} unidades`, 110, yPos)
      }

      yPos += 7
      if (sistema.panels > 0) {
        doc.text(`Área requerida: ${calculateArea(sistema.panels).toFixed(1)} m²`, 20, yPos)
      }
      if (sistema.roi) {
        doc.text(`ROI: ${sistema.roi} años`, 110, yPos)
      }

      // PRECIOS
      yPos += 25
      doc.setFillColor(240, 253, 244)
      doc.rect(15, yPos - 5, 180, 35, "F")

      doc.setFontSize(16)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(...primaryColor)
      doc.text("INVERSIÓN", 20, yPos + 5)

      yPos += 15
      doc.setFontSize(14)
      doc.setTextColor(...textColor)
      doc.text(`Precio: ${formatearMoneda(sistema.price)}`, 20, yPos)

      if (sistema.priceWithIVA) {
        yPos += 8
        doc.text(`Precio + IVA: ${formatearMoneda(sistema.priceWithIVA)}`, 20, yPos)
      }

      // BENEFICIOS
      yPos += 25
      doc.setFillColor(239, 246, 255)
      doc.rect(15, yPos - 5, 180, 35, "F")

      doc.setFontSize(16)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(...primaryColor)
      doc.text("BENEFICIOS", 20, yPos + 5)

      yPos += 15
      doc.setFontSize(12)
      doc.setTextColor(...textColor)
      doc.text(`Ahorro mensual: ${formatearMoneda(sistema.monthlySavings)}`, 20, yPos)
      doc.text(`Ahorro anual: ${formatearMoneda(sistema.annualSavings)}`, 110, yPos)

      // FOOTER
      yPos = 285
      doc.setFillColor(...primaryColor)
      doc.rect(0, yPos, 210, 17, "F")

      doc.setTextColor(255, 255, 255)
      doc.setFontSize(10)
      doc.text("MARRIOTT SOLUTIONS - Para más información: +593 98 091 0905", 20, yPos + 10)

      const nombreArchivo = `Cotizacion_${sistema.name.replace(/\s+/g, "_")}_${datosCliente.nombre.replace(/\s+/g, "_")}_${new Date().toISOString().split("T")[0]}.pdf`
      doc.save(nombreArchivo)

      mostrarNotificacion("✅ Cotización PDF generada exitosamente", "success")
    }
  } catch (error) {
    console.error("Error generando PDF:", error)
    mostrarNotificacion("❌ Error al generar la cotización PDF", "error")
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

  // 🔍 ENCONTRAR SISTEMA RECOMENDADO PRINCIPAL
  const sistemasRecomendados = getRecommendedSystems(consumo)
  const sistemaRecomendado = sistemasRecomendados[0] // El primer sistema es el principal

  if (!sistemaRecomendado) {
    alert("No se encontraron sistemas para este rango de consumo")
    return
  }

  // Cálculos básicos
  const costoMensualSinSFV = calcularCostoProgresivo(consumo)
  const consumoAnualSinSFV = consumo * 12
  const costoAnualSinSFV = costoMensualSinSFV * 12

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
  if (elementos.contenedorRespaldo) {
    elementos.contenedorRespaldo.style.display = "none"
  }
  elementos.contenedorHibrido.style.display = "none"

  // Mostrar contenedor específico según tipo de sistema
  if (datos.sistema.type === "ON GRID") {
    mostrarContenedorAhorro(datos)
  } else if (datos.sistema.type === "OFF GRID" || datos.sistema.type === "POWER STATION") {
    mostrarContenedorRespaldo(datos)
  } else if (datos.sistema.type === "HIBRIDO") {
    mostrarContenedorHibrido(datos)
  }

  // Mostrar sistemas recomendados
  mostrarSistemasRecomendados(datos.consumo)

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
  `
  elementos.contenedorAhorro.style.display = "block"
}

// 🔋 MOSTRAR CONTENEDOR DE RESPALDO (OFF GRID)
function mostrarContenedorRespaldo(datos) {
  // No mostrar contenedor para sistemas de respaldo
  if (elementos.contenedorRespaldo) {
    elementos.contenedorRespaldo.style.display = "none"
  }
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
  `
  elementos.contenedorHibrido.style.display = "block"
}

// 🏷️ FUNCIÓN PARA MOSTRAR SISTEMAS RECOMENDADOS (IGUAL AL TSX)
function mostrarSistemasRecomendados(consumo) {
  // Obtener sistemas recomendados usando la misma lógica del TSX
  const sistemasRecomendados = getRecommendedSystems(consumo)

  console.log(`🔍 Para consumo ${consumo} kWh, sistemas encontrados:`, sistemasRecomendados)

  if (sistemasRecomendados.length === 0) {
    elementos.sistemasGrid.innerHTML = `
      <div class="sistema-card">
        <div class="sistema-card-content">
          <p>No se encontraron sistemas para este rango de consumo.</p>
        </div>
      </div>
    `
  } else {
    // Generar HTML para cada sistema
    elementos.sistemasGrid.innerHTML = sistemasRecomendados
      .map(
        (sistema, index) => `
      <div class="sistema-card ${index === 0 ? "sistema-destacado" : ""}">
        <div class="sistema-card-header">
          <div class="sistema-type-badge ${getBadgeClass(sistema.type)}">
            ${getSystemIcon(sistema.type)}
            ${sistema.type}

            ${sistema.roi ? `<span class="roi-badge">ROI: ${sistema.roi} años - El retorno de la inversión estará sujeto a la disponibilidad del medidor bidireccional / El ahorro depende del uso de la bateria</span>` : ""}
          </div>
          <h3 class="sistema-title">${sistema.description}</h3>
        </div>
        <div class="sistema-card-content">
          ${
            sistema.panels > 0
              ? `
          <div class="sistema-specs">
            <div class="spec-item">
              <span class="spec-label">Paneles solares:</span>
              <span class="spec-value">${sistema.panels} paneles</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Área requerida:</span>
              <span class="spec-value">${calculateArea(sistema.panels).toFixed(1)} m²</span>
            </div>
          </div>
          `
              : ""
          }
          ${ 
  sistema.type !== "OFF GRID"
    ? `
      <div class="sistema-savings">
        <div class="savings-item">
          <span class="savings-label">Ahorro mensual:</span>
          <span class="savings-value">${formatearMoneda(sistema.monthlySavings)}</span>
        </div>
        <div class="savings-item">
          <span class="savings-label">Ahorro anual:</span>
          <span class="savings-value">${formatearMoneda(sistema.annualSavings)}</span>
        </div>
      </div>
      `
    : ""
}          
          <div class="sistema-price">
            <div class="price-item">
              <span class="price-label">Precio de Inversión:</span>
              <span class="price-value price-inversion">${formatearMoneda(sistema.price)}</span>
            </div>
            ${
              sistema.priceWithIVA
                ? `
            <div class="price-item">
              <span class="price-label">Precio + IVA:</span>
              <span class="price-value price-iva">${formatearMoneda(sistema.priceWithIVA)}</span>
            </div>
            `
                : ""
            }
          </div>
          
          <button class="btn-cotizar" onclick="generarPDFSistema(${JSON.stringify(sistema).replace(/"/g, "&quot;")}, ${JSON.stringify(datosCalculados).replace(/"/g, "&quot;")})">
            <i class="fas fa-file-pdf"></i>
            Descargar Cotización PDF
          </button>
        </div>
      </div>
    `,
      )
      .join("")
  }

  // Mostrar la sección
  elementos.sistemasRecomendados.style.display = "block"
}

// 🎨 FUNCIÓN PARA OBTENER CLASE DE BADGE
function getBadgeClass(tipo) {
  switch (tipo) {
    case "ON GRID":
      return "badge-on-grid"
    case "OFF GRID":
      return "badge-off-grid"
    case "HIBRIDO":
      return "badge-hibrido"
    default:
      return "badge-power-station"
  }
}

// 🔧 FUNCIÓN PARA OBTENER ICONO DEL SISTEMA
function getSystemIcon(tipo) {
  switch (tipo) {
    case "ON GRID":
      return '<i class="fas fa-sun"></i>'
    case "OFF GRID":
      return '<i class="fas fa-battery-full"></i>'
    case "HIBRIDO":
      return '<i class="fas fa-bolt"></i>'
    default:
      return '<i class="fas fa-plug"></i>'
  }
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
      tamanoSistema: datos.sistema.panels || 0,
      precioInversion: Number.parseInt(datos.sistema.priceWithIVA || datos.sistema.price),
      produccionAnual: Number.parseInt(datos.sistema.annualSavings || 0),
      produccionMensual: Number.parseInt(datos.sistema.monthlySavings || 0),
      cantidadPaneles: Number.parseInt(datos.sistema.panels || 0),
      areaRequerida: Number.parseFloat(calculateArea(datos.sistema.panels || 0)),
      nuevoConsumoMensual: Number.parseInt(datos.consumo),
      nuevoCostoMensual: Number.parseFloat(datos.costoMensualSinSFV),
      ahorroMensual: Number.parseFloat(datos.sistema.monthlySavings || 0),
      ahorroAnual: Number.parseFloat(datos.sistema.annualSavings || 0),
      ahorroAnualPorcentaje: 0,
      tiempoRetorno: Number.parseFloat(datos.sistema.roi || 0),
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
