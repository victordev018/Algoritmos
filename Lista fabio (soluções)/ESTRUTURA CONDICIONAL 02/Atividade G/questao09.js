/*Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro
valor deve aparecer valor inválido.*/

import { get_number } from "./utils/io_utils.js"

function main (){
    //entrada 
    const numero = get_number('Digite um numero [1-7]: ')

    //processamento / saida
    verificar_dia_correspondente(numero)
}

main()

function verificar_dia_correspondente (dia){
    if (dia == 1){
        console.log(`Dia ${dia}, corresponde a Domingo na semana!`)
    } else if (dia == 2){
        console.log(`Dia ${dia}, corresponde a Segunda na semana!`)
    } else if (dia == 3){
        console.log(`Dia ${dia}, corresponde a Terca na semana!`)
    } else if (dia == 4){
        console.log(`Dia ${dia}, corresponde a Quarta na semana!`)
    } else if (dia == 5){
        console.log(`Dia ${dia}, corresponde a Quinta na semana!`)
    } else if (dia == 6){
        console.log(`Dia ${dia}, corresponde a sexta na semana!`)
    } else if (dia == 7){
        console.log(`Dia ${dia}, corresponde a Sabado na semana!`)
    } else { 
        console.log(`Dia ${dia}, nao corresponde a nenhum dia na semana!`)
    }
}