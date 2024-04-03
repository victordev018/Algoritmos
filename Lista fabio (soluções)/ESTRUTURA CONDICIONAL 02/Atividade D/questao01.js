//Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

import {get_number, numeros_iguais, print} from "../Atividade D/utils/io_utils.js"

function main (){
   //entrada
    let numero1 = get_number('Numero 1: ') 
    let numero2 = get_number('Numero 2: ') 
    let numero3 = get_number('Numero 3: ')
    
    //processamento
    let resultado = numeros_iguais(numero1,numero2,numero3)

    //saida
    print(resultado)
}

main()

