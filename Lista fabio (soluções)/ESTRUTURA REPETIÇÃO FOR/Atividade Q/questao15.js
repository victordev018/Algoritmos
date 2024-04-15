// Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).

import { get_number } from "./utils/io_utils.js"

function main(){
    // informar a qunatidade de termos da sequência.
    let qunatidade = get_number("> quantidade de termos: ")
    let elemneto = 1
    let razao = 2
    let result = `${elemneto}`

    for (let i = 1; i <= qunatidade -1 ; i++){
        elemneto += razao
        result += `, ${elemneto}`
        razao++ 
    }

    console.log(result)
}

main()