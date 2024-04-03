/*Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos).*/

import { get_number, print,calcular_idade_anos } from "./utils/io_utils.js"

function main(){
    //entrada
    print('--- Data atual ---')
    const atualDia = get_number('Dia: ')
    const atualMes = get_number('Mes: ')
    const atualAno = get_number('Ano: ')

    print()  
    print('--- Data Nasc...---')  
    const nasDia = get_number('Dia: ')
    const nasMes = get_number('Mes: ')
    const nasAno = get_number('Ano: ')

    //processamento
    const idadeAnos = calcular_idade_anos(atualDia,atualMes,atualAno,nasDia,nasMes,nasAno)

    //saida
    print(idadeAnos)

}

main()