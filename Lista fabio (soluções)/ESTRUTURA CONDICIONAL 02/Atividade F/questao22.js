/*Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
seguinte.*/

import { get_number, print, duracao_jogo } from "./utils/io_utils.js"

function main (){
    print('------------------------------------')
    //hora de inicio:
    print('Informe o horario de inicio do jogo: ')
    let horaInicio = get_number('Hora: ')
    let minInicio = get_number('Minuto: ')
    print("")
    //hora final:
    print('Informe o horario de final do jogo: ')
    let horaFinal = get_number('Hora: ')
    let minFinal = get_number('Minuto: ')

    //saida
    duracao_jogo(horaInicio, minInicio, horaFinal, minFinal)
}

main()