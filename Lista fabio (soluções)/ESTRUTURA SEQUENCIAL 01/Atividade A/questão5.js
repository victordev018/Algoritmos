//Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

import { question } from "readline-sync"

//entrada
var numero = Number(question('Digite uma numero inteiro de 3 digitos: '))

//processamneto
var centena = Math.floor(numero/100)
var dezena = Math.floor(((numero/100)%1)*10)
var unidade = Math.floor(((numero/10)%1)*10)
var soma = (centena+dezena+unidade)
//saida
console.log()
console.log("=======================================================")
console.log(`Numero digitado: ${numero}`)
console.log(`Soma de seus elementos: ${centena}+${dezena}+${unidade}`)
console.log(`Resultado da soma: ${soma}`)