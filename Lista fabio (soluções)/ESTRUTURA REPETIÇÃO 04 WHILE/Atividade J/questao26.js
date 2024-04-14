/*
Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião
em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e
a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1).
· a média das idades das pessoas que responderam ótimo;
· a quantidade de pessoas que respondeu regular;
· o percentual de pessoas que respondeu bom entre os entrevistados.
*/
import {get_number, print} from './utils/io_utils.js'

function main(){
    let contador_d_pessoas = 0
    print('------>>>>> CINEMA <<<<<<------')
    print('[1] - otimo \n[2] - bom \n[3] - regular \n[4] - pessimo')
    print(`1° pessoa:`)
    
    let idade = get_number('idade: ')
    let opniao
    let qtd_regular = 0
    let percentil_qtd_bom = 0
    let media_idade_otimo = 0
    let c = 0 //contador para n valores quando opnião == 1

    while (idade != -1) {
        let id = idade
        contador_d_pessoas++
        opniao = get_number('opniao: ')
    
        if(opniao == 3){
            qtd_regular++
        }else if (opniao == 2){
            percentil_qtd_bom++
        } else if (opniao == 1){
            media_idade_otimo += id
            c++
        }

        print(`${contador_d_pessoas}° pessoa:`)
        idade = get_number('idade: ')
    }

    media_idade_otimo = media_idade_otimo / c
    percentil_qtd_bom = Math.floor((percentil_qtd_bom/contador_d_pessoas)*100)

    const resultado = `
    
    >>> RESULTADOS <<<
    Media das idades  : ${media_idade_otimo}
    Quantidade regular: ${qtd_regular}
    % de respostas bom: ${percentil_qtd_bom}%
    `
    print(resultado)
}

main()