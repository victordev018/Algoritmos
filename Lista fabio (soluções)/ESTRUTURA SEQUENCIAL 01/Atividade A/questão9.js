//Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).

import{question} from "readline-sync"

//entrada
var num1 = Number(question('DIgite o primeiro numero: '))
var num2 = Number(question('DIgite o segundo numero: '))

//processamento
var ordem1 = `(${num1}, ${num2})`
var ordem2 = `(${num2}, ${num1})`

//saída
console.log(`=======================`)
console.log(`ordem normal: ${ordem1}`)
console.log(`ordem inversa: ${ordem2}`)
