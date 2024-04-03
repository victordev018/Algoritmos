//Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.

import { question } from "readline-sync"

//entrada
var num1 = Number(question('Digite o primeiro valor: '))
var num2 = Number(question('Digite o segundo valor: '))

//processamneto
var soma = (num1 + num2)
var sub = (num1 - num2)
var div = (soma / sub)

//saída
console.log()
console.log("========================")
console.log(`soma: ${num1} + ${num2} = ${soma}`)
console.log(`sub: ${num1} - ${num2} = ${sub}`)
console.log(`div: ${soma} / ${sub} = ${div}`)

