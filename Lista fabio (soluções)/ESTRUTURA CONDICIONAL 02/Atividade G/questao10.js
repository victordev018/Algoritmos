/*Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a
sua média. A atribuição de conceitos obedece à tabela abaixo:
Média de Aproveitamento Conceito
Entre 9.0 e 10.0 A
Entre 7.5 e 9.0 B
Entre 6.0 e 7.5 C
Entre 4.0 e 6.0 D
Entre 4.0 e zero E
O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem
“APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.*/

import { get_number, calcular_resultado_aluno } from "./utils/io_utils.js"

function main () {
    console.log('------------ NOTAS ------------')
    const nota1 = get_number('Nota 1: ')
    const nota2 = get_number('Nota 2: ')
    console.log('')

    //processamento
    const resultado = calcular_resultado_aluno(nota1, nota2) 

    //saida
    console.log('---------- RESULTADO ----------')
    console.log(` Nota 1: ${nota1} \n Nota 2: ${nota2} \n Media: ${resultado.media}`)
    console.log(` Situacao: ${resultado.situacao} \n Conceito: ${resultado.conceito} `)
}

main()

