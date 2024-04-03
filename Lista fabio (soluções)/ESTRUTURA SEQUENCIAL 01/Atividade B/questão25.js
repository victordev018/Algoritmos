/*Leia um número inteiro de metros, calcule e 
escreva quantos Km e quantos metros ele corresponde.*/

import { question } from "readline-sync"

//entrada
var numero = Number(question('Informe um valor inteiro de metros: '))

//processamneto
var valkm = Math.floor(numero / 1000)
var valmet = Math.floor(((numero / 1000)%1)*1000)

//saida
console.log()
console.log("==================================================")
console.log(`${numero} metros eqivale a ${valkm} km e ${valmet} metros`)