//Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo

import { get_number, print, verificar_numero_primo} from "./utils/io_utils.js"

function main(){
    //entrada
    const numero = get_number('Informe um numero entre 0 e 100: ')

    //processamneto
    if (numero >= 1){
        if (verificar_numero_primo(numero)){
            print(`O numero ${numero} e um numero primo!`)
        } else{
            print(`O numero ${numero} nao e um numero primo!`)
        }
    } else{
        print('O numero nao esta no intervalo solicitado...')
    }
}

main()