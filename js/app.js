// Fomulario
const formulario = document.getElementById('formulario')
const moneda = document.getElementById('moneda')
const criptomoneda = document.getElementById('criptomoneda')


formulario.addEventListener('submit', e => {
  e.preventDefault()
  const monedaSeleccionada = moneda.options[moneda.selectedIndex].value
  const criptoMonedaSeleccionada = criptomoneda.options[criptomoneda.selectedIndex].value

  // Comprobar que monedas hayan sido seleccionadas
  if ( !monedaSeleccionada || !criptoMonedaSeleccionada ) {
    // alerta de error
  } else {
    // todo bien, consultar la api
  }
})