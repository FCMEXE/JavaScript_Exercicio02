// Escreva uma função que recebe um vetor de números inteiros e mostre como resultado qual é o menor e qual é o maior número.


var numbers = Array = [2, 5, 2, 5, 7, 8, 9, 13, 54, 45, 89]


function checkNumbers(numbers) {

  let MaxNumber = Math.max(...numbers)
  let MinNumbers = Math.min(...numbers)

  return console.log("Valor Maximo: " + "" + MaxNumber + "," + "Já esse o menor: " + MinNumbers)
}

console.log(checkNumbers(numbers))