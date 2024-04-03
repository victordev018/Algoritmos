//Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.

import { get_number } from "./utils/io_utils.js"

function main(){
    let limiteInferior = get_number("limite inferior: ")
    let limiteSuperior = get_number("limite superior: ")

    while(limiteInferior <= limiteSuperior){
        if (eh_ipar(limiteInferior)){
            console.log(limiteInferior)
        }
        limiteInferior++
    }
}

function eh_ipar(l){
    if (l % 2 != 0){
        return true
    } else{
        return false
    }
     
} 

main()