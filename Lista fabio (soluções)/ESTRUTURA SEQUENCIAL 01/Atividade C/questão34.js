/*Leia 3 números, calcule e escreva a média dos números.*/

import { question } from "readline-sync"

//entrada
var num1 = Number(question('Digite o primeiro valor: '))
var num2 = Number(question('Digite o segundo valor: '))
var num3 = Number(question('Digite o terceiro valor: '))

//processamento
var media = (num1 + num2 + num3) / 3

//saida
console.log()
console.log("--------------------------")
console.log(`Valores: ${num1}, ${num2} e ${num3}`)
console.log(`Media: ${media}`)
