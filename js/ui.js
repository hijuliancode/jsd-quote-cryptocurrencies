class Interfaz {
  constructor() {
    this.init()
  }
  init() {
    api.obtenerMonedasAPI()
      .then(monedas => {
        for (const [key, value] of Object.entries(monedas.Data)) {
          console.log('Key => ', key)
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
}
