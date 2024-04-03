/*Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.*/

import { question } from "readline-sync"

//entrada
var numero = Number(question('Informe um valor inteiro em meses'))

//processamneto
var anos = Math.floor(numero/24)
var meses = numero- (anos*24)

//saida
console.log()
console.log("============================================")
console.log(`${numero} meses corresponde a ${anos} anos e ${meses} meses!`)

