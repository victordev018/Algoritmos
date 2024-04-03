//Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

import { question } from "readline-sync"

//entrada
var minutos = Number(question('DIgite um valor em minutos: '))

//processamneto
var valHoras = (minutos / 60)
var partIntHoras = Math.floor(valHoras)

var valMin = (valHoras - partIntHoras ) * 60

//saida
console.log(`O valor ${minutos} minutos equivale á ${partIntHoras} horas e ${valMin .toFixed(0)} minutos`)