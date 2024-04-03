/*O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
escreva o custo ao consumidor.*/

import { question } from "readline-sync"

//entrada
var custoFab = Number(question('Qual o preco de fabrica deste carro? ')) 

//processamento
const custoCons = custoFab + ((0.28*custoFab) + (0.45*custoFab))

//saida
console.log()
console.log("================================================================================")
console.log(`O custo do consumidor ficara R$ ${custoCons} reais com os percentuais aplicados!`)

