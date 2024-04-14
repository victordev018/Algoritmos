/*
Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos.
*/

import { get_number, eh_divisor, print } from "./io_utils/utils.js"

function main(){
    let val_a = get_number('A: ')
    let val_b = get_number('B: ')
    let mdc = 0
        if (val_a>val_b){
            mdc = val_a
        }else{
            mdc = val_b
        }
    while(!(eh_divisor(mdc,val_a) && eh_divisor(mdc,val_b))){
        mdc--
    }
    print(`O mdc entre ${val_a} e ${val_b}, e: ${mdc}`)
}

main()