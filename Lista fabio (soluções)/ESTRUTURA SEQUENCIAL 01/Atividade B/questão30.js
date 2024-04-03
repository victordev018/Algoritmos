/*Leia um número inteiro de minutos, calcule e escreva 
quantos dias, quantas horas e quantos minutos ele corresponde.*/

import { question } from "readline-sync"

//entrada
var numero = Number(question('Informe um valor inteiro em minutos: '))

//processamneto
var dia = Math.floor(numero/1440)
var horas = Math.floor((numero - (dia*1440))/60)
var minutos = Math.floor((numero % 1440)*10)

//saida
console.log("=========================================")
console.log(`${numero} minutos corresponde a ${dia} dias, ${horas} horas e ${minutos} minutos!`)