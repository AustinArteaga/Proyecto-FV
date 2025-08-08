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
        monthlySavings: 0,
        annualSavings: 0,
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
        monthlySavings: 0,
        annualSavings: 0,
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
        monthlySavings: 0,
        annualSavings: 0,
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
        type: "OFF GRID",
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
        description:
          "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 3KW (PV INPUT 2880W) + 1 BATERIA LIFEPO4 LITIO 5.12KWH",
        roi: null,
        type: "OFF GRID",
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
        type: "OFF GRID",
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
        description:
          "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 3KW (PV INPUT 2880W) + 1 BATERIA LIFEPO4 LITIO 5.12KWH",
        roi: null,
        type: "OFF GRID",
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
        type: "OFF GRID",
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
        type: "OFF GRID",
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
        description:
          "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 5KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 10.85KWH",
        roi: null,
        type: "OFF GRID",
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
        type: "OFF GRID",
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
        type: "OFF GRID",
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
        description:
          "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 5KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 10.85KWH",
        roi: null,
        type: "OFF GRID",
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
        type: "OFF GRID",
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
        type: "OFF GRID",
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
        description:
          "SISTEMA OFF GRID - INVERSOR SPLIT PHASE 5KW (PV INPUT 2880W) + 1 BATERIA LITIO LIFEPO4 10.85KWH + SISTEMA DE 4 PANELES",
        roi: null,
        type: "OFF GRID",
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
        type: "OFF GRID",
        price: 4949.0,
        priceWithIVA: null,
        panels: 0,
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
        type: "OFF GRID",
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
        type: "OFF GRID",
        price: 4949.0,
        priceWithIVA: null,
        panels: 0,
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
        name: "AIO 6KW - 15 kWh",
        description: "SISTEMA ALL IN ONE - INVERSOR SPLIT PHASE 6KW (PV INPUT 3000W) C/ BATERIA LITIO LIFEPO4 15KWH",
        roi: null,
        type: "OFF GRID",
        price: 4949.0,
        priceWithIVA: null,
        panels: 0,
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
        roi: "5",
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
          "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 11.4KW (PV INPUT 17000W) +  2 BATERIAS LITIO LIFEPO4 11KWH + SISTEMA DE 15 PANELES SOLARES",
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
        name: "SOSEN FOX 11KW  + 20 PANELES",
        description:
          "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 11.4KW (PV INPUT 17000W) +  2 BATERIAS LITIO LIFEPO4 11KWH + SISTEMA DE 20 PANELES SOLARES",
        roi: "5.2",
        type: "HIBRIDO",
        price: 14949.0,
        priceWithIVA: null,
        panels: 20,
        monthlySavings: 920,
        annualSavings: 11040,
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
        name: "SOSEN FOX 11KW  + 20 PANELES",
        description:
          "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 11.4KW (PV INPUT 17000W) +  2 BATERIAS LITIO LIFEPO4 11KWH + SISTEMA DE 20 PANELES SOLARES",
        roi: "4.7",
        type: "HIBRIDO",
        price: 14949.0,
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
        name: "SOSEN FOX 11KW  + 20 PANELES",
        description:
          "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 11.4KW (PV INPUT 17000W) +  2 BATERIAS LITIO LIFEPO4 11KWH + SISTEMA DE 20 PANELES SOLARES",
        roi: "4",
        type: "hIBRIDO",
        price: 14949.0,
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
        name: "SOSEN FOX 11KW  + 30 PANELES",
        description:
          "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 11.4KW (PV INPUT 17000W) +  2 BATERIAS LITIO LIFEPO4 11KWH + SISTEMA DE 30 PANELES SOLARES",
        roi: "2.7",
        type: "HIBRIDO",
        price: 17199.0,
        priceWithIVA: null,
        panels: 30,
        monthlySavings: 1200,
        annualSavings: 14400,
      },
      {
        name: "SOSEN 15 KW + 30 PANELES",
        description:
          "SISTEMA HIBRIDO - INVERSOR SPLIT PHASE 15KW (PV INPUT 22500W) + 1 BATERIA LITIO LIFEPO4 15KWH + SISTEMA DE 30 PANELES SOLARES",
        roi: "2.6",
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
        panels: 24,
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
        panels: 24,
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
    window.open("", "_blank")
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

// 🆕 NUEVA FUNCIÓN PARA MOSTRAR AHORROS O MENSAJE DE EMERGENCIA
function getSavingsOrEmergencyMessage(sistema, consumo) {
  // Si el consumo es menor a 200 kWh y es un Power Station, mostrar mensaje especial
  if (consumo < 200 && sistema.type === "POWER STATION") {
    return `
      <div class="emergency-message">
        <div class="emergency-icon">
          <i class="fas fa-shield-alt"></i>
        </div>
        <div class="emergency-content">
          <h4>⚡ Energía de Respaldo Garantizada</h4>
          <p><strong>¡Nunca más te quedes sin energía!</strong></p>
          <ul class="emergency-benefits">
            <li>✅ <strong>Protección</strong> durante apagones</li>
            <li>✅ <strong>Energía instantánea</strong> para tus equipos esenciales</li>
            <li>✅ <strong>Portátil y fácil de usar</strong> - plug & play</li>
          </ul>
          <div class="emergency-highlight">
            <i class="fas fa-lightbulb"></i>
            <span>Inversión en seguridad energética - No genera ahorro en factura.</span>
          </div>
        </div>
      </div>
    `
  }

  // Para sistemas OFF GRID menores a 200 kWh, también mostrar mensaje especial
  if (consumo < 200 && sistema.type.includes("OFF GRID")) {
    return `
      <div class="emergency-message off-grid">
        <div class="emergency-icon">
          <i class="fas fa-battery-full"></i>
        </div>
        <div class="emergency-content">
          <h4>⚡ Sistema de Respaldo Inteligente</h4>
          <p><strong>¡Energía limpia cuando más la necesitas!</strong></p>
          <ul class="emergency-benefits">
            <li>✅ <strong>Respaldo automático</strong> durante cortes de luz</li>
            <li>✅ <strong>Energía solar gratuita</strong> durante el día</li>
            <li>✅ <strong>Batería de litio</strong> de larga duración</li>
            <li>✅ <strong>Reduce dependencia</strong> de la red eléctrica</li>
          </ul>
          <div class="emergency-highlight">
            <i class="fas fa-sun"></i>
            <span><strong>Ahorro variable</strong> según uso de batería - <strong>Seguridad energética garantizada</strong></span>
          </div>
        </div>
      </div>
    `
  }

  // Para todos los demás sistemas, mostrar ahorros normales
  return `
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
}

// 📄 FUNCIÓN PARA GENERAR PDF INDIVIDUAL POR SISTEMA - MODIFICADA SIN FONDOS DE COLOR
function generarPDFSistema(sistema, datosCliente) {
  try {
    mostrarNotificacion("📄 Generando cotización PDF...", "info")

    const { jsPDF } = window.jspdf
    const doc = new jsPDF()

    // 🎨 FUNCIÓN MEJORADA PARA AGREGAR MARCA DE AGUA MÁS VISIBLE
    function agregarMarcaDeAguaMejorada() {
      doc.saveGraphicsState()
      // Configurar opacidad para que sea visible pero no interfiera
      doc.setGState(new doc.GState({ opacity: 0.15 }))
      // Color más oscuro para mejor visibilidad
      doc.setTextColor(100, 100, 100) // Gris más oscuro
      doc.setFontSize(45) // Tamaño más manejable
      doc.setFont("helvetica", "bold")

      const pageWidth = doc.internal.pageSize.width
      const pageHeight = doc.internal.pageSize.height

      // Múltiples marcas de agua en diferentes posiciones
      const positions = [
        { x: pageWidth * 0.3, y: pageHeight * 0.3 },
        { x: pageWidth * 0.7, y: pageHeight * 0.5 },
        { x: pageWidth * 0.5, y: pageHeight * 0.7 },
      ]

      const angle = -25 * (Math.PI / 180) // Ángulo menos pronunciado

      positions.forEach((pos) => {
        doc.text("MARRIOTT SOLUTIONS", pos.x, pos.y, {
          angle: angle,
          align: "center",
        })
      })

      doc.restoreGraphicsState()
    }

    // 🌟 FUNCIÓN ALTERNATIVA PARA MARCA DE AGUA EN EL FONDO CON PATRÓN
    function agregarMarcaDeAguaPatron() {
      doc.saveGraphicsState()
      // Opacidad muy sutil para el patrón
      doc.setGState(new doc.GState({ opacity: 0.08 }))
      doc.setTextColor(120, 120, 120)
      doc.setFontSize(20)
      doc.setFont("helvetica", "normal")

      const pageWidth = doc.internal.pageSize.width
      const pageHeight = doc.internal.pageSize.height

      // Crear patrón repetitivo
      for (let y = 30; y < pageHeight; y += 40) {
        for (let x = 20; x < pageWidth; x += 80) {
          doc.text("MARRIOTT", x, y, { angle: -15 * (Math.PI / 180) })
        }
      }

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

      // 🎨 APLICAR AMBAS MARCAS DE AGUA PARA MEJOR EFECTO
      agregarMarcaDeAguaPatron() // Patrón sutil de fondo
      agregarMarcaDeAguaMejorada() // Marcas principales más visibles

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
      // 🎨 APLICAR MARCAS DE AGUA INCLUSO SIN LOGO
      agregarMarcaDeAguaPatron()
      agregarMarcaDeAguaMejorada()

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

      // 📋 INFORMACIÓN DEL CLIENTE - SIN FONDO DE COLOR
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

      // 🔧 SISTEMA COTIZADO - SIN FONDO DE COLOR
      yPos += 20
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

      // 🔧 MODIFICACIÓN: Mostrar paneles o "No aplica" según el consumo
      if (sistema.panels > 0) {
        doc.text(`Paneles: ${sistema.panels} unidades`, 110, yPos)
      } else if (datosCliente.consumo > 201) {
        doc.text(`Paneles: No aplica`, 110, yPos)
      }

      yPos += 7

      // 🔧 MODIFICACIÓN: Mostrar área o "No requiere" según paneles y consumo
      if (sistema.panels > 0) {
        doc.text(`Área requerida: ${calculateArea(sistema.panels).toFixed(1)} m²`, 20, yPos)
      } else if (datosCliente.consumo > 201) {
        doc.text(`Área requerida: No requiere`, 20, yPos)
      }

      if (sistema.roi) {
        doc.text(`ROI: ${sistema.roi} años`, 110, yPos)
      }

      // 💰 PRECIOS - SIN FONDO DE COLOR
      yPos += 25
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

      // 🎯 BENEFICIOS - SIN FONDO DE COLOR
      yPos += 25
      doc.setFontSize(16)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(...primaryColor)
      doc.text("BENEFICIOS", 20, yPos + 5)

      yPos += 15
      doc.setFontSize(12)
      doc.setTextColor(...textColor)

      // Verificar si es sistema de emergencia
      if (sistema.type === "POWER STATION" || (sistema.monthlySavings === 0 && sistema.annualSavings === 0)) {
        doc.text("✓ Sistema de respaldo energético", 20, yPos)
        doc.text("✓ Energía limpia y confiable", 20, yPos + 7)
        doc.text("✓ Reducción de dependencia eléctrica", 20, yPos + 14)
      } else {
        doc.text(`Ahorro mensual: ${formatearMoneda(sistema.monthlySavings)}`, 20, yPos)
        doc.text(`Ahorro anual: ${formatearMoneda(sistema.annualSavings)}`, 110, yPos)
      }

      // 📝 NOTA ADICIONAL - AGREGAR ANTES DEL FOOTER
      yPos += 25
      doc.setFontSize(12) // Mismo tamaño que "Ahorro mensual"
      doc.setTextColor(...textColor)
      doc.setFont("helvetica", "normal")

      // Mensaje de nota con las especificaciones solicitadas
      const mensajaNota =
        "Notas:\n• La cantidad final de paneles será confirmada luego de un análisis gratuito realizado por nuestros expertos.\n• Las horas de respaldo estarán sujetas a la configuración de batería recomendada por nuestro equipo técnico.\n• El ahorro estimado dependerá de la correcta disposición y configuración del medidor bidireccional."

      // Dividir el mensaje en líneas si es muy largo
      const maxWidthNota = 170
      const lineasNota = doc.splitTextToSize(mensajaNota, maxWidthNota)

      // Mostrar cada línea del mensaje
      for (let i = 0; i < lineasNota.length; i++) {
        doc.text(lineasNota[i], 20, yPos + i * 6)
      }

      // Ajustar yPos según el número de líneas
      yPos += lineasNota.length * 6

      // 🎨 AGREGAR MARCA DE AGUA ADICIONAL EN LA PARTE INFERIOR
      doc.saveGraphicsState()
      doc.setGState(new doc.GState({ opacity: 0.1 }))
      doc.setTextColor(150, 150, 150)
      doc.setFontSize(60)
      doc.setFont("helvetica", "bold")
      doc.text("MARRIOTT", 105, 250, {
        angle: -45 * (Math.PI / 180),
        align: "center",
      })
      doc.restoreGraphicsState()

      // 📞 FOOTER
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

// 🏷️ FUNCIÓN PARA MOSTRAR SISTEMAS RECOMENDADOS (MODIFICADA)
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
            ${sistema.roi ? `<span class="roi-badge">ROI: ${sistema.roi} años</span>` : ""}
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
              : consumo > 201
                ? `
          <div class="sistema-specs">
            <div class="spec-item">
              <span class="spec-label">Paneles solares:</span>
              <span class="spec-value">No aplica</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Área requerida:</span>
              <span class="spec-value">No requiere</span>
            </div>
          </div>
          `
                : ""
          }
                                        
          ${getSavingsOrEmergencyMessage(sistema, consumo)}
                                                  
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

// ========== BACKUP CALCULATOR FUNCTIONALITY ==========

// Datos de equipos para calculadora de respaldo
const EQUIPOS_BACKUP = [
  {nombre:'Luz LED de domicilio',W:10,kwhH:0.01},
  {nombre:'Tomacorrientes uso general (carga ligera)',W:150,kwhH:0.15},
  {nombre:'Bomba de agua 1HP*',W:750,kwhH:0.75},
  {nombre:'Cámaras IP',W:10,kwhH:0.01},
  {nombre:'Switch/Router WiFi',W:15,kwhH:0.015},
  {nombre:'Laptop',W:65,kwhH:0.065},
  {nombre:'Computador de escritorio',W:200,kwhH:0.20},
  {nombre:'TV 42"',W:80,kwhH:0.08},
  {nombre:'TV 55"',W:120,kwhH:0.12},
  {nombre:'Cocina de inducción',W:2000,kwhH:2.00},
  {nombre:'Cafetera',W:1000,kwhH:1.00},
  {nombre:'Microondas',W:1200,kwhH:1.20},
  {nombre:'Lavadora*',W:500,kwhH:0.50},
  {nombre:'Secadora*',W:3000,kwhH:3.00},
  {nombre:'Congelador*',W:150,kwhH:0.15},
  {nombre:'Nevera 1 puerta*',W:200,kwhH:0.20},
  {nombre:'Nevera 2 puertas*',W:350,kwhH:0.35},
  {nombre:'A/C split 9000 BTU*',W:900,kwhH:0.90},
  {nombre:'A/C split 12000 BTU*',W:1200,kwhH:1.20},
  {nombre:'A/C split 18000 BTU*',W:1800,kwhH:1.80},
  {nombre:'A/C split 24000 BTU*',W:2400,kwhH:2.40},
  {nombre:'A/C split 36000 BTU*',W:3500,kwhH:3.50},
  {nombre:'A/C central 48000 BTU*',W:5000,kwhH:5.00},
  {nombre:'A/C central 60000 BTU*',W:6500,kwhH:6.50},
];

// Recomendaciones de sistemas para respaldo
const RECOMENDACIONES_BACKUP = [
  {min:1201,max:1500,sistemas:['OFF GRID = AIO 6KW - 15 kWh']},
  {min:1001,max:1200,sistemas:['OFF GRID = AIO 6KW - 15 kWh']},
  {min:901,max:1000,sistemas:['OFF GRID = BLUESUN 5KW + 4 PANELES','OFF GRID = AIO 6KW - 15 kWh']},
  {min:801,max:900,sistemas:['OFF GRID = BLUESUN 5KW','OFF GRID = AIO 6KW - 15 kWh','OFF GRID = SOSEN 5K']},
  {min:701,max:800,sistemas:['OFF GRID = BLUESUN 5KW','OFF GRID = AIO 6KW - 10 kWh','OFF GRID = SOSEN 5K']},
  {min:601,max:700,sistemas:['OFF GRID = BLUESUN 3KW','OFF GRID = AIO 6KW - 10 kWh','OFF GRID = SOSEN 5K']},
  {min:501,max:600,sistemas:['OFF GRID = BLUESUN 3KW','OFF GRID = SOSEN 5K']},
  {min:401,max:500,sistemas:['OFF GRID = BLUESUN 3KW','OFF GRID = SOSEN 5K']},
  {min:301,max:400,sistemas:['OFF GRID = BLUESUN 1KW']},
  {min:201,max:300,sistemas:['OFF GRID = BLUESUN 1KW']},
];

const HORAS_BACKUP = [0, 2, 4, 6, 8];

// Variables globales para la calculadora de respaldo
let backupSeleccion = new Array(EQUIPOS_BACKUP.length).fill(0);
let backupElementos = {};

// Inicializar calculadora de respaldo cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  inicializarBackupCalculator();
});

function inicializarBackupCalculator() {
  backupElementos = {
    toggleBtn: document.getElementById('backupToggleBtn'),
    modal: document.getElementById('backupModal'),
    closeBtn: document.getElementById('closeBackupModal'),
    tbody: document.getElementById('backupTbody'),
    total: document.getElementById('backupTotal'),
    recsList: document.getElementById('backupRecsList'),
    clearBtn: document.getElementById('btnBackupClear'),
    exportBtn: document.getElementById('btnBackupExport')
  };

  // Event listeners
  backupElementos.toggleBtn.addEventListener('click', mostrarModalBackup);
  backupElementos.closeBtn.addEventListener('click', cerrarModalBackup);
  backupElementos.clearBtn.addEventListener('click', limpiarSeleccionBackup);
  backupElementos.exportBtn.addEventListener('click', exportarCSVBackup);

  // Cerrar modal al hacer clic fuera
  backupElementos.modal.addEventListener('click', (e) => {
    if (e.target === backupElementos.modal) {
      cerrarModalBackup();
    }
  });

  // Cerrar modal con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backupElementos.modal.style.display === 'block') {
      cerrarModalBackup();
    }
  });

  // Renderizar tabla inicial
  renderBackupTable();
  actualizarTotalBackup();
}

function mostrarModalBackup(e) {
  e.preventDefault();
  backupElementos.modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function cerrarModalBackup() {
  backupElementos.modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function renderBackupTable() {
  backupElementos.tbody.innerHTML = '';
  
  EQUIPOS_BACKUP.forEach((equipo, index) => {
    const tr = document.createElement('tr');
    
    // Columna equipo
    const tdEquipo = document.createElement('td');
    tdEquipo.textContent = equipo.nombre;
    
    // Columna potencia
    const tdPotencia = document.createElement('td');
    tdPotencia.className = 'text-right';
    tdPotencia.textContent = formatearNumero(equipo.W, 0);
    
    // Columna consumo 1h
    const tdConsumo1h = document.createElement('td');
    tdConsumo1h.className = 'text-right backup-kwh-cell';
    tdConsumo1h.textContent = formatearNumero(equipo.kwhH, 3);
    
    // Columna horas
    const tdHoras = document.createElement('td');
    const horasContainer = document.createElement('div');
    horasContainer.className = 'backup-hours';
    
    HORAS_BACKUP.forEach(horas => {
      const label = document.createElement('label');
      label.className = 'backup-hour-chip';
      
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `backup-h-${index}`;
      input.value = horas;
      input.checked = horas === 0;
      
      const span = document.createElement('span');
      span.textContent = `${horas} h`;
      
      input.addEventListener('change', () => {
        backupSeleccion[index] = horas;
        actualizarFilaBackup(index);
        actualizarTotalBackup();
      });
      
      label.appendChild(input);
      label.appendChild(span);
      horasContainer.appendChild(label);
    });
    
    tdHoras.appendChild(horasContainer);
    
    // Columna consumo seleccionado
    const tdSeleccionado = document.createElement('td');
    tdSeleccionado.className = 'text-right backup-kwh-cell';
    tdSeleccionado.id = `backup-sel-${index}`;
    tdSeleccionado.textContent = formatearNumero(0, 2);
    
    tr.appendChild(tdEquipo);
    tr.appendChild(tdPotencia);
    tr.appendChild(tdConsumo1h);
    tr.appendChild(tdHoras);
    tr.appendChild(tdSeleccionado);
    
    backupElementos.tbody.appendChild(tr);
  });
}

function actualizarFilaBackup(index) {
  const kwh = EQUIPOS_BACKUP[index].kwhH * (backupSeleccion[index] || 0);
  const cell = document.getElementById(`backup-sel-${index}`);
  if (cell) {
    cell.textContent = formatearNumero(kwh, 2);
  }
}

function buscarRecsBackup(total) {
  return RECOMENDACIONES_BACKUP
    .filter(r => total >= r.min && total <= r.max)
    .flatMap(r => r.sistemas);
}

function renderRecsBackup(total) {
  const items = buscarRecsBackup(total);
  
  if (items.length > 0) {
    backupElementos.recsList.innerHTML = items
      .map(sistema => `<span class="backup-rec-pill">${sistema}</span>`)
      .join('');
  } else {
    backupElementos.recsList.innerHTML = 
      '<span style="color: var(--color-secondary);">No hay una recomendación directa para este total. Ajusta horas o consulta con un asesor.</span>';
  }
}

function actualizarTotalBackup() {
  const total = backupSeleccion.reduce((acc, horas, index) => {
    return acc + (EQUIPOS_BACKUP[index].kwhH * horas);
  }, 0);
  
  backupElementos.total.textContent = formatearNumero(total, 2);
  renderRecsBackup(total);
}

function limpiarSeleccionBackup() {
  backupSeleccion.fill(0);
  
  EQUIPOS_BACKUP.forEach((_, index) => {
    const radios = document.querySelectorAll(`input[name="backup-h-${index}"]`);
    radios.forEach(radio => {
      if (radio.value === '0') {
        radio.checked = true;
      }
    });
    actualizarFilaBackup(index);
  });
  
  actualizarTotalBackup();
}

function exportarCSVBackup() {
  const encabezado = ['Equipo', 'Potencia (W)', 'Consumo 1h (kWh)', 'Horas', 'Consumo equipo (kWh)'];
  
  const filas = EQUIPOS_BACKUP.map((equipo, index) => {
    const horas = backupSeleccion[index] || 0;
    const kwh = equipo.kwhH * horas;
    return [equipo.nombre, equipo.W, equipo.kwhH, horas, kwh];
  });
  
  const total = filas.reduce((acc, fila) => acc + Number(fila[4]), 0);
  filas.push(['TOTAL', '', '', '', total]);
  
  const csv = [encabezado, ...filas]
    .map(row => row.map(value => 
      typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value
    ).join(','))
    .join('\n');
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'respaldo_por_equipo.csv';
  a.click();
  
  URL.revokeObjectURL(url);
  mostrarNotificacion('📄 Archivo CSV exportado exitosamente', 'success');
}
