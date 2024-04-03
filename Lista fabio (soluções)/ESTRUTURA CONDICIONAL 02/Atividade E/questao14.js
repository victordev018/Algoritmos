//Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.

import{print, get_number, val_maior_media}from "./utils/io_uils.js"

function main(){
    //entrada
    let num1 = get_number('Numero 1: ')
    let num2 = get_number('Numero 2: ')
    let num3 = get_number('Numero 3: ')
    let num4 = get_number('Numero 4: ')
    let num5 = get_number('Numero 5: ')

    //processamento
    const media = (num1+ num2 + num3 + num4 + num5)/5

    //saida
    print("---------------------------------------")
    print(`Media: ${media}`)
    print('Numeros maiores que a media: ')
    val_maior_media(num1, num2, num3, num4, num5, media)
}

main()