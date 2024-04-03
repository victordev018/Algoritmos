/*Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
pelo usuário.*/

import { question } from "readline-sync"

//entrada
var latao = Number(question('Informe a quantidade de latao em kg: '))

//processamento
var cobre = (0.7 * latao)
var zinco = (0.30 * latao)

//saida
console.log(`Para ${latao} quilogramas de latao, faz se necessario ${cobre} kd de cobre e ${zinco} kg de zinco.`)