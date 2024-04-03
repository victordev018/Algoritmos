/*Leia um número inteiro de dias, calcule e escreva
 quantas semanas e quantos dias ele corresponde.*/

 import { question } from "readline-sync"

 //entrada
var numero = Number(question('Informe uma numero inteiro de dias: '))

 //processamento
var semana = Math.floor(numero / 7)
var dias = numero - (semana*7)

 //saida
 console.log()
 console.log("==============================================")
 console.log(`${numero} dias correspondem a ${semana} semanas e ${dias} dias`)