//Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.

import { get_number, print } from "./utils/io_utils.js"

function main(){
    let limiteInferior = get_number("limite inferior: ")
    let limiteSuperior = get_number("limite superior: ")

    while (limiteInferior <= limiteSuperior){
        if (verificar_numero_primo(limiteInferior)){
            print(limiteInferior)
        }
        limiteInferior++
    }
}

function verificar_numero_primo(numero){
    if (numero == 1){
        return false
    } else if (numero ==2 || numero==3){
        return true
    } else if ((numero % 2)==0 || (numero % 3)==0){
        return false
    } else{
        return true
    }
}
main()