/*Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
número = 9534 ; soma = 9+5+3+4 = 21.*/

import{question} from 'readline-sync'

//entrada
var numero = Number(question('DIgite um numero inteiro (4 digitos): '))

//processamento
var milhar = Math.floor(numero/1000)
var centena = Math.floor(((numero/1000)%1)*10)
var dezena = Math.floor(((numero/100)%1)*10)
var unidade = numero - ((milhar*1000 + (centena*100) + dezena*10))
var soma = (milhar + centena + dezena + unidade)

//saida
console.log()
console.log(`=============================================`)
console.log(`Elementos do numero: ${milhar}, ${centena}, ${dezena} e ${unidade}`)
console.log(`Soma dos elementos: ${milhar}+${centena}+${dezena}+${unidade} = ${soma}`)