/*Leia um número inteiro de segundos, calcule e escreva 
quantas horas, quantos minutos e quantos segundos ele corresponde.*/

import { question } from "readline-sync"

//entrada
var numero = Number (question('Informe um valor inteiro em segundos'))

//processamento
var horas = Math.floor(numero / 3600)
var minutos = (numero/60) 
var segundos = numero
//saida
console.log(`${numero} minutos corresponde a ${horas} horas, ${minutos} minutos e ${segundos} segundos`)
