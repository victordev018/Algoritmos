//Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

import { question } from "readline-sync"

//entrada
var valHoras = Number(question('Digite um valor em horas: '))
var valMin = Number(question('Digite um valor em minutos: '))

//processamneto
 var totMinutos = (valHoras * 60) + valMin 

//saida
console.log(`Dos valores informados, resultam em ${totMinutos} minutos`)