//Leia um número e escreva se o número é inteiro ou decimal.

import { get_number, verificar_int_dec } from "./utils/io_utils.js"

function main (){
    //entrada
    let numero = get_number('Dingite um numero: ')

    //processamento e saida
    verificar_int_dec(numero)
}

main()