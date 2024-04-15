// Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
// (0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.

import { get_number } from "./utils/io_utils.js"


function main(){
    // pedir ao user quantidade de elementos da sequência de Fibonacci.
    let quantidade = get_number("> qunatidade de valores: ")

    let termo1 = 0
    let termo2 = 1
    let proximoTermo
    let reult = `${termo1}, ${termo2}`
    for (let i = 2; i <= quantidade - 1; i++){
        proximoTermo = termo1 + termo2
        termo1 = termo2
        termo2 = proximoTermo
        reult += `, ${proximoTermo}`
    }
    console.log(`\nSequencia Fibonacci: \n${reult}\n`)
    
}

main()