//Leia N e uma lista de N números e escreva o maior número da lista

import { get_number , print} from "./utils/io_utils.js"

function main(){
    let n = get_number('N: ')
    let maiorNum = 0
    let c = 1

    while (c<=n){
        let numero = get_number(`${c}° valor: `)
        maiorNum = numero>maiorNum? numero : maiorNum
        c++
    }
    print(`Maior numero: ${maiorNum}`)
}

main()