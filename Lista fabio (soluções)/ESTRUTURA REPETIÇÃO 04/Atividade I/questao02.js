/*Leia 2 (dois) números, calcule e escreva o mmc (mínimo múltiplo comum) entre os números lidos.*/

import { get_number, print, eh_multiplo } from "./io_utils/utils.js"

function main(){
    let val_a = get_number("A: ")
    let val_b = get_number("B: ")

    let mmc = 1
    while(!(eh_multiplo(mmc,val_a) && eh_multiplo(mmc, val_b))){
        mmc++
    }
    print(`O mmc de ${val_a} e ${val_b} e ${mmc}`)
}

main()