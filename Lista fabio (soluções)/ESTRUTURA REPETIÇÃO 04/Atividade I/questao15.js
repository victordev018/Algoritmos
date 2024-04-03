/*
Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária
e na base hexadecimal.
*/
import {get_number,print, converter_dec_para_bin, converter_dec_para_hex} from './io_utils/utils.js'

function main(){

    //entrada de dados...
    let numeroBInario
    let numeroHexadecimal
    let numero = get_number('numero (0 a 255): ')

    //verificação e trabalho...
    if (numero >= 0 && numero <= 255){
        numeroBInario = converter_dec_para_bin(numero)
        numeroHexadecimal = converter_dec_para_hex(numero)
    }else{
        print('numero fora do intervalo solicitado!')
    }
    
    //saida de dados...
    const resultado = `
    >>> RESULATDO <<<
    num dec: ${numero}
    num bin: ${numeroBInario}
    num hex: ${numeroHexadecimal}
    `
    print(resultado)
}

main()