/*Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são
diferentes.*/

import { get_number, print, verificar_maior, verificar_menor } from "./utils/io_uils.js"

function main(){
    //entrada
    let num1 = get_number('Numero 1: ')
    let num2 = get_number('Numero 2: ')
    let num3 = get_number('Numero 3: ')
    let num4 = get_number('Numero 4: ')
    let num5 = get_number('Numero 5: ')

    //processamento
    const maior = verificar_maior(num1, num2, num3, num4, num5)
    const menor = verificar_menor(num1, num2, num3, num4, num5)

    //saida
    print(` Maior: ${maior} \n Menor: ${menor}`)
}

main()