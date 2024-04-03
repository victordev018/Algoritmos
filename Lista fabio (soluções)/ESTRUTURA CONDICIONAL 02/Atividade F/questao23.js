/*Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
recente.*/

import { get_number, print, data_mais_recente} from "./utils/io_utils.js"

function main (){
    //entrada 1
    print('---------------------')
    print('Informe a data 1: ')
    let dia1 = get_number('Dia: ')
    let mes1 = get_number('Mes: ')
    let ano1 = get_number('Ano: ')
    print("")
    //entrada 2
    print('---------------------')
    print('Informe a data 2: ')
    let dia2 = get_number('Dia: ')
    let mes2 = get_number('Mes: ')
    let ano2 = get_number('Ano: ')
    print('')

    //saida
    const resultado = data_mais_recente(dia1, mes1, ano1, dia2, mes2, ano2)
    print(resultado)
}

main()