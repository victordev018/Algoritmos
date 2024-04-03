/*Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu
nascimento e a data (dia, mês e ano) atual.*/

import { get_number, print, calcular_idade } from "./utils/io_utils.js"

function main(){
    //data de nasc...
    print('Data de nascimento no formato YYYY-MM-DD:')
    const dataNas = get_number('data: ')
    print('')

    //data atual...
    const dataAtual = new Date()
    print('')

    //processamento
    const idade = calcular_idade(dataNas, dataAtual)

    //saida
    print(`Idade: ${idade.anos} anos ${idade.meses} meses e ${idade.dias} dias `)
}


main()