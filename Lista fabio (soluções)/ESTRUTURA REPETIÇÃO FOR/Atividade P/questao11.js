// Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.
import { get_number } from "./utils/io_utils.js"

function main(){
    let limiteInferior = get_number("limite inferior: ")
    let limiteSuperior = get_number("limite superior: ")

    console.log("Primos")

    for (let c = limiteInferior; c <= limiteSuperior; c++){
        if (c == 2){
            console.log(c)
        }
        else if (c == 3){
            console.log(c)
        }
        else if (c % 2 != 0 && c % 3 != 0 && c % 5 != 0){
            console.log(c)
        }
    }
}

main()