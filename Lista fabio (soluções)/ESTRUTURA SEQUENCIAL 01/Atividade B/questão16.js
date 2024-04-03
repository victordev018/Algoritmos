/*Leia o valor do lado de um quadrado, 
calcule e escreva sua área. (área = lado2)*/

import { question } from "readline-sync"

//entrada
var valLado = Number(question('Informe o valor do lado de um quadrado qualquer: '))

//processamento
var area = (valLado**2)

//saida
console.log()
console.log("=======================")
console.log(`Lado: ${valLado}`)
console.log(`Area: ${area}`)
