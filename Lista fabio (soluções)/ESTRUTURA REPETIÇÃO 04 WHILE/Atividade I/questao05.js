/*Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada
divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até
chegar a 2.*/

import { question } from "readline-sync"

function main(){
    let X = Number(question("X: "))
    let N = Number(question("N: "))

    while(N>2){
        let div = divisao_X_N(X,N)
        console.log(`a divisao entre ${X.toFixed(0)} e ${N.toFixed(0)} e: ${div .toFixed(0)}`)
        X = div
        N--
    }
}

function divisao_X_N(X,N){
    return X/N
}

main()