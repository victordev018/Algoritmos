/*Leia um valor em km, calcule e escreva o equivalente em m.*/

import { question } from "readline-sync"

//entrada
var valKm = Number(question('DIgite um valor em quilomentros: '))

//processamneto
var valmet = (valKm*1000)

//saida
console.log(`O valor ${valKm} km equivale a ${valmet} metros.`)