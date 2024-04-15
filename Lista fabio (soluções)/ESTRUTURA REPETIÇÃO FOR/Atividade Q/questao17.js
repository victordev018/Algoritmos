import { get_number } from "./utils/io_utils.js"

function main(){
    // lendo valor de N:
    let n = get_number("> N value: ")
    let soma = 0

    for (let i = 1; i <= n; i++){
        soma += 1/i
    }
    console.log(`Soma: ${soma}`)
}

main()