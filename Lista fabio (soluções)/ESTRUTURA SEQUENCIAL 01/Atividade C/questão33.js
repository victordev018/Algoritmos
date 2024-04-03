/*Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).*/

import { question } from "readline-sync"

//entrada
var numero =Number(question("Digite um valor inteiro de 3 digitos: "))

//processamento
var centena = Math.floor(numero/100)
var dezena = Math.floor(((numero/100) % 1 )*10)
var unidade = numero - ((centena*100) + (dezena*10))

var numeroInverso = (unidade*100) + (dezena*10) + unidade
var soma = numero + numeroInverso

//saida
console.log()
console.log('------------------------------')
console.log(`Numero digitado: ${numero}`)
console.log(`Numero inverso:  ${numeroInverso}`)
console.log(`Soma: ${numero}+${numeroInverso}`)
console.log(`RESULTADO: ${soma}`)

