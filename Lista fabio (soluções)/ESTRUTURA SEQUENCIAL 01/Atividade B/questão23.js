/*Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).*/

import { question } from "readline-sync"

//entrada
var valKg = Number(question('Informe um valor em quilograma: '))

//processamneto
var valGrama = (valKg*1000)

//saida
console.log(`O valor ${valKg} kg equivale a ${valGrama} gramas.`)