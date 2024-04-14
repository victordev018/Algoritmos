// Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.

import { get_number } from "./utils/io_utils.js"

function main(){
    let N = get_number("> N value: ")
    let soma = 0
    let media = 0
    
    for (let c = 1; c <= N; c++){
        let number = get_number(`> ${c} value: `)
        soma += number
    }
    media = soma/N
    const result = `
    \nSoma: ${soma}
    \nMedia: ${media.toFixed(2)}\n`

    console.log(result)
}

main()