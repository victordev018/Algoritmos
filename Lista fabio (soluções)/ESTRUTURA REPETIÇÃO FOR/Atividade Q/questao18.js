import { get_number } from "./utils/io_utils.js"

function main(){
    // lendo valor de N:
    let n = get_number("> N value: ")
    let soma = 0
    let j = n
    for (let c = 1; c <= n; c++){
        soma += c/j
        j--
    }
    console.log(`Soma: ${soma}`)
}

main()