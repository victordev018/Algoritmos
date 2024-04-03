/*Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
contrario, é arredondado para o inteiro imediatamente inferior.*/

import { get_number, print, arredondar_numero } from "./utils/io_utils.js"

function main(){
    //entrada
    var numero = get_number('Digite um numero com parte fracionaria: ')

    //arredondamento
    let resultado = arredondar_numero(numero)

    //saida
    print(resultado)
    
}

main()