class API {
  constructor(apikey) {
    this.apikey = apikey
    this.URL_API = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${apikey}`
  }
  // Obtener todas las monedas
  async obtenerMonedasAPI() {
    const obtenerMonedas = await fetch(this.URL_API)
    const monedas = await obtenerMonedas.json()
    return monedas
  }
}