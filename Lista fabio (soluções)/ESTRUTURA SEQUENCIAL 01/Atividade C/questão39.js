//Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
// D = (R+S)/2; onde :  R = (A+B)**2 e S = (B+C)**2

import { question } from "readline-sync"

//entrada
var A = Number(question('Informe o valor A: '))
var B = Number(question('Informe o valor B: '))
var C = Number(question('Informe o valor C: '))

//processamento
var R = (A+B)**2
var S = (B+C)**2
var D = (R+S)/2

//saida
console.log()
console.log(`O resultado da expressão: D = (R + S)/2 = ${D}`)

