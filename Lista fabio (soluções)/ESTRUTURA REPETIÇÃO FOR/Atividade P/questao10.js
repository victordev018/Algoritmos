// Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.
import { get_number } from "./utils/io_utils.js"

function main(){
    let limiteInferior = get_number("limite inferior: ")
    let limiteSuperior = get_number("limite superior: ")

    console.log("Impares")
    for (let c = limiteInferior; c <= limiteSuperior; c++){
        if (c % 2 != 0){
            console.log(c)
        }
    }
}

main()