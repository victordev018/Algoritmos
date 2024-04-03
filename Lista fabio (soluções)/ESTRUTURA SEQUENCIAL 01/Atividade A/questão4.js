//Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).

import { question } from "readline-sync"

//entrada
var cotaDolar = Number(question('Informe a cotacao do dolar: '))
var valDolar = Number(question('Digite um valor em dolar: '))

//processamneto
var valReal = valDolar * cotaDolar

//saida
console.log(`O valor $ ${valDolar} dolares equivale a R$ ${valReal .toFixed(2)} reais`)