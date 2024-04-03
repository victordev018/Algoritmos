/*Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
não pode ser negativo.*/

import {get_number, print, descobrir_base,descobrir_altura, calcular_area} from "./utils/io_utils.js"

function main (){
    //entrada 
    print('Informe a primeira coordenada de um canto de um retangulo')
    let x1 = get_number('X1: ')
    let y1 = get_number('Y1: ')
    print('')

    print('Informe a segunda coordenada de um canto de um retangulo')
    let x2 = get_number('X2: ')
    let y2 = get_number('Y2: ')
    print('')

    //processamento
    const base = descobrir_base(x1, x2)
    const altura = descobrir_altura(y1, y2)
    const area = calcular_area(base, altura)

    //saida
    print(``)
    print(` base: ${base} \n altura: ${altura} \n area: ${area}`)
}

main()