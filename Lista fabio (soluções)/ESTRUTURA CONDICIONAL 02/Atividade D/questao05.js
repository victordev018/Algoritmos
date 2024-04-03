//Leia 3 (três) números e escreva-os em ordem crescente.

import { get_number, print, maior_numero, numero_meio, numero_menor} from "../Atividade D/utils/io_utils.js"

function main(){
    //entrada
    let number1 = get_number('Numero 1: ')
    let number2 = get_number('Numero 2: ')
    let number3 = get_number('Numero 3: ')

    //procesamento
    const maior = maior_numero(number1, number2, number3)
    const meio = numero_meio (number1, number2, number3)
    const menor = numero_menor (number1, number2, number3)

    //saida de dados
    const resultado = `${menor}, ${meio}, ${maior}`
    print(resultado)
}

main()