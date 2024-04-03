//Leia um valor em real (R$), calcule e escreva 70% deste valor.

import { question } from "readline-sync"

//entrada
var valor = Number(question('informe um valor em R$: '))

//processamneto
var novoVal = (valor * 0.70)

//saída
console.log()
console.log("==============================")
console.log(`70% de ${valor} equivale á ${novoVal}`)