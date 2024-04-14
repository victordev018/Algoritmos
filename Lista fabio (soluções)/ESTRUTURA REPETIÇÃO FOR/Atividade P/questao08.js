// Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.

import { get_number } from "./utils/io_utils.js"

function main(){
    let N = get_number("N value: ")
    let limiteInferior = get_number("Limite inferior: ")
    let limiteSuperior = get_number("Limite superior: ")

    for (let c = limiteInferior; c <= limiteSuperior; c++){
        if (c % N == 0){
            console.log(c)
        }
    }
}

main()