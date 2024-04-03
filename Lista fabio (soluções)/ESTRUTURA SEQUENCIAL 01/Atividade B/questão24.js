/*Leia um valor em m, calcule e escreva o equivalente em cm.*/

import { question } from "readline-sync"

//entrada
var valmet = Number(question('Informe um valor em metros: '))

//processamento
var valCm = (valmet*100)

//saida
console.log(`O valor ${valmet} metros equivale a ${valCm} centimetros.`)