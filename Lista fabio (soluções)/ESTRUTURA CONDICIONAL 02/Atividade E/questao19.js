/*Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
(IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso
(IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).*/

import { get_number , print, calculo_imc} from "./utils/io_uils.js"

function main(){
    //entrada
    print('---------- IMC -------------')
    const altura = get_number('Altura(m): ')
    const peso = get_number('Peso (kg): ')

    //saida
    calculo_imc(altura, peso)
}

main()