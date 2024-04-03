/*Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo
Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.*/

import { question } from "readline-sync"

//entrada
var a = Number(question('a: '))
var b = Number(question('b: '))
var c = Number(question('c: '))
var d = Number(question('d: '))
var e = Number(question('e: '))
var f = Number(question('f: '))

//processamento
const x = ((c*e)-(b*f)) / ((a*e)-(b*d))
const y = ((a*f)-(c*d)) / ((a*e)-(b*d))

//saida
console.log (` X e igual a: ${x}; \n Y e igual a: ${y}.`)

