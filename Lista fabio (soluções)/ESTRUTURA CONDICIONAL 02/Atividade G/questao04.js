/*Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:
o "Aprovado", se a média alcançada for maior ou igual a sete;
o "Reprovado", se a média for menor do que sete;
o "Aprovado com Distinção", se a média for igual a dez.*/

import { get_number, verificar_stts_aluno } from "./utils/io_utils.js"

function main (){
    //entrada
    console.log("-------- NOTAS ----------")
    let nota1 = get_number('Nota 1: ')
    let nota2 = get_number('Nota 2: ')
    console.log("")

    //processamento
    verificar_stts_aluno(nota1, nota2)
}

main()