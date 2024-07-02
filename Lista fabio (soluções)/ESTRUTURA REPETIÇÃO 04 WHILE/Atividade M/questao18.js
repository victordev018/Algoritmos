import { get_number } from "./utils/io_utils.js";

function main(){
    // solicitando o valor de n
    let n = get_number("\n> informe o valor n: ");
    let numerador = 1;
    let denominador = n;
    let fracao;
    let resultado = 0;

    // enquanto o denominador não chegar ao valor 1
    while (denominador >= 1){
        fracao = numerador / denominador;
        resultado += fracao;
        numerador++;
        denominador--;
    }
    
    // exibindo o valor do resultado
    console.log(`\n> resultado: ${resultado}\n`);
}

main();