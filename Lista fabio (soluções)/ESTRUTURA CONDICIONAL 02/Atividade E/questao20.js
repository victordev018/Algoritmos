/*Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
quarto) em que o ângulo se localiza.*/

import { get_number, verificar_quadrante, print } from "./utils/io_uils.js"

function main(){
    //entrada
    const angulo = get_number('Informe um angulo (0 a 360): ')

    //processamento
    const resultado = verificar_quadrante(angulo)

    //saida
    print(resultado)
}

main()