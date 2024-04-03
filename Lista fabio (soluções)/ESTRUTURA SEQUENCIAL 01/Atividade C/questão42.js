/*Escreva um algoritmo que, tendo como dados de entrada 2 pontos 
quaisquer no plano, ponto1 (x1,y1) e ponto2 (x2,y2), escreva a 
distância entre eles, conforme fórmula abaixo.*/

import{question} from 'readline-sync'

//entrada
var x1 = Number(question('x1: '))
var y1 = Number(question('y1: '))
var x2 = Number(question('x2: '))
var y2 = Number(question('x2: '))

//processamento
var quadrados = ((x2-x1)**2) + ((y2-y1)**2)
var distancia = Math.sqrt(quadrados)

//saida
console.log(`A distancia entre os pontos e igual a: ${distancia .toFixed(0)}`)
