//Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.

import{question} from 'readline-sync'

//entrada
var num1 = Number(question('Digite um valor: '))
var num2 = Number(question('Digite outro valor: '))

//processamento
var quociente = Math.floor(num1 / num2)
var resto = (num1 % num2)

//saida
console.log()
console.log(`========================`)
console.log(`Quociente: ${quociente}`)
console.log(`Resto: ${resto}`)