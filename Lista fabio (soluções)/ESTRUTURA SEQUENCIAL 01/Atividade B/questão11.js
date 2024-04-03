/*Leia um número inteiro (3 dígitos) e escreva o inverso
 do número. (Ex.: número = 532 ; inverso = 235)*/

 import {question} from 'readline-sync'

 //entrada
 var numero = Number(question('Digite um numero inteiro de 3 digitos: '))

 //processamento
var centena = Math.floor(numero/100)
var dezena = Math.floor(((numero/100)%1)*10)
var unidade = Math.floor(((numero/10)%1)*10)

 //saida

 console.log()
 console.log('==========================')
 console.log(`inverso do valor: ${unidade} ${dezena} ${centena}`)
 