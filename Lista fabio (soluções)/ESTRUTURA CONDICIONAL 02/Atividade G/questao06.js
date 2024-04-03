/*Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e
escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.*/

import { get_string, saudacao_por_turno} from "./utils/io_utils.js"

function main (){
    //entrada
    console.log('---- INforme o turno de em que voce estuda [M , V ou N] ----')
    const turno = get_string('Turno: ')
    console.log("")

    //processamento / saida
    saudacao_por_turno(turno)
}

main()