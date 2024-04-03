/*Leia o valor da base e altura de um triângulo, 
calcule e escreva sua área. (área=(base * altura)/2)*/

import { question } from "readline-sync"

//entrada
var base = Number(question('Informe o valor da base de um triangulo: '))
var altura = Number(question('Informe o valor da altura de um triangulo: '))

//processamento
var area = (base * altura)/2

//saida
console.log()
console.log("=======================")
console.log(`Base: ${base}`)
console.log(`Altura: ${altura}`)
console.log(`Area: ${area}`)
