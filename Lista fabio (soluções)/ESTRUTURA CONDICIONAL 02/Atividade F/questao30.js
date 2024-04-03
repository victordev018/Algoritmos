/*Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos
o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo
milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste
terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
2025 -> dividindo: 20 e 25 -> somando temos 45 -> 45² = 2025.*/

import { get_number, print, div_somar_elequad_igual_origin } from "./utils/io_utils.js"

function main (){
    //entrada
    const numero = get_number('Digite um numero entre 1000 e 9999: ')

    //processamento
    var resultado = div_somar_elequad_igual_origin(numero)

    //saida
    print(resultado)
}

main()