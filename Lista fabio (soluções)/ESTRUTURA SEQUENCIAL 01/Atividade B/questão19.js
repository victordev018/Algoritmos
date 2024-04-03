/*Leia o valor do raio de uma esfera, calcule e escreva
 seu volume. (v = (4 * p * r3) / 3) (p = 3,14)*/

 import { question } from "readline-sync"

 //entrada
var raio = Number(question('Informe o raio de uma esfera: '))
var pi = 3.14

 //processameto
var volume = (4*pi*raio**3)/3

 //saida

 console.log(`O volume dessa esfera equivale á: ${volume .toFixed(0)}`)