const api = new API('dac5a3161605252d9ce45adae9ffe9bb062389b1669df314fac46ae067825851')
const ui = new Interfaz()

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
    ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center')
  } else {
    api.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
      .then(resultado => {
        console.log(resultado)
      })
  }
})
