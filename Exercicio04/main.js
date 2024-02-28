// Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true ou false.


let number = 4

let checkNumber = function checkNumber(number) {
  if (number % 3 == 0) {
    return true
  } else {
    return false
  }
}


console.log(checkNumber(number))