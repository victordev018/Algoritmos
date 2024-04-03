/*Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1
escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor
são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4
divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação
escreva o quadrado dos números lidos.*/

import {get_number, print, quando_resto_1, quando_resto_2, quando_resto_3, quando_resto_4, quando_resto_5} from './utils/io_uils.js' 

function main(){
    //entrada de dados
    let number1 = get_number('Numero 1: ')
    let number2 = get_number('Numero 2: ')

    //resto
    const resto = number1 % number2

    //condicionais:
    if (resto === 1){
        //soma e resto
        quando_resto_1(number1, number2, resto)
    } else if (resto === 2){
        //par ou impar
        quando_resto_2(number1, number2)
    } else if (resto === 3){
        //multiplicar soma dos valores pelo primeiro
        quando_resto_3(number1, number2)
    } else if (resto === 4 ){
        //divida a soma dos números lidos pelo segundo
        quando_resto_4(number1, number2)
    } else{
        //quadrado dos numeros lidos
        quando_resto_5(number1, number2)
    }
}

main()







