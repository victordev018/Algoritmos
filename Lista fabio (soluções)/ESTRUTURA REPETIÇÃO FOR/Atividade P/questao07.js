// Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.

import { get_number } from "./utils/io_utils.js"

function main(){
    let n = get_number("N value: ")
    let soma = 0
    console.log("valores: ")
    for (let i = 1; i <= n; i++){
        console.log(`${i}`)
        soma += i
    }
    console.log(`Soma: ${soma}`)
}

main()