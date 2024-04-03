/*Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
critério da distribuição ótima.*/

import { question } from "readline-sync"

//entrada
console.log('-----------------------')
console.log('NOTAS DISPONIVEIS: \n R$ 50 \n R$ 10 \n R$ 5 \n R$ 1')
console.log('-----------------------')
console.log()

var valor = Number(question('Por favor informe o valor do saque: '))

//processamento
var nota50 = Math.floor(valor/50)
var nota10 = Math.floor((valor - (nota50*50))/10)
var nota5 = Math.floor((valor - ((nota10*10) + (nota50*50)))/5)
var nota1 = valor - ((nota50*50) + (nota10*10) + (nota5*5))

//saida
console.log()
console.log(`---------------------------------------------------------------`)
console.log(`o valor R$ ${valor} reais sera distribuido da seguinte maneira:`)
console.log()
console.log(` ${nota50} cedulas de R$ 50 \n ${nota10} cedulas de R$ 10 \n ${nota5} cedulas de R$ 5 \n ${nota1} cedulas de R$ 1`)

