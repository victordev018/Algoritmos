/*Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é
sempre pelo mais barato.*/

import { get_number, verificar_mais_barato } from "./utils/io_utils.js"

function main (){
    //entrada
    console.log('---- Informe o preco de 3 produtos -----')
    let prod1 = get_number('Produto 1: R$ ')
    let prod2 = get_number('Produto 2: R$ ')
    let prod3 = get_number('Produto 3: R$ ')
    console.log('')

    //processamento / saida
    verificar_mais_barato(prod1, prod2, prod3)
}

main()