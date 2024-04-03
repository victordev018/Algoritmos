/*Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.*/

import {get_number, separar_dezena, seprar_unidade, dezena_igual_unidade, print} from '../Atividade D/utils/io_utils.js'

function main (){
    //entrada
    let numero = get_number('Informe um numero de dois digitos: ')

    //processamneto
    let dezena = separar_dezena(numero)
    let unidade = seprar_unidade(numero)

    //condição dezena igual ou ão da uidade
    let resultado = dezena_igual_unidade(dezena,unidade)

    //saida
    print(resultado)
}

main()

