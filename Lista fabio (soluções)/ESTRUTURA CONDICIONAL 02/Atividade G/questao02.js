// Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.

import { get_number, verificar_sexo, get_string } from "./utils/io_utils.js"

function main (){
    //entrada
    const genero_sexual = get_string('Informe o sexo [F/M]: ')

    //processamento / saida
    verificar_sexo(genero_sexual)
}

main()
