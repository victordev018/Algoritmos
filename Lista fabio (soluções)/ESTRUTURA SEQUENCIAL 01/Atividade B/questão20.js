/*Leia uma temperatura em °C, calcule e escreva a equivalente
 em °F. (t°F = (9 * t°C + 160) / 5)*/

 import {question} from "readline-sync"

 //entrada
 var tempC = Number(question('Informe uma temperantura em C: '))

 //processamneto
 var tempF = (9 * tempC + 160) / 5

 //saida
 console.log(`O valor da temperatura ${tempC} C equivale a ${tempF .toFixed(0)} F`)