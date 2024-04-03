//Leia 1 (um) número inteiro e escreva se este número é par ou impar.

import { get_number, print, verificar_par_impar } from "./utils/io_uils.js"

function main(){
    //entrada
    const number = get_number('Diite um numero: ')

    //processamento
    const resultado = verificar_par_impar(number)

    //saida
    print(resultado)
}

main()