import {get_number}from "./utils/io_utils.js"

function main(){
    // informar o valor de n:
    let n = get_number("> enter a value n: ")
    let sinal = 1
    let soma = 0

    for (let i = 0; i <= n-1 ; i++){
        
        let valor_a_somar = 0;
        if (i % 2 == 0){
            valor_a_somar = ((1 + i)/ (n - i)) * sinal
        }
        else{
            valor_a_somar = ((n - (1 + i))/(1 + i)) * sinal
        }
        soma += valor_a_somar;
        console.log(`Adicionando ${valor_a_somar}. Total: ${soma}.`);
        sinal = sinal * -1;
    }

    console.log(soma)

}
main()