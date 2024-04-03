/*Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)*/

import { question } from "readline-sync"

//entrada
var velocidade_ms = Number(question('Digite uma velocidade em m/s: '))

//processamento
var velocidade_kmh = velocidade_ms * 3.6

//saida
console.log(`A velocidade ${velocidade_ms} m/s equivale á ${velocidade_kmh} km/h`)
