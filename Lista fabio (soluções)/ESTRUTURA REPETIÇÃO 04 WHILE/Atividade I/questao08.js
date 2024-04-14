/*Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo
quando a soma de dois números consecutivos da lista for igual a X.*/

import { question } from "readline-sync"

function main(){
    let X = Number(question('X: '))

    let number1 = Number(question('numero 1: '))
    let number2 = Number(question('numero 2: '))
    let soma = number1 + number2

    while(soma!=X){
        number1 = Number(question('numero 1: '))
        number2 = Number(question('numero 2: '))
        soma = number1 + number2  
    }
    console.log(`A soma de ${number1} + ${number2} = ${soma} = X, programa finalizado...`)
}

main()
