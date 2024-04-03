//Leia um número e mostre na tela se o número é positivo ou negativo.

import { get_number, verificar_par_impar } from "./utils/io_utils.js"

function main (){
    //entrada
    let numero = get_number('Digite um numero: ')

    //processamento / saida
    verificar_par_impar(numero)
}

main()
