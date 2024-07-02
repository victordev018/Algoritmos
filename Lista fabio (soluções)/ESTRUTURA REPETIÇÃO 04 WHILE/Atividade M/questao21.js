import { get_number } from "./utils/io_utils.js"

function main(){
    let n = get_number("quantidade: ")
    let soma = 0
    let contador = 1

    while (contador <= n){
        soma += (2 * contador - 1) / contador
        contador++
    }
    console.log(`\nSoma: ${soma}\n`)
}

main()