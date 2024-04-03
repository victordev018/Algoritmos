/*Leia uma temperatura em °F, calcule e escreva a 
equivalente em °C. (t°C = (5 * t°F - 160) / 9).*/

import {question} from "readline-sync"

 //entrada
 var tempF = Number(question('Informe uma temperantura em F: '))

 //processamneto
 var tempC = (5 * tempF - 160) / 9

 //saida
 console.log(`O valor da temperatura ${tempF} F equivale a ${tempC .toFixed(0)} C`)