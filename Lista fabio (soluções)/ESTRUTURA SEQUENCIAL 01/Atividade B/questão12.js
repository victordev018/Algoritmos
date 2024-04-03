//Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

import { question } from "readline-sync"

//entrada
var salario = Number(question('Informe seu salario: '))

//processamneto
var novSalario = (salario * 1.25)

//saída
console.log()
console.log(`==============================`)
console.log(`salario inicial: ${salario}`)
console.log(`salario + 25%: ${novSalario}`)
