//Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.

import {get_number,verificar_data, print} from "./utils/io_utils.js"

function main (){
    //entrada
    print("------INFORME DATA------")
    const dia = get_number('dia: ') 
    const mes = get_number('mes: ') 
    const ano = get_number('ano: ') 

    //processamento
    if (verificar_data(dia, mes, ano)){
        print(`A data ${dia}/${mes}/${ano} e valida!`)
    } else{
        print(`A data ${dia}/${mes}/${ano} nao e valida!`)
    }

}

main()