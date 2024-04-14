/*
Escreva um algoritmo que gere um número aleatório inteiro (utilize a função rand(): aleatorio = rand())
e solicite um número ao usuário. O objetivo é que o usuário acerte o número gerado. Se o número
digitado for menor que o gerado, escreva “Maior”, se for maior, escreva “Menor”, e solicite novamente
um número ao usuário. Repita este processo ate que o usuário acerte o número gerado. Após isso,
escreva em quantas tentativas o usuário acertou.
*/

import { get_number, print } from "./utils/io_utils.js"

function main(){
    //pedindo intervalo de 1 ate N
    const intervalo = get_number('Intervalo de 1 ate: ') 
    
    //pegando um numero aleatório dentro do intervalo solicitado
    let numSorteado = Math.floor(Math.random()*intervalo+1) 

    print('----> GAME ON <----')
    let palpite = get_number('1. palpite: ')
    let c = 1
    
    while(palpite != numSorteado){
        if (palpite < numSorteado){
            print('dica: Seu numero secreto e MAIOR')
        } else{
            print('dica: Seu numero secreto e MENOR')   
        }
        c++
        palpite = get_number(`${c}. palpite:`)
    }
    print('')
    print('---------------------------------')
    print('PARABEEEENS!!! VOCE ACERTOU!!!!!!')
    print(`quantidade de tentavtivas: ${c}`)
}

main()