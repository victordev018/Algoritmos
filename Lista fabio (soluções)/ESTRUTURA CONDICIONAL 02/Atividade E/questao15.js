/*Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
Escreva na tela qual dos professores tem salário total maior.*/

import { get_number, print, qual_ganha_mais} from "./utils/io_uils.js"

function main(){
    print('----- Informe a quantidade de horas aulas-------')
    const qtdhorap1 = get_number('Professor 1: ')
    const qtdhorap2 = get_number('Professor 2: ')
    print('')
    print('----- Informe o valor por horas aulas-------')
    const valorp1 = get_number('Peofessor 1: ')
    const valorp2 = get_number('Peofessor 2: ')
    print('')

    //processamento
    const resultado = qual_ganha_mais(qtdhorap1, qtdhorap2, valorp1, valorp2)

    //saida
    print(resultado)
}

main()