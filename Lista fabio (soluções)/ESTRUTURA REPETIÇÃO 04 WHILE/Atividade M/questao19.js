import {get_number}from "./utils/io_utils.js"

function main(){
    // informar o valor de n:
    let n = get_number("> enter a value n: ")
    let sinal = 1
    let soma = 0
    let contador = 0

    while (contador <= n -1){
        
        let valor_a_somar = 0;
        if (contador % 2 == 0){
            valor_a_somar = ((1 + contador)/ (n - contador)) * sinal
        }
        else{
            valor_a_somar = ((n - (1 + contador))/(1 + contador)) * sinal
        }
        soma += valor_a_somar;
        sinal = sinal * -1;
        contador++
    }

    console.log(soma)

}
main()