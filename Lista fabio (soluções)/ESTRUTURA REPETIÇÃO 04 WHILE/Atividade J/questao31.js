/*
Escreva um algoritmo que leia um número decimal (até 3 dígitos) e escreva o seu equivalente em
numeração romana. Utilize funções para obter cada dígito do número decimal e para a transformação
de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M).
*/

import { get_number, print, converter_centena_romana, converter_dezena_romana, converter_unidade_romana, get_str } from "./utils/io_utils.js"

function main(){
   
    let resposta = "S"

    while (resposta.toLocaleLowerCase() == "s"){
        //pedindo numero:
        let numero = get_number('numero (ate 3 digitos): ')

        //separando centena, dezena e unidade
        let centena = Math.floor(numero/100)
        let dezena = Math.floor((numero - (centena*100))/10)
        let unidade = numero - (centena*100 + dezena*10)
        
        //convertendo cada uma para algarismos romanos
        let centenaRomana = converter_centena_romana(centena)
        let dezenaRomana = converter_dezena_romana(dezena)
        let unidadeRomana = converter_unidade_romana(unidade)

        //juntando os valores
        let numeroRomano = centenaRomana+dezenaRomana+unidadeRomana
        
        //saida de dados:
        print(`-------------------------`)
        print(`numero decimal: ${numero}`)
        print(`numero roamno: ${numeroRomano}`)
        print('')

        resposta = get_str('Deseja continuar convertendo [S/N]? ')
    }
}


main()