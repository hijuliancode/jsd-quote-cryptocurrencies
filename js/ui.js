class Interfaz {
  constructor() {
    this.init()
  }
  init() {
    api.obtenerMonedasAPI()
      .then(monedas => {
        // crear un select de opciones
        const selectCriptomoneda = document.getElementById('criptomoneda')
        // iterar por los resultados de la api
        for (const [key, value] of Object.entries(monedas.Data)) {
          // añadir el Symbol y el nombre como opciones
          const option = document.createElement('option')
          option.value = value.Symbol
          option.appendChild(document.createTextNode(value.CoinName))
          // Insertar la nueva opción en el select
          selectCriptomoneda.appendChild(option)
        }
      })
  }
  mostrarMensaje(mensaje, clases) {
    const div = document.createElement('div')
    div.className = clases
    div.appendChild(document.createTextNode(mensaje))

    // mensajes container
    const mensajes = document.querySelector('.mensajes')
    mensajes.appendChild(div);

    // Desaparecer mensaje
    setTimeout(() => {
      mensajes.querySelector('div').remove()
    }, 3000);
  }
  // Imprime el resultado de la cotización
  mostrarResultado(resultado, moneda, crypto) {
    const datosMoneda = resultado[crypto][moneda]
    const { FROMSYMBOL, TOSYMBOL, PRICE } = datosMoneda
    console.log('moneda', moneda)
    console.log('crypto', crypto)

    // Construir el template
    let template = `
      <div class="card bg-warning">
        <div class="card-body text-light">
          <h2 class="card-title">Resultado:</h2>
          <p>El precio de ${FROMSYMBOL} a moneda ${TOSYMBOL} es de $ ${PRICE.toFixed(2)}</p>
        </div>
      </div>
    `
    // Insertar Resultado
    document.getElementById('resultado').innerHTML = template
  }
}
