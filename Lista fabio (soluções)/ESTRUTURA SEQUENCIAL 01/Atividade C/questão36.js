/*Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.*/

import { question } from "readline-sync"

//entrada
console.log('---------------------------------------')
console.log('Informe sua idade em anos, meses e dias')
var anos = Number(question('Anos:'))
var meses = Number(question('Meses:'))
var dias = Number(question('Dias:'))

//processamento
var anos_dia = anos*365
var meses_dia = meses*30

var idade = (dias + anos_dia + meses_dia)

//saida
console.log()
console.log('------------------------------------------')
console.log(`Anos => dias: ${anos} = ${anos_dia}`)
console.log(`Meses => dias: ${meses} = ${meses_dia}`)
console.log(`Sua idade em dias é igaul a ${idade} dias!`)