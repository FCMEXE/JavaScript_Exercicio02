/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus
lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes. Crie uma função que recebe os
comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. */

function capturarDados() {
  let valor1 = document.getElementById("lado1").value;
  let valor2 = document.getElementById("lado2").value;
  let valor3 = document.getElementById("lado3").value;



  function calcularOsLados(valor1, valor2, valor3) {
    if (valor1 === valor2 && valor2 === valor3) {
      return "Equilátero"
    } else if (valor1 === valor2 && valor1 != valor3 || valor1 === valor3 && valor1 != valor2 || valor2 === valor3 && valor2 != valor1) {
      return "Isósceles" // Essa lógica ficou uma bagunça,mas funciona!(viva a gabiarra)
    } else {
      return "Escaleno"
    }
  }
  let resposta = calcularOsLados(valor1, valor2, valor3)

  return alert("Voce digitou um triangulo:" + resposta);
}
