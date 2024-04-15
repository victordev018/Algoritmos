// Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o
// maior quadrado menor que 38 é 36 (quadrado de 6).

import { get_number } from "./utils/io_utils.js"

function main(){
    let N = get_number("\n> N value: ")
    let quadPerfect = 0

    for (let c = N; quadPerfect == 0; c-- ){
        if ( (c**0.5) % 1 == 0 ){ // se o resto da divisão da raiz quadrada de C por 1 for igual a 0,
            quadPerfect = c              // então C é um quadrado perfeito.
        }
    }
    console.log(`O quadrado mais proximo: ${quadPerfect}\n`)
}

main()