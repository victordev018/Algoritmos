//Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.

import { get_number, print } from "./utils/io_utils.js"

function main(){
    let n = get_number('N: ')
    let c = 1

    let soma = 0
    let media = 0
    
    while (c <= n){
        let numero = get_number(`${c}° valor: `)
        soma += numero
        c++
    }
        media = soma / n
        print(`soma: ${soma} \nmedia: ${media}`)
}

main()