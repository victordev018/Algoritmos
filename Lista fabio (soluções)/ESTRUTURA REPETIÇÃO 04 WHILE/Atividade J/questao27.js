/*
Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino,
2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva:
· Média de idade das mulheres;
· Média de idade dos homens;
· O percentual de homens solteiros;
· O percentual de mulheres solteiras;
· A quantidade de mulheres divorciadas acima de 30 anos.
*/
import {get_number, print} from './utils/io_utils.js'
function main(){
    let qtd_max = 100
    let qtd_entrevistado = 0

    //informações de cada entrevistado:
    let sexo = 0
    let idade = 0
    let estado_civil = 0

    //percentis e quantidades:
    let percent_homem_solteiro = 0
    let percent_mulheres_solteiras = 0
    let qtd_mulher_divorciada_mais_de30 = 0
    //medias:
    let md_idade_mulher = 0
    let contador_mulher = 0
    let md_idade_homem = 0
    let contador_homem = 0

    while ( qtd_entrevistado < qtd_max){
        qtd_entrevistado++
        print('')
        print(`${qtd_entrevistado}. entrevistado:`)
        sexo = get_number('sexo [1- masculino, 2- feminino]: ')
        idade = get_number('idade: ')
        estado_civil = get_number('[1=Casado, 2=Solteiro, 3=Divorciado, 4=Viuvo]: ')

        //para media das idades:
        if(sexo == 2){
            md_idade_mulher += idade
            contador_mulher++
        }else{
            md_idade_homem += idade
            contador_homem++
        }

        //para percentis e quantidades:
        if (sexo == 1 && estado_civil == 2){
            percent_homem_solteiro++
        }else if(sexo == 2 && estado_civil == 2){
            percent_mulheres_solteiras++
        }else if (sexo == 2 && estado_civil == 3 && idade > 30){
            qtd_mulher_divorciada_mais_de30++
        }
        
    }

    //calculando medias e percentos
    percent_homem_solteiro = percent_homem_solteiro/qtd_entrevistado *100
    percent_mulheres_solteiras = percent_mulheres_solteiras/qtd_entrevistado *100
    //medias
    md_idade_homem /= contador_homem
    md_idade_mulher /= contador_mulher

    //saida
    const resultado = `

    ------------------------------------------------------------------------------
    · Média de idade das mulheres:  ${md_idade_mulher .toFixed(1)}
    · Média de idade dos homens:  ${md_idade_homem .toFixed(1)}
    · O percentual de homens solteiros:  ${percent_homem_solteiro .toFixed(1)} %
    · O percentual de mulheres solteiras:  ${percent_mulheres_solteiras .toFixed(1)} %
    · A quantidade de mulheres divorciadas acima de 30 anos: ${qtd_mulher_divorciada_mais_de30}`

    print(resultado)
}

main()