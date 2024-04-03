/*Calcule a quantidade de dinheiro gasta por um fumante. 
Dados de entrada: o número de anos que ele fuma, o nº de 
cigarros fumados por dia e o preço de uma carteira 
(1 carteira tem 20 cigarros).*/

import { question } from "readline-sync"

//entrada
var numAno = Number(question('A quantos anos voce fuma? '))
var numCigDia = Number (question('Quantos cigarros voce fuma por dia? '))
var precoCig = Number(question('Qual o valor da carteira de cigarro? ')) 

//processamento

//numero de cigarros fumados por ano
var numCigAno = (numCigDia*(numAno*365))

//numero de carteira de cigarros nos anos que fumou
var numCartCig = Math.floor(numCigAno/20)

//dinheiro gasto em carteira de cigarros nesses anos
var valor = (numCartCig*precoCig)

//saida
console.log()
console.log("---------------------------------------------------------------------")
console.log(`Em ${numAno} anos voce fumou ${numCigDia} cigarros por dia, ${numCigAno} cigarros por ano, \n 
totalizando cerca de ${numCartCig} carteiras de cigarros por ano, custando cada uma R$ ${precoCig} reais \n
, o que sigmifica que voce gastou aproximadamente R$ ${valor} reais em carteiras de cigarros nesses anos.`)

