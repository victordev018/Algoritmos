// Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o
// maior quadrado menor que 38 é 36 (quadrado de 6).

import {get_number} from "./utils/io_utils.js";

function main(){
    // solicitando o valor n
    let n = get_number("> informe o valor n: ");

    // enquanto o valor n não for um quadrado
    while (!eh_quadrado(n)) {
        // decrementa o n
        n--;
    }

    // exibe o maior quadrado menor ou igaul ao valor n informado
    console.log(`\n> o maior valor quadrado perfeito é ${n}\n`)
}

// funcção para verificar se um valor é um quadrado perfeito
function eh_quadrado(value){
    // se o resto da divisão da raiz quadrada do valor por 1 for igual a 0, significa que
    // o valor é um quadrado perfeito. 
    return Math.pow(value, 0.5) % 1 == 0;
}

main();