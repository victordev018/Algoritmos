// Leia N e uma lista de N números e escreva o maior número da lista.

import { get_number } from "./utils/io_utils.js"

function main(){
    let N = get_number("N value: ")
    let maior = 0

    for (let c = 1; c <= N; c++){
        let value = get_number(`> ${c} value: `)
        if (value > maior){
            maior = value
        }
    }

    console.log(`Maior: ${maior}`)
}

main()