//Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

import {get_number, maior_numero, print} from "../Atividade D/utils/io_utils.js"

function main(){
    //entrada
    let numero1 = get_number('Numero 1: ')
    let numero2 = get_number('Numero 2: ')
    let numero3 = get_number('Numero 3: ')

    //processamneto
    let resultado = maior_numero(numero1, numero2, numero3)

    //saida
    print(`Maior: ${resultado}`)
}

main()