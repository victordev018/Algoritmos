/*Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.*/

import { question } from "readline-sync"

//entrada
var numerodia = Number(question('Informe sua idade em dias: '))

//processamento
var anos = Math.floor(numerodia/365)
var meses = Math.floor((numerodia - (anos*365))/30)
var dias = (numerodia - (anos*365)) - (meses*30)

//saida
console.log("========================================================================")
console.log(`${numerodia} dias correspondem a ${anos} ano(s), ${meses} mes(es) e ${dias} dia(s)`)