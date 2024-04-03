//Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

import { question } from "readline-sync"

//entrada
var nota1 = Number(question('Digite a primeira nota: '))
var peso1 = Number(question('Digite a peso da nota: '))
var nota2 = Number(question('Digite a segunda nota: '))
var peso2 = Number(question('Digite a peso da nota: '))
var nota3 = Number(question('Digite a terceira nota: '))
var peso3 = Number(question('Digite a peso da nota: '))
//processamento
var media = ((nota1*peso1) + (nota2*peso2) + (nota3*peso3))/ peso1+peso2+peso3

//saida
console.log()
console.log("========================================")
console.log(`A media ponderada das notas equivale á: ${media .toFixed(2)}`)
