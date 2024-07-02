// Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
// (0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.

import { get_number } from "./utils/io_utils.js";

function main(){

    // solicitando quantidade de termos para o usuário
    var quantidade_termos = get_number("\n> quantidade de termos: ");

    // verificação se a quantidade informada é válida
    if (quantidade_termos < 2){
        console.log("! a quantidade tem que ser maior que 2 !");
    }
    else{
        let termo1 = 0;
        let termo2 = 1;
        let proximo_termo;
        let sequencia = `${termo1}, ${termo2}`;
        let termo_atual = 2;

        while (termo_atual < quantidade_termos){
            proximo_termo = termo1 + termo2;
            termo1 = termo2;
            termo2 = proximo_termo;
            sequencia += `, ${proximo_termo}`;
            termo_atual++;
        }

        // exibição da sequência de Fibinacci com n termos
        console.log(`\n> sequência: ${sequencia}\n`) 
    }

}

main();