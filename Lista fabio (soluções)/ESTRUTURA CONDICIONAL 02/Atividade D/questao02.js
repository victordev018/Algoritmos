//Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

import {get_number, numero_maior_menor, print} from "../Atividade D/utils/io_utils.js"

function main (){
    //entrada
    let numero1 = get_number('Numero 1: ')
    let numero2 = get_number('Numero 2: ')

    //processamento
    const resultado = numero_maior_menor(numero1,numero2)

    //saida
    print(resultado)
}

main()