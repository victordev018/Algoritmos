/*Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos.*/

import { get_number, print, operacoes } from "./utils/io_uils.js"

function main(){
    //entrada
    const number1 = get_number('Numero 1: ')
    const number2 = get_number('Numero 2: ')

    //escolha de operação:
    let resultado = operacoes(number1, number2)

    //saida de dados
    print(resultado)
}

main()
