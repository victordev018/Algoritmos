/*Faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
a) "Telefonou para a vítima ?"
b) "Esteve no local do crime ?"
c) "Mora perto da vítima ?"
d) "Devia para a vítima ?"
e) "Já trabalhou com a vítima ?"
O algoritmo deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa
responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como
"Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".*/

import {classificatorio_participacao, get_string } from "./utils/io_utils.js"

function main () {
    //entrada
    console.log('----- INTERROGATORIO - Responda [S/N] -----')
    const p1 = get_string("Telefonou para a vitima ? ")
    const p2 = get_string("Esteve no local do crime ? ")
    const p3 = get_string("Mora perto da vitima ? ")
    const p4 = get_string("Devia para a vitima ? ")
    const p5 = get_string("Ja trabalhou com a vitima ? ")

    //processamento
    classificatorio_participacao(p1, p2, p3, p4, p5)
}

main()