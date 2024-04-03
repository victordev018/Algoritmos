/*Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o
coeficiente A deve ser diferente de 0 (zero).*/

import { get_number, calcular_delta, print, calcular_bhaskara } from "./utils/io_utils.js"

function main(){
    //entrada de dados
    let coeA = get_number('Coeficiente A: ')
    let coeB = get_number('Coeficiente B: ')
    let coeC = get_number('Coeficiente C: ')

    //processamento
    let delta = calcular_delta(coeA, coeB, coeC)

    //saida
    calcular_bhaskara(coeA, coeB, delta)
}

main()
