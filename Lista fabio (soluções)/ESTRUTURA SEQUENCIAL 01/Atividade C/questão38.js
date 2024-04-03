/*Leia 2 (duas) frações (numerador e denominador), calcule e escreva a 
soma destas frações, escrevendo o resultado em forma de fração.*/

import { question } from "readline-sync"

//entrada
console.log('Informe os valores de duas fracoes [numerador/denominador:]')
console.log('-----------------------------------------------------------')
console.log('Primeira fração:')
var numerador1 = Number(question('Numerador: '))
var denominador1 = Number(question('Denominador: '))

console.log('Segunda fração:')
var numerador2 = Number(question('Numerador: '))
var denominador2 = Number(question('Denominador: '))

//processamento
var numeradorNovo = denominador2 * numerador1 + denominador1 * numerador2
var denominadorNovo = denominador1 * denominador2

//saida
console.log()
console.log()
console.log("=================================")
console.log(`Fração 1: ${numerador1}/${denominador1}`)
console.log(`Fração 2: ${numerador2}/${denominador2}`)
console.log(`Soma das fracoes = ${numeradorNovo}/${denominadorNovo}`)
