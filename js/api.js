class API {
  constructor(apikey) {
    this.apikey = apikey
  }
  // Obtener todas las monedas
  async obtenerMonedasAPI() {
    const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`
    const obtenerMonedas = await fetch(url)
    const monedas = await obtenerMonedas.json()
    return monedas
  }
  async obtenerValores(moneda, criptomoneda) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;

    const urlConvertir = fetch(url)
    const resultado = (await urlConvertir).json()
    return resultado
  }
}