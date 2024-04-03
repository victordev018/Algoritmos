/*Leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do
número. Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplos:
o 326 = 3 centenas, 2 dezenas e 6 unidades
o 12 = 1 dezena e 2 unidades*/

import { get_number, separar_cent_dez_uni } from "./utils/io_utils.js"

function main () {
    //entrada
    console.log('-------- Informe um numero inteiro menor que 1000 --------')
    let numero = get_number('numero: ')

    //processamento
    separar_cent_dez_uni(numero)
}

main()