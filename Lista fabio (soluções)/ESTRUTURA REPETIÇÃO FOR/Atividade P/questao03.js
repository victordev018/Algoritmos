//  Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
//  Aritmética que tem por valor inicial A0 e razão R.

import { get_number } from "./utils/io_utils.js"

function main(){
    let a0 = get_number("A0: ")
    let limite = get_number("limite: ")
    let razao = get_number("razao: ")

    console.log("Progressao Aritimetica: ")
    for (let i = a0; i <= limite; i += razao){
        console.log(i)
    }
    
}



main()