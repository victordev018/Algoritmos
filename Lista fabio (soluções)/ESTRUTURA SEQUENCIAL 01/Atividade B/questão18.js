/*Leia o valor do raio de uma circunferência, 
calcule e escreva seu comprimento.(c = 2 * p * r)*/

import {question} from 'readline-sync'

//entrada
var raio = Number(question('Informe o valor do raio: '))
var pi = 3.14

//processamneto
var comprimento = (2*pi*raio)

//saida
console.log(`O valor do comprimento é ${comprimento .toFixed(0)}`)