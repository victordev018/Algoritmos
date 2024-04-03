/*Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
uma mensagem de permissão de acesso ou não.*/

import { get_number, print, verificar_senha } from "./utils/io_utils.js"

function main (){
    //entrada de senha
    print('-----------------------------')
    print('Sua senha de cagstro: 1234')
    print('')
    let senha = get_number('Informe sua senha: ')

    //saida
    verificar_senha(senha)
}

main()