// Leia um número, calcule e escreva seu fatorial.

import { get_number } from "./utils/io_utils.js"

function main(){
    let numero = get_number("numero: ")
    let fatorial = numero

    if (numero == 0){
        fatorial = 1 // se o numero for 0, seu fatorial sempre será 1
    }
    else{
        for (let i = 1; i <= numero; i++){
            numero--
            fatorial *= numero
        }
    }
    
    console.log(fatorial)
}

main()