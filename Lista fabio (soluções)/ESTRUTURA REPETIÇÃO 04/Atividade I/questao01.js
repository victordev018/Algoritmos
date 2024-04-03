/*Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus
divisores. (flag número = 0).*/

import { get_number, print } from "./io_utils/utils.js";

function main(){
    let numero = get_number("Numero: ")
    let divisores   
    while(numero != 0){ 
        divisores = numero

        while(divisores > 0){
            if(numero % divisores == 0){
                console.log(divisores)
            }
            divisores--
        }

        numero = get_number('Numero: ')
    }
}

main()