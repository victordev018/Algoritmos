//Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

import { question } from "readline-sync"

//entrada
var num1 = Number(question('Digite o primeiro valor: '))
var num2 = Number(question('Digite o segundo valor: '))
var num3 = Number(question('Digite o terceiro valor: '))

//processamneto
var soma = (num1 + num2)
var dif = (num2 - num3)

//saida
console.log()
console.log("===========================")
console.log(`A soma entre ${num1} e ${num2} é igaul a ${soma}`)
console.log(`A diferença entre ${num2} e ${num3} é igaul a ${dif}`)