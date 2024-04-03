/*Leia o valor da base e altura de um retângulo,
 calcule e escreva sua área. (área = base * altura)*/

 import { question } from "readline-sync"

 //entrada
var base = Number(question('Informe o valor da base de um retangulo: '))
var altura = Number(question('Informe o valor da altura de um retangulo: '))

 //processamneto
 var area = (base * altura)

 //saida
 console.log()
 console.log("=======================")
 console.log(`Base: ${base}`)
 console.log(`Altura: ${altura}`)
 console.log(`Area: ${area}`)