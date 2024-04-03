/*Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas
formadas pelos seus dois primeiros e dois últimos dígitos.
Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.
Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.*/

import { get_number, separar_dezenas, print, verificar_quadrado_perfeito } from "./utils/io_utils.js"

function main (){
    //entrada
    const numero = get_number('Digite um numero de quatro digitos que tenha raiz quadrada:')

    //processamento
    let dezenas = separar_dezenas(numero)
    let resultado = verificar_quadrado_perfeito(numero, dezenas)

    //saida
    print(resultado)
}

main()