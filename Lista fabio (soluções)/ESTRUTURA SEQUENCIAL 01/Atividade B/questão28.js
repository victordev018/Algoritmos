/*Leia um número inteiro de horas, calcule e escreva quantas semanas, 
quantos dias e quantas horas ele corresponde.*/

import { question } from "readline-sync"

//entrada
var numero = Number(question('Informe um valor inteiro em horas: '))

//processamneto
var semana = Math.floor(numero/168)
var dias = Math.floor(numero/24)
var horas = numero

//saida
console.log()
console.log("===========================================================")
console.log(`${numero} horas corresponde a ${semana} semanas, ${dias} dias e ${horas} horas.`)
