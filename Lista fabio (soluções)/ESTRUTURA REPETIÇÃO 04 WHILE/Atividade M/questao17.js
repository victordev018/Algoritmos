import { get_number } from "./utils/io_utils.js";

function main(){
    // solicitando o valor de n
    let n = get_number("\n> informe o valor n: ");

    // variável que guardará o resultado da expressão 
    let resultado = 0;

    let contador = 1;

    // enquanto o contador não chegar ao valor de n
    while (contador <= n){
        resultado += 1/contador;
        contador++;
    }

    // exibindo o valor do resultado
    console.log(`\n> resultado: ${resultado}\n`);
}

main();