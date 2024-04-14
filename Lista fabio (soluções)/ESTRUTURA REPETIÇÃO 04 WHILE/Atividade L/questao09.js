//Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos.

import {get_number} from "./utils/io_utils.js"

function main(){
    let limiteInferior = get_number("limite inferior: ")
    let limiteSuperior = get_number("limite superior: ")

    while(limiteInferior <= limiteSuperior){
        if (eh_par(limiteInferior)){
            console.log(limiteInferior)
        }
        limiteInferior++
    }
}

function eh_par(l){
    if (l % 2 == 0){
        return true
    } else{
        return false
    }
     
} 

main()