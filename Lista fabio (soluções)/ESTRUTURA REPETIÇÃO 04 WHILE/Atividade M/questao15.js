// Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).

import {get_number} from './utils/io_utils.js';

function main(){
    // solicitando valor n para o usuário
    let n_termos = get_number("\n> quantidade de termos: ");

    
    // variável que armazena o valor do elemento atual da sequência, começa valendo 1
    let elemento_atual = 1;
    
    // variável que guarda a razão atual, que começa valendo 2
    let razao_atual = 2;
    
    // string que guardará a sequencia final, que inicia-se com o primeiro elemento
    let sequencia_final = String(elemento_atual);

    // contador de termos
    let termo_atual = 1;

    // enquanto o tamanho da string que guarda a sequência for menor que o numero de termos
    while (termo_atual < n_termos){
        // atualiza o elememto atual
        elemento_atual += razao_atual;
        // atualiza a string com o novo elemento atual
        sequencia_final += String(", " + elemento_atual);
        // incrementa a razão
        razao_atual++;
        // incrementa o termo atual
        termo_atual++;
    }

    // imprime a sequência de termos
    console.log(`\n> sequência: ${sequencia_final}\n`)

}

main();