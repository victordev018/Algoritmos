//Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

import { question } from "readline-sync"

//entrada
var velocidade_kmh = Number(question('Digite uma velocidade em km/h: '))

//processamento
var velocidade_ms = velocidade_kmh / 3.6

//saida
console.log(`A velocidade ${velocidade_kmh} km/h equivale á ${velocidade_ms .toFixed(0)} m/s`)