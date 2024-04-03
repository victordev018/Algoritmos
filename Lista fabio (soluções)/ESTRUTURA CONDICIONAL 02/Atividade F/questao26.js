//Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.

import { get_number,print, identificar_cats_hipt } from "./utils/io_utils.js"

function main (){
    print('Informe os lados de um triangulo qualquer:')
    //entrada
    const lado1 = get_number('Lado 1: ')
    const lado2 = get_number('Lado 2: ')
    const lado3 = get_number('Lado 3: ')

    //saida
    identificar_cats_hipt(lado1, lado2, lado3)
}

main()