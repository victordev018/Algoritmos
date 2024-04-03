/*Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a
cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o
valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da
mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00.
Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas
prestações, de acordo com as regras acima.*/

import { question } from "readline-sync"

//entrada
var valorMec = Number(question('Informe o valor da meracadoria: '))

//processamento1
var entrada = 1/3 * valorMec
var parcela1 = 1/3 * valorMec
var parcela2 = 1/3 * valorMec

//saida1
console.log()
console.log('----------------------------------------------------------')
console.log('Para esta compra o pagamento pode ser da seguinte maneira:')
console.log(`Entrada  : R$ ${entrada .toFixed(2)}`)
console.log(`Parcela 1: R$ ${parcela1 .toFixed(2)}`)
console.log(`Parcela 2: R$ ${parcela2 .toFixed(2)}`)
console.log('----------------------------------------------------------')
console.log()

//processamento2
var pergunta = question('Deseja dar uma entrada maior? [S/N]')
console.log()

//saida2
if (pergunta === "S"){
    var entrada = Number(question('Informe o novo valor de entrada: '))
    var parcela1 = (valorMec - entrada)/2
    var parcela2 = (valorMec - entrada)/2
    console.log()
    console.log('----------------------------------------------------------')
    console.log('Para esta compra o pagamento pode ser da seguinte maneira:')
    console.log(`Entrada  : R$ ${entrada .toFixed(2)}`)
    console.log(`Parcela 1: R$ ${parcela1 .toFixed(2)}`)
    console.log(`Parcela 2: R$ ${parcela2 .toFixed(2)}`)
    console.log('----------------------------------------------------------')
    console.log()
} else{
    console.log(`Ok, permanecem os mesmos valores!`)
}

