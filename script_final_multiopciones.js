
// =======================
// ✅ FUNCIONES MODIFICADAS PARA SOPORTE MULTI-OPCIONES
// =======================

// NUEVA FUNCIÓN PARA OBTENER TODAS LAS OPCIONES DISPONIBLES EN EL RANGO
function encontrarSistemasRecomendados(consumo) {
  return SISTEMAS_MARRIOTT.filter(sistema => consumo >= sistema.rangoMin && consumo <= sistema.rangoMax);
}

// FUNCIÓN CALCULAR AHORRO MODIFICADA
async function calcularAhorro() {
  if (!validarFormulario()) return;

  const nombre = elementos.nombre.value.trim();
  const tipoCliente = elementos.tipoCliente.value;
  const celular = elementos.celular.value.trim();
  const email = elementos.email.value.trim();
  const ciudad = elementos.ciudad.value.trim();
  const consumo = Number.parseFloat(elementos.consumoMensual.value);

  // Obtener todas las opciones disponibles
  const sistemasRecomendados = encontrarSistemasRecomendados(consumo);
  const sistemaPrincipal = sistemasRecomendados.length > 0 ? sistemasRecomendados[0] : null;

  // Cálculos de costos
  const costoMensualSinSFV = calcularCostoProgresivo(consumo);
  const consumoAnualSinSFV = consumo * 12;
  const costoAnualSinSFV = costoMensualSinSFV * 12;

  let ahorroMensual = 0;
  let ahorroAnual = 0;
  let ahorroAnualPorcentaje = 0;
  let tiempoRetorno = 0;
  let nuevoConsumoMensual = consumo;
  let nuevoCostoMensualSFV = costoMensualSinSFV;

  if (sistemaPrincipal && (sistemaPrincipal.tipo === "ON_GRID" || sistemaPrincipal.tipo === "HIBRIDO")) {
    nuevoConsumoMensual = Math.max(0, consumo - sistemaPrincipal.produccionMensual);
    nuevoCostoMensualSFV = calcularCostoProgresivo(nuevoConsumoMensual);
    ahorroMensual = costoMensualSinSFV - nuevoCostoMensualSFV;
    ahorroAnual = ahorroMensual * 12;
    ahorroAnualPorcentaje = costoAnualSinSFV > 0 ? (ahorroAnual / costoAnualSinSFV) * 100 : 0;
    const precioInversion = sistemaPrincipal.precioConIVA || sistemaPrincipal.precio;
    tiempoRetorno = ahorroAnual > 0 ? precioInversion / ahorroAnual : 0;
  }

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
    sistemas: sistemasRecomendados
  };

  await enviarDatosAPowerAutomate(datosCalculados);
  mostrarResultados(datosCalculados);
}

// FUNCIÓN MOSTRAR RESULTADOS MODIFICADA
function mostrarResultados(datos) {
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
  `;

  elementos.contenedorAhorro.innerHTML = "";
  elementos.contenedorRespaldo.innerHTML = "";
  elementos.contenedorHibrido.innerHTML = "";

  const opciones = datos.sistemas;
  if (!opciones || opciones.length === 0) {
    elementos.contenedorHibrido.innerHTML = "<p>No hay sistemas recomendados para este rango de consumo.</p>";
    return;
  }

  let cardsHTML = "<div class='results-grid'>";
  opciones.forEach((sistema, index) => {
    cardsHTML += `
      <div class="result-card">
        <div class="card-header">
          <h3><i class="fas fa-solar-panel"></i> Opción ${index + 1}</h3>
        </div>
        <div class="card-content">
          <div class="result-item"><span>Sistema:</span><span><strong>${sistema.nombre}</strong></span></div>
          <div class="result-item"><span>Tipo:</span><span>${sistema.tipo.replace('_',' ')}</span></div>
          <div class="result-item"><span>Potencia:</span><span>${sistema.potencia} kW</span></div>
          <div class="result-item"><span>Inversión:</span><span class="cost-primary">${formatearMoneda(sistema.precioConIVA || sistema.precio)}</span></div>
          <div class="result-item"><span>Producción mensual:</span><span>${formatearNumero(sistema.produccionMensual,0)} kWh</span></div>
          <div class="result-item"><span>Cantidad de paneles:</span><span>${sistema.cantidadPaneles <= 4 ? "No requerido" : sistema.cantidadPaneles + " unidades"}</span></div>
          <div class="result-item"><span>Área requerida:</span><span>${formatearNumero(sistema.areaRequerida)} m²</span></div>
        </div>
      </div>`;
  });
  cardsHTML += "</div>";

  elementos.contenedorHibrido.innerHTML = cardsHTML;
  elementos.contenedorHibrido.style.display = "block";
  elementos.resultados.style.display = "block";
  elementos.resultados.scrollIntoView({ behavior: "smooth", block: "start" });
}
