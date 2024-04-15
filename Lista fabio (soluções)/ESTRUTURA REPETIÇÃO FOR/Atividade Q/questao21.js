import { get_number } from "./utils/io_utils.js"

function main(){
    let n = get_number("qquantidade: ")
    let soma = 0

    for (let c = 1; c <= n; c++){
        soma += (2 * c - 1) / c
    }
    console.log(`\nSoma: ${soma}\n`)
}

main()