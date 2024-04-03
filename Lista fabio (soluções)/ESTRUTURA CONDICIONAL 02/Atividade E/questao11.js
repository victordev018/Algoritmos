/*Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3.*/

import { get_number, escolha_opcao, print } from "./utils/io_uils.js"

function main (){
    //entrada
    let num1 = get_number('Numero 1: ')
    let num2 = get_number('Numero 2: ')
    let num3 = get_number('Numero 3: ')
    const opcao = get_number('Escolha uma opcao: [1, 2, 3]')
    
    //processamento
    let resultado = escolha_opcao(num1, num2, num3, opcao)

    //saida
    print(`Opcao ${opcao}= ${resultado}`)

}

main()