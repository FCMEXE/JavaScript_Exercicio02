// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.


let CapitalInicial = 1000
let TaxaJuros = 0.10 // 10% ao ano
let TempoAplicação = 5
let Captalização = 12


function JurosSimples(CapitalInicial, TaxaJuros, TempoAplicação) {
  let juros = CapitalInicial * TaxaJuros * TempoAplicação;

  return juros.toFixed(2);
}

let juros = JurosSimples(CapitalInicial, TaxaJuros, TempoAplicação);
console.log("Juros Simples: R$:" + juros)


function JurosComposto(CapitalInicial, TaxaJuros, TempoAplicação, Captalização) {
  let TaxaDecimal = TaxaJuros / 100;
  let periodosAnos = TempoAplicação / Captalização

  let banca = CapitalInicial * Math.pow(1 + (TaxaDecimal / Captalização), Captalização * TempoAplicação)
  return banca.toFixed(2);
}

let banca = JurosComposto(CapitalInicial, TaxaJuros, TempoAplicação, Captalização)
console.log("Banca acumulada: R$:" + banca)



